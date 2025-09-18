# 🧩 Component Patterns & Best Practices

## React Component Architecture

### Base Component Structure

```jsx
import React, { useState, useEffect, memo, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

const ComponentName = memo(({ prop1, prop2, className = "" }) => {
  // State management
  const [state, setState] = useState(initialValue)

  // Performance optimizations
  const memoizedValue = useMemo(() => computeExpensive(prop1), [prop1])
  const handleCallback = useCallback(() => {}, [dependency])

  // Side effects
  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    }
  }, [dependency])

  return (
    <motion.div
      className={`base-classes ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  )
})

ComponentName.displayName = 'ComponentName'
export default ComponentName
```

---

## Common Component Patterns

### 1. Floating Shape Component

```jsx
const FloatingShape = memo(({ size, position, gradient, delay = 0 }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile: Static shape
  if (isMobile) {
    return (
      <div className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-5`} />
    )
  }

  // Desktop: Animated shape
  return (
    <motion.div
      className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-20 blur-sm`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
})
```

### 2. Section Container Pattern

```jsx
const SectionContainer = memo(({
  children,
  gradient,
  className = "",
  id,
  withShapes = true
}) => (
  <section
    id={id}
    className={`relative py-12 sm:py-16 lg:py-20 bg-[#030303] overflow-hidden ${className}`}
  >
    {withShapes && (
      <>
        <FloatingShape
          size="w-32 h-32"
          position="top-10 left-10"
          gradient={gradient}
          delay={0}
        />
        <FloatingShape
          size="w-24 h-24"
          position="top-20 right-20"
          gradient={gradient}
          delay={1}
        />
      </>
    )}
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
      {children}
    </div>
  </section>
))
```

### 3. Animated Text Component

```jsx
const AnimatedText = memo(({
  children,
  delay = 0,
  className = "",
  as: Component = 'div'
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay,
      ease: "easeOut"
    }}
    className={className}
  >
    <Component>{children}</Component>
  </motion.div>
))
```

### 4. Cycling Text Animation

```jsx
const CyclingText = ({ words = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, isMobile ? interval * 1.3 : interval)

    return () => clearInterval(timer)
  }, [isMobile, words.length, interval])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
        animate={{
          opacity: 1,
          y: 0,
          backgroundPosition: isMobile ? undefined : ['0% 50%', '100% 50%', '0% 50%']
        }}
        exit={{ opacity: 0, y: isMobile ? -10 : -20 }}
        transition={{
          opacity: { duration: 0.3 },
          y: { duration: 0.3 },
          backgroundPosition: isMobile ? undefined : {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white"
        style={{
          backgroundSize: isMobile ? '100% 100%' : '200% 200%',
        }}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}
```

### 5. Glass Card Component

```jsx
const GlassCard = memo(({
  children,
  className = "",
  hover = true,
  padding = "p-8"
}) => (
  <motion.div
    className={`
      bg-white/5 backdrop-blur-md border border-white/10
      rounded-xl ${padding} ${className}
      ${hover ? 'hover:bg-white/10 hover:border-white/20' : ''}
    `}
    whileHover={hover ? { scale: 1.02 } : undefined}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
))
```

### 6. Neon Button Component

```jsx
const NeonButton = memo(({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ""
}) => {
  const variants = {
    primary: 'from-blue-500 to-blue-600',
    secondary: 'from-gray-500 to-gray-600',
    success: 'from-green-500 to-green-600'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      onClick={onClick}
      className={`
        bg-gradient-to-r ${variants[variant]}
        ${sizes[size]}
        text-white font-oswald font-semibold uppercase tracking-wide
        rounded-lg shadow-lg
        transition-all duration-300
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(37, 99, 235, 0.7)"
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: `
          0 0 20px rgba(37, 99, 235, 0.5),
          0 0 40px rgba(37, 99, 235, 0.3),
          inset 0 0 20px rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {children}
    </motion.button>
  )
})
```

### 7. Avatar Component System

```jsx
// Base Avatar
const BaseAvatar = ({ bgColor, children, hasRelative = false }) => (
  <div
    style={{
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      maxWidth: '40px',
      maxHeight: '40px'
    }}
    className={`
      rounded-full flex items-center justify-center
      shadow-lg ${bgColor} ${hasRelative ? 'relative' : ''}
    `}
  >
    {children}
  </div>
)

// Bot Avatar with Animation
const BotAvatar = () => (
  <BaseAvatar bgColor="bg-transparent" hasRelative={true}>
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
        opacity: 0.3
      }}
    />
    <Bot className="w-5 h-5 text-blue-400 z-10" />
  </BaseAvatar>
)
```

### 8. Loading Skeleton

```jsx
const Skeleton = memo(({
  width = "w-full",
  height = "h-4",
  className = ""
}) => (
  <div
    className={`
      ${width} ${height}
      bg-gray-800/50 rounded animate-pulse
      ${className}
    `}
  />
))

// Usage
const CardSkeleton = () => (
  <div className="space-y-4 p-6">
    <Skeleton height="h-8" width="w-3/4" />
    <Skeleton height="h-4" />
    <Skeleton height="h-4" />
    <Skeleton height="h-4" width="w-1/2" />
  </div>
)
```

### 9. Intersection Observer Hook

```jsx
const useIntersection = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasIntersected, options])

  return { ref, isIntersecting, hasIntersected }
}

