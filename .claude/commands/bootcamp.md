# /bootcamp - Complete Bootcamp Generation Command

## Purpose
Generate a complete bootcamp landing page that **EXACTLY matches** the pattern of the existing Claude Code bootcamp.

## Usage

### Option 1: File Path (Recommended)
```bash
/bootcamp /briefings/bootcamps/bootcamp-apache-kafka.md
/bootcamp briefings/bootcamps/bootcamp-my-bootcamp.md
```

### Option 2: Inline YAML
```bash
/bootcamp [paste YAML content directly]
```

---

## FIRST STEP: Detect Input Type

**CRITICAL**: Before anything else, determine the input type:

### If argument looks like a file path (contains `.md`, `/briefings/bootcamps/`, or starts with path):
```bash
# Read the briefing file FIRST
cat [file_path]
```
Then extract the YAML content from within the ```yaml ... ``` block.

### If argument is raw YAML or natural language:
Parse directly from the provided content.

---

## Briefing Template
See `.claude/commands/bootcamp-briefing-template.md` for the complete template.

---

## CRITICAL: Pattern Matching

**This command MUST generate bootcamps that are pixel-perfect matches to:**
- `/bootcamp/zero-prod-claude-code` (ClaudeCodeBootcamp.jsx)

The bootcamp uses a **modular component architecture** with 8 separate files.

---

## BOOTCAMP ARCHITECTURE

Unlike webinars (single-file), bootcamps use modular components:

```
src/features/bootcamps/
├── pages/
│   └── [Name]Bootcamp.jsx          # Main orchestrator (lazy loads sections)
└── components/
    ├── [Name]BootcampHero.jsx      # Hero section (unique per bootcamp)
    ├── TechStackDock.jsx           # Tech logos (can be shared or customized)
    ├── PromiseSection.jsx          # 8 features (shared, data-driven)
    ├── DifferentiatorSection.jsx   # 6 reasons (shared, data-driven)
    ├── JourneyTimeline.jsx         # 8 steps (shared, data-driven)
    ├── StackSection.jsx            # Tech stack display (shared)
    ├── AudienceSection.jsx         # 3 profiles (shared, data-driven)
    ├── PricingSection.jsx          # Pricing tiers (unique per bootcamp)
    └── FinalCTASection.jsx         # Final CTA (shared)
```

---

## DATA STRUCTURE

### Main Page Component
```javascript
// [Name]Bootcamp.jsx
import React, { lazy, Suspense, memo } from 'react'

const ENABLE_VIDEO_SECTION = false

import [Name]BootcampHero from '../components/[Name]BootcampHero'

const PromiseSection = lazy(() => import('../components/PromiseSection'))
const DifferentiatorSection = lazy(() => import('../components/DifferentiatorSection'))
const JourneyTimeline = lazy(() => import('../components/JourneyTimeline'))
const StackSection = lazy(() => import('../components/StackSection'))
const AudienceSection = lazy(() => import('../components/AudienceSection'))
const PricingSection = lazy(() => import('../components/PricingSection'))
const FinalCTASection = lazy(() => import('../components/FinalCTASection'))

const SectionLoader = memo(() => (
  <div className="min-h-[400px] bg-[#0a0a0a]" aria-hidden="true" />
))

const [Name]Bootcamp = memo(() => {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <[Name]BootcampHero />
      <Suspense fallback={<SectionLoader />}>
        <PromiseSection />
        <DifferentiatorSection />
        <JourneyTimeline />
        <StackSection />
        <AudienceSection />
        <PricingSection />
        <FinalCTASection />
      </Suspense>
    </div>
  )
})

export default [Name]Bootcamp
```

### Hero Section Data
```javascript
// Learning points in hero card
const learningPoints = [
  { text: '[Topic]: [specific skill]', icon: Terminal },
  { text: '[Topic]: [specific skill]', icon: Brain },
  // ... exactly 6 items
]

// Value propositions
const valueProps = [
  { icon: Bot, text: '[Transformation promise]' },
  { icon: Terminal, text: '[Process promise]' },
  { icon: Rocket, text: '[Outcome promise]' }
]
```

### Promise Section (8 Features)
```javascript
const FEATURES = [
  {
    icon: Server,
    title: '[Feature Name]',
    description: '[Description with highlight keyword]',
    highlight: '[keyword to highlight]',
    color: 'orange' // orange|purple|blue|green|cyan|pink|amber|red
  },
  // ... exactly 8 items
]
```

### Differentiators (6 Reasons)
```javascript
const DIFFERENTIATORS = [
  {
    title: '[Reason Title]',
    description: 'Outros cursos: [what they do]. Aqui: [what we do].',
    icon: ArrowRight,
    highlight: '[keyword]'
  },
  // ... exactly 6 items
]
```

### Journey (8 Steps)
```javascript
const STEPS = [
  {
    number: 1,
    title: '[Step Title]',
    subtitle: '[Before] -> [After]',
    description: '[What happens in this step]',
    skills: ['[Skill 1]', '[Skill 2]', '[Skill 3]'],
    personas: ['[Role 1]', '[Role 2]'],
    icon: Users,
    isCore: false  // true for main module
  },
  // ... exactly 8 items
]
```

