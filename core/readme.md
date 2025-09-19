# 🎨 AI Data Engineering Brasil - Design System Core

Welcome to the core design system documentation for AI Data Engineering Brasil (AIDE Brasil). This comprehensive guide captures all visual patterns, components, and architectural decisions used across our platform.

## 📁 Current Project Structure

```
aide-brasil-website/
├── src/
│   ├── features/           # Feature-based modules
│   │   ├── webinars/      # Webinar pages & components
│   │   ├── bootcamps/     # Bootcamp pages & components
│   │   ├── workshops/     # Workshop pages (future)
│   │   └── dataship/      # Dataship pages (future)
│   ├── components/        # Shared components
│   │   ├── ui/           # Radix-based UI components
│   │   └── shared/       # Common components (Header, etc)
│   ├── styles/           # Global styles
│   ├── pages/            # Top-level pages
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── config/           # Configuration files
├── public/
│   └── images/           # Static assets
│       ├── backgrounds/  # Background images
│       ├── logos/        # Logo files
│       └── team/         # Team photos
└── core/                 # Design system documentation
```

## 📚 Documentation Structure

### [0. Project Structure](./project_structure.md)
Detailed breakdown of the current repository organization:
- Complete file tree with explanations
- Architecture patterns and conventions
- Import patterns and route structure
- Recent changes and future plans

### [1. Design System](./design_system.md)
Complete visual language specification including:
- Color system with modern gradients
- Typography scale (Oswald font family)
- Spacing and grid system
- Animation library (Framer Motion)
- Responsive breakpoints
- Utility classes

### [2. Component Patterns](./component_patterns.md)
React component architecture and patterns:
- Feature-based module structure
- Performance optimization patterns
- State management approaches
- Mobile optimization techniques
- Radix UI integration

### [3. Visual Effects Guide](./visual_effects_guide.md)
Detailed implementation of signature effects:
- Metallic gradient text (purple & orange themes)
- Glass morphism cards
- Neon glow buttons
- Circuit board backgrounds
- Particle systems
- 3D visual effects

### [4. Prompt Templates](./prompt_template.md)
Ready-to-use prompts for generating new features:
- Landing page templates
- Webinar page structures
- Bootcamp layouts
- Component generation

---

## 🚀 Tech Stack

### Core Technologies
- **React 19.1.0** - UI Framework
- **Vite 6.3.5** - Build tool
- **React Router 7.9.1** - Routing
- **Tailwind CSS 4.1.7** - Utility-first CSS
- **Framer Motion 12.15.0** - Animations

### UI Libraries
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Recharts** - Data visualization

### Development
- **pnpm** - Package manager
- **ESLint** - Code quality
- **Vercel** - Deployment platform

---

## 🎨 Design Principles

1. **Feature-First Architecture** - Organized by features (webinars, bootcamps, etc.)
2. **Performance Optimized** - Lazy loading, code splitting, image optimization
3. **Mobile Responsive** - Mobile-first approach with graceful degradation
4. **Accessibility** - WCAG compliant with Radix UI components
5. **Dark Theme** - Deep black (#030303) background with vibrant accents

---

## 🎯 Current Features

### Active Pages
- **Homepage** (`/`) - Main landing page
- **Webinars** (`/webinars`) - Webinar listing
  - Claude Code Webinar
  - Autonomous Agents Webinar
- **Bootcamp** (`/bootcamp/ai-data-engineer`) - AI Data Engineering Bootcamp

### Planned Features
- **Workshops** - Technical workshop pages
- **Dataship** - Data fellowship program
- **Community** - Community hub features

---

## 💻 Development Workflow

### 1. Feature Development
```bash
# Create new feature module
src/features/[feature-name]/
├── pages/          # Feature pages
├── components/     # Feature-specific components
├── hooks/          # Custom hooks
├── utils/          # Utilities
├── data/           # Static data
└── index.js        # Public exports
```

### 2. Component Creation
```jsx
// Use Radix UI components from src/components/ui/
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

// Apply consistent styling
const MyComponent = () => (
  <Card className="bg-white/5 backdrop-blur-md border-white/10">
    <Button className="bg-gradient-to-r from-purple-500 to-violet-500">
      Click Me
    </Button>
  </Card>
)
```

### 3. Image Organization
```
public/images/
├── backgrounds/    # Background images for heroes
├── logos/         # Brand logos
└── team/          # Team member photos
```

---

## 🎨 Color System

### Primary Colors
| Color | Hex | Usage |
|-------|-----|--------|
| Deep Black | #0a0a0a / #030303 | Backgrounds |
| Purple | #a855f7 / #8b5cf6 | Primary accent (webinars) |
| Violet | #8b5cf6 / #7c3aed | Gradients |
| Orange | #f97316 / #fb923c | Secondary accent (Claude) |
| Blue | #2563eb / #60a5fa | CTAs, links |

### Gradient Patterns
```css
/* Purple Metallic (Webinars) */
background: linear-gradient(90deg, #a855f7, #c084fc, #e9d5ff, #c084fc, #a855f7);

/* Orange Metallic (Claude Code) */
background: linear-gradient(90deg, #f97316, #fb923c, #fed7aa, #fb923c, #f97316);
```

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

## 🔧 Environment Configuration

### n8n Integration
The project uses n8n webhooks for form handling:
- Configured via `.env.local`
- Setup script: `npm run setup`
- Webhook endpoints in `src/config/webhooks.js`

### Deployment
- **Production**: Vercel (auto-deploy from main branch)
- **Domain**: aide-brasil-website.vercel.app

---

## 📊 Performance Optimizations

### Current Optimizations
- Lazy loading for all page components
- Image optimization with WebP format
- Code splitting by feature
- CSS purging in production
- Aggressive minification with Terser

### Build Configuration
- Vite with manual chunks for optimal caching
- Target: ES2020 for modern browsers
- CSS code splitting enabled
- Source maps disabled in production

---

## 🚧 Known Issues & TODOs

### To Organize
- Consolidate multiple CSS files in `src/styles/`
- Move `accessibility-fixes.css` from utils to styles
- Create data files for webinar/bootcamp content

### Future Improvements
- Implement workshops feature module
- Add dataship program pages
- Create shared webinar components
- Build community features

---

## 📝 Quick Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Setup
npm run setup           # Configure environment
npm run setup:vercel    # Setup Vercel env vars

# Quality
npm run lint            # Run ESLint
```

---

## 🔗 Resources

- [Project Repository](https://github.com/owshq-manus-ai/aide-brasil-website)
- [Live Site](https://aide-brasil-website.vercel.app)
- [Radix UI Docs](https://www.radix-ui.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion API](https://www.framer.com/motion/)

---

## 📅 Maintenance Log

- **2025-09-18**: Reorganized to feature-based architecture
- **2025-09-18**: Cleaned up unused debug files
- **2025-09-18**: Organized images into categorized folders
- **2025-09-18**: Removed old `/webinarios` routes

---

*Built with precision for the future of AI & Data Engineering education in Brazil* 🚀