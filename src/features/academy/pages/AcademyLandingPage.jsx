import React, { useState, useEffect, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Brain, Database, Cloud, Code2, GitBranch, Terminal,
  BarChart3, Shield, TrendingUp, Award, Users, Trophy,
  ChevronRight, ArrowRight, CheckCircle, Star, Zap,
  BookOpen, Target, Sparkles, Cpu, Server, Layers
} from 'lucide-react'

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', prefix = '', className }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                   ('ontouchstart' in window) ||
                   (navigator.maxTouchPoints > 0)

  useEffect(() => {
    if (isMobile && !hasAnimated) {
      const mobileTimer = setTimeout(() => {
        setIsVisible(true)
        setHasAnimated(true)
      }, 800)
      return () => clearTimeout(mobileTimer)
    }

    if (!isMobile) {
      const element = ref.current
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setIsVisible(true)
              setHasAnimated(true)
            }
          })
        },
        { threshold: 0.05, rootMargin: '100px' }
      )

      observer.observe(element)
      return () => observer.disconnect()
    }
  }, [isMobile, hasAnimated])

  useEffect(() => {
    if (isVisible) {
      const numericValue = typeof value === 'string' ? parseInt(value.replace(/\D/g, '')) : value
      let startTime = null
      const duration = 1500

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * numericValue)
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(numericValue)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, value])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

// Metallic Blue Text Component
const MetallicText = ({ children, className = "" }) => {
  return (
    <span
      className={`
        bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
        text-transparent bg-clip-text
        animate-shimmer bg-[length:200%_100%]
        font-bold
        ${className}
      `}
      style={{
        textShadow: '0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)',
        WebkitTextStroke: '0.3px rgba(59, 130, 246, 0.1)'
      }}
    >
      {children}
    </span>
  )
}

