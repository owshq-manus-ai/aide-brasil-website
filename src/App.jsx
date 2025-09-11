import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, CheckCircle, Linkedin, Twitter, Instagram, Youtube, Bot, Zap, Users, Target, Shield, Star } from 'lucide-react'
import InfiniteHero from './components/ui/infinite-hero'

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
        className="text-8xl md:text-9xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300"
        style={{ fontFamily: 'Oswald, sans-serif' }}
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
                { label: 'Onyx', href: '#onyx' },
                { label: 'Ask Gen', href: '#ask-gen' },
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
                  className="px-6 py-3 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 rounded-lg bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/[0.25] backdrop-blur-sm shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
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
                { label: 'Onyx', href: '#onyx' },
                { label: 'Ask Gen', href: '#ask-gen' },
                { label: 'Números', href: '#numeros' },
                { label: 'Benefícios', href: '#beneficios' },
                { label: 'Comunidade', href: '#comunidade' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-white/80 hover:text-white transition-colors"
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
                  style={{ fontFamily: 'Oswald, sans-serif' }}
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
            className="text-4xl md:text-6xl font-bold mb-6 text-white" 
            style={{ fontFamily: 'Oswald, sans-serif' }}
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
                <h3 className="text-xl font-bold mb-4 text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Transforme sua carreira
            </button>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-slate-200 to-gray-400" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Conheça o Onyx
            </h2>
            <p className="text-2xl md:text-3xl font-light mb-8 text-white/80">
              A Evolução Inteligente do Ask Gen
            </p>
            <p className="text-lg text-white/60 max-w-4xl mx-auto leading-relaxed">
              Enquanto o Ask Gen responde suas perguntas, o Onyx antecipa suas necessidades e acelera sua carreira com precisão analítica.
            </p>
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
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Veja o Onyx em Ação
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <UserAvatar />
                  <div className="flex-1">
                    <div className="bg-blue-600/20 rounded-lg p-4 border border-blue-500/30">
                      <p className="text-white">"Quero trabalhar com Machine Learning"</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div 
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      minHeight: '40px',
                      maxWidth: '40px',
                      maxHeight: '40px',
                      boxSizing: 'border-box'
                    }}
                    className="relative rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center shadow-lg"
                  >
                    <div className="w-5 h-5 text-gray-300">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full border border-gray-400/50"
                      style={{
                        boxShadow: '0 0 10px rgba(156, 163, 175, 0.5)'
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-gray-300 font-semibold">Onyx</span>
                        <span className="bg-gray-600 text-white px-2 py-0.5 rounded text-xs font-bold">PROATIVO</span>
                      </div>
                      <p className="text-gray-300 mb-3">
                        🔮 <strong>Detectei que você tem base em Python.</strong> Onyx recomenda:
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400">📚</span>
                          <span className="text-gray-300">Curso de TensorFlow (80% match com seu perfil)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400">💼</span>
                          <span className="text-gray-300">3 vagas ML Engineer abertas hoje</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-purple-400">🎯</span>
                          <span className="text-gray-300">Próximo passo: Certificação Google ML</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
            <div className="bg-[#36393f] rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-600">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">#ask-the-expert</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span className="text-gray-400">Online</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  <span className="text-gray-400 text-xs">1.247 membros ativos</span>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-6">
                <div className="flex items-start" style={{gap: '36px'}}>
                  <UserAvatar />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-white">Data Engineer</span>
                      <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold">USER</span>
                      <span className="text-gray-400 text-xs">Hoje às 14:20</span>
                    </div>
                    <p className="text-gray-300">O que são foundation models?</p>
                  </div>
                </div>

                <div className="flex items-start" style={{gap: '36px'}}>
                  <BotAvatar />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-white">Ask Gen</span>
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">BOT</span>
                      <span className="text-gray-400 text-xs">Hoje às 14:21</span>
                    </div>
                    <p className="text-gray-300 mb-3">
                      Foundation models são modelos de IA pré-treinados em grandes datasets que servem como base para diversas tarefas. 
                      Eles democratizam o acesso à IA avançada e aceleram o desenvolvimento de aplicações específicas.
                    </p>
                    <div className="flex space-x-2">
                      <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">#foundation-models</span>
                      <span className="bg-purple-900 text-purple-300 px-2 py-1 rounded text-xs">#ai</span>
                      <span className="bg-green-900 text-green-300 px-2 py-1 rounded text-xs">#machine-learning</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start" style={{gap: '36px'}}>
                  <UserAvatar />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-white">Data Engineer</span>
                      <span className="bg-purple-600 text-white px-2 py-0.5 rounded text-xs font-bold">USER</span>
                      <span className="text-gray-400 text-xs">Hoje às 14:23</span>
                    </div>
                    <p className="text-gray-300">Qual é o papel e importância de RAG?</p>
                  </div>
                </div>

                <div className="flex items-start" style={{gap: '36px'}}>
                  <BotAvatar />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-white">Ask Gen</span>
                      <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">BOT</span>
                      <span className="text-gray-400 text-xs">Hoje às 14:24</span>
                    </div>
                    <p className="text-gray-300 mb-3">
                      RAG (Retrieval-Augmented Generation) conecta LLMs a bases de conhecimento externas, permitindo respostas mais precisas e atualizadas. 
                      É crucial para reduzir alucinações e personalizar respostas com dados específicos.
                    </p>
                    <div className="flex space-x-2">
                      <span className="bg-orange-900 text-orange-300 px-2 py-1 rounded text-xs">#rag</span>
                      <span className="bg-teal-900 text-teal-300 px-2 py-1 rounded text-xs">#retrieval</span>
                      <span className="bg-pink-900 text-pink-300 px-2 py-1 rounded text-xs">#generation</span>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-start" style={{gap: '36px'}}>
                  <BotAvatar />
                  <div className="flex items-center space-x-2">
                    <span className="text-white/60">Ask Gen está digitando</span>
                    <div className="flex space-x-1">
                      <motion.div
                        className="w-2 h-2 bg-white/40 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/40 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-white/40 rounded-full"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Converse no Discord da Comunidade
              </button>
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Statistics Section */}
      <SectionContainer gradient="from-orange-500/[0.12]" id="numeros">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-red-300" style={{ fontFamily: 'Oswald, sans-serif' }}>
              AI Data Engineering em Números
            </h2>
            <p className="text-2xl font-semibold text-white mb-4">Mercado em Expansão</p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Dados do mercado global que demonstram o crescimento exponencial
            </p>
            <p className="text-white/60 mt-2">
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
                gradient: "from-blue-500/[0.15]",
                color: "text-blue-300"
              },
              {
                title: "Serviços de Engenharia",
                subtitle: "Crescimento de Receita 2025-2030",
                value: "CAGR ~15%",
                description: "crescimento anual",
                source: "Fonte: Mordor",
                gradient: "from-green-500/[0.15]",
                color: "text-green-300"
              },
              {
                title: "Market Share",
                subtitle: "Infraestrutura de Dados",
                value: "BigQuery lidera 5x",
                description: "dominância de mercado",
                source: "Fonte: lakeFS",
                gradient: "from-purple-500/[0.15]",
                color: "text-purple-300"
              },
              {
                title: "Impacto Econômico",
                subtitle: "Trilhões em valor adicionado (2024)",
                value: "$3.1T",
                description: "impacto global",
                source: "Fonte: SpiralMantra",
                gradient: "from-orange-500/[0.15]",
                color: "text-orange-300"
              },
              {
                title: "Mercado Global de AI",
                subtitle: "Projeção até 2030 (Bilhões USD)",
                value: "800%",
                description: "crescimento",
                source: "Fonte: Fortune Business",
                gradient: "from-pink-500/[0.15]",
                color: "text-pink-300"
              },
              {
                title: "Performance dos Pioneiros",
                subtitle: "Taxa de Sucesso em Projetos AI",
                value: "2x",
                description: "mais efetivos",
                source: "Fonte: MIT/Boston Consulting",
                gradient: "from-cyan-500/[0.15]",
                color: "text-cyan-300"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${stat.gradient} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300`}
              >
                <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {stat.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">{stat.subtitle}</p>
                <div className={`text-4xl font-bold mb-2 ${stat.color}`} style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {stat.value}
                </div>
                <p className="text-white/80 font-medium mb-3">{stat.description}</p>
                <p className="text-white/50 text-xs">{stat.source}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Seja um Early Adopter
            </h3>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Os dados mostram: quem age primeiro, conquista resultados superiores. 
              Junte-se aos pioneiros que estão moldando o futuro do AI Data Engineering.
            </p>
          </motion.div>
        </div>
      </SectionContainer>

      {/* Benefits Section */}
      <SectionContainer gradient="from-emerald-500/[0.12]" id="beneficios">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-blue-300" style={{ fontFamily: 'Oswald, sans-serif' }}>
              Benefícios Exclusivos
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Para Cada Perfil, Uma Experiência Única
            </p>
            <p className="text-lg text-white/60 mt-4 max-w-4xl mx-auto">
              Seja você iniciante, profissional experiente ou empresa, temos benefícios exclusivos para acelerar sua jornada no mundo dos dados.
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
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-orange-300" style={{ fontFamily: 'Oswald, sans-serif' }}>
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
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  !isAnnual 
                    ? 'bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-lg' 
                    : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Mensal
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  isAnnual 
                    ? 'bg-gradient-to-r from-rose-600 to-orange-600 text-white shadow-lg' 
                    : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
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
              className="relative p-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-gray-500/[0.08] to-gray-600/[0.08] backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Nível Gratuito
              </h3>
              <p className="text-white/70 mb-6">Comece sua jornada em AI Data Engineering</p>
              
              <div className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
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

              <button className="w-full py-3 bg-white/[0.08] border border-white/[0.15] rounded-lg font-semibold text-white hover:bg-white/[0.12] transition-all duration-300" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Começar Gratuitamente
              </button>
            </motion.div>

            {/* Premium Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-8 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/[0.08] to-red-500/[0.08] backdrop-blur-sm"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  🔥 Mais Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Nível Premium
              </h3>
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
                  "Ask Gen Ilimitado",
                  "Acesso completo ao Discord (canais exclusivos)",
                  "Participação nas reuniões mensais no Zoom do AIDE Labs",
                  "Newsletter Semanal do que está mais quente no mercado",
                  "Ask Me Anything: Mentoria em grupo mensal (1h)",
                  "Projetos colaborativos",
                  "Job board exclusivo"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg font-semibold text-white hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
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

