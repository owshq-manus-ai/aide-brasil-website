import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { 
  Calendar, Clock, Users, CheckCircle, Linkedin, Instagram, 
  ArrowLeft, Zap, Target, BookOpen, Brain, Sparkles, 
  Code2, Rocket, Shield, TrendingUp, Award, Bot, 
  Cpu, GitBranch, Terminal, Layers, Database,
  MessageSquare, ChevronDown, Lock, Trophy,
  Timer, Heart, AlertCircle, Lightbulb, X, Check
} from 'lucide-react'
import Header from '../components/shared/Header'

// This would come from a database/API in production
const webinarData = {
  'domine-claude-code': {
    title: 'Dominando Claude Code',
    subtitle: 'Aprenda a configurar e aplicar as melhores práticas para trabalhar com uma frota de Agentes',
    date: '25 Set 2025',
    time: '20:00 BRT',
    duration: '2 horas',
    attendees: 103,
    description: 'Descubra o futuro do desenvolvimento de aplicações em Dados. Aprenda a utilizar agentes para acelerar em 300% sua produtividade e garantir qualidade de entrega. Dicas exclusivas das trincheiras para otimizar seus pipelines de dados e extrair o melhor da ferramenta.',
    gradient: 'from-orange-600 to-amber-600',
    
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
        time: '20:45', 
        topic: 'Desenvolvendo Contexto e Melhores Práticas', 
        description: 'Técnicas avançadas para criar prompts eficazes e contextos ricos que maximizam a performance',
        icon: Brain 
      },
      { 
        time: '21:15', 
        topic: 'Criação de uma Frota de Agentes', 
        description: 'Construa agentes especializados para diferentes tarefas e orquestre workflows complexos',
        icon: Bot 
      },
      { 
        time: '21:45', 
        topic: 'Caso de Uso: AI Data Engineering na Prática', 
        description: 'Demonstração ao vivo de um pipeline completo de dados usando Claude Code',
        icon: Database 
      },
      { 
        time: '21:55', 
        topic: 'Q&A e Encerramento', 
        description: 'Tire suas dúvidas diretamente e receba dicas exclusivas para aplicar imediatamente',
        icon: Users 
      }
    ],
    
    speaker: {
      name: 'Luan Moreno',
      role: 'Principal Data & AI Engineer @ Pythian',
      bio: 'Microsoft MVP com 15+ anos transformando dados em valor. Especialista em arquiteturas de IA generativa, RAG e pipelines de dados em escala. Palestrante em Microsoft Ignite, SQL Pass Summit e DB Tech Showcase Tokyo. Criador da comunidade AI Data Engineering Brasil com 5000+ membros ativos.',
      achievements: [
        'Microsoft Certified Trainer (MCT)',
        'MCSE: Data Management & Analytics',
        'Speaker em 50+ eventos internacionais',
        'Mentor de 1000+ profissionais de dados'
      ],
      avatar: '🧠',
      photo: '/luan-moreno.jpg',
      linkedin: 'https://linkedin.com/in/luanmoreno',
      instagram: 'https://instagram.com/luanmorenomaciel'
    }
  }
}

