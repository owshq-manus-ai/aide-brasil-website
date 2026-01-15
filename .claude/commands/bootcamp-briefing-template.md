# Bootcamp Briefing Template

> **Copy this template, fill in all fields, and save to `/briefings/bootcamps/bootcamp-[slug].md`**
> Then run: `/bootcamp briefings/bootcamps/bootcamp-[slug].md`

---

## BRIEFING TEMPLATE

```yaml
# ============================================
# BOOTCAMP BRIEFING - Fill all fields below
# ============================================

# BASIC INFO (Required)
name: "Do Zero a Produção com [Technology]"    # Full bootcamp name
slug: "zero-prod-[slug]"                        # URL slug (kebab-case)
component_name: "[Name]Bootcamp"                # React component name (PascalCase)
title_highlight: "[Technology]"                 # Word with gradient effect in title
subtitle: "Use [Tech] como [benefit] — com [specific outcome that sells]"
date_range: "DD-DD Mon YYYY"                    # Example: "15-18 Mar 2026"
time: "20:00 BRT"                               # Daily start time
duration: "12 horas"                            # Total hours
total_days: 4                                   # Number of days

# THEME (Required) - Pick ONE that matches the technology brand
# Options: coral, gray, purple, blue, green, orange
theme: "coral"
primary_color: "#E07A5F"      # See color table below
secondary_color: "#F0A090"
accent_color: "#B85A47"
light_color: "#F5C4B8"

# PRICING (Required)
pricing:
  early_bird:
    price: "897"
    status: "sold_out"        # sold_out | current | upcoming
  current:
    name: "Lote Decisão"
    price: "1.197"
    original_price: "1.397"
    installments: "12x de R$ 119,63"
    spots_left: 47
    status: "current"
  final:
    price: "1.397"
    status: "upcoming"

# PAYMENT GATEWAY (Required)
eduzz_checkout_url: "https://sun.eduzz.com/XXXXXXXX"
countdown_target: "2026-XX-XXT00:00:00-03:00"  # Countdown end date

# HERO SECTION (Required)
hero:
  headline: "Do Zero a Produção"
  transformation_promise: "Use [Tech] como [benefit] — com [specific outcome]"

  # Status badges (4 items)
  badges:
    - label: "Online"
      color: "green"
    - label: "XXX Inscritos"
      color: "theme"          # Uses primary theme color
    - label: "[Category]"
      color: "purple"
    - label: "12 Horas Hands-On"
      color: "green"

  # Learning points in right card - EXACTLY 6 items
  # Format: "[Topic]: [specific skill or outcome]"
  learning_points:
    - text: "[Topic]: [specific skill]"
      icon: "Server"          # Lucide icon name
    - text: "[Topic]: [specific skill]"
      icon: "Terminal"
    - text: "[Topic]: [specific skill]"
      icon: "Brain"
    - text: "[Topic]: [specific skill]"
      icon: "Database"
    - text: "[Topic]: [specific skill]"
      icon: "Gauge"
    - text: "[Topic]: [specific skill]"
      icon: "Rocket"

  # Value propositions - EXACTLY 3 items
  value_props:
    - icon: "Bot"
      text: "[Transformation promise - what they'll build]"
    - icon: "Terminal"
      text: "[Process promise - how they'll learn]"
    - icon: "Rocket"
      text: "[Outcome promise - what they'll have at the end]"

# PROMISE SECTION - EXACTLY 8 Features (Required)
# Each feature MUST have a DIFFERENT color for visual variety
promise:
  section_badge: "SEU ARSENAL COMPLETO"
  section_title: "8 Superpoderes do"
  section_title_highlight: "[Technology]"
  section_title_suffix: "que Ninguém Ensina"

  features:
    - title: "[Feature 1]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword to highlight]"
      color: "blue"           # blue|purple|green|cyan|orange|pink|amber|red
      icon: "Server"          # Lucide icon name

    - title: "[Feature 2]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "purple"
      icon: "FileText"

    - title: "[Feature 3]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "green"
      icon: "Users"

    - title: "[Feature 4]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "cyan"
      icon: "Brain"

    - title: "[Feature 5]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "orange"
      icon: "Shield"

    - title: "[Feature 6]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "pink"
      icon: "Webhook"

    - title: "[Feature 7]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "amber"
      icon: "BarChart3"

    - title: "[Feature 8]"
      description: "[Description] — [highlight keyword]"
      highlight: "[keyword]"
      color: "red"
      icon: "Rocket"

# DIFFERENTIATORS - EXACTLY 6 Reasons (Required)
# Pattern: "Outros cursos: [what they do]. Aqui: [what we do]."
differentiators:
  section_badge: "O QUE FAZ A DIFERENÇA"
  section_title: "6 Razões Para"
  section_title_highlight: "Nunca Mais"
  section_title_suffix: "Fazer Curso de [Topic]"

  # Bottom statement (strikethrough pattern)
  bottom_statement:
    others_teach: "prompts"           # What others teach (will be strikethrough)
    we_teach: "operar agentes autônomos"  # What we teach

  items:
    - title: "[Differentiator 1]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "ArrowRight"

    - title: "[Differentiator 2]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "Cloud"

    - title: "[Differentiator 3]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "Brain"

    - title: "[Differentiator 4]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "Shield"

    - title: "[Differentiator 5]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "BarChart3"

    - title: "[Differentiator 6]"
      description: "Outros cursos: [X]. Aqui: [Y] — [highlight]."
      highlight: "[keyword]"
      icon: "Trophy"

# JOURNEY - EXACTLY 8 Steps (Required)
# This creates an EXPANDABLE ACCORDION with zigzag layout
journey:
  section_badge: "SUA JORNADA EM 4 DIAS"
  section_title: "8 Passos Para"
  section_title_highlight: "Sair do Zero"
  section_title_suffix: "e Entregar em Produção"

  steps:
    - number: 1
      title: "[Step 1 Title]"
      subtitle: "[Before] → [After]"        # Transformation pattern
      description: "[What happens in this step. End with: 'Você sai sabendo [skill].']"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Users"
      is_core: false

    - number: 2
      title: "[Step 2 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Terminal"
      is_core: false

    - number: 3
      title: "[Step 3 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "FileText"
      is_core: false

    - number: 4
      title: "[Step 4 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Users"
      is_core: false

    - number: 5
      title: "[Step 5 Title - CORE MODULE]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Brain"
      is_core: true             # This is the CORE module - expanded by default

    - number: 6
      title: "[Step 6 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Shield"
      is_core: false

    - number: 7
      title: "[Step 7 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "BarChart3"
      is_core: false

    - number: 8
      title: "[Step 8 Title]"
      subtitle: "[Before] → [After]"
      description: "[Description]"
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"]
      personas: ["[Role 1]", "[Role 2]"]
      icon: "Rocket"
      is_core: false

# TECH STACK - EXACTLY 6 Categories (Required)
# Each category can have multiple technologies
tech_stack:
  section_title: "Tecnologias que Você Vai Dominar"
  section_description: "Stack completo para [what they'll build]"

  categories:
    - name: "[Category 1]"
      items: ["Tech 1", "Tech 2"]
      icon: "Bot"
      color: "blue"

    - name: "[Category 2]"
      items: ["Tech 1", "Tech 2"]
      icon: "Terminal"
      color: "purple"

    - name: "[Category 3]"
      items: ["Tech 1", "Tech 2"]
      icon: "Database"
      color: "green"

    - name: "[Category 4]"
      items: ["Tech 1", "Tech 2"]
      icon: "Cloud"
      color: "cyan"

    - name: "[Category 5]"
      items: ["Tech 1", "Tech 2"]
      icon: "BarChart3"
      color: "orange"

    - name: "[Category 6]"
      items: ["Tech 1", "Tech 2"]
      icon: "Rocket"
      color: "pink"

# AUDIENCE SECTION (Required)
# Two-column layout: Profiles (left) + Prerequisites (right)
audience:
  section_badge: "VOCÊ SE ENCAIXA?"
  section_title: "3 Perfis que Vão"
  section_title_highlight: "Multiplicar Resultados"
  section_title_suffix: "com [Technology]"

  # Target profiles - EXACTLY 3 items
  profiles:
    - title: "[Profile 1 - e.g., Data Engineers]"
      description: "[Pain point] — [what they'll get]"
      transformation: "[Before] → [After]"
      fit: "perfect"          # perfect | good
      icon: "Database"

    - title: "[Profile 2 - e.g., Backend Engineers]"
      description: "[Pain point] — [what they'll get]"
      transformation: "[Before] → [After]"
      fit: "perfect"
      icon: "Code2"

    - title: "[Profile 3 - e.g., Platform Engineers]"
      description: "[Pain point] — [what they'll get]"
      transformation: "[Before] → [After]"
      fit: "good"
      icon: "Server"

  # Prerequisites - EXACTLY 3 items
  prerequisites:
    - requirement: "[Prerequisite 1]"
      description: "[What they need to know - reassure them]"
      level: "basic"          # basic | tool | mindset
      icon: "Terminal"

    - requirement: "[Prerequisite 2]"
      description: "[What they need - reassure them]"
      level: "basic"
      icon: "Code2"

    - requirement: "Vontade de Aprender"
      description: "[Reassurance] — mas em 4 dias você domina o essencial"
      level: "mindset"
      icon: "Brain"

  # Bottom note
  bottom_note: "Não é sobre ser expert — é sobre estar pronto para acelerar. Se você já [basic skill], você está pronto."

# DELIVERABLES - EXACTLY 8 Items (Required)
deliverables:
  - text: "[Deliverable 1]"
    value: "[Specific detail]"
  - text: "[Deliverable 2]"
    value: "[Specific detail]"
  - text: "[Deliverable 3]"
    value: "[Specific detail]"
  - text: "[Deliverable 4]"
    value: "[Specific detail]"
  - text: "[Deliverable 5]"
    value: "[Specific detail]"
  - text: "[Deliverable 6]"
    value: "[Specific detail]"
  - text: "[Deliverable 7]"
    value: "[Specific detail]"
  - text: "Projeto portfólio"
    value: "Mostre em entrevistas"

# FINAL CTA (Required)
final_cta:
  today_state: "[What they do today - pain point]"
  future_state: "[What they'll do after - benefit]"
  headline: "[Transformation verb] com [Tech]"
  subheadline: "ou [Alternative - pain of not acting]?"
  tagline_strikethrough: "[What others do]"
  tagline_highlight: "[What graduates do]"
  bottom_text: "Zero [pain]. 100% [benefit]."

# INSTRUCTOR (Optional - defaults to Luan Moreno)
instructor:
  name: "Luan Moreno"
  title: "Principal AI & Autonomous Systems Engineer"
  company: "@Pythian"
  photo: "/images/team/luan-moreno-5.png"
  achievements:
    - "[Achievement 1 relevant to this bootcamp]"
    - "[Achievement 2]"
    - "[Achievement 3]"
    - "[Achievement 4]"
```

