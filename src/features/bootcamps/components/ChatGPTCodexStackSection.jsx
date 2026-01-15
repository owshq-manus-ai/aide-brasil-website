import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  Bot,
  Terminal,
  Database,
  Webhook,
  Shield,
  Rocket,
  Code2
} from 'lucide-react'

// Gray theme colors - ChatGPT Codex
const THEME = {
  primary: '#6b7280',
  secondary: '#9ca3af',
  accent: '#374151',
  light: '#d1d5db',
}

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// EXACTLY 6 tech stack categories
const STACK_CATEGORIES = [
  {
    category: 'AI Platform',
    description: 'Seu agente na nuvem',
    icon: Bot,
    items: [
      { name: 'OpenAI Platform', description: 'API & Modelos' },
      { name: 'ChatGPT Codex', description: 'Execução autônoma' }
    ],
    color: 'blue'
  },
  {
    category: 'Languages',
    description: 'Linguagens de produção',
    icon: Terminal,
    items: [
      { name: 'Python', description: 'Backend & Data' },
      { name: 'SQL', description: 'Queries & ETL' }
    ],
    color: 'purple'
  },
  {
    category: 'Data Stack',
    description: 'Análise e visualização',
    icon: Database,
    items: [
      { name: 'Pandas', description: 'Transformação' },
      { name: 'Matplotlib', description: 'Gráficos' },
      { name: 'Seaborn', description: 'Visualização' }
    ],
    color: 'green'
  },
  {
    category: 'APIs',
    description: 'Integração externa',
    icon: Webhook,
    items: [
      { name: 'REST APIs', description: 'Conectividade' },
      { name: 'Requests', description: 'HTTP client' },
      { name: 'JSON', description: 'Parsing' }
    ],
    color: 'cyan'
  },
  {
    category: 'Testing',
    description: 'Qualidade garantida',
    icon: Shield,
    items: [
      { name: 'Pytest', description: 'Testes unitários' },
      { name: 'Coverage', description: '> 80%' }
    ],
    color: 'orange'
  },
  {
    category: 'Deploy',
    description: 'Produção real',
    icon: Rocket,
    items: [
      { name: 'GitHub', description: 'Versionamento' },
      { name: 'AWS Lambda', description: 'Serverless' },
      { name: 'GCP Cloud Run', description: 'Containers' }
    ],
    color: 'pink'
  }
]

// Color classes for visual variety
const COLOR_CLASSES = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    glow: 'hover:shadow-blue-500/20'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-400',
    glow: 'hover:shadow-purple-500/20'
  },
  green: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-400',
    glow: 'hover:shadow-green-500/20'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    glow: 'hover:shadow-cyan-500/20'
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    glow: 'hover:shadow-orange-500/20'
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30',
    text: 'text-pink-400',
    glow: 'hover:shadow-pink-500/20'
  }
}

// Stack Card component - memoized
const StackCard = memo(({ category, index }) => {
  const colors = COLOR_CLASSES[category.color]
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`
        relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6
        border ${colors.border} transition-all duration-300 hover:shadow-lg ${colors.glow}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}
        >
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">{category.category}</h3>
          <p className="text-white/50 text-sm">{category.description}</p>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2"
          >
            <span className="text-white font-medium">{item.name}</span>
            <span className={`text-sm ${colors.text}`}>{item.description}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
})
StackCard.displayName = 'StackCard'

const ChatGPTCodexStackSection = memo(() => {
  const categories = useMemo(() => STACK_CATEGORIES, [])

  return (
    <section id="stack" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 80% 20%, ${THEME.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 500px 250px at 20% 80%, ${THEME.primary}06 0%, transparent 50%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${THEME.primary}15 1px, transparent 1px),
              linear-gradient(90deg, ${THEME.primary}15 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
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
            style={{ backgroundColor: `${THEME.primary}15`, border: `1px solid ${THEME.primary}40` }}
          >
            <Layers className="w-4 h-4" style={{ color: THEME.secondary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: THEME.secondary }}>Seu Toolkit de Produção</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            Tecnologias que Você Vai{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.secondary} 0%, ${THEME.light} 50%, ${THEME.secondary} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Dominar
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span style={{ color: THEME.secondary }} className="font-bold">Stack completo para produção.</span>{' '}
            Tudo que você precisa para criar pipelines de dados e sistemas autônomos com ChatGPT Codex.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <StackCard key={category.category} category={category} index={index} />
          ))}
        </div>

        {/* Architecture Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 rounded-xl px-4 sm:px-6 py-3 sm:py-4 mx-2 sm:mx-0"
            style={{ background: `linear-gradient(90deg, ${THEME.primary}15 0%, ${THEME.primary}08 100%)`, border: `1px solid ${THEME.primary}30` }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: THEME.secondary }} />
              <span className="text-white/80 text-sm sm:text-base">
                <span style={{ color: THEME.light }} className="font-bold">Cloud-First</span> — código roda no Codex, deploy em qualquer cloud
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <span className="text-white/60 text-xs sm:text-sm">
              Codex {'→ '}<span className="text-blue-400">AWS</span> ou <span className="text-cyan-400">GCP</span>
            </span>
          </div>
        </motion.div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexStackSection.displayName = 'ChatGPTCodexStackSection'

export default ChatGPTCodexStackSection
