import React, { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  BarChart3,
  Code2,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  Bot,
  Brain,
  Sparkles
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

// EXACTLY 3 target audience profiles
const TARGET_AUDIENCES = [
  {
    title: 'Data Analysts',
    description: 'Cansados de scripts manuais — prontos para um assistente que executa análises completas por você',
    icon: BarChart3,
    fit: 'perfect',
    transformation: 'Excel manual → Pipeline automático'
  },
  {
    title: 'Developers',
    description: 'Querem acelerar desenvolvimento com um agente que escreve, testa e debugga código',
    icon: Code2,
    fit: 'perfect',
    transformation: 'Código lento → Entrega rápida'
  },
  {
    title: 'Product Managers',
    description: 'Precisam prototipar rápido — Codex transforma ideias em POCs funcionais em horas',
    icon: Lightbulb,
    fit: 'good',
    transformation: 'Ideia → POC funcionando'
  }
]

// EXACTLY 3 prerequisites
const PREREQUISITES = [
  {
    requirement: 'Python Básico',
    description: 'Variáveis, loops, funções — se você já escreveu um script, está pronto',
    icon: Code2,
    level: 'basic'
  },
  {
    requirement: 'ChatGPT Plus',
    description: 'Sua ferramenta principal — $20/mês com acesso ao Codex',
    icon: Bot,
    level: 'tool'
  },
  {
    requirement: 'Vontade de Aprender',
    description: 'O resto você aprende no bootcamp — chegue com curiosidade',
    icon: Brain,
    level: 'mindset'
  }
]

// Audience Card component - memoized
const AudienceCard = memo(({ audience, index }) => {
  const Icon = audience.icon
  const isPerfect = audience.fit === 'perfect'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ x: 5 }}
      className={`
        relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-5
        border transition-all duration-300
        ${isPerfect
          ? 'border-green-500/30 hover:border-green-500/50'
          : `hover:border-opacity-50`
        }
      `}
      style={!isPerfect ? { borderColor: `${THEME.primary}40` } : undefined}
    >
      <div className="flex items-start gap-4">
        <div
          className={`
            w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
            ${isPerfect ? 'bg-green-500/20' : ''}
          `}
          style={!isPerfect ? { backgroundColor: `${THEME.primary}25` } : undefined}
        >
          <Icon
            className={`w-6 h-6 ${isPerfect ? 'text-green-400' : ''}`}
            style={!isPerfect ? { color: THEME.secondary } : undefined}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-bold text-white">{audience.title}</h4>
            {isPerfect && (
              <span className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                <Sparkles className="w-3 h-3" />
                Ideal
              </span>
            )}
          </div>
          <p className="text-white/60 text-sm mb-2">{audience.description}</p>
          {audience.transformation && (
            <p className="text-xs font-medium" style={{ color: THEME.secondary }}>
              {audience.transformation}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
})
AudienceCard.displayName = 'AudienceCard'

// Prerequisite Card component - memoized
const PrerequisiteCard = memo(({ prereq, index }) => {
  const Icon = prereq.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-xl p-5 border"
      style={{ borderColor: `${THEME.primary}30` }}
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${THEME.primary}25` }}
        >
          <Icon className="w-6 h-6" style={{ color: THEME.secondary }} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-lg font-bold text-white">{prereq.requirement}</h4>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              prereq.level === 'tool'
                ? 'bg-purple-500/20 text-purple-400'
                : prereq.level === 'mindset'
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'bg-green-500/20 text-green-400'
            }`}>
              {prereq.level === 'tool' ? 'Ferramenta' : prereq.level === 'mindset' ? 'Mindset' : 'Básico'}
            </span>
          </div>
          <p className="text-white/60 text-sm">{prereq.description}</p>
        </div>
      </div>
    </motion.div>
  )
})
PrerequisiteCard.displayName = 'PrerequisiteCard'

const ChatGPTCodexAudienceSection = memo(() => {
  const audiences = useMemo(() => TARGET_AUDIENCES, [])
  const prerequisites = useMemo(() => PREREQUISITES, [])

  return (
    <section id="audience" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, #0a0a0a 0%, #0a0a0f 50%, #0a0a0a 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 500px 250px at 30% 30%, ${THEME.primary}08 0%, transparent 50%),
              radial-gradient(ellipse 400px 200px at 70% 70%, ${THEME.primary}06 0%, transparent 50%)
            `,
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
            <Users className="w-4 h-4" style={{ color: THEME.secondary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: THEME.secondary }}>Você Se Encaixa?</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            3 Perfis que Vão{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.secondary} 0%, ${THEME.light} 50%, ${THEME.secondary} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Multiplicar Resultados
            </span>
            {' '}com Codex
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span style={{ color: THEME.secondary }} className="font-bold">Não precisa ser expert em IA.</span>{' '}
            Se você já trabalha com dados e código, tem tudo para sair do bootcamp operando seu próprio agente autônomo.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN - Target Audiences */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Quem Vai Extrair Mais Valor
            </h3>

            <div className="space-y-4">
              {audiences.map((audience, index) => (
                <AudienceCard key={audience.title} audience={audience} index={index} />
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Prerequisites */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6" style={{ color: THEME.secondary }} />
              O Que Você Já Precisa Ter
            </h3>

            <div className="space-y-4">
              {prerequisites.map((prereq, index) => (
                <PrerequisiteCard key={prereq.requirement} prereq={prereq} index={index} />
              ))}
            </div>

            {/* Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 p-4 border border-green-500/30 rounded-xl"
              style={{ background: `linear-gradient(90deg, rgba(34, 197, 94, 0.1), ${THEME.primary}15)` }}
            >
              <p className="text-white/80 text-sm">
                <span className="text-green-400 font-bold">Resumindo:</span> Não é sobre ser expert — é sobre estar pronto para acelerar. Se você já escreveu um script Python, <span className="text-white font-semibold">você está pronto</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexAudienceSection.displayName = 'ChatGPTCodexAudienceSection'

export default ChatGPTCodexAudienceSection
