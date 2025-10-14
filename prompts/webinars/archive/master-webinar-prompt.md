# 🎯 MASTER WEBINAR CREATION PROMPT
## Complete System for Perfect Webinar Pages

### 🚀 ONE-COMMAND WEBINAR GENERATION

Use this master prompt to generate a complete webinar page:

```
Create a new webinar page for "[WEBINAR_TITLE]" about [TOPIC].

Key Details:
- Slug: [webinar-url-slug]
- Date: [DATE]
- Time: [TIME] (Brasília)
- Duration: [DURATION] minutes
- Instructor: [INSTRUCTOR_NAME] - [ROLE]
- Color Theme: [purple/orange/green/blue]

Learning Objectives:
1. [OBJECTIVE_1]
2. [OBJECTIVE_2]
3. [OBJECTIVE_3]
4. [OBJECTIVE_4]

Target Audience: [DESCRIPTION]
Main Promise: [WHAT_THEY_WILL_ACHIEVE]

Follow the patterns in:
- /src/features/webinars/pages/ClaudeCodeWebinar.jsx (structure reference)
- /prompts/webinars/webinar-generator-v2.md (implementation guide)
- /src/components/shared/WebhookForm (form component)
- /src/config/webhook-endpoints.js (webhook configuration)

CRITICAL REQUIREMENTS:
1. Use WebhookForm component with fields: ['name', 'email', 'phone']
2. Include 3-layer background system (gradient, radial overlays, texture)
3. Hero must be 2-column grid (content left, form right)
4. Include animated attendee counter
5. Add webhook configuration to webhook-endpoints.js
6. Use Brazilian phone validation
7. Include all sections: Hero, Agenda, Statistics, Instructor, Guarantee, Final CTA
```

### 📁 FILE STRUCTURE REQUIREMENTS

```
PROJECT STRUCTURE:
/src/
├── features/
│   └── webinars/
│       └── pages/
│           └── [WebinarName]Webinar.jsx  ← YOUR NEW FILE HERE
├── components/
│   ├── shared/
│   │   ├── WebhookForm.jsx      ← USE THIS FOR FORMS
│   │   └── OptimizedBackground.jsx
│   └── ui/
├── config/
│   └── webhook-endpoints.js      ← ADD WEBHOOK CONFIG HERE
├── hooks/
│   └── useWebhook.js             ← WEBHOOK LOGIC
└── utils/
    └── validation.js             ← PHONE/EMAIL VALIDATION
```

### 🎨 COLOR THEMES

```javascript
// PURPLE THEME (AI/Tech/Innovation)
const purpleTheme = {
  primary: '#a855f7',
  secondary: '#8b5cf6',
  metallic: '#c084fc',
  dark1: '#1a0f2a',
  dark2: '#0f0a1a',
  gradient: 'from-purple-600 to-violet-600'
}

// ORANGE THEME (Energy/Action/Results)
const orangeTheme = {
  primary: '#f97316',
  secondary: '#f59e0b',
  metallic: '#fb923c',
  dark1: '#2a1a0f',
  dark2: '#1a0f0a',
  gradient: 'from-orange-600 to-amber-600'
}

// GREEN THEME (Growth/Success/Money)
const greenTheme = {
  primary: '#10b981',
  secondary: '#22c55e',
  metallic: '#34d399',
  dark1: '#0a2a1a',
  dark2: '#0f1a0a',
  gradient: 'from-emerald-600 to-green-600'
}

// BLUE THEME (Professional/Trust/Corporate)
const blueTheme = {
  primary: '#0ea5e9',
  secondary: '#06b6d4',
  metallic: '#38bdf8',
  dark1: '#0a1a2a',
  dark2: '#0a0f1a',
  gradient: 'from-sky-600 to-cyan-600'
}
```

### 🔧 MANDATORY COMPONENTS

#### 1. WEBHOOK FORM (ALL PAGES MUST USE THIS)
```jsx
import WebhookForm from '../../../components/shared/WebhookForm'

<WebhookForm
  webhookType="webinars-your-slug"     // Matches webhook-endpoints.js
  fields={['name', 'email', 'phone']}  // ALWAYS these 3 fields
  buttonText="Garantir Minha Vaga"
  successMessage="🎉 Vaga garantida!"
  showLabels={false}
  compact={true}
  onSuccess={(data) => {
    // Track conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'webinar_registration',
        'event_label': 'Your Webinar Name'
      })
    }
  }}
/>
```

