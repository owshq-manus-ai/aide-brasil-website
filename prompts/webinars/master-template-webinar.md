# 🎯 MASTER WEBINAR TEMPLATE - Production Ready
## Based on AutonomousAgentsWebinar.jsx Implementation

This is the definitive template for generating new webinar pages. It follows the EXACT structure of the working implementation at `/webinars/domine-autonomous-code-agents`.

---

## 📋 QUICK GENERATION PROMPT

```
Create a new webinar page for "[WEBINAR_TITLE]" following the exact structure from AutonomousAgentsWebinar.jsx.

Key Details:
- Title: [TITLE]
- Highlight Word: [WORD_TO_HIGHLIGHT]
- Subtitle: [SUBTITLE]
- Date: [DATE]
- Time: [TIME] (Brasília)
- Duration: [DURATION]
- Slug: [webinar-url-slug]
- Color Theme: purple/green/blue/orange

The page must include:
1. Fixed 3-layer background system
2. Hero with 2-column layout (content left, form right)
3. Inline form handling (NOT WebhookForm)
4. All 8 sections as per template
5. Webhook configuration entry

File location: /src/features/webinars/pages/[WebinarName]Webinar.jsx
Route: /webinars/[webinar-slug]
```

---

## 🎨 COLOR THEMES

### Purple Theme (AI/Tech)
```javascript
primary: 'purple-500'
secondary: 'violet-500'
darkHex1: '#1a0f2a'
darkHex2: '#0f0a1a'
gradient: 'from-purple-600 to-violet-600'
```

### Green Theme (Growth/Success)
```javascript
primary: 'green-500'
secondary: 'emerald-500'
darkHex1: '#0a2a1a'
darkHex2: '#0f1a0a'
gradient: 'from-emerald-600 to-green-600'
```

### Blue Theme (Professional/Corporate)
```javascript
primary: 'blue-500'
secondary: 'cyan-500'
darkHex1: '#0a1a2a'
darkHex2: '#0a0f1a'
gradient: 'from-blue-600 to-cyan-600'
```

### Orange Theme (Energy/Action)
```javascript
primary: 'orange-500'
secondary: 'amber-500'
darkHex1: '#2a1a0f'
darkHex2: '#1a0f0a'
gradient: 'from-orange-600 to-amber-600'
```

---

## 📁 REQUIRED FILE STRUCTURE

```
/src/
├── features/
│   └── webinars/
│       └── pages/
│           └── [WebinarName]Webinar.jsx    ← NEW FILE HERE
├── config/
│   └── webhook-endpoints.js                ← ADD WEBHOOK CONFIG
├── App.jsx                                 ← ADD ROUTE
└── public/
    └── images/
        └── backgrounds/
            └── background-[webinar-name].png  ← OPTIONAL BACKGROUND
```

---

## 🔧 IMPLEMENTATION CHECKLIST

### 1. Component Structure
```jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  // Import all needed Lucide icons
  Calendar, Clock, Users, CheckCircle,
  ArrowLeft, Zap, Target, BookOpen, Brain,
  // ... add all icons used
} from 'lucide-react'
import Header from '../../../components/shared/Header'

// AnimatedCounter Component (copy from implementation)
const AnimatedCounter = ({ value, suffix = '', className }) => {
  // ... implementation
}

function [WebinarName]Webinar() {
  // State for form handling
  const [attendeeCount, setAttendeeCount] = useState(247)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Webinar configuration object
  const webinar = {
    // ... all webinar data
  }

  // Form handling
  const handleSubmit = async (e) => {
    e.preventDefault()
    // ... form submission logic
  }

  return (
    // ... component JSX
  )
}

export default [WebinarName]Webinar
```

