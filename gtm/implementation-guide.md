# GTM Implementation Guide

Step-by-step guide for configuring tags, triggers, and variables in Google Tag Manager dashboard.

## 🎯 Overview

This guide will help you configure your GTM container (`GTM-58XSC997`) to work with the AI Data Engineering Brasil website.

**Time Required:** 30-45 minutes
**Difficulty:** Intermediate
**Prerequisites:** Access to GTM account

---

## Part 1: Initial Setup

### Step 1: Access GTM Container

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select container **GTM-58XSC997** (Web)
3. You should see the dashboard

### Step 2: Enable Built-in Variables

1. Click **Variables** in left sidebar
2. Under "Built-in Variables", click **Configure**
3. Enable these variables:
   - ✅ Page URL
   - ✅ Page Hostname
   - ✅ Page Path
   - ✅ Referrer
   - ✅ Click Element
   - ✅ Click Classes
   - ✅ Click ID
   - ✅ Click Text
   - ✅ Form Element
   - ✅ Form Classes
   - ✅ Form ID

---

## Part 2: Create Data Layer Variables

Data Layer variables read values from `window.dataLayer`.

### Create These Variables:

| Variable Name | Type | Data Layer Variable Name |
|---------------|------|-------------------------|
| `DLV - Page Path` | Data Layer Variable | `page_path` |
| `DLV - Page Title` | Data Layer Variable | `page_title` |
| `DLV - Form ID` | Data Layer Variable | `form_id` |
| `DLV - Webinar ID` | Data Layer Variable | `webinar_id` |
| `DLV - Webinar Title` | Data Layer Variable | `webinar_title` |
| `DLV - CTA ID` | Data Layer Variable | `cta_id` |
| `DLV - CTA Location` | Data Layer Variable | `cta_location` |
| `DLV - User Email` | Data Layer Variable | `user_email` |
| `DLV - Video ID` | Data Layer Variable | `video_id` |
| `DLV - Video Action` | Data Layer Variable | `video_action` |
| `DLV - Scroll Depth` | Data Layer Variable | `scroll_depth` |

### How to Create a Data Layer Variable:

1. Click **Variables** → **New**
2. Click variable configuration area
3. Select **Data Layer Variable**
4. Enter "Data Layer Variable Name" (e.g., `page_path`)
5. Name your variable (e.g., `DLV - Page Path`)
6. Click **Save**

---

## Part 3: Create Triggers

Triggers determine when tags fire.

### 1. All Pages Trigger (Default)

**Name:** `All Pages`
**Type:** Page View
**Fires on:** All Page Views

*(This is usually already created by default)*

---

### 2. History Change Trigger (SPA Support)

**Name:** `History Change - All Pages`
**Type:** History Change
**Fires on:** All History Changes

**Setup:**
1. **Triggers** → **New**
2. Choose **History Change**
3. Fire on: **All History Changes**
4. **Save**

**Purpose:** Tracks route changes in React single-page app

---

### 3. Custom Event Triggers

Create these custom event triggers:

#### Form Submission Trigger

**Name:** `CE - Form Submission`
**Type:** Custom Event
**Event name:** `form_submission`
**Fires on:** All Custom Events

#### Webinar Registration Trigger

**Name:** `CE - Webinar Registration`
**Type:** Custom Event
**Event name:** `webinar_registration`
**Fires on:** All Custom Events

#### CTA Click Trigger

**Name:** `CE - CTA Click`
**Type:** Custom Event
**Event name:** `cta_click`
**Fires on:** All Custom Events

#### Video Play Trigger

**Name:** `CE - Video Play`
**Type:** Custom Event
**Event name:** `video_interaction`
**Fires on:** Some Custom Events
**Condition:** `{{DLV - Video Action}}` equals `play`

#### Scroll Depth Triggers

Create separate triggers for each milestone:

**Name:** `CE - Scroll 25%`
**Type:** Custom Event
**Event name:** `scroll_depth`
**Condition:** `{{DLV - Scroll Depth}}` equals `25`

Repeat for 50%, 75%, 100%

---

## Part 4: Create Tags

### Tag 1: Google Analytics 4 (GA4)

**Name:** `GA4 - Configuration`
**Type:** Google Analytics: GA4 Configuration
**Measurement ID:** `G-XXXXXXXXXX` *(get from GA4)*
**Trigger:** All Pages + History Change

**Setup:**
1. **Tags** → **New**
2. Choose **Google Analytics: GA4 Configuration**
3. Enter your GA4 Measurement ID
4. **Triggering:** Select `All Pages` AND `History Change - All Pages`
5. **Save**

---

### Tag 2: GA4 Event - Page View

**Name:** `GA4 - Event - Page View`
**Type:** Google Analytics: GA4 Event
**Configuration Tag:** Select `GA4 - Configuration`
**Event Name:** `page_view`
**Trigger:** History Change

**Event Parameters:**
```
page_path: {{DLV - Page Path}}
page_title: {{DLV - Page Title}}
page_location: {{Page URL}}
```

---

### Tag 3: GA4 Event - Form Submission

**Name:** `GA4 - Event - Form Submission`
**Type:** Google Analytics: GA4 Event
**Configuration Tag:** Select `GA4 - Configuration`
**Event Name:** `form_submission`
**Trigger:** CE - Form Submission

