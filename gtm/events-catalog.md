# GTM Events Catalog

Complete reference of all tracked events in the AI Data Engineering Brasil website.

## 📊 Event Categories

1. [Page Tracking](#page-tracking)
2. [Form Events](#form-events)
3. [User Interactions](#user-interactions)
4. [Video Events](#video-events)
5. [Engagement Events](#engagement-events)
6. [E-commerce Events](#e-commerce-events)

---

## Page Tracking

### `page_view`

Tracks page views and route changes (automatic).

**Trigger:** On initial load and every route change

**Data Layer:**
```javascript
{
  event: 'page_view',
  page_path: '/webinars/dominando-claude-code',
  page_title: 'Dominando Claude Code',
  page_location: 'https://aidebrasil.com.br/webinars/dominando-claude-code'
}
```

**Usage:**
```javascript
// Automatic via usePageTracking hook
// Manual:
trackPageView({
  page_path: '/custom-page',
  page_title: 'Custom Page'
})
```

---

## Form Events

### `form_submission`

Tracks all form submissions.

**Trigger:** On form submit success

**Data Layer:**
```javascript
{
  event: 'form_submission',
  form_id: 'newsletter',
  form_name: 'Newsletter Signup',
  form_type: 'lead',
  form_location: '/webinars/dominando-claude-code'
}
```

**Usage:**
```javascript
trackFormSubmission({
  formId: 'contact-form',
  formName: 'Contact Form',
  formType: 'lead',
  formLocation: window.location.pathname
})
```

---

### `webinar_registration`

Tracks webinar registrations specifically.

**Trigger:** On webinar form submission

**Data Layer:**
```javascript
{
  event: 'webinar_registration',
  webinar_id: 'dominando-claude-code',
  webinar_title: 'Dominando Claude Code',
  webinar_date: '2025-11-15',
  user_email: 'user@example.com',
  user_phone: '+5511987654321',
  user_name: 'João Silva',
  registration_source: '/webinars/dominando-claude-code'
}
```

**Usage:**
```javascript
trackWebinarRegistration({
  webinarId: 'crewai-agents',
  webinarTitle: 'Dominando CrewAI',
  webinarDate: '2025-11-20',
  userEmail: 'user@example.com',
  userPhone: '+5511987654321',
  userName: 'Maria Santos'
})
```

**Conversion Value:** High (primary conversion event)

---

## User Interactions

### `cta_click`

Tracks Call-to-Action button clicks.

**Trigger:** On CTA button click

**Data Layer:**
```javascript
{
  event: 'cta_click',
  cta_id: 'hero-cta',
  cta_text: 'Inscreva-se Agora',
  cta_location: 'hero-section',
  cta_type: 'button',
  destination_url: '/webinars'
}
```

**Usage:**
```javascript
const { trackCTA } = useGTMTracking()

trackCTA({
  ctaId: 'pricing-cta',
  ctaText: 'Começar Agora',
  ctaLocation: 'pricing-section',
  destinationUrl: '/academy'
})
```

**Common CTA Locations:**
- `hero-section` - Hero CTA
- `pricing-section` - Pricing cards
- `footer-section` - Footer CTAs
- `sticky-header` - Fixed header CTA

---

### `outbound_click`

Tracks clicks on external links.

**Trigger:** On external link click

**Data Layer:**
```javascript
{
  event: 'outbound_click',
  link_url: 'https://github.com/aide-brasil',
  link_text: 'View on GitHub',
  link_domain: 'github.com'
}
```

**Usage:**
```javascript
trackOutboundClick('https://linkedin.com/company/aide', 'LinkedIn Profile')
```

---

### `social_share`

Tracks social media sharing.

**Trigger:** On share button click

**Data Layer:**
```javascript
{
  event: 'social_share',
  social_platform: 'whatsapp',
  shared_url: 'https://aidebrasil.com.br/webinars',
  page_location: '/webinars'
}
```

**Usage:**
```javascript
trackSocialShare('whatsapp', window.location.href)
```

**Supported Platforms:**
- `whatsapp`
- `linkedin`
- `facebook`
- `twitter`
- `telegram`

---

## Video Events

### `video_interaction`

Tracks video play, pause, and completion.

**Trigger:** On video interaction

**Data Layer:**
```javascript
{
  event: 'video_interaction',
  video_id: 'intro-video',
  video_title: 'Introduction to AI Data Engineering',
  video_action: 'play', // 'play', 'pause', 'complete'
  video_percent: 0,
  video_duration: 300,
  video_current_time: 0
}
```

**Usage:**
```javascript
const { trackPlay, trackPause, trackComplete } = useVideoTracking(
  'webinar-recording',
  'Claude Code Webinar'
)

// On play
trackPlay()

// On pause
trackPause(currentTime, duration)

// On complete
trackComplete(duration)
```

**Actions:**
- `play` - Video started
- `pause` - Video paused
- `complete` - Video watched to end (90%+)

---

## Engagement Events

### `scroll_depth`

Tracks how far users scroll on a page.

**Trigger:** At scroll milestones (25%, 50%, 75%, 100%)

**Data Layer:**
```javascript
{
  event: 'scroll_depth',
  scroll_depth: 75,
  page_path: '/webinars/dominando-claude-code'
}
```

**Usage:**
```javascript
// Automatic via useScrollTracking hook
useScrollTracking([25, 50, 75, 90, 100])

// Manual
trackScrollDepth(50)
```

---

### `time_on_page`

Tracks time spent on page.

**Trigger:** Every 30 seconds (configurable)

**Data Layer:**
```javascript
{
  event: 'time_on_page',
  time_seconds: 90,
  page_path: '/webinars'
}
```

**Usage:**
```javascript
// Automatic via useTimeTracking hook
useTimeTracking(30) // Track every 30 seconds
```

---

### `page_exit`

Tracks when user leaves page.

**Trigger:** On component unmount

**Data Layer:**
```javascript
{
  event: 'page_exit',
  time_on_page: 245,
  page_path: '/webinars/dominando-claude-code'
}
```

**Usage:** Automatic via `useTimeTracking` hook

---

### `user_engagement`

Tracks overall engagement metrics.

**Trigger:** Custom (e.g., on specific interactions)

**Data Layer:**
```javascript
{
  event: 'user_engagement',
  engagement_time: 180,
  engagement_scrolls: 5,
  engagement_clicks: 12,
  page_path: '/academy'
}
```

**Usage:**
```javascript
trackEngagement({
  timeOnPage: 180,
  scrollCount: 5,
  clickCount: 12
})
```

---

## E-commerce Events

### `file_download`

Tracks file downloads (PDFs, resources, etc.).

**Trigger:** On download link click

**Data Layer:**
```javascript
{
  event: 'file_download',
  file_name: 'ai-data-engineering-guide.pdf',
  file_type: 'pdf',
  file_url: '/downloads/guide.pdf',
  download_location: '/academy'
}
```

**Usage:**
```javascript
trackDownload({
  fileName: 'webinar-slides.pdf',
  fileType: 'pdf',
  fileUrl: '/downloads/slides.pdf'
})
```

---

### `search`

Tracks site search.

**Trigger:** On search submission

**Data Layer:**
```javascript
{
  event: 'search',
  search_term: 'claude code',
  search_results: 5,
  search_location: '/webinars'
}
```

**Usage:**
```javascript
trackSearch({
  searchTerm: 'machine learning',
  resultsCount: 10
})
```

---

### `newsletter_signup`

Tracks newsletter signups.

**Trigger:** On newsletter form submission

**Data Layer:**
```javascript
{
  event: 'newsletter_signup',
  signup_email: 'user@example.com',
  signup_source: '/homepage'
}
```

**Usage:**
```javascript
trackNewsletterSignup('user@example.com', 'footer-form')
```

---

## Error Tracking

### `error`

Tracks JavaScript errors and exceptions.

**Trigger:** On error/exception

**Data Layer:**
```javascript
{
  event: 'error',
  error_message: 'Failed to load resource',
  error_type: 'network_error',
  error_location: '/webinars',
  error_stack: '...'
}
```

**Usage:**
```javascript
try {
  // risky operation
} catch (error) {
  trackError({
    message: error.message,
    type: 'api_error',
    location: window.location.pathname,
    stack: error.stack
  })
}
```

---

## Custom Events

You can track any custom event using:

```javascript
trackEvent('custom_event_name', {
  custom_param_1: 'value1',
  custom_param_2: 'value2'
})
```

---

## Event Naming Conventions

- Use **snake_case** for event names
- Use descriptive names
- Group related events with prefixes:
  - `video_*` - Video events
  - `form_*` - Form events
  - `user_*` - User events

---

## GTM Configuration

### Recommended Triggers

| Trigger Name | Type | Condition |
|--------------|------|-----------|
| Page View | Page View | All Pages |
| History Change | History Change | All Pages |
| Form Submit | Custom Event | `form_submission` |
| CTA Click | Custom Event | `cta_click` |
| Video Play | Custom Event | `video_interaction` + `video_action = play` |
| Scroll 75% | Custom Event | `scroll_depth` + `scroll_depth = 75` |

### Recommended Variables

| Variable Name | Type | Value |
|---------------|------|-------|
| webinarId | Data Layer Variable | `webinar_id` |
| formId | Data Layer Variable | `form_id` |
| ctaLocation | Data Layer Variable | `cta_location` |
| userId | Data Layer Variable | `user_id` |

---

## Priority Events for Marketing

**High Priority (Conversions):**
1. `webinar_registration` - Primary conversion
2. `form_submission` - Lead generation
3. `newsletter_signup` - Engagement

**Medium Priority (Engagement):**
1. `cta_click` - User intent
2. `video_interaction` (complete) - Content engagement
3. `scroll_depth` (75%+) - Page engagement

**Low Priority (Monitoring):**
1. `page_view` - Traffic
2. `time_on_page` - Engagement depth
3. `error` - Technical monitoring

---

**Last Updated:** 2025-10-15
**Version:** 1.0.0
