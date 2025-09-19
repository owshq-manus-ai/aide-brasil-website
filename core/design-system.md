# 🎨 Engenharia de Dados Academy - Design System Documentation

## 📋 Overview

This design system defines the visual language and interaction patterns for Engenharia de Dados Academy's digital products. It emphasizes a **futuristic, AI-driven aesthetic** with dark backgrounds, metallic accents, and sophisticated animations.

---

## 🎯 Core Design Principles

### 1. **Futuristic Minimalism**
- Dark, sophisticated backgrounds (#030303)
- Metallic blue and silver gradients
- Clean, bold typography
- Strategic use of negative space

### 2. **AI-Driven Aesthetics**
- Circuit board patterns
- Flowing data visualizations
- Particle effects and glows
- Tech-inspired geometric shapes

### 3. **Performance-First**
- Mobile-optimized animations
- Conditional rendering based on device
- Lazy loading for heavy components
- GPU-accelerated transforms

### 4. **Accessibility**
- High contrast ratios
- Reduced motion support
- Clear focus states
- Semantic HTML structure

---

## 🎨 Color System

### Color Space
Uses **oklch()** color space for perceptually uniform colors and better gradients.

### Primary Palette

```css
/* Background Colors */
--background: oklch(0.145 0 0);          /* #030303 - Deep Black */
--foreground: oklch(0.985 0 0);          /* #FAFAFA - Almost White */

/* Brand Colors */
--primary: oklch(0.205 0 0);             /* Dark Gray */
--primary-foreground: oklch(0.985 0 0);  /* White */

/* Accent Colors */
--accent: oklch(0.269 0 0);              /* Medium Gray */
--accent-foreground: oklch(0.985 0 0);   /* White */

/* Semantic Colors */
--muted: oklch(0.269 0 0);               /* Muted Gray */
--muted-foreground: oklch(0.708 0 0);    /* Light Gray */
--border: oklch(1 0 0 / 10%);            /* Transparent White */
--input: oklch(1 0 0 / 15%);             /* Transparent White */
```

### Gradient System

```css
/* Metallic Blue Gradient */
background: linear-gradient(135deg,
  #1a1a1a 0%,     /* Dark base */
  #2563eb 50%,   /* Electric blue */
  #60a5fa 100%    /* Light blue */
);

/* Silver Metallic Gradient */
background: linear-gradient(135deg,
  #374151 0%,     /* Gray base */
  #9ca3af 50%,    /* Silver */
  #e5e7eb 100%    /* Light silver */
);

/* Animated Gradient */
background: linear-gradient(270deg,
  rgba(37, 99, 235, 0.3),
  rgba(96, 165, 250, 0.3),
  rgba(37, 99, 235, 0.3)
);
background-size: 200% 200%;
animation: gradient 3s ease infinite;
```

---

## 🔤 Typography System

### Font Stack

```css
/* Primary Font - Headlines & Body */
font-family: 'Oswald', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace - Code & Technical */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

### Type Scale

```css
/* Headlines */
.text-9xl { font-size: 8rem; }     /* Hero titles */
.text-8xl { font-size: 6rem; }     /* Section titles */
.text-7xl { font-size: 4.5rem; }   /* Large headings */
.text-6xl { font-size: 3.75rem; }  /* Medium headings */
.text-5xl { font-size: 3rem; }     /* Small headings */

/* Body Text */
.text-base { font-size: 1rem; line-height: 1.6; }
.text-sm { font-size: 0.875rem; line-height: 1.5; }
.text-xs { font-size: 0.75rem; line-height: 1.4; }

/* Font Weights */
.font-bold { font-weight: 700; }
.font-semibold { font-weight: 600; }
.font-medium { font-weight: 500; }
.font-normal { font-weight: 400; }

/* Letter Spacing */
.tracking-tight { letter-spacing: -0.02em; }
.tracking-normal { letter-spacing: -0.01em; }
.tracking-wide { letter-spacing: 0.02em; }
```

---

## 🎭 Animation System

### Core Animations

```css
/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

/* Pulse Animation */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

/* Gradient Flow */
@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Shimmer Effect */
@keyframes shimmer {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Grid Movement */
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}
```

### Framer Motion Variants

```javascript
// Fade In Animation
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// Scale Animation
const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
}

