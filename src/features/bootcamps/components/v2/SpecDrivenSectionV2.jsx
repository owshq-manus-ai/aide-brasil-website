import React, { memo } from 'react'
import { motion } from 'framer-motion'
import {
  Search,
  Layers,
  Rocket,
  RefreshCw,
  Code2,
  Sparkles,
  Brain,
  ShieldCheck,
  Gauge,
  Workflow,
} from 'lucide-react'
import { CORAL, TERMINAL } from '../../theme'

const SPEC_PHASES = [
  {
    phase: '01',
    title: 'Define',
    subtitle: 'Requisitos, contexto e restrições do problema',
    command: '/define',
    icon: Search,
    color: TERMINAL.blue,
    output: 'DEFINE_*.md — escopo, critérios de aceite e limites'
  },
  {
    phase: '02',
    title: 'Design',
    subtitle: 'Arquitetura, contratos e decisões técnicas',
    command: '/design',
    icon: Layers,
    color: TERMINAL.purple,
    output: 'DESIGN_*.md — ADR, interfaces e file manifest'
  },
  {
    phase: '03',
    title: 'Build',
    subtitle: 'Implementação com routing inteligente de agentes',
    command: '/build',
    icon: Code2,
    color: CORAL.primary,
    output: 'BUILD_REPORT_*.md — código, testes e validação'
  },
  {
    phase: '04',
    title: 'Ship',
    subtitle: 'Archive com lessons learned e documentação',
    command: '/ship',
    icon: Rocket,
    color: TERMINAL.green,
    output: 'SHIPPED_*.md — decisões preservadas para próximos ciclos'
  }
]

const SDD_PROOFS = [
  {
    icon: Brain,
    title: 'Artefatos persistentes por fase',
    description: 'DEFINE, DESIGN, BUILD_REPORT e SHIPPED — cada fase gera documentos versionados que preservam decisões entre sessões e onboarding de novos membros.',
    command: 'ls .claude/sdd/features/',
    color: TERMINAL.blue,
  },
  {
    icon: Workflow,
    title: 'Cascade automático downstream',
    description: 'Mudança em /define propaga para /design e depois para /build automaticamente. Sem retrabalho manual — consistência garantida pelo fluxo.',
    command: '/iterate --cascade',
    color: TERMINAL.purple,
  },
  {
    icon: ShieldCheck,
    title: 'Quality gates integrados no /build',
    description: 'Snyk, SonarCloud e testes automatizados entram no pipeline. Código avança apenas se passar nos gates de segurança e qualidade.',
    command: 'check: security + quality + tests',
    color: TERMINAL.green,
  },
  {
    icon: Gauge,
    title: 'Agent routing inteligente',
    description: '17+ agentes especializados selecionados automaticamente com base no conteúdo do DESIGN. Menciona Pydantic? python-developer. pytest? test-generator.',
    command: '/build --auto-route agents',
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
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 active:scale-[0.99]"
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
        <p className="text-xs text-white/70 leading-relaxed mb-3">{item.description}</p>

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
  const phases = SPEC_PHASES
  const proofs = SDD_PROOFS

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
            Fluxo SDD em 4 Fases
            {' '}
            <span style={{ color: CORAL.primary }}>com iteração contínua entre elas</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Baseado no projeto
            {' '}
            <a
              href="https://github.com/luanmorenommaciel/agentspec/tree/main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline decoration-white/25 hover:decoration-white/60 active:decoration-white/60 transition-colors py-1"
            >
              AgentSpec
            </a>
            {' — cada fase gera artefatos persistentes que preservam contexto, e '}
            <span className="font-mono font-semibold" style={{ color: CORAL.light }}>/iterate</span>
            {' conecta todas elas em um ciclo contínuo de melhoria.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
          {phases.map((item, index) => (
            <PhaseCard key={item.phase} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.25 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 mb-10"
          style={{
            background: `linear-gradient(90deg, ${CORAL.light}06 0%, ${CORAL.light}12 50%, ${CORAL.light}06 100%)`,
            border: `1px dashed ${CORAL.light}35`,
          }}
        >
          <RefreshCw className="w-4 h-4 flex-shrink-0" style={{ color: CORAL.light }} />
          <p className="text-sm text-white/80">
            <span className="font-mono font-bold" style={{ color: CORAL.light }}>/iterate</span>
            {' — aplica-se a qualquer fase. Mudanças < 30% dos requisitos cascateiam automaticamente de Define '}
            <span className="text-white/40">{'\u2192'}</span>
            {' Design '}
            <span className="text-white/40">{'\u2192'}</span>
            {' Build.'}
          </p>
        </motion.div>

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
            className="mt-5 w-fit rounded-lg px-3 py-2"
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
