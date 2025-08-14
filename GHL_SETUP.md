# GHL (GoHighLevel) Webhook Setup

This guide explains how to set up the GHL webhook integration for the contact form.

## What's Implemented

The contact form now sends the following data to GHL:
- **Name**: Split into firstName and lastName
- **Email**: Primary contact email
- **Track**: Selected program/track
- **Message**: User's message
- **Source**: Automatically set to "Website Contact Form"
- **Tags**: Automatically tagged as "Website Lead" and "Contact Form"

## Setup Instructions

### 1. Get GHL API Credentials

1. Log into your GHL dashboard
2. Go to Settings → API Keys
3. Create a new API key or copy an existing one
4. Note your GHL instance URL

### 2. Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
GHL_WEBHOOK_URL=https://api.gohighlevel.com/v1/contacts/
GHL_API_KEY=your_actual_api_key_here
```

### 3. Alternative: Use GHL Webhook Endpoint

If you prefer to use GHL's webhook system instead of the API:

1. In GHL, go to Settings → Webhooks
2. Create a new webhook endpoint
3. Set the URL to your contact form endpoint
4. Update the `GHL_WEBHOOK_URL` in your `.env.local` to point to your GHL webhook URL

### 4. Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the contact form on your website
3. Check your GHL dashboard to see if the contact was created
4. Check the browser console and server logs for any errors

## Data Structure Sent to GHL

```json
{
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "",
  "customField": {
    "track": "Sales Foundations",
    "message": "User's message here",
    "source": "Website Contact Form"
  },
  "tags": ["Website Lead", "Contact Form"],
  "source": "Website"
}
```

## Troubleshooting

### Common Issues

1. **"GHL configuration missing" error**
   - Make sure your `.env.local` file exists and has the correct variables
   - Restart your development server after adding environment variables

2. **"Failed to send to GHL" error**
   - Check your API key is correct
   - Verify the webhook URL is accessible
   - Check GHL API documentation for any rate limits

3. **Contact not appearing in GHL**
   - Check the server logs for detailed error messages
   - Verify your GHL account has the correct permissions
   - Ensure the API key has contact creation permissions

### Debug Mode

To enable debug logging, add this to your `.env.local`:

```env
DEBUG_GHL=true
```

This will log detailed information about the GHL API calls.

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Use environment-specific API keys for development and production
- Consider implementing rate limiting for the contact form endpoint
