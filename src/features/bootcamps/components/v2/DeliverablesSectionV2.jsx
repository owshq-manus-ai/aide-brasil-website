import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Shield,
  Award,
  CheckCircle,
  GitBranch,
  Rocket,
  Package,
  Server,
  BarChart3,
  Eye,
  Cloud,
  Briefcase,
  Code2
} from 'lucide-react'
import { V2_COLORS, V2_SURFACES } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

const HIGHLIGHTS = [
  {
    icon: Rocket,
    value: 'Acesso Total',
    label: 'Conteúdo completo liberado',
    color: TERMINAL.blue
  },
  {
    icon: Shield,
    value: 'Garantia de Satisfação',
    label: 'Risco técnico reduzido',
    color: TERMINAL.green
  },
  {
    icon: Award,
    value: 'Portfólio Estratégico',
    label: 'Projeto que comprova senioridade',
    color: CORAL.primary
  },
  {
    icon: Package,
    value: 'Arquitetura Aplicada',
    label: 'Do requisito ao deploy',
    color: CORAL.primary
  }
]

const DELIVERABLES = [
  {
    title: 'Repositório GitHub production-ready',
    description: 'Clone e rode com um comando',
    icon: GitBranch,
    category: 'Code'
  },
  {
    title: 'Pipeline GenAI em produção',
    description: 'Invoice → BigQuery → Dashboard',
    icon: Rocket,
    category: 'GenAI'
  },
  {
    title: 'Infra GCP via Terraform',
    description: 'Ambientes reproduzíveis',
    icon: Server,
    category: 'IaC'
  },
  {
    title: 'CI/CD com gates de qualidade',
    description: 'Push = deploy com validação',
    icon: Package,
    category: 'DevOps'
  },
  {
    title: 'Observabilidade com Langfuse',
    description: 'Custo, latência e qualidade',
    icon: Eye,
    category: 'LLMOps'
  },
  {
    title: 'Agentes operando com runbooks',
    description: 'Você supervisiona, eles executam',
    icon: BarChart3,
    category: 'Agents'
  },
  {
    title: 'Arquitetura multi-cloud',
    description: 'Portável entre GCP, AWS e Azure',
    icon: Cloud,
    category: 'Arch'
  },
  {
    title: 'Projeto pronto para portfólio',
    description: 'Mostre em entrevistas e cases',
    icon: Briefcase,
    category: 'Career'
  }
]

const HighlightCard = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div
        className="relative h-full rounded-xl p-5 text-center transition-all duration-300 hover:scale-[1.02] v2-card-soft"
        style={{
          border: `1px solid ${item.color}35`,
        }}
      >
        {/* Glow on hover */}
        <div
          className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity blur-lg"
          style={{ backgroundColor: item.color }}
        />

        {/* Icon */}
        <div
          className="relative w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
          style={{ backgroundColor: `${item.color}15`, border: `1px solid ${item.color}30` }}
        >
          <Icon className="w-6 h-6" style={{ color: item.color }} />
        </div>

        {/* Value */}
        <div className="relative text-2xl sm:text-3xl font-oswald font-bold text-white mb-1">
          {item.value}
        </div>

        {/* Label */}
        <div className="relative text-sm text-white/50">
          {item.label}
        </div>
      </div>
    </motion.div>
  )
})
HighlightCard.displayName = 'HighlightCard'

const DeliverableItem = memo(({ item, index }) => {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:scale-[1.01] v2-card-soft"
        style={{
          border: `1px solid ${NEUTRAL.border}`,
        }}
      >
        <div className="flex items-start gap-3">
          {/* Checkmark */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: `${TERMINAL.green}20` }}
          >
            <CheckCircle className="w-4 h-4" style={{ color: TERMINAL.green }} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-sm font-bold text-white">{item.title}</h4>
            </div>
            <p className="text-xs" style={{ color: CORAL.light }}>{item.description}</p>
          </div>

          {/* Category badge */}
          <span
            className="text-[10px] px-2 py-1 rounded font-mono flex-shrink-0"
            style={{ backgroundColor: `${CORAL.primary}15`, color: CORAL.primary }}
          >
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  )
})
DeliverableItem.displayName = 'DeliverableItem'

const DeliverablesSectionV2 = memo(() => {
  const highlights = useMemo(() => HIGHLIGHTS, [])
  const deliverables = useMemo(() => DELIVERABLES, [])

  return (
    <section id="deliverables" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 640px 320px at 50% 15%, ${CORAL.subtle} 0%, transparent 55%),
              radial-gradient(ellipse 420px 240px at 85% 80%, rgba(126, 231, 135, 0.12) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <HighlightCard key={item.value} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Deliverables Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4"
            style={{ backgroundColor: `${TERMINAL.green}15`, border: `1px solid ${TERMINAL.green}30` }}
          >
            <Code2 className="w-4 h-4" style={{ color: TERMINAL.green }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: TERMINAL.green }}>
              Entregas que Viram Ativo
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-white mb-2">
            Prova Técnica,{' '}
            <span style={{ color: CORAL.primary }}>Não Promessa Comercial</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base">
            Cada módulo vira um ativo executável e auditável no seu portfólio.
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
          {deliverables.map((item, index) => (
            <DeliverableItem key={item.title} item={item} index={index} />
          ))}
        </div>

        {/* Value Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="inline-block rounded-xl p-5 sm:p-6"
            style={{
              background: V2_SURFACES.panel,
              border: `1px solid ${NEUTRAL.borderStrong}`,
            }}
          >
            <p className="text-white/50 text-sm mb-3">Se você montasse isso sozinho:</p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/70 mb-4">
              <span>Cursos GCP: ~R$ 500</span>
              <span className="text-white/30">+</span>
              <span>Terraform: ~R$ 400</span>
              <span className="text-white/30">+</span>
              <span>GenAI: ~R$ 600</span>
              <span className="text-white/30">=</span>
              <span className="text-lg font-bold" style={{ color: CORAL.primary }}>R$ 1.500+</span>
            </div>

            <p className="text-sm" style={{ color: TERMINAL.green }}>
              Aqui você leva tudo integrado por menos, com arquitetura pronta para escalar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

DeliverablesSectionV2.displayName = 'DeliverablesSectionV2'

export default DeliverablesSectionV2
