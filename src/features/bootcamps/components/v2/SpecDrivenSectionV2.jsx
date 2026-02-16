import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  CheckCircle,
  Sparkles,
  Code2,
  Layers,
  Brain,
  Github,
  Rocket,
  Repeat2,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { V2_COLORS } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

const SDD_PHASES = [
  {
    phase: '01',
    command: '/specify',
    title: 'Frame de contexto',
    subtitle: 'problema, metas, restricoes',
    description: 'Define contexto e metrica de sucesso com AgentSpec.',
    icon: FileText,
    color: TERMINAL.blue,
    artifact: 'agentspec/spec.md'
  },
  {
    phase: '02',
    command: '/plan',
    title: 'Plano tecnico',
    subtitle: 'arquitetura e trade-offs',
    description: 'Transforma spec em arquitetura e estrategia de entrega.',
    icon: Layers,
    color: TERMINAL.purple,
    artifact: 'agentspec/plan.md'
  },
  {
    phase: '03',
    command: '/tasks',
    title: 'Backlog executavel',
    subtitle: 'tarefas com criterios',
    description: 'Quebra o plano em tarefas pequenas, testaveis e rastreaveis.',
    icon: CheckCircle,
    color: CORAL.primary,
    artifact: 'agentspec/tasks/*.md'
  },
  {
    phase: '04',
    command: '/execute',
    title: 'Entrega estruturada',
    subtitle: 'codigo + testes + deploy',
    description: 'Executa as tasks com gates de qualidade e padrao de producao.',
    icon: Rocket,
    color: TERMINAL.green,
    artifact: 'commits + CI/CD'
  },
  {
    phase: '05',
    command: '/iterate',
    title: 'Aprendizado continuo',
    subtitle: 'feedback e melhoria',
    description: 'Fecha o loop com metricas, ajustes de spec e nova iteracao.',
    icon: Repeat2,
    color: CORAL.light,
    artifact: 'agentspec/iterate.md'
  }
]

const WHY_AGENTSPEC_WORKS = [
  {
    title: 'Fonte unica de verdade',
    description: 'Spec, plano e tarefas vivem no mesmo sistema. Menos ruido, menos retrabalho.',
    accent: 'Consistencia',
    icon: FileText,
    color: TERMINAL.blue
  },
  {
    title: 'Ritmo de engenharia',
    description: 'Cada fase tem entrada, saida e criterio de pronto. Trabalho fica previsivel.',
    accent: 'Previsibilidade',
    icon: Layers,
    color: TERMINAL.purple
  },
  {
    title: 'Qualidade embutida',
    description: 'Tasks testaveis e execucao com gates reduzem bug e risco de producao.',
    accent: 'Qualidade',
    icon: CheckCircle,
    color: TERMINAL.green
  },
  {
    title: 'Iteracao orientada a dados',
    description: 'Com /iterate, cada ciclo melhora com sinais reais de custo, latencia e valor.',
    accent: 'Evolucao continua',
    icon: Brain,
    color: CORAL.primary
  }
]

const SDD_GUARDRAILS = [
  {
    label: 'Context Engineering',
    detail: 'Spec, plano e tarefas carregam o mesmo contexto em todo ciclo.'
  },
  {
    label: 'SonarCloud = Local',
    detail: 'Qualidade e manutencao validadas antes do push.'
  },
  {
    label: 'Snyk = Local',
    detail: 'Risco de dependencia e vulnerabilidade bloqueado antes do deploy.'
  },
  {
    label: 'Measurement Loop',
    detail: 'O /iterate fecha custo, latencia e valor em cada release.'
  }
]

const FlowPhaseCard = memo(({ phase, index }) => {
  const Icon = phase.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div
        className="relative h-full rounded-2xl p-4 transition-all duration-300 hover:scale-[1.01] border backdrop-blur-sm"
        style={{
          borderColor: `${phase.color}45`,
          background: `linear-gradient(155deg, ${phase.color}14 0%, rgba(255,255,255,0.02) 100%)`
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: `linear-gradient(120deg, transparent 0%, ${phase.color}1f 42%, transparent 100%)` }}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="relative z-10 h-7 rounded-full text-[11px] font-mono font-semibold gap-1.5 px-2.5 mb-3 pointer-events-none"
          style={{
            color: phase.color,
            borderColor: `${phase.color}55`,
            backgroundColor: `${phase.color}14`
          }}
        >
          <span>{phase.phase}</span>
          <span>{phase.command}</span>
        </Button>

        <div className="relative z-10 flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${phase.color}20`, border: `1px solid ${phase.color}40` }}
          >
            <Icon className="w-5 h-5" style={{ color: phase.color }} />
          </div>
          <div>
            <h3 className="text-base font-bold text-white leading-tight">{phase.title}</h3>
            <p className="text-[11px] text-white/55">{phase.subtitle}</p>
          </div>
        </div>

        <p className="relative z-10 text-white/70 text-sm leading-relaxed mb-3">{phase.description}</p>
        <div
          className="relative z-10 font-mono text-[11px] px-2.5 py-2 rounded-md border"
          style={{ borderColor: `${phase.color}45`, color: phase.color, backgroundColor: 'rgba(0,0,0,0.32)' }}
        >
          artifact: {phase.artifact}
        </div>
      </div>
    </motion.div>
  )
})
FlowPhaseCard.displayName = 'FlowPhaseCard'

