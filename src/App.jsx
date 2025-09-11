import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, CheckCircle, Linkedin, Twitter, Instagram, Youtube, Bot, Zap, Users, Target, Shield, Star, User, Briefcase, BookOpen, Award } from 'lucide-react'
import InfiniteHero from './components/ui/infinite-hero'
import './App.css'

// Floating Shape Component
const FloatingShape = ({ size, position, gradient, delay = 0 }) => (
  <motion.div
    className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-20 blur-xl`}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  />
)

// Section Container with floating shapes
const SectionContainer = ({ children, gradient, className = "", id }) => (
  <section id={id} className={`relative py-20 bg-[#030303] overflow-hidden ${className}`}>
    <FloatingShape
      size="w-32 h-32"
      position="top-10 left-10"
      gradient={gradient}
      delay={0}
    />
    <FloatingShape
      size="w-24 h-24"
      position="top-20 right-20"
      gradient={gradient}
      delay={1}
    />
    <div className="relative z-10">
      {children}
    </div>
  </section>
)

// Animated Text Component for Hero
const AnimatedText = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{
      duration: 1,
      delay: delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
  >
    {children}
  </motion.div>
)

// Cycling Text Component for RAG
const CyclingText = () => {
  const words = ['RAG', 'AI', 'LLMs', 'GenAI', 'Vector Databases', 'Agent', 'Multi-Agent', 'GIP Architecture', 'LLMOps', 'Fundamentals', 'MCPs']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000)
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
        className="text-8xl md:text-9xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 section-title"
      >
        {words[currentIndex]}
      </motion.span>
    </AnimatePresence>
  )
}

// Base Avatar Component - ensures identical sizing
const BaseAvatar = ({ bgColor, children, hasRelative = false }) => (
  <div 
    style={{
      width: '40px',
      height: '40px',
      minWidth: '40px',
      minHeight: '40px',
      maxWidth: '40px',
      maxHeight: '40px',
      boxSizing: 'border-box',
      margin: '0',
      padding: '0'
    }}
    className={`rounded-full flex items-center justify-center shadow-lg ${bgColor} ${hasRelative ? 'relative' : ''}`}
  >
    {children}
  </div>
)

// Bot Avatar Component
const BotAvatar = () => (
  <BaseAvatar bgColor="bg-gradient-to-br from-green-400 to-green-500" hasRelative={true}>
    {/* Modern Chip/Processor Icon */}
    <svg style={{width: '20px', height: '20px'}} className="text-black" fill="currentColor" viewBox="0 0 24 24">
      <path d="M5,7H7V5A2,2 0 0,1 9,3H15A2,2 0 0,1 17,5V7H19A2,2 0 0,1 21,9V15A2,2 0 0,1 19,17H17V19A2,2 0 0,1 15,21H9A2,2 0 0,1 7,19V17H5A2,2 0 0,1 3,15V9A2,2 0 0,1 5,7M9,5V7H15V5H9M19,9H17V15H19V9M15,19V17H9V19H15M5,15H7V9H5V15M9,9V15H15V9H9M11,11H13V13H11V11Z"/>
    </svg>
    {/* Purple Star */}
    <div style={{width: '16px', height: '16px'}} className="absolute -top-1 -right-1 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center">
      <svg style={{width: '10px', height: '10px'}} className="text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
      </svg>
    </div>
  </BaseAvatar>
)