// Usage
const AnimatedSection = ({ children }) => {
  const { ref, hasIntersected } = useIntersection()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
```

### 10. Optimized Background Component

```jsx
const OptimizedBackground = memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.innerWidth < 768)
    checkDevice()
    window.addEventListener('resize', checkDevice, { passive: true })
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-[#030303]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-[#030303]">
      {/* Circuit Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(37, 99, 235, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Particle System */}
      <ParticleSystem count={50} />
    </div>
  )
})
```

---

## Performance Optimization Patterns

### 1. Lazy Loading Pattern

```jsx
const LazySection = lazy(() => import('./HeavySection'))

const App = () => (
  <Suspense fallback={<SectionSkeleton />}>
    <LazySection />
  </Suspense>
)
```

### 2. Memoization Pattern

```jsx
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }))
  }, [data])

  return <DisplayComponent data={processedData} />
}, (prevProps, nextProps) => {
  // Custom comparison
  return prevProps.data.length === nextProps.data.length
})
```

### 3. Debounced Input Pattern

```jsx
const DebouncedInput = ({ onSearch }) => {
  const [value, setValue] = useState('')
  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue)
    }
  }, [debouncedValue, onSearch])

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="..."
    />
  )
}
```

### 4. Virtual Scrolling Pattern

```jsx
const VirtualList = ({ items, itemHeight = 60 }) => {
  const [scrollTop, setScrollTop] = useState(0)
  const containerRef = useRef()

  const visibleItems = useMemo(() => {
    const containerHeight = 600
    const startIndex = Math.floor(scrollTop / itemHeight)
    const endIndex = Math.ceil((scrollTop + containerHeight) / itemHeight)

    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      top: (startIndex + index) * itemHeight
    }))
  }, [scrollTop, items, itemHeight])

  return (
    <div
      ref={containerRef}
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
      style={{ height: 600, overflow: 'auto' }}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        {visibleItems.map(item => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              top: item.top,
              height: itemHeight
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  )
}
```

---

## Mobile Optimization Patterns

### 1. Conditional Rendering

```jsx
const ResponsiveComponent = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  if (isMobile) {
    return <MobileView />
  }

  if (isTablet) {
    return <TabletView />
  }

  return <DesktopView />
}
```

### 2. Touch Gesture Handling

```jsx
const SwipeableCard = ({ onSwipe }) => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }))

  const bind = useDrag(({ down, movement: [mx], velocity }) => {
    if (!down && Math.abs(mx) > 50) {
      onSwipe(mx > 0 ? 'right' : 'left')
    }
    api.start({ x: down ? mx : 0 })
  })

  return (
    <animated.div
      {...bind()}
      style={{ x, touchAction: 'pan-y' }}
      className="..."
    >
      Card Content
    </animated.div>
  )
}
```

### 3. Progressive Enhancement

```jsx
const EnhancedFeature = () => {
  const [enhanced, setEnhanced] = useState(false)

  useEffect(() => {
    // Check for feature support
    if ('IntersectionObserver' in window && !isMobile()) {
      setEnhanced(true)
    }
  }, [])

  if (!enhanced) {
    return <BasicFeature />
  }

  return <AdvancedFeature />
}
```

---

## State Management Patterns

### 1. Context Pattern

```jsx
const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme: () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

### 2. Reducer Pattern

```jsx
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value }
    case 'SET_ERRORS':
      return { ...state, errors: action.errors }
    case 'RESET':
      return initialState
    default:
      return state
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value })
  }

  return (
    // Form JSX
  )
}
```

---

## Testing Patterns

### Component Testing

```jsx
describe('Button Component', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Hook Testing

```jsx
describe('useDebounce Hook', () => {
  it('should debounce value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      { initialProps: { value: 'initial' } }
    )

    expect(result.current).toBe('initial')

    rerender({ value: 'updated' })
    expect(result.current).toBe('initial')

    act(() => {
      jest.advanceTimersByTime(500)
    })

    expect(result.current).toBe('updated')
  })
})
```