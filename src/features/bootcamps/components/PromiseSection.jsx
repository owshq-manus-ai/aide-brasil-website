import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Server,
  BookOpen,
  Users,
  Terminal,
  Webhook,
  Wand2,
  Brain,
  Settings,
  ArrowRight,
  Bot,
  Shield
} from 'lucide-react'

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Static data - defined outside component to prevent recreation
const CLAUDE_CODE_FEATURES = [
  {
    icon: FileText,
    title: 'CLAUDE.md',
    description: 'Faça o Claude entender seu projeto inteiro com um único arquivo de contexto permanente',
    highlight: 'contexto permanente',
    color: 'orange'
  },
  {
    icon: Server,
    title: 'MCPs (Model Context Protocol)',
    description: 'Conecte bancos, APIs e ferramentas externas —o Claude executa ações reais via servidores MCP',
    highlight: 'servidores MCP',
    color: 'purple'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Injete documentação e padrões do projeto para respostas precisas, não genéricas',
    highlight: 'documentação e padrões',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'SubAgents',
    description: 'Delegue tarefas complexas para uma frota de agentes especializados que trabalham em paralelo',
    highlight: 'agentes especializados',
    color: 'green'
  },
  {
    icon: Terminal,
    title: 'Commands',
    description: 'Automatize workflows repetitivos com comandos personalizados —digite uma vez, execute sempre',
    highlight: 'comandos personalizados',
    color: 'cyan'
  },
  {
    icon: Webhook,
    title: 'Hooks',
    description: 'Dispare ações automaticamente em eventos do código —lint, test, deploy sem intervenção',
    highlight: 'ações automaticamente',
    color: 'pink'
  },
  {
    icon: Wand2,
    title: 'Skills',
    description: 'Empacote capacidades reutilizáveis que transformam o Claude em especialista do seu domínio',
    highlight: 'capacidades reutilizáveis',
    color: 'amber'
  },
  {
    icon: Settings,
    title: 'Prompts & Templates',
    description: 'Garanta outputs consistentes com prompts estruturados —mesmo resultado, toda vez',
    highlight: 'outputs consistentes',
    color: 'red'
  }
]

const COLOR_CLASSES = {
  orange: {
    bg: 'bg-orange-500/20',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/20'
  },
  purple: {
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/20'
  },
  blue: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/20'
  },
  green: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/30',
    text: 'text-green-400',
    glow: 'group-hover:shadow-green-500/20'
  },
  cyan: {
    bg: 'bg-cyan-500/20',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20'
  },
  pink: {
    bg: 'bg-pink-500/20',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    glow: 'group-hover:shadow-pink-500/20'
  },
  amber: {
    bg: 'bg-amber-500/20',
    border: 'border-amber-500/30',
    text: 'text-amber-400',
    glow: 'group-hover:shadow-amber-500/20'
  },
  red: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/30',
    text: 'text-red-400',
    glow: 'group-hover:shadow-red-500/20'
  }
}

// Arrow animation config
const arrowAnimation = { x: [0, 5, 0] }
const arrowTransition = { duration: 1.5, repeat: Infinity }

