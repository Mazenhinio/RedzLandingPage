import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { name, email, track, message } = payload;



    if (!name || !email || !track || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const ghlWebhookUrl = process.env.GHL_WEBHOOK_URL;
    const ghlApiKey = process.env.GHL_API_KEY;

    if (!ghlWebhookUrl || !ghlApiKey) {
      console.error("GHL configuration missing");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const ghlPayload = {
      email: email,
      firstName: name.split(' ')[0] || name,
      lastName: name.split(' ').slice(1).join(' ') || '',
      phone: '',
      tags: ['Website Lead', 'Contact Form', track, 'start cold email'],
      source: 'Website',
      customField: {
        course_of_interest: track,
        message: message
      }
    };

    console.log('GHL Payload being sent:', ghlPayload);

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

    // Get the contact ID from the response to add a note
    const contactResponse = await ghlResponse.json();
    console.log('GHL Contact Response:', contactResponse);
    const contactId = contactResponse?.id;

    // Add a separate note with the full message if we have a contact ID
    if (contactId) {
      try {
        const notePayload = {
          body: `Contact Form Submission:\n\nTrack: ${track}\nMessage: ${message}\nSource: Website Contact Form\n\nFull Message:\n${message}`,
          userId: contactId
        };

        await fetch(`${ghlWebhookUrl.replace('/contacts/', '/notes/')}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ghlApiKey}`,
          },
          body: JSON.stringify(notePayload),
        });
      } catch (noteError) {
        console.error('Failed to add note:', noteError);
        // Don't fail the whole request if note creation fails
      }
    }

    // Also try to update the contact with custom fields after creation
    if (contactId) {
      try {
        const updatePayload = {
          customField: {
            track: `Track: ${track}`,
            message: message,
            source: 'Website Contact Form'
          }
        };

        await fetch(`${ghlWebhookUrl}/${contactId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ghlApiKey}`,
          },
          body: JSON.stringify(updatePayload),
        });
      } catch (updateError) {
        console.error('Failed to update contact:', updateError);
        // Don't fail the whole request if update fails
      }
    }

    console.log("Contact form submitted successfully:", { name, email, track, message });
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
