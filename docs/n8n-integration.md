# n8n Integration Guide

## Overview
The website is integrated with n8n for automated lead capture and workflow automation. Each CTA button can trigger different n8n workflows, allowing you to handle free and premium signups differently.

## Configuration

### 1. Centralized Configuration (`src/config/webhooks.js`)
All webhook settings are managed in a single configuration file that provides:
- Multiple webhook endpoints (premium, free, newsletter)
- Analytics tracking (UTM parameters, device info)
- Error handling and fallback behavior
- Customizable success behaviors

### 2. Environment Variables
Configure the following in your `.env.local` or Vercel dashboard:

```env
# Premium waitlist webhook
VITE_N8N_WEBHOOK_PREMIUM=https://your-n8n.com/webhook/premium-id

# Free tier signup webhook
VITE_N8N_WEBHOOK_FREE=https://your-n8n.com/webhook/free-id

# Newsletter webhook (optional)
VITE_N8N_WEBHOOK_NEWSLETTER=https://your-n8n.com/webhook/newsletter-id

# Behavior controls
VITE_N8N_ENABLED=true          # Enable/disable all webhooks
VITE_TRACK_UTM=true            # Track marketing parameters
VITE_TRACK_DEVICE=true         # Track device/browser info
VITE_LOG_ERRORS=true           # Log errors to console
VITE_SHOW_ERRORS=false         # Show errors to users
```

## Data Payload

Each form submission sends the following data to n8n:

### Premium Signup (`premium-waitlist`)
```json
{
  "name": "User Name",
  "email": "user@email.com",
  "phone": "(11) 99999-9999",
  "source": "premium-waitlist",
  "timestamp": "2025-01-16T12:00:00.000Z",
  "utm_source": "google",
  "utm_medium": "cpc",
  "utm_campaign": "launch",
  "utm_term": "",
  "utm_content": "",
  "page_url": "https://aide-brasil.ai",
  "user_agent": "Mozilla/5.0...",
  "language": "pt-BR",
  "screen_resolution": "1920x1080",
  "viewport_size": "1920x969",
  "referrer": "https://google.com"
}
```

### Free Signup (`free-signup`)
```json
{
  "name": "User Name",
  "email": "user@email.com",
  "source": "free-signup",
  "timestamp": "2025-01-16T12:00:00.000Z",
  // ... same tracking fields as above
}
```

## n8n Workflow Setup

### Step 1: Create Webhook Triggers
1. In n8n, create a new workflow
2. Add a **Webhook** node as the trigger
3. Set HTTP Method to **POST**
4. Copy the production webhook URL
5. Add to your environment variables

### Step 2: Process the Data
Example workflow nodes to add after the webhook:

1. **Set Node** - Format and validate data
2. **IF Node** - Route based on `source` field
   - premium-waitlist → Premium flow
   - free-signup → Free tier flow
3. **Google Sheets** - Add to spreadsheet
4. **Airtable** - Store in database
5. **SendGrid/Mailchimp** - Send welcome email
6. **Slack** - Notify team

### Step 3: Different Workflows for Each CTA

#### Premium Workflow
- Send to CRM with "premium-interest" tag
- Add to premium waitlist in Airtable
- Send premium-focused welcome email
- Notify sales team in Slack

#### Free Tier Workflow
- Add to newsletter list
- Grant immediate access to free resources
- Send free tier welcome email
- Add to nurture campaign

## Testing

### Local Testing
1. Set up `.env.local` with your webhook URLs
2. Run `npm run dev`
3. Test each form submission
4. Check n8n execution history

### Using n8n Test Webhooks
1. In n8n, use the "Test" URL while developing
2. n8n will show incoming data in real-time
3. Once verified, switch to production URL

## Monitoring

### Analytics Events
When `VITE_TRACK_EVENTS=true`, form submissions also trigger Google Analytics events:
- Event: `form_submit`
- Category: `engagement`
- Label: `premium-waitlist` or `free-signup`

### Error Handling
- Errors are logged to console when `VITE_LOG_ERRORS=true`
- Failed submissions still show success to user (configurable)
- Webhook failures don't block the user experience

## Deployment

### Vercel Setup
1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add each `VITE_N8N_*` variable
4. Set for Production environment
5. Redeploy to apply changes

### Multiple Environments
You can have different webhooks for different environments:
- Development: Test webhook URLs
- Staging: Staging n8n instance
- Production: Production n8n workflows

## Troubleshooting

### Form submissions not reaching n8n
1. Check browser console for errors
2. Verify webhook URL is correct
3. Ensure n8n workflow is active
4. Check CORS settings in n8n

### Missing data fields
1. Check `src/config/webhooks.js` configuration
2. Ensure environment variables are set
3. Verify form fields are being captured

### Testing webhooks locally
Use tools like ngrok to expose local n8n to the internet:
```bash
ngrok http 5678
```

## Best Practices

1. **Use separate webhooks** for different form types for better tracking
2. **Test webhooks** in n8n test mode before going live
3. **Monitor execution history** in n8n regularly
4. **Set up error notifications** in n8n workflows
5. **Keep sensitive data** out of client-side code
6. **Document webhook purposes** in n8n workflow descriptions

## Support

For issues with:
- Website forms: Check `src/pages/HomePage.jsx`
- Webhook config: Check `src/config/webhooks.js`
- n8n workflows: Access your n8n dashboard
- Environment variables: Check Vercel dashboard