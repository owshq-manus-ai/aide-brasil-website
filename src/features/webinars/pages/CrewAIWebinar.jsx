import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, Users, CheckCircle, Linkedin, Instagram,
  ArrowLeft, ArrowRight, Zap, Target, BookOpen, Brain, Sparkles,
  Code2, Rocket, Shield, TrendingUp, Award, Bot,
  Cpu, GitBranch, Terminal, Layers, Database,
  MessageSquare, ChevronDown, ChevronRight, Lock, Trophy,
  Timer, Heart, AlertCircle, Lightbulb, X, Check, Video, Phone, Mail, User,
  Gauge, Code, Bug
} from 'lucide-react'
import Header from '../../../components/shared/Header'
import { submitToWebhook } from '../../../config/webhooks'
import { webhookEndpoints } from '../../../config/webhook-endpoints'

// Configuration for registration method
const USE_TYPEFORM = false
const TYPEFORM_URL = 'https://your-typeform-url.typeform.com/to/YOUR_FORM_ID'

// Animated Counter Component for Statistics
const AnimatedCounter = ({ value, suffix = '', className }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  // Detect if mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
                   ('ontouchstart' in window) ||
                   (navigator.maxTouchPoints > 0)

  useEffect(() => {
    // For mobile, start animation immediately after mount
    if (isMobile && !hasAnimated) {
      const mobileTimer = setTimeout(() => {
        setIsVisible(true)
        setHasAnimated(true)
      }, 800) // Small delay to ensure component is rendered

      return () => clearTimeout(mobileTimer)
    }

    // Desktop viewport detection
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
        {
          threshold: 0.05, // Very low threshold
          rootMargin: '100px' // Large margin
        }
      )

      observer.observe(element)
      return () => observer.disconnect()
    }
  }, [isMobile, hasAnimated])

  // Animation logic
  useEffect(() => {
    if (isVisible) {
      const numericValue = typeof value === 'string' ? parseInt(value) : value

      // Start animation
      let startTime = null
      const duration = 1500 // 1.5 seconds animation

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(easeOutQuart * numericValue)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(numericValue) // Ensure we reach exact value
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, value])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}

