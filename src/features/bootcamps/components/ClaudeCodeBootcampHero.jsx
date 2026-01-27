import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Sparkles,
  Brain,
  Terminal,
  Cpu,
  Play,
  Calendar,
  Video,
  Server,
  Bot,
  Gauge,
  Zap
} from 'lucide-react'
import TechStackDock from './TechStackDock'

// Shared CSS keyframes - extracted to reduce duplication
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Mobile animation optimization: skip staggered delays on mobile to reduce main-thread work
// On mobile, items appear instantly; on desktop, they stagger for visual polish
const mobileAnimProps = { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }

// Learning Item Component - Claude Code coral style with custom icons
// Mobile: min-w-0 + break-words prevents text overflow on small screens
// Mobile: skip stagger animations to reduce TBT (Total Blocking Time)
const LearningItem = memo(({ text, delay, icon: Icon = CheckCircle, isMobile = false }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={isMobile ? { duration: 0 } : { delay, duration: 0.4 }}
    className="flex items-start gap-2 sm:gap-2.5 min-w-0"
  >
    <div
      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{
        backgroundColor: 'rgba(224, 122, 95, 0.2)',
        border: '1px solid rgba(224, 122, 95, 0.4)'
      }}
    >
      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: '#E07A5F' }} />
    </div>
    <span className="text-white/80 text-xs sm:text-sm leading-relaxed break-words min-w-0">{text}</span>
  </motion.div>
))
LearningItem.displayName = 'LearningItem'