**Event Parameters:**
```
form_id: {{DLV - Form ID}}
form_location: {{Page Path}}
```

---

### Tag 4: GA4 Event - Webinar Registration (Conversion)

**Name:** `GA4 - Event - Webinar Registration`
**Type:** Google Analytics: GA4 Event
**Configuration Tag:** Select `GA4 - Configuration`
**Event Name:** `webinar_registration`
**Trigger:** CE - Webinar Registration

**Event Parameters:**
```
webinar_id: {{DLV - Webinar ID}}
webinar_title: {{DLV - Webinar Title}}
value: 100
currency: BRL
```

⚠️ **Important:** Mark this as a **conversion event** in GA4!

---

### Tag 5: GA4 Event - CTA Click

**Name:** `GA4 - Event - CTA Click`
**Type:** Google Analytics: GA4 Event
**Configuration Tag:** Select `GA4 - Configuration`
**Event Name:** `cta_click`
**Trigger:** CE - CTA Click

**Event Parameters:**
```
cta_id: {{DLV - CTA ID}}
cta_location: {{DLV - CTA Location}}
page_path: {{Page Path}}
```

---

### Tag 6: Facebook Pixel (Optional)

**Name:** `Facebook Pixel - Base Code`
**Type:** Custom HTML
**Trigger:** All Pages

**HTML:**
```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

*(Replace `YOUR_PIXEL_ID` with actual Facebook Pixel ID)*

---

### Tag 7: Facebook Conversion - Webinar Registration

**Name:** `Facebook Pixel - Lead`
**Type:** Custom HTML
**Trigger:** CE - Webinar Registration

**HTML:**
```html
<script>
  fbq('track', 'Lead', {
    content_name: {{DLV - Webinar Title}},
    content_category: 'Webinar Registration',
    value: 100,
    currency: 'BRL'
  });
</script>
```

---

### Tag 8: LinkedIn Insight Tag (Optional)

**Name:** `LinkedIn Insight Tag`
**Type:** Custom HTML
**Trigger:** All Pages

**HTML:**
```html
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
```

*(Replace `YOUR_PARTNER_ID` with actual LinkedIn Partner ID)*

---

## Part 5: Testing

### Preview Mode

1. Click **Preview** in top right
2. Enter your website URL (dev or production)
3. GTM debugger opens in new window
4. Interact with your site
5. Verify events fire correctly

### What to Test

- ✅ Page views on route change
- ✅ Form submissions
- ✅ Webinar registrations
- ✅ CTA clicks
- ✅ Video interactions
- ✅ Scroll depth tracking

### Debug Checklist

| Test | Expected Result |
|------|----------------|
| Load homepage | `page_view` fires |
| Navigate to webinar page | `page_view` fires again |
| Submit webinar form | `form_submission` + `webinar_registration` fire |
| Click CTA button | `cta_click` fires |
| Scroll to 75% | `scroll_depth` fires |

---

## Part 6: Publish

### Submit Changes

1. Click **Submit** (top right)
2. Enter version name: "Initial GTM Setup"
3. Enter description: "Added GA4, event tracking, and conversion tags"
4. Click **Publish**

### Verify in Production

1. Visit your live site
2. Open browser DevTools → Console
3. Look for `[GTM] Initialized`
4. Test key events
5. Check GA4 real-time reports

---

## Part 7: GA4 Configuration

### Mark Conversion Events

In Google Analytics 4:

1. Go to **Admin** → **Events**
2. Find `webinar_registration`
3. Toggle **Mark as conversion**
4. Repeat for other conversion events

### Create Custom Reports

1. **Explorations** → **Blank**
2. Add dimensions: `event_name`, `webinar_title`, `page_path`
3. Add metrics: `event_count`, `conversions`
4. Create visualization

---

## Maintenance

### Regular Tasks

- **Weekly:** Check GTM errors in dashboard
- **Monthly:** Review conversion rates
- **Quarterly:** Audit unused tags/triggers

### Backup Container

1. **Admin** → **Export Container**
2. Save JSON file
3. Store in `/gtm/gtm-container-config.json`

---

## Advanced: Server-Side GTM

### Why Server-Side?

- Better privacy compliance
- Avoid ad blockers
- More accurate tracking
- Control over data

### Setup

1. Create Google Cloud Run service
2. Configure `GTM-T7NM8RJK` server container
3. Update `VITE_GTM_SERVER_URL` environment variable
4. Test with server-side tags

*(Detailed guide available on request)*

---

## Troubleshooting

### Common Issues

**Issue:** Events not firing
**Solution:** Check custom event names match code exactly (case-sensitive)

**Issue:** GA4 not receiving data
**Solution:** Verify Measurement ID is correct

**Issue:** Duplicate page views
**Solution:** Remove old GA tracking code from HTML

---

## Resources

- [GTM Documentation](https://support.google.com/tagmanager)
- [GA4 Documentation](https://support.google.com/analytics/topic/9303319)
- [GTM Community](https://www.google.com/tagmanager/community/)

---

**Last Updated:** 2025-10-15
**Version:** 1.0.0
**Container:** GTM-58XSC997
