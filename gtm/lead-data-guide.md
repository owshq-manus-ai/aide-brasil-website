# GTM Lead Data Integration Guide

Complete guide for accessing lead information (name, email, phone) from form submissions in Google Tag Manager.

---

## 📊 Overview

When users submit forms on your website, their contact information is automatically sent to GTM's dataLayer where you can:
- Send leads to Google Sheets
- Push to CRM systems (HubSpot, Salesforce, etc.)
- Send to email marketing tools (Mailchimp, etc.)
- Track conversions in Google Ads/Facebook
- Trigger webhooks to n8n or Zapier

---

## 🎯 Available Lead Data Fields

### Form Submission Event (`form_submission`)

When ANY form is submitted, these fields are available:

| Field Name | Description | Example |
|------------|-------------|---------|
| `event` | Event type | `"form_submission"` |
| `form_id` | Form identifier | `"webinar-form"` |
| `form_name` | Form name | `"Webhook Form - webinar"` |
| `form_type` | Type of form | `"lead"` |
| `form_location` | Page URL | `"/webinars/dominando-claude-code"` |
| **`lead_name`** | ✅ **Contact Name** | `"João Silva"` |
| **`lead_email`** | ✅ **Contact Email** | `"joao@example.com"` |
| **`lead_phone`** | ✅ **Contact Phone** | `"(11) 98765-4321"` |
| `lead_company` | Company name (optional) | `"Empresa XYZ"` |
| `lead_experience_level` | Experience level (optional) | `"Intermediário"` |
| `lead_current_role` | Current role (optional) | `"Analista de Dados"` |
| `lead_interest` | Interest area (optional) | `"Bootcamps"` |
| `lead_message` | Message (optional) | `"Gostaria de saber mais..."` |

---

### Webinar Registration Event (`webinar_registration`)

When a webinar form is submitted, these fields are available:

| Field Name | Description | Example |
|------------|-------------|---------|
| `event` | Event type | `"webinar_registration"` |
| `webinar_id` | Webinar identifier | `"dominando-claude-code"` |
| `webinar_title` | Webinar title | `"Dominando Claude Code"` |
| `webinar_date` | Webinar date (if set) | `"2025-11-15"` |
| `registration_source` | Page URL | `"/webinars/dominando-claude-code"` |
| **`lead_name`** | ✅ **Contact Name** | `"Maria Santos"` |
| **`lead_email`** | ✅ **Contact Email** | `"maria@example.com"` |
| **`lead_phone`** | ✅ **Contact Phone** | `"(21) 91234-5678"` |
| `user_name` | (Legacy field) | Same as `lead_name` |
| `user_email` | (Legacy field) | Same as `lead_email` |
| `user_phone` | (Legacy field) | Same as `lead_phone` |

---

## 🔍 How to View Lead Data

### Method 1: Browser Console (Quick Test)

1. Go to any webinar page
2. Open browser console (`F12`)
3. Fill out and submit the form
4. You'll see this log:

```
📊 [GTM LEAD DATA] {
  event: "webinar_registration",
  lead_name: "João Silva",
  lead_email: "joao@example.com",
  lead_phone: "(11) 98765-4321",
  form_id: "dominando-claude-code",
  timestamp: "2025-10-15T10:30:00.000Z"
}
```

---

### Method 2: GTM Preview Mode

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select container `GTM-58XSC997`
3. Click **Preview**
4. Connect to your site
5. Submit a form
6. In GTM debugger:
   - Click on `form_submission` or `webinar_registration` event
   - View **Data Layer** tab
   - You'll see all lead fields

**Screenshot of what you'll see:**
```
event: "webinar_registration"
lead_name: "João Silva"
lead_email: "joao@example.com"
lead_phone: "(11) 98765-4321"
webinar_id: "dominando-claude-code"
...
```

---

## 🛠️ Setting Up GTM Variables

To use lead data in tags, you need to create Data Layer Variables:

### Step 1: Create Variables in GTM

1. Go to **Variables** → **New**
2. Create these variables:

