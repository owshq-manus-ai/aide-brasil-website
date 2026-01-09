import React, { useState } from 'react'
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

const steps = [
  {
    number: 1,
    title: 'Entendimento do Caso de Uso',
    subtitle: 'Stakeholders → Requisitos',
    description: 'Reunião com stakeholders, análise do processo de invoices, meeting summary e transformação de requisitos em contexto para IA.',
    skills: ['Problem Framing', 'Requirement → Spec', 'Context Engineering'],
    personas: ['AI Data Engineer', 'Tech Lead'],
    icon: Users
  },
  {
    number: 2,
    title: 'Configurando Claude Code',
    subtitle: 'AI-Assisted Engineering',
    description: 'Setup completo do Claude Code: repo, configs, padrões, MCP, Context, KB, SubAgents, Commands e Skills.',
    skills: ['AI-Native Workflow', 'Agent Orchestration', 'Context Management'],
    personas: ['Senior Engineer', 'Staff Engineer'],
    icon: Terminal
  },
  {
    number: 3,
    title: 'Sandbox & Rapid Prototyping',
    subtitle: 'Dev/Test Environment',
    description: 'Ambiente local para prototipação: Python + chamadas LLM via OpenRouter, unit tests e validação de outputs.',
    skills: ['Rapid Prototyping', 'Test-Driven GenAI', 'Local Dev Workflow'],
    personas: ['GenAI Engineer', 'Backend Engineer'],
    icon: FlaskConical
  },
  {
    number: 4,
    title: 'Arquitetura Multi-Cloud',
    subtitle: 'Adapter Pattern',
    description: 'Desenho da arquitetura cloud-agnostic, service mapping GCP/AWS/Azure e discussão de trade-offs e lock-in.',
    skills: ['Cloud Architecture', 'Adapter Design', 'Systems Thinking'],
    personas: ['Cloud Architect', 'Platform Engineer'],
    icon: Cloud
  },
  {
    number: 5,
    title: 'Infraestrutura no GCP',
    subtitle: 'CLI → Terraform',
    description: 'Criação de recursos com Google Cloud CLI (Dev) e Terraform + Terragrunt (Prod): IAM, buckets, BigQuery, Cloud Run.',
    skills: ['IaC aplicado a GenAI', 'Environment Management', 'Cloud Security'],
    personas: ['Platform Engineer', 'DevOps'],
    icon: Server
  },
  {
    number: 6,
    title: 'GenAI em Produção',
    subtitle: 'Core do Bootcamp',
    description: 'Pipeline completo: GCS landing → Cloud Run processing → Gemini extraction → Langfuse observability → BigQuery → Hex dashboards.',
    skills: ['Production Pipelines', 'LLMOps', 'Data + GenAI Integration'],
    personas: ['AI Data Engineer', 'GenAI Engineer'],
    icon: Brain,
    isCore: true
  },
  {
    number: 7,
    title: 'CI/CD na Prática',
    subtitle: 'GitHub Actions',
    description: 'CI com testes, validações e schema checks. CD para Cloud Run e Infra. Versionamento de código e prompts.',
    skills: ['CI/CD para GenAI', 'Quality Gates', 'Release Engineering'],
    personas: ['Software Engineer', 'DevOps'],
    icon: GitBranch
  },
  {
    number: 8,
    title: 'DataOps Autônomo',
    subtitle: 'CrewAI Agents',
    description: 'Observabilidade via logs e métricas. CrewAI Agents para triagem, RCA, abertura de issues/PR e atualização de runbook.',
    skills: ['Operational Excellence', 'Autonomous DataOps', 'Incident Response'],
    personas: ['DataOps', 'SRE for Data & AI'],
    icon: Bot
  }
]

const StepCard = ({ step, index, isExpanded, onToggle }) => {
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
            ? 'border-orange-500/40 shadow-lg shadow-orange-500/10'
            : 'border-white/10 hover:border-orange-500/30'
          }
        `}
        onClick={onToggle}
      >
        {/* Core Badge */}
        {step.isCore && (
          <div className="absolute -top-3 left-6">
            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-3 py-1">
              <Sparkles className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-bold uppercase">Core</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Step Number */}
          <div
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-oswald font-bold text-xl
              ${step.isCore
                ? 'bg-gradient-to-br from-orange-500 to-amber-500 text-white'
                : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
              }
            `}
          >
            {step.number}
          </div>

          {/* Title & Subtitle */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
            <p className="text-orange-400 text-sm font-medium">{step.subtitle}</p>
          </div>

          {/* Icon & Expand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
              <Icon className="w-5 h-5 text-orange-400" />
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
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
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Skills que você vai adquirir</p>
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1 text-orange-400 text-xs"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Personas */}
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Personas</p>
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
}

const JourneyTimeline = () => {
  const [expandedStep, setExpandedStep] = useState(5) // Core step expanded by default

  return (
    <section id="journey" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 50% 20%, rgba(251, 146, 60, 0.06) 0%, transparent 50%),
              radial-gradient(ellipse 600px 300px at 30% 80%, rgba(245, 158, 11, 0.04) 0%, transparent 50%)
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
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
          >
            <GitBranch className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">O Caminho</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-6">
            Do Zero à{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, #f97316 0%, #fbbf24 50%, #f97316 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite',
              }}
            >
              Produção
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            8 passos práticos que te levam de requisitos de negócio a um sistema GenAI operando em produção.
            <span className="block mt-2 text-orange-400 font-medium">É exatamente assim que times maduros trabalham.</span>
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent hidden lg:block" />

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
                      onToggle={() => setExpandedStep(expandedStep === index ? null : index)}
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
                      onToggle={() => setExpandedStep(expandedStep === index ? null : index)}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes subtle-metallic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}

export default JourneyTimeline