// Stagger Children
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}
```

---

## 📐 Spacing System

### Base Unit: 0.25rem (4px)

```css
/* Spacing Scale */
.p-0 { padding: 0; }
.p-1 { padding: 0.25rem; }  /* 4px */
.p-2 { padding: 0.5rem; }   /* 8px */
.p-3 { padding: 0.75rem; }  /* 12px */
.p-4 { padding: 1rem; }     /* 16px */
.p-6 { padding: 1.5rem; }   /* 24px */
.p-8 { padding: 2rem; }     /* 32px */
.p-12 { padding: 3rem; }    /* 48px */
.p-16 { padding: 4rem; }    /* 64px */
.p-20 { padding: 5rem; }    /* 80px */
.p-24 { padding: 6rem; }    /* 96px */
```

### Container Widths

```css
.max-w-7xl { max-width: 80rem; }   /* 1280px */
.max-w-6xl { max-width: 72rem; }   /* 1152px */
.max-w-5xl { max-width: 64rem; }   /* 1024px */
.max-w-4xl { max-width: 56rem; }   /* 896px */
.max-w-3xl { max-width: 48rem; }   /* 768px */
```

---

## 🎨 Component Patterns

### Glass Morphism Card

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Neon Glow Button

```css
.neon-button {
  background: linear-gradient(135deg, #2563eb, #60a5fa);
  box-shadow:
    0 0 20px rgba(37, 99, 235, 0.5),
    0 0 40px rgba(37, 99, 235, 0.3),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.neon-button:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 30px rgba(37, 99, 235, 0.7),
    0 0 60px rgba(37, 99, 235, 0.4);
}
```

### Floating Shape Component

```jsx
<div className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float" />
```

---

## 📱 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large screens */
2xl: 1536px /* Extra large screens */
```

### Mobile Optimizations

```css
@media (max-width: 768px) {
  /* Disable heavy animations */
  .animate-float { animation: none; }

  /* Reduce blur effects */
  .blur-3xl { filter: blur(10px); }

  /* Optimize shadows */
  .shadow-xl { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }

  /* Fixed backgrounds become scroll */
  .bg-fixed { background-attachment: scroll; }
}
```

---

## 🔍 Icons

### Icon Library: Lucide React

Common icons used:
- **Bot** - AI/Assistant features
- **Zap** - Performance/Speed
- **Users** - Community
- **Target** - Goals/Objectives
- **Shield** - Security/Trust
- **Brain** - Intelligence/Learning
- **ChartBar** - Analytics
- **Trophy** - Achievements

### Icon Styling

```jsx
<Icon className="w-6 h-6 text-white/80 group-hover:text-blue-400 transition-colors" />
```

---

## 🌊 Effects & Backgrounds

### Circuit Pattern Background

```css
.circuit-pattern {
  background-image:
    linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
    linear-gradient(180deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}
```

### Particle Effect

```jsx
<div className="absolute inset-0">
  {[...Array(50)].map((_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`
      }}
    />
  ))}
</div>
```

### Gradient Orbs

```jsx
<div className="relative">
  {/* Blue Orb */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

  {/* Purple Orb */}
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
</div>
```

---

## ⚡ Performance Guidelines

1. **Use CSS transforms** instead of position changes
2. **Leverage GPU acceleration** with `transform: translateZ(0)`
3. **Implement lazy loading** for heavy components
4. **Use `will-change` sparingly** for animations
5. **Conditionally render** animations on mobile
6. **Debounce scroll events** with passive listeners
7. **Optimize images** with WebP format and lazy loading

---

## 🔧 Utility Classes

### Text Effects

```css
/* Gradient Text */
.text-gradient {
  background: linear-gradient(135deg, #fff, #60a5fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glow Text */
.text-glow {
  text-shadow:
    0 0 8px rgba(192, 192, 192, 0.3),
    0 0 16px rgba(169, 169, 169, 0.2);
}

/* Metallic Text */
.text-metallic {
  background: linear-gradient(135deg, #9ca3af, #e5e7eb, #9ca3af);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}
```

### Border Effects

```css
/* Gradient Border */
.border-gradient {
  border: 2px solid;
  border-image: linear-gradient(135deg, #2563eb, #60a5fa) 1;
}

/* Glow Border */
.border-glow {
  box-shadow:
    0 0 0 1px rgba(37, 99, 235, 0.5),
    0 0 20px rgba(37, 99, 235, 0.3);
}
```

---

## 📦 Dependencies

- **React** - Component framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **@fontsource/oswald** - Typography
- **tw-animate-css** - Animation utilities

---

## 🚀 Implementation Notes

1. Always test animations on real devices
2. Use Chrome DevTools Performance tab to profile
3. Implement skeleton screens for loading states
4. Consider using `IntersectionObserver` for scroll animations
5. Test with slow 3G throttling for performance
6. Validate color contrast ratios for accessibility
7. Use semantic HTML for better SEO and accessibility