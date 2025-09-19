# 🚀 Design Prompt Templates

## Master Prompt for New Landing Pages

```markdown
Create a futuristic, AI-driven landing page with the following specifications:

## Visual Foundation
- **Background**: Pure black (#030303) with subtle geometric patterns
- **Primary Colors**: Metallic blue gradients (from #1a1a1a through #2563eb to #60a5fa)
- **Secondary Colors**: Silver/gray metallic tones (#374151, #9ca3af, #e5e7eb)
- **Typography**: Oswald font family for all text
- **Color Space**: Use oklch() for all color definitions

## Layout Structure
1. **Hero Section**:
   - Full viewport height
   - Animated gradient background with floating geometric shapes
   - Large headline (8rem/128px) with metallic gradient text effect
   - Subheadline with subtle glow effect
   - Primary CTA button with neon blue glow on hover

2. **Background Effects**:
   - Circuit board pattern overlay (50px grid, 0.1 opacity)
   - 3-4 floating gradient orbs with blur effect (blur-3xl)
   - Particle system with pulsing dots
   - All animations GPU-accelerated

3. **Content Sections**:
   - Glass morphism cards with backdrop blur
   - Section spacing: 80px (py-20) on desktop, 48px (py-12) on mobile
   - Max container width: 1280px (max-w-7xl)
   - Consistent padding: 24px (px-6) on mobile, 32px (px-8) on desktop

## Animation System
- **Scroll Animations**: Fade in with 20px Y-axis movement
- **Hover Effects**: Scale 1.05 with glow intensification
- **Floating Elements**: 3-6 second subtle float animation
- **Background Gradients**: Continuous gradient flow animation
- **Mobile**: Disable complex animations, keep only essential transitions

## Interactive Elements
- **Buttons**: Gradient background with box-shadow glow effect
- **Cards**: Glass effect with white/5% background and 1px white/10% border
- **Icons**: Lucide React icons, 24px default size, with color transitions on hover
- **Links**: Subtle underline on hover with color transition

## Performance Requirements
- Lazy load all images and heavy components
- Use CSS transforms instead of position changes
- Implement will-change only on actively animating elements
- Conditional rendering for mobile devices
- Maximum blur strength: 10px on mobile, 64px on desktop

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text
- Include prefers-reduced-motion media queries
- Proper focus states with visible outlines
- Semantic HTML structure throughout
```

---

## Component-Specific Prompts

### Hero Section

```markdown
Design a hero section with:
- Height: 100vh with min-height of 800px
- Background: Radial gradient from transparent to black at edges
- Title: 8rem font size, Oswald bold, with animated gradient text
- Subtitle: 1.5rem, light gray (#9ca3af), max-width 800px
- CTA Button:
  - Padding: 16px 32px
  - Background: Linear gradient (#2563eb to #60a5fa)
  - Hover: TranslateY(-2px) with intensified glow
  - Text: White, uppercase, letter-spacing 0.05em
- Include 3 floating shapes with different animation delays
- Add particle effect overlay with 30-50 animated dots
```

### Feature Card

```markdown
Create a feature card component with:
- Background: rgba(255, 255, 255, 0.05)
- Backdrop-filter: blur(10px)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border-radius: 16px (rounded-xl)
- Padding: 32px
- Icon container:
  - 64px × 64px
  - Gradient background
  - Rounded-full
  - Subtle pulse animation
- Title: 24px, font-bold, white
- Description: 16px, text-gray-400, line-height 1.6
- Hover effect: Transform scale(1.02) with border glow
```

### Navigation Bar

```markdown
Design a navigation bar with:
- Position: Fixed top, z-index 50
- Background: Blur effect with black/80% background
- Height: 80px desktop, 64px mobile
- Logo: 40px height with glow effect
- Menu items:
  - Font: Oswald medium, 14px, uppercase
  - Color: Gray-400, white on hover
  - Transition: 300ms ease
  - Active indicator: 2px bottom border with blue gradient
- Mobile menu: Full-screen overlay with fade-in animation
```

---

## Webinar Page Template