// Value Proposition Component - Claude Code exact coral (#E07A5F)
// Mobile: disable hover effects and stagger animations
const ValueProp = memo(({ icon: Icon, text, delay, isMobile = false }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={isMobile ? { duration: 0 } : { delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
    whileHover={isMobile ? undefined : { x: 5 }}
  >
    {/* Icon container with glow effect */}
    <div className="relative">
      <div
        className="absolute inset-0 rounded-xl blur-md opacity-50"
        style={{ backgroundColor: 'rgba(224, 122, 95, 0.5)' }}
      />
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: '#E07A5F',
          boxShadow: '0 8px 24px rgba(224, 122, 95, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      >
        <Icon className="w-6 h-6 text-white drop-shadow-sm" />
      </div>
    </div>
    <span className="text-white text-base font-medium">{text}</span>
  </motion.div>
))
ValueProp.displayName = 'ValueProp'

// Optimized shimmer animation config - uses GPU-accelerated properties only
// Mobile: disabled for better performance
const shimmerAnimation = {
  backgroundPosition: ['200% 0%', '-200% 0%']
}
const shimmerTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "linear"
}
// Static fallback for mobile (no animation)
const noAnimation = {}
const noTransition = { duration: 0 }

// Neon Button Component - optimized with stable animation configs
// Mobile: proper touch targets with balanced padding, w-auto prevents full-width expansion
// isMobile prop disables expensive shimmer animation for better performance
const NeonButton = memo(({ children, primary = false, onClick, className = "", disableShimmer = false }) => (
  <motion.button
    onClick={onClick}
    className={`
      w-auto flex-shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden whitespace-nowrap text-sm sm:text-base
      ${primary
        ? 'text-white'
        : 'bg-white/5 backdrop-blur-sm text-white'
      }
      ${className}
    `}
    whileHover={{
      scale: 1.03,
      boxShadow: primary
        ? "0 0 30px rgba(224, 122, 95, 0.7), 0 0 60px rgba(224, 122, 95, 0.4)"
        : "0 0 20px rgba(224, 122, 95, 0.5)"
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      background: primary ? 'linear-gradient(135deg, #E07A5F 0%, #C96A50 100%)' : undefined,
      border: primary ? undefined : '1px solid rgba(224, 122, 95, 0.3)',
      boxShadow: primary
        ? '0 0 20px rgba(224, 122, 95, 0.5), 0 0 40px rgba(224, 122, 95, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
        : undefined
    }}
  >
    {primary && !disableShimmer && (
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={shimmerAnimation}
        transition={shimmerTransition}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ChevronRight className="w-4 h-4" />}
    </span>
  </motion.button>
))
NeonButton.displayName = 'NeonButton'

// Pulse animation for online indicator - stable reference
const pulseAnimation = {
  boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
}
const pulseTransition = { duration: 2, repeat: Infinity }

// Main Hero Component
const ClaudeCodeBootcampHero = memo(() => {
  const spotsLeft = 185
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile for performance optimizations
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Memoized learning points to prevent recreation on re-renders
  const learningPoints = useMemo(() => [
    { text: 'Setup profissional: CLAUDE.md, MCPs, SubAgents e Hooks', icon: Terminal },
    { text: 'Context Engineering: estruturar contexto para respostas precisas', icon: Brain },
    { text: 'Arquitetura Adapter: design multi-cloud (GCP, AWS, Azure)', icon: Server },
    { text: 'Pipeline GenAI completo: extração com LLM →BigQuery →Hex', icon: Cpu },
    { text: 'LLMOps com Langfuse: custo, latência e qualidade', icon: Gauge },
    { text: 'CI/CD para GenAI: GitHub Actions + quality gates', icon: Rocket }
  ], [])

  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])
  const handleJourneyClick = useCallback(() => scrollToSection('journey'), [scrollToSection])

  return (
    <section data-section="bootcamp-hero" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Image - Smooth blend like webinar page, hidden on mobile for better readability */}
      <div className="absolute inset-0">
        {/* Background image with radial mask for seamless blend - hidden on mobile (sm:block) */}
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: 'url(/images/backgrounds/dominando-chatgpt-agent-builder.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3,
            filter: 'brightness(0.8) contrast(1.2)',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        {/* Coral accent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 700px 500px at 70% 40%, rgba(224, 122, 95, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 500px 400px at 80% 70%, rgba(224, 122, 95, 0.12) 0%, transparent 40%)`,
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(10, 10, 10, 0.9) 100%)',
          }}
        />
      </div>

      {/* Content Container - Two Column Layout */}
      {/* Mobile: px-4 gives 16px breathing room on each side */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column - Main Content */}
          {/* Mobile: instant render for LCP, Desktop: subtle fade */}
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.5 }}
            className="space-y-6"
          >
            {/* Status Badges - Online + Inscritos + Agentes */}
            {/* Mobile: instant render, smaller gaps, better wrapping */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.3 }}
              className="inline-flex items-center gap-2 sm:gap-4 flex-wrap"
            >
              {/* Tag 1: Online */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={pulseAnimation}
                  transition={pulseTransition}
                />
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
              {/* Tag 2: Inscritos */}
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5" style={{ color: '#E07A5F' }} />
                <span className="text-sm font-medium" style={{ color: '#F0A090' }}>{spotsLeft} Inscritos</span>
              </div>
              {/* Tag 3: Agentes */}
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Agentes</span>
              </div>
              {/* Tag 4: 12 Horas Hands-On */}
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">12 Horas Hands-On</span>
              </div>
            </motion.div>

            {/* Urgency Banner - GOLDEN YELLOW - High visibility */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className="relative inline-flex items-center gap-3 rounded-xl px-4 sm:px-6 py-3 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                boxShadow: '0 0 30px rgba(251, 191, 36, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              {/* Pulsing glow border */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(251, 191, 36, 0.6)',
                    '0 0 40px rgba(251, 191, 36, 0.9)',
                    '0 0 20px rgba(251, 191, 36, 0.6)'
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Zap icon with bounce */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
                className="relative z-10"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black fill-black" />
              </motion.div>
              {/* Text content */}
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
                <span className="font-oswald font-black text-sm sm:text-lg text-black uppercase tracking-wide">
                  LOTE VIRA HOJE
                </span>
                <span className="text-black/70 text-xs sm:text-sm font-medium">
                  — últimas horas!
                </span>
              </div>
            </motion.div>

            {/* Tech Stack Dock - Interactive technology showcase */}
            <TechStackDock />

            {/* Main Headline - LCP Element: No animation delay for instant render */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-3 leading-tight">
                <span className="text-white">Do Zero a Produção </span>
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg,
                      #E07A5F 0%,
                      #F0A090 25%,
                      #F5C4B8 50%,
                      #F0A090 75%,
                      #E07A5F 100%)`,
                    backgroundSize: '200% 100%',
                    animation: isMobile ? 'none' : 'subtle-metallic 6s ease-in-out infinite',
                  }}
                >
                  Claude Code
                </span>
              </h1>
            </div>

            {/* Subtitle - Transformation promise with contrast */}
            {/* Mobile: no animation for faster LCP, break-words prevents overflow */}
            <h2
              className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed break-words"
              style={{ color: '#E07A5F' }}
            >
              Use Claude Code{' '}
              <span className="text-white font-bold">como seu time de engenharia</span> —com agentes que escrevem, revisam e deployam código por você
            </h2>

            {/* Description with AI-Native Development Workflow */}
            {/* Mobile: no animation delay for faster paint */}
            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.4 }}
              className="text-white/70 text-base leading-relaxed max-w-xl"
            >
              Aprenda o{' '}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #E07A5F, #F0A090, #E07A5F)',
                  backgroundSize: '200% 100%',
                  animation: isMobile ? 'none' : 'subtle-metallic 3s ease-in-out infinite',
                }}
              >
                AI-Native Development Workflow
              </span>
              {' '}— a metodologia para usar IA com contexto, padrões e controle total. Zero vibe coding.
            </motion.p>

            {/* 3 Value Props - Claude Code coral palette */}
            {/* Mobile: instant render, Desktop: staggered animation */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.3, duration: 0.4 }}
              className="space-y-3 pt-2"
            >
              <ValueProp
                icon={Bot}
                text="Orquestre uma frota de agentes que escrevem código por você"
                delay={isMobile ? 0 : 0.3}
                isMobile={isMobile}
              />
              <ValueProp
                icon={Terminal}
                text="Processo guiado: do requisito ao deploy, sem vibe coding"
                delay={isMobile ? 0 : 0.4}
                isMobile={isMobile}
              />
              <ValueProp
                icon={Rocket}
                text="Sistema real em produção com observabilidade completa"
                delay={isMobile ? 0 : 0.5}
                isMobile={isMobile}
              />
            </motion.div>

            {/* Date/Time Info */}
            {/* Mobile: instant render, wrap on small screens, smaller gaps */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.4, duration: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-white/60 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>28-31 Jan 2026</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>20:00 BRT</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Online ao vivo</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            {/* Mobile: instant render, side by side with smaller text, row layout always */}
            <motion.div
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.5, duration: 0.3 }}
              className="flex flex-row flex-wrap gap-3 sm:gap-4 pt-2"
            >
              <NeonButton primary onClick={handlePricingClick} disableShimmer={isMobile}>
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">GARANTIR MINHA VAGA</span>
                <span className="sm:hidden">GARANTIR VAGA</span>
              </NeonButton>
              <NeonButton onClick={handleJourneyClick}>
                <Play className="w-4 h-4" />
                VER PROGRAMA
              </NeonButton>
            </motion.div>

            {/* APRESENTADO POR - EDA Branding */}
            {/* Mobile: instant render */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.6, duration: 0.3 }}
              className="flex items-center gap-3 pt-6 sm:pt-8"
            >
              <span className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-widest">Apresentado por</span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-white/30 to-transparent" />
              <a
                href="https://engenhariadadosacademy.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                <img
                  src="/images/logos/engenharia-dados-academy.webp"
                  alt="Engenharia de Dados Academy"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - O que voce vai aprender */}
          {/* Mobile: instant render, mt-4 adds separation, proper padding prevents edge cutoff */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.5 }}
            className="relative mt-4 lg:mt-2"
          >
            {/* Glow effect behind the card - hidden on mobile for performance */}
            <div
              className="absolute -inset-0.5 rounded-xl blur-md opacity-20 hidden sm:block"
              style={{
                background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.4), rgba(224, 122, 95, 0.2))',
              }}
            />

            {/* Card with proper mobile padding: px-4 (16px) ensures content doesn't touch edges */}
            <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#151515]/95 backdrop-blur-md rounded-xl px-4 sm:px-5 py-4 shadow-xl overflow-hidden" style={{ border: '1px solid rgba(224, 122, 95, 0.2)' }}>
              {/* Header with Claude Code logo */}
              <div className="flex items-center gap-2.5 mb-3 min-w-0">
                <img
                  src="/images/logos/claude-code-icon.webp"
                  alt="Claude Code"
                  width={32}
                  height={32}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg object-contain flex-shrink-0"
                  loading="eager"
                  fetchPriority="high"
                />
                <h3 className="text-sm sm:text-lg font-oswald font-bold text-white">O que você vai aprender:</h3>
              </div>

              {/* Learning Points - Mobile: instant render, Desktop: staggered animation */}
              <div className="space-y-2 overflow-hidden">
                {learningPoints.map((point, index) => (
                  <LearningItem
                    key={index}
                    text={point.text}
                    icon={point.icon}
                    delay={0.5 + index * 0.06}
                    isMobile={isMobile}
                  />
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{sharedStyles}</style>
    </section>
  )
})

ClaudeCodeBootcampHero.displayName = 'ClaudeCodeBootcampHero'

export default ClaudeCodeBootcampHero
