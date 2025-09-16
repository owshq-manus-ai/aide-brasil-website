# Development Workflow Guide

## 🚀 Quick Reference

### Daily Development Flow

```bash
# Start your day
git pull origin main
npm install --legacy-peer-deps
npm run dev

# Make changes and test
# Edit files...
npm run lint
npm run build

# Commit changes
git add .
git commit -m "feat: your feature description"
git push origin main

# Auto-deploys to Vercel in ~30 seconds
```

## 📂 Project Structure Guide

### `/src` - Source Code
- **`/components/ui`** - Reusable UI components (buttons, cards, etc.)
- **`/pages`** - Page-level components (HomePage, WebinarHub, etc.)
- **`/hooks`** - Custom React hooks
- **`/lib`** - Utility functions
- **`/styles`** - Global CSS and theme files
- **`/assets`** - Images and static files

### `/public` - Static Assets
- **Favicons** - favicon.ico, favicon.png
- **Images** - Optimized images for production
- **Manifest** - PWA configuration

### `/docs` - Documentation
- **`/design`** - Design system documentation
- **`/api`** - API documentation (future)

## 🎨 Design System

### Color Palette
```css
--background: #030303;
--primary: #silver;
--accent: #blue;
--text: #white;
```

### Typography
```css
font-family: 'Oswald', sans-serif;
/* Weights: 200, 300, 400, 500, 600, 700 */
```

### Component Patterns
1. **Glass Morphism**
   ```css
   background: rgba(255, 255, 255, 0.1);
   backdrop-filter: blur(10px);
   ```

2. **Metallic Gradients**
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```

## 🛠️ Common Tasks

### Adding a New Page

1. Create component in `/src/pages/YourPage.jsx`
2. Add route in `/src/App.jsx`
3. Update navigation if needed

### Adding a New Component

1. Create component in `/src/components/ui/YourComponent.jsx`
2. Follow existing patterns
3. Export from index file if creating a component library

### Working with Images

1. Add original to `/src/assets`
2. Optimize for web (WebP format preferred)
3. Place optimized version in `/public/optimized`

### Environment Variables

1. Copy `.env.example` to `.env.local`
2. Add your variables with `VITE_` prefix
3. Access in code: `import.meta.env.VITE_YOUR_VAR`

## 🔍 Debugging

### Common Issues

**1. Dependency Errors**
```bash
# Always use legacy peer deps
npm install --legacy-peer-deps
```

**2. Build Failures**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install --legacy-peer-deps
npm run build
```

**3. Port Already in Use**
```bash
# Kill process on port 5173
lsof -i :5173
kill -9 <PID>
```

## 📊 Performance Guidelines

### Bundle Size Limits
- HomePage: < 150KB
- Other pages: < 100KB
- Components: < 50KB

### Image Optimization
- Use WebP format
- Lazy load below the fold
- Multiple sizes for responsive

### Code Splitting
```jsx
// Use dynamic imports for large components
const HeavyComponent = React.lazy(() => import('./HeavyComponent'))
```

## 🚢 Deployment

### Automatic Deployment
Every push to `main` triggers deployment to Vercel

### Manual Deployment
```bash
vercel --prod
```

### Preview Deployments
Create a PR to get a preview URL

## 📝 Code Standards

### React Components
```jsx
// Functional component with hooks
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue)

  useEffect(() => {
    // Effect logic
  }, [dependency])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="tailwind-classes"
    >
      {/* Content */}
    </motion.div>
  )
}

export default ComponentName
```

### File Organization
- One component per file
- Related components in same folder
- Shared utilities in `/lib`
- Constants in separate files

## 🔄 Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code improvements

### Commit Messages
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: restructure code
test: add tests
chore: maintenance tasks
```

## 🤝 Team Collaboration

### Code Reviews
- Check functionality
- Verify responsive design
- Test performance
- Review code style

### Communication
- Use GitHub Issues for bugs/features
- Discord for discussions
- PR comments for code feedback

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Radix UI](https://www.radix-ui.com)

## 🆘 Getting Help

1. Check this documentation
2. Search existing issues
3. Ask in Discord
4. Create a new issue

---

Remember: **Always test on mobile devices before committing!**