# 🚀 Enhanced Webinar Page Generator v2.0
## Aligned with Current Repository Structure & Best Practices

### 📁 REPOSITORY STRUCTURE REFERENCE

```
/src/
├── features/              # Feature-based modules
│   └── webinars/
│       └── pages/        # Webinar page components
├── components/
│   ├── shared/           # WebhookForm, OptimizedBackground, LazyImage
│   └── ui/               # Reusable UI components
├── config/
│   ├── webhooks.js       # Legacy webhook config
│   └── webhook-endpoints.js  # NEW: Centralized webhook endpoints
├── hooks/
│   └── useWebhook.js     # NEW: Webhook submission hook
├── utils/
│   └── validation.js     # NEW: Email/phone validation utilities
└── styles/
```

### 🎯 CRITICAL REQUIREMENTS

## 1. FILE LOCATION & IMPORTS

```jsx
// File location: /src/features/webinars/pages/[WebinarName]Webinar.jsx

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WebhookForm from '../../../components/shared/WebhookForm'  // MANDATORY
import { validateRequiredFields, phoneMask } from '../../../utils/validation'  // MANDATORY
import {
  // Import all needed Lucide icons
  Clock, Calendar, User, Users, Play, ChevronRight,
  Sparkles, Star, Check, AlertCircle, X, Zap, Bot,
  Code, Terminal, GitBranch, Cpu, Database, Cloud
} from 'lucide-react'
```

## 2. WEBHOOK CONFIGURATION

### Add to `/src/config/webhook-endpoints.js`:
```javascript
webinars: {
  '[webinar-slug]': {
    url: import.meta.env.VITE_WEBHOOK_WEBINAR_[NAME] || 'https://primary-production-1ebc.up.railway.app/webhook/webinar-[slug]',
    fields: ['name', 'email', 'phone'],  // MANDATORY: All three fields required
    metadata: {
      type: 'webinar',
      product: '[webinar-product-name]',
      duration: '[duration] minutes',
      format: 'live'
    }
  }
}
```

## 3. BACKGROUND SYSTEM (MANDATORY)

