import React, { memo, useCallback, useMemo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Terminal,
  Play,
  Calendar,
  Clock,
  Video,
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
  Command,
  CornerDownLeft
} from 'lucide-react'
import { V2_COLORS } from './v2/theme'

// ═══════════════════════════════════════════════════════════════════════════════
// THEME - Cinematic Terminal Studio
// ═══════════════════════════════════════════════════════════════════════════════
const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

// ═══════════════════════════════════════════════════════════════════════════════
// SHARED STYLES - CSS Keyframes
// ═══════════════════════════════════════════════════════════════════════════════
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes terminal-cursor {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`

// ═══════════════════════════════════════════════════════════════════════════════
// TYPING EFFECT HOOK - Natural typing simulation
// ═══════════════════════════════════════════════════════════════════════════════
const useTypingEffect = (texts, typingSpeed = 50, pauseBetween = 2500) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
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
  }, [displayedText, currentIndex, isTyping, texts, typingSpeed, pauseBetween])

  return { displayedText, isTyping }
}

// ═══════════════════════════════════════════════════════════════════════════════
// TERMINAL WINDOW COMPONENT - macOS-style with live typing
// ═══════════════════════════════════════════════════════════════════════════════
const TerminalWindow = memo(({ isMobile }) => {
  const commands = useMemo(() => [
    'claude "Escreva a spec de invoice-intelligence"',
    'claude "Gere pipeline BigQuery + Hex"',
    'claude "Terraform: GCS + Cloud Run"',
    'claude "Adicione observabilidade Langfuse"',
  ], [])

  const { displayedText, isTyping } = useTypingEffect(commands, 40, 2800)

  const outputLines = useMemo(() => [
    { type: 'comment', text: '# Specs carregadas com critérios de aceite' },
    { type: 'success', text: '✓ Arquitetura multi-cloud definida' },
    { type: 'success', text: '✓ Pipeline GenAI em produção' },
    { type: 'info', text: '→ Testes e runbooks prontos' },
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
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-30 hidden sm:block"
        style={{ background: `radial-gradient(circle, ${CORAL.glow} 0%, transparent 70%)` }}
      />

      {/* Terminal container */}
      <div
        className="relative rounded-xl overflow-hidden"
        style={{
          backgroundColor: TERMINAL.bg,
          border: `1px solid ${TERMINAL.border}`,
          boxShadow: `0 30px 60px rgba(0, 0, 0, 0.55), 0 0 0 1px ${TERMINAL.border}`
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5"
          style={{ backgroundColor: TERMINAL.headerBg, borderBottom: `1px solid ${TERMINAL.border}` }}
        >
          {/* Traffic lights */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:brightness-110 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:brightness-110 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:brightness-110 transition-all cursor-pointer" />
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
            <span>claude-4-opus</span>
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

// ═══════════════════════════════════════════════════════════════════════════════
// BENTO CARD - Glass card with glow effect
// ═══════════════════════════════════════════════════════════════════════════════
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
    <div className="relative h-full rounded-xl p-4 sm:p-5 backdrop-blur-sm overflow-hidden v2-card">
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

// ═══════════════════════════════════════════════════════════════════════════════
// NEON BUTTON - Matching V1 style
// ═══════════════════════════════════════════════════════════════════════════════
const NeonButton = memo(({ children, primary = false, onClick, className = '', isMobile = false }) => (
  <motion.button
    onClick={onClick}
    className={`
      px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden text-sm sm:text-base
      ${primary ? 'text-white' : 'text-white/80 backdrop-blur-sm'}
      ${className}
    `}
    whileHover={{ y: -1, boxShadow: primary ? `0 20px 40px ${CORAL.glow}` : `0 12px 24px rgba(0,0,0,0.35)` }}
    whileTap={{ scale: 0.98 }}
    style={{
      background: primary
        ? `linear-gradient(135deg, ${CORAL.primary} 0%, ${CORAL.dark} 100%)`
        : 'rgba(255,255,255,0.03)',
      border: primary ? `1px solid ${CORAL.primary}80` : `1px solid ${NEUTRAL.border}`,
      boxShadow: primary ? `0 18px 45px ${CORAL.glow}` : undefined
    }}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ChevronRight className="w-4 h-4" />}
    </span>
  </motion.button>
))
NeonButton.displayName = 'NeonButton'

// ═══════════════════════════════════════════════════════════════════════════════
// STATUS BADGE - Glass pill inspired by shadcn badge patterns
// ═══════════════════════════════════════════════════════════════════════════════
const StatusBadge = memo(({ icon: Icon, text, color = CORAL.primary, pulse = false }) => (
  <div
    className="relative inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium border backdrop-blur-md overflow-hidden"
    style={{
      background: `linear-gradient(145deg, ${color}20 0%, rgba(255,255,255,0.03) 100%)`,
      borderColor: `${color}55`,
      color,
      boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 20px rgba(0,0,0,0.25)`
    }}
  >
    <div
      className="absolute inset-0 opacity-50"
      style={{ background: `linear-gradient(90deg, transparent 0%, ${color}20 45%, transparent 100%)` }}
    />
    <span className="relative z-10 flex items-center gap-2">
      {pulse ? (
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ boxShadow: [`0 0 0 0 ${color}75`, `0 0 0 5px ${color}00`] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        />
      ) : (
        <Icon className="w-3.5 h-3.5" />
      )}
      <span>{text}</span>
    </span>
  </div>
))
StatusBadge.displayName = 'StatusBadge'

