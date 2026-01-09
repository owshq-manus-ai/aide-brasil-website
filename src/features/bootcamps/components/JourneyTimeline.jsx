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

// Shared styles
const sharedStyles = `
  @keyframes subtle-metallic {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
`

// Static data - defined outside component
const STEPS = [
  {
    number: 1,
    title: 'Traduzir Negócio em Contexto',
    subtitle: 'Requisito Vago -> Spec Precisa',
    description: 'Transforme reuniões confusas em especificações que a IA entende. Você sai com um CLAUDE.md pronto para o projeto.',
    skills: ['Problem Framing', 'Context Engineering', 'Requirement -> Spec'],
    personas: ['AI Data Engineer', 'Tech Lead'],
    icon: Users
  },
  {
    number: 2,
    title: 'Ativar sua Frota de Agentes',
    subtitle: 'Solo Coder -> Time de IA',
    description: 'Configure MCPs, SubAgents e Hooks. No final, você tem agentes especializados prontos para executar tarefas por você.',
    skills: ['AI-Native Workflow', 'Agent Orchestration', 'Context Management'],
    personas: ['Senior Engineer', 'Staff Engineer'],
    icon: Terminal
  },
  {
    number: 3,
    title: 'Prototipar em Minutos',
    subtitle: 'Ideia -> Código Funcionando',
    description: 'Monte um sandbox local com Python + LLM. Valide hipóteses em minutos, não dias. Testes automatizados desde o início.',
    skills: ['Rapid Prototyping', 'Test-Driven GenAI', 'Local Dev Workflow'],
    personas: ['GenAI Engineer', 'Backend Engineer'],
    icon: FlaskConical
  },
  {
    number: 4,
    title: 'Desenhar sem Vendor Lock',
    subtitle: 'GCP Hoje -> Qualquer Cloud Amanhã',
    description: 'Arquitetura com Adapter Pattern: mude de provider sem reescrever código. Você sai com um blueprint replicável.',
    skills: ['Cloud Architecture', 'Adapter Design', 'Systems Thinking'],
    personas: ['Cloud Architect', 'Platform Engineer'],
    icon: Cloud
  },
  {
    number: 5,
    title: 'Subir Infra como Código',
    subtitle: 'Console Manual -> Terraform Automático',
    description: 'Provisione IAM, buckets, BigQuery e Cloud Run com Terraform. Destrua e recrie ambientes em um comando.',
    skills: ['IaC para GenAI', 'Environment Management', 'Cloud Security'],
    personas: ['Platform Engineer', 'DevOps'],
    icon: Server
  },
  {
    number: 6,
    title: 'Colocar GenAI em Produção',
    subtitle: 'Invoice -> Dado Estruturado -> Dashboard',
    description: 'Pipeline completo funcionando: upload de invoice -> extração com Gemini -> BigQuery -> Hex. Com observabilidade Langfuse.',
    skills: ['Production Pipelines', 'LLMOps', 'Data + GenAI Integration'],
    personas: ['AI Data Engineer', 'GenAI Engineer'],
    icon: Brain,
    isCore: true
  },
  {
    number: 7,
    title: 'Automatizar Deploy',
    subtitle: 'Push Manual -> CI/CD Completo',
    description: 'GitHub Actions rodando testes, validações e deploy automático. Versionamento de prompts incluído.',
    skills: ['CI/CD para GenAI', 'Quality Gates', 'Release Engineering'],
    personas: ['Software Engineer', 'DevOps'],
    icon: GitBranch
  },
  {
    number: 8,
    title: 'Operar com Agentes Autônomos',
    subtitle: 'Você de Plantão -> CrewAI de Plantão',
    description: 'CrewAI Agents fazendo triagem, RCA e abrindo PRs automaticamente. Você supervisiona, não executa.',
    skills: ['Operational Excellence', 'Autonomous DataOps', 'Incident Response'],
    personas: ['DataOps', 'SRE for Data & AI'],
    icon: Bot
  }
]

// Chevron rotation animation
const chevronAnimation = { rotate: 180 }

// StepCard component - memoized
const StepCard = memo(({ step, index, isExpanded, onToggle }) => {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
    >
      <div
        className={`
          relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm rounded-2xl p-6
          border transition-all duration-300 cursor-pointer
          ${step.isCore
            ? 'border-[#E07A5F]/40 shadow-lg shadow-[#E07A5F]/10'
            : 'border-white/10 hover:border-[#E07A5F]/30'
          }
        `}
        onClick={onToggle}
      >
        {/* Core Badge */}
        {step.isCore && (
          <div className="absolute -top-3 left-6">
            <div className="inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ background: 'linear-gradient(90deg, #E07A5F, #F0A090)' }}>
              <Sparkles className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-bold uppercase">Core</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Step Number */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-oswald font-bold text-xl"
            style={step.isCore
              ? { background: 'linear-gradient(135deg, #E07A5F, #F0A090)', color: 'white' }
              : { backgroundColor: 'rgba(224, 122, 95, 0.2)', color: '#E07A5F', border: '1px solid rgba(224, 122, 95, 0.3)' }
            }
          >
            {step.number}
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
            <p className="text-sm font-medium" style={{ color: '#E07A5F' }}>{step.subtitle}</p>
          </div>

          {/* Icon & Expand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <Icon className="w-5 h-5" style={{ color: '#E07A5F' }} />
            </div>
            <motion.div
              animate={isExpanded ? chevronAnimation : { rotate: 0 }}
              transition={{ duration: 0.3 }}
              className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
            >
              <ChevronDown className="w-4 h-4 text-white/60" />
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
                        style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.2)', color: '#E07A5F' }}
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

const JourneyTimeline = memo(() => {
  const [expandedStep, setExpandedStep] = useState(5) // Core step expanded by default

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
              radial-gradient(ellipse 800px 400px at 50% 20%, rgba(224, 122, 95, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 30% 80%, rgba(224, 122, 95, 0.04) 0%, transparent 50%)
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
            style={{ backgroundColor: 'rgba(224, 122, 95, 0.1)', border: '1px solid rgba(224, 122, 95, 0.3)' }}
          >
            <GitBranch className="w-4 h-4" style={{ color: '#E07A5F' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#E07A5F' }}>Sua Jornada em 4 Dias</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            8 Passos Para{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #E07A5F 0%, #F0A090 50%, #E07A5F 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Sair do Zero
            </span>
            {' '}e Entregar em Produção
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            <span className="text-white font-semibold">Não é teoria.</span> Cada passo termina com algo funcionando -- você vai do requisito ao deploy, construindo junto.
            <span className="block mt-2 font-medium" style={{ color: '#E07A5F' }}>Clique em cada passo para ver os detalhes.</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px hidden lg:block" style={{ background: 'linear-gradient(to bottom, rgba(224, 122, 95, 0.5), rgba(224, 122, 95, 0.2), transparent)' }} />

          {/* Steps */}
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

JourneyTimeline.displayName = 'JourneyTimeline'

export default JourneyTimeline
