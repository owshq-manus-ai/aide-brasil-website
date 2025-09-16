import React, { useState, useEffect, memo, useMemo, useCallback } from 'react'
import { motion, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'
import { 
  ChevronDown, 
  CheckCircle, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Bot, 
  Zap, 
  Users, 
  Target, 
  Shield, 
  Star, 
  User, 
  Briefcase, 
  BookOpen, 
  Award, 
  Brain, 
  MessageCircle, 
  ChartBar, 
  TrendingUp, 
  Crosshair, 
  Trophy 
} from 'lucide-react'
import Header from '../components/shared/Header'
import OptimizedBackground from '../components/shared/OptimizedBackground'
import '../App.css'

// Import CommunityHero directly to avoid lazy loading issues
import CommunityHero from '../components/ui/community-hero'

// Optimized Floating Shape Component with memoization
const FloatingShape = memo(({ size, position, gradient, delay = 0 }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile, render minimal static div without animations or blur
  if (isMobile) {
    return (
      <div className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-5`} />
    );
  }

  return (
    <motion.div
      className={`absolute ${position} ${size} bg-gradient-to-br ${gradient} rounded-2xl opacity-20 blur-sm`}
      animate={{
        y: [0, -15, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
})

// Optimized Section Container with memoization
const SectionContainer = memo(({ children, gradient, className = "", id }) => (
  <section id={id} className={`relative py-12 sm:py-16 lg:py-20 bg-[#030303] overflow-hidden ${className}`}>
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
))

// Optimized Animated Text Component with reduced effects
const AnimatedText = memo(({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
))

// Cycling Text Component for RAG
const CyclingText = () => {
  const words = ['RAG', 'AI', 'LLMs', 'GenAI', 'Vector Databases', 'Agent', 'Multi-Agent', 'GIP Architecture', 'LLMOps', 'Fundamentals', 'MCPs']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Cycle text on both desktop and mobile, but with different timing
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, isMobile ? 4000 : 3000) // Slightly slower on mobile for better readability
    return () => clearInterval(interval)
  }, [isMobile, words.length])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          // Reduce background animation on mobile for performance
          ...(isMobile ? {} : {
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          })
        }}
        exit={{ opacity: 0, y: isMobile ? -10 : -20 }}
        transition={{ 
          opacity: { duration: isMobile ? 0.4 : 0.3 },
          y: { duration: isMobile ? 0.4 : 0.3 },
          // Only animate background on desktop
          ...(isMobile ? {} : {
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          })
        }}
        className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white text-2xl md:text-3xl font-light"
        style={{
          backgroundSize: isMobile ? '100% 100%' : '200% 200%',
          textShadow: '0 0 8px rgba(192, 192, 192, 0.3), 0 0 16px rgba(169, 169, 169, 0.2), 0 0 24px rgba(128, 128, 128, 0.1)',
          filter: 'drop-shadow(0 0 6px rgba(192, 192, 192, 0.3)) drop-shadow(0 0 12px rgba(169, 169, 169, 0.2))',
          WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.3)'
        }}
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
  <BaseAvatar bgColor="bg-transparent" hasRelative={true}>
    {/* Mini Crystal Ball Effect (like Ask Gen Onyx) */}
    <motion.div
      animate={{ 
        rotate: 360,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="relative w-8 h-8 rounded-full"
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(107, 114, 128, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, #374151 0%, #1f2937 50%, #111827 100%)
        `,
        boxShadow: `
          0 0 20px rgba(156, 163, 175, 0.3),
          inset 0 0 20px rgba(0, 0, 0, 0.8),
          0 0 30px rgba(6, 182, 212, 0.1)
        `
      }}
    >
      {/* Inner Glow */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-gray-400/20 via-transparent to-cyan-400/10" />
      
      {/* Neon Edges */}
      <motion.div
        animate={{ 
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border border-gray-400/40"
        style={{
          boxShadow: `
            0 0 10px rgba(156, 163, 175, 0.4),
            inset 0 0 10px rgba(6, 182, 212, 0.1)
          `
        }}
      />

      {/* AI Core Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg style={{width: '16px', height: '16px'}} className="text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L9 7.5V9C9 10.1 8.1 11 7 11S5 10.1 5 9V7.5L3 7V9C3 10.1 3.9 11 5 11C5.8 11 6.5 10.6 6.9 10H8.1C8.5 10.6 9.2 11 10 11H11V13H10C9.2 13 8.5 13.4 8.1 14H6.9C6.5 13.4 5.8 13 5 13C3.9 13 3 13.9 3 15V17L5 16.5V15C5 13.9 5.9 13 7 13S9 13.9 9 15V16.5L11 16.5V15C11 13.9 11.9 13 13 13S15 13.9 15 15V16.5L21 17V15C21 13.9 20.1 13 19 13C18.2 13 17.5 13.4 17.1 14H15.9C15.5 13.4 14.8 13 14 13H13V11H14C14.8 11 15.5 10.6 15.9 10H17.1C17.5 10.6 18.2 11 19 11C20.1 11 21 10.1 21 9Z"/>
          <circle cx="12" cy="12" r="1.5" opacity="0.8"/>
        </svg>
      </div>
    </motion.div>
    
    {/* Enhanced AI Badge */}
    <div style={{width: '16px', height: '16px'}} className="absolute -top-1 -right-1 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
      <svg style={{width: '10px', height: '10px'}} className="text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.5 2C8.67 2 8 2.67 8 3.5V5.5C8 6.33 8.67 7 9.5 7S11 6.33 11 5.5V3.5C11 2.67 10.33 2 9.5 2ZM14.5 2C13.67 2 13 2.67 13 3.5V5.5C13 6.33 13.67 7 14.5 7S16 6.33 16 5.5V3.5C16 2.67 15.33 2 14.5 2ZM12 8C8.69 8 6 10.69 6 14S8.69 20 12 20 18 17.31 18 14 15.31 8 12 8ZM12 18C9.79 18 8 16.21 8 14S9.79 10 12 10 16 11.79 16 14 14.21 18 12 18ZM10 14C10 12.9 10.9 12 12 12S14 12.9 14 14 13.1 16 12 16 10 15.1 10 14Z"/>
      </svg>
    </div>
  </BaseAvatar>
)

// User Avatar Component
const UserAvatar = () => (
  <BaseAvatar bgColor="bg-gradient-to-br from-cyan-500 to-cyan-600">
    {/* Code/Terminal Icon for Data Engineer */}
    <svg style={{width: '20px', height: '20px'}} className="text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  </BaseAvatar>
)



function HomePage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
        {/* Optimized Background Image */}
        <OptimizedBackground />
        
        {/* Content Overlay */}
        <div className="relative z-10">
          {/* Header */}
          <Header />

          {/* Hero Section */}
          <CommunityHero />

      {/* About Section */}
      <section id="sobre" className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-12 sm:py-16 lg:py-12 sm:py-16 lg:py-20">
        {/* Background gradient - matching hero */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/5 to-yellow-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-lg text-gray-400 font-medium tracking-wider uppercase">Sobre a Comunidade</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
                A primeira comunidade brasileira
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-8 text-white/90 leading-relaxed"
            >
              onde <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400"
                style={{
                  backgroundSize: '200% 200%',
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
                  filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))'
                }}
              >
                Dados
              </motion.span> encontram <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400"
                style={{
                  backgroundSize: '200% 200%',
                  textShadow: '0 0 20px rgba(34, 197, 94, 0.4)',
                  filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))'
                }}
              >
                GenAI
              </motion.span>
            </motion.p>
          </motion.div>

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
                gradient: "from-green-500/[0.15]"
              },
              {
                icon: Zap,
                title: "Laboratório vivo de GenAI + Dados",
                description: "Um ecossistema colaborativo para testar ideias, criar soluções inéditas e participar de iniciativas que moldam o futuro da Engenharia de Dados e da Inteligência Artificial.",
                gradient: "from-green-500/[0.15]"
              },
              {
                icon: Shield,
                title: "Você nunca caminha sozinho",
                description: "Mentoria, comunidade ativa e o agente exclusivo Ask Gen, prontos para apoiar sua jornada 24/7.",
                gradient: "from-green-500/[0.15]"
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
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg font-semibold text-white hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-roboto">
              Transforme sua carreira
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ask Gen Section */}
      <section id="ask-gen" className="relative min-h-screen w-full bg-[#030303] overflow-hidden py-12 sm:py-16 lg:py-20">
        {/* Background gradient - matching hero with cyan colors */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/8 to-indigo-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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
              <span className="text-lg text-gray-400 font-medium tracking-wider uppercase">Converse com o</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 section-title">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400">
                O futuro da assistência em Dados e GenAI
              </span>
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-light mb-8 text-white/90 leading-relaxed"
            >
              conheça o <span className="text-gray-300">
                Ask Gen
              </span> seu assistente em <span className="text-gray-300">
                GenAI
              </span>
            </motion.p>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              Junte-se ao nosso Discord para conversar diretamente com o Ask Gen.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16 flex justify-center"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400 section-title">
              Ask Gen
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-cyan-300/80"
            >
              Inteligência artificial
            </motion.span>{' '}
            que entende seu contexto.{' '}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="text-cyan-300/80"
            >
              Respostas precisas
            </motion.span>{' '}
            para suas dúvidas técnicas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Modern Chat Interface */}
            <div className="relative rounded-2xl overflow-hidden">
              {/* Darker background with subtle cyan */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-900/95 to-black/95 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.02] via-transparent to-gray-800/10" />
              
              {/* Static border */}
              <div className="absolute inset-0 rounded-2xl border border-gray-800/30" />
              
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-600 rounded-full" />
                    <span className="font-bold text-lg text-gray-400">
                      #ask-the-expert
                    </span>
                    <span className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                      ● Online
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700/50">
                      {/* Discord Icon */}
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      <span className="text-gray-400 text-sm font-medium">1.247 membros ativos</span>
                    </div>
                  </div>
                </div>

              <div className="space-y-8">
                {/* User Message */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <UserAvatar />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-gray-400 font-bold text-sm">AI Data Engineer</span>
                      <span className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                        USER
                      </span>
                      <span className="text-gray-400 text-xs">Hoje às 14:20</span>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Removed glow effect */}
                      <div className="relative inline-block bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-700/30">
                        <p className="text-white text-sm">O que são foundation models?</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Ask Gen Response */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <BotAvatar />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-gray-400 font-bold text-sm">
                        Ask Gen
                      </span>
                      <span className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                        BOT
                      </span>
                      <span className="text-gray-400 text-xs">Hoje às 14:21</span>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="relative group"
                    >
                      {/* Removed glow effect */}
                      
                      {/* Message container */}
                      <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-950/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/40">
                        {/* Removed animated background */}
                        
                        {/* Content */}
                        <div className="relative p-6">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400" />
                          <p className="text-gray-100 text-base mb-4 leading-relaxed pl-4">
                            Foundation models são modelos de IA pré-treinados em grandes datasets que servem como base para diversas tarefas. Eles democratizam o acesso à IA avançada e aceleram o desenvolvimento de aplicações específicas.
                          </p>
                          <div className="flex flex-wrap gap-2 pl-4">
                            {['#foundation-models', '#ai', '#machine-learning'].map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium backdrop-blur-sm"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Second User Message */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <UserAvatar />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-gray-400 font-bold text-sm">AI Data Engineer</span>
                      <span className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                        USER
                      </span>
                      <span className="text-gray-400 text-xs">Hoje às 14:22</span>
                    </div>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      <div className="relative inline-block bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-700/30">
                        <p className="text-white text-sm">Como posso implementar RAG com LangChain?</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Second Ask Gen Response */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    className="flex-shrink-0 mt-1"
                  >
                    <BotAvatar />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-gray-400 font-bold text-sm">
                        Ask Gen
                      </span>
                      <span className="px-3 py-1 bg-gray-900/50 text-gray-400 rounded-lg text-xs font-medium border border-gray-700/50">
                        BOT
                      </span>
                      <span className="text-gray-400 text-xs">Hoje às 14:23</span>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.3 }}
                      className="relative group"
                    >
                      <div className="relative bg-gradient-to-br from-gray-900/95 via-black/95 to-gray-950/95 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/40">
                        <div className="relative p-6">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400" />
                          <p className="text-gray-100 text-base mb-4 leading-relaxed pl-4">
                            Para implementar RAG com LangChain, você precisa: 1) Configurar um vector store (Pinecone, Chroma), 2) Criar embeddings dos documentos, 3) Implementar a chain de retrieval com seu LLM preferido. Vou te mostrar um exemplo prático...
                          </p>
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5 }}
                            className="bg-gray-800/50 rounded-lg p-3 pl-7 mb-4 border border-gray-700/30"
                          >
                            <code className="text-cyan-300 text-sm font-mono">
                              from langchain.chains import RetrievalQA<br/>
                              from langchain.embeddings import OpenAIEmbeddings<br/>
                              from langchain.vectorstores import Chroma
                            </code>
                          </motion.div>
                          <div className="flex flex-wrap gap-2 pl-4">
                            {['#rag', '#langchain', '#vectordb', '#llm'].map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6 + i * 0.1 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 rounded-full text-xs font-medium backdrop-blur-sm"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
                  {/* Clean styled section matching About page */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                  >
                    <h3 className="text-3xl font-bold mb-8 text-center">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-cyan-400">
                        Ask Gen em Ação
                      </span>
                    </h3>
                    
                    <p className="text-xl text-white/80 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                      Respostas instantâneas sobre AI Data Engineering, código otimizado na hora, 
                      melhores práticas sempre atualizadas.
                    </p>
                    
                    {/* Feature cards matching About section style */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          icon: Zap,
                          title: "Tempo Real",
                          description: "Respostas imediatas para suas dúvidas técnicas",
                          gradient: "from-cyan-500/[0.15]"
                        },
                        {
                          icon: Brain,
                          title: "IA Avançada",
                          description: "Powered by modelos de linguagem de última geração",
                          gradient: "from-cyan-500/[0.15]"
                        },
                        {
                          icon: MessageCircle,
                          title: "24/7 Online",
                          description: "Disponível a qualquer hora no Discord da comunidade",
                          gradient: "from-cyan-500/[0.15]"
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className={`p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.gradient} backdrop-blur-sm hover:border-white/[0.15] transition-all duration-300 text-center`}
                        >
                          <item.icon className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
                          <h4 className="text-lg font-bold mb-2 text-white">
                            {item.title}
                          </h4>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                  {/* Metallic Chrome Questions with Dramatic Reveal */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-6 mb-8"
                  >
                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="text-2xl font-bold leading-relaxed relative"
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(90deg, 
                            #C0C0C0 0%, 
                            #E8E8E8 20%, 
                            #FFFFFF 40%, 
                            #E8E8E8 60%, 
                            #C0C0C0 80%, 
                            #E8E8E8 100%)`,
                          backgroundSize: '200% 100%',
                          filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3))',
                          textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        Mas e se,
                      </motion.span>{' '}
                      <span className="text-white/70">em vez de apenas reagir às suas dúvidas,</span>{' '}
                      <motion.span
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(255, 255, 255, 0.8)',
                            '0 0 40px rgba(255, 255, 255, 1)',
                            '0 0 20px rgba(255, 255, 255, 0.8)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                        className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: '200% 100%',
                        }}
                      >
                        ele pudesse antecipar suas necessidades?
                      </motion.span>
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      className="text-2xl font-bold leading-relaxed relative"
                    >
                      <motion.span
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                          delay: 1
                        }}
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(90deg, 
                            #C0C0C0 0%, 
                            #E8E8E8 20%, 
                            #FFFFFF 40%, 
                            #E8E8E8 60%, 
                            #C0C0C0 80%, 
                            #E8E8E8 100%)`,
                          backgroundSize: '200% 100%',
                          filter: 'drop-shadow(0 2px 8px rgba(255, 255, 255, 0.3))',
                          textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                        }}
                      >
                        E se
                      </motion.span>{' '}
                      <span className="text-white/70">ele soubesse exatamente o que você precisa aprender</span>{' '}
                      <motion.span
                        animate={{
                          textShadow: [
                            '0 0 20px rgba(255, 255, 255, 0.8)',
                            '0 0 40px rgba(255, 255, 255, 1)',
                            '0 0 20px rgba(255, 255, 255, 0.8)'
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                        className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
                        style={{
                          backgroundSize: '200% 100%',
                        }}
                      >
                        antes mesmo de você perguntar?
                      </motion.span>
                    </motion.p>
                    
                    {/* Chrome divider line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.3 }}
                      className="w-full h-[2px] my-8"
                      style={{
                        background: 'linear-gradient(90deg, transparent, #C0C0C0, #FFFFFF, #C0C0C0, transparent)',
                        boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ask Gen Onyx Section */}
      <section className="relative min-h-screen bg-[#030303] overflow-hidden" id="onyx">
        {/* Enhanced Space Background */}
        <div className="absolute inset-0">
          {/* Deep space gradient with subtle texture */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#030303] to-[#0f0f0f]" />
          
          {/* Nebula-like background effect */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-gray-600 via-transparent to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-gray-700 via-transparent to-transparent rounded-full blur-[100px]" />
          </div>
          
          {/* Star field with varying sizes and brightness */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => {
              const size = Math.random() > 0.8 ? 2 : 1;
              const brightness = Math.random() * 0.5 + 0.3;
              return (
                <motion.div
                  key={`star-${i}`}
                  animate={{
                    opacity: [brightness, brightness * 0.3, brightness],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${brightness})`
                  }}
                />
              );
            })}
          </div>
          
          {/* Main planet with enhanced details */}
          <div className="absolute -right-48 top-1/3 -translate-y-1/2">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{
                duration: 240,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-[700px] h-[700px]"
            >
              {/* Planet atmosphere glow */}
              <div 
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(156, 163, 175, 0.2) 60%, transparent 100%)',
                  filter: 'blur(20px)',
                }}
              />
              
              {/* Planet body */}
              <div 
                className="absolute inset-[50px] rounded-full opacity-15"
                style={{
                  background: `
                    radial-gradient(circle at 35% 35%, rgba(200, 200, 210, 0.4) 0%, transparent 35%),
                    radial-gradient(circle at 65% 65%, rgba(100, 110, 130, 0.3) 0%, transparent 40%),
                    radial-gradient(circle at 50% 50%, #1f1f1f 0%, #0a0a0a 60%, #000000 100%)
                  `,
                  boxShadow: `
                    inset -100px -100px 150px rgba(255, 255, 255, 0.03),
                    inset 100px 100px 150px rgba(0, 0, 0, 0.6),
                    0 0 300px rgba(156, 163, 175, 0.08)
                  `,
                }}
              />
              
              {/* Planet surface details */}
              <div 
                className="absolute inset-[50px] rounded-full opacity-10"
                style={{
                  background: `
                    conic-gradient(from 0deg at 50% 50%, 
                      transparent, 
                      rgba(156, 163, 175, 0.1), 
                      transparent, 
                      rgba(75, 85, 99, 0.1), 
                      transparent
                    )
                  `,
                  mixBlendMode: 'screen',
                }}
              />
            </motion.div>
          </div>
          
          {/* Secondary floating moon */}
          <motion.div
            animate={{ 
              y: [0, -40, 0],
              x: [0, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute left-32 bottom-32"
          >
            <div 
              className="w-24 h-24 rounded-full opacity-25"
              style={{
                background: `
                  radial-gradient(circle at 40% 40%, rgba(220, 220, 230, 0.5) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, #2a2a2a 0%, #0a0a0a 100%)
                `,
                boxShadow: `
                  0 0 40px rgba(255, 255, 255, 0.1),
                  inset -10px -10px 20px rgba(255, 255, 255, 0.05)
                `,
              }}
            />
          </motion.div>
          
          {/* Cosmic dust particles */}
          <div className="absolute inset-0 opacity-[0.02]">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={`dust-${i}`}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: Math.random() * 10,
                }}
                className="absolute w-1 h-1 bg-gray-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(1px)',
                }}
              />
            ))}
          </div>
          
          {/* Ambient light sources */}
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-gray-800/[0.02] to-transparent rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gray-700/[0.02] to-transparent rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
              <div className="inline-flex items-center gap-3">
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                />
                <span className="text-lg text-gray-400 font-medium tracking-[0.3em] uppercase"
                      style={{ 
                        textShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
                        letterSpacing: '0.3em'
                      }}>
                  ✦ Apresentando ✦
                </span>
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </div>
            </motion.div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 section-title">
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
              A Revolução Proativa da Inteligência Artificial{' '}
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  textShadow: [
                    '0 0 30px rgba(255, 255, 255, 0.3)',
                    '0 0 60px rgba(255, 255, 255, 0.6)',
                    '0 0 30px rgba(255, 255, 255, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300 font-bold"
                style={{
                  backgroundSize: '200% 200%',
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))'
                }}
              >
                Generativa
              </motion.span>
            </motion.p>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-white/70 leading-relaxed">
                Você conheceu o Ask Gen — o assistente que responde suas perguntas.
              </p>
              <motion.p 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl text-white/90 leading-relaxed font-medium"
                style={{
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}
              >
                Agora conheça o <span className="bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent font-bold">Onyx</span> — 
                a inteligência que{' '}
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white font-bold"
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                >
                  antecipa suas necessidades
                </motion.span>{' '}
                e{' '}
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-white font-bold"
                  style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.8)' }}
                >
                  acelera sua carreira
                </motion.span>{' '}
                com precisão analítica.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-4"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  <p className="text-2xl text-white/80 font-light italic relative"
                     style={{
                       textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
                       letterSpacing: '0.02em'
                     }}>
                    <span className="text-3xl text-white/40 absolute -left-8 -top-2">"</span>
                    Onyx não espera você perguntar.
                    <br />
                    <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-medium">
                      Ele já tem as respostas.
                    </span>
                    <span className="text-3xl text-white/40 absolute -right-8 -bottom-2">"</span>
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Onyx 3D Orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center items-center h-full"
            >
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Flowing particles from above */}
                {[...Array(30)].map((_, i) => (
                  <motion.div
                    key={`particle-fall-${i}`}
                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                    initial={{
                      x: Math.random() * 400 - 200,
                      y: -400,
                      opacity: 0
                    }}
                    animate={{
                      y: 400,
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 6,
                      ease: "linear"
                    }}
                    style={{
                      boxShadow: '0 0 3px rgba(255, 255, 255, 0.4)',
                      filter: 'blur(0.5px)'
                    }}
                  />
                ))}
                
                {/* Mystical Particle Field from Oracle */}
                <div className="absolute -inset-20 pointer-events-none">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30) * Math.PI / 180;
                    const radius = 60 + Math.random() * 20;
                    const duration = 40 + Math.random() * 30;
                    
                    return (
                      <motion.div
                        key={`mystical-particle-${i}`}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                        animate={{
                          x: [
                            Math.cos(angle) * radius,
                            Math.cos(angle + Math.PI) * radius,
                            Math.cos(angle) * radius
                          ],
                          y: [
                            Math.sin(angle) * radius,
                            Math.sin(angle + Math.PI) * radius,
                            Math.sin(angle) * radius
                          ],
                          scale: [1, 1.3, 1],
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{
                          duration: duration,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                          ease: "linear"
                        }}
                      >
                        <div 
                          className="w-1 h-1 rounded-full bg-gray-300"
                          style={{
                            boxShadow: `
                              0 0 8px rgba(156, 163, 175, 0.8),
                              0 0 16px rgba(156, 163, 175, 0.5)
                            `,
                            filter: 'blur(0.3px)'
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Energy Waves */}
                {[0, 1, 2].map((wave) => (
                  <motion.div
                    key={`energy-wave-${wave}`}
                    className="absolute inset-0"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      delay: wave * 2.5,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full rounded-full"
                         style={{
                           background: `radial-gradient(circle, transparent 30%, rgba(156, 163, 175, 0.1) 50%, transparent 70%)`,
                           boxShadow: `
                             0 0 60px rgba(156, 163, 175, 0.2),
                             inset 0 0 40px rgba(156, 163, 175, 0.1)
                           `,
                           filter: 'blur(2px)'
                         }}
                    />
                  </motion.div>
                ))}
                
                {/* Silver Metallic Glow Ring */}
                <motion.div
                  animate={{
                    scale: [1.3, 1.5, 1.3],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `
                      conic-gradient(
                        from 0deg at 50% 50%,
                        transparent 0deg,
                        rgba(192, 192, 192, 0.3) 45deg,
                        rgba(224, 224, 224, 0.5) 90deg,
                        rgba(192, 192, 192, 0.3) 135deg,
                        transparent 180deg,
                        rgba(156, 163, 175, 0.2) 225deg,
                        rgba(192, 192, 192, 0.4) 270deg,
                        rgba(156, 163, 175, 0.2) 315deg,
                        transparent 360deg
                      )
                    `,
                    filter: 'blur(8px)',
                  }}
                />
                
                {/* Chrome Reflection Layer */}
                <div className="absolute inset-0 rounded-full pointer-events-none"
                     style={{
                       background: `
                         linear-gradient(135deg, 
                           transparent 30%,
                           rgba(192, 192, 192, 0.1) 40%,
                           rgba(224, 224, 224, 0.2) 45%,
                           rgba(192, 192, 192, 0.1) 50%,
                           transparent 70%
                         )
                       `,
                       transform: 'scale(1.2)',
                       filter: 'blur(4px)'
                     }}
                />
                
                {/* Gray Mist Aura */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-16 rounded-full"
                  style={{
                    background: `
                      radial-gradient(circle at 50% 50%,
                        rgba(156, 163, 175, 0.2) 0%,
                        rgba(156, 163, 175, 0.15) 30%,
                        rgba(192, 192, 192, 0.1) 50%,
                        transparent 70%
                      )
                    `,
                    boxShadow: `
                      0 0 100px rgba(156, 163, 175, 0.4),
                      0 0 200px rgba(192, 192, 192, 0.2)
                    `,
                    filter: 'blur(20px)'
                  }}
                />
                
                {/* Main Onyx Orb with Oracle influence */}
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
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{
                             background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                             boxShadow: '0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                           }}>
                        <User className="w-7 h-7 text-white/90" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Análise Proativa de Perfil
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        Onyx analisa seu histórico de perguntas e identifica gaps de conhecimento antes mesmo de você perceber.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{
                             background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                             boxShadow: '0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                           }}>
                        <Zap className="w-7 h-7 text-white/90" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Recomendações Personalizadas
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        Baseado nas suas interações, Onyx sugere cursos, certificações e oportunidades específicas para você.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{
                             background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                             boxShadow: '0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                           }}>
                        <Bot className="w-7 h-7 text-white/90" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Alertas de Carreira
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        Onyx monitora o mercado e te avisa sobre vagas que combinam 100% com seu perfil.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative flex items-start space-x-4 p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{
                             background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
                             boxShadow: '0 0 30px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                           }}>
                        <Star className="w-7 h-7 text-white/90" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Mentoria Inteligente
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        Onyx cria um plano de carreira personalizado e te guia passo a passo até seus objetivos.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-12 py-6 rounded-2xl font-bold text-lg transition-all duration-500 overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, 
                      #000000 0%, 
                      #1a1a1a 25%, 
                      #2d2d2d 50%, 
                      #1a1a1a 75%, 
                      #000000 100%)`,
                    border: '2px solid transparent',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box',
                    boxShadow: `
                      0 0 40px rgba(255, 255, 255, 0.2),
                      0 0 80px rgba(255, 255, 255, 0.1),
                      inset 0 0 30px rgba(255, 255, 255, 0.05),
                      0 10px 30px rgba(0, 0, 0, 0.8)
                    `,
                    fontFamily: 'Oswald, sans-serif'
                  }}
                >
                  {/* Holographic border effect */}
                  <motion.div
                    animate={{ 
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(90deg, 
                        transparent, 
                        rgba(255, 255, 255, 0.4), 
                        rgba(192, 192, 192, 0.4),
                        rgba(255, 255, 255, 0.4),
                        transparent)`,
                      backgroundSize: '200% 100%',
                      opacity: 0.8,
                      padding: '2px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude'
                    }}
                  />
                  
                  {/* Premium shine effect */}
                  <motion.div
                    animate={{ 
                      x: ['-200%', '200%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                  
                  {/* Button text with gradient */}
                  <span className="relative flex items-center justify-center space-x-3">
                    <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
                          style={{ 
                            backgroundSize: '200% 100%',
                            textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                          }}>
                      Ative seu Onyx Pessoal
                    </span>
                    <motion.span
                      animate={{ 
                        x: [0, 8, 0],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    >
                      →
                    </motion.span>
                  </span>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                      filter: 'blur(20px)'
                    }}
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Demo Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 max-w-5xl mx-auto"
          >
            {/* Section Header with Metallic Effect */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-block"
              >
                {/* Metallic Badge */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full mb-6"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(156, 163, 175, 0.1) 0%, 
                      rgba(192, 192, 192, 0.2) 25%, 
                      rgba(224, 224, 224, 0.3) 50%, 
                      rgba(192, 192, 192, 0.2) 75%, 
                      rgba(156, 163, 175, 0.1) 100%)`,
                    backgroundSize: '200% 100%',
                    border: '1px solid rgba(156, 163, 175, 0.3)',
                    boxShadow: '0 0 30px rgba(156, 163, 175, 0.2)'
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-gray-300 animate-pulse" />
                  <span className="text-sm text-gray-300 font-medium tracking-wider uppercase">
                    Agentic System
                  </span>
                </motion.div>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-5xl font-bold mb-4" 
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg, 
                      #9CA3AF 0%, 
                      #E5E7EB 20%, 
                      #FFFFFF 40%, 
                      #E5E7EB 60%, 
                      #9CA3AF 80%, 
                      #E5E7EB 100%)`,
                    backgroundSize: '200% 100%',
                    filter: 'drop-shadow(0 4px 20px rgba(255, 255, 255, 0.3))',
                  }}
                >
                  Veja o Onyx
                </motion.span>
                {' '}
                <span className="text-white">em</span>
                {' '}
                <motion.span
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(156, 163, 175, 0.8)',
                      '0 0 40px rgba(156, 163, 175, 1)',
                      '0 0 20px rgba(156, 163, 175, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                  className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent"
                >
                  Ação
                </motion.span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-white/50 text-xl font-light"
              >
                Experimente a{' '}
                <span className="text-white/70 font-medium">inteligência proativa</span>
                {' '}que transforma sua maneira de aprender
              </motion.p>
            </div>
            
            {/* Discord-style Chat Container */}
            <div className="relative max-w-3xl mx-auto">
              <div className="bg-[#1a1d21] rounded-2xl border border-gray-800/50 overflow-hidden"
                style={{
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Chat Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-gray-400 text-sm font-medium">#ask-the-expert</span>
                    <span className="text-gray-500 text-sm">• Online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-400 text-sm">1.247 membros ativos</span>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-6">
                  {/* User Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-white font-semibold">AI Data Engineer</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">USER</span>
                        <span className="text-xs text-gray-600">Hoje às 14:20</span>
                      </div>
                      <div className="bg-[#2a2d31] rounded-lg px-4 py-3 inline-block">
                        <p className="text-gray-200">
                          "Quero me especializar em GenAI para dados"
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Onyx Response */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="flex items-start gap-4"
                  >
                    {/* Onyx Avatar */}
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `
                            radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.3) 0%, transparent 50%),
                            linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                          `,
                          boxShadow: '0 0 15px rgba(156, 163, 175, 0.3)'
                        }}
                      >
                        <motion.div
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border border-gray-300/50"
                        />
                      </motion.div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-white font-semibold">Onyx</span>
                        <span className="text-xs px-2 py-0.5 bg-gray-700/50 text-gray-300 rounded uppercase tracking-wider">PROATIVO</span>
                        <span className="text-xs text-gray-600">Hoje às 14:21</span>
                      </div>
                      
                      <div className="space-y-3">
                        {/* Analysis message */}
                        <div className="bg-[#2a2d31] rounded-lg px-4 py-3 inline-block">
                          <p className="text-yellow-400 flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4" />
                            Analisando seu perfil...
                          </p>
                          <p className="text-gray-300">Onyx detectou:</p>
                        </div>
                        
                        {/* Recommendations as Discord embeds */}
                        <div className="space-y-3">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 1.8 }}
                            className="border-l-4 border-blue-500 bg-[#2a2d31] rounded px-3 py-3"
                          >
                            <div className="flex items-center gap-2">
                              <Target className="w-4 h-4 text-blue-400" />
                              <span className="text-white font-medium">RAG + Vector Databases</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">próximo passo ideal para seu perfil</p>
                            <div className="flex items-start gap-2 mt-2">
                              <ChartBar className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-400 text-xs leading-relaxed">
                                <span className="text-gray-300">Razão:</span> Detectamos interesse em VectorDBs e Embeddings. 
                                Você está pronto para sistemas avançados de recuperação com RAG.
                              </p>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 2.0 }}
                            className="border-l-4 border-green-500 bg-[#2a2d31] rounded px-3 py-3"
                          >
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-green-400" />
                              <span className="text-white font-medium">5 vagas GenAI Engineer abertas</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">90% match com seu perfil</p>
                            <div className="flex items-start gap-2 mt-2">
                              <TrendingUp className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-400 text-xs leading-relaxed">
                                <span className="text-gray-300">Match:</span> Python + LangChain + LLMs = requisitos ideais. 
                                iFood, Nubank e Stone contratando agora.
                              </p>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 2.2 }}
                            className="border-l-4 border-purple-500 bg-[#2a2d31] rounded px-3 py-3"
                          >
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-purple-400" />
                              <span className="text-white font-medium">Curso LangChain + ChromaDB</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">recomendado para você</p>
                            <div className="flex items-start gap-2 mt-2">
                              <Crosshair className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-400 text-xs leading-relaxed">
                                <span className="text-gray-300">Gap identificado:</span> Integração avançada de chains e otimização de vector stores. 
                                Curso completo para dominar GenAI.
                              </p>
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 2.4 }}
                            className="border-l-4 border-orange-500 bg-[#2a2d31] rounded px-3 py-3"
                          >
                            <div className="flex items-center gap-2">
                              <Award className="w-4 h-4 text-orange-400" />
                              <span className="text-white font-medium">Certificação AWS Bedrock</span>
                            </div>
                            <p className="text-gray-400 text-sm mt-1">disponível agora</p>
                            <div className="flex items-start gap-2 mt-2">
                              <Trophy className="w-3 h-3 text-gray-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-400 text-xs leading-relaxed">
                                <span className="text-gray-300">Benefício:</span> 78% reportam aumento de 25% no salário. 
                                Sua experiência cloud + IA = aprovação garantida.
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="relative min-h-screen bg-[#030303] overflow-hidden py-12 sm:py-16 lg:py-20" id="numeros">
        {/* Orange-themed Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#030303] to-[#0f0a05]" />
          
          {/* Orange glow effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3">
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                />
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-sm font-medium tracking-[0.3em] uppercase px-4 sm:px-6 py-2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(251, 146, 60, 0.1) 0%, 
                      rgba(254, 215, 170, 0.2) 25%, 
                      rgba(255, 237, 213, 0.3) 50%, 
                      rgba(254, 215, 170, 0.2) 75%, 
                      rgba(251, 146, 60, 0.1) 100%)`,
                    backgroundSize: '200% 100%',
                    color: '#FED7AA',
                    border: '1px solid rgba(251, 146, 60, 0.3)',
                    boxShadow: '0 0 30px rgba(251, 146, 60, 0.2)',
                    textShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
                  }}
                >
                  ⚡ Momento de Oportunidade ⚡
                </motion.span>
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 section-title">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, 
                    #FB923C 0%, 
                    #FED7AA 20%, 
                    #FFFFFF 40%, 
                    #FED7AA 60%, 
                    #FB923C 80%, 
                    #FED7AA 100%)`,
                  backgroundSize: '200% 100%',
                  filter: 'drop-shadow(0 4px 20px rgba(251, 146, 60, 0.5))',
                }}
              >
                O Futuro
              </motion.span>
              {' '}
              <span className="text-white">é</span>
              {' '}
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(251, 146, 60, 0.8)',
                    '0 0 40px rgba(251, 146, 60, 1)',
                    '0 0 20px rgba(251, 146, 60, 0.8)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent"
              >
                Agora
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mb-4 text-white/80 leading-relaxed max-w-3xl mx-auto"
            >
              Números que comprovam: quem domina{' '}
              <motion.span
                animate={{
                  color: ['#FED7AA', '#FB923C', '#FED7AA']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="font-medium"
              >
                AI Data Engineering
              </motion.span>
              {' '}hoje, lidera o mercado amanhã
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/50"
            >
              Dados compilados das maiores consultorias globais
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {[
              {
                title: "Crescimento do Mercado",
                subtitle: "AI Data Engineering 2024-2033",
                value: "147%",
                description: "crescimento previsto",
                source: "Fonte: CONSAINSIGHTS",
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
              },
              {
                title: "Serviços de Engenharia",
                subtitle: "Crescimento de Receita 2025-2030",
                value: "CAGR ~15%",
                description: "crescimento anual",
                source: "Fonte: Market",
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
              },
              {
                title: "Market Share",
                subtitle: "Infraestrutura de Dados",
                value: "BigQuery lidera 5x",
                description: "dominância de mercado",
                source: "Fonte: IdataS",
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
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
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
              },
              {
                title: "Performance dos Pioneiros",
                subtitle: "Taxa de Sucesso em Projetos AI",
                value: "2x",
                description: "mais efetivos",
                source: "Fonte: MIT/Boston Consulting",
                gradient: "from-orange-600 to-red-600",
                bgGradient: "from-orange-500/[0.15]"
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
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6 section-subtitle"
            >
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, 
                    #FB923C 0%, 
                    #FED7AA 20%, 
                    #FFFFFF 40%, 
                    #FED7AA 60%, 
                    #FB923C 80%, 
                    #FED7AA 100%)`,
                  backgroundSize: '200% 100%',
                  filter: 'drop-shadow(0 2px 10px rgba(251, 146, 60, 0.3))',
                }}
              >
                Seja Pioneiro
              </motion.span>
              {' '}
              <span className="text-white/90">ou Seja Substituído</span>
            </motion.h3>
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              Os dados são claros: empresas que adotam IA agora têm{' '}
              <span className="text-orange-300 font-medium">2x mais chances de liderar</span>
              {' '}seus mercados em 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative min-h-screen bg-[#030303] overflow-hidden py-12 sm:py-16 lg:py-20" id="beneficios">
        {/* Purple-themed Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#030303] to-[#0a0509]" />
          
          {/* Purple glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3">
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                />
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-sm font-medium tracking-[0.3em] uppercase px-4 sm:px-6 py-2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(139, 69, 193, 0.1) 0%, 
                      rgba(196, 181, 253, 0.2) 25%, 
                      rgba(233, 213, 255, 0.3) 50%, 
                      rgba(196, 181, 253, 0.2) 75%, 
                      rgba(139, 69, 193, 0.1) 100%)`,
                    backgroundSize: '200% 100%',
                    color: '#C4B5FD',
                    border: '1px solid rgba(139, 69, 193, 0.3)',
                    boxShadow: '0 0 30px rgba(139, 69, 193, 0.2)',
                    textShadow: '0 0 20px rgba(139, 69, 193, 0.5)'
                  }}
                >
                  ✨ Jornada Personalizada ✨
                </motion.span>
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 section-title">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, 
                    #8B5CF6 0%, 
                    #C4B5FD 20%, 
                    #FFFFFF 40%, 
                    #C4B5FD 60%, 
                    #8B5CF6 80%, 
                    #C4B5FD 100%)`,
                  backgroundSize: '200% 100%',
                  filter: 'drop-shadow(0 4px 20px rgba(139, 92, 246, 0.5))',
                }}
              >
                Do Iniciante
              </motion.span>
              {' '}
              <span className="text-white">ao</span>
              {' '}
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.8)',
                    '0 0 40px rgba(139, 92, 246, 1)',
                    '0 0 20px rgba(139, 92, 246, 0.8)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent"
              >
                Expert
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mb-4 text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              Cada profissional tem uma jornada única.{' '}
              <motion.span
                animate={{
                  color: ['#C4B5FD', '#8B5CF6', '#C4B5FD']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="font-medium"
              >
                Encontre a sua
              </motion.span>
              {' '}no AI Data Engineering
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/50 max-w-3xl mx-auto"
            >
              Caminhos estruturados para cada nível de experiência
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                gradient: "from-purple-500/[0.15]",
                headerGradient: "from-purple-600 to-violet-600",
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
                gradient: "from-purple-500/[0.15]",
                headerGradient: "from-purple-600 to-violet-600",
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
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-screen bg-[#030303] overflow-hidden py-12 sm:py-16 lg:py-20" id="comunidade">
        {/* Rose/Red-themed Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#030303] to-[#0a0305]" />
          
          {/* Rose glow effects */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
          
          {/* Animated gradient orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-rose-500/5 via-transparent to-red-500/5 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3">
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                />
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="text-sm font-medium tracking-[0.3em] uppercase px-4 sm:px-6 py-2 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(244, 63, 94, 0.1) 0%, 
                      rgba(251, 207, 232, 0.2) 25%, 
                      rgba(253, 242, 248, 0.3) 50%, 
                      rgba(251, 207, 232, 0.2) 75%, 
                      rgba(244, 63, 94, 0.1) 100%)`,
                    backgroundSize: '200% 100%',
                    color: '#FBCFE8',
                    border: '1px solid rgba(244, 63, 94, 0.3)',
                    boxShadow: '0 0 30px rgba(244, 63, 94, 0.2)',
                    textShadow: '0 0 20px rgba(244, 63, 94, 0.5)'
                  }}
                >
                  🚀 Transformação Completa 🚀
                </motion.span>
                <motion.div
                  animate={{ width: [0, 40, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-rose-400 to-transparent"
                />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 section-title">
              <motion.span
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(90deg, 
                    #F43F5E 0%, 
                    #FBCFE8 20%, 
                    #FFFFFF 40%, 
                    #FBCFE8 60%, 
                    #F43F5E 80%, 
                    #FBCFE8 100%)`,
                  backgroundSize: '200% 100%',
                  filter: 'drop-shadow(0 4px 20px rgba(244, 63, 94, 0.5))',
                }}
              >
                Seja Elite
              </motion.span>
              {' '}
              <span className="text-white">ou</span>
              {' '}
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(244, 63, 94, 0.8)',
                    '0 0 40px rgba(244, 63, 94, 1)',
                    '0 0 20px rgba(244, 63, 94, 0.8)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 bg-clip-text text-transparent"
              >
                Seja Esquecido
              </motion.span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-light mb-4 text-white/80 leading-relaxed max-w-4xl mx-auto"
            >
              Apenas{' '}
              <motion.span
                animate={{
                  color: ['#FBCFE8', '#F43F5E', '#FBCFE8']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="font-medium"
              >
                1% dos profissionais
              </motion.span>
              {' '}dominarão IA em 2025. Você será um deles?
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/50 max-w-3xl mx-auto"
            >
              Junte-se à elite que está construindo o futuro agora
            </motion.p>
          </motion.div>

          {/* Premium Pricing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="relative bg-gradient-to-r from-gray-900/50 to-black/50 p-1 rounded-full border border-gray-500/30 backdrop-blur-sm"
              style={{
                boxShadow: `
                  0 0 20px rgba(156, 163, 175, 0.1),
                  inset 0 0 20px rgba(0, 0, 0, 0.5)
                `
              }}
            >
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative px-8 py-3 rounded-full transition-all duration-300 ${
                  !isAnnual 
                    ? '' 
                    : 'text-white/60 hover:text-white/80'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {!isAnnual && (
                  <motion.div
                    layoutId="activeToggle"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, 
                        rgba(156, 163, 175, 0.1) 0%, 
                        rgba(209, 213, 219, 0.2) 25%, 
                        rgba(243, 244, 246, 0.3) 50%, 
                        rgba(209, 213, 219, 0.2) 75%, 
                        rgba(156, 163, 175, 0.1) 100%)`,
                      border: '1px solid rgba(156, 163, 175, 0.3)',
                      boxShadow: '0 0 15px rgba(156, 163, 175, 0.2)'
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 font-medium ${!isAnnual ? 'text-gray-200' : ''}`}>
                  Mensal
                </span>
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`relative px-8 py-3 rounded-full transition-all duration-300 ${
                  isAnnual 
                    ? '' 
                    : 'text-white/60 hover:text-white/80'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {isAnnual && (
                  <motion.div
                    layoutId="activeToggle"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, 
                        rgba(156, 163, 175, 0.1) 0%, 
                        rgba(209, 213, 219, 0.2) 25%, 
                        rgba(243, 244, 246, 0.3) 50%, 
                        rgba(209, 213, 219, 0.2) 75%, 
                        rgba(156, 163, 175, 0.1) 100%)`,
                      border: '1px solid rgba(156, 163, 175, 0.3)',
                      boxShadow: '0 0 15px rgba(156, 163, 175, 0.2)'
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className={`relative z-10 flex items-center gap-2 ${isAnnual ? 'text-gray-200' : ''}`}>
                  <span className="font-medium">Anual</span>
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="px-2 py-0.5 rounded-full text-xs font-semibold"
                    style={{
                      background: `linear-gradient(90deg, 
                        #F59E0B 0%, 
                        #FCD34D 50%, 
                        #F59E0B 100%)`,
                      backgroundSize: '200% 100%',
                      color: '#1F2937',
                      textShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
                      fontWeight: '700'
                    }}
                  >
                    -20%
                  </motion.span>
                </div>
              </button>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative p-8 rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/[0.08] to-orange-500/[0.08] backdrop-blur-sm"
              style={{
                boxShadow: `
                  0 0 20px rgba(244, 63, 94, 0.1),
                  inset 0 1px 0 rgba(244, 63, 94, 0.1)
                `
              }}
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
                    <CheckCircle className="w-5 h-5 text-rose-400" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-gradient-to-r from-rose-600 to-orange-600 rounded-lg font-semibold text-white hover:from-rose-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105" style={{ fontFamily: 'Oswald, sans-serif' }}>
                Começar Gratuitamente
              </button>
            </motion.div>

            {/* Premium Tier - Ask Gen Onyx Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-8 rounded-2xl border border-gray-500/50 bg-gradient-to-br from-gray-900/30 to-black/50 backdrop-blur-sm"
              style={{
                boxShadow: `
                  0 0 40px rgba(156, 163, 175, 0.3),
                  inset 0 0 30px rgba(0, 0, 0, 0.8),
                  0 0 100px rgba(156, 163, 175, 0.1)
                `
              }}
            >
              {/* Premium Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="px-4 sm:px-6 py-2 rounded-full text-sm font-semibold border"
                  style={{
                    background: `linear-gradient(90deg, 
                      rgba(156, 163, 175, 0.1) 0%, 
                      rgba(209, 213, 219, 0.2) 25%, 
                      rgba(243, 244, 246, 0.3) 50%, 
                      rgba(209, 213, 219, 0.2) 75%, 
                      rgba(156, 163, 175, 0.1) 100%)`,
                    backgroundSize: '200% 100%',
                    color: '#E5E7EB',
                    border: '1px solid rgba(156, 163, 175, 0.4)',
                    boxShadow: '0 0 30px rgba(156, 163, 175, 0.2)',
                    textShadow: '0 0 15px rgba(156, 163, 175, 0.6)'
                  }}
                >
                  ⚡ Powered by Ask Gen Onyx
                </motion.div>
              </div>

              {/* Title with Onyx Orb */}
              <div className="flex items-center justify-center mb-6 mt-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-12 h-12 mr-4"
                  style={{
                    background: `
                      radial-gradient(circle at 30% 30%, rgba(156, 163, 175, 0.4) 0%, transparent 50%),
                      radial-gradient(circle at 70% 70%, rgba(75, 85, 99, 0.3) 0%, transparent 50%),
                      linear-gradient(135deg, #111827 0%, #000000 50%, #1f2937 100%)
                    `,
                    borderRadius: '50%',
                    boxShadow: `
                      0 0 25px rgba(156, 163, 175, 0.4),
                      inset 0 0 25px rgba(0, 0, 0, 0.9)
                    `
                  }}
                >
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gray-700/30 via-transparent to-gray-600/20" />
                  <motion.div
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full border border-gray-300/60"
                    style={{
                      boxShadow: `
                        0 0 15px rgba(156, 163, 175, 1),
                        inset 0 0 15px rgba(156, 163, 175, 0.4)
                      `
                    }}
                  />
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-3xl font-bold mb-1"
                    style={{ 
                      fontFamily: 'Oswald, sans-serif',
                      background: `linear-gradient(90deg, 
                        #9CA3AF 0%, 
                        #E5E7EB 20%, 
                        #FFFFFF 40%, 
                        #E5E7EB 60%, 
                        #9CA3AF 80%, 
                        #E5E7EB 100%)`,
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      filter: 'drop-shadow(0 2px 8px rgba(156, 163, 175, 0.4))'
                    }}
                  >
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      Nível Premium
                    </motion.span>
                  </motion.h3>
                  <p className="text-white/60 text-sm">Inteligência Proativa Exclusiva</p>
                </div>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-white/70 mb-6 text-center leading-relaxed"
              >
                Para a elite que quer estar{' '}
                <span className="text-gray-300 font-medium">3 passos à frente</span>
                {' '}do mercado
              </motion.p>
              
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
                    isOnyx: false
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
                      <CheckCircle className="w-5 h-5 text-gray-400" />
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
                <CheckCircle className="w-5 h-5 text-rose-400" />
                <span className="text-lg font-medium">Mais de 2.847 profissionais já se inscreveram</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                <span className="text-lg font-medium">100% Gratuito para começar</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                <span className="text-lg font-medium">Sem spam, apenas conteúdo relevante</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-rose-400" />
                <span className="text-lg font-medium">Cancele quando quiser</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 bg-[#020202] border-t border-white/[0.05]">
        <div className="container mx-auto px-4 sm:px-6">
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
        </div> {/* Close content overlay div */}
      </div>
    </LazyMotion>
  )
}

export default HomePage

