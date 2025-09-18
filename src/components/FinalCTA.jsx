import { motion } from 'framer-motion';
import { Clock, Users, Gift } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black circuit-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
      
      {/* Animated Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-6">
            Escolha sua jornada e torne-se protagonista da nova era de{' '}
            <span className="metallic-text">dados e inteligência artificial</span>
          </h2>
        </motion.div>

        {/* Urgency and Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="futuristic-card text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-600/20 flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
              <Clock className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Vagas Limitadas</h3>
            <p className="text-gray-400 text-sm">Próximas turmas abrem em breve</p>
          </motion.div>

          {/* Community */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="futuristic-card text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">The Plumbers</h3>
            <p className="text-gray-400 text-sm">Membros da comunidade</p>
          </motion.div>

          {/* Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="futuristic-card text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors">
              <Gift className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Condições Exclusivas</h3>
            <p className="text-gray-400 text-sm">Ex-alunos e membros</p>
          </motion.div>
        </div>

        {/* Offer Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="futuristic-card mb-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            <strong className="text-white">Ex-alunos e membros da comunidade The Plumbers</strong> têm condições exclusivas para todas as formações e programas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="bg-blue-600/20 px-3 py-1 rounded-full">Desconto especial</span>
            <span className="bg-blue-600/20 px-3 py-1 rounded-full">Acesso antecipado</span>
            <span className="bg-blue-600/20 px-3 py-1 rounded-full">Conteúdo bônus</span>
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <button className="neon-button text-xl px-16 py-5 transform hover:scale-105 transition-all duration-300">
            Quero Escolher Minha Jornada
          </button>
          
          <p className="text-gray-400 text-sm">
            Transforme sua carreira em meses, não em anos
          </p>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Certificação reconhecida</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Suporte vitalício</span>
            </span>
            <span className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Garantia de satisfação</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default FinalCTA;
