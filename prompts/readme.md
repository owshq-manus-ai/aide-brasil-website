# 🚀 Webinar Generation System - One Command to Rule Them All

> **Time to create a webinar page**: ~5 minutes
> **Traditional development time**: 3-4 hours
> **Time saved**: 93%

---

## 🎯 Quick Start (Copy & Paste This)

### Step 1: Fill Your Webinar Variables

```bash
TITLE="Dominando Python para IA"
HIGHLIGHT_WORD="Python"
SUBTITLE="Do zero ao avançado em projetos reais de IA"
DATE="15 Mar 2025"
TIME="20:00"
DURATION="2 horas"
SLUG="dominando-python-ia"
THEME="blue"  # Options: purple, blue, green, orange
COMPONENT_NAME="PythonIAWebinar"
INSTRUCTOR_NAME="João Silva"
INSTRUCTOR_ROLE="Senior AI Engineer"
```

### Step 2: Generate the Code

**Copy this entire prompt and paste into Claude:**

```
Create a new webinar page following the EXACT structure from AutonomousAgentsWebinar.jsx.

Details:
- Title: Dominando [HIGHLIGHT_WORD highlighted as gradient] para IA
- Subtitle: [SUBTITLE]
- Date: [DATE]
- Time: [TIME] (Horário de Brasília)
- Duration: [DURATION]
- Slug: [SLUG]
- Component Name: [COMPONENT_NAME]
- Theme: [THEME]
- Instructor: [INSTRUCTOR_NAME] - [INSTRUCTOR_ROLE]

Requirements:
1. Create file at: /src/features/webinars/pages/[COMPONENT_NAME].jsx
2. Use inline form handling (NOT WebhookForm component)
3. Include AnimatedCounter component (copy from AutonomousAgentsWebinar.jsx lines 22-106)
4. Implement 3-layer background system with [THEME] colors
5. Include ALL 8 sections:
   - Hero (2-column: content left, form right)
   - Transformation (Before/After cards)
   - Benefits (6 cards in grid)
   - Agenda (Timeline with 4-6 modules)
   - Instructor (Bio + achievements)
   - Statistics (4 AnimatedCounters)
   - Guarantee (Green theme, 3 guarantees)
   - Final CTA (Form + urgency messaging)
6. Form fields: name, email, phone (all required)
7. Brazilian phone validation and formatting
8. Webhook slug should match: [SLUG]

Reference implementations:
- /src/features/webinars/pages/AutonomousAgentsWebinar.jsx (1,384 lines)
- /src/features/webinars/pages/CrewAIWebinar.jsx (1,260 lines)

After generation, I need to add:
- Webhook config to /src/config/webhook-endpoints.js
- Route to /src/App.jsx
```

### Step 3: Integration (After Code is Generated)

#### A) Add Webhook Configuration

Edit [webhook-endpoints.js](../src/config/webhook-endpoints.js):

```javascript
webinars: {
  // ... existing webinars
  '[SLUG]': {
    url: import.meta.env.VITE_WEBHOOK_WEBINAR_[NAME] ||
         'https://primary-production-1ebc.up.railway.app/webhook-test/[ID]',
    fields: ['name', 'email', 'phone'],
    metadata: {
      type: 'webinar',
      product: '[SLUG]',
      duration: '[DURATION]',
      format: 'live'
    }
  }
}
```

#### B) Add Route

Edit [App.jsx](../src/App.jsx):

```javascript
// Import (at top with other lazy imports)
const [COMPONENT_NAME] = lazy(() =>
  import('./features/webinars/pages/[COMPONENT_NAME]')
)

// Route (in Routes section)
<Route path="/webinars/[SLUG]" element={<[COMPONENT_NAME] />} />
```

#### C) Test It

```bash
npm run dev
# Visit: http://localhost:5173/webinars/[SLUG]
# Test form at: http://localhost:5173/webhook-test
```

---

## 🎨 Available Color Themes

### 🟣 Purple Theme - AI/Tech/Innovation
```javascript
primary: '#a855f7'
secondary: '#8b5cf6'
darkHex1: '#1a0f2a'
darkHex2: '#0f0a1a'
```
**Best for**: AI, Machine Learning, Automation, Future Tech

