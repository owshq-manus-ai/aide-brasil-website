# Analytics & GTM Agent

Google Tag Manager specialist for tracking, analytics, and conversion optimization.

## Container Configuration

- **Web Container**: `GTM-58XSC997`
- **Server Container**: `GTM-T7NM8RJK` (optional)
- **Environment Variables**:
  - `VITE_GTM_WEB_ID` - Web container ID
  - `VITE_GTM_SERVER_ID` - Server container ID
  - `VITE_GTM_ENABLED_IN_DEV` - Enable in dev mode
  - `VITE_GTM_DEBUG` - Debug logging

## File Structure

```
src/
├── lib/gtm/
│   ├── index.js          # Main initialization
│   ├── events.js         # Event tracking functions
│   ├── dataLayer.js      # Data layer utilities
│   └── consent.js        # LGPD consent management
└── hooks/
    └── useGTMTracking.js # React hooks
```

## Tracking Functions

### Import Hook
```jsx
import { useGTMTracking } from '../../hooks/useGTMTracking'

function MyComponent() {
  const { trackEvent, trackCTA } = useGTMTracking()

  const handleClick = () => {
    trackCTA({
      ctaId: 'hero-cta',
      ctaText: 'Inscreva-se Agora',
      ctaLocation: 'hero-section',
      destinationUrl: '/webinars'
    })
  }
}
```

### Available Functions
```javascript
// Generic event
trackEvent('custom_event', { key: 'value' })

// Form submission
trackFormSubmission({
  formId: 'newsletter',
  formName: 'Newsletter Signup',
  formType: 'lead'
})

// Webinar registration (PRIMARY CONVERSION)
trackWebinarRegistration({
  webinarId: 'claude-code-webinar',
  webinarTitle: 'Dominando Claude Code',
  userEmail: 'user@example.com',
  userPhone: '+5511987654321',
  userName: 'João Silva'
})

// CTA click
trackCTAClick({
  ctaId: 'hero-cta',
  ctaText: 'Saiba Mais',
  ctaLocation: 'hero'
})

// Video interaction
trackVideoInteraction({
  videoId: 'intro-video',
  videoTitle: 'Intro to AI',
  action: 'play' // 'play', 'pause', 'complete'
})

// Scroll depth
trackScrollDepth(75) // percentage

// Outbound link
trackOutboundClick('https://external.com', 'External Link')
```

### React Hooks
```jsx
import {
  usePageTracking,      // Auto-track page views
  useScrollTracking,    // Auto-track scroll depth
  useTimeTracking,      // Auto-track time on page
  useVideoTracking      // Track video interactions
} from '../hooks/useGTMTracking'

function MyPage() {
  usePageTracking()
  useScrollTracking([25, 50, 75, 100])
  useTimeTracking(30) // every 30 seconds
}
```

## Events Catalog

### High Priority (Conversions)
| Event | Trigger | Fields |
|-------|---------|--------|
| `webinar_registration` | Form submit | webinar_id, webinar_title, lead_name, lead_email, lead_phone |
| `form_submission` | Any form | form_id, form_name, form_type, lead_* fields |
| `newsletter_signup` | Newsletter | signup_email, signup_source |

### Medium Priority (Engagement)
| Event | Trigger | Fields |
|-------|---------|--------|
| `cta_click` | Button click | cta_id, cta_text, cta_location, destination_url |
| `video_interaction` | Video events | video_id, video_title, video_action, video_percent |
| `scroll_depth` | Scroll milestone | scroll_depth (25/50/75/100), page_path |

### Low Priority (Monitoring)
| Event | Trigger | Fields |
|-------|---------|--------|
| `page_view` | Route change | page_path, page_title, page_location |
| `time_on_page` | Every 30s | time_seconds, page_path |
| `outbound_click` | External link | link_url, link_text, link_domain |
| `error` | JS exception | error_message, error_type, error_location |

## Lead Data Fields

When forms submit, these fields are pushed to dataLayer:

```javascript
{
  event: "webinar_registration",

  // Webinar info
  webinar_id: "dominando-claude-code",
  webinar_title: "Dominando Claude Code",
  registration_source: "/webinars/dominando-claude-code",

  // Lead data (PRIMARY)
  lead_name: "João Silva",
  lead_email: "joao@example.com",
  lead_phone: "(11) 98765-4321",

  // Legacy fields (backward compatibility)
  user_name: "João Silva",
  user_email: "joao@example.com",
  user_phone: "(11) 98765-4321"
}
```

## GTM Dashboard Variables

Create these Data Layer Variables in GTM:

| Variable Name | Data Layer Key |
|---------------|----------------|
| `DLV - Lead Name` | `lead_name` |
| `DLV - Lead Email` | `lead_email` |
| `DLV - Lead Phone` | `lead_phone` |
| `DLV - Webinar ID` | `webinar_id` |
| `DLV - Webinar Title` | `webinar_title` |
| `DLV - CTA ID` | `cta_id` |
| `DLV - CTA Location` | `cta_location` |
| `DLV - Scroll Depth` | `scroll_depth` |
| `DLV - Video Action` | `video_action` |

## GTM Triggers

| Trigger Name | Type | Event Name |
|--------------|------|------------|
| `All Pages` | Page View | - |
| `History Change` | History Change | - |
| `CE - Form Submission` | Custom Event | `form_submission` |
| `CE - Webinar Registration` | Custom Event | `webinar_registration` |
| `CE - CTA Click` | Custom Event | `cta_click` |
| `CE - Video Play` | Custom Event | `video_interaction` (+ action=play) |
| `CE - Scroll 75%` | Custom Event | `scroll_depth` (+ depth=75) |

## Implementation Patterns

### Adding Tracking to New Component
```jsx
import { useGTMTracking } from '../../hooks/useGTMTracking'

function NewComponent() {
  const { trackEvent, trackCTA } = useGTMTracking()

  const handleAction = () => {
    trackEvent('component_action', {
      component_name: 'NewComponent',
      action_type: 'click',
      page_path: window.location.pathname
    })
  }

  return <button onClick={handleAction}>Action</button>
}
```

### Adding Tracking to Webinar Form
Forms using `WebhookForm` component automatically track:
- `form_submission` on submit
- `webinar_registration` if webinar context present

No additional code needed - just use the WebhookForm component.

### Debugging
```javascript
// Check dataLayer in browser console
console.log(window.dataLayer)

// Check last event
const lastEvent = window.dataLayer[window.dataLayer.length - 1]
console.log('Last Event:', lastEvent)
```

## LGPD Consent

```javascript
import { grantAllConsent, denyAllConsent } from '../lib/gtm/consent'

// When user accepts cookies
grantAllConsent()

// When user rejects cookies
denyAllConsent()
```

## Vercel Deployment

Add to Vercel Environment Variables:
```
VITE_GTM_WEB_ID=GTM-58XSC997
VITE_GTM_SERVER_ID=GTM-T7NM8RJK
VITE_GTM_ENABLED_IN_DEV=false
VITE_GTM_DEBUG=false
```

## Testing Checklist

- [ ] GTM scripts load (check Network tab for `gtm.js`)
- [ ] `window.dataLayer` exists in console
- [ ] Page views fire on route change
- [ ] Form submissions tracked
- [ ] Webinar registrations tracked (conversion event)
- [ ] CTA clicks tracked
- [ ] No console errors

## Resources

- GTM Dashboard: [tagmanager.google.com](https://tagmanager.google.com)
- Container: `GTM-58XSC997`
- Preview Mode: Use GTM Preview to test before publishing
