# 🚀 Enhanced Webinar Page Generator Prompt Template

## CRITICAL ANALYSIS FROM ORIGINAL TEMPLATE

Based on comparison with the original Claude Code webinar, here are the essential elements that MUST be preserved:

### BACKGROUND SYSTEM - MOST IMPORTANT
The original uses a sophisticated 3-layer background system that MUST be replicated:

```jsx
{/* FIXED BACKGROUND SYSTEM - CRITICAL */}
<div className="fixed inset-0" style={{ zIndex: -10 }}>
  {/* Layer 1: Deep gradient base */}
  <div style={{
    background: `linear-gradient(135deg,
      #000000 0%,
      #0a0a0f 15%,
      #[DARK_COLOR_1] 30%,
      #[METALLIC_COLOR_1] 45%,
      #1a1a1a 60%,
      #[DARK_COLOR_2] 75%,
      #000000 100%)
    `,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 2: Radial metallic overlays */}
  <div style={{
    background: `radial-gradient(circle at 20% 20%, [PRIMARY_COLOR_RGBA_10] 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, [SECONDARY_COLOR_RGBA_08] 0%, transparent 50%),
                radial-gradient(circle at 40% 70%, [ACCENT_COLOR_RGBA_06] 0%, transparent 50%)
    `,
    position: 'absolute',
    inset: 0
  }} />

  {/* Layer 3: Subtle texture */}
  <div style={{
    background: `repeating-linear-gradient(
      45deg,
      transparent,
      transparent 2px,
      [PRIMARY_COLOR_RGBA_01] 2px,
      [PRIMARY_COLOR_RGBA_01] 4px
    )`,
    position: 'absolute',
    inset: 0
  }} />
</div>
```

### HERO SECTION STRUCTURE - EXACT LAYOUT REQUIRED
The hero must be a 2-column grid (not centered single column):

```jsx
<section className="relative pt-12 pb-20 px-6">
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* LEFT COLUMN */}
      <div>
        {/* Online badge + attendee counter */}
        {/* Main title with metallic shine effect */}
        {/* Subtitle */}
        {/* Compelling copy */}
        {/* Key features with icon boxes */}
        {/* Date/time info */}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-8">
        {/* "What You'll Learn" card */}
        {/* Registration form card */}
      </div>
    </div>
  </div>
</section>
```

### KEY FEATURES BOXES - REQUIRED DESIGN
Must include icon boxes with gradient backgrounds:

```jsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 bg-gradient-to-br from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-xl flex items-center justify-center flex-shrink-0">
    <Icon className="w-5 h-5 text-white" />
  </div>
  <span className="text-white text-base">[FEATURE_TEXT]</span>
</div>
```

### ONLINE STATUS INDICATOR - EXACT MATCH
Must include the animated green dot with counter:

```jsx
<div className="inline-flex items-center gap-2">
  <div className="relative">
    <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></span>
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  </div>
  <span className="text-green-500 text-sm font-bold">Online Presencial</span>
</div>
```

### TITLE WITH METALLIC SHINE - EXACT EFFECT
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
  <span className="bg-gradient-to-r from-[PRIMARY_COLOR] via-[ACCENT_COLOR] to-[PRIMARY_COLOR] bg-clip-text text-transparent drop-shadow-2xl">
    {MAIN_TITLE}
  </span>
  {/* Metallic shine effect */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[PRIMARY_COLOR]/20 to-transparent opacity-30 blur-sm" />
</h1>
```

---

## ENHANCED PROMPT TEMPLATE:

Create a high-converting webinar landing page using the EXACT structure and design patterns from our Claude Code webinar template.

**CRITICAL**: You MUST replicate the sophisticated background system, 2-column hero layout, and all visual effects EXACTLY as specified below.

### WEBINAR CONFIGURATION:

**Background Image:**
- Background Image Path: [BACKGROUND_IMAGE_PATH] (e.g., "/images/background-domine-autonomous-agents-2.png")
- **IMPORTANT**: This same image will be used in:
  - Hero section right column background (30% opacity)
  - Instructor section background (15% opacity)
  - Instructor photo replacement (100% opacity with effects)
  - Testimonial background (8% opacity)

**Theme Colors:**
- Primary Color: [PRIMARY_COLOR] (e.g., "purple-500")
- Secondary Color: [SECONDARY_COLOR] (e.g., "violet-500")
- Metallic Background Hex: [METALLIC_HEX_1], [METALLIC_HEX_2] (e.g., "#1a0f2a, #0f0f1a")
- Dark Colors: [DARK_COLOR_1], [DARK_COLOR_2] (e.g., "#1a0f2a, #0f0a1a")
- RGBA Values for overlays:
  - [PRIMARY_COLOR_RGBA_20]: rgba(147, 51, 234, 0.2) format
  - [PRIMARY_COLOR_RGBA_40]: rgba(147, 51, 234, 0.4) format
  - [SECONDARY_COLOR_RGBA_10]: rgba(139, 92, 246, 0.1) format
  - [SECONDARY_COLOR_RGBA_20]: rgba(139, 92, 246, 0.2) format
  - [PRIMARY_COLOR_RGBA_30]: rgba(147, 51, 234, 0.3) format

**Basic Information:**
- Webinar Title: [WEBINAR_TITLE]
- Subtitle: [WEBINAR_SUBTITLE]
- Date: [DATE]
- Time: [TIME]
- Duration: [DURATION]
- Target Audience: [TARGET_AUDIENCE]

### MANDATORY STRUCTURE ELEMENTS:

1. **BACKGROUND SYSTEM** (CRITICAL - Must be exact):
   - Fixed positioning with z-index -10
   - 3-layer gradient system as specified above
   - Replace orange colors with your theme colors

2. **HEADER COMPONENT**:
   ```jsx
   <Header />
   ```

3. **BACK BUTTON**:
   ```jsx
   <div className="relative pt-24 px-6 z-10">
     <div className="max-w-7xl mx-auto">
       <Link to="/webinars" className="inline-flex items-center gap-2 text-white/70 hover:text-[PRIMARY_COLOR] transition-colors">
         <ArrowLeft className="w-4 h-4" />
         <span>Voltar aos Webinários</span>
       </Link>
     </div>
   </div>
   ```

4. **HERO SECTION** (EXACT 2-column layout):
   - Left column: Title, subtitle, features, date/time
   - Right column: "What You'll Learn" card + Registration form
   - Must include online status indicator
   - Must include attendee counter
   - Must include metallic shine effect on title
   - Must include 3 key feature boxes with icons

### HERO SECTION SPECIFICATIONS:

**CRITICAL FONT SIZES - MUST MATCH TEMPLATE EXACTLY:**
```jsx
{/* Title - SMALLER than before */}
<h1 className="text-5xl md:text-7xl font-bold mb-4">
{/* Subtitle - SMALLER */}
<h2 className="text-xl md:text-2xl text-[PRIMARY_COLOR] mb-3 font-medium">
{/* Compelling copy - Normal size */}
<p className="text-white text-lg mb-6">
```

**Left Column Elements (in exact order):**
1. **"Online" Badge** (NOT "AO VIVO" or "Online Presencial"):
```jsx
<div className="inline-flex items-center gap-4 mb-6">
  <div className="inline-flex items-center gap-2">
    <div className="relative">
      <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></span>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
    <span className="text-green-500 text-sm font-bold">Online</span>
  </div>
  {/* Attendee counter */}
  <div className="inline-flex items-center gap-2 text-white/80 text-sm">
    <Users className="w-4 h-4 text-[PRIMARY_COLOR]" />
    <span>{attendeeCount} inscritos</span>
  </div>
</div>
```

2. Main title with metallic shine effect (larger size) - **CRITICAL: Add gradient on key word**:
```jsx
<h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
  <span className="text-white">Dominando </span>
  <span className="bg-gradient-to-r from-white via-[PRIMARY_COLOR]/80 to-white bg-clip-text text-transparent">
    [HIGHLIGHT_WORD]
  </span>
  <span className="text-white"> [REST_OF_TITLE]</span>
</h1>
```
3. Subtitle with [PRIMARY_COLOR] styling
4. Compelling copy paragraph
5. **3 key feature boxes** with EXACT icons and gradient backgrounds
6. **Date/time info with ZOOM mention**:
```jsx
{/* Date */}
<Calendar className="w-5 h-5" />
{/* Time */}
<Clock className="w-5 h-5" />
{/* Platform - MUST SAY "Sessão no Zoom" */}
<Video className="w-5 h-5" />
<span>Sessão no Zoom</span>
```

**Right Column Elements:**
1. "What You'll Learn" card with:
   - BookOpen icon
   - List of benefits with CheckCircle icons
   - Gradient border and backdrop blur
2. Registration form card (spacing below the learn card)

### REQUIRED FEATURES IN HERO:

**Online Status (exact replication):**
```jsx
<div className="inline-flex items-center gap-2">
  <div className="relative">
    <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></span>
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  </div>
  <span className="text-green-500 text-sm font-bold">Online Presencial</span>
</div>
```

**Attendee Counter:**
```jsx
<div className="inline-flex items-center gap-2 text-white/80 text-sm">
  <Users className="w-4 h-4 text-[PRIMARY_COLOR]" />
  <span>[ATTENDEE_COUNT] inscritos</span>
</div>
```

**Key Features (3 required):**
```jsx
<div className="flex items-center gap-3">
  <div className="w-10 h-10 bg-gradient-to-br from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-xl flex items-center justify-center flex-shrink-0">
    <[ICON] className="w-5 h-5 text-white" />
  </div>
  <span className="text-white text-base">[FEATURE_TEXT]</span>
</div>
```

### COMPLETE 8-SECTION SPECIFICATIONS:

#### SECTION 2 - IMPACT/TRANSFORMATION (MANDATORY):
```jsx
{/* CRITICAL: Match exact typography and structure from template */}
<h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
  Pare de <span className="text-red-500 line-through decoration-4">Perder Tempo</span>
  <br />
  <span className="text-4xl md:text-6xl">Comece a </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[PRIMARY_COLOR] via-[ACCENT_COLOR] to-[PRIMARY_COLOR] text-5xl md:text-7xl">
    [ACTION_PHRASE]
  </span>
</h2>

{/* REQUIRED: Description paragraph */}
<p className="text-xl text-white/70 max-w-4xl mx-auto mb-16">
  [IMPACT_DESCRIPTION]
</p>

{/* Two comparison boxes with special cyberpunk badges */}
<div className="grid lg:grid-cols-2 gap-6">
  {/* Before box - RED theme - NO BADGE */}
  <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30 relative">
    {/* Header with Antes label */}
    <div className="flex items-center justify-between mb-4">
      <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center border border-red-500/20">
        <X className="w-8 h-8 text-red-500" />
      </div>
      <span className="text-white font-bold text-sm flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5" />
        Antes
      </span>
    </div>
    {/* Title and subtitle */}
    <h3 className="text-2xl font-bold text-white mb-2">[BEFORE_TITLE]</h3>
    <p className="text-red-400 text-lg">[BEFORE_SUBTITLE]</p>
  </div>

  {/* After box - WITH CYBERPUNK BADGE */}
  <div className="relative">
    {/* Revolutionary method badge - POSITIONED OUTSIDE */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
      <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="relative bg-gradient-to-r from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] px-5 py-2 shadow-2xl shadow-[PRIMARY_COLOR]/50">
          {/* Cyberpunk corner brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/80" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white/80" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white/80" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/80" />
          <span className="text-white font-bold text-xs flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Método Revolucionário
          </span>
        </div>
      </motion.div>
    </div>

    {/* Main card */}
    <div className="bg-gradient-to-br from-[PRIMARY_COLOR_900]/30 to-[SECONDARY_COLOR_900]/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-[PRIMARY_COLOR]/40">
      {/* Header with Depois label */}
      <div className="flex items-center justify-between mb-4 pt-2">
        <div className="w-16 h-16 bg-gradient-to-br from-[PRIMARY_COLOR]/30 to-[SECONDARY_COLOR]/30 rounded-2xl flex items-center justify-center border-2 border-[PRIMARY_COLOR]/50">
          <Rocket className="w-8 h-8 text-[PRIMARY_COLOR]" />
        </div>
        <span className="text-white font-bold text-sm flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          Depois
        </span>
      </div>
      {/* Title and subtitle */}
      <h3 className="text-2xl font-bold text-white mb-2">[AFTER_TITLE]</h3>
      <p className="text-[PRIMARY_COLOR] text-lg font-medium">[AFTER_SUBTITLE]</p>
    </div>
  </div>
</div>
```

#### SECTION 3 - BENEFITS (MUST HAVE 6 BOXES):
```jsx
{/* Title "Aprenda na Prática" with gradient on key word */}
<h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
  Aprenda na <span className="bg-gradient-to-r from-white via-[PRIMARY_COLOR]/80 to-white bg-clip-text text-transparent">Prática</span>
</h2>
<p className="text-xl text-white/60 mb-16 text-center max-w-4xl mx-auto">
  [BENEFIT_DESCRIPTION_LONGER] {/* Should be 2-3 lines of descriptive text */}
</p>

{/* MANDATORY 6 boxes in 3x2 grid with duration badges */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {benefits.map((benefit, i) => (
    <motion.div key={i} whileInView={{ opacity: 1, y: 0 }}>
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[PRIMARY_COLOR]/20 relative">
        {/* Duration and level badges */}
        <div className="absolute top-6 right-6 flex items-center gap-2">
          <span className="text-xs text-[PRIMARY_COLOR] bg-[PRIMARY_COLOR]/10 px-2 py-1 rounded-full">
            {benefit.duration}
          </span>
          <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
            {benefit.level}
          </span>
        </div>
        {/* Icon with gradient wrapper in box */}
        <div className="w-16 h-16 bg-gradient-to-br from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[PRIMARY_COLOR]/30">
          <benefit.icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
        <p className="text-white/60">{benefit.description}</p>
      </div>
    </motion.div>
  ))}
</div>
```

#### SECTION 4 - AGENDA (WITH METALLIC HEADER AND MODULE CARDS):
```jsx
{/* Metallic header style */}
<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
  <span className="bg-gradient-to-r from-white via-[PRIMARY_COLOR]/80 to-white bg-clip-text text-transparent">
    Agenda Completa
  </span>
</h2>
<p className="text-xl text-white/60 text-center mb-16 max-w-4xl mx-auto">
  [AGENDA_DESCRIPTION_LONGER] {/* Should be 2-3 lines describing the complete journey */}
</p>

{/* Timeline with module badges and icons - FOLLOWING TEMPLATE IMAGE */}
<div className="space-y-6 max-w-4xl mx-auto">
  {agenda.map((item, index) => (
    <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[PRIMARY_COLOR]/20 hover:border-[PRIMARY_COLOR]/40 relative">
      <div className="flex items-start gap-6">
        {/* Icon wrapper */}
        <div className="w-14 h-14 bg-gradient-to-br from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-2xl flex items-center justify-center flex-shrink-0">
          <item.icon className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          {/* Module label and duration */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[PRIMARY_COLOR] font-bold text-sm bg-[PRIMARY_COLOR]/10 px-3 py-1 rounded-full">
              {item.time}
            </span>
            <span className="text-white/40">•</span>
            <span className="text-white/60 text-sm">
              {item.module}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{item.topic}</h3>
          <p className="text-white/60">{item.description}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
```

#### SECTION 5 - INSTRUCTOR (WITH BADGE ON CONTENT SIDE):
```jsx
{/* Section title with gradient on key word */}
<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
  Seu <span className="bg-gradient-to-r from-white via-[PRIMARY_COLOR]/80 to-white bg-clip-text text-transparent">Instrutor</span>
</h2>
<p className="text-xl text-white/60 text-center mb-16 max-w-3xl mx-auto">
  [INSTRUCTOR_SECTION_DESCRIPTION]
</p>

{/* Compact layout matching template size */}
<div className="max-w-4xl mx-auto">
  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-[PRIMARY_COLOR]/20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Photo side */}
      <div className="relative">
        <img src={instructor.photo} className="rounded-2xl w-full" />
      </div>
      {/* Content with verified badge */}
      <div className="relative">
        {/* Verified instructor badge - ON CONTENT SIDE */}
        <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/30">
          <CheckCircle className="w-4 h-4" />
          Instrutor Verificado
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{instructor.name}</h3>
        <p className="text-[PRIMARY_COLOR] font-semibold mb-1">{instructor.title}</p>
        <p className="text-white/60 text-sm mb-4">{instructor.company}</p>
        <p className="text-white/60 mb-6 text-sm">{instructor.bio}</p>
        {/* Achievements list */}
      </div>
    </div>
  </div>
</div>
```

#### SECTION 6 - STATISTICS (WITH ICONS AND PROGRESS BARS - FOLLOWING TEMPLATE):
```jsx
{/* Metallic header */}
<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
  Resultados <span className="bg-gradient-to-r from-[PRIMARY_COLOR] via-white to-[PRIMARY_COLOR] bg-clip-text text-transparent">Comprovados</span>
</h2>
<p className="text-xl text-white/60 text-center mb-16 max-w-3xl mx-auto">
  [STATS_DESCRIPTION_LONGER] {/* e.g., "Métricas reais de +500 desenvolvedores após 30 dias usando Claude Code" */}
</p>

{/* 4 stat boxes with icons and progress bars - CRITICAL: Use proper color classes */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
  {stats.map((stat, index) => {
    // Define styles based on stat.color to avoid dynamic class issues
    const getColorStyles = (color) => {
      switch(color) {
        case 'green-500':
          return {
            bg: 'bg-gradient-to-br from-green-500/20 to-emerald-500/10',
            border: 'border-green-500/30',
            icon: 'bg-gradient-to-br from-green-500 to-emerald-500',
            text: 'text-green-500',
            gradient: 'linear-gradient(to right, rgb(34 197 94), rgb(16 185 129))'
          }
        case 'blue-500':
          return {
            bg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
            border: 'border-blue-500/30',
            icon: 'bg-gradient-to-br from-blue-500 to-cyan-500',
            text: 'text-blue-500',
            gradient: 'linear-gradient(to right, rgb(59 130 246), rgb(6 182 212))'
          }
        // Add more color cases as needed
      }
    }
    const styles = getColorStyles(stat.color)

    return (
      <motion.div
        className={`${styles.bg} backdrop-blur-sm rounded-2xl p-6 border ${styles.border} relative`}
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
      >
        {/* Icon at top */}
        <div className={`w-12 h-12 ${styles.icon} rounded-xl flex items-center justify-center mb-4`}>
          <stat.icon className="w-6 h-6 text-white" />
        </div>

        {/* Large number with AnimatedCounter */}
        <div className={`text-5xl font-bold ${styles.text} mb-2`}>
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>

        {/* Label */}
        <div className="text-lg font-semibold text-white mb-1">
          {stat.label}
        </div>

        {/* Sublabel */}
        <div className="text-sm text-white/60 mb-4">
          {stat.description}
        </div>

        {/* Progress bar - use inline style for gradient */}
        <div className="w-full bg-gray-800 rounded-full h-1.5">
          <motion.div
            className="h-1.5 rounded-full"
            style={{ background: styles.gradient }}
            initial={{ width: 0 }}
            whileInView={{ width: stat.progress }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    )
  })}
</div>

{/* Testimonial with gradient border - NO ITALIC */}
<div className="bg-gradient-to-r from-[PRIMARY_COLOR]/20 to-[SECONDARY_COLOR]/20 p-[1px] rounded-2xl">
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8">
    <p className="text-lg text-white/80 mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gradient-to-br from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-full" />
      <div>
        <p className="font-bold text-white">{testimonial.author}</p>
        <p className="text-[PRIMARY_COLOR]">{testimonial.role}</p>
      </div>
    </div>
  </div>
</div>
```

#### SECTION 7 - GUARANTEE (GREEN THEME WITH SPECIAL BADGE - MATCHING TEMPLATE):
```jsx
{/* Section with special badge */}
<div className="relative">
  {/* Limited spots badge */}
  <div className="flex justify-center mb-8">
    <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-2 rounded-full shadow-lg shadow-green-500/30">
      <div className="flex items-center gap-2">
        <Lock className="w-4 h-4 text-white" />
        <span className="text-white font-bold">Vagas Limitadas</span>
      </div>
    </div>
  </div>

  {/* Main guarantee card with shield icon */}
  <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-green-500/30">
    {/* Central shield icon */}
    <div className="flex justify-center mb-8">
      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
        <Shield className="w-10 h-10 text-white" />
      </div>
    </div>

    {/* Title with gradient */}
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
      Sua Vaga está <span className="text-green-500">100% Garantida</span>
    </h2>

    {/* Description */}
    <p className="text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto">
      Este webinário é <span className="text-green-400 font-semibold">completamente gratuito</span>, mas as vagas são limitadas.
      Garantimos que você terá acesso a <span className="text-green-400 font-semibold">[DURATION] de conteúdo transformador</span>
      que vai revolucionar sua forma de desenvolver com IA.
    </p>

    {/* 3 guarantee items */}
    <div className="grid md:grid-cols-3 gap-8">
      {guarantees.map((item, index) => (
        <div key={index} className="text-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
            <item.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
          <p className="text-white/60 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
```

#### SECTION 8 - FINAL CTA (WITH ICONS ON FEATURES):
```jsx
{/* Enhanced header with texture */}
<h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
  <span className="bg-gradient-to-r from-[PRIMARY_COLOR] via-white to-[PRIMARY_COLOR] bg-clip-text text-transparent drop-shadow-2xl">
    [CTA_TITLE]
  </span>
</h2>
<p className="text-xl text-white/70 text-center mb-12 max-w-4xl mx-auto">
  [CTA_DESCRIPTION_LONGER] {/* Should be 2-3 lines encouraging immediate action */}
</p>

{/* Form and features section */}
<div className="max-w-2xl mx-auto">
  {/* Form card */}
  <div className="bg-gradient-to-br from-[PRIMARY_COLOR_900]/40 to-[SECONDARY_COLOR_900]/30 backdrop-blur-sm rounded-3xl p-10 border-2 border-[PRIMARY_COLOR]/40">
    {/* ... form fields ... */}

    {/* 3 features with icons - CRITICAL */}
    <div className="grid md:grid-cols-3 gap-4 text-center mt-8">
      <div className="text-white/60">
        <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
        <div className="font-bold text-white mb-1">100% Gratuito</div>
        <div className="text-sm">Sem pegadinhas ou surpresas</div>
      </div>
      <div className="text-white/60">
        <Trophy className="w-6 h-6 text-[PRIMARY_COLOR] mx-auto mb-2" />
        <div className="font-bold text-white mb-1">Online</div>
        <div className="text-sm">Tire dúvidas em tempo real</div>
      </div>
      <div className="text-white/60">
        <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
        <div className="font-bold text-white mb-1">Material Exclusivo</div>
        <div className="text-sm">[EXCLUSIVE_MATERIAL_TEXT]</div>
      </div>
    </div>
  </div>
</div>
```

### BACKGROUND IMAGE IMPLEMENTATION (NEW REQUIREMENT):

**CRITICAL**: All webinars must include a consistent background image theme throughout the page.

#### BACKGROUND IMAGE SETUP:

1. **Hero Section - Right Column Background**:
```jsx
{/* RIGHT COLUMN */}
<div className="space-y-8 relative">
  {/* Background image positioned behind the content */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: 'url([BACKGROUND_IMAGE_PATH])',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.3,
      filter: 'brightness(0.7) contrast(1.3)',
      maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
      WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
      zIndex: 0
    }}
  />

  {/* Color overlay for better blending */}
  <div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(ellipse at center, [PRIMARY_COLOR_RGBA_20] 0%, [SECONDARY_COLOR_RGBA_10] 50%, transparent 80%)',
      zIndex: 1,
      pointerEvents: 'none'
    }}
  />

  {/* What You'll Learn card - ADD relative and zIndex */}
  <motion.div
    className="bg-gradient-to-br from-[PRIMARY_COLOR]/10 to-[SECONDARY_COLOR]/10 backdrop-blur-sm rounded-2xl p-8 border border-[PRIMARY_COLOR]/20 relative"
    style={{ zIndex: 2 }}
  >

  {/* Registration form card - ADD zIndex */}
  <motion.div
    className="relative bg-gradient-to-br from-[PRIMARY_COLOR_900]/30 to-[SECONDARY_COLOR_900]/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-[PRIMARY_COLOR]/30"
    style={{ zIndex: 2 }}
  >
</div>
```

2. **Instructor Section - Complete Background Implementation**:
```jsx
<div className="max-w-4xl mx-auto">
  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-[PRIMARY_COLOR]/20 relative overflow-hidden">
    {/* Background image layer */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'url([BACKGROUND_IMAGE_PATH])',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        filter: 'brightness(0.6) contrast(1.2)',
        zIndex: 0
      }}
    />

    {/* Color overlay for blending */}
    <div
      className="absolute inset-0"
      style={{
        background: 'linear-gradient(135deg, [PRIMARY_COLOR_RGBA_40] 0%, [SECONDARY_COLOR_RGBA_20] 50%, [PRIMARY_COLOR_RGBA_30] 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />

    <div className="grid md:grid-cols-2 gap-12 items-center relative" style={{ zIndex: 2 }}>
      {/* Photo side with cyberpunk enhancements */}
      <div className="relative">
        {/* Animated glow behind photo */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[PRIMARY_COLOR] to-[SECONDARY_COLOR] rounded-2xl opacity-30 blur-xl animate-pulse" />

        {/* Main photo with effects - USE SAME BACKGROUND IMAGE AS INSTRUCTOR PHOTO */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="[BACKGROUND_IMAGE_PATH]"
            alt={webinar.instructor.name}
            className="w-full relative z-1"
            style={{
              filter: 'contrast(1.1) saturate(0.9)',
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          />

          {/* Color gradient overlay for cyberpunk effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[PRIMARY_COLOR_900]/40 via-transparent to-[SECONDARY_COLOR_900]/20 mix-blend-multiply" />
        </div>

        {/* Corner accent decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[PRIMARY_COLOR] rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[PRIMARY_COLOR] rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[PRIMARY_COLOR] rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[PRIMARY_COLOR] rounded-br-2xl" />

        {/* Tech badge overlay */}
        <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[PRIMARY_COLOR]/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[PRIMARY_COLOR] rounded-full animate-pulse" />
            <span className="text-xs text-[PRIMARY_COLOR_400] font-mono">LIVE SYSTEM</span>
          </div>
        </div>
      </div>

      {/* Content side remains the same */}
    </div>
  </div>
</div>
```

3. **Testimonial Section - Subtle Background**:
```jsx
{/* Testimonial with background image */}
<div className="bg-gradient-to-r from-[PRIMARY_COLOR]/20 to-[SECONDARY_COLOR]/20 p-[1px] rounded-2xl max-w-3xl mx-auto">
  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
    {/* Background image for testimonial */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'url([BACKGROUND_IMAGE_PATH])',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.08,
        filter: 'brightness(0.5) contrast(1.1)',
        zIndex: 0
      }}
    />
    <div className="relative" style={{ zIndex: 1 }}>
      <p className="text-lg text-white/80 mb-6">"{testimonial.quote}"</p>
      {/* Rest of testimonial content */}
    </div>
  </div>
</div>
```

### COLOR REPLACEMENT MAPPING:

**Critical color replacements:**
- `orange-500` → `[PRIMARY_COLOR]`
- `amber-500` → `[SECONDARY_COLOR]`
- `orange-400` → `[PRIMARY_COLOR_400]`
- `amber-400` → `[SECONDARY_COLOR_400]`
- `orange-300` → `[PRIMARY_COLOR_300]`
- `orange-900/20` → `[PRIMARY_COLOR_900]/20`
- `#2a1a0f` → `[METALLIC_HEX_1]`
- `#1a0f0f` → `[METALLIC_HEX_2]`

### MANDATORY TECHNICAL REQUIREMENTS:

1. **EXACT IMPORTS** (must include all):
```jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, Users, CheckCircle, Linkedin, Instagram,
  ArrowLeft, ArrowRight, Zap, Target, BookOpen, Brain, Sparkles,
  Code2, Rocket, Shield, TrendingUp, Award, Bot,
  Cpu, GitBranch, Terminal, Layers, Database,
  MessageSquare, ChevronDown, ChevronRight, Lock, Trophy,
  Timer, Heart, AlertCircle, Lightbulb, X, Check, Video, Phone, Mail, User,
  Gauge, Code, Bug
} from 'lucide-react'
import Header from '../../components/shared/Header'
```

2. **STATE MANAGEMENT** (exact pattern):
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  company: ''
})
const [isModalOpen, setIsModalOpen] = useState(false)
const [showSuccess, setShowSuccess] = useState(false)
const [attendeeCount, setAttendeeCount] = useState([INITIAL_COUNT])
```

3. **COMPONENT STRUCTURE**:
   - AnimatedCounter component (inline)
   - All form handling logic
   - Countdown timer logic
   - Modal system
   - Success messages

### EXECUTION CHECKLIST:

✅ Fixed 3-layer background system
✅ 2-column hero layout (not centered)
✅ Online status with animated green dot
✅ Attendee counter with Users icon
✅ Metallic shine effect on title
✅ 3 key feature boxes with gradient icons
✅ "What You'll Learn" card in right column with background image
✅ Registration form below learn card with proper z-index
✅ Background image in hero right column (30% opacity)
✅ Background image in instructor section (15% opacity)
✅ Instructor photo replaced with background image
✅ Cyberpunk effects on instructor photo (glow, corners, badge)
✅ Background image in testimonial (8% opacity)
✅ All subsequent sections with bg-transparent
✅ Proper color theme replacement with RGBA overlays
✅ All animations and interactions
✅ Back button with proper styling

### FILE OUTPUT REQUIREMENTS:
- Component name: [COMPONENT_NAME]
- File path: `/src/webinars/[FOLDER_NAME]/[COMPONENT_NAME].jsx`
- Route configuration for App.jsx
- All imports and dependencies
- Complete functionality

---

**This enhanced prompt ensures 100% visual accuracy with the original template while adapting the content and colors to your specific webinar theme.**