import { motion } from 'framer-motion';
import { 
  Wrench, 
  Calendar, 
  Users, 
  Zap, 
  Award, 
  Rocket 
} from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'Workshops Práticos',
      description: 'Sessões intensivas focadas em ferramentas específicas e casos de uso reais.',
      icon: Wrench,
      features: ['Hands-on experience', 'Projetos reais', 'Mentoria direta']
    },
    {
      title: 'Semanas Temáticas',
      description: 'Eventos especiais com foco em tecnologias emergentes e tendências do mercado.',
      icon: Calendar,
      features: ['Conteúdo exclusivo', 'Especialistas globais', 'Networking']
    },
    {
      title: 'Comunidade The Plumbers',
      description: 'Rede exclusiva de profissionais de dados para networking e colaboração.',
      icon: Users,
      features: ['Networking ativo', 'Suporte 24/7', 'Oportunidades de carreira']
    },
    {
      title: 'Bootcamps Intensivos',
      description: 'Programas acelerados para transformação rápida de carreira.',
      icon: Zap,
      features: ['Metodologia PRIME', 'Projetos portfolio', 'Certificação']
    },
    {
      title: 'Formações Certificadas',
      description: 'Cursos completos com certificação em Databricks, Spark e mais.',
      icon: Award,
      features: ['Certificação oficial', 'Instrutores globais', 'Suporte contínuo']
    },
    {
      title: 'Programa DataShip',
      description: 'Aceleração contínua para profissionais que buscam excelência.',
      icon: Rocket,
      features: ['Aceleração contínua', 'Mentoria 1:1', 'Projetos avançados']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black circuit-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-6">
            Nossos <span className="metallic-text">Produtos</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Escolha a jornada ideal para sua evolução profissional em Engenharia de Dados
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="futuristic-card h-full hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-center leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg text-white font-medium hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    Saiba Mais
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Não sabe qual produto é ideal para você?
          </p>
          <button className="neon-button">
            Falar com Especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