---

## THEME COLOR REFERENCE

| Theme | Primary | Secondary | Accent | Light | Use For |
|-------|---------|-----------|--------|-------|---------|
| coral | #E07A5F | #F0A090 | #B85A47 | #F5C4B8 | Claude Code (default) |
| gray | #6b7280 | #9ca3af | #374151 | #d1d5db | ChatGPT Codex, professional tools |
| purple | #8B5CF6 | #A78BFA | #7C3AED | #C4B5FD | AI/ML focused |
| blue | #3B82F6 | #60A5FA | #2563EB | #93C5FD | Cloud/Data |
| green | #22C55E | #4ADE80 | #16A34A | #86EFAC | DevOps/Automation |
| orange | #F97316 | #FB923C | #EA580C | #FDBA74 | Intensive workshops |

---

## LUCIDE ICON REFERENCE

Common icons used in bootcamps:

| Category | Icons |
|----------|-------|
| Tech/Code | Terminal, Code2, FileCode, Braces, GitBranch |
| Data | Database, BarChart3, PieChart, TrendingUp, Gauge |
| AI/ML | Brain, Bot, Sparkles, Zap, Cpu |
| Cloud | Cloud, Server, Globe, Webhook, Layers |
| Security | Shield, Lock, Key, Eye, Fingerprint |
| Actions | Rocket, Play, Search, Settings, RefreshCw |
| People | Users, User, UserCheck, Lightbulb |
| Misc | CheckCircle, AlertCircle, Trophy, Package, FolderOpen |

