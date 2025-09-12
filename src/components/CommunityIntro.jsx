import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

const CommunityIntro = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: 'Networking Profissional',
      description: 'Conecte-se com profissionais de dados e IA de todo o Brasil',
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: 'Participe de discussões, eventos e projetos colaborativos',
    },
    {
      icon: TrendingUp,
      title: 'Crescimento Acelerado',
      description: 'Acelere sua carreira com mentoria e oportunidades exclusivas',
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Acesso a cursos e certificações reconhecidas no mercado',
    },
  ];

  return (
    <section id="sobre" className="py-20 dark-bg-pattern">
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
            Transforme sua Carreira em{' '}
            <span className="glow-green">Dados</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Junte-se à maior comunidade brasileira de profissionais de dados e inteligência artificial. 
            Aqui você encontra conhecimento, networking e oportunidades para acelerar sua carreira.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
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
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 group-hover:border-green-500/50 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-oswald font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 font-roboto">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-green font-roboto text-lg px-8 py-4">
            Transforme sua carreira
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityIntro;