function CrewAIWebinar() {
  const [attendeeCount, setAttendeeCount] = useState(185)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState({ type: '', message: '' })
  const [showSuccess, setShowSuccess] = useState(false)

  const webinar = {
    title: 'Dominando CrewAI Agents',
    subtitle: 'Construa e orquestre sistemas multi-agentes em produção com o framework usado por 60% das Fortune 500',
    date: '5 de Novembro',
    time: '20:00',
    duration: '2 horas',
    platform: 'YouTube Live',
    highlightWord: 'CrewAI',
    gradient: 'from-red-600 to-red-500',
    accentColor: 'red',
    features: [
      { icon: Bot, text: 'Multi-Agentes' },
      { icon: GitBranch, text: 'Orquestração' },
      { icon: Rocket, text: 'Produção' }
    ],
    topics: [
      'Arquitetura de agentes, roles e tasks',
      'Coordenação de múltiplos agentes para tarefas complexas',
      'Integração com GPT-4, Claude, Gemini e modelos locais',
      'Deploy em cloud, self-hosted e ambientes híbridos',
      'Marketing preditivo, análise financeira e automação HR',
      'Quando usar CrewAI vs outras soluções'
    ]
  }

  // Simulate attendee counter
  useEffect(() => {
    const timer = setInterval(() => {
      setAttendeeCount((prev) => {
        const increment = Math.random() > 0.7 ? 1 : 0
        const newCount = prev + increment
        return newCount <= 500 ? newCount : prev
      })
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3')
        .replace(/(\d{2})(\d{4})/, '($1) $2')
    }
    return value
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value)
    setFormData(prev => ({ ...prev, phone: formatted }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage({ type: '', message: '' })

    if (USE_TYPEFORM) {
      const queryParams = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Não informado'
      })

      const typeformUrlWithParams = `${TYPEFORM_URL}?${queryParams.toString()}`
      window.open(typeformUrlWithParams, '_blank')

      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
      setFormData({ name: '', email: '', phone: '', company: '' })
      setIsSubmitting(false)
    } else {
      try {
        const webhookUrl = webhookEndpoints.webinars['dominando-crewai-agents']

        if (!webhookUrl) {
          throw new Error('Webhook URL não configurada')
        }

        const payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          webinar: 'Dominando CrewAI Agents',
          source: 'webinar-page',
          timestamp: new Date().toISOString()
        }

        const result = await submitToWebhook(webhookUrl, payload)

        if (result.success) {
          setShowSuccess(true)
          setTimeout(() => setShowSuccess(false), 3000)
          setFormData({ name: '', email: '', phone: '' })
          setSubmitMessage({ type: 'success', message: 'Inscrição realizada com sucesso!' })
        } else {
          setSubmitMessage({
            type: 'error',
            message: result.message || 'Erro ao realizar inscrição. Tente novamente.'
          })
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        setSubmitMessage({
          type: 'error',
          message: 'Erro ao realizar inscrição. Tente novamente.'
        })
      } finally {
        setIsSubmitting(false)
        setTimeout(() => setSubmitMessage({ type: '', message: '' }), 5000)
      }
    }
  }

  const RegistrationForm = ({ className = '' }) => (
    <div className={`relative bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-500/30 ${className}`}>
      {/* 4 Floating Corner Icons with Animations */}
      <div className="absolute -top-6 -left-6">
        <motion.div
          className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-500/30"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="w-7 h-7 text-white" />
        </motion.div>
      </div>
      <div className="absolute -top-6 -right-6">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <GitBranch className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div className="absolute -bottom-6 -left-6">
        <motion.div
          className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Rocket className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div className="absolute -bottom-6 -right-6">
        <motion.div
          className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/30"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <Brain className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-red-400 mb-2">
          <span>Vagas Limitadas</span>
          <span>37% preenchidas</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "37%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Garanta Sua Vaga Gratuita</h3>

      {!showSuccess ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Fields with Icons */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Seu nome completo"
              required
              className="w-full pl-12 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Seu melhor e-mail"
              required
              className="w-full pl-12 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-red-400 font-medium">WhatsApp</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="(11) 98765-4321"
              required
              className="w-full pl-12 pr-20 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-lg hover:from-red-600 hover:to-red-700 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Quero Minha Vaga Gratuita'}
          </button>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <p className="text-xl font-bold text-white mb-2">Inscrição Confirmada!</p>
          <p className="text-gray-400">Verifique seu email e WhatsApp</p>
        </motion.div>
      )}

      <p className="text-xs text-white/50 text-center mt-4">
        🔒 Seus dados estão seguros. Não enviamos spam.
      </p>
    </div>
  )

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* CORAL/RED BACKGROUND SYSTEM - 3 Layers */}
      <div className="fixed inset-0" style={{ zIndex: -10 }}>
        {/* Layer 1: Deep gradient base */}
        <div
          style={{
            background: `linear-gradient(135deg,
              #000000 0%,
              #0a0a0a 15%,
              #1a0a0a 30%,
              #2a0a0a 45%,
              #1a1a1a 60%,
              #0a0a0a 75%,
              #000000 100%)`,
            position: 'absolute',
            inset: 0
          }}
        />

        {/* Layer 2: Red metallic overlays */}
        <div
          style={{
            background: `
              radial-gradient(ellipse at 20% 30%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 50%, rgba(220, 38, 38, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(185, 28, 28, 0.06) 0%, transparent 50%)
            `,
            position: 'absolute',
            inset: 0
          }}
        />

        {/* Layer 3: Subtle texture overlay */}
        <div
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(239, 68, 68, 0.01) 100px,
              rgba(239, 68, 68, 0.01) 200px
            )`,
            position: 'absolute',
            inset: 0
          }}
        />
      </div>

      {/* Header */}
      <Header />

      {/* Back Button */}
      <div className="relative pt-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/webinars"
            className="inline-flex items-center gap-2 text-white/70 hover:text-red-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Webinários</span>
          </Link>
        </div>
      </div>

      {/* SECTION 1 - HERO SECTION */}
      <section className="relative pt-12 pb-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Online status + attendee counter */}
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2">
                  <div className="relative">
                    <span className="absolute -inset-1 bg-green-500 rounded-full blur opacity-75 animate-pulse"></span>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </div>
                  <span className="text-green-500 text-sm font-bold">Online</span>
                </div>
                <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                  <Users className="w-4 h-4 text-red-500" />
                  <span>{attendeeCount} inscritos</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                Dominando{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg,
                      #ef4444 0%,
                      #dc2626 20%,
                      #b91c1c 40%,
                      #ef4444 60%,
                      #f87171 80%,
                      #fca5a5 100%)`,
                    textShadow: '0 0 60px rgba(239, 68, 68, 0.15)',
                    filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.4))',
                    WebkitTextStroke: '1px transparent',
                  }}
                >
                  {webinar.highlightWord}
                </span>{' '}
                Agents
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl text-red-500 mb-3 font-medium">
                {webinar.subtitle}
              </h2>

              {/* Compelling copy */}
              <p className="text-white text-lg mb-6">
                Descubra como criar sistemas multi-agentes complexos que resolvem problemas empresariais reais.
                Aprenda a orquestrar agentes especializados, implementar workflows automatizados e escalar
                soluções de IA com o framework CrewAI - a escolha de 60% das Fortune 500.
              </p>

              {/* 3 key feature boxes with gradient icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Orquestre múltiplos agentes em uma única solução</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GitBranch className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Framework usado por 60% das Fortune 500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Deploy em produção com casos reais</span>
                </div>
              </div>

              {/* Date/time/platform info */}
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400" />
                  <span>{webinar.time} (Horário de Brasília)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-red-400" />
                  <span>{webinar.platform}</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Forms and What You'll Learn */}
            <div className="space-y-6">
              {/* What You'll Learn Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20"
              >
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-red-400" />
                  O que você vai aprender:
                </h3>
                <ul className="space-y-3">
                  {webinar.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Registration Form */}
              <RegistrationForm />
            </div>
          </div>
        </div>

        {/* Background Agent Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-10">
          <div className="relative w-full h-full">
            <Bot className="absolute top-1/4 right-1/4 w-32 h-32 text-red-500/20" />
            <GitBranch className="absolute bottom-1/4 right-1/3 w-24 h-24 text-red-500/15" />
            <Rocket className="absolute top-1/2 right-1/2 w-28 h-28 text-red-500/10" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - TRANSFORMATION */}
      <section className="py-20 bg-gradient-to-b from-transparent via-red-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="line-through text-white/40">Pare de Perder Tempo</span>
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(135deg,
                    #ef4444 0%,
                    #dc2626 20%,
                    #b91c1c 40%,
                    #ef4444 60%,
                    #f87171 80%,
                    #fca5a5 100%)`,
                  textShadow: '0 0 60px rgba(239, 68, 68, 0.15)',
                  filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.4))',
                }}
              >
                Comece a Orquestrar Multi-Agentes
              </span>
            </h3>
          </motion.div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Before - Problems */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-red-900/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="text-2xl font-bold text-white">Sem CrewAI</h4>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <span className="text-white/90">Agentes isolados</span>
                    <p className="text-white/60 text-sm mt-1">Sem coordenação entre diferentes IA agents</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <span className="text-white/90">Desenvolvimento lento</span>
                    <p className="text-white/60 text-sm mt-1">Semanas para implementar sistemas complexos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <span className="text-white/90">Difícil escalabilidade</span>
                    <p className="text-white/60 text-sm mt-1">Problemas para colocar em produção</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 mt-1" />
                  <div>
                    <span className="text-white/90">Código complexo</span>
                    <p className="text-white/60 text-sm mt-1">Milhares de linhas para tarefas simples</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* After - Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600/20 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/30 relative overflow-hidden"
            >
              {/* Cyberpunk Badge */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
                60% FORTUNE 500
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Com CrewAI</h4>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <span className="text-white/90">Orquestração inteligente</span>
                    <p className="text-white/60 text-sm mt-1">Multi-agentes trabalhando em harmonia</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <span className="text-white/90">5x mais rápido</span>
                    <p className="text-white/60 text-sm mt-1">Horas ao invés de semanas</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <span className="text-white/90">Production-ready</span>
                    <p className="text-white/60 text-sm mt-1">Deploy em cloud ou self-hosted</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <span className="text-white/90">Python simples</span>
                    <p className="text-white/60 text-sm mt-1">Poucas linhas para sistemas complexos</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - BENEFITS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            <span
              style={{
                backgroundImage: `linear-gradient(135deg,
                  #ffffff 0%,
                  #e5e5e5 20%,
                  #cccccc 40%,
                  #ffffff 60%,
                  #f5f5f5 80%,
                  #ffffff 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
            >
              Aprenda na Prática
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: 'Multi-Agent Systems',
                description: 'Crie crews de agentes especializados que trabalham juntos',
                duration: '30min',
                level: 'Iniciante'
              },
              {
                icon: GitBranch,
                title: 'Orquestração Avançada',
                description: 'Coordene tarefas complexas entre múltiplos agentes',
                duration: '45min',
                level: 'Intermediário'
              },
              {
                icon: Rocket,
                title: 'Deploy em Produção',
                description: 'Coloque seus sistemas multi-agentes em produção',
                duration: '30min',
                level: 'Avançado'
              },
              {
                icon: Database,
                title: 'Integração com LLMs',
                description: 'Use GPT-4, Claude, Gemini e modelos locais',
                duration: '20min',
                level: 'Intermediário'
              },
              {
                icon: TrendingUp,
                title: 'Casos Reais',
                description: 'Marketing, finanças e automação empresarial',
                duration: '25min',
                level: 'Todos'
              },
              {
                icon: Shield,
                title: 'Best Practices',
                description: 'Padrões usados por empresas Fortune 500',
                duration: '20min',
                level: 'Avançado'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    {benefit.duration}
                  </span>
                  <span className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-full">
                    {benefit.level}
                  </span>
                </div>

                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - AGENDA */}
      <section className="py-20 bg-gradient-to-b from-transparent via-red-900/5 to-transparent px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            <span
              style={{
                backgroundImage: `linear-gradient(135deg,
                  #ffffff 0%,
                  #e5e5e5 20%,
                  #cccccc 40%,
                  #ffffff 60%,
                  #f5f5f5 80%,
                  #ffffff 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.1)',
              }}
            >
              Agenda Completa
            </span>
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                time: '20:00',
                module: 'Abertura',
                icon: Cpu,
                topic: 'CrewAI Fundamentals',
                description: 'Arquitetura multi-agente, conceitos core e por que Fortune 500 escolhem CrewAI'
              },
              {
                time: '20:20',
                module: 'Módulo 1',
                icon: Bot,
                topic: 'Building Your First Crew',
                description: 'Criação de agentes especializados, definição de roles e delegação de tasks'
              },
              {
                time: '20:40',
                module: 'Módulo 2',
                icon: GitBranch,
                topic: 'Orchestration Mastery',
                description: 'Coordenação avançada, comunicação inter-agentes e resolução de conflitos'
              },
              {
                time: '21:00',
                module: 'Módulo 3',
                icon: Rocket,
                topic: 'Production Deployment',
                description: 'Deploy em cloud, monitoramento, debugging e otimização de performance'
              },
              {
                time: '21:20',
                module: 'Módulo 4',
                icon: TrendingUp,
                topic: 'Real-World Applications',
                description: 'Cases de sucesso: Marketing automation, Financial analysis, Healthcare data'
              },
              {
                time: '21:40',
                module: 'Encerramento',
                icon: MessageSquare,
                topic: 'Q&A + Hands-On',
                description: 'Perguntas ao vivo e demonstração de um projeto completo'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                        {item.time}
                      </span>
                      <span className="text-xs bg-white/10 text-white/60 px-2 py-1 rounded-full">
                        {item.module}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.topic}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - INSTRUCTOR */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-red-500/20 relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 right-10 w-64 h-64">
                <Bot className="w-full h-full text-red-500" />
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Instructor Photo */}
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-red-600/20 to-red-500/20 p-1">
                  <div className="w-full h-full rounded-2xl bg-black/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                    {/* Cyberpunk effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 via-transparent to-red-600/20" />
                    <div className="text-center">
                      <Bot className="w-32 h-32 text-red-500/30 mx-auto mb-4" />
                      <p className="text-white/60 font-bold text-xl">Luan Moreno</p>
                      <p className="text-red-400 text-sm">CrewAI Expert</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructor Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-3xl font-bold text-white">Luan Moreno</h3>
                    <div className="bg-blue-500 rounded-full p-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-red-400 font-medium">Especialista em Multi-Agent Systems</p>
                </div>

                <p className="text-white/70">
                  Pioneiro em sistemas multi-agentes no Brasil, com experiência implementando CrewAI em
                  empresas Fortune 500. Criador de frameworks de orquestração e autor de cursos sobre IA
                  generativa e automação empresarial.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-white/80">+50 projetos CrewAI em produção</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-400" />
                    <span className="text-white/80">+5000 alunos treinados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">CrewAI Certified Expert</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-white/80" />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 hover:border-red-500/50 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 text-white/80" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 - STATISTICS */}
      <section className="py-20 bg-gradient-to-b from-transparent via-red-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: 60, suffix: '%', label: 'Fortune 500 usam CrewAI', color: 'from-green-600 to-emerald-500' },
              { value: 29400, suffix: '+', label: 'Stars no GitHub', color: 'from-blue-600 to-cyan-500' },
              { value: 5, suffix: 'x', label: 'Mais Produtivo', color: 'from-purple-600 to-violet-500' },
              { value: 70, suffix: '%', label: 'Redução de Custos', color: 'from-orange-600 to-amber-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
                <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${Math.min(stat.value, 100)}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/20 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border border-red-500/30 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-6xl text-red-500/20">"</div>
            <p className="text-xl text-white/90 mb-6 relative z-10">
              CrewAI revolucionou nossa forma de trabalhar. Reduzimos o tempo de desenvolvimento
              de sistemas de IA de meses para dias. É o framework mais poderoso que já usamos.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-bold text-white">João Silva</p>
                <p className="text-red-400 text-sm">CTO @ TechCorp Brasil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 - GUARANTEE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-500/30 text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Satisfação <span className="text-green-400">100% Garantida</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Material Exclusivo</h4>
                <p className="text-white/60 text-sm">Templates e código-fonte completo</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Suporte 30 Dias</h4>
                <p className="text-white/60 text-sm">Comunidade exclusiva no Discord</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-bold text-white mb-2">Certificado</h4>
                <p className="text-white/60 text-sm">Certificado AIDE Brasil de conclusão</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            Última Chance de{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(135deg,
                  #ef4444 0%,
                  #dc2626 20%,
                  #b91c1c 40%,
                  #ef4444 60%,
                  #f87171 80%,
                  #fca5a5 100%)`,
                textShadow: '0 0 60px rgba(239, 68, 68, 0.15)',
                filter: 'drop-shadow(0 0 30px rgba(239, 68, 68, 0.4))',
              }}
            >
              Garantir Sua Vaga
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 mb-12"
          >
            Junte-se a centenas de desenvolvedores dominando CrewAI
          </motion.p>

          {/* Final Registration Form */}
          <div className="max-w-md mx-auto">
            <RegistrationForm />
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/60 text-sm">Multi-Agentes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/60 text-sm">Orquestração</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/60 text-sm">Produção</p>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float-slow {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }

          @keyframes float-medium {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(-5deg);
            }
          }

          @keyframes bounce-x {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(5px);
            }
          }

          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }

          .animate-float-medium {
            animation: float-medium 3s ease-in-out infinite;
          }

          .animate-bounce-x {
            animation: bounce-x 1s ease-in-out infinite;
          }
        `
      }} />
    </div>
  )
}

export default CrewAIWebinar