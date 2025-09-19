import React, { useState, useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Layers,
  Rocket,
  CheckCircle,
  Star,
  Shield,
  Trophy,
  Clock,
  Users,
  Zap,
  ChevronRight,
  Sparkles,
  Brain,
  Code2,
  Database,
  Cpu,
  Timer,
  TrendingUp,
  Award,
  AlertCircle,
  Gauge,
  BookOpen,
  Calendar
} from 'lucide-react'

// Metallic Gradient Text Component
const MetallicText = memo(({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-white via-purple-400/80 to-white bg-clip-text text-transparent ${className}`}
    style={{
      backgroundSize: '200% 200%',
      animation: 'shimmer 3s ease-in-out infinite',
      textShadow: '0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2)',
      filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))',
      WebkitTextStroke: '0.5px rgba(168, 85, 247, 0.1)'
    }}
  >
    {children}
  </span>
))

// Floating Shape Component with Purple Theme
const FloatingShape = memo(({ size, position, delay = 0 }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className={`absolute ${position} ${size} bg-gradient-to-br from-purple-500/5 to-violet-500/5 rounded-full`} />
    )
  }

  return (
    <motion.div
      className={`absolute ${position} ${size} bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full blur-3xl`}
      animate={{
        y: [0, -30, 0],
        x: [0, 20, -20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  )
})

// Particle System Component
const ParticleSystem = memo(() => {
  const [particles] = useState(() =>
    [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }))
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute bg-purple-400/30 rounded-full"
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
})

// Data Stream Animation
const DataStreams = memo(() => (
  <svg className="absolute inset-0 w-full h-full opacity-20">
    <defs>
      <linearGradient id="stream-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
    {[...Array(5)].map((_, i) => (
      <motion.line
        key={i}
        x1="-100"
        y1={100 + i * 150}
        x2="100%"
        y2={100 + i * 150}
        stroke="url(#stream-gradient)"
        strokeWidth="2"
        initial={{ x: -1000 }}
        animate={{ x: 2000 }}
        transition={{
          duration: 3 + i,
          repeat: Infinity,
          ease: "linear",
          delay: i * 0.5
        }}
      />
    ))}
  </svg>
))

// Circuit Grid Background
const CircuitGrid = memo(() => (
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: `
        linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
        linear-gradient(180deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      animation: 'grid-move 20s linear infinite'
    }}
  />
))

// Neon Button Component
const NeonButton = memo(({ children, primary = false, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`
      px-8 py-4 rounded-lg font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden
      ${primary
        ? 'bg-gradient-to-r from-purple-500 to-violet-500 text-white'
        : 'bg-white/5 backdrop-blur-sm border border-purple-500/30 text-white'
      }
      ${className}
    `}
    whileHover={{
      scale: 1.05,
      boxShadow: primary
        ? "0 0 30px rgba(168, 85, 247, 0.7), 0 0 60px rgba(139, 92, 246, 0.4)"
        : "0 0 20px rgba(168, 85, 247, 0.5)"
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      boxShadow: primary
        ? `0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)`
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
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ChevronRight className="w-5 h-5" />}
    </span>
  </motion.button>
))

// Trust Badge Component
const TrustBadge = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.6, duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 backdrop-blur-sm"
  >
    <Trophy className="w-5 h-5 text-purple-400" />
    <span className="text-white font-oswald font-semibold text-sm">
      #1 Formação em AI Data Engineering do Brasil
    </span>
    <motion.div
      className="w-2 h-2 bg-purple-400 rounded-full"
      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
))

