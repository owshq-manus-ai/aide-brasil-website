# 📁 Project Structure Documentation

## Current Repository Organization (2025-09-18)

```
aide-brasil-website/
│
├── 📂 src/                      # Source code
│   ├── 📂 features/             # Feature-based modules
│   │   ├── 📂 webinars/
│   │   │   ├── pages/          # Webinar page components
│   │   │   │   ├── WebinarsListPage.jsx
│   │   │   │   ├── ClaudeCodeWebinar.jsx
│   │   │   │   └── AutonomousAgentsWebinar.jsx
│   │   │   ├── components/     # (future webinar components)
│   │   │   ├── hooks/          # (future webinar hooks)
│   │   │   ├── utils/          # (future webinar utilities)
│   │   │   ├── data/           # (future webinar data)
│   │   │   └── index.js        # Public exports
│   │   │
│   │   ├── 📂 bootcamps/
│   │   │   ├── pages/
│   │   │   │   └── AIDataEngineerBootcamp.jsx
│   │   │   ├── components/
│   │   │   │   ├── AIDataEngineerHero.jsx
│   │   │   │   └── VideoSection.jsx
│   │   │   └── index.js
│   │   │
│   │   ├── 📂 workshops/        # (future feature)
│   │   └── 📂 dataship/         # (future feature)
│   │
│   ├── 📂 components/           # Shared components
│   │   ├── ui/                 # Radix UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dialog.jsx
│   │   │   └── ... (30+ components)
│   │   ├── shared/
│   │   │   ├── Header.jsx
│   │   │   └── OptimizedBackground.jsx
│   │   ├── MobileOrb.jsx
│   │   └── WebinarAnimations.jsx
│   │
│   ├── 📂 pages/               # Top-level pages
│   │   ├── HomePage.jsx
│   │   └── WebhookTestPage.jsx
│   │
│   ├── 📂 styles/              # Global styles
│   │   ├── anti-flicker.css
│   │   ├── desktop-fixes.css
│   │   ├── mobile-enhancements.css
│   │   ├── mobile-optimizations.css
│   │   ├── mobile-scroll-fix.css
│   │   ├── mobile-specific-fixes.css
│   │   └── performance-fixes.css
│   │
│   ├── 📂 hooks/               # Custom React hooks
│   │   ├── use-mobile.js
│   │   ├── useMobileOptimizations.js
│   │   └── useWebhook.js
│   │
│   ├── 📂 utils/               # Utility functions
│   │   ├── accessibility-fixes.css  # (should move to styles)
│   │   ├── accessibility-patch.js
│   │   ├── mobile-performance.js
│   │   ├── motionConfig.js
│   │   ├── performance.js
│   │   └── validation.js
│   │
│   ├── 📂 config/              # Configuration
│   │   ├── webhook-endpoints.js
│   │   └── webhooks.js
│   │
│   ├── 📂 lib/                 # Library utilities
│   │   └── utils.js
│   │
│   ├── 📂 assets/              # Bundled assets
│   │   └── react.svg
│   │
│   ├── 📄 main.jsx             # React entry point
│   ├── 📄 App.jsx              # Main app component
│   ├── 📄 App.css              # App styles
│   └── 📄 index.css            # Global styles
│
├── 📂 public/                   # Static assets
│   ├── 📂 images/
│   │   ├── backgrounds/        # Hero backgrounds
│   │   │   ├── background-ai-de-bootcamp.png
│   │   │   ├── background-domine-autonomous-agents-2.png
│   │   │   └── background-domine-autonomous-agents.png
│   │   ├── logos/              # Brand logos
│   │   │   ├── ai-de-bootcamp-logo.png
│   │   │   ├── logo-aide-brasil-icon.png
│   │   │   └── logo-aide-brasil.png
│   │   └── team/               # Team photos
│   │       ├── caricatura_luan.jpeg
│   │       └── luan-moreno-[1-4].png
│   ├── 📂 optimized/           # Optimized images
│   ├── 📄 favicon.ico
│   ├── 📄 manifest.json        # PWA manifest
│   ├── 📄 robots.txt
│   └── 📄 sw.js                # Service worker
│
├── 📂 core/                     # Design system docs
│   ├── readme.md               # Main documentation
│   ├── project_structure.md    # This file
│   ├── design_system.md        # Design specifications
│   ├── component_patterns.md   # Component patterns
│   ├── visual_effects_guide.md # Visual effects
│   └── prompt_template.md      # AI prompts
│
├── 📂 scripts/                  # Build scripts
│   └── setup-env.js            # Environment setup
│
├── 📂 _unused_components/       # Archived components
│   ├── debug-files/            # Old debug files
│   ├── WebinarHub.jsx          # Old webinar hub
│   └── WebinarTemplate.jsx     # Old template
│
├── 📄 package.json             # Dependencies
├── 📄 vite.config.js           # Vite configuration
├── 📄 eslint.config.js         # ESLint rules
├── 📄 vercel.json              # Vercel config
└── 📄 index.html               # HTML entry

```