// Feature Card component - memoized for performance
const FeatureCard = memo(({ item, index }) => {
  const colors = COLOR_CLASSES[item.color]
  const Icon = item.icon

  // Split description for highlighting
  const parts = item.description.split(item.highlight)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <div className={`relative h-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-5 border ${colors.border} hover:border-opacity-60 transition-all duration-300 hover:shadow-lg ${colors.glow}`}>
        {/* Icon */}
        <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          {parts[0]}
          <span className={`${colors.text} font-semibold`}>{item.highlight}</span>
          {parts[1]}
        </p>

        {/* Hover glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </motion.div>
  )
})
FeatureCard.displayName = 'FeatureCard'

const PromiseSection = memo(() => {
  // Memoize the features list to prevent re-renders
  const features = useMemo(() => CLAUDE_CODE_FEATURES, [])

  return (
    <section id="promise" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 50% 0%, rgba(224, 122, 95, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 80% 100%, rgba(224, 122, 95, 0.05) 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.3)' }}
          >
            <Brain className="w-4 h-4" style={{ color: '#E07A5F' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#E07A5F' }}>Seu Arsenal Completo</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            8 Superpoderes do{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #E07A5F 0%, #F0A090 50%, #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Claude Code
            </span>
            {' '}que Ninguém Ensina
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-6 px-2 sm:px-0">
            <span style={{ color: '#E07A5F' }} className="font-bold">Esqueça tutoriais básicos.</span> Você vai configurar e operar cada recurso avançado —do setup inicial ao deploy automatizado.
          </p>

          {/* Key message about building with Claude Code */}
          {/* Mobile: stack icons vertically on very small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-xl px-4 sm:px-6 py-3"
            style={{ background: 'linear-gradient(90deg, rgba(224, 122, 95, 0.2) 0%, rgba(224, 122, 95, 0.1) 100%)', border: '1px solid rgba(224, 122, 95, 0.4)' }}
          >
            <div className="flex items-center gap-2 sm:hidden">
              <img
                src="/images/logos/anthropic-icon.webp"
                alt="Anthropic"
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
              <img
                src="/images/logos/claude-code-icon.png"
                alt="Claude Code"
                className="w-5 h-5 object-contain"
                loading="lazy"
              />
            </div>
            <img
              src="/images/logos/anthropic-icon.webp"
              alt="Anthropic"
              className="hidden sm:block w-6 h-6 object-contain"
              loading="lazy"
            />
            <span className="text-white/90 text-sm sm:text-base text-center sm:text-left">
              <span style={{ color: '#E07A5F' }} className="font-bold">100% do projeto</span> será construído usando Claude Code —{' '}
              <span style={{ color: '#F0A090' }} className="font-semibold">do requisito ao deploy</span>
            </span>
            <img
              src="/images/logos/claude-code-icon.png"
              alt="Claude Code"
              className="hidden sm:block w-6 h-6 object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        {/* Features Grid - Mobile: single column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-16">
          {features.map((item, index) => (
            <FeatureCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Highlight - Enhanced Best Practices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative inline-block">
            {/* Glow effect behind */}
            <div
              className="absolute inset-0 rounded-2xl blur-xl opacity-50"
              style={{
                background: 'linear-gradient(90deg, rgba(224, 122, 95, 0.3), rgba(224, 122, 95, 0.2), rgba(224, 122, 95, 0.3))',
              }}
            />

            {/* Mobile: smaller padding, stack vertically */}
            <motion.div
              className="relative bg-gradient-to-r from-[#1a1a1a] via-[#1a1210] to-[#1a1a1a] rounded-2xl px-4 sm:px-10 py-6 sm:py-8"
              style={{ border: '2px solid rgba(224, 122, 95, 0.4)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Best Practices Badge */}
                <div className="flex items-center gap-2 sm:gap-3 bg-green-500/20 border border-green-500/40 rounded-xl px-3 sm:px-5 py-2 sm:py-3 w-full md:w-auto justify-center md:justify-start">
                  <FileText className="w-5 h-5 sm:w-7 sm:h-7 text-green-400 flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-green-400 font-oswald text-base sm:text-xl font-bold block">Best Practices</span>
                    <span className="text-white/60 text-xs sm:text-sm">Context Engineering + LLMOps + CI/CD</span>
                  </div>
                </div>

                {/* Arrow with animation */}
                <motion.div
                  animate={arrowAnimation}
                  transition={arrowTransition}
                  className="rotate-90 md:rotate-0"
                >
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#E07A5F' }} />
                </motion.div>

                {/* Engineering Result */}
                <div className="flex items-center gap-2 sm:gap-3 rounded-xl px-3 sm:px-5 py-2 sm:py-3 w-full md:w-auto justify-center md:justify-start" style={{ background: 'linear-gradient(90deg, rgba(224, 122, 95, 0.2) 0%, rgba(224, 122, 95, 0.1) 100%)', border: '1px solid rgba(224, 122, 95, 0.4)' }}>
                  <Bot className="w-5 h-5 sm:w-7 sm:h-7 flex-shrink-0" style={{ color: '#E07A5F' }} />
                  <div className="text-left">
                    <span
                      className="font-oswald text-base sm:text-xl font-bold block bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #E07A5F, #F0A090, #E07A5F)',
                        backgroundSize: '200% 100%',
                        animation: 'subtle-metallic 3s ease-in-out infinite',
                      }}
                    >
                      Frota de Agentes
                    </span>
                    <span className="text-white/60 text-xs sm:text-sm">Código real em produção</span>
                  </div>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 hidden sm:block" style={{ color: '#F0A090' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

PromiseSection.displayName = 'PromiseSection'

export default PromiseSection
