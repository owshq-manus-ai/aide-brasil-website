# 🎨 Engenharia de Dados Academy - Design System Core

Welcome to the core design system documentation for Engenharia de Dados Academy. This comprehensive guide captures all visual patterns, components, and effects used across our digital products.

## 📚 Documentation Structure

### [1. Design System](./DESIGN_SYSTEM.md)
Complete visual language specification including:
- Color system with oklch() values
- Typography scale and font stack
- Spacing and grid system
- Animation library
- Responsive breakpoints
- Utility classes

### [2. Component Patterns](./COMPONENT_PATTERNS.md)
React component architecture and patterns:
- Base component structures
- Performance optimization patterns
- State management approaches
- Mobile optimization techniques
- Testing strategies

### [3. Visual Effects Guide](./VISUAL_EFFECTS_GUIDE.md)
Detailed implementation of signature effects:
- Metallic gradient text
- Glass morphism cards
- Neon glow buttons
- Circuit board backgrounds
- Particle systems
- Crystal ball avatars

### [4. Prompt Templates](./PROMPT_TEMPLATES.md)
Ready-to-use prompts for generating new designs:
- Master landing page prompt
- Component-specific templates
- Mobile adaptation guidelines
- Quick start commands

---

## 🚀 Quick Start

### Installation

```bash
# Install required dependencies
npm install react framer-motion lucide-react tailwindcss @fontsource/oswald tw-animate-css
```

### Basic Setup

```jsx
// Import core styles in your main CSS file
import './App.css'

// Import Oswald font
import '@fontsource/oswald/400.css'
import '@fontsource/oswald/700.css'

// Setup Tailwind and animations
import "tailwindcss"
import "tw-animate-css"
```

### Example Component

```jsx
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const FeatureCard = ({ title, description }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
      <Zap className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
)
```

---

## 🎯 Design Principles

1. **Futuristic Minimalism** - Clean, sophisticated dark interfaces
2. **Performance First** - Optimized animations and conditional rendering
3. **Mobile Adaptive** - Graceful degradation for mobile devices
4. **Accessibility** - WCAG compliant with reduced motion support

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|--------|
| Deep Black | #030303 | Primary background |
| Electric Blue | #2563eb | Primary accent, CTAs |
| Light Blue | #60a5fa | Gradients, highlights |
| Silver | #9ca3af | Secondary text, borders |
| Purple | #8b5cf6 | Accent, special effects |

---

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large screens */
2xl: 1536px /* Extra large */
```

---

## 🛠 Development Workflow

### 1. Review Design System
Start by reviewing the [Design System](./DESIGN_SYSTEM.md) for foundational elements.

### 2. Choose Component Pattern
Select appropriate patterns from [Component Patterns](./COMPONENT_PATTERNS.md).

### 3. Implement Visual Effects
Add effects from the [Visual Effects Guide](./VISUAL_EFFECTS_GUIDE.md).

### 4. Test Responsiveness
Ensure mobile optimization following the mobile-first approach.

### 5. Verify Accessibility
Check contrast ratios and implement reduced motion support.

---

## 💡 Pro Tips

### Performance
- Use CSS transforms over position changes
- Implement lazy loading for heavy components
- Apply `will-change` sparingly
- Profile with Chrome DevTools

### Animations
- Keep animations under 60fps target
- Use GPU-accelerated properties
- Disable complex animations on mobile
- Respect prefers-reduced-motion

### Accessibility
- Maintain 4.5:1 contrast ratio minimum
- Provide focus indicators
- Include ARIA labels
- Test with screen readers

---

## 🔗 Quick Links

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)
- [OKLCH Color Space](https://oklch.com/)

---

## 📝 Usage with AI Tools

When using these documents with AI tools like Claude or ChatGPT:

1. **For new landing pages**: Use the master prompt from [PROMPT_TEMPLATES.md](./PROMPT_TEMPLATES.md)
2. **For specific components**: Reference the relevant section in [COMPONENT_PATTERNS.md](./COMPONENT_PATTERNS.md)
3. **For visual effects**: Copy the implementation from [VISUAL_EFFECTS_GUIDE.md](./VISUAL_EFFECTS_GUIDE.md)

### Example Prompt

```
Using the Engenharia de Dados Academy design system, create a hero section with:
- Black background (#030303)
- Metallic gradient text effect for the headline "Transform Your Data"
- Floating geometric shapes
- Glass morphism CTA button with neon blue glow
- Circuit board pattern in background
Follow the specifications in DESIGN_SYSTEM.md for exact colors and animations.
```

---

## 🚧 Maintenance

This design system should be updated when:
- New components are created
- Visual effects are refined
- Performance optimizations are discovered
- Accessibility improvements are implemented

Last Updated: January 2025

---

## 📧 Contact

For questions or suggestions about the design system, please contact the development team.

---

*Built with precision for the future of data engineering education* 🚀