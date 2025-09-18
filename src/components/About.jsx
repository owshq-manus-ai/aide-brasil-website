import { motion } from 'framer-motion';
import { Globe, BookOpen, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '+30.000', label: 'alunos', icon: TrendingUp },
    { number: '+500', label: 'horas de conteúdo', icon: BookOpen },
    { number: '+12', label: 'formações e programas ativos', icon: Target },
    { number: '+2', label: 'anos de acesso contínuo', icon: Globe },
  ];

  const differentials = [
    'Experiência internacional em empresas de classe mundial',
    'Conteúdo bleeding edge',
    'Metodologia PRIME exclusiva',
    'Comunidade engajada e suporte próximo'
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
            Sobre a <span className="metallic-text">Engenharia de Dados</span> Academy
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              A Engenharia de Dados Academy nasceu pioneira em <strong className="text-white">ensinar Engenharia de Dados na prática em português</strong> e agora também é a primeira a formar profissionais na disciplina de <strong className="text-white">AI Data Engineer no Brasil</strong>.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa abordagem combina <strong className="text-white">décadas de experiência internacional</strong> dos instrutores com <strong className="text-white">conteúdo bleeding edge</strong>, cobrindo desde fundamentos até Lakehouse, MLOps, GenAI e LLMOps.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Mais do que ferramentas, entregamos uma jornada estratégica que transforma qualquer profissional em protagonista global no mercado de dados.
            </p>
          </motion.div>

          {/* Differentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="futuristic-card"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Diferenciais</h3>
            <ul className="space-y-4">
              {differentials.map((differential, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{differential}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="futuristic-card text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 gradient-text">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
