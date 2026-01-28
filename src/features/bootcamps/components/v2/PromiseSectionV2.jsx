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
  Settings,
  Brain,
  Bot,
  Shield,
  ArrowRight
} from 'lucide-react'

// Theme constants - shared across V2 components
const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
  dark: '#C96A50',
}

const TERMINAL = {
  green: '#7ee787',
  blue: '#79c0ff',
  purple: '#d2a8ff',
}

const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Claude Code Features Data
const CLAUDE_CODE_FEATURES = [
  {
    icon: FileText,
    title: 'CLAUDE.md',
    description: 'Contexto permanente do projeto',
    command: 'claude init',
    color: TERMINAL.green
  },
  {
    icon: Server,
    title: 'MCPs',
    description: 'Conecte bancos e APIs',
    command: 'mcp connect db',
    color: TERMINAL.blue
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description: 'Injete documentação',
    command: 'claude learn docs/',
    color: TERMINAL.purple
  },
  {
    icon: Users,
    title: 'SubAgents',
    description: 'Delegue para agentes',
    command: 'agent spawn --task',
    color: CORAL.primary
  },
  {
    icon: Terminal,
    title: 'Commands',
    description: 'Automatize workflows',
    command: '/deploy --prod',
    color: TERMINAL.green
  },
  {
    icon: Webhook,
    title: 'Hooks',
    description: 'Dispare em eventos',
    command: 'on:commit → test',
    color: TERMINAL.blue
  },
  {
    icon: Wand2,
    title: 'Skills',
    description: 'Capacidades reutilizáveis',
    command: 'skill install @review',
    color: TERMINAL.purple
  },
  {
    icon: Settings,
    title: 'Templates',
    description: 'Outputs consistentes',
    command: 'template use api',
    color: CORAL.light
  }
]

// Feature Card - Terminal style
const FeatureCard = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="relative group"
    >
      <div
        className="relative h-full rounded-xl p-4 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: '1px solid rgba(48, 54, 61, 0.8)',
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity blur-lg"
          style={{ backgroundColor: item.color }}
        />

        {/* Icon */}
        <div
          className="relative w-10 h-10 rounded-lg flex items-center justify-center mb-3"
          style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
        >
          <Icon className="w-5 h-5" style={{ color: item.color }} />
        </div>

        {/* Content */}
        <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
        <p className="text-white/50 text-sm mb-3">{item.description}</p>

        {/* Command preview */}
        <div
          className="font-mono text-xs px-2 py-1.5 rounded"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)', color: item.color }}
        >
          <span className="text-white/30">$</span> {item.command}
        </div>
      </div>
    </motion.div>
  )
})
FeatureCard.displayName = 'FeatureCard'

const PromiseSectionV2 = memo(() => {
  const features = useMemo(() => CLAUDE_CODE_FEATURES, [])

  return (
    <section id="promise" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224, 122, 95, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224, 122, 95, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 600px 300px at 50% 0%, ${CORAL.primary}10 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}30` }}
          >
            <Brain className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              Seu Arsenal Completo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            8 Superpoderes do{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light}, ${CORAL.primary})`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 5s ease-in-out infinite',
              }}
            >
              Claude Code
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Configure e opere cada recurso avançado — do setup inicial ao deploy automatizado
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {features.map((item, index) => (
            <FeatureCard key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-xl px-6 py-4"
            style={{
              background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
              border: `1px solid ${CORAL.primary}30`,
            }}
          >
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" style={{ color: CORAL.primary }} />
              <span className="text-white font-medium">
                <span style={{ color: CORAL.primary }} className="font-bold">100% do projeto</span> construído com Claude Code
              </span>
            </div>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="hidden sm:block"
            >
              <ArrowRight className="w-5 h-5" style={{ color: CORAL.primary }} />
            </motion.div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: TERMINAL.green }} />
              <span className="text-white/70 text-sm">Do requisito ao deploy</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

PromiseSectionV2.displayName = 'PromiseSectionV2'

export default PromiseSectionV2
