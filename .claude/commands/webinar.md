# /webinar - Complete Webinar Generation Command

## Purpose
Generate a complete webinar landing page that **EXACTLY matches** the pattern of existing production webinars.

## Usage

### Option 1: File Path (Recommended)
```bash
/webinar /briefings/dominando-apache-kafka.md
/webinar briefings/my-webinar.md
```

### Option 2: Inline YAML
```bash
/webinar [paste YAML content directly]
```

---

## 🚀 FIRST STEP: Detect Input Type

**CRITICAL**: Before anything else, determine the input type:

### If argument looks like a file path (contains `.md`, `/briefings/`, or starts with path):
```bash
# Read the briefing file FIRST
cat [file_path]
```
Then extract the YAML content from within the ```yaml ... ``` block.

### If argument is raw YAML or natural language:
Parse directly from the provided content.

---

## Briefing Template
See `.claude/commands/webinar-briefing-template.md` for the complete template.

---

## 🎯 CRITICAL: Pattern Matching

**This command MUST generate webinars that are pixel-perfect matches to:**
- `/webinars/dominando-dify-ai` (DifyAIWebinar.jsx - 62,506 bytes)
- `/webinars/dominando-autonomous-code-agents` (AutonomousAgentsWebinar.jsx - 63,101 bytes)
- `/webinars/dominando-crewai-agents` (CrewAIWebinar.jsx - 56,508 bytes)
- `/webinars/dominando-chatgpt-agent-builder` (ChatGPTAgentBuilderWebinar.jsx - 63,290 bytes)
- `/webinars/dominando-claude-code` (ClaudeCodeWebinar.jsx - 87,616 bytes)

---

## 📋 EXACT DATA STRUCTURE REQUIRED

The webinar component MUST use this exact data structure:

```javascript
// STATE VARIABLES (EXACT)
const [attendeeCount, setAttendeeCount] = useState([150-300])
const [isModalOpen, setIsModalOpen] = useState(false)
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: ''
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitMessage, setSubmitMessage] = useState('')
const [showSuccess, setShowSuccess] = useState(false)

// WEBINAR CONFIG OBJECT (EXACT STRUCTURE)
const webinar = {
  title: 'Dominando [Topic]',
  highlightWord: '[KeyWord]',
  subtitle: '[Value proposition - one line]',
  date: 'DD Mon YYYY',  // e.g., "30 Jan 2025"
  time: '20:00 BRT',
  duration: '2 horas',
  gradient: 'from-[color]-600 to-[color2]-600',
  description: '[1-2 sentence description]',

  whatYouLearn: [
    '[Item 1]: [Brief explanation]',
    '[Item 2]: [Brief explanation]',
    '[Item 3]: [Brief explanation]',
    '[Item 4]: [Brief explanation]',
    '[Item 5]: [Brief explanation]'
  ],

  agenda: [
    {
      time: '20:00',
      module: 'Início',
      topic: '[Topic Name]',
      description: '[Detailed description - 15-25 words]',
      icon: [LucideIcon]  // Terminal, Cpu, Bot, Rocket, Database, Workflow, etc.
    },
    {
      time: '20:30',
      module: 'Módulo 1',
      topic: '[Topic Name]',
      description: '[Detailed description]',
      icon: [LucideIcon]
    },
    {
      time: '21:00',
      module: 'Módulo 2',
      topic: '[Topic Name]',
      description: '[Detailed description]',
      icon: [LucideIcon]
    },
    {
      time: '21:30',
      module: 'Encerramento',
      topic: '[Topic Name]',
      description: '[Detailed description]',
      icon: [LucideIcon]
    }
  ],

  benefits: [
    {
      icon: [LucideIcon],
      title: '[2-3 words]',
      description: '[5-8 words]',
      duration: '[XX min]',
      level: '[Iniciante|Intermediário|Avançado|Expert|Prático]'
    },
    // ... exactly 6 benefits
  ],

  instructor: {
    name: 'Luan Moreno',
    title: 'Principal AI & Autonomous Systems Engineer',
    company: '@Pythian',
    bio: '[Specialized bio for this topic - 2-3 sentences]',
    photo: '/images/team/luan-moreno-5.png',
    linkedin: 'https://www.linkedin.com/in/luanmoreno/',
    instagram: 'https://www.instagram.com/luanmorenomaciel/',
    achievements: [
      '[Achievement 1 related to topic]',
      '[Achievement 2]',
      '[Achievement 3]',
      '[Achievement 4]'
    ]
  },

  statistics: [
    {
      icon: [LucideIcon],  // Award, Users, Rocket, Trophy
      value: [number],
      suffix: '[%, k+, M+, x, T+]',
      label: '[2-3 words]',
      description: '[4-6 words]',
      color: '[color]-500',
      secondaryColor: '[color2]-500',
      progress: '[XX%]'
    },
    // ... exactly 4 statistics
  ],

  testimonial: {
    quote: '[2-3 sentences testimonial]',
    author: '[Full Name]',
    role: '[Role @Company]'
  },

  guarantees: [
    {
      icon: CheckCircle,
      title: '100% Gratuito',
      description: 'Sem custos ocultos ou vendas'
    },
    {
      icon: Trophy,
      title: 'Acesso Vitalício',
      description: 'Gravação disponível para sempre'
    },
    {
      icon: Lock,
      title: 'Dados Protegidos',
      description: 'Privacidade garantida'
    }
  ]
}
```