### Pricing Tiers
```javascript
const PRICING_TIERS = [
  {
    id: 'lote1',
    name: 'Early Birds',
    subtitle: 'Quem chegou primeiro',
    price: '897',
    originalPrice: null,
    status: 'sold_out',  // sold_out|current|upcoming
    highlight: false,
    icon: Lock,
    color: 'gray'
  },
  {
    id: 'lote2',
    name: 'Lote Decisao',
    subtitle: 'Ultima chance neste valor',
    price: '1.197',
    originalPrice: '1.397',
    status: 'current',
    highlight: true,
    icon: Flame,
    color: 'orange'
  },
  {
    id: 'lote3',
    name: 'Lote Final',
    subtitle: 'Preco cheio',
    price: '1.397',
    originalPrice: null,
    status: 'upcoming',
    highlight: false,
    icon: TrendingUp,
    color: 'amber'
  }
]
```

### Deliverables (8 Items)
```javascript
const DELIVERABLES = [
  { text: '[What they get]', value: '[Specific detail]' },
  // ... exactly 8 items
]
```

---

## EXECUTION STEPS

### Step 1: Discovery Phase
```bash
# Read existing bootcamp structure
ls src/features/bootcamps/pages/
ls src/features/bootcamps/components/

# Read the reference implementation
cat src/features/bootcamps/pages/ClaudeCodeBootcamp.jsx
cat src/features/bootcamps/components/ClaudeCodeBootcampHero.jsx
```

### Step 2: Parse Briefing
Extract from user's briefing (YAML or natural language):
- Basic info (name, slug, dates, pricing)
- Hero content (learning points, value props)
- Promise features (8 items)
- Differentiators (6 items)
- Journey steps (8 items)
- Tech stack logos
- Audience profiles (3 items)
- Prerequisites (3 items)
- Deliverables (8 items)

### Step 3: Generate Component Names
```javascript
// Examples:
"Apache Kafka" -> KafkaBootcamp, KafkaBootcampHero, zero-prod-apache-kafka
"CrewAI Agents" -> CrewAIBootcamp, CrewAIBootcampHero, zero-prod-crewai
"LangChain" -> LangChainBootcamp, LangChainBootcampHero, zero-prod-langchain
```

### Step 4: Create Main Page Component
Create `/src/features/bootcamps/pages/[Name]Bootcamp.jsx`:
- Copy structure from ClaudeCodeBootcamp.jsx
- Update import for new Hero component
- Keep shared section imports

### Step 5: Create Hero Component
Create `/src/features/bootcamps/components/[Name]BootcampHero.jsx`:
- Copy from ClaudeCodeBootcampHero.jsx
- Update learning points data
- Update value propositions
- Update dates and badges
- Update background image path
- Update theme colors if different from coral

### Step 6: Update Shared Sections (Data-Driven Approach)

**Option A: Create bootcamp-specific config file**
Create `/src/features/bootcamps/config/[slug]-config.js`:
```javascript
export const bootcampConfig = {
  slug: '[slug]',
  features: [...],
  differentiators: [...],
  steps: [...],
  audiences: [...],
  prerequisites: [...],
  deliverables: [...],
  pricingTiers: [...],
  eduzzUrl: '...',
  countdownTarget: '...'
}
```

**Option B: Create bootcamp-specific section components**
Only if significant visual differences are needed.

### Step 7: Add Webhook Configuration
Edit `/src/config/webhook-endpoints.js`:
```javascript
bootcamps: {
  '[slug]': {
    url: import.meta.env.VITE_WEBHOOK_BOOTCAMP_[NAME] ||
         import.meta.env.VITE_N8N_WEBHOOK_URL ||
         'https://primary-production-1ebc.up.railway.app/webhook-test/...',
    fields: ['name', 'email', 'phone'],
    metadata: {
      type: 'bootcamp',
      product: '[slug]',
      price: 'R$ 1.197',
      duration: '12 hours',
      format: 'live'
    }
  }
}
```

### Step 8: Add Route
Edit `/src/App.jsx`:
```javascript
// Add lazy import
const [Name]Bootcamp = lazy(() =>
  import('./features/bootcamps/pages/[Name]Bootcamp')
)

// Add route
<Route path="/bootcamp/[slug]" element={<[Name]Bootcamp />} />
```

### Step 9: Add Header Color Scheme (if needed)
Edit `/src/components/shared/Header.jsx`:
```javascript
} else if (location.pathname === '/bootcamp/[slug]') {
  return {
    from: 'from-[color]-500/20',
    to: 'to-[color2]-500/20',
    // ... color scheme matching bootcamp theme
  }
}
```

### Step 10: Validate Build
```bash
npm run build
```

