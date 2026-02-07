import React, { useState, memo, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  Terminal,
  FlaskConical,
  Cloud,
  Server,
  Brain,
  GitBranch,
  Bot,
  ChevronDown,
  CheckCircle,
  Sparkles
} from 'lucide-react'
import { V2_COLORS } from './theme'

const CORAL = V2_COLORS.coral
const TERMINAL = V2_COLORS.terminal
const NEUTRAL = V2_COLORS.neutral

const STEPS = [
  {
    number: 1,
    title: 'Mapear requisito em Spec',
    subtitle: 'Dia 1 • Contexto',
    command: 'claude init --spec invoice',
    skills: ['Context Engineering', 'Acceptance Criteria'],
    icon: Users
  },
  {
    number: 2,
    title: 'Conectar dados reais',
    subtitle: 'Dia 1 • MCPs',
    command: 'mcp connect bigquery',
    skills: ['MCP Setup', 'Data Access'],
    icon: Terminal
  },
  {
    number: 3,
    title: 'Prototipar o pipeline GenAI',
    subtitle: 'Dia 2 • Pipeline',
    command: 'claude "build extraction pipeline"',
    skills: ['Rapid Prototyping', 'Test-Driven GenAI'],
    icon: FlaskConical
  },
  {
    number: 4,
    title: 'Desenhar multi-cloud',
    subtitle: 'Dia 2 • Arquitetura',
    command: 'claude "add adapter pattern"',
    skills: ['Cloud Architecture', 'Adapter Design'],
    icon: Cloud
  },
  {
    number: 5,
    title: 'Infra como código',
    subtitle: 'Dia 3 • Terraform',
    command: 'terraform apply -auto-approve',
    skills: ['IaC', 'Environment Management'],
    icon: Server
  },
  {
    number: 6,
    title: 'Observabilidade e LLMOps',
    subtitle: 'Dia 3 • Langfuse',
    command: 'langfuse init --env prod',
    skills: ['LLMOps', 'Cost & Quality'],
    icon: Brain
  },
  {
    number: 7,
    title: 'CI/CD com gates',
    subtitle: 'Dia 4 • Deploy',
    command: 'git push origin main # auto-deploy',
    skills: ['GitHub Actions', 'Quality Gates'],
    icon: GitBranch
  },
  {
    number: 8,
    title: 'Operar com agentes',
    subtitle: 'Dia 4 • Runbooks',
    command: 'crewai start --mode autonomous',
    skills: ['CrewAI', 'DataOps'],
    icon: Bot
  }
]

const StepCard = memo(({ step, index, isExpanded, onToggle }) => {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div
        onClick={onToggle}
        className={`
          relative rounded-xl p-4 cursor-pointer transition-all duration-300
          ${step.isCore ? 'ring-2' : 'hover:scale-[1.01]'}
          v2-card-soft
        `}
        style={{
          border: `1px solid ${step.isCore ? CORAL.primary + '80' : NEUTRAL.border}`,
          boxShadow: step.isCore ? `0 0 0 1px ${CORAL.primary}40` : undefined,
        }}
      >
        {/* Core Badge */}
        {step.isCore && (
          <div className="absolute -top-2.5 left-4">
            <div
              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold"
              style={{ background: `linear-gradient(90deg, ${CORAL.primary}, ${CORAL.light})` }}
            >
              <Sparkles className="w-3 h-3 text-white" />
              <span className="text-white">CORE</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center gap-3">
          {/* Step Number */}
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 font-oswald font-bold text-lg"
            style={step.isCore
              ? { background: `linear-gradient(135deg, ${CORAL.primary}, ${CORAL.light})`, color: 'white' }
              : { backgroundColor: `${CORAL.primary}20`, color: CORAL.primary, border: `1px solid ${CORAL.primary}30` }
            }
          >
            {step.number}
          </div>

          {/* Title */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white truncate">{step.title}</h3>
            <p className="text-xs" style={{ color: CORAL.primary }}>{step.subtitle}</p>
          </div>

          {/* Icon & Expand */}
          <div className="flex items-center gap-2">
            <div
              className="hidden sm:flex w-8 h-8 rounded-lg items-center justify-center"
              style={{ backgroundColor: `${CORAL.primary}15` }}
            >
              <Icon className="w-4 h-4" style={{ color: CORAL.primary }} />
            </div>
            <motion.div
              animate={isExpanded ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
            >
              <ChevronDown className="w-4 h-4 text-white/50" />
            </motion.div>
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-white/10">
                {/* Command */}
                <div
                  className="font-mono text-sm px-3 py-2 rounded-lg mb-3"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                >
                  <span style={{ color: TERMINAL.green }}>$</span>{' '}
                  <span className="text-white/80">{step.command}</span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {step.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs"
                      style={{ backgroundColor: `${CORAL.primary}15`, color: CORAL.primary }}
                    >
                      <CheckCircle className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
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

const JourneyTimelineV2 = memo(() => {
  const [expandedStep, setExpandedStep] = useState(5) // Core step
  const steps = useMemo(() => STEPS, [])

  const handleToggle = useCallback((index) => {
    setExpandedStep(prev => prev === index ? null : index)
  }, [])

  return (
    <section id="journey" className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 820px 420px at 50% 15%, ${CORAL.subtle} 0%, transparent 55%),
              radial-gradient(ellipse 520px 320px at 85% 80%, rgba(70, 199, 255, 0.12) 0%, transparent 60%)
            `
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-oswald font-bold text-white mb-4">
            8 Passos Para{' '}
            <span style={{ color: CORAL.primary }}>Produção</span>
          </h2>

          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto">
            Cada passo termina com algo funcionando.{' '}
            <span style={{ color: CORAL.primary }}>Toque para ver os detalhes.</span>
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              isExpanded={expandedStep === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

JourneyTimelineV2.displayName = 'JourneyTimelineV2'

export default JourneyTimelineV2
