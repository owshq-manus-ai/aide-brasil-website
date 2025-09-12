import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Briefcase, Globe, Zap } from 'lucide-react';

const MarketNumbers = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '2.5M',
      title: 'Profissionais de Dados',
      subtitle: 'Demanda global até 2025',
      source: 'McKinsey Global Institute',
      color: 'border-blue-500/30 bg-blue-500/10',
      iconColor: 'text-blue-400',
    },
    {
      icon: DollarSign,
      number: 'R$ 180k',
      title: 'Salário Médio Senior',
      subtitle: 'Data Engineer no Brasil',
      source: 'Glassdoor 2024',
      color: 'border-green-500/30 bg-green-500/10',
      iconColor: 'text-green-400',
    },
    {
      icon: Briefcase,
      number: '85%',
      title: 'Crescimento de Vagas',
      subtitle: 'IA e ML nos últimos 2 anos',
      source: 'LinkedIn Jobs Report',
      color: 'border-purple-500/30 bg-purple-500/10',
      iconColor: 'text-purple-400',
    },
    {
      icon: Globe,
      number: '175%',
      title: 'Crescimento GenAI',
      subtitle: 'Adoção empresarial 2023-2024',
      source: 'Gartner Research',
      color: 'border-orange-500/30 bg-orange-500/10',
      iconColor: 'text-orange-400',
    },
    {
      icon: Users,
      number: '50k+',
      title: 'Profissionais Ativos',
      subtitle: 'Comunidade brasileira de dados',
      source: 'AI Data Engineering Brasil',
      color: 'border-pink-500/30 bg-pink-500/10',
      iconColor: 'text-pink-400',
    },
    {
      icon: Zap,
      number: '3x',
      title: 'Velocidade de Carreira',
      subtitle: 'Com especialização em IA',
      source: 'Harvard Business Review',
      color: 'border-teal-500/30 bg-teal-500/10',
      iconColor: 'text-teal-400',
    },
  ];

  return (
    <section id="numeros" className="py-20 dark-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-6">
            <span className="fire-text">AI Data Engineering</span> em Números
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            O mercado de dados e inteligência artificial está em expansão acelerada. 
            Veja os números que comprovam o potencial desta área.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`feature-card ${stat.color} group hover:scale-105 transition-all duration-300`}
            >
              <div className="text-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 mx-auto rounded-full ${stat.color} flex items-center justify-center border ${stat.color.replace('bg-', 'border-').replace('/10', '/30')}`}>
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} />
                  </div>
                </div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <div className={`text-4xl md:text-5xl font-oswald font-black ${stat.iconColor} mb-2`}>
                    {stat.number}
                  </div>
                </motion.div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-oswald font-bold text-white mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-gray-400 font-roboto">
                    {stat.subtitle}
                  </p>
                </div>

                {/* Source */}
                <div className="text-xs text-gray-500 font-roboto">
                  Fonte: {stat.source}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg p-8 border border-orange-500/30">
            <h3 className="text-2xl font-oswald font-bold text-white mb-4">
              Faça Parte desta Revolução
            </h3>
            <p className="text-gray-300 font-roboto mb-6 max-w-2xl mx-auto">
              O futuro dos dados está acontecendo agora. Junte-se à comunidade que está 
              moldando o mercado brasileiro de IA e Data Engineering.
            </p>
            <button className="btn-orange font-roboto text-lg px-8 py-4">
              Começar Agora
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketNumbers;
