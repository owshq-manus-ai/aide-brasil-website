import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  CheckCircle,
  Clock,
  Users,
  ChevronRight,
  Sparkles,
  Terminal,
  Database,
  Play,
  Calendar,
  Video,
  Shield,
  Bot,
  Cloud
} from 'lucide-react'
import TechStackDock from './TechStackDock'

// Gray theme colors - ChatGPT Codex
const THEME = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  accent: '#374151',
  light: '#d1d5db',
}

// Shared CSS keyframes
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Mobile animation optimization
const mobileAnimProps = { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }

// Learning Item Component - Gray theme
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
        backgroundColor: `${THEME.primary}30`,
        border: `1px solid ${THEME.primary}60`
      }}
    >
      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3" style={{ color: THEME.secondary }} />
    </div>
    <span className="text-white/80 text-xs sm:text-sm leading-relaxed break-words min-w-0">{text}</span>
  </motion.div>
))
LearningItem.displayName = 'LearningItem'

// Value Proposition Component - Gray theme with glow
const ValueProp = memo(({ icon: Icon, text, delay, isMobile = false }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={isMobile ? { duration: 0 } : { delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
    whileHover={isMobile ? undefined : { x: 5 }}
  >
    <div className="relative">
      <div
        className="absolute inset-0 rounded-xl blur-md opacity-50"
        style={{ backgroundColor: `${THEME.primary}80` }}
      />
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: THEME.primary,
          boxShadow: `0 8px 24px ${THEME.primary}60, inset 0 1px 0 rgba(255,255,255,0.3)`,
        }}
      >
        <Icon className="w-6 h-6 text-white drop-shadow-sm" />
      </div>
    </div>
    <span className="text-white text-base font-medium">{text}</span>
  </motion.div>
))
ValueProp.displayName = 'ValueProp'

// Optimized shimmer animation
const shimmerAnimation = { backgroundPosition: ['200% 0%', '-200% 0%'] }
const shimmerTransition = { duration: 3, repeat: Infinity, ease: "linear" }

