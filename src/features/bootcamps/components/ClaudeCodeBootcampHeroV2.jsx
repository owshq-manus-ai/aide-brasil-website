import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Sparkles,
  Terminal,
  Play,
  ChevronRight,
  Bot,
  Rocket,
  Gauge,
  Server,
  Brain,
  Cpu,
  Users,
  CheckCircle2,
  Circle,
  ShieldCheck,
  Layers,
  MessageCircle,
  Github,
  Command,
  CornerDownLeft
} from 'lucide-react'
import { CORAL, TERMINAL, sharedKeyframes } from '../theme'

const useTypingEffect = (texts, typingSpeed = 50, pauseBetween = 2500) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(texts[currentIndex])
      setIsTyping(true)
      return
    }
    const currentText = texts[currentIndex]
    if (isTyping) {
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1))
        }, typingSpeed + Math.random() * 25)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => setIsTyping(false), pauseBetween)
        return () => clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setDisplayedText('')
        setIsTyping(true)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, currentIndex, isTyping, texts, typingSpeed, pauseBetween, prefersReducedMotion])

  return { displayedText, isTyping }
}

const TerminalWindow = memo(({ isMobile }) => {
  const commands = useMemo(() => [
    'claude "Crie um pipeline ETL com BigQuery"',
    'claude "Deploy na GCP com Terraform"',
    'claude "Configure observabilidade com Langfuse"',
    'claude "Implemente CI/CD com GitHub Actions"',
  ], [])

  const { displayedText, isTyping } = useTypingEffect(commands, 40, 2800)

  const outputLines = useMemo(() => [
    { type: 'comment', text: '# Claude Code está trabalhando...' },
    { type: 'success', text: '✓ Analisando requisitos do projeto' },
    { type: 'success', text: '✓ Gerando arquitetura multi-cloud' },
    { type: 'success', text: '✓ Escrevendo código production-ready' },
    { type: 'info', text: '→ Criando testes automatizados...' },
  ], [])

  return (
    <motion.div
      initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="relative w-full"
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-25 hidden sm:block"
        style={{ background: `radial-gradient(circle, ${CORAL.primary}60, transparent 70%)` }}
      />

      {/* Terminal container */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          backgroundColor: TERMINAL.bg,
          border: `1px solid ${TERMINAL.border}`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 0 1px ${TERMINAL.border}`
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ backgroundColor: TERMINAL.headerBg, borderBottom: `1px solid ${TERMINAL.border}` }}
        >
          <div className="flex items-center gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>

          {/* Title */}
          <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>claude-code — bootcamp</span>
          </div>

          {/* Keyboard shortcut */}
          <div className="flex items-center gap-1 text-white/30 text-xs font-mono">
            <Command className="w-3 h-3" />
            <span>K</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-4 sm:p-5 font-mono text-sm space-y-3 min-h-[180px] sm:min-h-[220px]">
          {/* Command line */}
          <div className="flex items-start gap-2 flex-wrap">
            <span style={{ color: TERMINAL.green }}>➜</span>
            <span style={{ color: TERMINAL.blue }}>~/bootcamp</span>
            <span className="text-white/50">$</span>
            <span className="text-white break-all">
              {displayedText}
              <span
                className="inline-block w-2 h-4 ml-0.5 align-middle"
                style={{
                  backgroundColor: CORAL.primary,
                  animation: 'terminal-cursor 1s step-end infinite'
                }}
              />
            </span>
          </div>

          {/* Output */}
          <AnimatePresence>
            {!isTyping && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1.5 pt-3 border-t border-white/10"
              >
                {outputLines.map((line, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.12 }}
                    style={{
                      color: line.type === 'comment' ? TERMINAL.comment :
                             line.type === 'success' ? TERMINAL.green :
                             TERMINAL.blue
                    }}
                  >
                    {line.text}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Status bar */}
        <div
          className="flex items-center justify-between px-4 py-2 text-xs font-mono"
          style={{ backgroundColor: TERMINAL.headerBg, borderTop: `1px solid ${TERMINAL.border}`, color: TERMINAL.comment }}
        >
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Circle className="w-2 h-2 fill-green-500 text-green-500" />
              Conectado
            </span>
            <span>Claude Code</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/30">
            <CornerDownLeft className="w-3 h-3" />
            <span>Enter</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
})
TerminalWindow.displayName = 'TerminalWindow'

const BentoCard = memo(({ children, className = '', delay = 0, isMobile = false }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className={`relative group ${className}`}
  >
    {/* Hover glow */}
    <div
      className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg hidden sm:block"
      style={{ backgroundColor: CORAL.primary }}
    />
    {/* Card */}
    <div
      className="relative h-full rounded-xl p-4 sm:p-5 backdrop-blur-sm overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(21, 21, 21, 0.95) 100%)',
        border: `1px solid ${CORAL.primary}20`,
      }}
    >
      {/* Subtle gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: `linear-gradient(135deg, ${CORAL.primary}08 0%, transparent 50%)` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  </motion.div>
))
BentoCard.displayName = 'BentoCard'

const NeonButton = memo(({ children, primary = false, onClick, className = '', isMobile = false }) => (
  <motion.button
    onClick={onClick}
    className={`
      px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden text-sm sm:text-base min-h-[44px]
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:ring-white/50
      ${primary ? 'text-white' : 'bg-white/5 backdrop-blur-sm text-white'}
      ${className}
    `}
    whileHover={{ scale: 1.03, boxShadow: primary ? `0 0 30px ${CORAL.glow}` : `0 0 20px ${CORAL.primary}40` }}
    whileTap={{ scale: 0.98 }}
    style={{
      background: primary ? `linear-gradient(135deg, ${CORAL.primary} 0%, ${CORAL.dark} 100%)` : undefined,
      border: primary ? undefined : `1px solid ${CORAL.primary}30`,
      boxShadow: primary ? `0 0 20px ${CORAL.glow}, inset 0 0 20px rgba(255,255,255,0.1)` : undefined
    }}
  >
    {/* Shimmer */}
    {primary && !isMobile && (
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ChevronRight className="w-4 h-4" />}
    </span>
  </motion.button>
))
NeonButton.displayName = 'NeonButton'

const StatusBadge = memo(({ icon: Icon, text, color = CORAL.primary, pulse = false }) => (
  <div
    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}40`, color }}
  >
    {pulse ? (
      <motion.div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ boxShadow: [`0 0 0 0 ${color}70`, `0 0 0 4px ${color}00`] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    ) : (
      <Icon className="w-3.5 h-3.5" />
    )}
    <span>{text}</span>
  </div>
))
StatusBadge.displayName = 'StatusBadge'

