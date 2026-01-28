import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
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

const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
}

const TERMINAL = {
  green: '#7ee787',
  blue: '#79c0ff',
  purple: '#d2a8ff',
  border: '#30363d',
}

const HIGHLIGHTS = [
  {
    icon: Calendar,
    value: '28-31 Jan',
    label: '4 dias intensivos',
    color: TERMINAL.blue
  },
  {
    icon: Clock,
    value: '12h',
    label: 'Código hands-on',
    color: TERMINAL.purple
  },
  {
    icon: Shield,
    value: '7 dias',
    label: 'Garantia total',
    color: TERMINAL.green
  },
  {
    icon: Award,
    value: 'Certificado',
    label: '+ Repo completo',
    color: CORAL.primary
  }
]

const DELIVERABLES = [
  {
    title: 'Repositório GitHub production-ready',
    description: 'Clone e rode em 5 minutos',
    icon: GitBranch,
    category: 'Code'
  },
  {
    title: 'Pipeline GenAI completo em produção',
    description: 'Invoice → BigQuery → Dashboard',
    icon: Rocket,
    category: 'GenAI'
  },
  {
    title: 'Infra GCP via Terraform',
    description: 'Destrua e recrie em 1 comando',
    icon: Server,
    category: 'IaC'
  },
  {
    title: 'CI/CD com GitHub Actions',
    description: 'Push = Deploy automático',
    icon: Package,
    category: 'DevOps'
  },
  {
    title: 'Observabilidade com Langfuse',
    description: 'Custo, latência, qualidade',
    icon: Eye,
    category: 'LLMOps'
  },
  {
    title: 'DataOps com CrewAI Agents',
    description: 'Eles operam, você supervisiona',
    icon: BarChart3,
    category: 'Agents'
  },
  {
    title: 'Arquitetura Multi-Cloud',
    description: 'GCP hoje, AWS/Azure amanhã',
    icon: Cloud,
    category: 'Arch'
  },
  {
    title: 'Projeto pronto para portfólio',
    description: 'Mostre em entrevistas',
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
        className="relative h-full rounded-xl p-5 text-center transition-all duration-300 hover:scale-[1.03]"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.8) 100%)',
          border: `1px solid ${item.color}30`,
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
        className="relative h-full rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: `1px solid ${TERMINAL.border}`,
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
    <section id="deliverables" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 600px 300px at 50% 20%, ${CORAL.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 80% 80%, ${TERMINAL.green}05 0%, transparent 50%)
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
              8 Entregas Concretas
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-white mb-2">
            Não Promessas —{' '}
            <span style={{ color: CORAL.primary }}>Entregas Reais</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base">
            Cada item você leva funcionando no final do bootcamp
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
              background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.95) 0%, rgba(13, 17, 23, 0.8) 100%)',
              border: `1px solid ${CORAL.primary}20`,
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
              Aqui você leva tudo integrado por menos — e funcionando em 4 dias
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

DeliverablesSectionV2.displayName = 'DeliverablesSectionV2'

export default DeliverablesSectionV2
