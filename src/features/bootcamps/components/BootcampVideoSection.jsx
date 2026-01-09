import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Brain, Sparkles, ChevronRight, BookOpen, X, Zap, Terminal, Bot, Rocket } from 'lucide-react'

const BootcampVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background with Orange Theme */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg,
              #0a0a0a 0%,
              #1a0f0a 50%,
              #0a0a0a 100%)`,
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 800px 400px at 20% 20%, rgba(251, 146, 60, 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 600px 300px at 80% 80%, rgba(245, 158, 11, 0.06) 0%, transparent 40%)`,
            filter: 'blur(60px)',
          }}
        />

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Aggressive Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6"
          >
            <Terminal className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium uppercase tracking-wider">Entenda o Bootcamp</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white mb-6">
            <span className="block text-2xl md:text-3xl text-white/70 mb-2">Chega de Vibe Coding.</span>
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
                filter: 'drop-shadow(0 0 30px rgba(251, 146, 60, 0.5))',
              }}
            >
              Engenharia Real
            </span>
            {' '}com{' '}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg,
                  #fb923c 0%,
                  #fcd34d 25%,
                  #fef9c3 50%,
                  #fcd34d 75%,
                  #fb923c 100%)`,
                backgroundSize: '200% 100%',
                animation: 'subtle-metallic 6s ease-in-out infinite 1s',
                filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.5))',
              }}
            >
              Claude Code
            </span>
          </h2>

          {/* Aggressive Copy from Briefing - 2 lines */}
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            <span className="text-orange-400 font-bold">Não é curso de prompt. Não é demo.</span>{' '}
            É <span className="text-white font-bold">engenharia aplicada com IA</span> — construa e opere uma solução GenAI <span className="text-green-400 font-bold">fim a fim em produção</span>.
          </p>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2">
              <Bot className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm">AI-Native Workflow</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2">
              <Rocket className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm">Do Requisito à Produção</span>
            </div>
            <div className="flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-white/80 text-sm">LLMOps + DataOps</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-orange-500/20"
        >
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 cursor-pointer group"
                onClick={() => setIsPlaying(true)}
              >
                {/* Video Cover Background with Hero Image */}
                <div className="absolute inset-0">
                  {/* Background Image */}
                  <img
                    src="/images/backgrounds/dominando-chatgpt-agent-builder.png"
                    alt="AI Data Engineer Bootcamp"
                    className="w-full h-full object-cover"
                  />

                  {/* Orange Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg,
                        rgba(251, 146, 60, 0.3) 0%,
                        rgba(10, 10, 10, 0.4) 40%,
                        rgba(10, 10, 10, 0.7) 70%,
                        rgba(10, 10, 10, 0.9) 100%)`,
                    }}
                  />

                  {/* Dark vignette for better contrast */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 10, 0.5) 100%)',
                    }}
                  />
                </div>

                {/* Floating Particles Effect */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className="absolute w-1 h-1 bg-orange-400/60 rounded-full"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                        filter: 'blur(1px)',
                        boxShadow: '0 0 6px rgba(251, 146, 60, 0.6)',
                      }}
                      animate={{
                        y: [-10, 10, -10],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>

                {/* Play Button with Rotating Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center"
                  >
                    {/* Rotating ASSISTA AGORA text */}
                    <motion.div
                      className="absolute w-44 h-44"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 180 180">
                        <defs>
                          <path
                            id="circle-video"
                            d="M 90, 90
                               m -70, 0
                               a 70,70 0 1,1 140,0
                               a 70,70 0 1,1 -140,0"
                          />
                        </defs>
                        <text fill="white" fontSize="13" fontWeight="bold" letterSpacing="3" className="uppercase">
                          <textPath href="#circle-video" startOffset="0%">
                            ASSISTA AGORA • ASSISTA AGORA •
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>

                    {/* Play button in center */}
                    <div className="relative w-24 h-24 bg-gradient-to-r from-orange-500 to-amber-500 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300 shadow-2xl"
                      style={{
                        boxShadow: '0 0 40px rgba(251, 146, 60, 0.5), 0 0 80px rgba(245, 158, 11, 0.3)'
                      }}
                    >
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-8 left-0 right-0"
                >
                  <div className="text-center mb-4">
                    <p className="text-white text-xl font-oswald mb-2">
                      Entenda a proposta do Bootcamp
                    </p>
                    <div className="flex items-center justify-center gap-4 text-white/60 text-sm">
                      <span className="flex items-center gap-1">
                        <Play className="w-4 h-4" />
                        Explicação Detalhada
                      </span>
                      <span>•</span>
                      <span>Gratuito</span>
                      <span>•</span>
                      <span>HD Quality</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* YouTube Player */}
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                title="AI Data Engineer Bootcamp - Zero à Produção"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.button
            onClick={() => scrollToSection('pricing')}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(251, 146, 60, 0.8), 0 0 80px rgba(245, 158, 11, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 rounded-lg font-oswald font-bold uppercase tracking-wider
                     bg-gradient-to-r from-orange-500 to-amber-500 text-white transition-all duration-300 overflow-hidden"
            style={{
              boxShadow: `0 0 30px rgba(251, 146, 60, 0.5), 0 0 60px rgba(245, 158, 11, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)`
            }}
          >
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

            <span className="relative z-10 flex items-center gap-3 text-lg">
              <Sparkles className="w-5 h-5" />
              GARANTIR MINHA VAGA
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes subtle-metallic {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  )
}

export default BootcampVideoSection
