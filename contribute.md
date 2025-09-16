# Contributing to AI Data Engineering Brasil Website

## 🎯 Getting Started

Thank you for considering contributing to the AIDE Brasil website! This document provides guidelines and instructions for contributing.

## 📋 Prerequisites

- Node.js 18+ installed
- Git configured
- GitHub account
- Basic knowledge of React and JavaScript

## 🔧 Development Setup

1. **Fork the Repository**
   - Click "Fork" on GitHub
   - Clone your fork locally

2. **Install Dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 📝 Code Style Guide

### JavaScript/React
- Use functional components with hooks
- Keep components small and focused
- Use meaningful variable and function names
- Avoid inline styles - use Tailwind classes

### File Naming
- Components: `PascalCase.jsx`
- Utilities: `camelCase.js`
- Styles: `kebab-case.css`

### Component Structure
```jsx
import React from 'react'
import { motion } from 'framer-motion'

function ComponentName({ prop1, prop2 }) {
  // Hooks first
  const [state, setState] = useState()

  // Event handlers
  const handleClick = () => {}

  // Render
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  )
}

export default ComponentName
```

## 🎨 Design System

Follow the established design system:
- **Colors**: Black (#030303) background with metallic accents
- **Typography**: Oswald font family
- **Spacing**: Use Tailwind's spacing scale
- **Animations**: Framer Motion for smooth transitions

## ✅ Pre-Commit Checklist

Before committing:
- [ ] Run `npm run lint` - fix any errors
- [ ] Run `npm run build` - ensure build passes
- [ ] Test on mobile viewport
- [ ] Update documentation if needed
- [ ] Write meaningful commit message

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git pull upstream main
   ```

2. **Push your changes**
   ```bash
   git push origin feature/your-feature-name
   ```

3. **Create Pull Request**
   - Use descriptive title
   - Reference any related issues
   - Describe what changed and why
   - Include screenshots for UI changes

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in production build

## Screenshots
(if applicable)
```

## 🐛 Reporting Issues

### Bug Reports
Include:
- Browser and version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots/console errors

### Feature Requests
Include:
- Problem it solves
- Proposed solution
- Alternative solutions considered
- Additional context

## 📦 Dependencies

When adding dependencies:
- Justify why it's needed
- Check bundle size impact
- Ensure it's actively maintained
- Add with `--legacy-peer-deps` flag

## 🚀 Deployment

- Merges to `main` auto-deploy to production
- Preview deployments created for PRs
- Check Vercel dashboard for deployment status

## 💬 Communication

- Use GitHub Issues for bugs/features
- Join our Discord for discussions
- Be respectful and constructive
- Follow our Code of Conduct

## ⚠️ Important Notes

1. **Legacy Peer Deps**: Always use `npm install --legacy-peer-deps` due to dependency conflicts
2. **Bundle Size**: Monitor bundle size - keep HomePage under 150KB
3. **Images**: Optimize images before adding to `/public`
4. **Secrets**: Never commit API keys or secrets

## 🙏 Thank You!

Your contributions make this project better for the entire Brazilian AI & Data Engineering community!