### 🔵 Blue Theme - Professional/Trust
```javascript
primary: '#0ea5e9'
secondary: '#06b6d4'
darkHex1: '#0a1a2a'
darkHex2: '#0a0f1a'
```
**Best for**: Data Engineering, Cloud, Enterprise, Analytics

### 🟢 Green Theme - Growth/Success
```javascript
primary: '#10b981'
secondary: '#22c55e'
darkHex1: '#0a2a1a'
darkHex2: '#0f1a0a'
```
**Best for**: Career Growth, Productivity, Financial Results

### 🟠 Orange Theme - Energy/Action
```javascript
primary: '#f97316'
secondary: '#f59e0b'
darkHex1: '#2a1a0f'
darkHex2: '#1a0f0a'
```
**Best for**: Workshops, Bootcamps, Sales, High Energy

---

## 📁 Project Structure

```
src/
├── features/webinars/pages/
│   ├── AutonomousAgentsWebinar.jsx  ✅ Reference (1,384 lines)
│   ├── CrewAIWebinar.jsx            ✅ Reference (1,260 lines)
│   └── [YourNewWebinar].jsx         ⬅️ Generated here
├── config/
│   └── webhook-endpoints.js         ⬅️ Add webhook config
└── App.jsx                          ⬅️ Add route

prompts/
├── README.md                        ⬅️ You are here
└── webinars/
    └── examples/
        ├── dominando-autonomous-code-agents.md
        └── dominando-crewai-agents.md
```

---

## 🧩 Webinar Anatomy (8 Required Sections)

### 1️⃣ Hero Section
- 2-column layout (content left, form right)
- Animated attendee counter
- "What you'll learn" card
- Registration form (inline)

### 2️⃣ Transformation Section
- Before/After comparison cards
- Red theme (before) → Brand theme (after)

### 3️⃣ Benefits Section
- 6 benefit cards with icons
- Grid layout (3 cols desktop, 1 mobile)

### 4️⃣ Agenda Section
- Vertical timeline
- 4-6 modules with time/icon/description

### 5️⃣ Instructor Section
- Photo, bio, achievements
- Social links (LinkedIn, Instagram)

### 6️⃣ Statistics Section
- 4 AnimatedCounters
- Testimonial quote

### 7️⃣ Guarantee Section
- Green shield design
- 3 trust-building guarantees

### 8️⃣ Final CTA Section
- Large gradient title
- Registration form (duplicate)
- Urgency messaging

---

## ✅ Production Webinars (References)

### Domine Autonomous Code Agents
- **File**: [AutonomousAgentsWebinar.jsx](../src/features/webinars/pages/AutonomousAgentsWebinar.jsx)
- **Route**: `/webinars/domine-autonomous-code-agents`
- **Theme**: Purple
- **Lines**: 1,384

### Dominando CrewAI Agents
- **File**: [CrewAIWebinar.jsx](../src/features/webinars/pages/CrewAIWebinar.jsx)
- **Route**: `/webinars/dominando-crewai-agents`
- **Theme**: Coral/Red
- **Lines**: 1,260

### Domine Claude Code
- **File**: [ClaudeCodeWebinar.jsx](../src/features/webinars/pages/ClaudeCodeWebinar.jsx)
- **Route**: `/webinars/domine-claude-code`
- **Theme**: Purple
- **Lines**: 1,788

---

## 🚨 Critical Rules

### ✅ ALWAYS Include
- 3-layer background (gradient + radial + texture)
- AnimatedCounter for statistics
- Inline form with validation
- Brazilian phone formatting: `(XX) XXXXX-XXXX`
- All 3 fields: name, email, phone
- Animated attendee counter
- All 8 sections

### ❌ NEVER Do
- Use WebhookForm component (use inline)
- Center hero section (must be 2-column)
- Skip phone validation
- Hardcode webhook URLs
- Forget webhook-endpoints.js config
- Forget App.jsx route
- Use TypeScript (use .jsx)

---

## 🎯 Content Templates

### Title Patterns
```
Dominando [TECHNOLOGY]
Domine [SKILL/TOOL]
Criando [PROJECT] com [TOOL]
Do Zero ao [LEVEL] em [SKILL]
[NUMBER] Estratégias para [GOAL]
```