// User Avatar Component
const UserAvatar = () => (
  <BaseAvatar bgColor="bg-gradient-to-br from-blue-500 to-purple-600">
    <svg style={{width: '20px', height: '20px'}} className="text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
    </svg>
  </BaseAvatar>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030303]/80 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Ask Gen', href: '#ask-gen' },
                { label: 'Onyx', href: '#onyx' },
                { label: 'Números', href: '#numeros' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Comunidade', href: '#comunidade' }
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      const element = document.getElementById(item.href.substring(1));
                      if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.offsetTop - headerHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                  className="px-6 py-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/[0.25] backdrop-blur-sm shadow-lg hover:shadow-xl font-roboto"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 p-4 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm"
            >
              {[
                { label: 'Sobre', href: '#sobre' },
                { label: 'Ask Gen', href: '#ask-gen' },
                { label: 'Onyx', href: '#onyx' },
                { label: 'Números', href: '#numeros' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Comunidade', href: '#comunidade' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-white/80 hover:text-white transition-colors font-roboto"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(item.href.substring(1));
                      if (element) {
                        const headerHeight = 80;
                        const elementPosition = element.offsetTop - headerHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <InfiniteHero />

      {/* About Section */}
      <SectionContainer gradient="from-green-500/[0.12]" id="sobre">
        <FloatingShape
          size="w-40 h-40"
          position="bottom-10 right-10"
          gradient="from-blue-500/[0.12]"
          delay={2}
        />
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white section-title"
          >
            A primeira comunidade brasileira
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-light mb-16 text-white/80"
          >
            onde Dados encontram
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16 flex justify-center"
          >
            <CyclingText />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed"
          >
            A Comunidade nasceu para liderar a revolução no cruzamento entre Engenharia de Dados e Inteligência Artificial Generativa. 
            Aqui, profissionais e empresas constroem o futuro juntos — aprendendo, colaborando e inovando em comunidade.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Aprenda na prática, construa seu futuro",
                description: "Capacitação hands-on com projetos reais, desafios atuais e uma metodologia que transforma teoria em portfólio vivo.",
                gradient: "from-green-500/[0.15]"
              },
              {
                icon: Users,
                title: "Conexões que abrem portas",
                description: "Relacionamentos estratégicos com os melhores profissionais e empresas do setor, criando oportunidades que aceleram sua carreira.",
                gradient: "from-blue-500/[0.15]"
              },
              {
                icon: Zap,
                title: "Laboratório vivo de GenAI + Dados",
                description: "Um ecossistema colaborativo para testar ideias, criar soluções inéditas e participar de iniciativas que moldam o futuro da Engenharia de Dados e da Inteligência Artificial.",
                gradient: "from-purple-500/[0.15]"
              },
              {
                icon: Shield,
                title: "Você nunca caminha sozinho",
                description: "Mentoria, comunidade ativa e o agente exclusivo Ask Gen, prontos para apoiar sua jornada 24/7.",
                gradient: "from-orange-500/[0.15]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300`}
              >
                <item.icon className="w-12 h-12 text-white mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-white section-subtitle">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-roboto">
              Transforme sua carreira
            </button>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Ask Gen Section */}
      <SectionContainer gradient="from-cyan-500/[0.12]" id="ask-gen">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 section-title">
              Ask Gen — AI Data Engineering Assistant
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Converse com o Ask Gen
            </p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Demonstração do primeiro agente especializado em AI Data Engineering.
              Junte-se ao nosso Discord para conversar diretamente com o Ask Gen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Discord-like Chat Interface */}
            <div className="bg-[#36393f] rounded-lg p-6 text-sm discord-text">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold discord-username">#ask-the-expert</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-400 discord-text">Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.027zM8.68 15.464c-1.283 0-2.34-1.178-2.34-2.625s1.036-2.625 2.34-2.625c1.312 0 2.36 1.187 2.34 2.625 0 1.447-1.057 2.625-2.34 2.625zm6.64 0c-1.283 0-2.34-1.178-2.34-2.625s1.036-2.625 2.34-2.625c1.312 0 2.36 1.187 2.34 2.625 0 1.447-1.057 2.625-2.34 2.625z"/>
                  </svg>
                  <span className="text-gray-400 text-xs discord-text">1.247 membros ativos</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <UserAvatar />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-400 font-semibold text-sm">@Data_Engineer</span>
                      <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold">USER</span>
                      <span className="text-gray-500 text-xs discord-text">Hoje às 14:20</span>
                    </div>
                    <div className="bg-[#40444b] rounded-lg p-4">
                      <p className="text-white text-sm discord-text">O que são foundation models?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <BotAvatar />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400 font-semibold text-sm discord-username">Ask Gen</span>
                      <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold discord-tag">BOT</span>
                      <span className="text-gray-500 text-xs discord-text">Hoje às 14:21</span>
                    </div>
                    <div className="bg-[#2f3136] rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-gray-300 text-sm mb-3 discord-text leading-relaxed">
                        Foundation models são modelos de IA pré-treinados em grandes datasets que servem como base para diversas tarefas. Eles democratizam o acesso à IA avançada e aceleram o desenvolvimento de aplicações específicas.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">#foundation-models</span>
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs">#ai</span>
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-xs">#machine-learning</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <UserAvatar />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-purple-400 font-semibold text-sm discord-username">@Data_Engineer</span>
                      <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold discord-tag">USER</span>
                      <span className="text-gray-500 text-xs discord-text">Hoje às 14:23</span>
                    </div>
                    <div className="bg-[#40444b] rounded-lg p-4">
                      <p className="text-white text-sm discord-text">Qual é o papel e importância de RAG?</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <BotAvatar />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400 font-semibold text-sm discord-username">Ask Gen</span>
                      <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold discord-tag">BOT</span>
                      <span className="text-gray-500 text-xs discord-text">Hoje às 14:24</span>
                    </div>
                    <div className="bg-[#2f3136] rounded-lg p-4 border-l-4 border-green-500">
                      <p className="text-gray-300 text-sm mb-3 discord-text leading-relaxed">
                        RAG (Retrieval-Augmented Generation) conecta LLMs a bases de conhecimento externas, permitindo respostas mais precisas e atualizadas. É crucial para reduzir alucinações e personalizar respostas com dados específicos.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs">#rag</span>
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs">#retrieval</span>
                        <span className="bg-pink-600 text-white px-2 py-1 rounded text-xs">#generation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Narrative Transition to Onyx */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center mt-16"
            >
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mb-8"
                >
                  <p className="text-xl text-white/80 mb-4 leading-relaxed">
                    Ask Gen responde suas perguntas sobre AI Data Engineering em tempo real.
                  </p>
                  <p className="text-lg text-white/60 mb-6 leading-relaxed">
                    Mas e se, em vez de apenas reagir às suas dúvidas, ele pudesse <strong className="text-white/80">antecipar suas necessidades</strong>?
                    <br />
                    E se ele soubesse exatamente o que você precisa aprender <strong className="text-white/80">antes mesmo de você perguntar</strong>?
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
                    <div className="flex items-center justify-center mb-6">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center relative">
                        <motion.div
                          animate={{ 
                            rotate: 360,
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800"
                          style={{
                            background: `
                              radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.4) 0%, transparent 50%),
                              radial-gradient(circle at 70% 70%, rgba(75, 85, 99, 0.3) 0%, transparent 50%),
                              linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                            `,
                            boxShadow: `
                              0 0 20px rgba(156, 163, 175, 0.4),
                              inset 0 0 20px rgba(0, 0, 0, 0.8),
                              0 0 40px rgba(156, 163, 175, 0.2)
                            `
                          }}
                        >
                          {/* Mini Inner Glow */}
                          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-700/30 via-transparent to-gray-600/20" />
                          
                          {/* Mini Silver Neon Edge */}
                          <motion.div
                            animate={{ 
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute inset-0 rounded-full border border-gray-300/60"
                          />
                          
                          {/* Mini Floating Particles */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                y: [-2, 2, -2],
                                opacity: [0.3, 0.8, 0.3],
                              }}
                              transition={{
                                duration: 2 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.3
                              }}
                              className="absolute w-0.5 h-0.5 bg-gray-300 rounded-full"
                              style={{
                                left: `${30 + i * 20}%`,
                                top: `${25 + i * 15}%`,
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 section-subtitle">
                      A Evolução Chegou
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      Do reativo ao proativo. Do assistente ao mentor. Do Ask Gen ao Ask Gen Onyx.
                      <br />
                      <strong className="text-white/90">A inteligência que acelera sua carreira enquanto você dorme.</strong>
                    </p>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      onClick={() => {
                        const element = document.getElementById('onyx');
                        if (element) {
                          const headerHeight = 80;
                          const elementPosition = element.offsetTop - headerHeight;
                          window.scrollTo({
                            top: elementPosition,
                            behavior: 'smooth'
                          });
                        }
                      }}
                      className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg font-semibold text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-500/30 group font-roboto"
                    >
                      <span className="flex items-center space-x-2">
                        <span>Descobrir Ask Gen Onyx</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="group-hover:translate-x-1 transition-transform"
                        >
                          →
                        </motion.span>
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Ask Gen Onyx Section */}
      <SectionContainer gradient="from-gray-500/[0.12]" id="onyx">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg text-gray-400 font-medium tracking-wider uppercase">Apresentando</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 section-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-200 to-gray-400">
                Ask Gen{' '}
              </span>
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300"
                style={{
                  backgroundSize: '200% 200%',
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                  filter: 'drop-shadow(0 0 10px rgba(156, 163, 175, 0.8))'
                }}
              >
                Onyx
              </motion.span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-8 text-white/90 leading-relaxed"
            >
              A Revolução Proativa da <span className="text-gray-300 font-medium">Inteligência Artificial</span>
            </motion.p>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-white/70 leading-relaxed">
                Você conheceu o Ask Gen — o assistente que responde suas perguntas.
              </p>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                Agora conheça o Onyx — a inteligência que <strong className="text-white">antecipa suas necessidades</strong> e 
                <strong className="text-white"> acelera sua carreira</strong> com precisão analítica.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <p className="text-lg text-gray-400 italic">
                  "Enquanto você aprende, Onyx já sabe o que vem depois."
                </p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Onyx 3D Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Main Onyx Orb */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="relative w-64 h-64 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 shadow-2xl"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(75, 85, 99, 0.2) 0%, transparent 50%),
                      linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                    `,
                    boxShadow: `
                      0 0 60px rgba(156, 163, 175, 0.3),
                      inset 0 0 60px rgba(0, 0, 0, 0.8),
                      0 0 120px rgba(156, 163, 175, 0.1)
                    `
                  }}
                >
                  {/* Inner Glow */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700/20 via-transparent to-gray-600/10" />
                  
                  {/* Silver Neon Edges */}
                  <motion.div
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full border-2 border-gray-300/50"
                    style={{
                      boxShadow: `
                        0 0 20px rgba(156, 163, 175, 0.8),
                        inset 0 0 20px rgba(156, 163, 175, 0.3)
                      `
                    }}
                  />

                  {/* Liquid Silver Flow */}
                  <motion.div
                    animate={{ 
                      rotate: -360,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-8 rounded-full"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, rgba(156, 163, 175, 0.6) 10%, transparent 20%, rgba(156, 163, 175, 0.4) 30%, transparent 40%)`
                    }}
                  />
                </motion.div>

                {/* Holographic Circuits Orbiting */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10 + i * 5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2
                    }}
                    className="absolute inset-0"
                    style={{
                      width: `${320 + i * 40}px`,
                      height: `${320 + i * 40}px`,
                      left: `${-20 - i * 20}px`,
                      top: `${-20 - i * 20}px`
                    }}
                  >
                    <div 
                      className="w-2 h-2 bg-gray-300 rounded-full absolute"
                      style={{
                        top: '50%',
                        right: '0',
                        transform: 'translateY(-50%)',
                        boxShadow: '0 0 10px rgba(156, 163, 175, 0.8)'
                      }}
                    />
                    <div 
                      className="w-1 h-1 bg-gray-400 rounded-full absolute"
                      style={{
                        top: '25%',
                        right: '25%',
                        boxShadow: '0 0 8px rgba(156, 163, 175, 0.6)'
                      }}
                    />
                    <div 
                      className="w-1 h-1 bg-gray-400 rounded-full absolute"
                      style={{
                        bottom: '25%',
                        left: '25%',
                        boxShadow: '0 0 8px rgba(156, 163, 175, 0.6)'
                      }}
                    />
                  </motion.div>
                ))}

                {/* Data Stream Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    animate={{ 
                      y: [-20, -100, -20],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                    className="absolute w-1 h-4 bg-gradient-to-t from-gray-400 to-transparent rounded-full"
                    style={{
                      left: `${20 + i * 30}px`,
                      bottom: '50%'
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 section-subtitle">
                      Análise Proativa de Perfil
                    </h3>
                    <p className="text-white/70">
                      Onyx analisa seu histórico de perguntas e identifica gaps de conhecimento antes mesmo de você perceber.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 section-subtitle">
                      Recomendações Personalizadas
                    </h3>
                    <p className="text-white/70">
                      Baseado nas suas interações, Onyx sugere cursos, certificações e oportunidades específicas para você.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 section-subtitle">
                      Alertas de Carreira
                    </h3>
                    <p className="text-white/70">
                      Onyx monitora o mercado e te avisa sobre vagas que combinam 100% com seu perfil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-gray-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 section-subtitle">
                      Mentoria Inteligente
                    </h3>
                    <p className="text-white/70">
                      Onyx cria um plano de carreira personalizado e te guia passo a passo até seus objetivos.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg font-semibold text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Ative seu Onyx Pessoal
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Demo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-bold text-white mb-3" 
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Veja o Onyx em Ação
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-white/60 text-lg"
              >
                Demonstração da inteligência proativa em tempo real
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/10 via-gray-500/5 to-gray-600/10 rounded-2xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80 rounded-2xl p-6 border border-gray-600/30 backdrop-blur-sm"
                style={{
                  background: `
                    radial-gradient(circle at 20% 20%, rgba(156, 163, 175, 0.08) 0%, transparent 50%),
                    linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(31, 41, 55, 0.95) 100%)
                  `,
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.5),
                    inset 0 1px 0 rgba(156, 163, 175, 0.1),
                    0 0 0 1px rgba(156, 163, 175, 0.05)
                  `
                }}
              >
                {/* User Input */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="mb-6"
                >
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-600/15 to-purple-600/15 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-lg">
                        "Quero me especializar em GenAI para dados"
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Onyx Response */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="mb-4"
                >
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-gray-800/60 via-gray-900/40 to-black/60 rounded-xl border border-gray-600/20 backdrop-blur-sm"
                    style={{
                      background: `
                        radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.08) 0%, transparent 50%),
                        linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(17, 24, 39, 0.8) 100%)
                      `,
                      boxShadow: `
                        0 10px 40px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(156, 163, 175, 0.08)
                      `
                    }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `
                          radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.4) 0%, transparent 50%),
                          linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                        `,
                        boxShadow: `
                          0 0 20px rgba(156, 163, 175, 0.3),
                          inset 0 0 20px rgba(0, 0, 0, 0.8)
                        `
                      }}
                    >
                      <motion.div
                        animate={{ 
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-3 h-3 bg-gray-300 rounded-full"
                        style={{
                          boxShadow: '0 0 10px rgba(156, 163, 175, 0.6)'
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-white font-bold text-lg">Onyx</span>
                        <span className="px-3 py-1 bg-gradient-to-r from-gray-600 to-gray-800 text-white text-sm rounded-full border border-gray-500/30 font-semibold">
                          PROATIVO
                        </span>
                      </div>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                        className="mb-4"
                      >
                        <p className="text-gray-300 text-base mb-4 flex items-center">
                          <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                          <strong>Analisando seu perfil...</strong> Onyx detectou:
                        </p>
                      </motion.div>

                      <div className="grid gap-3">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.8 }}
                          className="flex items-center space-x-4 p-3 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-lg border border-blue-500/20 hover:border-blue-400/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">RAG + Vector Databases</p>
                            <p className="text-blue-300 text-sm">próximo passo ideal</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.0 }}
                          className="flex items-center space-x-4 p-3 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-lg border border-green-500/20 hover:border-green-400/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">5 vagas GenAI Engineer abertas</p>
                            <p className="text-green-300 text-sm">90% match com seu perfil</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.2 }}
                          className="flex items-center space-x-4 p-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">Curso LangChain + ChromaDB</p>
                            <p className="text-purple-300 text-sm">recomendado para você</p>
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.4 }}
                          className="flex items-center space-x-4 p-3 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-lg border border-orange-500/20 hover:border-orange-400/30 transition-all duration-300"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">Certificação AWS Bedrock</p>
                            <p className="text-orange-300 text-sm">disponível agora</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Numbers Section */}
      <SectionContainer gradient="from-orange-500/[0.12]" id="numeros">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-300 section-title"
          >
            AI Data Engineering em Números
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 section-subtitle">
              Mercado em Expansão
            </h3>
            <p className="text-lg text-white/80 mb-2">
              Dados do mercado global que demonstram o crescimento exponencial
            </p>
            <p className="text-white/60">
              Análise baseada em fontes confiáveis da indústria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Crescimento do Mercado",
                subtitle: "AI Data Engineering 2024-2033",
                value: "147%",
                description: "crescimento previsto",
                source: "Fonte: CONSAINSIGHTS",
                gradient: "from-blue-600 to-blue-800",
                bgGradient: "from-blue-500/[0.15]"
              },
              {
                title: "Serviços de Engenharia",
                subtitle: "Crescimento de Receita 2025-2030",
                value: "CAGR ~15%",
                description: "crescimento anual",
                source: "Fonte: Market",
                gradient: "from-green-600 to-green-800",
                bgGradient: "from-green-500/[0.15]"
              },
              {
                title: "Market Share",
                subtitle: "Infraestrutura de Dados",
                value: "BigQuery lidera 5x",
                description: "dominância de mercado",
                source: "Fonte: IdataS",
                gradient: "from-purple-600 to-purple-800",
                bgGradient: "from-purple-500/[0.15]"
              },
              {
                title: "Impacto Econômico",
                subtitle: "Trilhões em valor adicionado (2024)",
                value: "$3.1T",
                description: "impacto global",
                source: "Fonte: SpiralMantra",
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
              },
              {
                title: "Mercado Global de AI",
                subtitle: "Projeção até 2030 (Bilhões USD)",
                value: "800%",
                description: "crescimento",
                source: "Fonte: Fortune Business",
                gradient: "from-pink-600 to-rose-600",
                bgGradient: "from-pink-500/[0.15]"
              },
              {
                title: "Performance dos Pioneiros",
                subtitle: "Taxa de Sucesso em Projetos AI",
                value: "2x",
                description: "mais efetivos",
                source: "Fonte: MIT/Boston Consulting",
                gradient: "from-cyan-600 to-teal-600",
                bgGradient: "from-cyan-500/[0.15]"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300 group`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} rounded-t-2xl`} />
                
                <div className="text-left">
                  <h4 className="text-lg font-bold text-white mb-2 section-subtitle">
                    {stat.title}
                  </h4>
                  <p className="text-sm text-white/70 mb-4">
                    {stat.subtitle}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2 section-title">
                      {stat.value}
                    </div>
                    <p className="text-white/80 text-sm">
                      {stat.description}
                    </p>
                  </div>
                  
                  <p className="text-xs text-white/50">
                    {stat.source}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 section-subtitle">
              Seja um Early Adopter
            </h3>
            <p className="text-lg text-white/80 max-w-4xl mx-auto leading-relaxed">
              Os dados mostram: quem age primeiro, conquista resultados superiores. Junte-se aos pioneiros que estão moldando o futuro do AI Data Engineering.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer gradient="from-purple-500/[0.12]" id="beneficios">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300 section-title">
              Para Cada Momento da Sua Jornada
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Seja você iniciante, profissional experiente ou empresa, temos o caminho ideal para o seu crescimento
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Iniciantes",
                subtitle: "Construa sua base sólida",
                benefits: [
                  "Fundamentos de AI Data Engineering",
                  "Projetos guiados passo a passo",
                  "Mentoria em grupo",
                  "Networking com profissionais",
                  "Certificações reconhecidas"
                ],
                gradient: "from-green-500/[0.15]",
                headerGradient: "from-green-600 to-emerald-600",
                icon: Target
              },
              {
                title: "Profissionais",
                subtitle: "Acelere sua carreira",
                benefits: [
                  "Projetos avançados com GenAI",
                  "Acesso a tecnologias de ponta",
                  "Job board exclusivo",
                  "Networking C-level",
                  "Consultoria especializada"
                ],
                gradient: "from-blue-500/[0.15]",
                headerGradient: "from-blue-600 to-indigo-600",
                icon: Users
              },
              {
                title: "Empresas",
                subtitle: "Transforme seu negócio",
                benefits: [
                  "Consultoria estratégica",
                  "Implementação de soluções",
                  "Treinamento de equipes",
                  "Acesso a talentos qualificados",
                  "Parcerias tecnológicas"
                ],
                gradient: "from-purple-500/[0.15]",
                headerGradient: "from-purple-600 to-violet-600",
                icon: Shield
              }
            ].map((profile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${profile.gradient} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.headerGradient} rounded-t-2xl`} />
                
                <div className="text-center mb-8">
                  <profile.icon className="w-12 h-12 text-white mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-white mb-2 section-subtitle">
                    {profile.title}
                  </h3>
                  <p className="text-white/70">{profile.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {profile.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer gradient="from-rose-500/[0.12]" id="comunidade">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-orange-300 section-title">
              Transforme sua Carreira
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              O Futuro dos Dados Começa Agora
            </p>
            <p className="text-lg text-white/60 max-w-4xl mx-auto">
              Seja parte da maior transformação tecnológica do Brasil. Conecte-se com os melhores profissionais, 
              aprenda as tecnologias mais avançadas e construa uma carreira extraordinária em AI Data Engineering.
            </p>
          </motion.div>

          {/* Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/[0.05] p-1 rounded-full border border-white/[0.08]">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-roboto ${
                  !isAnnual 
                    ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg border border-gray-500/30' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-roboto ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg border border-gray-500/30' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Anual
                <span className="ml-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs">
                  -20%
                </span>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/[0.08] to-cyan-500/[0.08] backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-2 section-subtitle">
                Nível Gratuito
              </h3>
              <p className="text-white/70 mb-6">Comece sua jornada em AI Data Engineering</p>
              
              <div className="text-4xl font-bold text-white mb-6 section-title">
                Gratuito
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Acesso ao Discord (canais básicos)",
                  "Ask Gen - 30 créditos por mês",
                  "Conteúdo introdutório (Fundamentos de GenAI)",
                  "Acesso a resumos das reuniões mensais (AIDE Labs)"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Começar Gratuitamente
              </button>
            </motion.div>

            {/* Premium Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-8 rounded-2xl border border-gray-500/50 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
              style={{
                boxShadow: `
                  0 0 30px rgba(156, 163, 175, 0.2),
                  inset 0 0 30px rgba(0, 0, 0, 0.5)
                `
              }}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-1 rounded-full text-sm font-semibold border border-gray-500/50">
                  ⚡ Ask Gen Onyx
                </span>
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Nível Premium
                </h3>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.3) 0%, transparent 50%),
                      linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                    `,
                    boxShadow: `
                      0 0 15px rgba(156, 163, 175, 0.3),
                      inset 0 0 15px rgba(0, 0, 0, 0.8)
                    `
                  }}
                >
                  <motion.div
                    animate={{ 
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-1 h-1 bg-gray-300 rounded-full"
                  />
                </div>
              </div>
              <p className="text-white/70 mb-6">Para profissionais sérios em AI Data Engineering</p>
              
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                {isAnnual ? 'R$ 499' : 'R$ 49,90'}
                <span className="text-lg text-white/60 font-normal">
                  {isAnnual ? '/ano' : '/mês'}
                </span>
              </div>
              {isAnnual && (
                <p className="text-green-400 text-sm mb-4">Economize R$ 99,80 por ano!</p>
              )}

              <p className="text-white/80 mb-4">Tudo do Nível Gratuito, mais:</p>

              <ul className="space-y-3 mb-8">
                {[
                  {
                    text: "Ask Gen Onyx - Inteligência Proativa",
                    isOnyx: true
                  },
                  {
                    text: "Ask Gen Ilimitado",
                    isOnyx: false
                  },
                  {
                    text: "Acesso completo ao Discord (canais exclusivos)",
                    isOnyx: false
                  },
                  {
                    text: "Participação nas reuniões mensais no Zoom do AIDE Labs",
                    isOnyx: false
                  },
                  {
                    text: "Newsletter Semanal do que está mais quente no mercado",
                    isOnyx: false
                  },
                  {
                    text: "Ask Me Anything: Mentoria em grupo mensal (1h)",
                    isOnyx: false
                  },
                  {
                    text: "Projetos colaborativos",
                    isOnyx: false
                  },
                  {
                    text: "Job board exclusivo",
                    isOnyx: false
                  }
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    {feature.isOnyx ? (
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `
                            radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.4) 0%, transparent 50%),
                            linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                          `,
                          boxShadow: `
                            0 0 8px rgba(156, 163, 175, 0.3),
                            inset 0 0 8px rgba(0, 0, 0, 0.8)
                          `
                        }}
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-1 h-1 bg-gray-300 rounded-full"
                        />
                      </div>
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    )}
                    <span className="text-white/80">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg font-semibold text-white hover:from-gray-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-500/30 font-roboto">
                Começar Premium
              </button>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg font-medium">Mais de 2.847 profissionais já se inscreveram</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg font-medium">100% Gratuito para começar</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg font-medium">Sem spam, apenas conteúdo relevante</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-lg font-medium">Cancele quando quiser</span>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Footer */}
      <footer className="relative py-16 bg-[#020202] border-t border-white/[0.05]">
        <div className="container mx-auto px-6">
          <div className="max-w-md">
            {/* Description */}
            <p className="text-white/60 mb-8 leading-relaxed">
              AI Data Engineering Brasil - Onde Dados encontram Inteligência Artificial Generativa
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-10 h-10 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/[0.05] border border-white/[0.08] rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all duration-300">
                <Youtube size={18} />
              </a>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-white/[0.05]">
              <p className="text-white/40 text-sm">
                © 2025 AIDE Brasil. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