// Cycling Words Component with Blue Theme
const CyclingWords = () => {
  const words = [
    'Data Engineering',
    'Analytics Engineering',
    'Data Platform',
    'GenAI',
    'LLMOps',
    'Data & Analytics',
    'Batch Processing',
    'Real-time Streaming',
    'Data Lakehouse'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text font-bold"
        style={{
          textShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
        }}
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}

// Custom Header
const CustomHeader = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#030303]/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">← Voltar</Link>
          <div className="flex items-center gap-6">
            <Link to="/academy" className="text-white text-sm">Academy</Link>
            <Link to="/webinars" className="text-gray-400 hover:text-white transition-colors text-sm">Webinars</Link>
            <Link to="/bootcamp/ai-data-engineer" className="text-gray-400 hover:text-white transition-colors text-sm">Bootcamp</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

const AcademyLandingPage = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      <CustomHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Modern Geometric Background Pattern */}
        <div className="absolute inset-0">
          {/* Animated gradient mesh background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `
            }}
          />

          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          />

          {/* Diagonal lines pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(45deg, transparent 48%, rgba(59, 130, 246, 0.1) 49%, rgba(59, 130, 246, 0.1) 51%, transparent 52%)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full border border-blue-500/10 rounded-lg transform rotate-45" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="w-full h-full border border-cyan-500/10 rounded-lg transform rotate-45" />
          </motion.div>
        </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 text-center pt-24">

          {/* Logo and Academy Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <img
              src="/images/logos/engenharia-logo-branca.png"
              alt="Engenharia de Dados Academy"
              className="h-12 sm:h-14"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))'
              }}
            />
            <span className="text-xl sm:text-2xl font-medium text-gray-200">
              Engenharia de Dados Academy
            </span>
          </motion.div>

          {/* Main Title with two-tone effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-white mb-2">
                Construa o futuro com
              </span>
              <span className="block">
                <MetallicText>
                  dados e inteligência
                </MetallicText>
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-12 font-light max-w-3xl mx-auto"
          >
            A plataforma definitiva para dominar as tecnologias que estão transformando o mercado de dados
          </motion.p>

          {/* Cycling Words Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl flex flex-wrap justify-center items-baseline gap-2">
              <span className="text-gray-300">Especialize-se em</span>
              <div className="inline-block min-w-[300px] text-center">
                <CyclingWords />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Junte-se a mais de <span className="text-blue-400 font-semibold">20 mil profissionais</span> que estão
            revolucionando suas carreiras com nossa formação completa em
            <span className="text-cyan-400 font-semibold"> Engenharia de Dados</span> e
            <span className="text-cyan-400 font-semibold"> IA Generativa</span>.
            Aprenda com quem está no mercado, pratique com projetos reais e faça parte da elite dos dados.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              className="group px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500
                       rounded-lg font-medium text-base transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
                       transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Começar Jornada
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button
              className="px-8 py-3.5 border border-blue-500/30 rounded-lg font-medium text-base
                       bg-transparent hover:bg-blue-500/10 transition-all duration-300
                       w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Explorar Trilhas
              </span>
            </button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <AnimatedCounter value={20000} suffix="+" className="text-blue-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Profissionais</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <AnimatedCounter value={500} suffix="+" className="text-cyan-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Horas de Conteúdo</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <AnimatedCounter value={50} suffix="+" className="text-blue-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Trilhas Especializadas</div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold mb-2">
                <AnimatedCounter value={98} suffix="%" className="text-cyan-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-500">Satisfação</div>
            </div>
          </motion.div>
        </div>

        {/* Floating tech icons - subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-10 opacity-10"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Database className="w-12 h-12 text-blue-400" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-10 opacity-10"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Brain className="w-12 h-12 text-cyan-400" />
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-20 opacity-10"
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Cloud className="w-10 h-10 text-blue-400" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#030303] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <MetallicText>
                Trilhas de Especialização
              </MetallicText>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Desenvolva competências em alta demanda no mercado com trilhas práticas e orientadas por especialistas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Data Engineering Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl p-8 border border-white/10
                       hover:border-blue-500/30 transition-all duration-300 group"
            >
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Modern Data Stack</h3>
              <p className="text-gray-400 mb-6">
                Arquiteturas modernas de dados com ferramentas líderes de mercado
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  Apache Spark & Databricks
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  Airflow & DBT
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  Data Lakehouse Architecture
                </li>
              </ul>
              <button className="w-full py-2.5 border border-blue-500/30 rounded-lg
                             hover:bg-blue-500/10 transition-all duration-300
                             group-hover:border-blue-500/50 text-sm font-medium">
                Explorar Trilha
                <ChevronRight className="inline w-4 h-4 ml-1" />
              </button>
            </motion.div>

            {/* AI & GenAI Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl p-8 border border-white/10
                       hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">IA Generativa & LLMs</h3>
              <p className="text-gray-400 mb-6">
                Construa aplicações inteligentes com as últimas tecnologias de IA
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  LangChain & Vector DBs
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  Fine-tuning & RAG
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                  LLMOps & Deployment
                </li>
              </ul>
              <button className="w-full py-2.5 border border-cyan-500/30 rounded-lg
                             hover:bg-cyan-500/10 transition-all duration-300
                             group-hover:border-cyan-500/50 text-sm font-medium">
                Explorar Trilha
                <ChevronRight className="inline w-4 h-4 ml-1" />
              </button>
            </motion.div>

            {/* Analytics Engineering Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-b from-white/[0.03] to-transparent rounded-xl p-8 border border-white/10
                       hover:border-blue-500/30 transition-all duration-300 group"
            >
              <BarChart3 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analytics Engineering</h3>
              <p className="text-gray-400 mb-6">
                Transforme dados em insights acionáveis para o negócio
              </p>
              <ul className="space-y-2 mb-6">
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  SQL Avançado & Modelagem
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  Semantic Layer & Metrics
                </li>
                <li className="text-sm text-gray-300 flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                  DataOps & Observability
                </li>
              </ul>
              <button className="w-full py-2.5 border border-blue-500/30 rounded-lg
                             hover:bg-blue-500/10 transition-all duration-300
                             group-hover:border-blue-500/50 text-sm font-medium">
                Explorar Trilha
                <ChevronRight className="inline w-4 h-4 ml-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#030303]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Comece sua transformação hoje
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Acesso gratuito a centenas de recursos, projetos práticos e uma comunidade vibrante de profissionais
            </p>
            <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500
                           rounded-lg font-medium text-lg transition-all duration-300
                           hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
                           transform hover:scale-105">
              Criar Conta Gratuita
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AcademyLandingPage