function WebinarTemplate() {
  const { slug } = useParams()
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)
  const [attendeeCount, setAttendeeCount] = useState(103)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  
  const webinar = webinarData[slug] || webinarData['domine-claude-code']
  const isClaudeWebinar = slug === 'domine-claude-code'
  
  // Simulate live attendee updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setAttendeeCount(prev => {
        const increment = Math.floor(Math.random() * 2)
        return prev + increment <= 130 ? prev + increment : prev
      })
    }, 8000)
    return () => clearInterval(interval)
  }, [])
  
  // Track mouse for metallic effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setMousePos({ x, y })
  }
  
  const handleRegistration = (e) => {
    e.preventDefault()
    if (email) {
      setRegistered(true)
      setAttendeeCount(prev => prev + 1)
    }
  }


  // Special styling for Claude Code webinar
  if (isClaudeWebinar) {
    return (
      <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
        {/* Dark Background with Orange Accents */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#030303]" />
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.05) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(251, 146, 60, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl" />
        </div>


        <Header />
        
        {/* Back Button */}
        <div className="relative pt-24 px-6 z-10">
          <div className="max-w-7xl mx-auto">
            <Link 
              to="/webinarios" 
              className="inline-flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar aos Webinários</span>
            </Link>
          </div>
        </div>
        
        {/* Hero Section - Orange Metallic */}
        <section className="relative pt-12 pb-20 px-6">
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Left Column - Main Content */}
              <div>
                {/* Live Badge with Counter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-bold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    AO VIVO
                  </div>
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-bold text-white border border-orange-500/30"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users className="w-4 h-4 text-orange-600" />
                    <span>{attendeeCount.toLocaleString('pt-BR')} inscritos</span>
                  </motion.div>
                </motion.div>
                
                {/* Title with Enhanced Metallic Effect */}
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold mb-6 cursor-default select-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  onMouseMove={handleMouseMove}
                  whileHover={{ scale: 1.02 }}
                >
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                        #FCD34D 0%, #FB923C 15%, #F97316 30%, #EA580C 45%, 
                        #DC2626 60%, #EA580C 75%, #F97316 85%, #FB923C 95%, #FCD34D 100%)`,
                      backgroundSize: '200% 200%',
                      textShadow: '0 0 80px rgba(251, 146, 60, 0.5)',
                      filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.3))',
                    }}>
                    Dominando Claude Code
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-white/80 mb-8 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Transforme sua forma de desenvolver com IA. Aprenda a criar e gerenciar 
                  uma frota completa de agentes inteligentes que vão revolucionar sua 
                  produtividade em Data Engineering e GenAI.
                </motion.p>
                
                {/* Key Benefits */}
                <motion.div 
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {[
                    { icon: Rocket, text: 'Aumente sua produtividade em 300%' },
                    { icon: Shield, text: 'Zero alucinações com MCPs configurados' },
                    { icon: Bot, text: 'Frota completa de agentes especializados' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/90 font-medium">{item.text}</span>
                    </div>
                  ))}
                </motion.div>
                
                {/* Meta Info */}
                <motion.div 
                  className="flex flex-wrap gap-6 text-white/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{webinar.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{webinar.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="font-medium">{webinar.attendees} inscritos</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Registration Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative lg:max-w-md"
              >
                {/* Floating Agent Icons - Higher z-index for visibility */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-xl z-20"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-xl z-20"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Terminal className="w-7 h-7 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center shadow-xl z-20"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Cpu className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-xl z-20"
                  animate={{ 
                    y: [0, 8, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <Brain className="w-7 h-7 text-white" />
                </motion.div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-30" />
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-orange-500/30">
                  {!registered ? (
                    <>
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          Reserve Sua Vaga Gratuita
                        </h3>
                        <p className="text-sm text-white/70">
                          Apenas 200 vagas disponíveis
                        </p>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-white/70 mb-2">
                          <span>Vagas preenchidas</span>
                          <span className="font-bold text-orange-500">65%</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                            initial={{ width: 0 }}
                            animate={{ width: '65%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                      
                      <form onSubmit={handleRegistration} className="space-y-4">
                        <input
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-white/50"
                          required
                        />
                        
                        <button
                          type="submit"
                          className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                        >
                          Garantir Minha Vaga Agora
                        </button>
                      </form>
                      
                      <p className="text-xs text-white/50 mt-4 text-center">
                        Ao se inscrever, você concorda em receber comunicações sobre o evento.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <motion.div 
                        className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <CheckCircle className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Vaga Confirmada!
                      </h3>
                      <p className="text-white/70">
                        Enviamos os detalhes para {email}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Transformation Section */}
        <section className="relative py-20 px-6 bg-[#030303]">
          {/* Same Hero Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[#030303]" />
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.05) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(251, 146, 60, 0.05) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
            <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full filter blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/20 rounded-full filter blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative z-10">
                A Revolução do <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Desenvolvimento com Claude Code</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Pare de perder tempo com tarefas repetitivas. Claude Code vai transformar 
                completamente como você desenvolve soluções de dados.
              </p>
            </motion.div>
            
            {/* Transformation Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-gray-500 text-white text-sm font-bold rounded-full">
                  ANTES
                </div>
                <h3 className="text-2xl font-bold text-white/80 mb-6">Desenvolvimento Tradicional</h3>
                <ul className="space-y-4">
                  {[
                    'Horas debugando código manualmente',
                    'Reescrevendo código similar repetidamente',
                    'Documentação desatualizada e incompleta',
                    'Pipelines quebrados sem saber porquê',
                    'Produtividade limitada e frustrante'
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="relative flex-shrink-0 mt-0.5"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg blur-md opacity-40" />
                        <div className="relative w-8 h-8 bg-gradient-to-br from-red-500/30 to-rose-500/30 rounded-lg flex items-center justify-center border border-red-500/40 backdrop-blur-sm">
                          <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-rose-500 rounded flex items-center justify-center">
                            <X className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        </div>
                      </motion.div>
                      <span className="text-white/80 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl p-8 border-2 border-orange-500/30"
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold rounded-full">
                  DEPOIS
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">Com Claude Code</h3>
                <ul className="space-y-4">
                  {[
                    'Agentes debugam e corrigem automaticamente',
                    'Biblioteca de agentes reutilizáveis',
                    'Documentação sempre atualizada via MCP',
                    'Pipelines auto-recuperáveis e inteligentes',
                    'Produtividade 300% maior garantida'
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="relative flex-shrink-0 mt-0.5"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ 
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          duration: 0.6 
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl blur-lg opacity-50 animate-pulse" />
                        <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500/40 to-green-500/40 rounded-xl flex items-center justify-center border-2 border-emerald-400/60 backdrop-blur-sm shadow-lg shadow-emerald-500/30">
                          <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shadow-inner">
                            <Check className="w-5 h-5 text-white drop-shadow-lg" strokeWidth={4} />
                          </div>
                        </div>
                      </motion.div>
                      <span className="text-white/80 font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* What You'll Master */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative z-10">
                Aprenda na <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Prática</span>
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto relative z-10">
                Metodologia hands-on com exemplos reais que você aplicará durante o webinário. 
                Cada conceito será demonstrado ao vivo com casos práticos da indústria, 
                garantindo que você saia pronto para implementar Claude Code em seus projetos imediatamente.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/10 hover:border-orange-500/50 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Agenda Timeline */}
        <section className="py-20 px-6 bg-[#030303]">
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
            
            <div className="max-w-4xl mx-auto space-y-4">
              {webinar.agenda.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:shadow-lg hover:border-orange-500/30 transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-orange-500 font-mono text-sm font-bold">{item.time}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60 text-sm">{webinar.duration === '2 horas' ? 
                          `${index === 0 ? 'Início' : 
                            index === webinar.agenda.length - 1 ? 'Encerramento' : 
                            `Módulo ${index}`}` : ''}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                        {item.topic}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Instructor Section */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
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
              
              <div className="relative bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-3xl p-8 md:p-12 border-2 border-orange-500/40 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Photo Column */}
                  <div className="flex justify-center">
                    {webinar.speaker.photo ? (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-2xl opacity-30" />
                        <img 
                          src={webinar.speaker.photo}
                          alt={webinar.speaker.name}
                          className="relative w-64 h-64 object-cover rounded-2xl border-4 border-orange-500/30 shadow-2xl"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="relative w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center" style={{display: 'none'}}>
                          <span className="text-8xl">{webinar.speaker.avatar}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-2xl opacity-30" />
                        <div className="relative w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center border-4 border-orange-500/30">
                          <span className="text-8xl">{webinar.speaker.avatar}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Info Column */}
                  <div className="text-center md:text-left relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2">{webinar.speaker.name}</h3>
                    <p className="text-orange-500 font-medium text-lg mb-6">{webinar.speaker.role}</p>
                    <p className="text-white/80 mb-8 leading-relaxed text-lg relative z-10">{webinar.speaker.bio}</p>
                    
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
                            <div className="relative w-8 h-8 flex-shrink-0">
                              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg opacity-20" />
                              <div className="relative w-full h-full bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-lg flex items-center justify-center border border-orange-500/40">
                                <Trophy className="w-4 h-4 text-orange-500" strokeWidth={2.5} />
                              </div>
                            </div>
                            <span className="text-white/80 text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  
                    <div className="flex gap-4 justify-center md:justify-start">
                      {webinar.speaker.linkedin && (
                        <a 
                          href={webinar.speaker.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:border-orange-500 hover:shadow-lg transition-all"
                        >
                          <Linkedin className="w-5 h-5 text-white/80" />
                        </a>
                      )}
                      {webinar.speaker.instagram && (
                        <a 
                          href={webinar.speaker.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:border-orange-500 hover:shadow-lg transition-all"
                        >
                          <Instagram className="w-5 h-5 text-white/80" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Numbers Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-orange-600 to-amber-600">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative z-10">
                Números que <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Impressionam</span>
              </h2>
              <p className="text-xl text-white/80 relative z-10">
                Resultados reais de quem já usa Claude Code
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: '300%', label: 'Aumento de Produtividade' },
                { value: '87%', label: 'Redução de Bugs' },
                { value: '5x', label: 'Mais Rápido que Manual' },
                { value: '100%', label: 'Satisfação Garantida' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        


        {/* Guarantee Section */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Green glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 md:p-12 border-2 border-green-500/30 backdrop-blur-sm">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className="relative inline-block mb-6"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full blur-xl opacity-50" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center border-2 border-green-500/50">
                      <Shield className="w-12 h-12 text-green-400" />
                    </div>
                  </motion.div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white relative z-10">
                    Garantia de <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">Satisfação Total</span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
                    Se você assistir ao webinário completo e não sentir que valeu cada minuto investido, 
                    eu pessoalmente farei uma mentoria individual de 30 minutos com você.
                  </p>
                  <div className="inline-flex items-center gap-2 text-green-600 font-bold">
                    <CheckCircle className="w-5 h-5" />
                    <span>Risco Zero - Só Benefícios</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-[#0a0a0a] to-[#030303]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                className="relative inline-block mb-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl flex items-center justify-center border-2 border-orange-500/30 mx-auto backdrop-blur-sm">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white relative z-10">
                Por Que Você <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Não Pode Perder</span> Isso
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  {
                    icon: Timer,
                    title: 'Vagas Limitadas',
                    description: 'Apenas 200 vagas disponíveis para garantir qualidade na interação'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Mercado Aquecido',
                    description: 'Profissionais com IA ganham 40% mais que a média do mercado'
                  },
                  {
                    icon: Lightbulb,
                    title: 'Conteúdo Exclusivo',
                    description: 'Técnicas que não encontrará em nenhum outro lugar'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-500/30"
                  >
                    <item.icon className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white relative z-10">
                Pronto para <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Revolucionar</span> seu Desenvolvimento?
              </h2>
              <p className="text-xl text-white/70 mb-12 relative z-10">
                Junte-se a mais de 100 profissionais que estão transformando suas carreiras
              </p>
              
              {/* Registration Box */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl blur-xl opacity-30" />
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-orange-500/30">
                    {!registered ? (
                      <>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          Reserve Sua Vaga Gratuita
                        </h3>
                        <form onSubmit={handleRegistration} className="space-y-4">
                          <input
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl focus:border-orange-500 focus:outline-none transition-colors text-white placeholder-white/50"
                            required
                          />
                          <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
                          >
                            Garantir Minha Vaga Agora
                          </button>
                        </form>
                        <p className="text-xs text-white/50 mt-4 text-center">
                          Ao se inscrever, você concorda em receber comunicações sobre o evento.
                        </p>
                      </>
                    ) : (
                      <div className="text-center py-4">
                        <motion.div 
                          className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring" }}
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Vaga Confirmada!
                        </h3>
                        <p className="text-white/70">
                          Enviamos os detalhes para {email}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center gap-8 text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Certificado Incluso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Material Exclusivo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  // Default template for other webinars (keeping original)
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Header />
      {/* Original template code here... */}
    </div>
  )
}

export default WebinarTemplate