### 2. Background System (MANDATORY)
```jsx
{/* FIXED BACKGROUND SYSTEM - CRITICAL */}
<div className="fixed inset-0" style={{ zIndex: -10 }}>
  {/* Layer 1: Deep gradient base */}
  <div style={{
    background: `linear-gradient(135deg,
      #000000 0%,
      #0a0a0f 15%,
      [DARK_HEX_1] 30%,
      [DARK_HEX_2] 45%,
      #1a1a1a 60%,
      [DARK_HEX_2] 75%,
      #000000 100%)`,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 2: Color overlays */}
  <div style={{
    background: `radial-gradient(...)`,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 3: Texture */}
  <div style={{
    background: `repeating-linear-gradient(...)`,
    position: 'absolute',
    inset: 0
  }} />
</div>
```

### 3. Webhook Configuration
Add to `/src/config/webhook-endpoints.js`:
```javascript
webinars: {
  '[webinar-slug]': {
    url: import.meta.env.VITE_WEBHOOK_WEBINAR_[NAME] ||
         'https://primary-production-1ebc.up.railway.app/webhook/webinar-[slug]',
    fields: ['name', 'email', 'phone'], // ALWAYS these 3 fields
    metadata: {
      type: 'webinar',
      product: '[product-name]',
      duration: '[duration]',
      format: 'live'
    }
  }
}
```

### 4. Route Configuration
Add to `/src/App.jsx`:
```javascript
const [WebinarName]Webinar = lazy(() =>
  import('./features/webinars/pages/[WebinarName]Webinar'))

// In routes:
<Route path="/webinars/[webinar-slug]" element={<[WebinarName]Webinar />} />
```

---

## 📝 CONTENT STRUCTURE

### SECTION 1 - HERO
- **Title**: Split into parts with highlight word
- **Subtitle**: One-line value proposition
- **Description**: 2-3 lines compelling copy
- **3 Feature Boxes**: Icon + short text
- **What You'll Learn**: 5 bullet points
- **Form**: Inline implementation with name, email, phone

### SECTION 2 - TRANSFORMATION
- **Before/After Comparison**: 2 cards side by side
- **Before**: Red theme, 6 pain points
- **After**: Purple/chosen theme, 6 benefits
- **Badge**: "Método Revolucionário" on after card

### SECTION 3 - BENEFITS
- **6 Benefit Cards**: Each with icon, title, description
- **Badges**: Duration and level for each benefit

### SECTION 4 - AGENDA
- **Timeline Format**: 4 modules minimum
- **Each Module**: Time, icon, topic, description

### SECTION 5 - INSTRUCTOR
- **Photo**: Can use background image with overlay
- **Bio**: Name, title, company, description
- **Achievements**: 4 bullet points
- **Social Links**: LinkedIn, Instagram

### SECTION 6 - STATISTICS
- **4 Stat Cards**: With AnimatedCounter
- **Each Card**: Icon, value, label, description, progress bar
- **Testimonial**: Quote, author, role

### SECTION 7 - GUARANTEE
- **Green Theme**: Special design with shield icon
- **3 Guarantees**: Icon, title, description

### SECTION 8 - FINAL CTA
- **Large Title**: With gradient text
- **Form**: Duplicate of hero form
- **3 Features**: With icons below form

---

## ⚡ VARIABLE TEMPLATE

Replace these variables when generating:

```
[WEBINAR_NAME] = Component name (PascalCase, e.g., "AIBootcamp")
[WEBINAR_TITLE] = Full title (e.g., "Dominando Autonomous Code Agents")
[HIGHLIGHT_WORD] = Word to highlight with gradient
[SUBTITLE] = Value proposition subtitle
[DATE] = Webinar date
[TIME] = Webinar time
[DURATION] = Duration (e.g., "2 horas")
[WEBINAR_SLUG] = URL slug (e.g., "domine-autonomous-agents")
[COLOR_THEME] = purple/green/blue/orange
[DARK_HEX_1] = First dark color hex
[DARK_HEX_2] = Second dark color hex
[INSTRUCTOR_NAME] = Instructor full name
[INSTRUCTOR_TITLE] = Professional title
[INSTRUCTOR_COMPANY] = Company/organization
[BACKGROUND_IMAGE] = Optional background image path
```

---

## ✅ VALIDATION CHECKLIST

Before considering the webinar page complete:

- [ ] Component in `/src/features/webinars/pages/`
- [ ] Route added to App.jsx
- [ ] Webhook configuration added
- [ ] All 8 sections implemented
- [ ] 3-layer background system
- [ ] Inline form handling (not WebhookForm)
- [ ] AnimatedCounter component included
- [ ] Responsive design maintained
- [ ] All imports correct
- [ ] No TypeScript (use .jsx)

---

## 🚀 GENERATION EXAMPLE

```bash
# Example for a new Python webinar:

Title: "Dominando Python para IA"
Highlight: "Python"
Subtitle: "Do zero ao avançado em 30 dias"
Date: "15 Mar 2025"
Time: "19:00"
Duration: "90 minutos"
Slug: "python-para-ia"
Theme: "blue"
Component: "PythonAIWebinar"
```

This would generate:
- File: `/src/features/webinars/pages/PythonAIWebinar.jsx`
- Route: `/webinars/python-para-ia`
- Webhook: `webinar-python-ai`

---

## 📌 IMPORTANT NOTES

1. **DO NOT** use WebhookForm component - use inline form handling
2. **DO NOT** create in wrong directory - use `/src/features/webinars/pages/`
3. **DO NOT** use TypeScript - all files should be `.jsx`
4. **ALWAYS** include the 3-layer background system
5. **ALWAYS** use inline styles for backgrounds (not Tailwind)
6. **ALWAYS** include AnimatedCounter for statistics
7. **ALWAYS** add webhook configuration

---

Last Updated: September 2024
Based on: AutonomousAgentsWebinar.jsx implementation