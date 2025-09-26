import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Calendar, Clock, Users, ArrowRight, Sparkles,
  Brain, Zap, Code, Rocket, Star, TrendingUp,
  BookOpen, Award, Target, CheckCircle, Monitor, Bot
} from 'lucide-react'
import Header from '../../../components/shared/Header'

// Animated title with silver/gray metallic effect - Onyx Style
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
      {/* Main Title with Silver/Gray Metallic */}
      <motion.h1 className="relative text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
        <span
          className="bg-clip-text text-transparent relative inline-block"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
              #ffffff 0%,
              #e5e5e5 20%,
              #c0c0c0 40%,
              #808080 60%,
              #c0c0c0 80%,
              #e5e5e5 100%)`,
            textShadow: '0 0 60px rgba(255, 255, 255, 0.15)',
            filter: 'drop-shadow(0 0 30px rgba(192, 192, 192, 0.4))',
            WebkitTextStroke: '1px transparent',
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
    date: '1 Out 2025',
    time: '20:00',
    duration: '2h',
    attendees: 103,
    description: 'Descubra o futuro do desenvolvimento de aplicações em Dados. Aprenda a utilizar agentes para acelerar em 300% sua produtividade e garantir qualidade de entrega com dicas exclusivas das trincheiras.',
    topics: ['Claude Code', 'LLMs', 'GenAI', 'Data Engineering'],
    gradient: 'from-orange-600 to-amber-600',
    icon: Brain,
    level: 'Iniciante',
    spots: 500,
    exclusive: false,
    popular: true
  },
  {
    id: 2,
    slug: 'domine-autonomous-code-agents',
    title: 'Dominando Autonomous Code Agents',
    subtitle: 'Compare e domine os 4 principais agentes de código autônomo do mercado',
    date: '22 Out 2025',
    time: '20:00',
    duration: '2h',
    attendees: 247,
    description: 'Descubra as técnicas secretas para revolucionar seu workflow com agentes autônomos. Aprenda OpenAI Codex, Claude Code, Replit e Warp em uma sessão intensiva com demonstrações práticas.',
    topics: ['OpenAI Codex', 'Claude Code', 'Replit', 'Warp'],
    gradient: 'from-purple-600 to-violet-600',
    icon: Bot,
    level: 'Avançado',
    spots: 500,
    exclusive: false,
    popular: true
  },
  {
    id: 3,
    slug: 'dominando-crewai-agents',
    title: 'Dominando CrewAI Agents',
    subtitle: 'Orquestre sistemas multi-agentes em produção com o framework usado por 60% das Fortune 500',
    date: '12 Nov 2025',
    time: '20:00',
    duration: '2h',
    attendees: 185,
    description: 'Descubra como criar sistemas multi-agentes complexos que resolvem problemas empresariais reais. Aprenda a orquestrar agentes especializados e escalar soluções de IA com CrewAI.',
    topics: ['CrewAI', 'Multi-Agents', 'Fleet', 'Python'],
    gradient: 'from-red-600 to-red-500',
    icon: Rocket,
    level: 'Intermediário',
    spots: 500,
    exclusive: false,
    popular: true
  }
]

function WebinarsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* METALLIC BLACK/GRAY BACKGROUND - ONYX STYLE */}
      <div className="fixed inset-0" style={{ zIndex: -10 }}>
        {/* Layer 1: Deep gradient base - Gray version */}
        <div
          style={{
            background: `linear-gradient(135deg,
              #000000 0%,
              #0a0a0a 15%,
              #0f0f0f 30%,
              #1a1a1a 45%,
              #151515 60%,
              #0a0a0a 75%,
              #000000 100%)`,
            position: 'absolute',
            inset: 0
          }}
        />

        {/* Layer 2: Silver metallic overlays */}
        <div
          style={{
            background: `radial-gradient(circle at 20% 20%, rgba(192, 192, 192, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(160, 160, 160, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 40% 70%, rgba(128, 128, 128, 0.06) 0%, transparent 50%)`,
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
              rgba(192, 192, 192, 0.01) 2px,
              rgba(192, 192, 192, 0.01) 4px
            )`,
            position: 'absolute',
            inset: 0
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
                  Conteúdo Exclusivo
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
                  className="flex flex-col items-center group"
                >
                  <div className="w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-gray-500/20 to-gray-400/20 flex items-center justify-center border border-gray-500/20 group-hover:border-gray-400/40 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-400/20">
                    <stat.icon className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">{stat.label}</div>
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
                <Link to={`/webinars/${webinar.slug}`} className="block group">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative h-full bg-gradient-to-br from-gray-900/90 via-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-gray-800/50 overflow-hidden"
                    style={{
                      boxShadow: hoveredCard === webinar.id
                        ? `0 20px 60px rgba(192, 192, 192, 0.2), inset 0 0 60px rgba(255, 255, 255, 0.02)`
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
                            : webinar.slug === 'dominando-crewai-agents'
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
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
                            : webinar.slug === 'domine-autonomous-code-agents'
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            : webinar.slug === 'dominando-crewai-agents'
                            ? 'bg-red-500/10 text-red-400 border-red-500/30'
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
                          : webinar.slug === 'dominando-crewai-agents'
                          ? 'text-red-400'
                          : webinar.slug === 'domine-autonomous-code-agents'
                          ? 'text-purple-400'
                          : 'text-gray-400'
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
                            webinar.slug === 'domine-claude-code'
                              ? 'text-orange-400'
                              : webinar.slug === 'dominando-crewai-agents'
                              ? 'text-red-400'
                              : webinar.slug === 'domine-autonomous-code-agents'
                              ? 'text-purple-400'
                              : 'text-gray-400'
                          }`} />
                          <span className="text-white/70">{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Clock className={`w-4 h-4 ${
                            webinar.slug === 'domine-claude-code'
                              ? 'text-orange-400'
                              : webinar.slug === 'dominando-crewai-agents'
                              ? 'text-red-400'
                              : webinar.slug === 'domine-autonomous-code-agents'
                              ? 'text-purple-400'
                              : 'text-gray-400'
                          }`} />
                          <span className="text-white/70">{webinar.time} • {webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <Users className={`w-4 h-4 ${
                            webinar.slug === 'domine-claude-code'
                              ? 'text-orange-400'
                              : webinar.slug === 'dominando-crewai-agents'
                              ? 'text-red-400'
                              : webinar.slug === 'domine-autonomous-code-agents'
                              ? 'text-purple-400'
                              : 'text-gray-400'
                          }`} />
                          <span className="text-white/70">
                            <span className={`font-semibold ${
                              webinar.slug === 'domine-claude-code'
                                ? 'text-orange-400'
                                : webinar.slug === 'dominando-crewai-agents'
                                ? 'text-red-400'
                                : 'text-white'
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

export default WebinarsPage