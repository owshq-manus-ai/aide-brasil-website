import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, Users, CheckCircle, Linkedin, Instagram,
  ArrowLeft, ArrowRight, Zap, Target, BookOpen, Brain, Sparkles,
  Code2, Rocket, Shield, TrendingUp, Award, Bot,
  Cpu, GitBranch, Terminal, Layers, Database,
  MessageSquare, ChevronDown, Lock, Trophy,
  Timer, Heart, AlertCircle, Lightbulb, X, Check, Video, Phone, Mail, User
} from 'lucide-react'
import Header from '../../components/shared/Header'

// Configuration for registration method
const USE_TYPEFORM = false
const TYPEFORM_URL = 'https://your-typeform-url.typeform.com/to/YOUR_FORM_ID'

function ClaudeCodeWebinar() {
  const [attendeeCount, setAttendeeCount] = useState(103)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Webinar data specific to Claude Code
  const webinar = {
    title: 'Dominando Claude Code',
    subtitle: 'Aprenda a configurar e aplicar as melhores práticas para trabalhar com uma frota de Agentes',
    date: '25 Set 2025',
    time: '20:00 BRT',
    duration: '2 horas',
    gradient: 'from-orange-600 to-amber-600',
    description: 'Descubra o futuro do desenvolvimento de aplicações em Dados. Aprenda a utilizar agentes para acelerar em 300% sua produtividade e garantir qualidade de entrega. Dicas exclusivas das trincheiras para otimizar seus pipelines de dados e extrair o melhor da ferramenta.',

    whatYouLearn: [
      'Como instalar e configurar o Claude Code do zero',
      'Aplicar as melhores práticas para ter os melhores agentes',
      'Configurar MCPs para não ter alucinações e completar tarefas de forma limpa e clara',
      'Criação e utilização de uma frota de Agentes para resolver qualquer problema',
      'Dicas exclusivas para acelerar 300% sua produtividade'
    ],

    agenda: [
      {
        time: '20:00',
        topic: 'Introdução e Configuração do Claude Code',
        description: 'Setup completo do ambiente, instalação de dependências e configuração inicial para máxima produtividade',
        icon: Terminal
      },
      {
        time: '20:20',
        topic: 'Configurando Model Context Protocol (MCP)',
        description: 'Elimine alucinações e garanta respostas precisas com contextos estruturados e validados',
        icon: Cpu
      },
      {
        time: '20:40',
        topic: 'Criando sua Frota de Agentes',
        description: 'Arquitetura multi-agente para resolver problemas complexos de forma autônoma e eficiente',
        icon: Bot
      },
      {
        time: '21:00',
        topic: 'Melhores Práticas e Otimização',
        description: 'Técnicas avançadas para prompts, debugging e integração com pipelines de dados existentes',
        icon: Code2
      },
      {
        time: '21:30',
        topic: 'Q&A e Casos Reais',
        description: 'Tire suas dúvidas e veja exemplos práticos de implementação em produção',
        icon: MessageSquare
      }
    ],

    speaker: {
      name: 'Luan Moreno',
      role: 'Principal Data & AI Engineer @ Pythian',
      bio: 'Especialista com anos de experiência em IA e engenharia de dados, responsável por implementações em larga escala.',
      avatar: '🤖',
      photo1: '/images/luan-moreno-1.png',
      photo2: '/images/luan-moreno-2.png',
      achievements: [
        '10+ anos de experiência em Data Engineering',
        'Pioneiro em implementações de Claude Code no Brasil',
        'Responsável por pipelines que processam TB de dados diariamente',
        'Mentor de +10K profissionais em GenAI'
      ]
    },

    benefits: [
      { icon: Rocket, text: 'Aumente sua produtividade em até 300%' },
      { icon: Shield, text: 'Evite erros e alucinações com MCPs' },
      { icon: Brain, text: 'Domine técnicas avançadas de prompting' },
      { icon: GitBranch, text: 'Integre com seus workflows existentes' },
      { icon: Database, text: 'Otimize pipelines de dados com IA' },
      { icon: Trophy, text: 'Certificado de participação incluído' }
    ],

    targetAudience: [
      'Desenvolvedores que querem acelerar sua produtividade',
      'Data Engineers buscando automação inteligente',
      'Tech Leads interessados em otimizar entregas',
      'Profissionais que trabalham com grandes volumes de dados',
      'Entusiastas de IA que querem aplicações práticas'
    ],

    features: [
      {
        icon: Terminal,
        title: 'Setup Profissional',
        description: 'Configure o Claude Code do zero com as melhores práticas do mercado'
      },
      {
        icon: Cpu,
        title: 'Model Context Protocol',
        description: 'Elimine alucinações e garanta respostas precisas sempre'
      },
      {
        icon: Bot,
        title: 'Frota de Agentes',
        description: 'Crie agentes especializados para cada tipo de tarefa'
      },
      {
        icon: GitBranch,
        title: 'Workflow Otimizado',
        description: 'Integre Claude Code no seu fluxo de desenvolvimento'
      },
      {
        icon: Database,
        title: 'Data Engineering com IA',
        description: 'Automatize pipelines complexos com agentes inteligentes'
      },
      {
        icon: Zap,
        title: 'Performance Máxima',
        description: 'Técnicas avançadas para extrair o máximo da ferramenta'
      }
    ]
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAttendeeCount(prev => {
        const increment = Math.random() < 0.7 ? 1 : 2
        return prev + increment
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    setSubmitMessage('🎉 Inscrição realizada com sucesso! Verifique seu email.')
    setIsSubmitting(false)

    setTimeout(() => {
      setIsModalOpen(false)
      setSubmitMessage('')
      setFormData({ name: '', email: '', phone: '' })
    }, 2000)
  }

  const handleTypeformRegistration = () => {
    window.open(TYPEFORM_URL, '_blank')
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* ORANGE METALLIC BACKGROUND */}
      <div className="fixed inset-0" style={{ zIndex: -10 }}>
        {/* Deep Black to Orange Gradient Base */}
        <div style={{
          background: `linear-gradient(135deg,
            #000000 0%,
            #0a0a0f 15%,
            #1a0f0f 30%,
            #2a1a0f 45%,
            #1a1a1a 60%,
            #0f0a0a 75%,
            #000000 100%)
          `,
          position: 'absolute',
          inset: 0
        }} />

        {/* Orange Metallic Overlays */}
        <div style={{
          background: `radial-gradient(circle at 20% 20%, rgba(255, 165, 0, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255, 140, 0, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 40% 70%, rgba(255, 69, 0, 0.06) 0%, transparent 50%)
          `,
          position: 'absolute',
          inset: 0
        }} />

        {/* Subtle Texture */}
        <div style={{
          background: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255, 165, 0, 0.01) 2px,
            rgba(255, 165, 0, 0.01) 4px
          )`,
          position: 'absolute',
          inset: 0
        }} />
      </div>

      <Header />

      {/* Back Button */}
      <div className="relative pt-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/webinars"
            className="inline-flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Webinários</span>
          </Link>
        </div>
      </div>

      {/* Hero Section - Enhanced Orange Metallic */}
      <section className="relative pt-12 pb-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Column - Main Content */}
            <div>
              {/* Online Session Badge with Counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
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
                <motion.div
                  className="inline-flex items-center gap-2 text-white/80 text-sm"
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-4 h-4 text-orange-400" />
                  <span>{attendeeCount.toLocaleString('pt-BR')} inscritos</span>
                </motion.div>
              </motion.div>

              {/* Main Title - Orange Metallic with enhanced styling */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-4 relative"
              >
                <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                  {webinar.title}
                </span>
                {/* Metallic shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/20 to-transparent opacity-30 blur-sm" />
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-orange-300 mb-3 font-medium"
              >
                {webinar.subtitle}
              </motion.p>

              {/* Compelling Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-white text-lg mb-6"
              >
                Descubra as técnicas secretas que os melhores profissionais do mercado estão usando para revolucionar seu workflow com IA
              </motion.p>

              {/* Key Features - Matching screenshot design with smaller icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Aumente sua produtividade em 300%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Zero alucinações com MCPs configurados</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-base">Frota completa de agentes especializados</span>
                </div>
              </motion.div>

              {/* Date, Time, Duration - White text to match description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span className="text-white/90 font-medium">{webinar.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-white/90 font-medium">{webinar.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-orange-400" />
                  <span className="text-white/90 font-medium">Sessão no Zoom</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Registration Form and Learn Section */}
            <div className="space-y-8">
              {/* What You'll Learn Card - Aligned with header */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20 max-w-md ml-auto"
              >
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-orange-500" />
                  O que você vai aprender
                </h3>
                <ul className="space-y-3">
                  {webinar.whatYouLearn.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Registration Form Card - Floating icons design */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-gradient-to-br from-orange-900/30 to-amber-900/20 backdrop-blur-sm rounded-2xl p-5 border border-orange-500/30 relative"
              >
                {/* Floating corner icons - positioned on edges */}
                <div className="absolute -top-6 -left-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Bot className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -top-6 -right-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Terminal className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -left-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Cpu className="w-7 h-7 text-white" />
                  </motion.div>
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30"
                    animate={{ rotate: [0, -10, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Brain className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                <div className="text-center mb-3">
                  <h3 className="text-lg font-bold text-white mb-1">Reserve Sua Vaga Gratuita</h3>
                  <p className="text-orange-300 text-xs mb-3">Apenas 200 vagas disponíveis</p>

                  {/* Progress bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Vagas preenchidas</span>
                      <span className="text-orange-400 font-bold">65%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5">
                      <motion.div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-1.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>

                <form className="space-y-3">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500/50" />
                    <input
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full pl-9 pr-3 py-2.5 bg-black/20 border border-orange-500/30 rounded-lg text-white text-sm placeholder-white/40 focus:border-orange-500/70 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500/50" />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-black/20 border border-orange-500/30 rounded-lg text-white text-sm placeholder-white/40 focus:border-orange-500/70 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-500/50" />
                    <input
                      type="tel"
                      placeholder="(11) 98765-4321"
                      className="w-full pl-9 pr-16 py-2.5 bg-black/20 border border-orange-500/30 rounded-lg text-white text-sm placeholder-white/40 focus:border-orange-500/70 focus:outline-none transition-colors"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400 text-xs font-medium">WhatsApp</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all"
                  >
                    Garantir Minha Vaga Agora
                  </button>
                </form>

                <p className="text-center text-white/50 text-xs mt-2">
                  Ao se inscrever, você concorda em receber comunicações sobre o evento.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Development Comparison Section - Now Second */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Pare de <span className="text-red-500 line-through decoration-4">Perder Tempo</span>
              <br />
              <span className="text-4xl md:text-6xl">Comece a </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-5xl md:text-7xl">Desenvolver com Agentes</span>
            </h2>
            <p className="text-xl text-white/70 max-w-4xl mx-auto">
              A diferença entre desenvolvedores que lutam com código e aqueles que entregam projetos em tempo recorde
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Traditional Development - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dark overlay card */}
              <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-red-500/30 relative">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-800/10 rounded-3xl" />

                {/* Header with icon */}
                <div className="relative z-10 mb-8 pt-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-red-900/30 rounded-2xl flex items-center justify-center border border-red-500/20">
                      <X className="w-8 h-8 text-red-500" strokeWidth={2} />
                    </div>
                    <span className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      Antes
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Desenvolvimento Tradicional</h3>
                  <p className="text-red-400 text-lg">O caminho lento e doloroso</p>
                </div>

                {/* Problems list with enhanced styling */}
                <div className="relative z-10 space-y-3">
                  {[
                    { text: "Horas escrevendo código repetitivo", time: "8h/dia" },
                    { text: "Debugging manual interminável", time: "5h/bug" },
                    { text: "Documentação sempre desatualizada", time: "Nunca feita" },
                    { text: "Refatoração que quebra tudo", time: "2 dias" },
                    { text: "Testes manuais incompletos", time: "50% coverage" },
                    { text: "Burnout e frustração constante", time: "Sempre" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-red-900/10 rounded-xl border border-red-900/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
                        </div>
                        <span className="text-white/80 text-sm">{item.text}</span>
                      </div>
                      <span className="text-red-400 text-xs font-mono bg-red-900/20 px-2 py-1 rounded">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom warning */}
                <div className="relative z-10 mt-6 p-4 bg-red-900/20 rounded-xl border border-red-500/30">
                  <p className="text-red-400 font-semibold text-center flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Resultado: Projetos atrasados e stress
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Claude Code Development - Redesigned */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Recommended badge - positioned outside */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-1.5 rounded-full shadow-lg shadow-orange-500/50"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    MÉTODO REVOLUCIONÁRIO
                  </span>
                </motion.div>
              </div>

              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 blur-3xl" />

              {/* Main card with premium feel */}
              <div className="relative bg-gradient-to-br from-orange-900/30 to-amber-900/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/40">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10 rounded-3xl">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,orange_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,amber_0%,transparent_50%)]" />
                </div>

                {/* Header with animated icon */}
                <div className="relative z-10 mb-8 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl flex items-center justify-center border-2 border-orange-500/50"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(251, 146, 60, 0.3)",
                          "0 0 40px rgba(251, 146, 60, 0.5)",
                          "0 0 20px rgba(251, 146, 60, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Rocket className="w-8 h-8 text-orange-400" />
                    </motion.div>
                    <span className="text-white font-bold text-sm flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Depois
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Utilizando Agentic Claude Code Assistant</h3>
                  <p className="text-orange-400 text-lg font-medium">O futuro do desenvolvimento</p>
                </div>

                {/* Benefits list with enhanced styling */}
                <div className="relative z-10 space-y-3">
                  {[
                    { text: "Código gerado com qualidade senior", time: "Segundos" },
                    { text: "Debug automático com IA", time: "Instantâneo" },
                    { text: "Documentação sempre atualizada", time: "Automático" },
                    { text: "Refatoração segura e inteligente", time: "1 clique" },
                    { text: "Testes com 100% de cobertura", time: "Gerados" },
                    { text: "Produtividade e vida equilibrada", time: "300% +" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-900/20 to-amber-900/10 rounded-xl border border-orange-500/30 hover:border-orange-500/50 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-md">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-white font-medium text-sm">{item.text}</span>
                      </div>
                      <span className="text-orange-400 text-xs font-mono font-bold bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-2 py-1 rounded border border-orange-500/30">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom success message */}
                <div className="relative z-10 mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-500/40">
                  <p className="text-orange-400 font-bold text-center flex items-center justify-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Resultado: Entregas rápidas com qualidade
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Learn in Practice Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Aprenda na <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Prática</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Metodologia hands-on com exemplos reais que você aplicará durante o webinário.
              Cada conceito será demonstrado ao vivo com casos práticos da indústria,
              garantindo que você saia pronto para implementar Claude Code em seus projetos imediatamente.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinar.features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 h-full">
                  {/* Animated icon container */}
                  <motion.div
                    className="relative mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl flex items-center justify-center border-2 border-orange-500/40 shadow-lg group-hover:shadow-orange-500/30">
                      <motion.div
                        className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Title with gradient on hover */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Enhanced description */}
                  <p className="text-white/70 text-lg mb-4">
                    {item.description}
                  </p>

                  {/* Time to master indicator */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-orange-400" />
                      <span className="text-xs text-orange-400 font-mono">
                        {index === 0 ? '15 min' : index === 1 ? '20 min' : index === 2 ? '25 min' : index === 3 ? '30 min' : index === 4 ? '15 min' : '10 min'}
                      </span>
                    </div>
                    <span className="text-white/30">•</span>
                    <span className="text-xs text-white/50 font-sans">
                      {index < 2 ? 'Essencial' : index < 4 ? 'Avançado' : 'Pro'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-900/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative z-10">
              Agenda <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Completa</span>
            </h2>
            <p className="text-xl text-white/70 mb-4 relative z-10">
              2 horas de conteúdo intensivo e transformador
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto relative z-10">
              Cada módulo foi cuidadosamente estruturado para construir seu conhecimento de forma progressiva,
              garantindo que você domine completamente o Claude Code desde o básico até técnicas avançadas de produção.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {webinar.agenda.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card content */}
                <div className="relative bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Animated icon container */}
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl flex items-center justify-center border-2 border-orange-500/40 shadow-lg group-hover:shadow-orange-500/30">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-orange-400 font-mono text-sm font-bold bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                          {item.time}
                        </span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60 text-sm">{webinar.duration === '2 horas' ?
                          `${index === 0 ? 'Início' :
                            index === webinar.agenda.length - 1 ? 'Encerramento' :
                            `Módulo ${index}`}` : ''}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 transition-all duration-300">
                        {item.topic}
                      </h3>
                      <p className="text-white/70 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative z-10">
                Seu <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Instrutor</span>
              </h2>
              <p className="text-xl text-white/70 relative z-10">
                Aprenda com quem vive AI Data Engineering na prática todos os dias
              </p>
            </div>

            {/* Enhanced Instructor Layout */}
            <div className="relative group">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-orange-500/20 hover:border-orange-500/50 transition-all">
                  {/* Verified Badge */}
                  <div className="absolute -top-5 right-8 z-20">
                    <motion.div
                      className="relative"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 blur-xl opacity-50" />
                      <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 px-4 py-2 shadow-2xl">
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white/80" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white/80" />
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white/80" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white/80" />
                        <span className="text-white text-xs font-bold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Instrutor Verificado
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo Column */}
                    <div className="flex justify-center">
                      <motion.div
                        className="relative w-full max-w-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-2xl opacity-50" />
                        <div className="relative w-full aspect-square bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-2xl overflow-hidden border-4 border-orange-500/50 shadow-2xl group-hover:scale-105 transition-transform">
                          <img
                            src={webinar.speaker.photo1}
                            alt={webinar.speaker.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Info Column */}
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold text-white mb-3">{webinar.speaker.name}</h3>
                      <p className="text-orange-400 font-medium text-xl mb-6">{webinar.speaker.role}</p>

                      {/* Stats */}
                      <div className="flex gap-6 mb-6">
                        <div>
                          <p className="text-2xl font-bold text-orange-400">10K</p>
                          <p className="text-sm text-white/60">Alunos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-400">50+</p>
                          <p className="text-sm text-white/60">Projetos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-orange-400">5.0★</p>
                          <p className="text-sm text-white/60">Avaliação</p>
                        </div>
                      </div>

                      <p className="text-white/80 mb-8 leading-relaxed text-lg">{webinar.speaker.bio}</p>

                      {webinar.speaker.achievements && (
                        <div className="mb-8 space-y-3">
                          {webinar.speaker.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Trophy className="w-5 h-5 text-white" />
                              </div>
                              <span className="text-white/90">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Social Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href="https://www.linkedin.com/in/luanmoreno/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center border-2 border-orange-500/40 hover:border-orange-500/60 hover:scale-110 transition-all"
                          whileHover={{ rotate: 5 }}
                        >
                          <Linkedin className="w-5 h-5 text-orange-400" />
                        </motion.a>
                        <motion.a
                          href="https://www.instagram.com/luanmorenomaciel/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center border-2 border-orange-500/40 hover:border-orange-500/60 hover:scale-110 transition-all"
                          whileHover={{ rotate: -5 }}
                        >
                          <Instagram className="w-5 h-5 text-orange-400" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </section>



      {/* Numbers that Impress Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Números que <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Impressionam</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Resultados reais de profissionais que já dominam Claude Code
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-400 mb-2">300%</div>
              <div className="text-white/70">Aumento na Produtividade</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-400 mb-2">75%</div>
              <div className="text-white/70">Redução no Tempo de Desenvolvimento</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-white/70">Menos Bugs e Erros</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-white/70">Satisfação dos Usuários</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                “Claude Code transformou completamente minha forma de trabalhar”
              </h3>
              <p className="text-white/70 text-lg mb-4">
                “Em 3 meses, consegui entregar 5 projetos que antes levariam 1 ano. A qualidade do código melhorou drasticamente e o tempo de debugging praticamente desapareceu.”
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JM</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">João Miguel</p>
                  <p className="text-orange-400 text-sm">Senior Data Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
          >
            Por que participar?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinar.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-900/10 to-amber-900/5 backdrop-blur-sm rounded-lg p-6 border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-orange-500 mb-4" />
                <p className="text-white/80">{benefit.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/10 backdrop-blur-sm rounded-3xl p-12 border border-green-500/20 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full">
                  <span className="text-white font-bold">GARANTIA TOTAL</span>
                </div>
              </div>

              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Garantia de <span className="text-green-400">Satisfação Total</span>
              </h2>

              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Estamos tão confiantes na qualidade do nosso conteúdo que oferecemos uma
                <strong className="text-green-400"> garantia incondicional de 30 dias</strong>.
                Se você não ficar completamente satisfeito, devolvemos 100% do seu investimento.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Sem Riscos</h3>
                  <p className="text-white/70 text-sm">Experimente sem preocupações</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <Trophy className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Qualidade Garantida</h3>
                  <p className="text-white/70 text-sm">Conteúdo de altíssimo nível</p>
                </div>
                <div className="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <Heart className="w-8 h-8 text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-white mb-2">Compromisso Total</h3>
                  <p className="text-white/70 text-sm">Seu sucesso é nossa prioridade</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
                <p className="text-green-400 font-bold text-lg">
                  “Não é apenas um webinário, é um investimento no seu futuro profissional”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section - Enhanced */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full mb-6 animate-pulse">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-500 font-bold">VAGAS LIMITADAS - ÚLTIMAS HORAS!</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Não perca essa <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">oportunidade única</span>
            </h2>

            <p className="text-xl text-white/70 mb-8">
              As vagas estão se esgotando rapidamente. Mais de <strong className="text-orange-400">{attendeeCount} profissionais já garantiram</strong> sua vaga.
              Transforme sua carreira com Claude Code antes que seja tarde demais!
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <div className="text-3xl font-bold text-orange-500 mb-1">200</div>
                <div className="text-sm text-white/60">Vagas Totais</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-orange-500/30">
                <div className="text-3xl font-bold text-orange-500 mb-1">{attendeeCount}</div>
                <div className="text-sm text-white/60">Já Inscritos</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                <div className="text-3xl font-bold text-red-400 mb-1">{200 - attendeeCount}</div>
                <div className="text-sm text-red-400 font-bold">Vagas Restantes</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/20 mb-8">
              <p className="text-red-400 font-bold text-lg mb-2">
                ⚠️ ATENÇÃO: Este webinário acontece apenas UMA VEZ por ano!
              </p>
              <p className="text-white/70">
                Não perca a chance de estar entre os primeiros profissionais do Brasil a dominar completamente o Claude Code.
                A próxima oportunidade só em 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Enhanced CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-900/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-orange-900/30 to-amber-900/20 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/30 relative overflow-hidden">
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6">
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-white font-bold">OFERTA ESPECIAL - POR TEMPO LIMITADO</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Transforme sua Carreira
                  </span>
                  <br />
                  <span className="text-white text-3xl md:text-4xl">
                    com Claude Code Hoje Mesmo!
                  </span>
                </h2>

                <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Junte-se a <strong className="text-orange-400">{attendeeCount}+ profissionais</strong> que já garantiram sua vaga no webinário mais esperado do ano.
                  Não fique para trás na revolução da produtividade com IA!
                </p>

                {/* Enhanced Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-white font-medium">100% Gratuito</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                    <Award className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-white font-medium">Certificado Oficial</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-lg p-4 border border-purple-500/30">
                    <Video className="w-6 h-6 text-purple-500 flex-shrink-0" />
                    <span className="text-white font-medium">Gravação Vitalicia</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-lg p-4 border border-orange-500/30">
                    <BookOpen className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-white font-medium">Material Exclusivo</span>
                  </div>
                </div>

                {/* Countdown Timer Effect */}
                <div className="bg-gradient-to-r from-red-900/30 to-red-800/20 rounded-xl p-6 border border-red-500/30 mb-8">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Timer className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-bold">RESTAM POUCAS HORAS PARA GARANTIR SUA VAGA!</span>
                  </div>
                  <p className="text-white/70">Após atingirmos o limite de 200 inscritos, as inscrições serão encerradas automaticamente.</p>
                </div>

                {/* CTA Button */}
                <div className="mb-6">
                  {USE_TYPEFORM ? (
                    <button
                      onClick={handleTypeformRegistration}
                      className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-2xl rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 border-2 border-orange-500/50"
                    >
                      <span className="relative z-10">GARANTIR MINHA VAGA GRATUITA AGORA</span>
                      <div className="relative z-10 flex items-center">
                        <Sparkles className="w-7 h-7" />
                        <span className="ml-2 text-lg">→</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-2xl rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 border-2 border-orange-500/50"
                    >
                      <span className="relative z-10">GARANTIR MINHA VAGA GRATUITA AGORA</span>
                      <div className="relative z-10 flex items-center">
                        <Sparkles className="w-7 h-7" />
                        <span className="ml-2 text-lg">→</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  )}
                </div>

                {/* Trust indicators */}
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">
                    🔒 Inscrição 100% segura e protegida
                  </p>
                  <p className="text-white/60 text-sm">
                    Ao se inscrever, você concorda em receber e-mails sobre o webinário e conteúdos relacionados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      {isModalOpen && !USE_TYPEFORM && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 max-w-md w-full border border-orange-500/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Inscreva-se no Webinar
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white/50 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitMessage ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <p className="text-white text-lg">{submitMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/70 mb-2">Nome completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/50" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 mb-2">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/50" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 mb-2">WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-500/50" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-orange-500/20 rounded-lg text-white placeholder-white/30 focus:border-orange-500/50 focus:outline-none transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Confirmar Inscrição'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ClaudeCodeWebinar