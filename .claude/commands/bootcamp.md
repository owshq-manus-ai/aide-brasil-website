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

**The ONLY canonical reference implementation is Claude Code. All new bootcamps MUST copy its exact structure.**

**DO NOT reference ChatGPTCodexBootcamp as it has structural deviations.**

---

## BOOTCAMP ARCHITECTURE (Bootcamp-Specific Components)

**IMPORTANT**: Each bootcamp has its own set of 9 component files. This ensures:
- Theme colors are embedded in each component
- Copy is customized per bootcamp
- No complex config/data-passing needed

```
src/features/bootcamps/
├── pages/
│   └── [Name]Bootcamp.jsx              # Main orchestrator (lazy loads sections)
└── components/
    ├── [Name]BootcampHero.jsx          # Hero section with TechDock
    ├── [Name]PromiseSection.jsx        # 8 features with COLOR_CLASSES
    ├── [Name]DifferentiatorSection.jsx # 6 reasons + bottom statement
    ├── [Name]JourneyTimeline.jsx       # 8 steps EXPANDABLE ACCORDION
    ├── [Name]StackSection.jsx          # 6 tech categories with IMAGE logos
    ├── [Name]AudienceSection.jsx       # 3 profiles + 3 prerequisites
    ├── [Name]PricingSection.jsx        # 3 tiers + countdown + modal
    └── [Name]FinalCTASection.jsx       # Final CTA with particles
```

---

## COPY RESEARCH INTEGRATION (social-media-copywriter Agent)

**CRITICAL**: Before generating any component, research compelling copy for the bootcamp topic.

### Step 0: Research Copy (BEFORE Component Generation)

```text
Use the social-media-copywriter agent patterns to research:
1. Industry pain points for [technology]
2. Competitor messaging patterns
3. High-converting headlines for tech education
4. Brazilian Portuguese best practices
```

**Copy Research Query:**
```typescript
mcp__exa__get_code_context_exa({
  query: "[TECHNOLOGY_NAME] tutorial benefits pain points developer productivity 2025",
  tokensNum: 5000
})
```

**Psychological Triggers to Apply:**
- **Hero**: Authority + Curiosity ("Do Zero a Produção" implies mastery journey)
- **Promise**: FOMO + Concrete benefits (8 specific outcomes)
- **Differentiator**: Pain amplification + Relief ("Outros cursos vs Aqui")
- **Journey**: Progress visualization + Achievement (8 transformation steps)
- **Pricing**: Scarcity + Loss aversion (countdown + limited spots)

**Brazilian Portuguese Rules:**
- Always use "você" (never "tu" or "vós")
- Include urgency: "Garanta sua vaga", "Vagas limitadas", "Última chance"
- Add social proof: numbers, confirmations, testimonials
- Use "Outros cursos: X. Aqui: Y" comparison pattern

---

## THEME COLORS - Critical for Each Bootcamp

Each bootcamp MUST define a THEME constant at the top of every component:

```javascript
// Claude Code - Coral theme (DEFAULT REFERENCE)
const THEME = {
  primary: '#E07A5F',
  secondary: '#F0A090',
  accent: '#B85A47',
  light: '#F5C4B8',
}

// Gray theme (professional tools)
const THEME = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  accent: '#374151',
  light: '#d1d5db',
}
```

### Available Theme Colors

| Theme | Primary | Secondary | Accent | Light | Use For |
|-------|---------|-----------|--------|-------|---------|
| coral | #E07A5F | #F0A090 | #B85A47 | #F5C4B8 | Claude Code (default) |
| gray | #6b7280 | #9ca3af | #374151 | #d1d5db | ChatGPT Codex, professional tools |
| purple | #8B5CF6 | #A78BFA | #7C3AED | #C4B5FD | AI/ML focused |
| blue | #3B82F6 | #60A5FA | #2563EB | #93C5FD | Cloud/Data |
| green | #22C55E | #4ADE80 | #16A34A | #86EFAC | DevOps/Automation |
| orange | #F97316 | #FB923C | #EA580C | #FDBA74 | Intensive workshops |

---

## HERO SECTION - EXACT STRUCTURE (MOST CRITICAL)

