import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, Users, ArrowRight, Sparkles,
  Brain, Zap, Code, Rocket, Star, TrendingUp,
  BookOpen, Award, Target, CheckCircle, Monitor
} from 'lucide-react'
import Header from '../components/shared/Header'

// Animated title with purple metallic effect
const MetallicTitle = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }
  
  return (
    <motion.div
      className="relative"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Main Title with Purple Metallic - No Shadow */}
      <motion.h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
        <span
          className="bg-clip-text text-transparent relative inline-block"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
              #E9D5FF 0%, 
              #C084FC 20%, 
              #9333EA 40%, 
              #7E22CE 60%, 
              #9333EA 80%, 
              #C084FC 100%)`,
            textShadow: '0 0 80px rgba(147, 51, 234, 0.5)',
            filter: 'drop-shadow(0 0 40px rgba(147, 51, 234, 0.8))',
          }}
        >
          Webinários
        </span>
      </motion.h1>
    </motion.div>
  )
}

const webinars = [
  {
    id: 1,
    slug: 'domine-claude-code',
    title: 'Dominando Claude Code',
    subtitle: 'Aprenda a configurar e aplicar as melhores práticas para trabalhar com uma frota de Agentes',
    date: '25 Set 2025',
    time: '20:00',
    duration: '2h',
    attendees: 103,
    description: 'Descubra o futuro do desenvolvimento de aplicações em Dados. Aprenda a utilizar agentes para acelerar em 300% sua produtividade e garantir qualidade de entrega com dicas exclusivas das trincheiras.',
    topics: ['Claude Code', 'LLMs', 'GenAI', 'Data Engineering'],
    gradient: 'from-orange-600 to-amber-600',
    icon: Brain,
    level: 'Iniciante',
    spots: 200,
    exclusive: false,
    popular: true
  }
]

