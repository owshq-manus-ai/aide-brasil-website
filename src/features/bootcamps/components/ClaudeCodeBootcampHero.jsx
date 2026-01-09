import React, { memo, useCallback, useMemo } from 'react'
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
  Gauge
} from 'lucide-react'
import TechStackDock from './TechStackDock'

// Shared CSS keyframes - extracted to reduce duplication
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Learning Item Component - Claude Code coral style with custom icons
const LearningItem = memo(({ text, delay, icon: Icon = CheckCircle }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-start gap-2.5"
  >
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{
        backgroundColor: 'rgba(224, 122, 95, 0.2)',
        border: '1px solid rgba(224, 122, 95, 0.4)'
      }}
    >
      <Icon className="w-3 h-3" style={{ color: '#E07A5F' }} />
    </div>
    <span className="text-white/80 text-sm leading-relaxed">{text}</span>
  </motion.div>
))
LearningItem.displayName = 'LearningItem'

// Value Proposition Component - Claude Code exact coral (#E07A5F)
const ValueProp = memo(({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
    whileHover={{ x: 5 }}
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
const shimmerAnimation = {
  backgroundPosition: ['200% 0%', '-200% 0%']
}
const shimmerTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "linear"
}

// Neon Button Component - optimized with stable animation configs
// Mobile: proper touch targets with balanced padding, w-auto prevents full-width expansion
const NeonButton = memo(({ children, primary = false, onClick, className = "" }) => (
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
    {primary && (
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
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Status Badges - Online + Inscritos + Agentes */}
            {/* Mobile: smaller gaps, better wrapping */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
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

            {/* Tech Stack Dock - Interactive technology showcase */}
            <TechStackDock />

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
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
                    animation: 'subtle-metallic 6s ease-in-out infinite',
                  }}
                >
                  Claude Code
                </span>
              </h1>
            </motion.div>

            {/* Subtitle - Transformation promise with contrast */}
            {/* Mobile: smaller text for readability */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed"
              style={{ color: '#E07A5F' }}
            >
              Use Claude Code{' '}
              <span className="text-white font-bold">como seu time de engenharia</span> —com agentes que escrevem, revisam e deployam código por você
            </motion.h2>

            {/* Description with AI-Native Development Workflow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/70 text-base leading-relaxed max-w-xl"
            >
              Aprenda o{' '}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #E07A5F, #F0A090, #E07A5F)',
                  backgroundSize: '200% 100%',
                  animation: 'subtle-metallic 3s ease-in-out infinite',
                }}
              >
                AI-Native Development Workflow
              </span>
              {' '}— a metodologia para usar IA com contexto, padrões e controle total. Zero vibe coding.
            </motion.p>

            {/* 3 Value Props - Claude Code coral palette */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-3 pt-2"
            >
              <ValueProp
                icon={Bot}
                text="Orquestre uma frota de agentes que escrevem código por você"
                delay={0.5}
              />
              <ValueProp
                icon={Terminal}
                text="Processo guiado: do requisito ao deploy, sem vibe coding"
                delay={0.6}
              />
              <ValueProp
                icon={Rocket}
                text="Sistema real em produção com observabilidade completa"
                delay={0.7}
              />
            </motion.div>

            {/* Date/Time Info */}
            {/* Mobile: wrap on small screens, smaller gaps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
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
            {/* Mobile: side by side with smaller text, row layout always */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-row flex-wrap gap-3 sm:gap-4 pt-2"
            >
              <NeonButton primary onClick={handlePricingClick}>
                <Sparkles className="w-4 h-4" />
                <span className="hidden sm:inline">GARANTIR MINHA VAGA</span>
                <span className="sm:hidden">GARANTIR VAGA</span>
              </NeonButton>
              <NeonButton onClick={handleJourneyClick}>
                <Play className="w-4 h-4" />
                VER PROGRAMA
              </NeonButton>
            </motion.div>
          </motion.div>

          {/* Right Column - O que voce vai aprender */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:mt-2"
          >
            {/* Glow effect behind the card */}
            <div
              className="absolute -inset-0.5 rounded-xl blur-md opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(224, 122, 95, 0.4), rgba(224, 122, 95, 0.2))',
              }}
            />

            <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#151515]/95 backdrop-blur-md rounded-xl px-3 py-4 shadow-xl" style={{ border: '1px solid rgba(224, 122, 95, 0.2)' }}>
              {/* Header with Claude Code logo */}
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/images/logos/claude-code-icon.png"
                  alt="Claude Code"
                  className="w-8 h-8 rounded-lg object-contain"
                  loading="eager"
                />
                <h3 className="text-lg font-oswald font-bold text-white">O que você vai aprender:</h3>
              </div>

              {/* Learning Points */}
              <div className="space-y-2">
                {learningPoints.map((point, index) => (
                  <LearningItem
                    key={index}
                    text={point.text}
                    icon={point.icon}
                    delay={0.5 + index * 0.06}
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