const LearningItem = memo(({ text, icon: Icon = CheckCircle2, delay = 0, isMobile = false }) => (
  <motion.div
    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.3 }}
    className="flex items-start gap-2.5"
  >
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{ backgroundColor: `${CORAL.primary}20`, border: `1px solid ${CORAL.primary}40` }}
    >
      <Icon className="w-3 h-3" style={{ color: CORAL.primary }} />
    </div>
    <span className="text-white/80 text-sm leading-relaxed">{text}</span>
  </motion.div>
))
LearningItem.displayName = 'LearningItem'

const ClaudeCodeBootcampHeroV2 = memo(() => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const handlePricingClick = useCallback(() => scrollToSection('pricing'), [scrollToSection])
  const handleJourneyClick = useCallback(() => scrollToSection('journey'), [scrollToSection])

  const learningPoints = useMemo(() => [
    { text: 'AgentSpec + Context Engineering aplicados em projeto real', icon: Brain },
    { text: 'Setup completo: CLAUDE.md, MCPs, SubAgents e Hooks', icon: Terminal },
    { text: 'Quality gates com SonarCloud local + Snyk local', icon: ShieldCheck },
    { text: 'Pipeline GenAI: Invoice → BigQuery → Dashboard', icon: Cpu },
    { text: 'Measurement com Langfuse: custo, latência e qualidade', icon: Gauge },
    { text: 'CI/CD e arquitetura portável (GCP hoje, multi-cloud amanhã)', icon: Server }
  ], [])

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BACKGROUND - Matching V1 style                                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Coral gradient orbs */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 600px at 75% 35%, ${CORAL.subtle} 0%, transparent 50%),
              radial-gradient(ellipse 600px 400px at 85% 75%, ${CORAL.primary}10 0%, transparent 40%),
              radial-gradient(ellipse 400px 300px at 20% 80%, ${CORAL.primary}08 0%, transparent 50%)
            `
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 70%, rgba(10, 10, 10, 0.95) 100%)' }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* CONTENT                                                             */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 sm:pb-16">

        {/* Status badges */}
        <motion.div
          initial={isMobile ? { opacity: 1 } : { opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
        >
          <StatusBadge text="Gravado" color={TERMINAL.green} pulse />
          <StatusBadge icon={Users} text="200+ Profissionais" color={CORAL.light} />
          <StatusBadge icon={Bot} text="Agentes" color={TERMINAL.purple} />
          <StatusBadge icon={Layers} text="Acesso imediato" color={TERMINAL.blue} />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LEFT COLUMN - 7 cols                                            */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-6">

            {/* Headline */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-oswald font-bold leading-[1.05] mb-4">
                <span className="text-white">Do Zero a Produção</span>
                <br />
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${CORAL.primary} 0%, ${CORAL.light} 30%, ${CORAL.lighter} 50%, ${CORAL.light} 70%, ${CORAL.primary} 100%)`,
                    backgroundSize: '200% 100%',
                    animation: isMobile ? 'none' : 'subtle-metallic 5s ease-in-out infinite',
                  }}
                >
                  Claude Code
                </span>
              </h1>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-2xl">
                <span style={{ color: CORAL.light }}>Construa sistemas de dados com AgentSpec</span>
                {' '}
                <span className="text-white font-bold">com padrão de engenharia real</span>
                {' '}
                <span className="text-white/70">— menos improviso, mais previsibilidade de entrega</span>
              </h2>
            </motion.div>

            {/* Terminal */}
            <TerminalWindow isMobile={isMobile} />

            {/* CTA Buttons */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <NeonButton primary onClick={handlePricingClick} isMobile={isMobile}>
                <Sparkles className="w-4 h-4" />
                VER INVESTIMENTO
              </NeonButton>
              <NeonButton onClick={handleJourneyClick} isMobile={isMobile}>
                <Play className="w-4 h-4" />
                VER PROGRAMA
              </NeonButton>
            </motion.div>

            {/* Presented by */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex items-center gap-3 pt-4 sm:pt-6"
            >
              <span className="text-white/50 text-xs uppercase tracking-widest">Apresentado por</span>
              <div className="h-px w-8 bg-gradient-to-r from-white/30 to-transparent" />
              <a
                href="https://engenhariadadosacademy.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                <img
                  src="/images/logos/engenharia-dados-academy.webp"
                  alt="Engenharia de Dados Academy"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                  loading="lazy"
                />
              </a>
            </motion.div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* RIGHT COLUMN - 5 cols - Bento Cards                             */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 space-y-4">

            {/* Learning Card */}
            <BentoCard delay={0.25} isMobile={isMobile}>
              <div className="flex items-center gap-2.5 mb-4">
                <img
                  src="/images/logos/claude-code-icon.webp"
                  alt="Claude Code"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-lg"
                  loading="eager"
                />
                <h3 className="text-base sm:text-lg font-oswald font-bold text-white">
                  O que você vai aprender
                </h3>
              </div>
              <div className="space-y-2.5">
                {learningPoints.map((point, idx) => (
                  <LearningItem
                    key={idx}
                    text={point.text}
                    icon={point.icon}
                    delay={isMobile ? 0 : 0.3 + idx * 0.05}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </BentoCard>

            {/* Info Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Access Card */}
              <BentoCard delay={0.35} isMobile={isMobile}>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <ShieldCheck className="w-4 h-4" style={{ color: TERMINAL.green }} />
                    <div>
                      <span className="text-sm font-bold text-white">Formato gravado</span>
                      <p className="text-xs text-white/60">Acesso imediato + revisão no seu ritmo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Layers className="w-4 h-4" style={{ color: TERMINAL.blue }} />
                    <div>
                      <span className="text-sm font-bold text-white">Fluxo completo e contínuo</span>
                      <p className="text-xs text-white/60">Da spec ao deploy com observabilidade</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <MessageCircle className="w-4 h-4" style={{ color: TERMINAL.purple }} />
                    <div>
                      <span className="text-sm font-bold text-white">Comercial via WhatsApp</span>
                      <p className="text-xs text-white/60">Atendimento consultivo para seu cenário</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    <span
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${TERMINAL.green}15`, border: `1px solid ${TERMINAL.green}35`, color: TERMINAL.green }}
                    >
                      Gravado
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${TERMINAL.blue}15`, border: `1px solid ${TERMINAL.blue}35`, color: TERMINAL.blue }}
                    >
                      Atualizações
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}35`, color: CORAL.light }}
                    >
                      Prova real
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: `${TERMINAL.purple}15`, border: `1px solid ${TERMINAL.purple}35`, color: TERMINAL.purple }}
                    >
                      Context Engineering
                    </span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard delay={0.4} isMobile={isMobile}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/50 mb-1">Metodologia</div>
                    <div
                      className="text-lg sm:text-xl font-bold font-mono leading-tight mb-2"
                      style={{ color: CORAL.primary }}
                    >
                      AgentSpec + SDD
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Especificação como contrato técnico para produção previsível.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded"
                      style={{ backgroundColor: `${CORAL.primary}15`, color: CORAL.light }}
                    >
                      Spec-Driven
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded"
                      style={{ backgroundColor: `${TERMINAL.blue}15`, color: TERMINAL.blue }}
                    >
                      Context Engine
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded"
                      style={{ backgroundColor: `${TERMINAL.green}15`, color: TERMINAL.green }}
                    >
                      /iterate
                    </span>
                  </div>
                  <a
                    href="https://github.com/luanmorenommaciel/agentspec/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-xs px-2.5 py-1.5 rounded-md transition-colors"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#e5e7eb'
                    }}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Ver AgentSpec no GitHub</span>
                  </a>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>
      </div>

      <style>{sharedKeyframes}</style>
    </section>
  )
})

ClaudeCodeBootcampHeroV2.displayName = 'ClaudeCodeBootcampHeroV2'

export default ClaudeCodeBootcampHeroV2
