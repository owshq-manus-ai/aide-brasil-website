import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen dark-bg-pattern flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 text-sm font-roboto font-medium rounded-full border border-orange-500/30">
            Data Analytics, Engenharia de Dados e GenAI
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="section-title text-white mb-6"
        >
          AI Data Engineer{' '}
          <span className="metallic-silver" data-text="Brasil">
            Brasil
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="section-subtitle max-w-3xl mx-auto mb-12"
        >
          A primeira comunidade brasileira dedicada ao futuro dos dados e inteligência artificial
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <button className="btn-purple font-roboto text-lg px-8 py-4">
            Sobre a Comunidade
          </button>
        </motion.div>

        {/* Community Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white mb-8">
            A primeira comunidade brasileira de{' '}
            <span className="glow-green">Dados</span> e{' '}
            <span className="glow-green">GenAI</span>
          </h2>
          
          {/* Large AI Text */}
          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-8xl md:text-9xl font-oswald font-black metallic-silver floating-particle"
              data-text="AI"
            >
              AI
            </motion.div>
          </div>
        </motion.div>

        {/* Four Pillars Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { icon: Target, color: 'text-green-400', bg: 'bg-green-400/20' },
            { icon: Users, color: 'text-blue-400', bg: 'bg-blue-400/20' },
            { icon: Zap, color: 'text-orange-400', bg: 'bg-orange-400/20' },
            { icon: Shield, color: 'text-purple-400', bg: 'bg-purple-400/20' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className={`w-20 h-20 mx-auto rounded-full ${item.bg} flex items-center justify-center border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <item.icon className={`w-10 h-10 ${item.color}`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
