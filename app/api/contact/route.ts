import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, track, message } = payload;

    // Validate required fields
    if (!name || !email || !track || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // GHL webhook configuration
    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    const ghlApiKey = process.env.GHL_API_KEY;

    if (!ghlWebhookUrl || !ghlApiKey) {
      console.error("GHL configuration missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare data for GHL
    const ghlPayload = {
      email: email,
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ').slice(1).join(' ') || '',
      phone: '', // Optional field
      customField: {
        track: track,
        message: message,
        source: 'Website Contact Form'
      },
      tags: ['Website Lead', 'Contact Form'],
      source: 'Website'
    };

    // Send to GHL
    const ghlResponse = await fetch(ghlWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ghlApiKey}`,
      },
      body: JSON.stringify(ghlPayload),
    });

    if (!ghlResponse.ok) {
      console.error('GHL API error:', await ghlResponse.text());
      return NextResponse.json(
        { error: "Failed to send to GHL" },
        { status: 500 }
      );
    }

    console.log("Contact form submitted successfully:", { name, email, track });
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

