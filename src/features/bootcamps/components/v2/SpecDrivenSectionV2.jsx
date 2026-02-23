import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Layers,
  ClipboardCheck,
  Rocket,
  RefreshCw,
  Code2,
  Sparkles,
  Brain,
  ShieldCheck,
  Gauge,
  Workflow,
} from 'lucide-react'

const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
}

const TERMINAL = {
  green: '#7ee787',
  blue: '#79c0ff',
  purple: '#d2a8ff',
}

const SPEC_PHASES = [
  {
    phase: '01',
    title: 'Discovery',
    subtitle: 'Mapeie contexto, risco e objetivo',
    command: '/discover',
    icon: Search,
    color: TERMINAL.blue,
    output: 'Context map + constraints + fontes'
  },
  {
    phase: '02',
    title: 'Design',
    subtitle: 'Defina arquitetura e contratos',
    command: '/design',
    icon: Layers,
    color: TERMINAL.purple,
    output: 'ADR, interfaces e limites claros'
  },
  {
    phase: '03',
    title: 'Specify',
    subtitle: 'Detalhe specs testáveis',
    command: '/specify',
    icon: ClipboardCheck,
    color: CORAL.primary,
    output: 'Critérios de aceite + tasks atômicas'
  },
  {
    phase: '04',
    title: 'Deliver',
    subtitle: 'Implemente com padrão',
    command: '/deliver',
    icon: Rocket,
    color: TERMINAL.green,
    output: 'Código, testes e pipeline executável'
  },
  {
    phase: '05',
    title: 'Iterate',
    subtitle: 'Melhore por evidência',
    command: '/iterate',
    icon: RefreshCw,
    color: CORAL.light,
    output: 'Qualidade contínua em produção'
  }
]

const SDD_PROOFS = [
  {
    icon: Brain,
    title: 'Contexto persistente',
    description: 'CLAUDE.md e artefatos mantêm memória técnica do projeto.',
    command: 'source: CLAUDE.md',
    color: TERMINAL.blue,
  },
  {
    icon: Workflow,
    title: 'Decisão antes do código',
    description: 'Design e specify definem limites e aceites antes de implementar.',
    command: '/design -> /specify',
    color: TERMINAL.purple,
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade integrada',
    description: 'Snyk local, Sonar local e testes entram no fluxo de entrega.',
    command: 'check: security + quality',
    color: TERMINAL.green,
  },
  {
    icon: Gauge,
    title: 'Iteração com métricas',
    description: '/iterate usa telemetria para evoluir sem perder padrão.',
    command: '/iterate --with-metrics',
    color: CORAL.primary,
  }
]

const PhaseCard = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(160deg, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.72) 100%)',
          border: `1px solid ${item.color}45`,
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-3">
          <span
            className="inline-flex items-center rounded-md px-2 py-1 text-xs font-mono"
            style={{ backgroundColor: `${item.color}1a`, color: item.color, border: `1px solid ${item.color}40` }}
          >
            {item.phase}
          </span>
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${item.color}1f`, border: `1px solid ${item.color}45` }}
          >
            <Icon className="w-4 h-4" style={{ color: item.color }} />
          </div>
        </div>

        <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
        <p className="text-xs text-white/60 mb-3">{item.subtitle}</p>

        <div className="font-mono text-xs rounded-md px-2 py-1.5 mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <span style={{ color: item.color }}>{item.command}</span>
        </div>

        <p className="text-xs text-white/75 leading-relaxed">{item.output}</p>
      </div>
    </motion.div>
  )
})
PhaseCard.displayName = 'PhaseCard'

const ProofCard = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="h-full rounded-xl p-4 transition-all duration-300"
        style={{
          background: 'linear-gradient(160deg, rgba(10,18,35,0.84) 0%, rgba(10,18,35,0.66) 100%)',
          border: '1px solid rgba(255,255,255,0.14)'
        }}
      >
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
          style={{ backgroundColor: `${item.color}18`, border: `1px solid ${item.color}45` }}
        >
          <Icon className="w-4 h-4" style={{ color: item.color }} />
        </div>

        <h4 className="text-sm font-bold text-white mb-1.5">{item.title}</h4>
        <p className="text-xs text-white/65 leading-relaxed mb-3">{item.description}</p>

        <div className="font-mono text-xs rounded-md px-2 py-1.5" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }}>
          <span className="text-white/35 mr-1">$</span>
          <span style={{ color: item.color }}>{item.command}</span>
        </div>
      </div>
    </motion.div>
  )
})
ProofCard.displayName = 'ProofCard'

const SpecDrivenSectionV2 = memo(() => {
  const phases = useMemo(() => SPEC_PHASES, [])
  const proofs = useMemo(() => SDD_PROOFS, [])

  return (
    <section id="spec-driven" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 700px 360px at 20% 20%, ${CORAL.primary}10 0%, transparent 60%),
              radial-gradient(ellipse 850px 420px at 80% 75%, ${TERMINAL.purple}08 0%, transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(224,122,95,0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(224,122,95,0.25) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}35` }}
          >
            <Code2 className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              AgentSpec + Fluxo SDD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            Fluxo SDD em 5 Fases
            {' '}
            <span style={{ color: CORAL.primary }}>com iteração contínua em produção</span>
          </h2>

          <p className="text-base sm:text-lg text-white/65 max-w-3xl mx-auto leading-relaxed">
            Baseado no projeto
            {' '}
            <a
              href="https://github.com/luanmorenommaciel/agentspec/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/25 hover:decoration-white/60 transition-colors"
            >
              AgentSpec
            </a>
            {', este método converte contexto em entrega previsível com padrão técnico reutilizável.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-10">
          {phases.map((item, index) => (
            <PhaseCard key={item.phase} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="rounded-2xl p-5 sm:p-6"
          style={{
            background: 'linear-gradient(160deg, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.75) 100%)',
            border: `1px solid ${CORAL.primary}30`,
          }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" style={{ color: CORAL.primary }} />
            <p className="text-sm uppercase tracking-wider" style={{ color: CORAL.light }}>
              SDD na prática
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {proofs.map((item, index) => (
              <ProofCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div
            className="mt-5 rounded-xl px-4 py-3"
            style={{ backgroundColor: `${TERMINAL.green}10`, border: `1px solid ${TERMINAL.green}30` }}
          >
            <p className="text-sm text-white/85">
              <span style={{ color: TERMINAL.green }} className="font-semibold">Resultado:</span>
              {' '}um fluxo de engenharia que preserva contexto, acelera entrega e sustenta qualidade no longo prazo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

SpecDrivenSectionV2.displayName = 'SpecDrivenSectionV2'

export default SpecDrivenSectionV2