### Step 11: Report
```
BOOTCAMP CREATED SUCCESSFULLY!

Files Created/Modified:
   - Created: /src/features/bootcamps/pages/[Name]Bootcamp.jsx
   - Created: /src/features/bootcamps/components/[Name]BootcampHero.jsx
   - Updated: /src/config/webhook-endpoints.js
   - Updated: /src/App.jsx
   - Updated: /src/components/shared/Header.jsx (if needed)

ACTION REQUIRED:
   - Configure Eduzz product at: [eduzz_url]
   - Add tech stack logos to: /public/images/logos/

Access URL:
   http://localhost:5173/bootcamp/[slug]

Theme: [theme]
Dates: [date_range] at [time]
Duration: [duration]
Price: R$ [current_price]

Build Status: Passed

Next Steps:
   1. Run: npm run dev
   2. Visit the URL above to preview
   3. Test Eduzz payment flow
   4. Deploy when ready
```

---

## THEME COLOR MAPPING

| Theme | Primary | Secondary | Background Accents |
|-------|---------|-----------|-------------------|
| coral | #E07A5F | #F0A090 | rgba(224, 122, 95, 0.X) |
| purple | #8B5CF6 | #A78BFA | rgba(139, 92, 246, 0.X) |
| blue | #3B82F6 | #60A5FA | rgba(59, 130, 246, 0.X) |
| green | #22C55E | #4ADE80 | rgba(34, 197, 94, 0.X) |
| orange | #F97316 | #FB923C | rgba(249, 115, 22, 0.X) |

---

## CRITICAL RULES

### MUST DO
1. **Copy Hero component structure EXACTLY** from ClaudeCodeBootcampHero.jsx
2. **Keep modular architecture** - don't combine into single file
3. **Use memo() for all components** - performance critical
4. **Include mobile optimizations** - isMobile state and conditional animations
5. **Lazy load below-fold sections** - only Hero loads immediately
6. **6 learning points** in hero card
7. **3 value propositions** in hero
8. **8 promise features** with icons and colors
9. **6 differentiators** with "Outros cursos: X. Aqui: Y" pattern
10. **8 journey steps** with skills, personas, and one `isCore: true`
11. **3 audience profiles** with transformations
12. **3 prerequisites** with levels
13. **8 deliverables** with values
14. **3 pricing tiers** (sold_out, current, upcoming)

### NEVER DO
1. Combine all sections into single file
2. Skip mobile performance optimizations
3. Hardcode Eduzz URLs (use config)
4. Skip webhook configuration
5. Use different section structure than reference
6. Forget to add route in App.jsx
7. Use animations without isMobile check

---

## REFERENCE FILES

```
Primary Template:
  /src/features/bootcamps/pages/ClaudeCodeBootcamp.jsx
  /src/features/bootcamps/components/ClaudeCodeBootcampHero.jsx

Shared Sections:
  /src/features/bootcamps/components/PromiseSection.jsx
  /src/features/bootcamps/components/DifferentiatorSection.jsx
  /src/features/bootcamps/components/JourneyTimeline.jsx
  /src/features/bootcamps/components/StackSection.jsx
  /src/features/bootcamps/components/AudienceSection.jsx
  /src/features/bootcamps/components/PricingSection.jsx
  /src/features/bootcamps/components/FinalCTASection.jsx

Briefing Template:
  /.claude/commands/bootcamp-briefing-template.md

Configuration:
  /src/config/webhook-endpoints.js
  /src/App.jsx
  /src/components/shared/Header.jsx
```

---

## VALIDATION CHECKLIST

Before reporting success, verify:

```
COMPONENT STRUCTURE:
  - [ ] Main page component with lazy loading
  - [ ] Hero component with mobile optimizations
  - [ ] All section imports correct

HERO DATA:
  - [ ] 6 learning points with icons
  - [ ] 3 value propositions
  - [ ] Correct dates and times
  - [ ] Status badges configured

PROMISE SECTION:
  - [ ] 8 features with unique icons
  - [ ] Each has highlight keyword
  - [ ] Colors distributed across spectrum

DIFFERENTIATORS:
  - [ ] 6 items with "Outros cursos/Aqui" pattern
  - [ ] Each has highlight keyword

JOURNEY:
  - [ ] 8 steps with skills and personas
  - [ ] One step has isCore: true
  - [ ] Subtitles follow "Before -> After" pattern

AUDIENCE:
  - [ ] 3 profiles with fit levels
  - [ ] 3 prerequisites with levels
  - [ ] Summary note at bottom

PRICING:
  - [ ] 3 tiers configured
  - [ ] Eduzz URL set
  - [ ] Countdown target date set
  - [ ] 8 deliverables listed

CONFIGURATION:
  - [ ] Webhook added to webhook-endpoints.js
  - [ ] Route added to App.jsx (lazy loaded)
  - [ ] Header color scheme added (if needed)

BUILD:
  - [ ] npm run build passes
  - [ ] No console errors
```

---

_This command creates bootcamp pages that exactly match the Claude Code bootcamp pattern._

ARGUMENTS: $ARGUMENTS
