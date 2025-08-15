// app/api/contact/route.ts
import { NextResponse } from "next/server";

const BASE = process.env.GHL_API_BASE!;
const TOKEN = process.env.GHL_TOKEN!;
const VERSION = process.env.GHL_API_VERSION || "2021-07-28";

async function upsertContact({ firstName, lastName, email, phone }: {
  firstName: string; lastName?: string; email?: string; phone?: string;
}) {
  const res = await fetch(`${BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
      "Version": VERSION
    },
    body: JSON.stringify({ firstName, lastName, email, phone })
  });
  if (!res.ok) throw new Error(`Upsert failed: ${res.status} ${await res.text()}`);
  const data = await res.json();
  // API typically returns contact object or id; normalize:
  const contactId = data?.contact?.id || data?.id;
  if (!contactId) throw new Error(`No contactId in response: ${JSON.stringify(data)}`);
  return contactId;
}

async function addTags(contactId: string, tags: string[]) {
  if (!tags.length) return;
  const res = await fetch(`${BASE}/contacts/${contactId}/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
      "Version": VERSION
    },
    body: JSON.stringify({ tags })
  });
  if (!res.ok) throw new Error(`Add tags failed: ${res.status} ${await res.text()}`);
}

async function addNote(contactId: string, body: string) {
  const res = await fetch(`${BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
      "Version": VERSION
    },
    body: JSON.stringify({ body })
  });
  if (!res.ok) throw new Error(`Create note failed: ${res.status} ${await res.text()}`);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, track, message, kind } = payload; 
    // kind: "contact" or "calendar"

    if (!name || (!email)) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const firstName = name.split(" ")[0] || name;
    const lastName = name.split(" ").slice(1).join(" ");

    // 1) Upsert
    const contactId = await upsertContact({ firstName, lastName, email, phone: payload.phone || "" });

    // 2) Scenario-based tags
    const baseTags = ["Website Lead", "Contact Form", track].filter(Boolean);
    const scenarioTags =
      kind === "calendar"
        ? ["start cold sms", "start whatsapp blitz", "start cold email"]
        : ["start cold email"];

    await addTags(contactId, [...baseTags, ...scenarioTags]);

    // 3) Note (includes context)
    const noteText =
      `Submission Source: ${kind === "calendar" ? "Calendar" : "Contact Form"}\n` +
      (track ? `Track: ${track}\n` : "") +
      (message ? `Message: ${message}\n` : "") +
      `Source: Website`;
    await addNote(contactId, noteText);

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("GHL integration error:", errorMessage);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