// Value Proposition Component
const ValueProp = memo(({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-3 group"
  >
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
      <Icon className="w-5 h-5 text-purple-400" />
    </div>
    <span className="text-gray-300 font-oswald">{text}</span>
  </motion.div>
))

// Trust Signal Component
const TrustSignal = memo(({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-purple-400" />
    <div>
      <div className="text-white font-bold font-oswald">{value}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  </div>
))

// Main Hero Component
const AIDataEngineerHero = () => {
  const [attendeeCount, setAttendeeCount] = useState(2547)
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 48, minutes: 0 })
  const [showUrgency, setShowUrgency] = useState(true)

  useEffect(() => {
    // Simulate real-time attendee updates
    const interval = setInterval(() => {
      setAttendeeCount(prev => prev + Math.floor(Math.random() * 3))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  // Log to verify component is mounting
  useEffect(() => {
    console.log('AIDataEngineerHero component mounted')
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Simplified Consistent Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #0a0a0a 0%,
              #1a0f2a 50%,
              #0a0a0a 100%)`,
          }}
        />

        {/* Purple gradient orbs */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%),
              radial-gradient(ellipse 600px 300px at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)`,
            filter: 'blur(60px)',
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>


      {/* Character Image - Behind Everything with Webinar Config */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/images/background-domine-autonomous-agents-2.png)',
          backgroundSize: '80% auto',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.15,
          filter: 'brightness(0.7) contrast(1.3)',
          maskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 70% 50%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
          zIndex: 1
        }}
      />

      {/* Purple overlay for blending */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.05) 60%, rgba(168, 85, 247, 0.08) 80%)',
          zIndex: 2
        }}
      />

      {/* Content Container - Reduced padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-12">

        <div className="grid lg:grid-cols-2 gap-12 items-start relative">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative z-20"
          >
            {/* Simplified Status Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-4">
              <div className="relative">
                <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></span>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <span className="text-green-400 text-sm font-medium">Online</span>
              <span className="text-white/60">•</span>
              <Users className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-bold">{attendeeCount.toLocaleString()} alunos matriculados</span>
            </div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-oswald font-bold mb-4">
                <span
                  className="bg-gradient-to-r from-white via-purple-400/80 to-white bg-clip-text text-transparent"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 3s ease-in-out infinite',
                    textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                  }}
                >
                  AI
                </span>
                <span className="text-white"> Data Engineer </span>
                <span
                  className="bg-clip-text text-transparent font-oswald font-bold"
                  style={{
                    display: 'inline-block',
                    paddingBottom: '0.1em',
                    lineHeight: '1.1',
                    backgroundImage: `linear-gradient(90deg,
                      #a855f7 0%,
                      #c084fc 25%,
                      #d8b4fe 50%,
                      #c084fc 75%,
                      #a855f7 100%)`,
                    backgroundSize: '200% 100%',
                    animation: 'subtle-metallic 6s ease-in-out infinite',
                    textShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
                    filter: 'drop-shadow(0 2px 4px rgba(147, 51, 234, 0.2))',
                  }}
                >
                  Bootcamp
                </span>
              </h1>

              {/* Catchy Subheadline */}
              <h2 className="text-xl md:text-2xl mb-3 font-medium">
                <span className="text-purple-400">O futuro chegou:</span>{' '}
                <span className="text-white/90">transforme dados em inteligência com engenharia de última geração</span>
              </h2>

              {/* Description in white */}
              <p className="text-white text-lg leading-relaxed mb-8">
                Seja o arquiteto do futuro dos dados. Domine as ferramentas e técnicas que estão redefinindo como empresas transformam informação em vantagem competitiva através da AI. Construa pipelines inteligentes, automatize com agents autônomos e lidere a revolução dos dados.
              </p>
            </motion.div>

            {/* Enhanced Value Propositions with 3D Effects */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #a855f7 100%)',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: 'perspective(500px) rotateY(-5deg)',
                  }}
                >
                  <Database className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-base">Pipeline de dados com IA integrada do zero ao deploy</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #a855f7 100%)',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: 'perspective(500px) rotateY(-5deg)',
                  }}
                >
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-base">Machine Learning ops e automação com agents autônomos</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #a855f7 100%)',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: 'perspective(500px) rotateY(-5deg)',
                  }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-base">Arquitetura de dados real-time com processamento inteligente</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #a855f7 100%)',
                    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
                    transform: 'perspective(500px) rotateY(-5deg)',
                  }}
                >
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-base">Certificação internacional + portfolio com 10 projetos reais</span>
              </motion.div>
            </div>

            {/* Simple CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <NeonButton primary onClick={() => console.log('Start clicked')}>
                <Sparkles className="w-5 h-5" />
                COMEÇAR AGORA
              </NeonButton>
              <NeonButton onClick={() => console.log('Program clicked')}>
                Ver Programa Completo
              </NeonButton>
            </motion.div>

            {/* Enhanced Trust Signals with Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              <div className="flex items-center gap-3">
                <Gauge className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold font-oswald">3x</div>
                  <div className="text-gray-400 text-sm">Mais Rápido</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold font-oswald">5</div>
                  <div className="text-gray-400 text-sm">2.5k+ alunos</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold font-oswald">100%</div>
                  <div className="text-gray-400 text-sm">Garantia</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <div>
                  <div className="text-white font-bold font-oswald">{attendeeCount.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Matriculados</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-20"
          >

            {/* What You'll Learn Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">O que você vai aprender:</h3>
              </div>

              {/* 5-Day Breakdown */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0">
                    <span className="text-purple-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm mb-1">Dia 1: Fundamentos de AI Data Engineering</div>
                    <div className="text-white/70 text-sm">Arquitetura de dados moderna, Data Lakes vs Warehouses, introdução a pipelines</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0">
                    <span className="text-purple-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm mb-1">Dia 2: Pipeline de Dados com IA</div>
                    <div className="text-white/70 text-sm">Apache Airflow, Kafka, processamento em streaming com machine learning</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0">
                    <span className="text-purple-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm mb-1">Dia 3: Agents Autônomos para Dados</div>
                    <div className="text-white/70 text-sm">LangChain, AutoGPT, construção de agents para ETL inteligente</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0">
                    <span className="text-purple-400 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm mb-1">Dia 4: MLOps e Processamento Real-time</div>
                    <div className="text-white/70 text-sm">Deploy de modelos, monitoramento, Spark Streaming, Apache Flink</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/30 flex-shrink-0">
                    <span className="text-purple-400 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <div className="text-purple-400 font-bold text-sm mb-1">Dia 5: Projeto Final Completo</div>
                    <div className="text-white/70 text-sm">Construa um pipeline end-to-end com IA, deploy em cloud, apresentação do portfolio</div>
                  </div>
                </motion.div>
              </div>

              {/* Bottom badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-purple-500/20">
                <div className="inline-flex items-center gap-1 bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 text-xs font-medium">100% Prático</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-purple-500/20 border border-purple-500/40 rounded-full px-3 py-1">
                  <Trophy className="w-3 h-3 text-purple-400" />
                  <span className="text-purple-400 text-xs font-medium">Certificado</span>
                </div>
                <div className="inline-flex items-center gap-1 bg-blue-500/20 border border-blue-500/40 rounded-full px-3 py-1">
                  <Calendar className="w-3 h-3 text-blue-400" />
                  <span className="text-blue-400 text-xs font-medium">5 Dias Intensivos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes subtle-metallic {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}

export default AIDataEngineerHero