```jsx
const WebinarPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FIXED 3-LAYER BACKGROUND - DO NOT MODIFY */}
      <div className="fixed inset-0" style={{ zIndex: -10 }}>
        {/* Layer 1: Deep gradient base */}
        <div style={{
          background: `linear-gradient(135deg,
            #000000 0%,
            #0a0a0f 15%,
            #[DARK_HEX] 30%,      // e.g., #1a0f2a for purple theme
            #[METALLIC_HEX] 45%,  // e.g., #2d1f3d for purple metallic
            #1a1a1a 60%,
            #[DARK_HEX_2] 75%,    // e.g., #0f0a1a
            #000000 100%)
          `,
          position: 'absolute',
          inset: 0
        }} />

        {/* Layer 2: Radial metallic overlays */}
        <div style={{
          background: `radial-gradient(circle at 20% 20%, [PRIMARY_RGBA_10] 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, [SECONDARY_RGBA_08] 0%, transparent 50%),
                      radial-gradient(circle at 40% 70%, [ACCENT_RGBA_06] 0%, transparent 50%)`,
          position: 'absolute',
          inset: 0
        }} />

        {/* Layer 3: Subtle texture */}
        <div style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            [PRIMARY_RGBA_01] 2px,
            [PRIMARY_RGBA_01] 4px
          )`,
          position: 'absolute',
          inset: 0
        }} />
      </div>

      {/* Content sections */}
      <HeroSection />
      <AgendaSection />
      <StatisticsSection />
      <InstructorSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  )
}
```

## 4. HERO SECTION WITH WEBHOOK FORM

```jsx
const HeroSection = () => {
  const [attendeeCount, setAttendeeCount] = useState(103)

  // Increment attendee count
  useEffect(() => {
    const timer = setInterval(() => {
      setAttendeeCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-12 pb-20 px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Online Status Badge */}
            <div className="inline-flex items-center gap-3 bg-green-500/10 backdrop-blur-sm
              border border-green-500/30 rounded-full px-4 py-2">
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

            {/* Main Title with Metallic Gradient */}
            <h1 className="text-5xl lg:text-6xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r
                from-[PRIMARY_COLOR] via-[METALLIC_COLOR] to-[SECONDARY_COLOR]">
                [WEBINAR TITLE]
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-white/80">
              [COMPELLING SUBTITLE]
            </p>

            {/* Key Features with Icon Boxes */}
            <div className="space-y-4">
              {[
                { icon: Code, text: '[FEATURE 1]' },
                { icon: Terminal, text: '[FEATURE 2]' },
                { icon: Bot, text: '[FEATURE 3]' },
                { icon: Zap, text: '[FEATURE 4]' }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[PRIMARY] to-[SECONDARY]
                    rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Date/Time Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-4 h-4" />
                <span>[DATE]</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4" />
                <span>[TIME] (Horário de Brasília)</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Learn Card + Form */}
          <div className="space-y-8">
            {/* What You'll Learn Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[PRIMARY]/20 to-[SECONDARY]/20
                rounded-2xl blur-xl" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-[PRIMARY]/30
                rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[PRIMARY]" />
                  O que você vai aprender
                </h3>
                <ul className="space-y-3">
                  {[
                    '[LEARNING POINT 1]',
                    '[LEARNING POINT 2]',
                    '[LEARNING POINT 3]',
                    '[LEARNING POINT 4]'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* WEBHOOK FORM - MANDATORY IMPLEMENTATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[PRIMARY]/20 to-[SECONDARY]/20
                rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90
                backdrop-blur-sm rounded-2xl p-8 border border-[PRIMARY]/30">

                <h3 className="text-2xl font-bold text-white mb-2">
                  Garanta sua vaga gratuita
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Preencha os dados e receba o link de acesso
                </p>

                {/* STANDARDIZED WEBHOOK FORM */}
                <WebhookForm
                  webhookType="webinars-[webinar-slug]"  // Match webhook-endpoints.js
                  fields={['name', 'email', 'phone']}    // MANDATORY: all 3 fields
                  buttonText="Garantir Minha Vaga Agora"
                  successMessage="🎉 Vaga garantida! Você receberá os detalhes por WhatsApp e e-mail."
                  showLabels={false}
                  compact={true}
                  onSuccess={(data) => {
                    // Track conversion
                    if (window.gtag) {
                      window.gtag('event', 'conversion', {
                        'send_to': 'webinar_registration',
                        'value': 1.0,
                        'currency': 'BRL',
                        'event_label': '[WEBINAR NAME]'
                      })
                    }
                  }}
                />

                <p className="text-xs text-white/40 text-center mt-4">
                  Seus dados estão seguros. Respeitamos sua privacidade.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## 5. FINAL CTA SECTION WITH WEBHOOK

```jsx
const FinalCTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[PRIMARY]/5 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Última chance de garantir sua vaga
        </motion.h2>

        <p className="text-xl text-white/70 mb-12">
          As vagas estão acabando. Não perca esta oportunidade única.
        </p>

        {/* Centered Form Card */}
        <motion.div className="max-w-lg mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90
            backdrop-blur-sm rounded-2xl p-8 border border-[PRIMARY]/30">

            <WebhookForm
              webhookType="webinars-[webinar-slug]"
              fields={['name', 'email', 'phone']}
              buttonText="Quero Garantir Minha Vaga"
              successMessage="✅ Tudo certo! Você está inscrito no webinário."
              showLabels={true}
              onSuccess={(data) => {
                console.log('Final CTA conversion:', data)
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

## 6. COLOR SCHEMES BY THEME

### Purple/Violet Theme (AI/Tech)
```javascript
PRIMARY: '#a855f7'      // purple-500
SECONDARY: '#8b5cf6'    // violet-500
METALLIC: '#c084fc'     // purple-400
DARK_1: '#1a0f2a'
DARK_2: '#0f0a1a'
```

### Orange/Amber Theme (Energy/Innovation)
```javascript
PRIMARY: '#f97316'      // orange-500
SECONDARY: '#f59e0b'    // amber-500
METALLIC: '#fb923c'     // orange-400
DARK_1: '#2a1a0f'
DARK_2: '#1a0f0a'
```

### Green/Emerald Theme (Growth/Success)
```javascript
PRIMARY: '#10b981'      // emerald-500
SECONDARY: '#22c55e'    // green-500
METALLIC: '#34d399'     // emerald-400
DARK_1: '#0a2a1a'
DARK_2: '#0f1a0a'
```

### Blue/Cyan Theme (Professional/Trust)
```javascript
PRIMARY: '#0ea5e9'      // sky-500
SECONDARY: '#06b6d4'    // cyan-500
METALLIC: '#38bdf8'     // sky-400
DARK_1: '#0a1a2a'
DARK_2: '#0a0f1a'
```

## 7. VALIDATION REQUIREMENTS

All forms MUST include:
- **Email**: Valid format (user@domain.com)
- **Phone**: Brazilian format - auto-formats to (XX) XXXXX-XXXX
- **Name**: Minimum 2 characters

```javascript
// Validation is handled automatically by WebhookForm
// Phone examples:
// Input: "11987654321" → Output: "(11) 98765-4321"
// Input: "1134567890" → Output: "(11) 3456-7890"
```

## 8. TESTING CHECKLIST

Before deploying any webinar page:

- [ ] Webhook endpoint added to `webhook-endpoints.js`
- [ ] WebhookForm component properly imported
- [ ] All 3 fields (name, email, phone) present
- [ ] Phone validation working (Brazilian format)
- [ ] Success messages displaying correctly
- [ ] Analytics tracking implemented
- [ ] Mobile responsive layout verified
- [ ] Background layers rendering correctly
- [ ] Attendee counter animating
- [ ] All icons loading from Lucide

## 9. FILE STRUCTURE EXAMPLE

```
/src/features/webinars/pages/
└── DomineAIToolsWebinar.jsx  // Complete webinar page

/src/config/
└── webhook-endpoints.js      // Add new endpoint

/public/images/
└── webinars/                  // Webinar-specific images
    └── domine-ai-tools/
        └── instructor.png
```

## 10. COMMON MISTAKES TO AVOID

❌ **DON'T** create forms without validation
❌ **DON'T** forget to add webhook to config
❌ **DON'T** use inline styles for backgrounds (use style prop)
❌ **DON'T** forget mobile responsiveness
❌ **DON'T** hardcode webhook URLs
❌ **DON'T** skip the 3-layer background system
❌ **DON'T** center the hero (must be 2-column grid)
❌ **DON'T** forget the attendee counter
❌ **DON'T** miss the metallic text gradients
❌ **DON'T** skip phone formatting validation

## 11. QUICK START TEMPLATE

```bash
# 1. Create new webinar page
touch src/features/webinars/pages/YourWebinarName.jsx

# 2. Add webhook config
# Edit: src/config/webhook-endpoints.js

# 3. Add route (if using React Router)
# Edit: src/App.jsx or routes config

# 4. Test the form
# Visit: /webhook-test to verify form works
```

---

## 📋 COMPLETE COMPONENT TEMPLATE

Use this as your starting point for any new webinar:

```jsx
// src/features/webinars/pages/[YourWebinar]Webinar.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WebhookForm from '../../../components/shared/WebhookForm'
// ... rest of imports

const YourWebinarNameWebinar = () => {
  // Component implementation following above patterns
}

export default YourWebinarNameWebinar
```

Remember: The webhook system is already built. You just need to:
1. Add config to `webhook-endpoints.js`
2. Use `WebhookForm` component
3. Follow the color scheme
4. Maintain the 3-layer background

That's it! The validation, formatting, and submission are handled automatically.