---

## 🔧 EXECUTION STEPS

### Step 1: Discovery Phase
```bash
# Read existing webinars
ls src/features/webinars/pages/*Webinar.jsx

# Check current themes in use
grep -h "gradient:" src/features/webinars/pages/*Webinar.jsx | head -10

# Read WebinarsListPage for card pattern
head -150 src/features/webinars/pages/WebinarsListPage.jsx
```

### Step 2: Parse Briefing
Extract from user's briefing (YAML or natural language):
- topic, title, highlight_word, subtitle
- date, time, duration
- theme
- description
- what_you_learn (5 items)
- agenda (4 modules)
- benefits (6 items)
- statistics (4 items)
- testimonial

### Step 3: Generate Component Name & Slug
```javascript
// Examples:
"Apache Kafka" → KafkaWebinar, dominando-apache-kafka
"n8n Automation" → N8nWebinar, dominando-n8n
"LangChain" → LangChainWebinar, dominando-langchain
```

### Step 4: Copy Reference Implementation
**CRITICAL**: Use DifyAIWebinar.jsx as the primary template because it's the most recent and complete.

```bash
# Read the reference
cat src/features/webinars/pages/DifyAIWebinar.jsx
```

### Step 5: Generate New Component
Create `/src/features/webinars/pages/[Name]Webinar.jsx` with:

1. **Exact imports** (copy from DifyAIWebinar.jsx lines 1-14)
2. **AnimatedCounter component** (copy lines 21-112 EXACTLY)
3. **Main component function** with state variables
4. **webinar config object** with all sections
5. **Form handling functions** (copy exactly)
6. **3-layer background system** (copy exactly)
7. **All 8 sections** in exact order

### Step 6: Add Webhook Configuration
Edit `/src/config/webhook-endpoints.js`:
```javascript
'[slug]': {
  url: import.meta.env.VITE_WEBHOOK_WEBINAR_[NAME] ||
       import.meta.env.VITE_N8N_WEBHOOK_URL ||
       'https://primary-production-1ebc.up.railway.app/webhook-test/3a20f09c-24f1-4052-ae9c-a3617cf9ec57',
  fields: ['name', 'email', 'phone'],
  metadata: {
    type: 'webinar',
    product: '[slug]',
    duration: '120 minutes',
    format: 'live'
  }
}
```

### Step 7: Add Route
Edit `/src/App.jsx`:
```javascript
// Add lazy import (with existing webinar imports)
const [Name]Webinar = lazy(() =>
  import('./features/webinars/pages/[Name]Webinar')
)

// Add route (in webinars section)
<Route path="/webinars/[slug]" element={<[Name]Webinar />} />
```

### Step 8: Add Header Color Scheme
Edit `/src/components/shared/Header.jsx` - add new color scheme inside `getColorScheme()`:
```javascript
} else if (location.pathname === '/webinars/[slug]') {
  // [Name] webinar - [Color]/[color2] metallic theme
  return {
    from: 'from-[color]-500/20',
    to: 'to-[color2]-500/20',
    hoverFrom: 'hover:from-[color]-500/30',
    hoverTo: 'hover:to-[color2]-500/30',
    border: 'border-[color]-500/30',
    hoverBorder: 'hover:border-[color]-500/50',
    shadow: 'hover:shadow-[color]-500/30',
    headerBg: 'bg-gradient-to-r from-[color]-900/10 via-[#030303]/95 to-[color2]-900/10'
  }
}
```
**CRITICAL**: Place this BEFORE the generic `startsWith('/webinars/')` fallback!

### Step 9: Add Card to Listings
Edit `/src/features/webinars/pages/WebinarsListPage.jsx`:
```javascript
{
  id: [next-id],
  slug: '[slug]',
  title: '[title]',
  subtitle: '[subtitle - MAX 90 characters to match card heights]',
  date: '[date]',
  time: '20:00',
  duration: '2h',
  attendees: [random 150-300],
  description: '[description]',
  topics: ['[Topic 1]', '[Topic 2]', '[Topic 3]'],  // EXACTLY 3 topics
  gradient: '[gradient]',
  icon: [Icon],  // Bot, Database, Code2, Brain, Layers, etc.
  level: '[Iniciante|Intermediário|Avançado]',
  spots: 500,
  exclusive: false,
  popular: false
}
```

### Step 10: Validate Build

