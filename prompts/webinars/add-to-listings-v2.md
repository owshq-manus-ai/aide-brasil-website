# 📋 Add Webinar to Listings - Updated Template v2.0

## Quick Integration Guide for New Webinars

### 1. ROUTES CONFIGURATION

#### Add to main App.jsx or routes config:

```jsx
// src/App.jsx (or wherever routes are defined)
import { lazy, Suspense } from 'react'

// Lazy load the webinar page
const YourWebinarName = lazy(() =>
  import('./features/webinars/pages/YourWebinarNameWebinar')
)

// In your routes:
<Route
  path="/webinars/your-webinar-slug"
  element={
    <Suspense fallback={<LoadingSpinner />}>
      <YourWebinarName />
    </Suspense>
  }
/>
```

### 2. WEBHOOK CONFIGURATION

#### Add to `/src/config/webhook-endpoints.js`:

```javascript
// In the webinars section
webinars: {
  // ... existing webinars
  'your-webinar-slug': {
    url: import.meta.env.VITE_WEBHOOK_WEBINAR_YOUR_NAME ||
         'https://primary-production-1ebc.up.railway.app/webhook/webinar-your-slug',
    fields: ['name', 'email', 'phone'],  // MANDATORY
    metadata: {
      type: 'webinar',
      product: 'your-webinar-product-name',
      duration: '90 minutes',
      format: 'live',
      instructor: 'Instructor Name',
      date: '2024-XX-XX',
      time: '20:00'
    }
  }
}
```

### 3. WEBINAR HUB LISTING

#### Add to `/src/features/webinars/pages/WebinarsListPage.jsx`:

```jsx
const webinars = [
  // ... existing webinars
  {
    id: 'your-webinar-slug',
    title: 'Your Webinar Title',
    subtitle: 'Compelling subtitle that explains the value',
    date: 'DD de Mês',
    time: '20:00',
    duration: '90 minutos',
    instructor: {
      name: 'Instructor Name',
      role: 'Instructor Role/Title',
      image: '/images/team/instructor.png'  // or use existing
    },
    topics: [
      'Topic 1 that will be covered',
      'Topic 2 with specific technique',
      'Topic 3 practical application',
      'Topic 4 advanced strategies'
    ],
    benefits: [
      {
        icon: Code,
        text: 'Benefit 1'
      },
      {
        icon: Terminal,
        text: 'Benefit 2'
      },
      {
        icon: Zap,
        text: 'Benefit 3'
      }
    ],
    color: {
      primary: '#a855f7',    // Main theme color
      secondary: '#8b5cf6',   // Secondary color
      gradient: 'from-purple-600 to-violet-600',  // Tailwind gradient
      glow: 'purple'          // For shadow effects
    },
    link: '/webinars/your-webinar-slug',
    status: 'upcoming',  // 'upcoming', 'live', 'recorded'
    spotsLeft: 47,       // Number for urgency
    tags: ['AI', 'Automation', 'Advanced']  // Category tags
  }
]
```

### 4. NAVIGATION MENU

#### Add to navigation component if exists:

```jsx
// In your navigation menu or header component
const webinarMenuItems = [
  // ... existing items
  {
    label: 'Your Webinar Short Name',
    href: '/webinars/your-webinar-slug',
    badge: 'Novo',  // Optional
    icon: Sparkles   // Optional
  }
]
```

### 5. HOME PAGE FEATURE (Optional)

#### If featuring on homepage:

```jsx
// In HomePage.jsx or similar
const FeaturedWebinar = () => (
  <section className="py-20 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 to-black
          rounded-3xl p-8 border border-purple-500/20"
      >
        <div className="absolute top-4 right-4">
          <span className="bg-green-500/20 text-green-400 px-3 py-1
            rounded-full text-sm font-semibold">
            Próximo Webinário
          </span>
        </div>

        <h3 className="text-3xl font-bold text-white mb-4">
          Your Webinar Title
        </h3>

        <p className="text-white/70 mb-6">
          Brief description of what attendees will learn
        </p>

        <div className="flex gap-4">
          <Link
            to="/webinars/your-webinar-slug"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600
              text-white rounded-lg font-semibold hover:shadow-xl
              hover:shadow-purple-500/30 transition-all"
          >
            Garantir Vaga
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
)
```

