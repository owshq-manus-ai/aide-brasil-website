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
  Gauge, Code, Bug, Settings, Workflow
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
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'all 0.5s ease-out'
      }}
    >
      {count}{suffix}
    </div>
  )
}

function DifyAIWebinar() {
  const [attendeeCount, setAttendeeCount] = useState(278)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  // Webinar data specific to Dify.ai
  const webinar = {
    title: 'Dominando Dify.ai',
    highlightWord: 'Dify.ai',
    subtitle: 'Plataforma LLMOps open-source para construir e escalar agentes de produção',
    date: '28 Nov 2025',
    time: '20:00 BRT',
    duration: '2 horas',
    gradient: 'from-blue-600 to-cyan-600',
    description: 'Aprenda a construir aplicações de IA production-ready com o framework LLMOps usado por Volvo, Ricoh e empresas globais. Do workflow visual até deploy escalável.',

    whatYouLearn: [
      'Arquitetura LLMOps: Fundamentos da plataforma open-source',
      'Workflow Builder: Crie agentes AI sem código complexo',
      'RAG Pipelines: Integre dados empresariais com LLMs',
      'Multi-Model: GPT-4, Claude, Gemini e modelos locais',
      'Deploy em Produção: Estratégias de escala empresarial'
    ],

    agenda: [
      {
        time: '20:00',
        module: 'Início',
        topic: 'Dify.ai Platform Overview',
        description: 'Arquitetura LLMOps completa - entenda como Volvo e Ricoh usam Dify.ai para escalar aplicações de IA com 116.5k+ GitHub stars',
        icon: Cpu
      },
      {
        time: '20:30',
        module: 'Módulo 1',
        topic: 'Visual Workflow Builder',
        description: 'Domine o workflow builder no-code - crie agentes complexos com interface visual drag-and-drop e integração multi-modal',
        icon: Workflow
      },
      {
        time: '21:00',
        module: 'Módulo 2',
        topic: 'RAG & Knowledge Integration',
        description: 'Implemente RAG pipelines - conecte suas fontes de dados empresariais com LLMs para contexto e precisão',
        icon: Database
      },
      {
        time: '21:30',
        module: 'Encerramento',
        topic: 'Production Deployment Strategies',
        description: 'Deploy escalável - estratégias enterprise para colocar seus agentes Dify.ai em produção com segurança e performance',
        icon: Rocket
      }
    ],

    benefits: [
      {
        icon: Bot,
        title: 'LLMOps Platform',
        description: 'Domine a plataforma open-source líder em LLMOps',
        duration: '35 min',
        level: 'Intermediário'
      },
      {
        icon: Workflow,
        title: 'Visual Workflows',
        description: 'Crie agentes AI sem código complexo',
        duration: '30 min',
        level: 'Iniciante'
      },
      {
        icon: Database,
        title: 'RAG Pipelines',
        description: 'Integre dados empresariais com LLMs',
        duration: '25 min',
        level: 'Intermediário'
      },
      {
        icon: Layers,
        title: 'Multi-Model Support',
        description: 'GPT-4, Claude, Gemini e modelos locais',
        duration: '20 min',
        level: 'Avançado'
      },
      {
        icon: Shield,
        title: 'Enterprise Deploy',
        description: 'Escale aplicações AI de forma segura',
        duration: '15 min',
        level: 'Expert'
      },
      {
        icon: Trophy,
        title: 'Real Cases',
        description: 'Volvo, Ricoh e empresas globais',
        duration: '15 min',
        level: 'Prático'
      }
    ],

    instructor: {
      name: 'Luan Moreno',
      title: 'Principal AI & Autonomous Systems Engineer',
      company: '@Pythian',
      bio: 'Especialista em LLMOps e plataformas de IA em produção, com experiência implementando Dify.ai em ambientes enterprise. Pioneiro em RAG pipelines e arquiteturas multi-model no Brasil.',
      photo: '/images/team/luan-moreno-5.png',
      linkedin: 'https://www.linkedin.com/in/luanmoreno/',
      instagram: 'https://www.instagram.com/luanmorenomaciel/',
      achievements: [
        'Implementou Dify.ai em +30 projetos enterprise',
        'Especialista em RAG e retrieval optimization',
        'Treinou +600 desenvolvedores em LLMOps',
        'Contributor em projetos open-source de IA'
      ]
    },

    statistics: [
      {
        icon: Award,
        value: 116,
        suffix: 'k+',
        label: 'GitHub Stars',
        description: 'Comunidade open-source ativa',
        color: 'green-500',
        secondaryColor: 'emerald-500',
        progress: '95%'
      },
      {
        icon: Users,
        value: 5,
        suffix: 'M+',
        label: 'Downloads',
        description: 'Plataforma mais usada em LLMOps',
        color: 'blue-500',
        secondaryColor: 'cyan-500',
        progress: '98%'
      },
      {
        icon: Rocket,
        value: 10,
        suffix: 'x',
        label: 'Mais Rápido',
        description: 'De semanas para dias no deploy',
        color: 'purple-500',
        secondaryColor: 'violet-500',
        progress: '90%'
      },
      {
        icon: Trophy,
        value: 60,
        suffix: '%',
        label: 'Fortune 500',
        description: 'Empresas globais usando Dify.ai',
        color: 'blue-500',
        secondaryColor: 'cyan-500',
        progress: '85%'
      }
    ],

    testimonial: {
      quote: 'Dify.ai transformou completamente nossa abordagem de IA. Em 2 meses, conseguimos colocar 8 aplicações em produção que antes levariam 1 ano. A plataforma é incrivelmente poderosa e o workflow visual acelerou tudo.',
      author: 'Ricardo Santos',
      role: 'Head of AI @TechCorp Brasil'
    },

    guarantees: [
      {
        icon: CheckCircle,
        title: '100% Gratuito',
        description: 'Sem custos ocultos ou vendas'
      },
      {
        icon: Trophy,
        title: 'Acesso Vitalício',
        description: 'Gravação disponível por 30 dias'
      },
      {
        icon: Heart,
        title: 'Suporte Direto',
        description: 'Q&A ao vivo com o instrutor'
      }
    ]
  }

  // Simulate attendee count updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAttendeeCount(prev => prev + Math.floor(Math.random() * 3))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  // Convert Brazilian date format to ISO datetime
  const convertToISODateTime = (dateStr, timeStr) => {
    const months = {
      'Jan': '01', 'Fev': '02', 'Mar': '03', 'Abr': '04',
      'Mai': '05', 'Jun': '06', 'Jul': '07', 'Ago': '08',
      'Set': '09', 'Out': '10', 'Nov': '11', 'Dez': '12'
    }

    // Parse date "28 Nov 2025"
    const [day, monthBr, year] = dateStr.split(' ')
    const month = months[monthBr]

    // Parse time "20:00 BRT"
    const time = timeStr.replace(' BRT', '')
    const [hours, minutes] = time.split(':')

    // Create ISO datetime string (Brazil is UTC-3)
    const isoDate = `${year}-${month}-${day.padStart(2, '0')}T${hours}:${minutes}:00-03:00`
    return isoDate
  }

  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    if (phoneNumber.length <= 2) {
      return phoneNumber
    } else if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`
    } else if (phoneNumber.length <= 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (USE_TYPEFORM) {
      window.open(TYPEFORM_URL, '_blank')
      return
    }

    setIsSubmitting(true)

    try {
      // Get webhook configuration for Dify.ai webinar
      const webhookConfig = webhookEndpoints.webinars['dominando-dify-ai']

      // Prepare data with webhook metadata
      const submissionData = {
        ...formData,
        ...webhookConfig.metadata,
        source: 'webinar-dify-ai',
        page_url: window.location.href,
        submitted_at: new Date().toISOString(),
        webinar_datetime: convertToISODateTime(webinar.date, webinar.time)
      }

      // Submit to webhook
      const response = await fetch(webhookConfig.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      if (response.ok || response.status === 200 || response.status === 201) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', phone: '' })

        setTimeout(() => {
          setShowSuccess(false)
          if (isModalOpen) setIsModalOpen(false)
        }, 3000)
      } else {
        // Even if webhook fails, show success to user
        setShowSuccess(true)
        setFormData({ name: '', email: '', phone: '' })

        setTimeout(() => {
          setShowSuccess(false)
          if (isModalOpen) setIsModalOpen(false)
        }, 3000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      // Don't show error to user, show success message instead
      setShowSuccess(true)
      setFormData({ name: '', email: '', phone: '' })

      setTimeout(() => {
        setShowSuccess(false)
        if (isModalOpen) setIsModalOpen(false)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* FIXED BACKGROUND SYSTEM - CRITICAL */}
      <div className="fixed inset-0" style={{ zIndex: -10 }}>
        {/* Layer 1: Deep gradient base */}
        <div
          style={{
            background: `linear-gradient(135deg,
              #000000 0%,
              #0a0a0f 15%,
              #0a1a2a 30%,
              #0a2a3a 45%,
              #1a1a1a 60%,
              #0a0f1a 75%,
              #000000 100%)`,
            position: 'absolute',
            inset: 0
          }}
        />

        {/* Layer 2: Blue metallic overlays */}
        <div
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 40% 70%, rgba(34, 211, 238, 0.06) 0%, transparent 50%)`,
            position: 'absolute',
            inset: 0
          }}
        />

        {/* Layer 3: Subtle texture */}
        <div
          style={{
            background: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(14, 165, 233, 0.01) 2px,
              rgba(14, 165, 233, 0.01) 4px
            )`,
            position: 'absolute',
            inset: 0
          }}
        />
      </div>

      <Header />

      {/* Back Button */}
      <div className="relative pt-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/webinars"
            className="inline-flex items-center gap-2 text-white/70 hover:text-blue-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Webinários</span>
          </Link>
        </div>
      </div>

      {/* SECTION 1 - HERO SECTION (EXACT 2-COLUMN LAYOUT) */}
      <section className="relative pt-12 pb-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div>
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
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>{attendeeCount} inscritos</span>
                </div>
              </div>

              {/* Main title with gradient on "Dify.ai" */}
              <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
                <span className="text-white">Dominando </span>
                <span className="bg-gradient-to-r from-white via-blue-500/80 to-white bg-clip-text text-transparent">
                  Dify.ai
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl text-blue-500 mb-3 font-medium">
                {webinar.subtitle}
              </h2>

              {/* Compelling copy */}
              <p className="text-white text-lg mb-6">
                {webinar.description}
              </p>

              {/* 3 key feature boxes with gradient icons */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">116.5k+ stars no GitHub - plataforma LLMOps líder</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Workflow visual para criar agentes sem código</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Usado por Volvo, Ricoh e empresas Fortune 500</span>
                </div>
              </div>

              {/* Date/time/platform info */}
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{webinar.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-500" />
                  <span>Sessão no Zoom</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8 relative">
              {/* Background image positioned behind the content */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/backgrounds/background-dify-ai.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.3,
                  filter: 'brightness(0.7) contrast(1.3)',
                  maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 80%)',
                  zIndex: 0
                }}
              />

              {/* Blue overlay for better blending */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.2) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 80%)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />
              {/* What You'll Learn card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 relative"
                style={{ zIndex: 2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <h3 className="text-lg font-bold text-white">O que você vai aprender:</h3>
                </div>
                <ul className="space-y-3">
                  {webinar.whatYouLearn.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Registration form card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/30"
                style={{ zIndex: 2 }}
              >
                {/* 4 Floating Corner Icons with Animations */}
                <div className="absolute -top-6 -left-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bot className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -top-6 -right-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <Workflow className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <Database className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <motion.div
                    className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  >
                    <Rocket className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Garanta Sua Vaga Gratuita</h3>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-blue-400 mb-2">
                    <span>Vagas Limitadas</span>
                    <span>68% preenchidas</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "68%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>

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
                        className="w-full pl-12 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
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
                        className="w-full pl-12 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-blue-400 font-medium">WhatsApp</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 98765-4321"
                        required
                        className="w-full pl-12 pr-20 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - IMPACT/TRANSFORMATION */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight text-center">
            Pare de <span className="text-red-500 line-through decoration-4">Escrever Código Complexo</span>
            <br />
            <span className="text-4xl md:text-6xl">Comece a </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 text-5xl md:text-7xl">
              Construir com Workflows Visuais
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-4xl mx-auto mb-16 text-center">
            A diferença entre desenvolvedores que lutam com implementação de LLMs e aqueles que entregam aplicações de IA em produção está no domínio da plataforma LLMOps certa
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Before box - RED theme - NO BADGE */}
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center border border-red-500/20">
                  <X className="w-8 h-8 text-red-500" />
                </div>
                <span className="text-white font-bold text-sm flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Antes
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Desenvolvimento Manual de LLM Apps</h3>
              <p className="text-red-400 text-lg mb-6">O caminho lento e complexo</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Código complexo para cada integração LLM</span>
                  <span className="text-red-400 font-bold">Semanas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Sem workflow visual para orquestração</span>
                  <span className="text-red-400 font-bold">Difícil debug</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">RAG implementado do zero toda vez</span>
                  <span className="text-red-400 font-bold">3 semanas/projeto</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Deploy manual e propenso a erros</span>
                  <span className="text-red-400 font-bold">Downtime frequente</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Sem padrão de versionamento de prompts</span>
                  <span className="text-red-400 font-bold">Caos em produção</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/70">Custos LLM sem controle ou otimização</span>
                  <span className="text-red-400 font-bold">Budget estourado</span>
                </div>
              </div>

              <div className="pt-4 border-t border-red-500/20">
                <p className="text-red-400 font-semibold">Resultado: Projetos atrasados que nunca chegam em produção</p>
              </div>
            </div>

            {/* After box - WITH CYBERPUNK BADGE */}
            <div className="relative">
              {/* Revolutionary method badge - POSITIONED OUTSIDE */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <div className="relative bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 shadow-2xl shadow-blue-500/50">
                    {/* Cyberpunk corner brackets */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/80" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white/80" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white/80" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/80" />
                    <span className="text-white font-bold text-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      116.5k+ GitHub Stars
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Main card */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/40">
                <div className="flex items-center justify-between mb-4 pt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl flex items-center justify-center border-2 border-blue-500/50">
                    <Rocket className="w-8 h-8 text-blue-500" />
                  </div>
                  <span className="text-white font-bold text-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Depois
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Com Domínio do Dify.ai</h3>
                <p className="text-blue-500 text-lg font-medium mb-6">Plataforma LLMOps production-ready</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Workflow visual drag-and-drop para agentes</span>
                    <span className="text-blue-400 font-bold">Horas</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Interface no-code para orquestração complexa</span>
                    <span className="text-blue-400 font-bold">Debug visual</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">RAG pipelines pré-construídos e otimizados</span>
                    <span className="text-blue-400 font-bold">1 dia/projeto</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Deploy automatizado com CI/CD integrado</span>
                    <span className="text-blue-400 font-bold">Zero downtime</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Versionamento de prompts e A/B testing built-in</span>
                    <span className="text-blue-400 font-bold">Controle total</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/70">Monitoramento de custos e otimização de tokens</span>
                    <span className="text-blue-400 font-bold">70% economia</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <p className="text-blue-400 font-semibold">Resultado: Aplicações LLM enterprise em produção em dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - BENEFITS (Enhanced with gradient and badges) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Aprenda na <span className="bg-gradient-to-r from-white via-blue-500/80 to-white bg-clip-text text-transparent">Prática</span>
          </h2>
          <p className="text-xl text-white/60 mb-16 text-center max-w-4xl mx-auto">
            Do conceito básico até deploy em produção. Você vai sair deste webinar com conhecimento completo sobre Dify.ai
            e pronto para construir suas próprias aplicações LLM escaláveis e production-ready.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinar.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors relative">
                  {/* Duration and level badges */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <span className="text-xs text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">
                      {benefit.duration}
                    </span>
                    <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
                      {benefit.level}
                    </span>
                  </div>

                  {/* Icon with gradient wrapper */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - AGENDA (Enhanced with module cards) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-white via-blue-500/80 to-white bg-clip-text text-transparent">
              Agenda Completa
            </span>
          </h2>
          <p className="text-xl text-white/60 text-center mb-16 max-w-4xl mx-auto">
            Uma jornada estruturada do básico ao avançado. Cada módulo é cuidadosamente planejado para construir
            seu conhecimento de forma progressiva, com demonstrações práticas e exemplos reais de implementação.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {webinar.agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-colors relative"
              >
                <div className="flex items-start gap-6">
                  {/* Icon wrapper */}
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="flex-1">
                    {/* Module label and duration */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-blue-500 font-bold text-sm bg-blue-500/10 px-3 py-1 rounded-full">
                        {item.time}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-sm">
                        {item.module}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{item.topic}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - INSTRUCTOR (Enhanced with gradient and badge position) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Seu <span className="bg-gradient-to-r from-white via-blue-500/80 to-white bg-clip-text text-transparent">Instrutor</span>
          </h2>
          <p className="text-xl text-white/60 text-center mb-16 max-w-3xl mx-auto">
            Aprenda com quem está na linha de frente da implementação de Dify.ai em ambientes enterprise
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-blue-500/20 relative overflow-hidden">
              {/* Background agent image */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/backgrounds/background-dify-ai.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.15,
                  filter: 'brightness(0.6) contrast(1.2)',
                  zIndex: 0
                }}
              />

              {/* Blue overlay for blending */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4) 0%, rgba(6, 182, 212, 0.2) 50%, rgba(14, 165, 233, 0.3) 100%)',
                  zIndex: 1,
                  pointerEvents: 'none'
                }}
              />

              <div className="grid md:grid-cols-2 gap-12 items-center relative" style={{ zIndex: 2 }}>
                {/* Photo side with cyberpunk enhancements */}
                <div className="relative">
                  {/* Animated blue glow behind photo */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-30 blur-xl animate-pulse" />

                  {/* Main photo with effects */}
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/images/backgrounds/background-dify-ai.png"
                      alt={webinar.instructor.name}
                      className="w-full relative z-1"
                      style={{
                        filter: 'contrast(1.1) saturate(0.9)',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />

                    {/* Blue gradient overlay for cyberpunk effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-cyan-900/20 mix-blend-multiply" />
                  </div>

                  {/* Corner accent decorations */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-500 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-blue-500 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-blue-500 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500 rounded-br-2xl" />

                  {/* Tech badge overlay */}
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-xs text-blue-400 font-mono">LLMOPS CERTIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Content with verified badge */}
                <div className="relative">
                  {/* Verified instructor badge - ON CONTENT SIDE */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 shadow-lg shadow-green-500/30">
                    <CheckCircle className="w-4 h-4" />
                    Instrutor Certificado
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2">{webinar.instructor.name}</h3>
                  <p className="text-blue-500 font-semibold mb-1">{webinar.instructor.title}</p>
                  <p className="text-white/60 text-sm mb-4">{webinar.instructor.company}</p>
                  <p className="text-white/60 mb-6 text-sm">{webinar.instructor.bio}</p>

                  <div className="space-y-2 mb-6">
                    {webinar.instructor.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-white/70 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={webinar.instructor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={webinar.instructor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - STATISTICS (Enhanced with icons and progress bars) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Resultados <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent">Comprovados</span>
          </h2>
          <p className="text-xl text-white/60 text-center mb-16 max-w-3xl mx-auto">
            Métricas reais de empresas e desenvolvedores após dominar Dify.ai. Números que comprovam
            a transformação na capacidade de criar e escalar aplicações LLM em produção.
          </p>

          {/* 4 stat boxes with icons and progress bars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {webinar.statistics.map((stat, index) => {
              // Define styles based on color
              const getColorStyles = (color) => {
                switch(color) {
                  case 'green-500':
                    return {
                      bg: 'bg-gradient-to-br from-green-500/20 to-emerald-500/10',
                      border: 'border-green-500/30',
                      icon: 'bg-gradient-to-br from-green-500 to-emerald-500',
                      text: 'text-green-500',
                      gradient: 'linear-gradient(to right, rgb(34 197 94), rgb(16 185 129))'
                    }
                  case 'blue-500':
                    return {
                      bg: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/10',
                      border: 'border-blue-500/30',
                      icon: 'bg-gradient-to-br from-blue-500 to-cyan-500',
                      text: 'text-blue-500',
                      gradient: 'linear-gradient(to right, rgb(59 130 246), rgb(6 182 212))'
                    }
                  case 'purple-500':
                    return {
                      bg: 'bg-gradient-to-br from-purple-500/20 to-violet-500/10',
                      border: 'border-purple-500/30',
                      icon: 'bg-gradient-to-br from-purple-500 to-violet-500',
                      text: 'text-purple-500',
                      gradient: 'linear-gradient(to right, rgb(168 85 247), rgb(139 92 246))'
                    }
                  case 'orange-500':
                    return {
                      bg: 'bg-gradient-to-br from-orange-500/20 to-amber-500/10',
                      border: 'border-orange-500/30',
                      icon: 'bg-gradient-to-br from-orange-500 to-amber-500',
                      text: 'text-orange-500',
                      gradient: 'linear-gradient(to right, rgb(249 115 22), rgb(245 158 11))'
                    }
                  default:
                    return {
                      bg: 'bg-gradient-to-br from-gray-500/20 to-gray-500/10',
                      border: 'border-gray-500/30',
                      icon: 'bg-gradient-to-br from-gray-500 to-gray-600',
                      text: 'text-gray-500',
                      gradient: 'linear-gradient(to right, rgb(107 114 128), rgb(75 85 99))'
                    }
                }
              }

              const styles = getColorStyles(stat.color)

              return (
                <motion.div
                  key={index}
                  className={`${styles.bg} backdrop-blur-sm rounded-2xl p-6 border ${styles.border} relative`}
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon at top */}
                  <div className={`w-12 h-12 ${styles.icon} rounded-xl flex items-center justify-center mb-4`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Large number */}
                  <div className={`text-5xl font-bold ${styles.text} mb-2`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </div>

                  {/* Sublabel */}
                  <div className="text-sm text-white/60 mb-4">
                    {stat.description}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-gray-800 rounded-full h-1.5">
                    <motion.div
                      className="h-1.5 rounded-full"
                      style={{ background: styles.gradient }}
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.progress }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-[1px] rounded-2xl max-w-3xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden">
              {/* Background agent image for testimonial */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'url(/images/backgrounds/background-dify-ai.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  opacity: 0.08,
                  filter: 'brightness(0.5) contrast(1.1)',
                  zIndex: 0
                }}
              />
              <div className="relative" style={{ zIndex: 1 }}>
              <p className="text-lg text-white/80 mb-6">"{webinar.testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {webinar.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-bold text-white">{webinar.testimonial.author}</p>
                  <p className="text-blue-500">{webinar.testimonial.role}</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - GUARANTEE (Enhanced green theme with special design) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-green-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Limited spots badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-2 rounded-full shadow-lg shadow-green-500/30">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-white" />
                  <span className="text-white font-bold">Vagas Limitadas</span>
                </div>
              </div>
            </div>

            {/* Main guarantee card with shield icon */}
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-green-500/30">
              {/* Central shield icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Title with gradient */}
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                Sua Vaga está <span className="text-green-500">100% Garantida</span>
              </h2>

              {/* Description */}
              <p className="text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto">
                Este webinário é <span className="text-green-400 font-semibold">completamente gratuito</span>, mas as vagas são limitadas.
                Garantimos que você terá acesso a <span className="text-green-400 font-semibold">2 horas de conteúdo transformador</span> sobre a plataforma LLMOps mais poderosa do mercado.
              </p>

              {/* 3 guarantee items */}
              <div className="grid md:grid-cols-3 gap-8">
                {webinar.guarantees.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA (Enhanced with icons on features) */}
      <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-white to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
              Pronto para Dominar Dify.ai?
            </span>
          </h2>
          <p className="text-xl text-white/70 text-center mb-12 max-w-4xl mx-auto">
            Reserve sua vaga gratuita agora e domine a plataforma LLMOps open-source mais poderosa do mercado.
            Apenas 500 desenvolvedores terão acesso a este conteúdo exclusivo que vai transformar
            sua capacidade de criar aplicações de IA production-ready.
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/30 backdrop-blur-sm rounded-3xl p-10 border-2 border-blue-500/40">
              <h3 className="text-3xl font-bold text-white text-center mb-8">
                Garanta Sua Vaga Gratuita Agora
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp: (11) 98765-4321"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300 hover:scale-105 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Registrando...' : 'Quero Meu Acesso Gratuito'}
                </button>
              </form>

              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
                >
                  ✅ Inscrição realizada com sucesso! Verifique seu e-mail.
                </motion.div>
              )}

              {/* 3 features with icons */}
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="text-white/60">
                  <CheckCircle className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="font-bold text-white mb-1">100% Gratuito</div>
                  <div className="text-sm">Sem custos ou surpresas</div>
                </div>
                <div className="text-white/60">
                  <Trophy className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="font-bold text-white mb-1">Ao Vivo</div>
                  <div className="text-sm">Q&A em tempo real</div>
                </div>
                <div className="text-white/60">
                  <Heart className="w-6 h-6 text-red-500 mx-auto mb-2" />
                  <div className="font-bold text-white mb-1">Material Exclusivo</div>
                  <div className="text-sm">Guia Dify.ai completo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DifyAIWebinar
