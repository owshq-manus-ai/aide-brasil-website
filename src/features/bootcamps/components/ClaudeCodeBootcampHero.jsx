import React, { useState, memo } from 'react'
import { motion } from 'framer-motion'
import {
  Rocket,
  CheckCircle,
  Trophy,
  Clock,
  Users,
  ChevronRight,
  Sparkles,
  Brain,
  Code2,
  Database,
  Terminal,
  Cpu,
  Zap,
  Shield,
  Play,
  Calendar,
  Video,
  BookOpen,
  Layers,
  GitBranch,
  Activity,
  FileText,
  Server,
  Settings,
  Eye,
  Bot,
  Compass,
  Gauge,
  Target
} from 'lucide-react'
import TechStackDock from './TechStackDock'

// Learning Item Component - Claude Code coral style with custom icons
const LearningItem = memo(({ text, delay, icon: Icon = CheckCircle }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="flex items-start gap-2.5"
  >
    <div
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
      style={{
        backgroundColor: 'rgba(224, 122, 95, 0.2)',
        border: '1px solid rgba(224, 122, 95, 0.4)'
      }}
    >
      <Icon className="w-3 h-3" style={{ color: '#E07A5F' }} />
    </div>
    <span className="text-white/80 text-sm leading-relaxed">{text}</span>
  </motion.div>
))

// Value Proposition Component - Claude Code exact coral (#E07A5F)
const ValueProp = memo(({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center gap-4 group"
    whileHover={{ x: 5 }}
  >
    {/* Icon container with glow effect */}
    <div className="relative">
      <div
        className="absolute inset-0 rounded-xl blur-md opacity-50"
        style={{ backgroundColor: 'rgba(224, 122, 95, 0.5)' }}
      />
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          backgroundColor: '#E07A5F',
          boxShadow: '0 8px 24px rgba(224, 122, 95, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
        }}
      >
        <Icon className="w-6 h-6 text-white drop-shadow-sm" />
      </div>
    </div>
    <span className="text-white text-base font-medium">{text}</span>
  </motion.div>
))