### Learning Objectives (5 bullets)
```
1. Fundamentos [TOPIC]: Core concepts and architecture
2. [Technique] Avançado: Practical implementation
3. Integração com [TOOLS]: Real-world integration
4. Deploy em Produção: Production strategies
5. Casos Reais: Industry examples
```

### CTA Variations
```
"Garantir Minha Vaga Gratuita"
"Últimas Vagas Disponíveis"
"Quero Dominar [SKILL]"
"Junte-se a [NUMBER]+ Profissionais"
```

---

## 📊 Time Savings

| Method | Time | Savings |
|--------|------|---------|
| Manual coding | 3-4 hours | Baseline |
| **Using this system** | **~5 minutes** | **93% faster** |

### Breakdown
- Fill variables: 2 min
- Generate code: 1 min
- Add config: 1 min
- Test: 1 min
- **Total: ~5 min** ⚡

---

## 🆘 Troubleshooting

### Form not submitting?
```bash
# Check webhook config
grep -A 5 "your-slug" src/config/webhook-endpoints.js

# Test endpoint
curl -X POST "YOUR_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"11987654321"}'
```

### Page not loading?
```bash
# Check route
grep "your-slug" src/App.jsx

# Check file exists
ls src/features/webinars/pages/YourWebinar.jsx
```

### Animations not working?
- AnimatedCounter uses IntersectionObserver
- Check ref is attached to element
- Mobile: Animations trigger immediately
- Desktop: Trigger on scroll into view

---

## 🚀 Deployment Checklist

- [ ] File created in `/src/features/webinars/pages/`
- [ ] Webhook added to `webhook-endpoints.js`
- [ ] Route added to `App.jsx`
- [ ] All 8 sections present
- [ ] Form validates 3 fields
- [ ] Phone formats to `(XX) XXXXX-XXXX`
- [ ] AnimatedCounter animates
- [ ] 3-layer background renders
- [ ] Mobile responsive
- [ ] Tested at `/webhook-test`
- [ ] No console errors
- [ ] `npm run build` succeeds

---

## 📚 Additional Resources

### Code References
- [AnimatedCounter Component](../src/features/webinars/pages/AutonomousAgentsWebinar.jsx#L22-L106)
- [Inline Form Example](../src/features/webinars/pages/AutonomousAgentsWebinar.jsx#L140-L250)
- [3-Layer Background](../src/features/webinars/pages/AutonomousAgentsWebinar.jsx#L280-L330)

### Configuration Files
- [Webhook Endpoints](../src/config/webhook-endpoints.js)
- [Form Validation](../src/utils/validation.js)
- [Webhook Logic](../src/config/webhooks.js)

### Content Examples
- [Autonomous Agents Content](./webinars/examples/dominando-autonomous-code-agents.md)
- [CrewAI Content](./webinars/examples/dominando-crewai-agents.md)

---

## 🎓 Pro Tips

1. **Content first**: Fill all variables before generating
2. **Copy reference**: Start from AutonomousAgentsWebinar.jsx
3. **Test immediately**: Use `/webhook-test` page
4. **Mobile first**: Test responsive early
5. **Track analytics**: Add GTM events from day 1
6. **Save templates**: Document filled prompts in examples/
7. **Version control**: Commit working versions
8. **Iterate fast**: Generate → Test → Adjust → Ship

---

## 🔮 Future Enhancements

- [ ] Landing page generator
- [ ] Email sequence generator
- [ ] Social media post generator
- [ ] Blog article generator
- [ ] CLI tool for automation
- [ ] VS Code extension

---

## 📞 Need Help?

1. Check [Troubleshooting](#-troubleshooting)
2. Review [Reference Webinars](#-production-webinars-references)
3. Test at `/webhook-test` page
4. Check browser console

---

**Version**: 2.0 - Unified System
**Last Updated**: January 2025
**Based On**: AutonomousAgentsWebinar.jsx & CrewAIWebinar.jsx

---

**This system is your competitive advantage.** Each webinar saves 4+ hours while maintaining professional quality. Use it to scale content creation infinitely! 🚀