const WhyPointCard = memo(({ point, index }) => {
  const Icon = point.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="relative rounded-xl border p-4 overflow-hidden"
      style={{ borderColor: `${point.color}45`, background: `linear-gradient(145deg, ${point.color}16 0%, rgba(255,255,255,0.02) 100%)` }}
    >
      <div
        className="absolute inset-0 opacity-35"
        style={{ background: `linear-gradient(120deg, transparent 0%, ${point.color}22 45%, transparent 100%)` }}
      />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center border"
            style={{ borderColor: `${point.color}45`, backgroundColor: `${point.color}24` }}
          >
            <Icon className="w-4 h-4" style={{ color: point.color }} />
          </div>
          <span className="text-[10px] uppercase tracking-[0.15em] font-semibold" style={{ color: point.color }}>
            {point.accent}
          </span>
        </div>
        <h4 className="text-white font-semibold text-sm mb-1">{point.title}</h4>
        <p className="text-white/65 text-xs leading-relaxed">{point.description}</p>
      </div>
    </motion.div>
  )
})
WhyPointCard.displayName = 'WhyPointCard'

const SpecDrivenSectionV2 = memo(() => {
  const phases = useMemo(() => SDD_PHASES, [])
  const whyPoints = useMemo(() => WHY_AGENTSPEC_WORKS, [])
  const guardrails = useMemo(() => SDD_GUARDRAILS, [])

  return (
    <section id="spec-driven" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 620px 320px at 20% 30%, ${CORAL.subtle} 0%, transparent 55%),
              radial-gradient(ellipse 520px 260px at 85% 70%, rgba(180, 140, 255, 0.12) 0%, transparent 55%)
            `
          }}
        />
        {/* Code pattern */}
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 30px,
              rgba(255, 122, 92, 0.4) 30px,
              rgba(255, 122, 92, 0.4) 31px
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
              5-Phase SDD Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            <span style={{ color: CORAL.primary }}>AgentSpec</span> + SDD
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-4">
            Um fluxo completo de especificacao para entrega continua:
            /specify, /plan, /tasks, /execute e /iterate.
          </p>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-full border text-xs font-mono text-white/80 hover:text-white bg-white/[0.03]"
            style={{ borderColor: `${NEUTRAL.borderStrong}` }}
          >
            <a href="https://github.com/luanmorenommaciel/agentspec" target="_blank" rel="noopener noreferrer">
              <Github className="w-3.5 h-3.5" />
              github.com/luanmorenommaciel/agentspec
            </a>
          </Button>
        </motion.div>

        {/* 5-Phase Flow */}
        <div className="relative mb-16">
          <div
            className="hidden md:block absolute left-[8%] right-[8%] top-[38px] h-px"
            style={{ background: `linear-gradient(90deg, ${TERMINAL.blue}40 0%, ${CORAL.primary}40 100%)` }}
          />
          <div
            className="md:hidden absolute left-[22px] top-6 bottom-6 w-px"
            style={{ background: `linear-gradient(180deg, ${TERMINAL.blue}40 0%, ${CORAL.primary}40 100%)` }}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <FlowPhaseCard phase={phase} index={index} />
                {index < phases.length - 1 && (
                  <div className="hidden md:flex absolute -right-2 top-9 z-20 w-4 h-4 items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white/35" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-oswald font-bold text-white mb-2">
              Por Que Isso <span style={{ color: TERMINAL.green }}>Escala Melhor</span>
            </h3>
            <p className="text-white/50 text-sm">
              SDD com AgentSpec transforma tentativa-e-erro em sistema de engenharia.
            </p>
          </div>

          <div
            className="relative rounded-2xl p-5 sm:p-6 v2-panel overflow-hidden"
            style={{ border: `1px solid ${NEUTRAL.borderStrong}` }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '28px 28px'
              }}
            />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3">
              {whyPoints.map((point, index) => (
                <WhyPointCard key={point.title} point={point} index={index} />
              ))}
            </div>
            <div className="relative z-10 mt-4 rounded-xl border p-4" style={{ borderColor: `${NEUTRAL.borderStrong}`, backgroundColor: 'rgba(0,0,0,0.24)' }}>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold mb-2" style={{ color: CORAL.light }}>
                Production Guardrails
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {guardrails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border px-3 py-2.5"
                    style={{ borderColor: `${NEUTRAL.borderStrong}`, backgroundColor: 'rgba(255,255,255,0.02)' }}
                  >
                    <p className="text-xs font-semibold text-white">{item.label}</p>
                    <p className="text-[11px] text-white/60 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative z-10 mt-4 rounded-xl border p-4"
              style={{ borderColor: `${CORAL.primary}45`, background: 'linear-gradient(145deg, rgba(255,122,92,0.14) 0%, rgba(255,255,255,0.02) 100%)' }}
            >
              <p className="text-sm text-white/80 leading-relaxed">
                <span className="font-semibold" style={{ color: CORAL.light }}>Resumo tecnico:</span>{' '}
                com AgentSpec, cada iteracao herda contexto, plano e criterios. Isso reduz retrabalho,
                aumenta a qualidade do codigo e acelera o tempo de entrega em producao.
              </p>
            </div>
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
              background: `linear-gradient(135deg, ${CORAL.subtle} 0%, rgba(180, 140, 255, 0.16) 100%)`,
              border: `1px solid ${NEUTRAL.borderStrong}`,
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