function WebinarHub() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)
  
  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* FUTURISTIC METALLIC PURPLE BACKGROUND */}
      <div
        className="fixed inset-0"
        style={{ zIndex: -10 }}
      >
        {/* Base Deep Black Gradient with Subtle Purple Accents */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(135deg,
                #000000 0%,
                #0a0a0f 15%,
                #0f0817 30%,
                #1a0f2e 45%,
                #1a0f2e 60%,
                #0f0817 75%,
                #0a0a0f 90%,
                #000000 100%
              )`
          }}
        />

        {/* Subtle Purple Metallic Orbs */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.25,
            backgroundImage: `
              radial-gradient(ellipse at 20% 30%, rgba(147, 51, 234, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(168, 85, 247, 0.18) 0%, transparent 45%),
              radial-gradient(circle at 60% 40%, rgba(196, 181, 253, 0.1) 0%, transparent 40%)
            `
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage: `
              linear-gradient(30deg, rgba(147, 51, 234, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.06) 1px, transparent 1px),
              linear-gradient(150deg, rgba(168, 85, 247, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 80px 80px'
          }}
        />

        {/* Flowing Data Streams */}
        <div
          className="absolute top-1/6 left-0 right-0"
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.2), rgba(196, 181, 253, 0.3), rgba(147, 51, 234, 0.2), transparent)',
            animation: 'flow-right 6s ease-in-out infinite',
            zIndex: -9
          }}
        />
        <div
          className="absolute top-2/5 left-0 right-0"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.25), rgba(168, 85, 247, 0.35), rgba(139, 92, 246, 0.25), transparent)',
            animation: 'flow-left 8s ease-in-out infinite',
            animationDelay: '2s',
            zIndex: -9
          }}
        />
        <div
          className="absolute top-3/5 left-0 right-0"
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(196, 181, 253, 0.2), rgba(221, 214, 254, 0.3), rgba(196, 181, 253, 0.2), transparent)',
            animation: 'flow-right 10s ease-in-out infinite',
            animationDelay: '4s',
            zIndex: -9
          }}
        />

        {/* Floating Metallic Spheres */}
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '15%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(139, 92, 246, 0.3) 30%, rgba(168, 85, 247, 0.15) 60%, transparent 80%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.7,
            animation: 'float-sphere 15s ease-in-out infinite',
            zIndex: -8
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '12%',
            right: '18%',
            width: '380px',
            height: '380px',
            background: 'radial-gradient(circle, rgba(196, 181, 253, 0.35) 0%, rgba(168, 85, 247, 0.25) 35%, rgba(147, 51, 234, 0.15) 65%, transparent 85%)',
            borderRadius: '50%',
            filter: 'blur(45px)',
            opacity: 0.6,
            animation: 'float-sphere-reverse 18s ease-in-out infinite',
            animationDelay: '3s',
            zIndex: -8
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '45%',
            right: '8%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(196, 181, 253, 0.2) 40%, transparent 75%)',
            borderRadius: '50%',
            filter: 'blur(35px)',
            opacity: 0.6,
            animation: 'float-sphere 20s ease-in-out infinite',
            animationDelay: '6s',
            zIndex: -8
          }}
        />

        {/* Geometric Corner Elements */}
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            width: '120px',
            height: '2px',
            background: 'linear-gradient(90deg, rgba(147, 51, 234, 0.3), rgba(196, 181, 253, 0.15), transparent)',
            zIndex: -7
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '24px',
            left: '24px',
            width: '2px',
            height: '120px',
            background: 'linear-gradient(180deg, rgba(147, 51, 234, 0.3), rgba(196, 181, 253, 0.15), transparent)',
            zIndex: -7
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '120px',
            height: '2px',
            background: 'linear-gradient(270deg, rgba(147, 51, 234, 0.3), rgba(196, 181, 253, 0.15), transparent)',
            zIndex: -7
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            width: '2px',
            height: '120px',
            background: 'linear-gradient(0deg, rgba(147, 51, 234, 0.3), rgba(196, 181, 253, 0.15), transparent)',
            zIndex: -7
          }}
        />

        {/* Animated Network Connections with CSS Animation Fallback */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ zIndex: -5 }}>
          <defs>
            <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" />
              <stop offset="100%" stopColor="rgba(196, 181, 253, 0.2)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <style>
              {`
                @keyframes drawLine {
                  from {
                    stroke-dashoffset: 1000;
                    opacity: 0;
                  }
                  to {
                    stroke-dashoffset: 0;
                    opacity: 0.6;
                  }
                }
                .animated-line {
                  stroke-dasharray: 1000;
                  stroke-dashoffset: 1000;
                  animation: drawLine 3s ease-in-out infinite alternate;
                }
                .animated-line-2 {
                  animation-delay: 1s;
                  animation-duration: 4s;
                }
                .animated-line-3 {
                  animation-delay: 2s;
                  animation-duration: 3.5s;
                }
              `}
            </style>
          </defs>

          {/* Animated connection paths using CSS animations */}
          <path
            className="animated-line"
            d="M 100 200 L 300 400"
            stroke="url(#purple-gradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
          />
          <path
            className="animated-line animated-line-2"
            d="M 700 300 L 900 500"
            stroke="url(#purple-gradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
          />
          <path
            className="animated-line animated-line-3"
            d="M 400 700 L 600 900"
            stroke="url(#purple-gradient)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
          />

          {/* Additional curved connection paths with CSS animation */}
          <path
            className="animated-line"
            style={{ animationDelay: '1.5s', animationDuration: '5s' }}
            d="M 200 600 Q 350 400 500 450"
            stroke="url(#purple-gradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
          />
          <path
            className="animated-line"
            style={{ animationDelay: '2.5s', animationDuration: '4.5s' }}
            d="M 800 200 Q 650 350 500 300"
            stroke="url(#purple-gradient)"
            strokeWidth="1.5"
            fill="none"
            filter="url(#glow)"
            strokeLinecap="round"
          />

          {/* Pulsing nodes with CSS animations */}
          <style>
            {`
              @keyframes pulse {
                0%, 100% {
                  transform: scale(1);
                  opacity: 0.8;
                }
                50% {
                  transform: scale(1.5);
                  opacity: 1;
                }
              }
              .pulse-node {
                animation: pulse 2s ease-in-out infinite;
                transform-origin: center;
              }
            `}
          </style>
          <circle
            className="pulse-node"
            cx="100" cy="200" r="4"
            fill="rgba(147, 51, 234, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '0.3s' }}
            cx="300" cy="400" r="4"
            fill="rgba(168, 85, 247, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '0.5s' }}
            cx="900" cy="500" r="4"
            fill="rgba(147, 51, 234, 0.8)"
            filter="url(#glow)"
          />
          <motion.circle
            cx="100" cy="200" r="4"
            fill="rgba(147, 51, 234, 0.8)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="300" cy="400" r="4"
            fill="rgba(168, 85, 247, 0.8)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          <motion.circle
            cx="900" cy="500" r="4"
            fill="rgba(147, 51, 234, 0.8)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '0.7s' }}
            cx="700" cy="300" r="4"
            fill="rgba(168, 85, 247, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '1s' }}
            cx="600" cy="900" r="4"
            fill="rgba(196, 181, 253, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '1.2s' }}
            cx="400" cy="700" r="4"
            fill="rgba(147, 51, 234, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '1.5s' }}
            cx="500" cy="450" r="4"
            fill="rgba(168, 85, 247, 0.8)"
            filter="url(#glow)"
          />
          <circle
            className="pulse-node"
            style={{ animationDelay: '1.7s' }}
            cx="500" cy="300" r="4"
            fill="rgba(196, 181, 253, 0.8)"
            filter="url(#glow)"
          />
        </svg>

        {/* Animated Data Particles */}
        <div className="absolute inset-0" style={{ zIndex: -4 }}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                filter: 'blur(1px)',
              }}
              initial={{ y: '100vh', opacity: 0 }}
              animate={{
                y: '-100vh',
                opacity: [0, 1, 1, 0],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Rotating Geometric Shapes with CSS Animations */}
        <style>
          {`
            @keyframes rotate360 {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes rotateScale {
              0%, 100% { transform: rotate(0deg) scale(1); }
              25% { transform: rotate(90deg) scale(1.1); }
              50% { transform: rotate(180deg) scale(1.2); }
              75% { transform: rotate(270deg) scale(1.1); }
            }
            .rotate-shape {
              animation: rotate360 20s linear infinite;
            }
            .rotate-scale-shape {
              animation: rotateScale 20s ease-in-out infinite;
            }
          `}
        </style>
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: -6 }}>
          {/* Diamond shape */}
          <svg
            className="absolute top-20 left-20 w-32 h-32 rotate-scale-shape"
            viewBox="0 0 100 100"
          >
            <polygon
              points="50,10 90,50 50,90 10,50"
              fill="none"
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth="2"
            />
          </svg>

          {/* Square shape */}
          <svg
            className="absolute bottom-32 right-32 w-24 h-24 rotate-shape"
            style={{ animationDirection: 'reverse', animationDuration: '15s' }}
            viewBox="0 0 100 100"
          >
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1"
            />
          </svg>

          {/* Octagon shape */}
          <svg
            className="absolute w-40 h-40 rotate-shape"
            viewBox="0 0 100 100"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDuration: '30s'
            }}
          >
            <polygon
              points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30"
              fill="none"
              stroke="rgba(196, 181, 253, 0.15)"
              strokeWidth="1"
            />
          </svg>

          {/* Additional geometric elements */}
          <svg
            className="absolute top-1/3 right-1/4 w-20 h-20 rotate-scale-shape"
            viewBox="0 0 100 100"
            style={{ animationDuration: '25s', animationDirection: 'reverse' }}
          >
            <polygon
              points="50,15 61,35 82,35 66,51 73,72 50,57 27,72 34,51 18,35 39,35"
              fill="none"
              stroke="rgba(147, 51, 234, 0.25)"
              strokeWidth="1.5"
            />
          </svg>

          {/* Triangle */}
          <svg
            className="absolute bottom-1/4 left-1/3 w-28 h-28 rotate-shape"
            viewBox="0 0 100 100"
            style={{ animationDuration: '18s' }}
          >
            <polygon
              points="50,20 80,80 20,80"
              fill="none"
              stroke="rgba(168, 85, 247, 0.2)"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Subtle Noise Texture Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.03,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            zIndex: -6
          }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Premium Purple Metallic Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 mb-8 rounded-full overflow-hidden"
            >
              {/* Metallic silver border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/30 via-gray-300/40 to-gray-400/30 rounded-full" />
              <div className="absolute inset-[1px] bg-black/90 rounded-full" />

              {/* Content */}
              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-gray-400" />
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300">
                  CONTEÚDO EXCLUSIVO • VAGAS LIMITADAS
                </span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-gray-300" />
                </motion.div>
              </div>

            </motion.div>
            
            <MetallicTitle />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Aprenda com os maiores experts em{' '}
              <span className="text-white/80 font-semibold">GenAI e Data Engineering</span> do Brasil.
              <br />
              Conteúdo prático, direto ao ponto, sem enrolação.
            </motion.p>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8 mb-12"
            >
              {[
                { icon: Users, value: '500+', label: 'Participantes' },
                { icon: Award, value: '20+', label: 'Webinários' },
                { icon: Star, value: '4.9', label: 'Avaliação' },
                { icon: TrendingUp, value: '95%', label: 'Taxa de Conclusão' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-400/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Premium Webinar Cards */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredCard(webinar.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={`/webinarios/${webinar.slug}`} className="block group">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden"
                    style={{
                      boxShadow: hoveredCard === webinar.id 
                        ? `0 20px 60px rgba(147, 51, 234, 0.3), inset 0 0 60px rgba(147, 51, 234, 0.05)`
                        : '0 10px 30px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    {/* Badge - Exclusive only */}
                    {webinar.exclusive && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
                          <span className="text-xs font-bold text-yellow-400">EXCLUSIVO</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Premium Gradient Header with Metallic Effect */}
                    <div className={`h-32 bg-gradient-to-br ${webinar.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                      
                      {/* Animated metallic pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-40"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundImage: `linear-gradient(45deg, 
                            transparent 25%, 
                            rgba(255,255,255,0.2) 25%, 
                            rgba(255,255,255,0.2) 50%, 
                            transparent 50%, 
                            transparent 75%, 
                            rgba(255,255,255,0.2) 75%, 
                            rgba(255,255,255,0.2))`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                      
                      
                      {/* Icon */}
                      <div className="absolute bottom-4 left-6">
                        <motion.div
                          animate={{
                            y: hoveredCard === webinar.id ? [-2, 2, -2] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredCard === webinar.id ? Infinity : 0,
                          }}
                          className="w-16 h-16 bg-gray-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-gray-700/50"
                        >
                          <webinar.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Level Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          webinar.slug === 'domine-claude-code'
                            ? 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                            : webinar.level === 'Expert' 
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
                            : webinar.level === 'Avançado'
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            : webinar.level === 'Iniciante'
                            ? 'bg-green-500/10 text-green-400 border-green-500/30'
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
                        }`}>
                          {webinar.level}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          webinar.slug === 'domine-claude-code'
                            ? 'bg-orange-500/10 text-orange-400 border-orange-500/30'
                            : 'bg-green-500/10 text-green-400 border-green-500/30'
                        }`}>
                          {webinar.spots} vagas
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          {webinar.title}
                        </span>
                      </h3>
                      
                      <p className={`text-sm font-medium mb-4 ${
                        webinar.slug === 'domine-claude-code' 
                          ? 'text-orange-400' 
                          : 'text-purple-400'
                      }`}>
                        {webinar.subtitle}
                      </p>
                      
                      <p className="text-white/60 mb-6 line-clamp-2">
                        {webinar.description}
                      </p>
                      
                      {/* Meta Info */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm">
                          <Calendar className={`w-4 h-4 ${
                            webinar.slug === 'domine-claude-code' ? 'text-orange-400' : 'text-purple-400'
                          }`} />
                          <span className="text-white/70">{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className={`w-4 h-4 ${
                            webinar.slug === 'domine-claude-code' ? 'text-orange-400' : 'text-purple-400'
                          }`} />
                          <span className="text-white/70">{webinar.time} • {webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users className={`w-4 h-4 ${
                            webinar.slug === 'domine-claude-code' ? 'text-orange-400' : 'text-purple-400'
                          }`} />
                          <span className="text-white/70">
                            <span className={`font-semibold ${
                              webinar.slug === 'domine-claude-code' ? 'text-orange-400' : 'text-white'
                            }`}>{webinar.attendees}</span> inscritos
                          </span>
                        </div>
                      </div>
                      
                      {/* Topics */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {webinar.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-400 rounded-lg text-xs border border-gray-700/50"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3 bg-gradient-to-r ${webinar.gradient} text-white font-semibold rounded-lg relative overflow-hidden group`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Garantir Vaga
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default WebinarHub