---

## OUTPUT: 9 Component Files

When you run `/bootcamp` with this briefing, it creates:

```
src/features/bootcamps/
├── pages/
│   └── [Name]Bootcamp.jsx              # Main page (lazy loading)
└── components/
    ├── [Name]BootcampHero.jsx          # Hero + TechDock
    ├── [Name]PromiseSection.jsx        # 8 features (COLOR_CLASSES)
    ├── [Name]DifferentiatorSection.jsx # 6 reasons + bottom statement
    ├── [Name]JourneyTimeline.jsx       # 8 steps (EXPANDABLE ACCORDION)
    ├── [Name]StackSection.jsx          # 6 tech categories
    ├── [Name]AudienceSection.jsx       # 3 profiles + 3 prerequisites
    ├── [Name]PricingSection.jsx        # 3 tiers + countdown + modal
    └── [Name]FinalCTASection.jsx       # Before/After + final CTA
```

---

## CHECKLIST BEFORE SUBMITTING

- [ ] All text in Brazilian Portuguese with proper accents (é, ê, ã, ç, ó)
- [ ] Theme colors filled (primary, secondary, accent, light)
- [ ] 6 hero learning points with Lucide icon names
- [ ] 3 value propositions
- [ ] 8 promise features with VARIED colors (not all the same!)
- [ ] 6 differentiators with "Outros cursos: X. Aqui: Y" pattern
- [ ] 8 journey steps with skills, personas, and ONE `is_core: true`
- [ ] 6 tech stack categories
- [ ] 3 audience profiles with fit levels
- [ ] 3 prerequisites with levels
- [ ] 8 deliverables with specific values
- [ ] Final CTA messaging filled
- [ ] Eduzz checkout URL configured
- [ ] Countdown target date set

---

## EXAMPLE BRIEFINGS

See existing briefings for reference:

- `/briefings/bootcamps/bootcamp-zero-prod-chatgpt-codex.md` (gray theme)
- Claude Code is the reference implementation (coral theme)

---

_This template creates bootcamp-specific components that match the Claude Code and ChatGPT Codex patterns._