### HERO LAYOUT DIAGRAM (MEMORIZE THIS)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              HERO SECTION                                    │
│                        grid lg:grid-cols-12 gap-8                           │
├──────────────────────────────────────┬──────────────────────────────────────┤
│         LEFT COLUMN (lg:col-span-7)  │    RIGHT COLUMN (lg:col-span-5)      │
├──────────────────────────────────────┼──────────────────────────────────────┤
│  1. STATUS BADGES (inline flex)      │                                      │
│     [ONLINE] [4 DIAS] [12H CÓDIGO]   │                                      │
├──────────────────────────────────────┤                                      │
│  2. TECH STACK DOCK ←POSITION #2     │    ┌────────────────────────────┐    │
│     Import from TechStackDock.jsx    │    │     LEARNING CARD          │    │
│     [Logo][Logo][Logo][Logo][---]    │    │                            │    │
├──────────────────────────────────────┤    │  "O que você vai dominar"  │    │
│  3. MAIN HEADLINE                    │    │                            │    │
│     "Do Zero a Produção [Name]"      │    │  ✓ Learning point 1       │    │
├──────────────────────────────────────┤    │  ✓ Learning point 2       │    │
│  4. SUBTITLE                         │    │  ✓ Learning point 3       │    │
│     Transformation promise           │    │  ✓ Learning point 4       │    │
├──────────────────────────────────────┤    │  ✓ Learning point 5       │    │
│  5. DESCRIPTION PARAGRAPH            │    │  ✓ Learning point 6       │    │
│     Methodology explanation          │    │                            │    │
├──────────────────────────────────────┤    │  (ONLY 6 POINTS - NOTHING  │    │
│  6. VALUE PROPOSITIONS (3 items)     │    │   ELSE IN THIS CARD!)      │    │
│     ⚡ Benefit 1 with glow icon       │    └────────────────────────────┘    │
│     🎯 Benefit 2 with glow icon       │                                      │
│     🔥 Benefit 3 with glow icon       │                                      │
├──────────────────────────────────────┤                                      │
│  7. DATE/TIME INFO                   │                                      │
│     📅 Date  ⏰ Time  📹 Recording    │                                      │
├──────────────────────────────────────┤                                      │
│  8. CTA BUTTONS                      │                                      │
│     [GARANTIR VAGA] [VER PROGRAMA]   │                                      │
├──────────────────────────────────────┤                                      │
│  9. PRESENTED BY (EDA logo)          │                                      │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### HERO EXACT JSX STRUCTURE (COPY THIS EXACTLY)