const MetaTag = memo(({ icon: Icon, title, subtitle, color }) => (
  <div
    className="relative rounded-xl px-3 py-2.5 border backdrop-blur-sm overflow-hidden"
    style={{
      background: `linear-gradient(160deg, ${color}1f 0%, rgba(255,255,255,0.02) 100%)`,
      borderColor: `${color}50`
    }}
  >
    <div
      className="absolute inset-0 opacity-40"
      style={{ background: `linear-gradient(120deg, transparent 0%, ${color}25 40%, transparent 100%)` }}
    />
    <div className="relative z-10 flex items-start gap-2.5">
      <div
        className="w-7 h-7 rounded-md flex items-center justify-center mt-0.5"
        style={{ backgroundColor: `${color}25`, border: `1px solid ${color}45` }}
      >
        <Icon className="w-3.5 h-3.5" style={{ color }} />
      </div>
      <div>
        <p className="text-xs font-semibold text-white leading-tight">{title}</p>
        <p className="text-[10px] text-white/55 leading-tight mt-0.5">{subtitle}</p>
      </div>
    </div>
  </div>
))
MetaTag.displayName = 'MetaTag'

// ═══════════════════════════════════════════════════════════════════════════════
// LEARNING ITEM - Checklist style
// ═══════════════════════════════════════════════════════════════════════════════
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

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN HERO COMPONENT V2
// ═══════════════════════════════════════════════════════════════════════════════
const ClaudeCodeBootcampHeroV2 = memo(() => {
  const spotsLeft = 210
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
    { text: 'Spec completa: contexto, padrões e critérios', icon: Terminal },
    { text: 'Orquestração de MCP + SubAgents na prática', icon: Brain },
    { text: 'Arquitetura multi-cloud com Adapter Pattern', icon: Server },
    { text: 'Pipeline GenAI: LLM → BigQuery → Hex', icon: Cpu },
    { text: 'Observabilidade com Langfuse (custo/qualidade)', icon: Gauge },
    { text: 'CI/CD e qualidade com GitHub Actions', icon: Rocket }
  ], [])

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════════════ */}
      {/* BACKGROUND - Cinematic Studio                                      */}
      {/* ═══════════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 v2-noise">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #07090E 0%, #0B0F18 48%, #07090E 100%)'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 900px 520px at 80% 15%, ${CORAL.subtle} 0%, transparent 60%),
              radial-gradient(ellipse 700px 420px at 15% 85%, rgba(70, 199, 255, 0.12) 0%, transparent 55%),
              radial-gradient(ellipse 420px 260px at 50% 10%, rgba(126, 231, 135, 0.12) 0%, transparent 60%)
            `
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '90px 90px'
          }}
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
          <StatusBadge icon={Users} text={`${spotsLeft} Pessoas`} color={CORAL.light} />
          <StatusBadge icon={Bot} text="Projeto Real" color={TERMINAL.purple} />
          <StatusBadge icon={Clock} text="12h Implementação" color={TERMINAL.green} />
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
                <span style={{ color: CORAL.light }}>Saia com um sistema real</span>
                {' '}
                <span className="text-white font-bold">em produção</span>
                {' '}
                <span className="text-white/60">— pipeline GenAI, observabilidade e CI/CD prontos</span>
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
                <span className="hidden sm:inline">GARANTIR MEU LUGAR</span>
                <span className="sm:hidden">GARANTIR LUGAR</span>
              </NeonButton>
              <NeonButton onClick={handleJourneyClick} isMobile={isMobile}>
                <Play className="w-4 h-4" />
                VER ENTREGAS
              </NeonButton>
            </motion.div>

            {/* Presented by */}
            <motion.div
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="flex items-center gap-3 pt-4 sm:pt-6"
            >
              <span className="text-white/40 text-xs uppercase tracking-widest">Apresentado por</span>
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

              {/* Date/Time Card - Enhanced */}
              <BentoCard delay={0.35} isMobile={isMobile}>
                <div className="space-y-2.5">
                  <MetaTag
                    icon={Calendar}
                    title="28-31 Jan 2026"
                    subtitle="Quarta a Sábado"
                    color={TERMINAL.blue}
                  />
                  <MetaTag
                    icon={Clock}
                    title="20:00 BRT • 4 noites"
                    subtitle="3h por sessão = 12h total"
                    color={TERMINAL.green}
                  />
                  <MetaTag
                    icon={Video}
                    title="Online + Replay"
                    subtitle="Acesso por 12 meses"
                    color={TERMINAL.purple}
                  />
                  {/* Guarantee badge */}
                  <div
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg mt-2 border"
                    style={{
                      background: `linear-gradient(145deg, ${TERMINAL.green}1f 0%, rgba(255,255,255,0.02) 100%)`,
                      borderColor: `${TERMINAL.green}55`
                    }}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" style={{ color: TERMINAL.green }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: TERMINAL.green }}>
                      7 dias de garantia
                    </span>
                  </div>
                </div>
              </BentoCard>

              {/* Methodology Card - Enhanced */}
              <BentoCard delay={0.4} isMobile={isMobile}>
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">Metodologia</div>
                    <div
                      className="text-lg sm:text-xl font-bold font-mono leading-tight mb-2"
                      style={{ color: CORAL.primary }}
                    >
                      Spec-Driven
                      <br />
                      Delivery
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Sem prompt solto. Specs, critérios e execução previsível.
                    </p>
                  </div>
                  {/* Method tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span
                      className="text-[10px] px-2 py-1 rounded"
                      style={{ backgroundColor: `${CORAL.primary}15`, color: CORAL.light }}
                    >
                      Specs
                    </span>
                    <span
                      className="text-[10px] px-2 py-1 rounded"
                      style={{ backgroundColor: `${TERMINAL.blue}15`, color: TERMINAL.blue }}
                    >
                      MCP-First
                    </span>
                    <span
                      className="text-[10px] px-2 py-1 rounded"
                      style={{ backgroundColor: `${TERMINAL.green}15`, color: TERMINAL.green }}
                    >
                      Production
                    </span>
                  </div>
                </div>
              </BentoCard>
            </div>

            {/* Proof Artifact */}
            <BentoCard delay={0.5} isMobile={isMobile}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-white/40">Snapshot</div>
                  <div className="text-base font-bold text-white">Production Metrics</div>
                </div>
                <div
                  className="text-[10px] px-2 py-1 rounded"
                  style={{ backgroundColor: `${TERMINAL.green}15`, color: TERMINAL.green }}
                >
                  SLA OK
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="space-y-1">
                  <div className="text-white/50">Latência p95</div>
                  <div className="text-white text-lg font-bold">1.7s</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/50">Custo /1k</div>
                  <div className="text-white text-lg font-bold">R$ 2,90</div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/50">Cobertura</div>
                  <div className="text-white text-lg font-bold">92%</div>
                </div>
              </div>
              <div className="mt-3 flex items-end gap-1 h-10">
                {[20, 28, 18, 32, 26, 36, 24, 30].map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${value}px`,
                      background: `linear-gradient(180deg, ${TERMINAL.blue}, ${CORAL.primary})`,
                      opacity: 0.8
                    }}
                  />
                ))}
              </div>
              <div className="mt-2 text-[10px] text-white/40">
                Pipeline invoice-intelligence rodando em produção
              </div>
            </BentoCard>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{sharedStyles}</style>
    </section>
  )
})

ClaudeCodeBootcampHeroV2.displayName = 'ClaudeCodeBootcampHeroV2'

export default ClaudeCodeBootcampHeroV2