// Neon Button Component
const NeonButton = memo(({ children, primary = false, onClick, className = "" }) => (
  <motion.button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-lg font-oswald font-bold uppercase tracking-wider
      transition-all duration-300 relative overflow-hidden whitespace-nowrap
      ${primary
        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white'
        : 'bg-white/5 backdrop-blur-sm border border-orange-500/30 text-white'
      }
      ${className}
    `}
    whileHover={{
      scale: 1.03,
      boxShadow: primary
        ? "0 0 30px rgba(251, 146, 60, 0.7), 0 0 60px rgba(245, 158, 11, 0.4)"
        : "0 0 20px rgba(251, 146, 60, 0.5)"
    }}
    whileTap={{ scale: 0.98 }}
    style={{
      boxShadow: primary
        ? `0 0 20px rgba(251, 146, 60, 0.5), 0 0 40px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)`
        : undefined
    }}
  >
    {primary && (
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    )}
    <span className="relative z-10 flex items-center gap-2">
      {children}
      {primary && <ChevronRight className="w-4 h-4" />}
    </span>
  </motion.button>
))

// Main Hero Component
const ClaudeCodeBootcampHero = () => {
  const [spotsLeft] = useState(185)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Learning points with icons - Vibe Coding, Agents, LLMs theme
  const learningPoints = [
    { text: 'Setup profissional: CLAUDE.md, MCPs, SubAgents e Hooks', icon: Terminal },
    { text: 'Context Engineering: estruturar contexto para respostas precisas', icon: Brain },
    { text: 'Arquitetura Adapter: design multi-cloud (GCP, AWS, Azure)', icon: Server },
    { text: 'Pipeline GenAI completo: extração com LLM → BigQuery → Hex', icon: Cpu },
    { text: 'LLMOps com Langfuse: custo, latência e qualidade', icon: Gauge },
    { text: 'CI/CD para GenAI: GitHub Actions + quality gates', icon: Rocket }
  ]

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Image - Smooth blend like webinar page */}
      <div className="absolute inset-0">
        {/* Background image with radial mask for seamless blend */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/backgrounds/dominando-chatgpt-agent-builder.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3,
            filter: 'brightness(0.8) contrast(1.2)',
            maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
            WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.8) 60%, rgba(0,0,0,0.6) 100%)',
          }}
        />
        {/* Orange accent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 700px 500px at 70% 40%, rgba(251, 146, 60, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 500px 400px at 80% 70%, rgba(245, 158, 11, 0.12) 0%, transparent 40%)`,
          }}
        />
        {/* Bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 60%, rgba(10, 10, 10, 0.9) 100%)',
          }}
        />
      </div>

      {/* Content Container - Two Column Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Status Badges - Online + Inscritos + Agentes */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 flex-wrap"
            >
              {/* Tag 1: Online */}
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{
                    boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 4px rgba(34, 197, 94, 0)', '0 0 0 0 rgba(34, 197, 94, 0)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 text-sm font-medium">Online</span>
              </div>
              {/* Tag 2: Inscritos */}
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-orange-300 text-sm font-medium">{spotsLeft} Inscritos</span>
              </div>
              {/* Tag 3: Agentes */}
              <div className="flex items-center gap-2">
                <Bot className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">Agentes</span>
              </div>
            </motion.div>

            {/* Tech Stack Dock - Interactive technology showcase */}
            <TechStackDock />

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-oswald font-bold mb-3 leading-tight">
                <span className="text-white">Do Zero à Produção </span>
                <span
                  className="inline-block bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(90deg,
                      #f97316 0%,
                      #fbbf24 25%,
                      #fef3c7 50%,
                      #fbbf24 75%,
                      #f97316 100%)`,
                    backgroundSize: '200% 100%',
                    animation: 'subtle-metallic 6s ease-in-out infinite',
                  }}
                >
                  Claude Code
                </span>
              </h1>
            </motion.div>

            {/* Subtitle - Transformation promise with contrast */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl font-medium text-orange-400 leading-relaxed"
            >
              Use Claude Code{' '}
              <span className="text-white font-bold">como seu time de engenharia</span> — com agentes que escrevem, revisam e deployam código por você
            </motion.h2>

            {/* Description with AI-Native Development Workflow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/70 text-base leading-relaxed max-w-xl"
            >
              Aprenda o{' '}
              <span
                className="font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #f97316, #fbbf24, #f97316)',
                  backgroundSize: '200% 100%',
                  animation: 'subtle-metallic 3s ease-in-out infinite',
                }}
              >
                AI-Native Development Workflow
              </span>
              {' '}— a metodologia para usar IA com contexto, padrões e controle total. Zero vibe coding.
            </motion.p>

            {/* 3 Value Props - Claude Code coral palette */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="space-y-3 pt-2"
            >
              <ValueProp
                icon={Bot}
                text="Orquestre uma frota de agentes que escrevem código por você"
                delay={0.5}
              />
              <ValueProp
                icon={Terminal}
                text="Processo guiado: do requisito ao deploy, sem vibe coding"
                delay={0.6}
              />
              <ValueProp
                icon={Rocket}
                text="Sistema real em produção com observabilidade completa"
                delay={0.7}
              />
            </motion.div>

            {/* Date/Time Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-6 pt-2 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>28-31 Jan 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>20:00 BRT</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                <span>Online ao vivo</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex flex-row gap-4 pt-2"
            >
              <NeonButton primary onClick={() => scrollToSection('pricing')}>
                <Sparkles className="w-4 h-4" />
                GARANTIR MINHA VAGA
              </NeonButton>
              <NeonButton onClick={() => scrollToSection('journey')}>
                <Play className="w-4 h-4" />
                VER PROGRAMA
              </NeonButton>
            </motion.div>
          </motion.div>

          {/* Right Column - O que voce vai aprender */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:mt-2"
          >
            {/* Glow effect behind the card */}
            <div
              className="absolute -inset-0.5 rounded-xl blur-md opacity-20"
              style={{
                background: 'linear-gradient(135deg, rgba(251, 146, 60, 0.4), rgba(245, 158, 11, 0.2))',
              }}
            />

            <div className="relative bg-gradient-to-br from-[#1a1a1a]/95 to-[#151515]/95 backdrop-blur-md rounded-xl border border-orange-500/20 px-3 py-4 shadow-xl">
              {/* Header with Claude Code logo */}
              <div className="flex items-center gap-2.5 mb-3">
                <img
                  src="/images/logos/claude-code-icon.png"
                  alt="Claude Code"
                  className="w-8 h-8 rounded-lg object-contain"
                />
                <h3 className="text-lg font-oswald font-bold text-white">O que você vai aprender:</h3>
              </div>

              {/* Learning Points */}
              <div className="space-y-2">
                {learningPoints.map((point, index) => (
                  <LearningItem
                    key={index}
                    text={point.text}
                    icon={point.icon}
                    delay={0.5 + index * 0.06}
                  />
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes subtle-metallic {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  )
}

export default ClaudeCodeBootcampHero