### 6. ENVIRONMENT VARIABLES

#### Add to `.env.local`:

```bash
# Webhook for Your Webinar Name
VITE_WEBHOOK_WEBINAR_YOUR_NAME=https://your-n8n-instance.com/webhook/your-id
```

### 7. SEO METADATA (Optional)

#### If using React Helmet or similar:

```jsx
// In your webinar component
import { Helmet } from 'react-helmet'

<Helmet>
  <title>Your Webinar Title | AI Data Engineer Academy</title>
  <meta
    name="description"
    content="Join our free webinar about [topic]. Learn [key benefit] with [instructor]."
  />
  <meta property="og:title" content="Your Webinar Title" />
  <meta property="og:description" content="Webinar description" />
  <meta property="og:image" content="/images/webinars/your-webinar-og.png" />
  <meta property="og:url" content="https://yoursite.com/webinars/your-webinar-slug" />
</Helmet>
```

### 8. ANALYTICS TRACKING

#### Add to your webinar page:

```jsx
// Track page view
useEffect(() => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: 'Your Webinar Name',
      page_path: '/webinars/your-webinar-slug',
      page_location: window.location.href
    })
  }
}, [])

// Track registration (already in WebhookForm onSuccess)
onSuccess={(data) => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'webinar_registration',
      'value': 1.0,
      'currency': 'BRL',
      'event_label': 'Your Webinar Name'
    })
  }
}
```

### 9. TESTING CHECKLIST

Before going live:

- [ ] Route works at `/webinars/your-webinar-slug`
- [ ] Webhook endpoint configured in `webhook-endpoints.js`
- [ ] Form validates all 3 fields (name, email, phone)
- [ ] Phone formatting works correctly
- [ ] Success message displays after submission
- [ ] Webhook receives data (check n8n/webhook service)
- [ ] Mobile responsive layout works
- [ ] Listed in webinars hub page
- [ ] Analytics tracking fires correctly
- [ ] Environment variables set (if not using default)

### 10. QUICK DEPLOYMENT

```bash
# 1. Test locally
npm run dev
# Visit: http://localhost:5173/webinars/your-webinar-slug

# 2. Test webhook form
# Visit: http://localhost:5173/webhook-test

# 3. Build for production
npm run build

# 4. Deploy
npm run deploy  # or your deployment command
```

### 11. POST-LAUNCH TASKS

- [ ] Monitor webhook submissions in n8n/automation tool
- [ ] Check analytics for registration conversions
- [ ] Set up email automation for registrants
- [ ] Create WhatsApp broadcast list
- [ ] Schedule reminder emails
- [ ] Prepare webinar materials
- [ ] Test streaming platform

### 12. COMMON ISSUES & FIXES

#### Form not submitting?
- Check webhook URL in `webhook-endpoints.js`
- Verify environment variables are loaded
- Check browser console for errors

#### Phone validation failing?
- Ensure using Brazilian format
- Check `validation.js` is imported correctly

#### Page not found?
- Verify route added to router
- Check file name and location
- Ensure lazy loading syntax is correct

#### Webhook not receiving data?
- Check CORS settings on webhook endpoint
- Verify webhook URL is accessible
- Check network tab for response

---

## 📝 QUICK COPY-PASTE TEMPLATE

```jsx
// 1. Add to webhook-endpoints.js
'new-webinar': {
  url: import.meta.env.VITE_WEBHOOK_WEBINAR_NEW || 'https://default-url',
  fields: ['name', 'email', 'phone'],
  metadata: { type: 'webinar', product: 'new-webinar' }
}

// 2. Add route
<Route path="/webinars/new-webinar" element={<NewWebinar />} />

// 3. Create component with WebhookForm
<WebhookForm
  webhookType="webinars-new-webinar"
  fields={['name', 'email', 'phone']}
  buttonText="Garantir Minha Vaga"
/>
```

That's it! The standardized system handles everything else automatically.