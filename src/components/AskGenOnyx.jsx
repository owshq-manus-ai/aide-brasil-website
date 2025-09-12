import { motion } from 'framer-motion';
import { Sparkles, Brain, Zap, Target, TrendingUp, Database, Code, BarChart } from 'lucide-react';

const AskGenOnyx = () => {
  const features = [
    {
      icon: Brain,
      title: 'IA Proativa',
      description: 'Recomendações inteligentes baseadas no seu contexto de trabalho',
    },
    {
      icon: Zap,
      title: 'Respostas Instantâneas',
      description: 'Processamento ultra-rápido com modelos de linguagem avançados',
    },
    {
      icon: Target,
      title: 'Especialização Técnica',
      description: 'Focado em engenharia de dados, analytics e arquiteturas modernas',
    },
    {
      icon: TrendingUp,
      title: 'Insights Avançados',
      description: 'Análises profundas e sugestões de otimização para seus projetos',
    },
  ];

  const recommendations = [
    {
      title: 'Pipeline Optimization',
      description: 'Otimize sua pipeline Spark com particionamento inteligente',
      color: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
      icon: Database,
    },
    {
      title: 'Code Review',
      description: 'Revisão automática do seu código Python/SQL',
      color: 'bg-green-500/20 border-green-500/30 text-green-400',
      icon: Code,
    },
    {
      title: 'Performance Insights',
      description: 'Análise de performance em tempo real',
      color: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
      icon: BarChart,
    },
    {
      title: 'Architecture Suggestions',
      description: 'Recomendações de arquitetura para seu caso de uso',
      color: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
      icon: Target,
    },
  ];

  return (
    <section id="onyx" className="py-20 dark-bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Transition Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 p-1"
            >
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-white mb-6">
            <span className="metallic-silver" data-text="Ask Gen Onyx">
              Ask Gen Onyx
            </span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A evolução do Ask Gen com inteligência artificial avançada. 
            Recursos premium para profissionais que buscam excelência em dados e IA.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30 group-hover:border-orange-500/50 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-roboto">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proactive Recommendations Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-oswald font-bold text-white text-center mb-8">
            Recomendações Proativas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg border ${rec.color} backdrop-blur-sm hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <rec.icon className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-oswald font-semibold text-white mb-2">
                      {rec.title}
                    </h4>
                    <p className="text-gray-300 font-roboto text-sm">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-orange font-roboto text-lg px-8 py-4">
            Upgrade para Onyx
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AskGenOnyx;