| Variable Name | Type | Data Layer Variable Name |
|---------------|------|-------------------------|
| `DLV - Lead Name` | Data Layer Variable | `lead_name` |
| `DLV - Lead Email` | Data Layer Variable | `lead_email` |
| `DLV - Lead Phone` | Data Layer Variable | `lead_phone` |
| `DLV - Lead Company` | Data Layer Variable | `lead_company` |
| `DLV - Webinar ID` | Data Layer Variable | `webinar_id` |
| `DLV - Webinar Title` | Data Layer Variable | `webinar_title` |

### Step 2: How to Create a Variable

1. **Variables** → **New**
2. Click variable configuration area
3. Select **Data Layer Variable**
4. **Data Layer Variable Name:** `lead_name`
5. **Variable Name:** `DLV - Lead Name`
6. Click **Save**

Repeat for all fields above.

---

## 📤 Sending Leads to External Systems

### Option 1: Google Sheets Integration

**Tag: Google Sheets Append**
- **Type:** Custom HTML
- **Trigger:** `form_submission` event
- **HTML:**
```html
<script>
  (function() {
    var data = {
      name: {{DLV - Lead Name}},
      email: {{DLV - Lead Email}},
      phone: {{DLV - Lead Phone}},
      source: {{Page Path}},
      timestamp: new Date().toISOString()
    };

    // Use Google Apps Script Web App URL
    fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
  })();
</script>
```

---

### Option 2: Webhook to n8n/Zapier

**Tag: Webhook POST**
- **Type:** Custom HTML
- **Trigger:** `webinar_registration` event
- **HTML:**
```html
<script>
  (function() {
    var webhookUrl = 'YOUR_N8N_OR_ZAPIER_WEBHOOK_URL';

    var leadData = {
      event: 'webinar_registration',
      name: {{DLV - Lead Name}},
      email: {{DLV - Lead Email}},
      phone: {{DLV - Lead Phone}},
      webinar_id: {{DLV - Webinar ID}},
      webinar_title: {{DLV - Webinar Title}},
      source: {{Page URL}},
      timestamp: new Date().toISOString()
    };

    fetch(webhookUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(leadData)
    }).catch(function(error) {
      console.error('Webhook error:', error);
    });
  })();
</script>
```

---

### Option 3: Facebook Conversions API

**Tag: Facebook Conversions API**
- **Type:** Custom HTML
- **Trigger:** `webinar_registration` event
- **HTML:**
```html
<script>
  fbq('track', 'Lead', {
    content_name: {{DLV - Webinar Title}},
    em: {{DLV - Lead Email}},  // Email (will be hashed by Facebook)
    ph: {{DLV - Lead Phone}}   // Phone (will be hashed by Facebook)
  });
</script>
```

---

### Option 4: Google Ads Enhanced Conversions

**Tag: Google Ads Conversion**
- **Type:** Google Ads Conversion Tracking
- **Trigger:** `webinar_registration` event
- **Configuration:**
  - Conversion ID: Your Google Ads ID
  - Conversion Label: Your conversion label
  - **Enhanced Conversions:**
    - Email: `{{DLV - Lead Email}}`
    - Phone: `{{DLV - Lead Phone}}`
    - First Name: Extract from `{{DLV - Lead Name}}`
    - Last Name: Extract from `{{DLV - Lead Name}}`

---

## 🧪 Testing Lead Data Flow

### Test Checklist:

1. **Open GTM Preview Mode**
   - Connect to your site
   - Keep debugger window open

2. **Submit Test Form**
   - Go to any webinar page
   - Fill form with test data:
     - Name: "Test User"
     - Email: "test@example.com"
     - Phone: "(11) 99999-9999"
   - Submit

3. **Verify in GTM Debugger**
   - Look for `webinar_registration` event
   - Click on event
   - Check **Data Layer** tab
   - Verify all fields present:
     - ✅ `lead_name`: "Test User"
     - ✅ `lead_email`: "test@example.com"
     - ✅ `lead_phone`: "(11) 99999-9999"

4. **Verify in Browser Console**
   - Look for: `📊 [GTM LEAD DATA]`
   - Verify all fields match

