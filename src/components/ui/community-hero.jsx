"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, Sparkles, Code, Brain, Rocket, MessageCircle, Globe } from "lucide-react"
import { cn } from "../../lib/utils"

// Removed network visualization components - replaced with modern abstract effects

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
  }, [taglines.length])


  return (
    <section className={cn("relative min-h-[120vh] w-full bg-[#030303] overflow-hidden", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5" data-theme-hero-gradient="true" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" data-theme-glow="primary" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" data-theme-glow="secondary" />
      </div>

      {/* Modern Abstract Background Effects - Cleaner and more performant */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple gradient background - no image */}

        {/* Animated Gradient Mesh Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 20%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />


        {/* Subtle Particle Effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-green-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -80],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Premium Glow Effects */}
        <motion.div
          className="absolute top-1/3 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            x: [0, -50, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>


      {/* Main content */}
      <div className="relative z-10 min-h-[120vh] flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
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
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-200 to-green-400"
              data-theme-text-gradient="true"
            >
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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <button
              onClick={() => {
                const element = document.querySelector('#sobre');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
              data-theme-button="true"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              <span className="flex items-center justify-center gap-2">
                Fazer parte da comunidade
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
            
            <button
              onClick={() => {
                const element = document.querySelector('#beneficios');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center"
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

      {/* Scroll indicator - static on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
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

export default CommunityHero;