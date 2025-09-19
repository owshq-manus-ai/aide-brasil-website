# ✨ Visual Effects & Animation Guide

## Core Visual Identity

The Engenharia de Dados Academy visual system is built on **futuristic minimalism** with a focus on:
- **Dark backgrounds** suggesting infinite digital space
- **Metallic gradients** representing data flow and technology
- **Geometric patterns** evoking circuit boards and neural networks
- **Smooth animations** creating a premium, fluid experience

---

## 🌟 Signature Effects

### 1. Metallic Gradient Text

Creates a premium, futuristic text effect that shifts like liquid metal.

```css
.metallic-text {
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #60a5fa 25%,
    #2563eb 50%,
    #60a5fa 75%,
    #ffffff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s ease-in-out infinite;
  text-shadow:
    0 0 8px rgba(192, 192, 192, 0.3),
    0 0 16px rgba(169, 169, 169, 0.2);
  filter:
    drop-shadow(0 0 6px rgba(192, 192, 192, 0.3))
    drop-shadow(0 0 12px rgba(169, 169, 169, 0.2));
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.3);
}

@keyframes shimmer {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 2. Crystal Ball Avatar Effect

A mesmerizing rotating gradient effect behind avatars, creating depth and mystique.

```jsx
const CrystalBallAvatar = ({ icon: Icon }) => (
  <div className="relative w-10 h-10">
    {/* Rotating gradient background */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute inset-0 rounded-full"
      style={{
        background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
        opacity: 0.3,
        filter: 'blur(2px)'
      }}
    />

    {/* Pulsing glow */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{
        duration: 2,
        repeat: Infinity
      }}
      className="absolute inset-0 rounded-full bg-blue-400/30"
    />

    {/* Icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Icon className="w-5 h-5 text-blue-400 z-10" />
    </div>
  </div>
)
```

### 3. Glass Morphism Cards

Creates a frosted glass effect that suggests transparency and depth.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}
```

### 4. Neon Glow Buttons

Interactive buttons with dynamic glow effects.

```jsx
const NeonButton = ({ children, color = 'blue' }) => {
  const colors = {
    blue: { from: '#2563eb', to: '#60a5fa', glow: 'rgba(37, 99, 235, 0.7)' },
    purple: { from: '#7c3aed', to: '#a78bfa', glow: 'rgba(124, 58, 237, 0.7)' },
    cyan: { from: '#06b6d4', to: '#67e8f9', glow: 'rgba(6, 182, 212, 0.7)' }
  }

  const { from, to, glow } = colors[color]

  return (
    <motion.button
      className="relative px-8 py-4 font-oswald font-bold uppercase tracking-wider text-white rounded-lg overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
        boxShadow: `
          0 0 20px ${glow},
          0 0 40px ${glow}50,
          inset 0 0 20px rgba(255, 255, 255, 0.1)
        `
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `
          0 0 30px ${glow},
          0 0 60px ${glow}70,
          inset 0 0 25px rgba(255, 255, 255, 0.2)
        `
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
```

### 5. Circuit Board Background

Animated grid pattern suggesting data flow and connectivity.

```jsx
const CircuitBackground = () => (
  <div className="fixed inset-0 overflow-hidden">
    {/* Base grid */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `
          linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
          linear-gradient(180deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-move 20s linear infinite'
      }}
    />

    {/* Animated data lines */}
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>

      {[...Array(5)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1={100 + i * 150}
          x2="100%"
          y2={100 + i * 150}
          stroke="url(#line-gradient)"
          strokeWidth="2"
          opacity="0.5"
        >
          <animate
            attributeName="x1"
            from="-100%"
            to="100%"
            dur={`${3 + i}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
  </div>
)

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}
```

### 6. Floating Orbs

Soft gradient spheres that create depth and ambiance.

```jsx
const FloatingOrbs = () => {
  const orbs = [
    { color: 'blue', size: 384, position: 'top-0 left-1/4', delay: 0 },
    { color: 'purple', size: 320, position: 'bottom-0 right-1/4', delay: 2 },
    { color: 'cyan', size: 256, position: 'top-1/2 left-1/2', delay: 4 }
  ]

  return (
    <>
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.position} -translate-x-1/2 -translate-y-1/2`}
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -30, 30, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div
            className={`bg-${orb.color}-500/20 rounded-full blur-3xl`}
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`
            }}
          />
        </motion.div>
      ))}
    </>
  )
}
```

### 7. Particle System

Dynamic particles that suggest activity and energy.

```jsx
const ParticleSystem = ({ count = 50 }) => {
  const particles = useMemo(() =>
    [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    })), [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
          animate={{
            y: [-20, 20],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
```

### 8. Data Stream Animation

Flowing data visualization effect.

```css
@keyframes data-flow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

.data-stream {
  position: absolute;
  height: 2px;
  width: 100px;
  background: linear-gradient(90deg,
    transparent,
    #3b82f6 20%,
    #60a5fa 50%,
    #3b82f6 80%,
    transparent
  );
  animation: data-flow 3s linear infinite;
  box-shadow:
    0 0 10px #3b82f6,
    0 0 20px #3b82f650;
}
```

### 9. Text Cycling Effect

Smooth text transitions for dynamic content.

```jsx
const TextCycler = ({ words, className }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % words.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: 20,
          filter: 'blur(10px)'
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)'
        }}
        exit={{
          opacity: 0,
          y: -20,
          filter: 'blur(10px)'
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
        className={className}
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  )
}
```

### 10. Hover Reveal Effect

Progressive content reveal on interaction.

```jsx
const HoverReveal = ({ preview, full }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {preview}
          </motion.div>
        ) : (
          <motion.div
            key="full"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {full}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

---

## 📱 Mobile Adaptations

### Performance-First Mobile Effects

```jsx
const MobileOptimizedEffect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile) {
    // Simple, performant version
    return (
      <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg">
        {/* Static gradient instead of animated */}
      </div>
    )
  }

  // Full desktop experience
  return (
    <motion.div
      animate={{
        backgroundPosition: ['0% 0%', '100% 100%'],
        scale: [1, 1.02, 1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
      className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg blur-sm"
    />
  )
}
```

---

## 🎯 Implementation Tips

### 1. Layer Your Effects

```css
.layered-effect {
  position: relative;
}

/* Layer 1: Base gradient */
.layered-effect::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1a1a1a, #2563eb);
  opacity: 0.8;
}

/* Layer 2: Pattern overlay */
.layered-effect::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.2;
  mix-blend-mode: overlay;
}
```

### 2. Optimize for 60fps

```jsx
// Good - uses transform
<motion.div animate={{ x: 100 }} />

// Bad - uses left position
<motion.div animate={{ left: 100 }} />

// Good - uses opacity
<motion.div animate={{ opacity: 0 }} />

// Bad - uses display toggle
<motion.div animate={{ display: 'none' }} />
```

### 3. Use CSS Variables for Dynamic Effects

```jsx
const DynamicGlow = ({ intensity = 1, color = '#3b82f6' }) => (
  <div
    className="glow-effect"
    style={{
      '--glow-intensity': intensity,
      '--glow-color': color
    }}
  />
)

// CSS
.glow-effect {
  box-shadow:
    0 0 calc(20px * var(--glow-intensity)) var(--glow-color),
    0 0 calc(40px * var(--glow-intensity)) var(--glow-color)50;
}
```

### 4. Batch Animations

```jsx
const staggerConfig = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const itemConfig = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

<motion.div variants={staggerConfig} animate="animate">
  {items.map(item => (
    <motion.div key={item.id} variants={itemConfig} />
  ))}
</motion.div>
```

---

## 🎨 Color Psychology

- **Blue (#2563eb)**: Trust, intelligence, technology
- **Purple (#8b5cf6)**: Innovation, creativity, premium
- **Cyan (#06b6d4)**: Clarity, communication, freshness
- **Gray (#9ca3af)**: Sophistication, neutrality, balance
- **Black (#030303)**: Power, elegance, mystery

---

## ⚡ Performance Checklist

- [ ] Use `transform` and `opacity` for animations
- [ ] Apply `will-change` only during animations
- [ ] Implement `transform: translateZ(0)` for GPU acceleration
- [ ] Use `contain: layout` for isolated repaints
- [ ] Debounce scroll and resize events
- [ ] Lazy load heavy visual components
- [ ] Reduce motion for accessibility preferences
- [ ] Test on low-end devices
- [ ] Profile with Chrome DevTools
- [ ] Optimize asset loading