```jsx
// [Name]BootcampHero.jsx - EXACT STRUCTURE FROM ClaudeCodeBootcampHero.jsx

import React, { memo, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar, Clock, Video, Users, ChevronRight, Sparkles, Zap,
  ArrowRight, CheckCircle, Target, Flame
} from 'lucide-react'
import TechStackDock from './TechStackDock'  // MUST IMPORT FROM SEPARATE FILE

const THEME = {
  primary: '#XXXXXX',
  secondary: '#XXXXXX',
  accent: '#XXXXXX',
  light: '#XXXXXX',
}

// EXACTLY 6 learning points (NO MORE, NO LESS)
const LEARNING_POINTS = [
  'Learning point 1',
  'Learning point 2',
  'Learning point 3',
  'Learning point 4',
  'Learning point 5',
  'Learning point 6',
]

// EXACTLY 3 value propositions - THESE GO IN LEFT COLUMN, NOT IN CARD
const VALUE_PROPOSITIONS = [
  { icon: Zap, text: 'Value prop 1' },
  { icon: Target, text: 'Value prop 2' },
  { icon: Flame, text: 'Value prop 3' },
]

const [Name]BootcampHero = memo(() => {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden pt-20 pb-12">
      {/* Background effects using THEME colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse 800px 600px at 30% 20%, ${THEME.primary}15 0%, transparent 50%)`
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* TWO COLUMN GRID - CRITICAL: lg:grid-cols-12 with 7+5 split      */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ─────────────────────────────────────────────────────────────── */}
          {/* LEFT COLUMN - lg:col-span-7 - ORDER IS CRITICAL                 */}
          {/* ─────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-6">

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* POSITION #1: STATUS BADGES - Inline flex at TOP of left col   */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Online badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Online e Ao Vivo
              </span>
              {/* Duration badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                style={{ backgroundColor: `${THEME.primary}20`, color: THEME.secondary, border: `1px solid ${THEME.primary}40` }}>
                4 Dias Intensivos
              </span>
              {/* Hours badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider"
                style={{ backgroundColor: `${THEME.primary}20`, color: THEME.secondary, border: `1px solid ${THEME.primary}40` }}>
                12h de Código
              </span>
            </div>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* POSITION #2: TECH STACK DOCK - BETWEEN badges and headline    */}
            {/* CRITICAL: This MUST be here, NOT after CTA buttons!           */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <TechStackDock technologies={TECHNOLOGIES} theme={THEME} />

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* POSITION #3: MAIN HEADLINE                                    */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-white leading-tight">
              Do Zero a Produção{' '}
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(90deg, ${THEME.primary}, ${THEME.light})` }}>
                [Product Name]
              </span>
            </h1>

            {/* POSITION #4: SUBTITLE */}
            <p className="text-xl sm:text-2xl font-medium" style={{ color: THEME.secondary }}>
              [Before state] → [After state transformation promise]
            </p>

            {/* POSITION #5: DESCRIPTION */}
            <p className="text-base sm:text-lg text-white/70 leading-relaxed">
              [Methodology explanation]
            </p>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* POSITION #6: VALUE PROPOSITIONS - 3 items with GLOW icons     */}
            {/* CRITICAL: These go HERE in LEFT column, NOT inside the card!  */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <div className="flex flex-wrap gap-4">
              {VALUE_PROPOSITIONS.map((prop, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="p-2 rounded-lg"
                    style={{
                      backgroundColor: `${THEME.primary}20`,
                      boxShadow: `0 0 20px ${THEME.primary}30`
                    }}>
                    <prop.icon className="w-5 h-5" style={{ color: THEME.secondary }} />
                  </div>
                  <span className="text-white/80 text-sm font-medium">{prop.text}</span>
                </div>
              ))}
            </div>

            {/* POSITION #7: DATE/TIME INFO */}
            <div className="flex flex-wrap items-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" style={{ color: THEME.secondary }} />
                <span>28-31 Janeiro 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" style={{ color: THEME.secondary }} />
                <span>20:00 BRT</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5" style={{ color: THEME.secondary }} />
                <span>Gravação disponível</span>
              </div>
            </div>

            {/* POSITION #8: CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-oswald font-bold uppercase tracking-wider text-white"
                style={{ background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})` }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5" />
                Garantir Minha Vaga
                <ChevronRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-oswald font-bold uppercase tracking-wider text-white/80 border border-white/20"
                whileHover={{ scale: 1.02, borderColor: 'rgba(255,255,255,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Programa Completo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* POSITION #9: PRESENTED BY */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-white/40 text-sm">Apresentado por</span>
              <a href="https://eda.tec.br" target="_blank" rel="noopener noreferrer">
                <img src="/images/logos/eda-logo.webp" alt="EDA" className="h-6 opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────── */}
          {/* RIGHT COLUMN - lg:col-span-5 - LEARNING CARD ONLY               */}
          {/* ─────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${THEME.primary}30` }}>
                  <Target className="w-5 h-5" style={{ color: THEME.secondary }} />
                </div>
                <h3 className="text-lg font-bold text-white">O que você vai dominar</h3>
              </div>

              {/* ═══════════════════════════════════════════════════════════ */}
              {/* EXACTLY 6 Learning Points - NOTHING ELSE IN THIS CARD       */}
              {/* ═══════════════════════════════════════════════════════════ */}
              <div className="space-y-3">
                {LEARNING_POINTS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              {/* ═══════════════════════════════════════════════════════════ */}
              {/* DO NOT ADD ANYTHING ELSE HERE:                              */}
              {/* - NO value propositions (they go in left column #6)         */}
              {/* - NO pricing information                                    */}
              {/* - NO CTA buttons                                            */}
              {/* - NO card footer                                            */}
              {/* ═══════════════════════════════════════════════════════════ */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
})

export default [Name]BootcampHero
```

### HERO DO NOT RULES (MEMORIZE THESE)

```text
❌ NEVER put TechStackDock AFTER CTA buttons (must be position #2, between badges and headline)
❌ NEVER put value propositions INSIDE the right card (must be in left column position #6)
❌ NEVER add pricing info in the right card
❌ NEVER add CTA buttons in the right card
❌ NEVER add a card footer with any content
❌ NEVER center badges ABOVE both columns (must be inline flex in left column)
❌ NEVER define TechStackDock INLINE (must import from separate file)
❌ NEVER use more than 6 learning points in the card
❌ NEVER use more than 3 value propositions
```

---

## PROMISE SECTION (8 Features with COLOR_CLASSES)

### PROMISE STRUCTURE

```javascript
// COLOR_CLASSES for visual variety - MUST use different colors per feature
const COLOR_CLASSES = {
  blue: { bg: 'bg-blue-500/20', border: 'border-blue-500/30', text: 'text-blue-400', glow: 'group-hover:shadow-blue-500/20' },
  purple: { bg: 'bg-purple-500/20', border: 'border-purple-500/30', text: 'text-purple-400', glow: 'group-hover:shadow-purple-500/20' },
  green: { bg: 'bg-green-500/20', border: 'border-green-500/30', text: 'text-green-400', glow: 'group-hover:shadow-green-500/20' },
  cyan: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400', glow: 'group-hover:shadow-cyan-500/20' },
  orange: { bg: 'bg-orange-500/20', border: 'border-orange-500/30', text: 'text-orange-400', glow: 'group-hover:shadow-orange-500/20' },
  pink: { bg: 'bg-pink-500/20', border: 'border-pink-500/30', text: 'text-pink-400', glow: 'group-hover:shadow-pink-500/20' },
  amber: { bg: 'bg-amber-500/20', border: 'border-amber-500/30', text: 'text-amber-400', glow: 'group-hover:shadow-amber-500/20' },
  red: { bg: 'bg-red-500/20', border: 'border-red-500/30', text: 'text-red-400', glow: 'group-hover:shadow-red-500/20' },
}

// EXACTLY 8 features with DIFFERENT colors assigned
const FEATURES = [
  { icon: Cloud, title: 'Feature 1', description: '...', highlight: 'key phrase', color: 'blue' },
  { icon: Code2, title: 'Feature 2', description: '...', highlight: 'key phrase', color: 'purple' },
  { icon: Workflow, title: 'Feature 3', description: '...', highlight: 'key phrase', color: 'green' },
  { icon: GitBranch, title: 'Feature 4', description: '...', highlight: 'key phrase', color: 'cyan' },
  { icon: Rocket, title: 'Feature 5', description: '...', highlight: 'key phrase', color: 'orange' },
  { icon: Shield, title: 'Feature 6', description: '...', highlight: 'key phrase', color: 'pink' },
  { icon: BarChart3, title: 'Feature 7', description: '...', highlight: 'key phrase', color: 'amber' },
  { icon: Zap, title: 'Feature 8', description: '...', highlight: 'key phrase', color: 'red' },
]

// Grid breakpoints - MUST match reference
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

### PROMISE BOTTOM ELEMENT (REQUIRED)

```jsx
{/* "100% do projeto" box - MUST BE INCLUDED */}
<motion.div className="mt-12 text-center">
  <div className="inline-flex items-center gap-2 rounded-xl px-4 py-3"
    style={{
      background: `linear-gradient(90deg, ${THEME.primary}15, ${THEME.secondary}10)`,
      border: `1px solid ${THEME.primary}30`
    }}>
    <Bot className="w-5 h-5" style={{ color: THEME.secondary }} />
    <span className="text-white/80">
      <span style={{ color: THEME.light }} className="font-bold">100% do projeto</span>
      {' '}será construído usando [Tool Name] — do problema ao deploy
    </span>
  </div>
</motion.div>
```

### PROMISE DO NOT RULES

```text
❌ NEVER use same color for all 8 features (must vary using COLOR_CLASSES)
❌ NEVER skip the "100% do projeto" bottom element
❌ NEVER use fewer than 8 features
❌ NEVER use lg:grid-cols-4 without xl:grid-cols-4 breakpoint
```

---

## DIFFERENTIATOR SECTION (6 Reasons)

Each differentiator MUST follow "Outros cursos: X. Aqui: Y" pattern:

```javascript
const DIFFERENTIATORS = [
  {
    title: 'Cloud, Não Local',
    description: 'Outros cursos: você configura ambiente. Aqui: [Tool] roda na nuvem — zero setup, zero conflito de dependências.',
    icon: Cloud,
    highlight: 'zero setup'
  },
  // ... 6 items total
]
```

### DIFFERENTIATOR BOTTOM STATEMENT (REQUIRED)

```jsx
{/* "Outros ensinam..." statement - MUST BE INCLUDED */}
<motion.div className="mt-12 text-center">
  <div className="inline-block rounded-xl px-4 py-4"
    style={{
      background: `linear-gradient(90deg, ${THEME.primary}10, ${THEME.secondary}05)`,
      border: `1px solid ${THEME.primary}20`
    }}>
    <p className="text-lg font-oswald text-white mb-1">
      <span className="text-white/60">Outros ensinam</span>{' '}
      <span className="text-red-400 line-through">prompts</span>.
    </p>
    <p className="text-base text-white/80">
      Nós ensinamos a <span style={{ color: THEME.light }} className="font-bold">operar agentes autônomos</span> com eles.
    </p>
  </div>
</motion.div>
```

---

## JOURNEY TIMELINE (8 Steps - EXPANDABLE ACCORDION)

**CRITICAL**: This is NOT a static list! It's an EXPANDABLE ACCORDION with zigzag layout.

```javascript
const STEPS = [
  {
    number: 1,
    title: 'Step Title',
    subtitle: 'Before State → After State',  // Transformation pattern
    description: 'Detailed description...',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    personas: ['Persona 1', 'Persona 2'],
    icon: Search,
    isCore: false  // Only ONE step should be isCore: true (usually step 5 or 6)
  },
  // ... 8 steps total
]

// Accordion state - core step expanded by default
const [expandedStep, setExpandedStep] = useState(5)

// Zigzag layout pattern
{index % 2 === 0 ? (
  <><StepCard .../><div className="hidden lg:block" /></>
) : (
  <><div className="hidden lg:block" /><StepCard .../></>
)}

// AnimatePresence for expand/collapse
<AnimatePresence>
  {isExpanded && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      {/* Expanded content: description, skills, personas */}
    </motion.div>
  )}
</AnimatePresence>
```

### JOURNEY DO NOT RULES

```text
❌ NEVER make this a static list (must be expandable accordion)
❌ NEVER skip the zigzag alternating layout on desktop
❌ NEVER forget AnimatePresence for expand/collapse animations
❌ NEVER mark more than ONE step as isCore: true
❌ NEVER skip skills[] and personas[] arrays in each step
```

---

## STACK SECTION (6 Tech Categories with IMAGE Logos)

**CRITICAL**: Use IMAGE files for tech logos, not Lucide icons.

```javascript
// Use image property with path to logo files
const STACK_CATEGORIES = [
  {
    category: 'Cloud',
    description: 'Where your system runs',
    image: '/images/logos/google-cloud-logo.webp',  // IMAGE FILE, not icon
    items: [
      { name: 'GCS', description: 'Receives files' },
      { name: 'Cloud Run', description: 'Processes data' },
      { name: 'BigQuery', description: 'Stores everything' }
    ],
    color: 'gcp'
  },
  // ... 6 categories total
]

// Special case for SVG icons (like Terraform)
{
  category: 'Infra',
  isTerraform: true,  // Use custom SVG component
  items: [...]
}
```

### STACK DO NOT RULES

```text
❌ NEVER use Lucide icons for tech logos (use image files from /public/images/logos/)
❌ NEVER skip the architecture note at bottom
❌ NEVER use fewer than 6 tech categories
```

---

## AUDIENCE SECTION (Two-Column Layout)

**CRITICAL**: Must be two-column layout with specific headers.

```jsx
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
  {/* LEFT COLUMN - Audience Profiles */}
  <div>
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <CheckCircle className="w-6 h-6 text-green-400" />
      Quem Vai Extrair Mais Valor
    </h3>
    {/* 3 audience profiles with fit: 'perfect' | 'good' */}
  </div>

  {/* RIGHT COLUMN - Prerequisites */}
  <div>
    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <AlertCircle className="w-6 h-6" style={{ color: THEME.secondary }} />
      O Que Você Já Precisa Ter
    </h3>
    {/* 3 prerequisites with level: 'basic' | 'tool' */}

    {/* Bottom note - REQUIRED */}
    <div className="mt-6 p-4 border border-green-500/30 rounded-xl"
      style={{ background: 'linear-gradient(90deg, rgba(34, 197, 94, 0.1), ...)' }}>
      <p className="text-white/80 text-sm">
        <span className="text-green-400 font-bold">Resumindo:</span> se você consegue escrever um SELECT e um loop em Python,
        <span className="text-white font-semibold"> você já tem o necessário</span>. O resto a gente constrói junto.
      </p>
    </div>
  </div>
</div>
```

---

## PRICING SECTION (3 Tiers + Countdown + Modal)

```javascript
const PRICING_TIERS = [
  {
    id: 'lote1',
    name: 'Early Birds',
    subtitle: 'Quem chegou primeiro',
    price: '897',
    originalPrice: null,
    status: 'sold_out',  // sold_out | current | upcoming
    highlight: false,
    icon: Lock,
    color: 'gray'
  },
  {
    id: 'lote2',
    name: 'Lote Decisão',
    subtitle: 'Última chance neste valor',
    price: '1.197',
    originalPrice: '1.397',
    status: 'current',
    highlight: true,  // Main CTA tier with "Melhor Oferta" badge
    icon: Flame,
    color: 'theme'
  },
  {
    id: 'lote3',
    name: 'Lote Final',
    subtitle: 'Preço cheio',
    price: '1.397',
    originalPrice: null,
    status: 'upcoming',
    highlight: false,
    icon: TrendingUp,
    color: 'amber'
  }
]

// EXACTLY 8 deliverables
const DELIVERABLES = [
  { text: 'Repositório GitHub completo', value: 'Clone e rode em 5 minutos' },
  { text: 'Pipeline completo em produção', value: 'Input → Output' },
  // ... 8 items total
]
```

### PRICING REQUIRED ELEMENTS
1. Countdown timer with target date
2. 3-tier pricing cards grid
3. Registration modal with form (name, email, phone)
4. Format & dates info grid (4 items: date, hours, guarantee, certificate)
5. 8 deliverables list
6. Value comparison section ("Se você montasse isso sozinho...")

---

## FINAL CTA SECTION

### FINAL CTA REQUIRED ELEMENTS

```jsx
{/* 1. Before/After comparison box */}
<div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gradient-to-r from-white/[0.03] to-white/[0.01] rounded-2xl px-8 py-6 border border-white/10">
  <div className="text-center sm:text-right">
    <p className="text-white/40 text-sm uppercase tracking-wider mb-1">Hoje</p>
    <p className="text-white/60 text-lg">[Current painful state]</p>
  </div>
  <ArrowRight className="w-8 h-8" style={{ color: THEME.secondary }} />
  <div className="text-center sm:text-left">
    <p className="text-sm uppercase tracking-wider mb-1 font-bold" style={{ color: THEME.light }}>Em 4 dias</p>
    <p className="text-white text-lg font-bold">[Transformed state]</p>
  </div>
</div>

{/* 2. Main CTA Message */}
<h2>Daqui a 6 meses você vai estar...</h2>

{/* 3. CTA Button with shimmer effect */}
<motion.button>...</motion.button>

{/* 4. Final tagline with strikethrough pattern */}
<p className="text-lg sm:text-2xl font-oswald text-white">
  <span className="text-white/40 line-through">[Old way]</span>{' '}
  <span className="bg-clip-text text-transparent font-bold"
    style={{ backgroundImage: `linear-gradient(90deg, ${THEME.secondary}, ${THEME.light})` }}>
    [New way]
  </span>
</p>

{/* 5. Animated particles (6 optimized) */}
const PARTICLE_POSITIONS = [
  { left: '20%', top: '30%', duration: 4.5, delay: 0.2 },
  { left: '80%', top: '25%', duration: 4.0, delay: 0.8 },
  { left: '35%', top: '70%', duration: 3.8, delay: 0.5 },
  { left: '65%', top: '60%', duration: 4.2, delay: 1.0 },
  { left: '50%', top: '40%', duration: 3.5, delay: 0.3 },
  { left: '15%', top: '55%', duration: 4.3, delay: 0.7 },
]
```

---

## EXECUTION STEPS

### Step 0: Research Copy (NEW - REQUIRED)
```text
Before generating components, research compelling copy:
1. Use mcp__exa__get_code_context_exa for [TECHNOLOGY] pain points and benefits
2. Apply psychological triggers from social-media-copywriter agent
3. Ensure Brazilian Portuguese best practices (você, urgency language)
```

### Step 1: Read Reference Implementation
```bash
# Read ONLY Claude Code files (the canonical reference)
cat src/features/bootcamps/pages/ClaudeCodeBootcamp.jsx
cat src/features/bootcamps/components/ClaudeCodeBootcampHero.jsx
cat src/features/bootcamps/components/PromiseSection.jsx
cat src/features/bootcamps/components/DifferentiatorSection.jsx
cat src/features/bootcamps/components/JourneyTimeline.jsx
cat src/features/bootcamps/components/StackSection.jsx
cat src/features/bootcamps/components/AudienceSection.jsx
cat src/features/bootcamps/components/PricingSection.jsx
cat src/features/bootcamps/components/FinalCTASection.jsx
```

### Step 2: Parse Briefing
Extract from user's briefing (YAML):
- Basic info (name, slug, dates, pricing)
- Theme colors
- Hero content (6 learning points, 3 value props, badges)
- Promise features (8 items with varied colors)
- Differentiators (6 items with "Outros cursos vs Aqui" pattern)
- Journey steps (8 items with skills, personas, one isCore)
- Tech stack (6 categories with image paths)
- Audience profiles (3 items with fit levels)
- Prerequisites (3 items with levels)
- Deliverables (8 items with values)

### Step 3: Generate Component Names
```javascript
"ChatGPT Codex" -> ChatGPTCodexBootcamp, ChatGPTCodexBootcampHero, etc.
"Apache Kafka" -> KafkaBootcamp, KafkaBootcampHero, etc.
"CrewAI" -> CrewAIBootcamp, CrewAIBootcampHero, etc.
```

### Step 4: Create All 9 Components

**CRITICAL ORDER** - Create in this exact sequence:

1. **Main Page**: `/src/features/bootcamps/pages/[Name]Bootcamp.jsx`
2. **Hero**: `/src/features/bootcamps/components/[Name]BootcampHero.jsx`
3. **Promise**: `/src/features/bootcamps/components/[Name]PromiseSection.jsx`
4. **Differentiator**: `/src/features/bootcamps/components/[Name]DifferentiatorSection.jsx`
5. **Journey**: `/src/features/bootcamps/components/[Name]JourneyTimeline.jsx`
6. **Stack**: `/src/features/bootcamps/components/[Name]StackSection.jsx`
7. **Audience**: `/src/features/bootcamps/components/[Name]AudienceSection.jsx`
8. **Pricing**: `/src/features/bootcamps/components/[Name]PricingSection.jsx`
9. **Final CTA**: `/src/features/bootcamps/components/[Name]FinalCTASection.jsx`

### Step 5: Add Route
Edit `/src/App.jsx`:
```javascript
const [Name]Bootcamp = lazy(() =>
  import('./features/bootcamps/pages/[Name]Bootcamp')
)

<Route path="/bootcamp/[slug]" element={<[Name]Bootcamp />} />
```

### Step 6: Add Webhook
Edit `/src/config/webhook-endpoints.js`:
```javascript
bootcamps: {
  '[slug]': {
    url: import.meta.env.VITE_WEBHOOK_BOOTCAMP_[NAME] ||
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

### Step 7: Add Header Color Scheme
Edit `/src/components/shared/Header.jsx`

### Step 8: Validate Build
```bash
npm run build
```

---

## VALIDATION CHECKLIST (ALL MUST PASS)

```text
═══════════════════════════════════════════════════════════════════════════════
                         BOOTCAMP GENERATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

HERO SECTION (MOST CRITICAL - CHECK EVERY ITEM):
  □ Two-column grid: lg:grid-cols-12 with col-span-7 + col-span-5
  □ Badges are INLINE at top of LEFT column (position #1)
  □ TechStackDock is position #2 (BETWEEN badges and headline)
  □ TechStackDock is IMPORTED from separate file
  □ Value props (3) are in LEFT column position #6 (NOT in card)
  □ Right card has ONLY 6 learning points
  □ Right card has NO pricing, NO value props, NO CTA, NO footer
  □ Date/time info is position #7 (before CTA buttons)
  □ Presented by logo is position #9 (last element in left col)

PROMISE SECTION:
  □ 8 features with 8 DIFFERENT colors (COLOR_CLASSES)
  □ Grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
  □ "100% do projeto" box at bottom

DIFFERENTIATOR SECTION:
  □ 6 differentiators
  □ Each uses "Outros cursos: X. Aqui: Y" pattern
  □ "Outros ensinam..." statement at bottom

JOURNEY TIMELINE:
  □ 8 steps with EXPANDABLE ACCORDION behavior
  □ Zigzag alternating layout (left/right on desktop)
  □ AnimatePresence for expand/collapse
  □ ONE step has isCore: true (expanded by default)
  □ Each step has skills[] and personas[] arrays

STACK SECTION:
  □ 6 tech categories
  □ Uses IMAGE files for logos (not Lucide icons)
  □ Architecture note at bottom

AUDIENCE SECTION:
  □ TWO-COLUMN layout (lg:grid-cols-2)
  □ Left: "Quem Vai Extrair Mais Valor" (3 profiles)
  □ Right: "O Que Você Já Precisa Ter" (3 prerequisites)
  □ Bottom note in right column

PRICING SECTION:
  □ 3 pricing tiers (sold_out, current, upcoming)
  □ Countdown timer
  □ Registration modal with form
  □ 8 deliverables
  □ Value comparison section

FINAL CTA SECTION:
  □ Before/After comparison box
  □ Main CTA with shimmer animation
  □ Final tagline with strikethrough
  □ 6 animated particles

THEME:
  □ THEME constant in ALL 9 components
  □ Correct primary/secondary/accent/light colors

COPY:
  □ Uses "você" (never "tu")
  □ Brazilian Portuguese (not Portugal)
  □ Urgency language present
  □ Social proof included

CONFIGURATION:
  □ Route in App.jsx (lazy loaded)
  □ Webhook in webhook-endpoints.js

BUILD:
  □ npm run build passes

═══════════════════════════════════════════════════════════════════════════════
```

---

## CRITICAL RULES SUMMARY

### MUST DO
1. **Create 9 separate component files** per bootcamp
2. **Use memo() for ALL components**
3. **Lazy load all sections except Hero**
4. **Use THEME constant** at top of every component
5. **Use COLOR_CLASSES** in PromiseSection for variety
6. **Include "100% do projeto" box** in PromiseSection
7. **Include "Outros ensinam..." statement** in DifferentiatorSection
8. **Use EXPANDABLE ACCORDION + ZIGZAG** in JourneyTimeline
9. **Use TWO-COLUMN LAYOUT** in AudienceSection
10. **Use IMAGE files** for tech logos in StackSection
11. **Include countdown + modal** in PricingSection
12. **Include Before/After box** in FinalCTASection
13. **Research copy** using social-media-copywriter patterns

### NEVER DO
1. Put TechStackDock after CTA buttons
2. Put value props inside right card
3. Add anything except 6 learning points in right card
4. Use same color on all Promise features
5. Make Journey a static list
6. Use single-column in Audience
7. Use Lucide icons for tech logos
8. Skip bottom statements in Promise/Differentiator
9. Generate without reading Claude Code reference first
10. Reference ChatGPTCodexBootcamp (it has deviations)

---

## REFERENCE FILES (ONLY USE CLAUDE CODE)

```
CANONICAL REFERENCE (Claude Code - Coral Theme):
  /src/features/bootcamps/pages/ClaudeCodeBootcamp.jsx
  /src/features/bootcamps/components/ClaudeCodeBootcampHero.jsx
  /src/features/bootcamps/components/PromiseSection.jsx
  /src/features/bootcamps/components/DifferentiatorSection.jsx
  /src/features/bootcamps/components/JourneyTimeline.jsx
  /src/features/bootcamps/components/StackSection.jsx
  /src/features/bootcamps/components/AudienceSection.jsx
  /src/features/bootcamps/components/PricingSection.jsx
  /src/features/bootcamps/components/FinalCTASection.jsx

COPY RESEARCH:
  /.claude/agents/social-media-copywriter.md

BRIEFING TEMPLATE:
  /.claude/commands/bootcamp-briefing-template.md

CONFIGURATION:
  /src/config/webhook-endpoints.js
  /src/App.jsx
  /src/components/shared/Header.jsx
```

---

_This command creates 9 bootcamp-specific component files that EXACTLY match the Claude Code bootcamp pattern, with copy researched via social-media-copywriter agent patterns._

ARGUMENTS: $ARGUMENTS
