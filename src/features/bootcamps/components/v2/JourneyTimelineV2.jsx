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

const STEPS = [
  {
    number: 1,
    title: 'Traduzir Negócio em Contexto',
    subtitle: 'Requisito →Spec',
    command: 'claude init --project invoice',
    skills: ['Problem Framing', 'Context Engineering'],
    icon: Users
  },
  {
    number: 2,
    title: 'Ativar Frota de Agentes',
    subtitle: 'Solo →Time de IA',
    command: 'mcp connect --all && agent spawn',
    skills: ['Agent Orchestration', 'MCP Setup'],
    icon: Terminal
  },
  {
    number: 3,
    title: 'Prototipar em Minutos',
    subtitle: 'Ideia →Código',
    command: 'claude "build extraction pipeline"',
    skills: ['Rapid Prototyping', 'Test-Driven GenAI'],
    icon: FlaskConical
  },
  {
    number: 4,
    title: 'Desenhar Multi-Cloud',
    subtitle: 'GCP →Qualquer Cloud',
    command: 'claude "add adapter pattern"',
    skills: ['Cloud Architecture', 'Adapter Design'],
    icon: Cloud
  },
  {
    number: 5,
    title: 'Subir Infra como Código',
    subtitle: 'Console →Terraform',
    command: 'terraform apply -auto-approve',
    skills: ['IaC', 'Environment Management'],
    icon: Server
  },
  {
    number: 6,
    title: 'GenAI em Produção',
    subtitle: 'Invoice →Dashboard',
    command: 'deploy --pipeline genai --env prod',
    skills: ['LLMOps', 'Langfuse'],
    icon: Brain
  },
  {
    number: 7,
    title: 'Automatizar Deploy',
    subtitle: 'Push →CI/CD',
    command: 'git push origin main # auto-deploy',
    skills: ['GitHub Actions', 'Quality Gates'],
    icon: GitBranch
  },
  {
    number: 8,
    title: 'Operar com Agentes',
    subtitle: 'Manual →Autônomo',
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
        `}
        style={{
          background: 'linear-gradient(135deg, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 0.7) 100%)',
          border: `1px solid ${step.isCore ? CORAL.primary + '60' : TERMINAL.border}`,
          ringColor: step.isCore ? CORAL.primary + '40' : 'transparent',
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
              style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
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
                  style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
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
    <section id="journey" className="relative py-20 sm:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 800px 400px at 50% 20%, ${CORAL.primary}08 0%, transparent 50%)`
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
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6"
            style={{ backgroundColor: `${CORAL.primary}15`, border: `1px solid ${CORAL.primary}30` }}
          >
            <GitBranch className="w-4 h-4" style={{ color: CORAL.primary }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: CORAL.primary }}>
              Sua Jornada em 4 Dias
            </span>
          </div>

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