```bash
npm run build
```

### Step 11: Report
```
✅ WEBINAR CREATED SUCCESSFULLY!

📁 Files Modified:
   - Created: /src/features/webinars/pages/[Name]Webinar.jsx (~1,400 lines)
   - Updated: /src/config/webhook-endpoints.js
   - Updated: /src/App.jsx
   - Updated: /src/components/shared/Header.jsx (color scheme)
   - Updated: /src/features/webinars/pages/WebinarsListPage.jsx

⚠️ ACTION REQUIRED:
   - Create background image: /public/images/backgrounds/background-[slug].png

🔗 Access URL:
   http://localhost:5173/webinars/[slug]

🎨 Theme: [theme]
📅 Date: [date] at [time]
⏱️ Duration: [duration]

✅ Build Status: Passed

🚀 Next Steps:
   1. Run: npm run dev
   2. Visit the URL above to preview
   3. Test form submission
   4. Deploy when ready
```

---

## 🎨 THEME COLOR MAPPING

| Theme | gradient | darkHex1 | darkHex2 |
|-------|----------|----------|----------|
| purple | `from-purple-600 to-violet-600` | `#1a0f2a` | `#0f0a1a` |
| blue | `from-blue-600 to-cyan-600` | `#0a1a2a` | `#0a0f1a` |
| green | `from-emerald-600 to-green-600` | `#0a2a1a` | `#0f1a0a` |
| orange | `from-orange-600 to-amber-600` | `#2a1a0f` | `#1a0f0a` |
| coral | `from-red-500 to-orange-500` | `#2a0f0a` | `#1a0a0a` |

---

## 🚨 CRITICAL RULES

### MUST DO ✅
1. **Copy AnimatedCounter EXACTLY** from DifyAIWebinar.jsx (lines 21-112)
2. **Copy 3-layer background EXACTLY** from reference
3. **Use inline form handling** - NOT WebhookForm component
4. **Include ALL 8 sections** in exact order
5. **Date format**: "DD Mon YYYY" (e.g., "30 Jan 2025")
6. **Time format**: "HH:MM BRT" (e.g., "20:00 BRT")
7. **Exactly 5** whatYouLearn items
8. **Exactly 4** agenda modules
9. **Exactly 6** benefits
10. **Exactly 4** statistics
11. **Import 30+ icons** from lucide-react
12. **Add Header color scheme** for the new webinar page path
13. **Background image**: Use path `/images/backgrounds/background-[slug].png` in HeroSection RIGHT COLUMN and Instructor section
14. **Card topics**: Use EXACTLY 3 topics in WebinarsListPage card
15. **Card subtitle**: MAX 90 characters to ensure consistent card heights

### NEVER DO ❌
1. Use `Network` icon (BANNED - doesn't render!)
2. Use WebhookForm component
3. Use TypeScript (.tsx)
4. Skip any of the 8 sections
5. Hardcode webhook URLs
6. Center the hero section (must be 2-column)
7. Deviate from the exact data structure
8. Use different state variables

---

## 📚 REFERENCE FILES

```
Primary Template:
  /src/features/webinars/pages/DifyAIWebinar.jsx (most recent, complete)

Additional References:
  /src/features/webinars/pages/AutonomousAgentsWebinar.jsx
  /src/features/webinars/pages/CrewAIWebinar.jsx

Briefing Template:
  /.claude/commands/webinar-briefing-template.md

Configuration:
  /src/config/webhook-endpoints.js
  /src/App.jsx
  /src/features/webinars/pages/WebinarsListPage.jsx
```

---

## 🎯 VALIDATION CHECKLIST

Before reporting success, verify:

```
✅ COMPONENT STRUCTURE:
  - [ ] AnimatedCounter component (lines 21-112 from reference)
  - [ ] State variables match exactly
  - [ ] webinar config object complete
  - [ ] All form handling functions
  - [ ] 3-layer background system

✅ WEBINAR DATA:
  - [ ] 5 whatYouLearn items
  - [ ] 4 agenda modules with icons
  - [ ] 6 benefits with duration/level
  - [ ] 4 statistics with progress
  - [ ] instructor with 4 achievements
  - [ ] testimonial with quote/author/role
  - [ ] 3 guarantees

✅ CONFIGURATION:
  - [ ] Webhook added to webhook-endpoints.js
  - [ ] Route added to App.jsx (lazy loaded)
  - [ ] Card added to WebinarsListPage.jsx (3 topics, subtitle ≤90 chars)
  - [ ] Header color scheme added to Header.jsx

✅ VISUAL ASSETS:
  - [ ] Background image path set: /images/backgrounds/background-[slug].png
  - [ ] HeroSection RIGHT COLUMN has background image div
  - [ ] Instructor section has background image div
  - [ ] NOTE: PNG file must be created separately (not auto-generated)

✅ BUILD:
  - [ ] npm run build passes
  - [ ] No console errors
```