#### 2. BACKGROUND SYSTEM (COPY EXACTLY)
```jsx
<div className="fixed inset-0" style={{ zIndex: -10 }}>
  {/* Layer 1: Deep gradient */}
  <div style={{
    background: `linear-gradient(135deg,
      #000000 0%, #0a0a0f 15%, ${dark1} 30%,
      ${metallic} 45%, #1a1a1a 60%, ${dark2} 75%, #000000 100%
    )`,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 2: Radial overlays */}
  <div style={{
    background: `radial-gradient(circle at 20% 20%, ${primaryRgba10} 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, ${secondaryRgba08} 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, ${accentRgba06} 0%, transparent 50%)`,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 3: Texture */}
  <div style={{
    background: `repeating-linear-gradient(45deg, transparent, transparent 2px,
                ${primaryRgba01} 2px, ${primaryRgba01} 4px)`,
    position: 'absolute',
    inset: 0
  }} />
</div>
```

#### 3. ATTENDEE COUNTER (URGENCY)
```jsx
const [attendeeCount, setAttendeeCount] = useState(103)

useEffect(() => {
  const timer = setInterval(() => {
    setAttendeeCount(prev => prev + Math.floor(Math.random() * 3))
  }, 30000)
  return () => clearInterval(timer)
}, [])

// In JSX:
<div className="inline-flex items-center gap-3">
  <div className="relative">
    <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse" />
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
    </span>
  </div>
  <span className="text-green-400 font-semibold">
    {attendeeCount} pessoas online agora
  </span>
</div>
```

### 📋 COMPLETE CHECKLIST

#### Before Starting:
- [ ] Define webinar slug (URL path)
- [ ] Choose color theme
- [ ] Prepare instructor info
- [ ] Define learning objectives
- [ ] Set date and time

#### Implementation:
- [ ] Create file in `/src/features/webinars/pages/`
- [ ] Import WebhookForm component
- [ ] Add webhook to `webhook-endpoints.js`
- [ ] Implement 3-layer background
- [ ] Add attendee counter
- [ ] Create 2-column hero layout
- [ ] Add all required sections
- [ ] Include validation utilities
- [ ] Add analytics tracking

#### Testing:
- [ ] Test at `/webinars/your-slug`
- [ ] Verify form validation (all 3 fields)
- [ ] Check phone formatting
- [ ] Test webhook submission
- [ ] Verify mobile responsive
- [ ] Check all animations
- [ ] Test in webhook test page

#### Deployment:
- [ ] Add to routes configuration
- [ ] Update webinars listing page
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Test live webhook
- [ ] Monitor first registrations

### 🚨 CRITICAL RULES

1. **NEVER** create forms without WebhookForm component
2. **ALWAYS** require name, email, and phone
3. **MUST** include Brazilian phone formatting
4. **ALWAYS** use the 3-layer background system
5. **NEVER** center the hero (must be 2-column)
6. **MUST** include animated elements
7. **ALWAYS** track conversions with gtag
8. **NEVER** hardcode webhook URLs
9. **MUST** be mobile responsive
10. **ALWAYS** show success messages

### 💡 PRO TIPS

1. **Copy from existing**: Start with ClaudeCodeWebinar.jsx as base
2. **Use the test page**: Always test at `/webhook-test` first
3. **Check validation**: Test with invalid phone/email
4. **Monitor console**: Watch for webhook errors
5. **Test mobile**: Always check responsive layout
6. **Use lazy loading**: Import with React.lazy()
7. **Track everything**: Add analytics from start
8. **Document webhook**: Add clear webhook documentation

### 🎯 QUALITY METRICS

Your webinar page is perfect when:
- ✅ Forms validate and format correctly
- ✅ Webhook receives all data
- ✅ Animations run smoothly
- ✅ Mobile layout works perfectly
- ✅ Page loads under 2 seconds
- ✅ All sections have proper spacing
- ✅ Colors match the theme consistently
- ✅ Success messages display clearly
- ✅ No console errors
- ✅ Analytics track all events

### 📝 FINAL TEMPLATE

```jsx
// COMPLETE WEBINAR TEMPLATE
// Location: /src/features/webinars/pages/[Name]Webinar.jsx

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WebhookForm from '../../../components/shared/WebhookForm'
import {
  Clock, Calendar, User, Users, Check, Star,
  Zap, Bot, Code, Terminal, ChevronRight
} from 'lucide-react'

const YourWebinarNameWebinar = () => {
  // ALL IMPLEMENTATION FOLLOWING ABOVE PATTERNS

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 3-LAYER BACKGROUND */}
      {/* HERO SECTION WITH 2-COLUMN GRID */}
      {/* AGENDA SECTION */}
      {/* STATISTICS SECTION */}
      {/* INSTRUCTOR SECTION */}
      {/* GUARANTEE SECTION */}
      {/* FINAL CTA WITH WEBHOOK FORM */}
    </div>
  )
}

export default YourWebinarNameWebinar
```

---

## 🚀 READY TO CREATE!

With this master prompt, you can generate perfect webinar pages that:
- Look professional and modern
- Have proper validation
- Submit to webhooks correctly
- Track conversions
- Work on all devices
- Follow best practices
- Maintain consistency

Just fill in the variables and follow the patterns!