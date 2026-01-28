import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Database,
  BarChart3,
  Code2,
  CheckCircle,
  AlertCircle,
  Terminal,
  GitBranch
} from 'lucide-react'

const CORAL = {
  primary: '#E07A5F',
  light: '#F0A090',
}

const TERMINAL = {
  green: '#7ee787',
  purple: '#d2a8ff',
}

const TARGET_AUDIENCES = [
  {
    title: 'Data Engineers',
    description: 'Pipelines manuais → Agentes autônomos',
    icon: Database,
    fit: 'perfect',
  },
  {
    title: 'Analytics Engineers',
    description: 'SQL tradicional → Extração inteligente',
    icon: BarChart3,
    fit: 'perfect',
  },
  {
    title: 'Software Engineers',
    description: 'Solo coder → Time de IA',
    icon: Code2,
    fit: 'good',
  }
]

const PREREQUISITES = [
  {
    requirement: 'SQL + Python',
    description: 'SELECT, JOINs, funções básicas',
    icon: Code2,
  },
  {
    requirement: 'Git',
    description: 'add, commit, push',
    icon: GitBranch,
  },
  {
    requirement: 'Claude Code Pro',
    description: '$20/mês — sua arma principal',
    icon: Terminal,
  }
]

const AudienceCard = memo(({ audience, index }) => {
  const Icon = audience.icon
  const isPerfect = audience.fit === 'perfect'

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="relative rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: `1px solid ${isPerfect ? TERMINAL.green + '40' : 'rgba(48, 54, 61, 0.8)'}`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: isPerfect ? `${TERMINAL.green}20` : `${CORAL.primary}20` }}
          >
            <Icon className="w-5 h-5" style={{ color: isPerfect ? TERMINAL.green : CORAL.primary }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-white">{audience.title}</h4>
              {isPerfect && (
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: `${TERMINAL.green}20`, color: TERMINAL.green }}
                >
                  Ideal
                </span>
              )}
            </div>
            <p className="text-white/50 text-sm">{audience.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
})
AudienceCard.displayName = 'AudienceCard'

const PrerequisiteCard = memo(({ prereq, index }) => {
  const Icon = prereq.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className="relative rounded-xl p-4 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: `1px solid ${CORAL.primary}20`,
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${CORAL.primary}20` }}
          >
            <Icon className="w-5 h-5" style={{ color: CORAL.primary }} />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">{prereq.requirement}</h4>
            <p className="text-white/50 text-sm">{prereq.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
})
PrerequisiteCard.displayName = 'PrerequisiteCard'

const AudienceSectionV2 = memo(() => {
  const audiences = useMemo(() => TARGET_AUDIENCES, [])
  const prerequisites = useMemo(() => PREREQUISITES, [])

  return (
    <section id="audience" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, ${CORAL.primary}05 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, ${CORAL.primary}05 0%, transparent 50%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <Users className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              Você Se Encaixa?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            3 Perfis que Vão{' '}
            <span style={{ color: CORAL.primary }}>Multiplicar Resultados</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            Se você trabalha com dados e código, tem tudo para operar sua própria frota de agentes
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Target Audiences */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" style={{ color: TERMINAL.green }} />
              Quem Vai Extrair Mais Valor
            </h3>
            <div className="space-y-3">
              {audiences.map((audience, index) => (
                <AudienceCard key={audience.title} audience={audience} index={index} />
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" style={{ color: CORAL.primary }} />
              O Que Você Precisa Ter
            </h3>
            <div className="space-y-3">
              {prerequisites.map((prereq, index) => (
                <PrerequisiteCard key={prereq.requirement} prereq={prereq} index={index} />
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-4 p-4 rounded-xl"
              style={{
                background: `linear-gradient(90deg, ${TERMINAL.green}10, ${CORAL.primary}10)`,
                border: `1px solid ${TERMINAL.green}30`
              }}
            >
              <p className="text-white/80 text-sm">
                <span style={{ color: TERMINAL.green }} className="font-bold">Resumindo:</span>{' '}
                SELECT + loop em Python = <span className="text-white font-semibold">você está pronto</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})

AudienceSectionV2.displayName = 'AudienceSectionV2'

export default AudienceSectionV2
