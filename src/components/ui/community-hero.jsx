"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Sparkles, Code, Brain, Rocket, MessageCircle, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

// Animated connection lines between nodes
const ConnectionLine = ({ start, end, delay = 0 }) => (
  <motion.line
    x1={start.x}
    y1={start.y}
    x2={end.x}
    y2={end.y}
    stroke="url(#gradient)"
    strokeWidth="1"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration: 1.5, delay, ease: "easeInOut" }}
  />
)

// Floating member node
const MemberNode = ({ x, y, delay = 0, icon: Icon, name, role }) => (
  <motion.g
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.circle
      cx={x}
      cy={y}
      r="30"
      fill="#030303"
      stroke="url(#gradient)"
      strokeWidth="2"
      animate={{
        r: [30, 32, 30],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay * 0.2,
      }}
    />
    <foreignObject x={x - 20} y={y - 20} width="40" height="40">
      <div className="flex items-center justify-center h-full">
        {Icon && <Icon className="w-5 h-5 text-green-400" />}
      </div>
    </foreignObject>
    {name && (
      <text
        x={x}
        y={y + 45}
        textAnchor="middle"
        className="fill-white/60 text-xs"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        {name}
      </text>
    )}
    {role && (
      <text
        x={x}
        y={y + 58}
        textAnchor="middle"
        className="fill-white/40 text-[10px]"
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        {role}
      </text>
    )}
  </motion.g>
)

const CommunityHero = ({ className }) => {
  const [activeMembers, setActiveMembers] = React.useState(1247)
  const [tagline, setTagline] = React.useState(0)
  
  const taglines = [
    "Onde dados encontram inteligência",
    "Construindo o futuro com IA",
    "Conhecimento compartilhado, crescimento exponencial",
    "Unidos pela inovação em dados"
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveMembers(prev => prev + Math.floor(Math.random() * 3))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTagline(prev => (prev + 1) % taglines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Node positions for the network
  const nodes = [
    { x: 150, y: 100, icon: Brain, name: "Ana Silva", role: "ML Engineer" },
    { x: 300, y: 150, icon: Code, name: "João Santos", role: "Data Engineer" },
    { x: 450, y: 100, icon: Rocket, name: "Maria Costa", role: "AI Researcher" },
    { x: 200, y: 250, icon: Users, name: "Pedro Lima", role: "Community Lead" },
    { x: 400, y: 250, icon: MessageCircle, name: "Carla Reis", role: "DevRel" },
    { x: 100, y: 200, icon: Globe, name: "Lucas Souza", role: "Solutions Architect" },
    { x: 500, y: 200, icon: Sparkles, name: "Julia Melo", role: "GenAI Expert" },
  ]

  const connections = [
    { start: nodes[0], end: nodes[1] },
    { start: nodes[1], end: nodes[2] },
    { start: nodes[3], end: nodes[4] },
    { start: nodes[0], end: nodes[3] },
    { start: nodes[2], end: nodes[4] },
    { start: nodes[5], end: nodes[0] },
    { start: nodes[6], end: nodes[2] },
    { start: nodes[1], end: nodes[3] },
    { start: nodes[1], end: nodes[4] },
  ]

  return (
    <section className={cn("relative min-h-screen w-full bg-[#030303] overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      {/* Network visualization */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <svg
          width="600"
          height="350"
          className="absolute"
          style={{ filter: 'blur(0.5px)' }}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Connection lines */}
          {connections.map((conn, i) => (
            <ConnectionLine
              key={i}
              start={conn.start}
              end={conn.end}
              delay={i * 0.1}
            />
          ))}
          
          {/* Member nodes */}
          {nodes.map((node, i) => (
            <MemberNode
              key={i}
              x={node.x}
              y={node.y}
              delay={i * 0.15}
              icon={node.icon}
              name={node.name}
              role={node.role}
            />
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm text-green-400 font-medium">
              {activeMembers.toLocaleString('pt-BR')} membros ativos
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Transforme dados em
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400">
              inteligência coletiva
            </span>
          </motion.h1>

          {/* Animated tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={tagline}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-white/60 mb-8"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              {taglines[tagline]}
            </motion.p>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Junte-se à maior comunidade brasileira de profissionais que estão redefinindo 
            o futuro com Engenharia de Dados e IA Generativa. Aprenda, compartilhe e cresça 
            com quem está na vanguarda da inovação.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => {
                const element = document.querySelector('#sobre');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <span className="flex items-center gap-2">
                Fazer parte da comunidade
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#beneficios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Descobrir benefícios
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>1.2K+ membros</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>500+ discussões/mês</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>100+ projetos</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              <span>50+ eventos</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/40"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

export { CommunityHero }