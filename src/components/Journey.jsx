import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Building, CheckCircle } from 'lucide-react';

const Journey = () => {
  const journeyCards = [
    {
      icon: GraduationCap,
      title: 'Iniciantes',
      subtitle: 'Começando na área de dados',
      color: 'border-green-500/30 bg-green-500/10',
      iconColor: 'text-green-400',
      benefits: [
        'Roadmap completo de estudos',
        'Mentoria com profissionais sênior',
        'Projetos práticos guiados',
        'Certificações reconhecidas',
        'Networking com a comunidade',
        'Suporte para primeiro emprego',
      ],
    },
    {
      icon: Briefcase,
      title: 'Profissionais',
      subtitle: 'Evoluindo na carreira',
      color: 'border-blue-500/30 bg-blue-500/10',
      iconColor: 'text-blue-400',
      benefits: [
        'Especialização em GenAI',
        'Arquiteturas modernas (Lakehouse)',
        'Liderança técnica e gestão',
        'Oportunidades de carreira',
        'Consultoria e freelances',
        'Palestras e eventos exclusivos',
      ],
    },
    {
      icon: Building,
      title: 'Empresas',
      subtitle: 'Transformação digital',
      color: 'border-purple-500/30 bg-purple-500/10',
      iconColor: 'text-purple-400',
      benefits: [
        'Consultoria especializada',
        'Treinamentos corporativos',
        'Recrutamento de talentos',
        'Implementação de soluções IA',
        'Workshops e hackathons',
        'Parcerias estratégicas',
      ],
    },
  ];

  return (
    <section id="beneficios" className="py-20 dark-bg-pattern">
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
            Para Cada Momento da Sua{' '}
            <span className="glow-purple">Jornada</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Independente do seu nível de experiência, temos recursos e oportunidades 
            para acelerar seu crescimento na área de dados e IA.
          </p>
        </motion.div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`feature-card ${card.color} group hover:scale-105 transition-all duration-300`}
            >
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${card.color} flex items-center justify-center border ${card.color.replace('bg-', 'border-').replace('/10', '/30')}`}>
                  <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                </div>
                <h3 className="text-2xl font-oswald font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 font-roboto">
                  {card.subtitle}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4">
                {card.benefits.map((benefit, benefitIndex) => (
                  <motion.div
                    key={benefitIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + benefitIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className={`w-5 h-5 ${card.iconColor} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-300 font-roboto text-sm">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Card CTA */}
              <div className="mt-8 pt-6 border-t border-gray-700/50">
                <button className={`w-full py-3 px-4 rounded-lg font-roboto font-semibold transition-all duration-300 ${
                  index === 0 ? 'btn-green' : 
                  index === 1 ? 'btn-blue' : 'btn-purple'
                }`}>
                  {index === 0 ? 'Começar Jornada' : 
                   index === 1 ? 'Acelerar Carreira' : 'Falar com Especialista'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-8 border border-purple-500/30">
            <h3 className="text-2xl font-oswald font-bold text-white mb-4">
              Não Importa Onde Você Está
            </h3>
            <p className="text-gray-300 font-roboto mb-6 max-w-2xl mx-auto">
              O importante é dar o próximo passo. Nossa comunidade está aqui para 
              apoiar seu crescimento em cada etapa da sua jornada profissional.
            </p>
            <button className="btn-purple font-roboto text-lg px-8 py-4">
              Encontrar Meu Caminho
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
