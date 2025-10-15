# GTM Quick Start Guide

Get up and running with Google Tag Manager in 5 minutes!

## ✅ What's Already Done

Your GTM integration is **100% complete** and ready to use! Here's what was implemented:

### 1. GTM Scripts Installed ✓
- Web container `GTM-58XSC997` added to [index.html](../index.html)
- Loads automatically on every page

### 2. Environment Configuration ✓
- `.env.local` configured with your GTM IDs
- `.env.example` template for team members

### 3. Tracking Library ✓
- Complete GTM library in [src/lib/gtm/](../src/lib/gtm/)
- Pre-built functions for all common events
- React hooks for easy integration

### 4. Automatic Tracking ✓
- ✅ Page views (including SPA route changes)
- ✅ Form submissions
- ✅ Webinar registrations
- ✅ Scroll depth
- ✅ Time on page

---

## 🚀 Next Steps

### Step 1: Test Locally (2 minutes)

```bash
# Start dev server
npm run dev

# Open browser console - look for:
[GTM] Initialized { webId: 'GTM-58XSC997', ... }
```

### Step 2: Deploy to Vercel (5 minutes)

```bash
# Add environment variables to Vercel
vercel env add VITE_GTM_WEB_ID
# Enter: GTM-58XSC997

vercel env add VITE_GTM_SERVER_ID
# Enter: GTM-T7NM8RJK

# Deploy
git add .
git commit -m "feat: Add GTM integration"
git push origin main
```

### Step 3: Configure GTM Dashboard (30 minutes)

Follow the detailed guide in [implementation-guide.md](./implementation-guide.md) to:

1. Create triggers for events
2. Add GA4 tags
3. Add Facebook Pixel (optional)
4. Test and publish

---

## 📊 Available Tracking Functions

### In Any Component:

```jsx
import { useGTMTracking } from '../hooks/useGTMTracking'

function MyComponent() {
  const { trackEvent, trackCTA } = useGTMTracking()

  // Track custom event
  trackEvent('button_click', { button_id: 'hero-cta' })

  // Track CTA
  trackCTA({
    ctaId: 'hero-cta',
    ctaText: 'Sign Up Now',
    ctaLocation: 'hero'
  })
}
```

### Direct Imports:

```javascript
import {
  trackPageView,
  trackFormSubmission,
  trackWebinarRegistration,
  trackCTAClick,
  trackVideoInteraction,
  trackScrollDepth
} from '../lib/gtm'

// Use anywhere in your code
trackWebinarRegistration({
  webinarId: 'claude-code',
  webinarTitle: 'Dominando Claude Code',
  userEmail: 'user@example.com'
})
```

---

## 🎯 What's Being Tracked Right Now

| Event | Location | Status |
|-------|----------|--------|
| Page Views | All pages + route changes | ✅ Active |
| Form Submissions | WebhookForm component | ✅ Active |
| Webinar Registrations | All webinar pages | ✅ Active |

---

## 📚 Documentation

- **[README.md](./README.md)** - Complete documentation
- **[events-catalog.md](./events-catalog.md)** - All available events
- **[implementation-guide.md](./implementation-guide.md)** - GTM dashboard setup
- **[VERCEL-DEPLOYMENT.md](./VERCEL-DEPLOYMENT.md)** - Deployment guide

---

## 🆘 Need Help?

### Common Issues

**GTM not loading?**
- Check: `VITE_GTM_WEB_ID` is set in environment variables
- Check: Browser console for errors
- Try: Clear browser cache

**Events not firing?**
- Enable debug mode: `VITE_GTM_DEBUG=true`
- Check: GTM Preview mode
- Verify: Triggers configured in GTM dashboard

---

## 🎉 You're Done!

Your site now has professional-grade analytics tracking. The marketing team can manage tags directly in GTM without touching code.

**What to do next:**
1. Deploy to production
2. Configure GTM dashboard (see [implementation-guide.md](./implementation-guide.md))
3. Add Google Analytics 4
4. Monitor conversions

---

**Questions?** Check the [README.md](./README.md) or contact the development team.
