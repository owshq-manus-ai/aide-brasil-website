# ⚡ Quick Start - Generate a Webinar in 5 Minutes

## 📝 Step 1: Fill This Template

```bash
# Copy this and fill your details
TITLE="Dominando Python para IA"
HIGHLIGHT_WORD="Python"
SUBTITLE="Do zero ao avançado em projetos reais de IA"
DATE="15 Mar 2025"
TIME="20:00"
DURATION="2 horas"
SLUG="dominando-python-ia"
THEME="blue"
COMPONENT_NAME="PythonIAWebinar"
INSTRUCTOR_NAME="João Silva"
INSTRUCTOR_ROLE="Senior AI Engineer"
```

---

## 🤖 Step 2: Copy This Entire Prompt into Claude

```
Create a new webinar page following the EXACT structure from AutonomousAgentsWebinar.jsx.

Details:
- Title: Dominando Python para IA (highlight "Python" with gradient)
- Subtitle: Do zero ao avançado em projetos reais de IA
- Date: 15 Mar 2025
- Time: 20:00 (Horário de Brasília)
- Duration: 2 horas
- Slug: dominando-python-ia
- Component Name: PythonIAWebinar
- Theme: blue
- Instructor: João Silva - Senior AI Engineer

Requirements:
1. Create file at: /src/features/webinars/pages/PythonIAWebinar.jsx
2. Use inline form handling (NOT WebhookForm component)
3. Include AnimatedCounter component (copy from AutonomousAgentsWebinar.jsx lines 22-106)
4. Implement 3-layer background system with blue colors
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
8. Webhook slug: dominando-python-ia

Reference implementations:
- /src/features/webinars/pages/AutonomousAgentsWebinar.jsx (1,384 lines)
- /src/features/webinars/pages/CrewAIWebinar.jsx (1,260 lines)

After generation, I need to add:
- Webhook config to /src/config/webhook-endpoints.js
- Route to /src/App.jsx
```

**Replace the example values with YOUR values from Step 1!**

---

## 🔧 Step 3: After Generation, Add Configuration

### A) Add to `src/config/webhook-endpoints.js`:

```javascript
webinars: {
  // ... existing webinars
  'dominando-python-ia': {
    url: import.meta.env.VITE_WEBHOOK_WEBINAR_PYTHON ||
         'https://primary-production-1ebc.up.railway.app/webhook-test/YOUR_ID',
    fields: ['name', 'email', 'phone'],
    metadata: {
      type: 'webinar',
      product: 'dominando-python-ia',
      duration: '2 horas',
      format: 'live'
    }
  }
}
```

### B) Add to `src/App.jsx`:

```javascript
// Import
const PythonIAWebinar = lazy(() =>
  import('./features/webinars/pages/PythonIAWebinar')
)

// Route
<Route path="/webinars/dominando-python-ia" element={<PythonIAWebinar />} />
```

---

## ✅ Step 4: Test

```bash
npm run dev
# Visit: http://localhost:5173/webinars/dominando-python-ia
```

---

## 🎨 Color Themes

| Theme | Use Case | Primary Color |
|-------|----------|---------------|
| 🟣 **purple** | AI, Tech, Innovation | `#a855f7` |
| 🔵 **blue** | Professional, Data | `#0ea5e9` |
| 🟢 **green** | Growth, Success | `#10b981` |
| 🟠 **orange** | Energy, Action | `#f97316` |

---

## 📚 Content Examples

See real webinar content planning:
- [Autonomous Code Agents Example](./examples/dominando-autonomous-code-agents.md)
- [CrewAI Agents Example](./examples/dominando-crewai-agents.md)

---

## 🚨 Common Mistakes

❌ Forgot to update `[SLUG]` in webhook config
❌ Forgot to update `[COMPONENT_NAME]` in route
❌ Used wrong theme color
❌ Didn't test form submission

---

## ⏱️ Time Saved

**Manual**: 3-4 hours
**With this system**: ~5 minutes
**Savings**: 93% ⚡

---

**That's it! You're done.** 🎉
