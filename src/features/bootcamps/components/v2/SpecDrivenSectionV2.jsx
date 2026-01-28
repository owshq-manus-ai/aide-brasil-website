import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Code2,
  Settings,
  Target,
  Layers,
  Zap,
  Brain
} from 'lucide-react'

const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
}

const TERMINAL = {
  green: '#7ee787',
  blue: '#79c0ff',
  purple: '#d2a8ff',
  bg: '#0D1117',
  border: '#30363d',
}

const SPEC_PHASES = [
  {
    phase: '01',
    title: 'Contexto',
    subtitle: 'CLAUDE.md',
    description: 'Definição do projeto, stack e regras de negócio',
    icon: FileText,
    color: TERMINAL.blue,
    example: '# project: invoice-intelligence\n# stack: python, bigquery, terraform'
  },
  {
    phase: '02',
    title: 'Comportamento',
    subtitle: 'Padrões',
    description: 'Como o agente deve agir, decidir e comunicar',
    icon: Settings,
    color: TERMINAL.purple,
    example: '- always use type hints\n- prefer composition over inheritance'
  },
  {
    phase: '03',
    title: 'Entrega',
    subtitle: 'Specs',
    description: 'O que precisa ser construído com critérios claros',
    icon: Target,
    color: CORAL.primary,
    example: '## Task: Build extraction pipeline\nAcceptance: tests pass, <2s latency'
  }
]

const WHY_SPEC_DRIVEN = [
  {
    traditional: 'Prompt vago → resultado imprevisível',
    specDriven: 'Spec estruturada → output determinístico',
    icon: Target
  },
  {
    traditional: 'Contexto se perde entre sessões',
    specDriven: 'CLAUDE.md mantém memória persistente',
    icon: Brain
  },
  {
    traditional: 'Cada resposta é um novo começo',
    specDriven: 'Agente conhece todo o projeto',
    icon: Layers
  },
  {
    traditional: 'Você corrige manualmente',
    specDriven: 'Padrões garantem consistência',
    icon: CheckCircle
  }
]

const PhaseCard = memo(({ phase, index }) => {
  const Icon = phase.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.8) 100%)',
          border: `1px solid ${phase.color}30`,
        }}
      >
        {/* Phase number */}
        <div
          className="absolute -top-3 -left-1 text-4xl font-oswald font-black opacity-10"
          style={{ color: phase.color }}
        >
          {phase.phase}
        </div>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${phase.color}20`, border: `1px solid ${phase.color}40` }}
          >
            <Icon className="w-5 h-5" style={{ color: phase.color }} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{phase.title}</h3>
            <p className="text-xs font-mono" style={{ color: phase.color }}>{phase.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/60 text-sm mb-4">{phase.description}</p>

        {/* Code example */}
        <div
          className="font-mono text-xs p-3 rounded-lg"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', borderLeft: `2px solid ${phase.color}` }}
        >
          {phase.example.split('\n').map((line, i) => (
            <div key={i} style={{ color: phase.color }} className="opacity-80">
              {line}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
})
PhaseCard.displayName = 'PhaseCard'

const ComparisonRow = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center"
    >
      {/* Traditional */}
      <div
        className="rounded-lg p-3 text-sm"
        style={{ backgroundColor: 'rgba(248, 81, 73, 0.1)', border: '1px solid rgba(248, 81, 73, 0.2)' }}
      >
        <span className="text-white/50 line-through">{item.traditional}</span>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center">
        <motion.div
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4" style={{ color: CORAL.primary }} />
        </motion.div>
      </div>

      {/* Spec-Driven */}
      <div
        className="rounded-lg p-3 text-sm flex items-center gap-2"
        style={{ backgroundColor: `${TERMINAL.green}10`, border: `1px solid ${TERMINAL.green}20` }}
      >
        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: TERMINAL.green }} />
        <span className="text-white font-medium">{item.specDriven}</span>
      </div>
    </motion.div>
  )
})
ComparisonRow.displayName = 'ComparisonRow'

const SpecDrivenSectionV2 = memo(() => {
  const phases = useMemo(() => SPEC_PHASES, [])
  const comparisons = useMemo(() => WHY_SPEC_DRIVEN, [])

  return (
    <section id="spec-driven" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 20% 30%, ${CORAL.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 500px 250px at 80% 70%, ${TERMINAL.purple}05 0%, transparent 50%)
            `
          }}
        />
        {/* Code pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 30px,
              ${CORAL.primary} 30px,
              ${CORAL.primary} 31px
            )`
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
            <Code2 className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              A Metodologia
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            <span style={{ color: CORAL.primary }}>Spec-Driven</span> Development
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            A diferença entre{' '}
            <span className="text-white/40 line-through">pedir ajuda ao ChatGPT</span>
            {' '}e{' '}
            <span className="text-white font-semibold">operar um time de agentes</span>
          </p>
        </motion.div>

        {/* Three Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {phases.map((phase, index) => (
            <PhaseCard key={phase.phase} phase={phase} index={index} />
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-oswald font-bold text-white mb-2">
              Por Que <span style={{ color: TERMINAL.green }}>Funciona</span>
            </h3>
            <p className="text-white/50 text-sm">
              Vibe coding vs. desenvolvimento estruturado
            </p>
          </div>

          <div
            className="rounded-xl p-5 sm:p-6 space-y-3"
            style={{
              background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
              border: `1px solid ${TERMINAL.border}`,
            }}
          >
            {comparisons.map((item, index) => (
              <ComparisonRow key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-4 rounded-xl px-6 py-4"
            style={{
              background: `linear-gradient(135deg, ${CORAL.primary}15 0%, ${TERMINAL.purple}10 100%)`,
              border: `1px solid ${CORAL.primary}30`,
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: CORAL.primary }} />
            <p className="text-white text-sm sm:text-base">
              <span className="font-bold" style={{ color: CORAL.primary }}>Resultado:</span>{' '}
              Claude Code entende seu projeto como um{' '}
              <span className="text-white font-semibold">desenvolvedor sênior do time</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

SpecDrivenSectionV2.displayName = 'SpecDrivenSectionV2'

export default SpecDrivenSectionV2