5. **Test Tag Firing**
   - Check **Tags** tab in GTM debugger
   - Verify your lead tags fired
   - Check for any errors

---

## 📋 Data Layer Structure Example

When a form is submitted, the dataLayer looks like this:

```javascript
{
  event: "webinar_registration",

  // Webinar info
  webinar_id: "dominando-claude-code",
  webinar_title: "Dominando Claude Code",
  webinar_date: undefined,
  registration_source: "/webinars/dominando-claude-code",

  // Lead data (PRIMARY - use these)
  lead_name: "João Silva",
  lead_email: "joao.silva@example.com",
  lead_phone: "(11) 98765-4321",

  // Legacy fields (for backward compatibility)
  user_name: "João Silva",
  user_email: "joao.silva@example.com",
  user_phone: "(11) 98765-4321",

  // Original form data (also included)
  name: "João Silva",
  email: "joao.silva@example.com",
  phone: "(11) 98765-4321",

  // Form metadata
  formId: "webinar-form",
  formName: "Webhook Form - webinar",
  formType: "lead",
  formLocation: "/webinars/dominando-claude-code"
}
```

---

## 🔒 Privacy & Compliance

### Important Notes:

1. **PII Handling:**
   - Lead data contains Personally Identifiable Information (PII)
   - Be careful with third-party tags
   - Use hashing for Facebook/Google when possible

2. **LGPD Compliance:**
   - Consider implementing consent banner
   - Respect user privacy choices
   - Store data securely

3. **Data Retention:**
   - dataLayer clears on page refresh
   - Lead data only exists during page session
   - Store leads in secure database/CRM

---

## 🎯 Common Use Cases

### 1. Send Leads to CRM

Create a webhook tag that fires on `webinar_registration` and sends:
- `{{DLV - Lead Name}}`
- `{{DLV - Lead Email}}`
- `{{DLV - Lead Phone}}`
- `{{DLV - Webinar Title}}`

to your CRM API endpoint.

---

### 2. Email Marketing Lists

Send lead data to Mailchimp/ActiveCampaign via webhook:
- Trigger: `form_submission`
- Include: Email, Name, Source Page
- Tag them with: Webinar name

---

### 3. Sales Notification

Send Slack/Discord notification when high-value lead signs up:
- Trigger: `webinar_registration`
- Condition: Webinar = "AI Data Engineer Bootcamp"
- Webhook: Slack incoming webhook
- Message: Include name, email, phone

---

## ✅ Verification Script

Run this in browser console after form submission:

```javascript
// Check last dataLayer event
const lastEvent = window.dataLayer[window.dataLayer.length - 1];
console.log('📊 Last Event:', lastEvent);

// Extract lead data
if (lastEvent.event === 'form_submission' || lastEvent.event === 'webinar_registration') {
  console.log('✅ Lead Data Found:');
  console.log('   Name:', lastEvent.lead_name);
  console.log('   Email:', lastEvent.lead_email);
  console.log('   Phone:', lastEvent.lead_phone);
} else {
  console.log('❌ No lead event found');
}
```

---

## 🆘 Troubleshooting

### Issue: Variables Show "undefined"

**Solution:**
1. Check variable names exactly match dataLayer keys
2. Variable names are case-sensitive: `lead_name` not `Lead_Name`
3. Verify in GTM Preview that data exists in dataLayer

---

### Issue: Lead data not appearing

**Solution:**
1. Check browser console for `📊 [GTM LEAD DATA]` log
2. If log appears, data is sent correctly
3. Issue is in GTM variable configuration
4. Recreate variables with exact names from this guide

---

### Issue: Tags not firing

**Solution:**
1. Check trigger is set to correct event name
2. Event names: `form_submission` or `webinar_registration`
3. Use GTM Preview mode to debug
4. Check for JavaScript errors in console

---

## 📞 Support

Need help setting this up? Check:
- Main GTM docs: [README.md](./README.md)
- Events catalog: [events-catalog.md](./events-catalog.md)
- Implementation guide: [implementation-guide.md](./implementation-guide.md)

---

**Last Updated:** 2025-10-15
**Version:** 2.0.0 (Enhanced Lead Data)
