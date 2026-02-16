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
import { V2_COLORS, V2_SURFACES } from './theme'

// Theme constants - shared across V2 components
const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

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
    description: 'Brief técnico permanente',
    command: 'claude init --spec',
    color: TERMINAL.green
  },
  {
    icon: Server,
    title: 'MCPs',
    description: 'Conexões reais com dados',
    command: 'mcp connect bigquery',
    color: TERMINAL.blue
  },
  {
    icon: BookOpen,
    title: 'Knowledge',
    description: 'Docs vivos no agente',
    command: 'claude learn docs/',
    color: TERMINAL.purple
  },
  {
    icon: Users,
    title: 'SubAgents',
    description: 'Time especializado por tarefa',
    command: 'agent spawn --role qa',
    color: CORAL.primary
  },
  {
    icon: Terminal,
    title: 'Commands',
    description: 'Runbooks e automações',
    command: '/deploy --prod',
    color: TERMINAL.green
  },
  {
    icon: Webhook,
    title: 'Hooks',
    description: 'Qualidade a cada commit',
    command: 'on:commit → test',
    color: TERMINAL.blue
  },
  {
    icon: Wand2,
    title: 'Skills',
    description: 'Boas práticas reutilizáveis',
    command: 'skill install @review',
    color: TERMINAL.purple
  },
  {
    icon: Settings,
    title: 'Templates',
    description: 'Entrega padronizada',
    command: 'template use pipeline',
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
      whileHover={{ y: -3, scale: 1.01 }}
      className="relative group"
    >
      <div
        className="relative h-full rounded-xl p-4 transition-all duration-300 v2-card-soft"
        style={{
          border: `1px solid ${NEUTRAL.border}`,
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
          style={{ backgroundColor: 'rgba(0,0,0,0.35)', color: item.color }}
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
    <section id="promise" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 320px at 50% 0%, ${CORAL.subtle} 0%, transparent 55%),
              radial-gradient(ellipse 420px 240px at 10% 80%, rgba(70, 199, 255, 0.12) 0%, transparent 60%)
            `
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
              Seu Kit de Produção
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Pare de Promptar no Escuro.
            <br />
            <span className="text-white/80">Construa sua Máquina de Entrega com </span>
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
            Você sai com método, padrões e ativos reutilizáveis para entregar com previsibilidade em qualquer projeto.
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
              background: V2_SURFACES.panel,
              border: `1px solid ${NEUTRAL.borderStrong}`,
            }}
          >
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" style={{ color: CORAL.primary }} />
              <span className="text-white font-medium">
                <span style={{ color: CORAL.primary }} className="font-bold">100% do sistema</span> nasce com Claude Code e governança humana
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
