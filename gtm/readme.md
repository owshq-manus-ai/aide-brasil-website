# Google Tag Manager Integration

Complete documentation for GTM implementation on AI Data Engineering Brasil website.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Quick Start](#quick-start)
3. [Configuration](#configuration)
4. [Architecture](#architecture)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Testing](#testing)
8. [Troubleshooting](#troubleshooting)

---

## Overview

This project uses **Google Tag Manager (GTM)** for centralized analytics and tracking management. GTM allows us to manage all marketing tags without modifying code.

### Why GTM?

- ✅ **No Code Changes** - Add/remove tracking tags without developer intervention
- ✅ **Version Control** - Track changes and roll back if needed
- ✅ **Performance** - Async loading, single container for all tags
- ✅ **SPA Support** - Automatic tracking for React Router navigation
- ✅ **Privacy Compliant** - LGPD/GDPR consent mode ready

### Container IDs

- **Web Container:** `GTM-58XSC997`
- **Server Container:** `GTM-T7NM8RJK` (advanced, optional)

---

## Quick Start

### 1. Environment Setup

The GTM configuration is already added to your `.env.local` file:

```bash
VITE_GTM_WEB_ID=GTM-58XSC997
VITE_GTM_SERVER_ID=GTM-T7NM8RJK
VITE_GTM_ENABLED_IN_DEV=false
VITE_GTM_DEBUG=true
```

### 2. Verify Installation

GTM is automatically initialized when the app loads. Check browser console for:

```
[GTM] Initialized { webId: 'GTM-58XSC997', ... }
```

### 3. Test in GTM Preview Mode

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Select container `GTM-58XSC997`
3. Click **Preview**
4. Enter your site URL: `http://localhost:5173` or production URL
5. Verify events are firing

---

## Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_GTM_WEB_ID` | GTM Web container ID | `GTM-58XSC997` |
| `VITE_GTM_SERVER_ID` | GTM Server container ID (optional) | `GTM-T7NM8RJK` |
| `VITE_GTM_SERVER_URL` | Custom GTM server URL (advanced) | - |
| `VITE_GTM_ENABLED_IN_DEV` | Enable GTM in development | `false` |
| `VITE_GTM_DEBUG` | Enable debug logging | `false` (prod), `true` (dev) |

### Vercel Environment Variables

Add these to your Vercel project settings:

```
VITE_GTM_WEB_ID=GTM-58XSC997
VITE_GTM_SERVER_ID=GTM-T7NM8RJK
VITE_GTM_ENABLED_IN_DEV=false
VITE_GTM_DEBUG=false
```

---

## Architecture

### File Structure

```
aide-brasil-website/
├── gtm/
│   ├── README.md                    # This file
│   ├── events-catalog.md            # All tracked events
│   ├── implementation-guide.md      # GTM dashboard setup
│   └── gtm-container-config.json    # Container backup
│
├── src/
│   ├── lib/
│   │   └── gtm/
│   │       ├── index.js             # Main initialization
│   │       ├── events.js            # Event tracking functions
│   │       ├── dataLayer.js         # Data layer utilities
│   │       └── consent.js           # LGPD consent management
│   │
│   └── hooks/
│       └── useGTMTracking.js        # React hooks
```

### How It Works

1. **Initialization** ([src/main.jsx](../src/main.jsx))
   - GTM initialized on app startup
   - DataLayer created
   - Initial page view tracked

2. **Route Tracking** ([src/App.jsx](../src/App.jsx))
   - `usePageTracking` hook tracks route changes
   - Automatic page views on navigation

3. **Event Tracking** ([src/components/shared/WebhookForm.jsx](../src/components/shared/WebhookForm.jsx))
   - Form submissions tracked
   - Webinar registrations tracked
   - Custom events tracked

---

## Usage

### Tracking Events in Components

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

  return <button onClick={handleClick}>Inscreva-se</button>
}
```

### Available Tracking Functions

```javascript
// Generic event
trackEvent('custom_event', { key: 'value' })

// Form submission
trackFormSubmission({
  formId: 'newsletter',
  formName: 'Newsletter Signup',
  formType: 'lead'
})

// Webinar registration
trackWebinarRegistration({
  webinarId: 'claude-code-webinar',
  webinarTitle: 'Dominando Claude Code',
  userEmail: 'user@example.com'
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
  action: 'play'
})

// Scroll depth
trackScrollDepth(75)

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
  // Automatic page view tracking
  usePageTracking()

  // Track when users scroll to 25%, 50%, 75%, 100%
  useScrollTracking([25, 50, 75, 100])

  // Track time spent on page every 30 seconds
  useTimeTracking(30)

  return <div>My Page</div>
}
```

---

## Deployment

### Deploy to Vercel

1. **Add Environment Variables**
   ```bash
   vercel env add VITE_GTM_WEB_ID
   # Enter: GTM-58XSC997

   vercel env add VITE_GTM_SERVER_ID
   # Enter: GTM-T7NM8RJK
   ```

2. **Deploy**
   ```bash
   git push origin main
   # Vercel auto-deploys
   ```

3. **Verify**
   - Visit your production site
   - Open browser console
   - Look for `[GTM] Initialized` message
   - Use GTM Preview mode to test

### Manual Deployment

If you need to manually update GTM scripts:

1. Go to GTM dashboard
2. Click **Submit** to publish changes
3. Changes are live immediately (no redeploy needed!)

---

## Testing

### Local Testing

```bash
# Start dev server
npm run dev

# Open browser console
# Look for: [GTM] Initialized (if VITE_GTM_ENABLED_IN_DEV=true)
```

### GTM Preview Mode

1. Open [tagmanager.google.com](https://tagmanager.google.com)
2. Select container `GTM-58XSC997`
3. Click **Preview**
4. Enter your site URL
5. Interact with your site
6. Verify events in GTM debugger

### Production Testing

1. Deploy to production
2. Open site
3. Open browser DevTools → Network tab
4. Filter by `gtm`
5. Verify GTM scripts loaded
6. Check Console for `[GTM]` messages

### Testing Checklist

- [ ] GTM scripts load on page load
- [ ] Initial page view tracked
- [ ] Route changes tracked
- [ ] Form submissions tracked
- [ ] CTA clicks tracked
- [ ] No console errors

---

## Troubleshooting

### GTM Not Loading

**Problem:** No GTM scripts in page source

**Solution:**
1. Check environment variables are set
2. Verify `VITE_GTM_WEB_ID` is correct
3. Check browser console for errors
4. Ensure you're in production mode or `VITE_GTM_ENABLED_IN_DEV=true`

### Events Not Tracking

**Problem:** Events not appearing in GTM

**Solution:**
1. Check GTM Preview mode
2. Verify dataLayer is defined: `console.log(window.dataLayer)`
3. Check browser console for GTM errors
4. Verify triggers are configured in GTM dashboard

### Page Views Not Tracking on Route Change

**Problem:** Only first page view tracked

**Solution:**
1. Verify `usePageTracking()` hook is used in App.jsx
2. Check that it's inside `<Router>` component
3. Verify GTM has a "History Change" trigger configured

### Development Mode Issues

**Problem:** GTM not working locally

**Solution:**
1. Set `VITE_GTM_ENABLED_IN_DEV=true` in `.env.local`
2. Restart dev server
3. Or use GTM Preview mode to test on localhost

### CORS Errors

**Problem:** GTM blocked by CORS

**Solution:**
1. Check browser extensions (ad blockers)
2. Disable ad blockers for testing
3. Use GTM Preview mode
4. Check server-side GTM configuration (advanced)

---

## Advanced Features

### Server-Side GTM

For enhanced privacy and tracking accuracy, you can configure server-side GTM:

1. Set up Google Cloud Run or custom server
2. Configure `VITE_GTM_SERVER_URL` environment variable
3. Update GTM server container `GTM-T7NM8RJK`

See [implementation-guide.md](./implementation-guide.md) for details.

### Consent Mode (LGPD/GDPR)

Consent management is ready but not active by default. To enable:

```javascript
import { grantAllConsent, denyAllConsent } from '../lib/gtm/consent'

// When user accepts cookies
grantAllConsent()

// When user rejects cookies
denyAllConsent()
```

---

## Support

- **Documentation:** See [events-catalog.md](./events-catalog.md) for all tracked events
- **GTM Dashboard:** [tagmanager.google.com](https://tagmanager.google.com)
- **Issues:** Contact development team

---

**Last Updated:** 2025-10-15
**Version:** 1.0.0
**Container:** GTM-58XSC997