// Neon Button Component - Gray theme
const NeonButton = memo(({ children, primary = false, onClick, className = "", disableShimmer = false }) => (
  <motion.button
    onClick={onClick}
    className={`
      w-auto flex-shrink-0 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden whitespace-nowrap text-sm sm:text-base
      ${primary ? 'text-white' : 'bg-white/5 backdrop-blur-sm text-white'}
      ${className}
    `}
    whileHover={{
      scale: 1.03,
      boxShadow: primary
        ? `0 0 30px ${THEME.primary}b0, 0 0 60px ${THEME.primary}60`
        : `0 0 20px ${THEME.primary}80`
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      background: primary ? `linear-gradient(135deg, ${THEME.primary} 0%, ${THEME.secondary} 100%)` : undefined,
      border: primary ? undefined : `1px solid ${THEME.primary}50`,
      boxShadow: primary
        ? `0 0 20px ${THEME.primary}80, 0 0 40px ${THEME.primary}50, inset 0 0 20px rgba(255, 255, 255, 0.1)`
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

// Pulse animation for online indicator
const pulseAnimation = {
  boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
}
const pulseTransition = { duration: 2, repeat: Infinity }

// Main Hero Component
const ChatGPTCodexBootcampHero = memo(() => {
  const spotsLeft = 100
  const [isMobile, setIsMobile] = useState(false)

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

  // EXACTLY 6 learning points from briefing
  const learningPoints = useMemo(() => [
    { text: 'Codex Environment: sandbox cloud, file system e execução autônoma', icon: Terminal },
    { text: 'Prompt Engineering: estruturar instruções para código production-ready', icon: Terminal },
    { text: 'API Integration: conectar Codex com serviços externos via requests', icon: Cloud },
    { text: 'Data Pipeline: ETL completo com pandas, SQL e visualização', icon: Database },
    { text: 'Testing Automation: pytest, coverage e CI/CD integrado', icon: Shield },
    { text: 'Production Deploy: do Codex para AWS/GCP com automação total', icon: Rocket }
  ], [])

  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])
  const handleJourneyClick = useCallback(() => scrollToSection('journey'), [scrollToSection])

  return (
    <section data-section="bootcamp-hero" className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            backgroundImage: 'url(/images/backgrounds/dominando-chatgpt-codex.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3,
            filter: 'brightness(0.8) contrast(1.2)',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 700px 500px at 70% 40%, ${THEME.primary}20 0%, transparent 50%),
              radial-gradient(ellipse 500px 400px at 80% 70%, ${THEME.primary}18 0%, transparent 40%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(10, 10, 10, 0.9) 100%)',
          }}
        />
      </div>

      {/* Content Container - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column - Main Content */}
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={isMobile ? { duration: 0 } : { duration: 0.5 }}
            className="space-y-6"
          >
            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #1: STATUS BADGES - Inline at TOP of left column       */}
            {/* ═══════════════════════════════════════════════════════════════ */}
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
              {/* Tag 2: Lançamento */}
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" style={{ color: THEME.secondary }} />
                <span className="text-sm font-medium" style={{ color: THEME.light }}>Lançamento</span>
              </div>
              {/* Tag 3: Cloud-Native */}
              <div className="flex items-center gap-2">
                <Cloud className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Cloud-Native</span>
              </div>
              {/* Tag 4: 12 Horas Hands-On */}
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-green-400" />
                <span className="text-green-300 text-sm font-medium">12 Horas Hands-On</span>
              </div>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #2: TECH STACK DOCK - BETWEEN badges and headline      */}
            {/* CRITICAL: This MUST be here, NOT after CTA buttons!             */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <TechStackDock />

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #3: MAIN HEADLINE                                      */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-3 leading-tight">
                <span className="text-white">Do Zero a Produção </span>
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg,
                      ${THEME.primary} 0%,
                      ${THEME.secondary} 25%,
                      ${THEME.light} 50%,
                      ${THEME.secondary} 75%,
                      ${THEME.primary} 100%)`,
                    backgroundSize: '200% 100%',
                    animation: isMobile ? 'none' : 'subtle-metallic 6s ease-in-out infinite',
                  }}
                >
                  ChatGPT Codex
                </span>
              </h1>
            </div>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #4: SUBTITLE - Transformation promise                  */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <h2
              className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed break-words"
              style={{ color: THEME.secondary }}
            >
              Use o Codex{' '}
              <span className="text-white font-bold">como seu engenheiro na nuvem</span> —com agentes que escrevem, testam e entregam código autonomamente
            </h2>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #5: DESCRIPTION                                        */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.4 }}
              className="text-white/70 text-base leading-relaxed max-w-xl"
            >
              Aprenda a{' '}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${THEME.secondary}, ${THEME.light}, ${THEME.secondary})`,
                  backgroundSize: '200% 100%',
                  animation: isMobile ? 'none' : 'subtle-metallic 3s ease-in-out infinite',
                }}
              >
                operar o Codex como um dev sênior
              </span>
              {' '}— execute código na nuvem, integre APIs e entregue sistemas funcionando. Zero setup local.
            </motion.p>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #6: VALUE PROPOSITIONS - 3 items IN LEFT COLUMN        */}
            {/* CRITICAL: These go HERE, NOT inside the right card!             */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.3, duration: 0.4 }}
              className="space-y-3 pt-2"
            >
              <ValueProp
                icon={Bot}
                text="Delegue tarefas complexas para um agente que executa código na nuvem"
                delay={isMobile ? 0 : 0.3}
                isMobile={isMobile}
              />
              <ValueProp
                icon={Terminal}
                text="Processo completo: do problema ao deploy, sem configurar ambiente local"
                delay={isMobile ? 0 : 0.4}
                isMobile={isMobile}
              />
              <ValueProp
                icon={Rocket}
                text="Sistema real funcionando em 4 dias — com testes e monitoramento"
                delay={isMobile ? 0 : 0.5}
                isMobile={isMobile}
              />
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #7: DATE/TIME INFO                                     */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={isMobile ? { duration: 0 } : { delay: 0.4, duration: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 text-white/60 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>11-14 Fev 2026</span>
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

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #8: CTA BUTTONS                                        */}
            {/* ═══════════════════════════════════════════════════════════════ */}
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

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* POSITION #9: PRESENTED BY                                       */}
            {/* ═══════════════════════════════════════════════════════════════ */}
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

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN - LEARNING CARD ONLY (6 points, nothing else!)         */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={isMobile ? { duration: 0 } : { delay: 0.2, duration: 0.5 }}
            className="relative mt-4 lg:mt-2"
          >
            {/* Glow effect */}
            <div
              className="absolute -inset-0.5 rounded-xl blur-md opacity-20 hidden sm:block"
              style={{
                background: `linear-gradient(135deg, ${THEME.primary}60, ${THEME.primary}30)`,
              }}
            />

            {/* Card */}
            <div
              className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#151515]/95 backdrop-blur-md rounded-xl px-4 sm:px-5 py-4 shadow-xl overflow-hidden"
              style={{ border: `1px solid ${THEME.primary}30` }}
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-3 min-w-0">
                <div
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${THEME.primary}30` }}
                >
                  <Bot className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: THEME.secondary }} />
                </div>
                <h3 className="text-sm sm:text-lg font-oswald font-bold text-white">O que você vai aprender:</h3>
              </div>

              {/* EXACTLY 6 Learning Points - NOTHING ELSE IN THIS CARD */}
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

              {/* ═══════════════════════════════════════════════════════════ */}
              {/* DO NOT ADD ANYTHING ELSE HERE:                              */}
              {/* - NO value propositions (they go in left column #6)         */}
              {/* - NO pricing information                                    */}
              {/* - NO CTA buttons                                            */}
              {/* - NO card footer                                            */}
              {/* ═══════════════════════════════════════════════════════════ */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexBootcampHero.displayName = 'ChatGPTCodexBootcampHero'

export default ChatGPTCodexBootcampHero
