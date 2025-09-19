import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'
import { lazy, Suspense, memo, useMemo } from 'react'
import { ChevronDown, Menu, X, CheckCircle, Linkedin, Twitter, Instagram, Youtube, Bot, Zap, Users, Target, Shield, Star, User, Briefcase, BookOpen, Award, Brain, MessageCircle, ChartBar, TrendingUp, Crosshair, Trophy } from 'lucide-react'
import './App.css'

// Lazy load heavy components
const CommunityHero = lazy(() => import('./components/ui/community-hero').then(module => ({ default: module.CommunityHero })))
const LogoWithText = lazy(() => import('./components/ui/aide-logo-final').then(module => ({ default: module.LogoWithText })))

// Memoized components for better performance
const FloatingShape = memo(({ size, position, gradient, delay = 0 }) => (
  <motion.div
    className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-20 blur-xl`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
))

// Optimized Section Container with reduced animations
const SectionContainer = memo(({ children, gradient, className = "", id }) => (
  <section id={id} className={`relative py-20 bg-[#030303] overflow-hidden ${className}`}>
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
    <div className="relative z-10">
      {children}
    </div>
  </section>
))

// Optimized Animated Text with reduced blur effects
const AnimatedText = memo(({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
))

// Loading component for Suspense
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-[#030303]">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

// Main App component wrapped with LazyMotion for smaller bundle
function App() {
  // Memoize heavy computations
  const heroVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }), [])

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
        <Suspense fallback={<LoadingSpinner />}>
          {/* Rest of the component content will be the same but wrapped in Suspense */}
          {/* This is just the optimization structure - the full content would be here */}
        </Suspense>
      </div>
    </LazyMotion>
  )
}

export default App