## 🔑 Key Directories Explained

### `/src/features/`
Feature-based architecture where each feature (webinars, bootcamps, etc.) is self-contained with its own:
- **pages/**: Feature-specific page components
- **components/**: Reusable components for that feature
- **hooks/**: Custom hooks
- **utils/**: Utility functions
- **data/**: Static data or configurations
- **index.js**: Public API exports

### `/src/components/`
Shared components used across features:
- **ui/**: Radix UI primitive components (buttons, cards, dialogs, etc.)
- **shared/**: Common components like Header
- Individual shared components

### `/public/images/`
Organized static assets:
- **backgrounds/**: Hero section backgrounds
- **logos/**: Brand and company logos
- **team/**: Team member photos

## 🏗️ Architecture Patterns

### Feature Module Pattern
```
src/features/[feature-name]/
├── pages/           # Route components
├── components/      # Feature components
├── hooks/          # Feature hooks
├── utils/          # Feature utilities
├── data/           # Feature data
└── index.js        # Public exports
```

### Import Pattern
```javascript
// Direct import from feature
import { ClaudeCodeWebinar } from '@/features/webinars/pages/ClaudeCodeWebinar'

// Through feature index (preferred)
import { ClaudeCodeWebinar } from '@/features/webinars'

// Shared components
import { Button } from '@/components/ui/button'
import { Header } from '@/components/shared/Header'
```

### Route Structure
```
/                                    → HomePage
/webinars                           → WebinarsListPage
/webinars/domine-claude-code        → ClaudeCodeWebinar
/webinars/domine-autonomous-agents  → AutonomousAgentsWebinar
/bootcamp/ai-data-engineer          → AIDataEngineerBootcamp
```

## 📊 File Count Summary

- **Total React Components**: ~50+
- **Feature Modules**: 4 (2 active, 2 planned)
- **UI Components**: 30+ (Radix UI based)
- **Style Files**: 8 CSS files
- **Utility Files**: 6 JavaScript utilities
- **Image Assets**: 11 organized images

## 🚀 Build Output

The Vite build creates optimized chunks:
- **react**: React core libraries
- **animation**: Framer Motion
- **ui**: Radix UI components
- **icons**: Lucide React icons
- **router**: React Router
- **vendor**: Other dependencies
- Feature-specific chunks for each module

## 🔄 Recent Changes (2025-09-18)

1. **Reorganized to feature-based architecture**
   - Moved webinars from `/src/webinars` to `/src/features/webinars`
   - Moved bootcamps from `/src/bootcamps` to `/src/features/bootcamps`

2. **Cleaned up unused files**
   - Removed AppDebug.jsx, AppDebug2.jsx, AppDebug3.jsx
   - Removed TestApp.jsx, App-optimized.jsx
   - Archived unused CSS files

3. **Organized images**
   - Created `/public/images/backgrounds/`
   - Created `/public/images/logos/`
   - Created `/public/images/team/`

4. **Removed old routes**
   - Deleted `/webinarios` routes
   - Unified under `/webinars` path

## 🎯 Future Structure Plans

### Planned Features
- `/src/features/workshops/` - Technical workshops
- `/src/features/dataship/` - Data fellowship program
- `/src/features/community/` - Community features

### To Be Organized
- Consolidate CSS files in `/src/styles/`
- Move accessibility-fixes.css from utils to styles
- Create shared webinar components
- Extract common patterns to shared components

---

*Last Updated: 2025-09-18*