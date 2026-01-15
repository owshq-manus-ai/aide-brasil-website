import React, { useState, memo, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  FileText,
  Database,
  Webhook,
  GitBranch,
  BarChart3,
  Shield,
  Rocket,
  ChevronDown,
  CheckCircle,
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

// EXACTLY 8 steps with expandable accordion
const STEPS = [
  {
    number: 1,
    title: 'Entender o Ambiente Codex',
    subtitle: 'Chat Básico → Sandbox Poderoso',
    description: 'Descubra o que o Codex realmente pode fazer — file system, packages, execução. Você sai sabendo explorar o ambiente.',
    skills: ['Codex Capabilities', 'Environment Exploration', 'Effective Prompting'],
    personas: ['Developer', 'Data Analyst'],
    icon: Search,
    isCore: false
  },
  {
    number: 2,
    title: 'Estruturar Prompts Efetivos',
    subtitle: 'Pedido Vago → Instrução Precisa',
    description: 'Aprenda a dar instruções que geram código de qualidade. Pattern de prompts que funcionam toda vez.',
    skills: ['Prompt Engineering', 'Specification Writing', 'Quality Instructions'],
    personas: ['Software Engineer', 'Tech Lead'],
    icon: FileText,
    isCore: false
  },
  {
    number: 3,
    title: 'Manipular Dados',
    subtitle: 'CSV Cru → DataFrame Limpo',
    description: 'Use pandas no Codex para limpar, transformar e analisar dados. De arquivo cru a insights em minutos.',
    skills: ['Pandas Mastery', 'Data Cleaning', 'Exploratory Analysis'],
    personas: ['Data Analyst', 'Data Engineer'],
    icon: Database,
    isCore: false
  },
  {
    number: 4,
    title: 'Integrar APIs Externas',
    subtitle: 'Sistema Isolado → Conectado ao Mundo',
    description: 'Conecte o Codex com APIs REST — autenticação, requests, parsing de resposta. Dados externos fluindo.',
    skills: ['REST APIs', 'Authentication', 'Error Handling'],
    personas: ['Backend Engineer', 'Integration Specialist'],
    icon: Webhook,
    isCore: false
  },
  {
    number: 5,
    title: 'Construir Pipeline ETL',
    subtitle: 'Tarefas Manuais → Pipeline Automático',
    description: 'Monte um pipeline completo: extract de API, transform com pandas, load para destino. Tudo automatizado.',
    skills: ['ETL Design', 'Data Pipelines', 'Automation'],
    personas: ['Data Engineer', 'Analytics Engineer'],
    icon: GitBranch,
    isCore: false
  },
  {
    number: 6,
    title: 'Gerar Visualizações',
    subtitle: 'Números → Gráficos que Comunicam',
    description: 'Crie dashboards e visualizações com matplotlib e seaborn. De dados a insights visuais prontos para apresentar.',
    skills: ['Data Visualization', 'Chart Design', 'Storytelling'],
    personas: ['Data Analyst', 'BI Developer'],
    icon: BarChart3,
    isCore: true // Core step - expanded by default
  },
  {
    number: 7,
    title: 'Testar e Validar',
    subtitle: 'Código Frágil → Sistema Robusto',
    description: 'Adicione testes com pytest, valide edge cases. Codex escreve os testes e roda — coverage automático.',
    skills: ['Testing', 'Quality Assurance', 'CI/CD Basics'],
    personas: ['QA Engineer', 'Software Engineer'],
    icon: Shield,
    isCore: false
  },
  {
    number: 8,
    title: 'Exportar para Produção',
    subtitle: 'Sandbox → Cloud Real',
    description: 'Leve o código do Codex para GitHub, configure CI/CD, deploye em AWS/GCP. Sistema real em produção.',
    skills: ['Production Deploy', 'Cloud Services', 'DevOps Basics'],
    personas: ['DevOps', 'Platform Engineer'],
    icon: Rocket,
    isCore: false
  }
]

// Chevron rotation animation
const chevronAnimation = { rotate: 180 }

// StepCard component - memoized with expandable accordion
const StepCard = memo(({ step, index, isExpanded, onToggle }) => {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
    >
      <div
        className={`
          relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6
          border transition-all duration-300 cursor-pointer min-h-[44px]
          ${step.isCore
            ? `shadow-lg`
            : 'border-white/10 hover:border-opacity-40 active:border-opacity-50'
          }
        `}
        style={{
          borderColor: step.isCore ? `${THEME.primary}60` : undefined,
          boxShadow: step.isCore ? `0 4px 20px ${THEME.primary}20` : undefined
        }}
        onClick={onToggle}
      >
        {/* Core Badge */}
        {step.isCore && (
          <div className="absolute -top-3 left-6">
            <div
              className="inline-flex items-center gap-1 rounded-full px-3 py-1"
              style={{ background: `linear-gradient(90deg, ${THEME.primary}, ${THEME.secondary})` }}
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-bold uppercase">Core</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Step Number */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 font-oswald font-bold text-lg sm:text-xl"
            style={step.isCore
              ? { background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.secondary})`, color: 'white' }
              : { backgroundColor: `${THEME.primary}25`, color: THEME.secondary, border: `1px solid ${THEME.primary}40` }
            }
          >
            {step.number}
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 sm:mb-1 leading-tight">{step.title}</h3>
            <p className="text-xs sm:text-sm font-medium truncate sm:whitespace-normal" style={{ color: THEME.secondary }}>{step.subtitle}</p>
          </div>

          {/* Icon & Expand */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-white/5 items-center justify-center">
              <Icon className="w-5 h-5" style={{ color: THEME.secondary }} />
            </div>
            <motion.div
              animate={isExpanded ? chevronAnimation : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="w-9 h-9 sm:w-8 sm:h-8 min-w-[36px] min-h-[36px] rounded-full bg-white/5 flex items-center justify-center"
            >
              <ChevronDown className="w-4 h-4 text-white/60" />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content - AnimatePresence for accordion */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-6 mt-6 border-t border-white/10">
                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Você sai sabendo</p>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs"
                        style={{ backgroundColor: `${THEME.primary}15`, border: `1px solid ${THEME.primary}30`, color: THEME.secondary }}
                      >
                        <CheckCircle className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personas */}
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Relevante para</p>
                  <div className="flex flex-wrap gap-2">
                    {step.personas.map((persona, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/60 text-xs"
                      >
                        {persona}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
})
StepCard.displayName = 'StepCard'

const ChatGPTCodexJourneyTimeline = memo(() => {
  // Core step expanded by default (step 6, index 5)
  const [expandedStep, setExpandedStep] = useState(5)

  const steps = useMemo(() => STEPS, [])

  const handleToggle = useCallback((index) => {
    setExpandedStep(prev => prev === index ? null : index)
  }, [])

  return (
    <section id="journey" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 20%, ${THEME.primary}0a 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 30% 80%, ${THEME.primary}06 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
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
            <GitBranch className="w-4 h-4" style={{ color: THEME.secondary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: THEME.secondary }}>Sua Jornada em 4 Dias</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            8 Passos Para{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${THEME.secondary} 0%, ${THEME.light} 50%, ${THEME.secondary} 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Dominar o Codex
            </span>
            {' '}e Entregar em Produção
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto px-2 sm:px-0">
            <span className="text-white font-semibold">Não é teoria.</span> Cada passo termina com algo funcionando —você vai do requisito ao deploy, construindo junto.
            <span className="block mt-2 font-medium text-sm sm:text-base" style={{ color: THEME.secondary }}>Toque em cada passo para ver os detalhes.</span>
          </p>
        </motion.div>

        {/* Timeline with Zigzag Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: `linear-gradient(to bottom, ${THEME.primary}80, ${THEME.primary}30, transparent)` }}
          />

          {/* Steps - Zigzag alternating layout */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`lg:grid lg:grid-cols-2 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:direction-rtl'}`}
              >
                {index % 2 === 0 ? (
                  <>
                    <StepCard
                      step={step}
                      index={index}
                      isExpanded={expandedStep === index}
                      onToggle={() => handleToggle(index)}
                    />
                    <div className="hidden lg:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block" />
                    <StepCard
                      step={step}
                      index={index}
                      isExpanded={expandedStep === index}
                      onToggle={() => handleToggle(index)}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{sharedStyles}</style>
    </section>
  )
})

ChatGPTCodexJourneyTimeline.displayName = 'ChatGPTCodexJourneyTimeline'

export default ChatGPTCodexJourneyTimeline
