# AI Data Engineering Brasil - Website Generation Prompt Template

## Core Identity
Create a modern, dark-themed website for "AI Data Engineering Brasil" - a community platform focused on the convergence of Data Engineering and Generative AI. The site should feel premium, technical, and futuristic while maintaining Brazilian cultural warmth.

## Typography System
**Primary Font:** Oswald (400, 500, 600, 700 weights)
- Headlines: Oswald 700, letter-spacing: -0.02em
- Section titles: Oswald 700, line-height: 1.1
- Subtitles: Oswald 600, line-height: 1.3
- Body text: Oswald 400, line-height: 1.6, letter-spacing: -0.005em

**Font Hierarchy:**
- h1-h6: Oswald, font-weight: 700
- .section-title: Oswald 700
- .section-subtitle: Oswald 600
- .section-description: Oswald 400

## Color Palette
**Base Colors:**
- Background: #030303 (near-black)
- Text Primary: white/90
- Text Secondary: white/70
- Text Muted: white/60

**Gradient Systems:**
- Green/Emerald: from-green-500 to-emerald-600 (primary CTA)
- Cyan/Blue: from-cyan-200 to-blue-300 (accents)
- Purple/Pink: from-purple-400 to-pink-500 (highlights)
- Orange/Red: from-orange-600 to-red-600 (statistics)
- Gray/Slate: from-gray-600 to-gray-800 (secondary elements)

**Special Effects:**
- Text gradients with animated background-position
- Neon glows: text-shadow with rgba values
- Glass morphism: backdrop-blur-sm with white/[0.08] borders

## Visual Effects & Animations

### Floating Shapes
- Absolute positioned geometric shapes
- Gradient backgrounds with blur-xl and opacity-20
- Animations: y-axis movement [-20, 0, 20], rotation [-5, 0, 5]
- Duration: 8s, infinite loop, easeInOut

### Text Animations
- Initial state: opacity: 0, y: 50, filter: blur(10px)
- Animated state: opacity: 1, y: 0, filter: blur(0px)
- Staggered delays for sequential reveals
- Cycling text component for dynamic keywords

### Hover Effects
- Scale: 1.05 on hover
- Shadow expansion: shadow-lg to shadow-xl
- Border opacity transitions
- Gradient intensity changes

### Motion Patterns
- Framer Motion for all animations
- AnimatePresence for enter/exit transitions
- WhileInView for scroll-triggered animations
- Continuous rotations for orb elements (20s linear infinite)

## Component Structure

### Navigation
- Fixed header with glass morphism effect
- Logo with text on left
- Center navigation items
- Right-side CTA button
- Mobile hamburger menu

### Hero Section
- Large animated headline with cycling keywords
- Subtitle with gradient text
- CTA buttons with gradient backgrounds
- Floating geometric shapes in background
- Community statistics counter

### Feature Cards
- Grid layout (md:grid-cols-2 lg:grid-cols-3)
- Glass morphism cards with gradient borders
- Icon + title + description structure
- Hover state with border glow
- Staggered animation on scroll

### Chat/Discord Preview
- Dark themed chat interface mockup
- User/Bot avatar system
- Message bubbles with timestamps
- Gradient badges for user types
- Animated typing indicators

### Interactive Demos
- Crystal ball/orb effects for AI elements
- Nested gradient layers for depth
- Pulsing opacity animations
- Inner glow effects with box-shadow
- Circular AI core icons

### Statistics Section
- Large numerical displays
- Animated counters
- Source citations
- Orange/red gradient theme
- Grid layout with hover effects

## Page Structure

### Sections Order:
1. **Hero** - Dynamic headline with community focus
2. **Features** - What the community offers
3. **Ask Gen** - AI assistant showcase
4. **Onyx** - Proactive AI system
5. **Numbers** - Market statistics
6. **Benefits** - Target audience benefits
7. **Footer** - Contact and social links

### Responsive Breakpoints:
- Mobile: Default
- md: 768px+ (tablet)
- lg: 1024px+ (desktop)
- xl: 1280px+ (large desktop)

## Technical Implementation

### Framework Requirements:
- React with Vite
- Tailwind CSS with custom theme
- Framer Motion for animations
- Radix UI for accessible components
- Lucide React for icons

### Performance Optimizations:
- Lazy loading for images
- Code splitting for routes
- Optimized animation frame rates
- Reduced motion preferences support

### Accessibility:
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Screen reader friendly content

## Content Tone
- Professional but approachable
- Technical expertise with clarity
- Brazilian Portuguese with tech English terms
- Emphasis on community and growth
- Forward-thinking and innovative

## Special Features

### AI Avatar System:
- Gradient orbs with inner glows
- Animated rotation effects
- Status badges (BOT/USER/PROATIVO)
- Crystal ball aesthetic

### Cycling Text Display:
- Array of technical terms
- 2s interval changes
- Smooth opacity transitions
- Maintains layout stability

### Glass Morphism Cards:
- Semi-transparent backgrounds
- Backdrop blur effects
- Subtle borders with opacity
- Layered gradient overlays

### Neon Text Effects:
- Multiple text-shadow layers
- Drop-shadow filters
- WebKit text stroke for emphasis
- Animated gradient positions

## Call-to-Action Buttons
- Primary: Green to emerald gradient
- Secondary: Gray gradient variants
- Hover: Scale transform + shadow expansion
- Active: Slight scale reduction
- Icon integration with motion

## Footer Design
- Multi-column layout
- Social media links
- Newsletter signup
- Copyright information
- Gradient accent lines

This template captures the essence of a modern AI/Data Engineering community website with Brazilian flair, combining technical sophistication with engaging visual effects and smooth user experience.