```markdown
Create a webinar landing page featuring:

## Hero Section
- Dynamic animated background with flowing data streams
- Countdown timer with neon glow effect
- Speaker avatars with crystal ball hover effects
- Registration form with glass morphism design

## Content Structure
- Event details in gradient-bordered cards
- Schedule timeline with animated connectors
- Speaker bios with floating animation on hover
- Tech stack badges with metallic finish

## Visual Effects
- SVG circuit patterns animating in background
- Rotating geometric shapes (20s rotation)
- Pulsing node connectors between sections
- Shimmer effects on CTAs

## Color Scheme
- Primary: Electric blue (#2563eb)
- Accent: Cyan (#06b6d4)
- Highlights: Purple (#9333ea)
- Text: White with varying opacity levels
```

---

## Product Showcase Template

```markdown
Design a product showcase section:

## Layout
- 3-column grid on desktop, single column mobile
- Gap: 32px between items
- Each product in glass morphism card

## Product Card Structure
- Image container: 16:9 aspect ratio with overflow hidden
- Image hover: Scale(1.1) with 500ms transition
- Badge: Absolute positioned, gradient background
- Title: 20px, font-bold
- Price: 24px with metallic gradient text
- CTA: Full-width gradient button at bottom

## Animations
- Stagger animation on scroll (100ms delay between cards)
- Hover: Lift effect with shadow intensification
- Loading: Skeleton pulse animation
```

---

## Mobile-First Considerations

```markdown
When adapting for mobile:

## Performance
- Disable: Float animations, parallax effects, complex filters
- Reduce: Blur strength to max 10px, shadow complexity
- Replace: Fixed backgrounds with scroll, video with static images

## Layout Adjustments
- Font sizes: Reduce by 20-30%
- Spacing: Reduce padding by 40%
- Columns: Convert to single column below 768px
- Navigation: Hamburger menu with slide-in drawer

## Touch Optimizations
- Minimum touch target: 44×44px
- Increased padding on interactive elements
- Swipe gestures for carousels
- Larger click areas around small icons
```

---

## Animation Specifications

```markdown
Standard animation parameters:

## Timing Functions
- Default: ease-out
- Hover transitions: 300ms
- Page transitions: 600ms
- Background animations: 20-30s
- Micro-interactions: 200ms

## Transform Animations
float: translateY(-10px) over 3s infinite
pulse: scale(1.05) opacity(0.8) over 2s infinite
rotate: rotate(360deg) over 20s linear infinite
shimmer: backgroundPosition -200% to 200% over 3s infinite

## Scroll Triggers
- Trigger point: 75% viewport height
- Fade in: opacity 0→1, translateY 20px→0
- Scale in: scale 0.9→1 with opacity
- Slide in: translateX ±100px→0
```

---

## Accessibility Checklist

```markdown
Ensure all designs include:

✅ Color contrast ratio ≥ 4.5:1
✅ Focus indicators on all interactive elements
✅ Proper heading hierarchy (h1→h6)
✅ Alt text for all images
✅ ARIA labels for icon buttons
✅ Keyboard navigation support
✅ Screen reader announcements
✅ Reduced motion alternatives
✅ Touch targets ≥ 44×44px
✅ Error states with clear messaging
```

---

## Quick Start Commands

### Generate Hero Section
```
"Create a hero section with black background, blue metallic gradient text saying '[YOUR TITLE]', floating geometric shapes, and a glowing CTA button"
```

### Generate Feature Grid
```
"Design a 3-column feature grid with glass morphism cards, Lucide icons, and hover animations, showcasing [YOUR FEATURES]"
```

### Generate CTA Section
```
"Build a call-to-action section with gradient background, centered content, large headline, and dual buttons with glow effects"
```

### Generate Footer
```
"Create a footer with 4-column layout, social icons with hover glow, newsletter signup with glass effect, and gradient border top"
```

---

## CSS Framework Setup

```css
/* Add to your global CSS */
@import "tailwindcss";
@import "tw-animate-css";
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');

:root {
  --bg-primary: #030303;
  --gradient-blue: linear-gradient(135deg, #1a1a1a, #2563eb, #60a5fa);
  --gradient-silver: linear-gradient(135deg, #374151, #9ca3af, #e5e7eb);
}

/* Critical performance optimizations */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
}
```

---

## Component Library Integration

```javascript
// Required dependencies
npm install react framer-motion lucide-react tailwindcss @fontsource/oswald

// Component structure
import { motion } from 'framer-motion'
import { Bot, Zap, Users } from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}
```