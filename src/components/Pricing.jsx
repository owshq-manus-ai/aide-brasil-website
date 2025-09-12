import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Nível Gratuito',
      price: 'Gratuito',
      description: 'Perfeito para começar sua jornada',
      features: [
        'Acesso à comunidade no Discord',
        'Conteúdos básicos de Data Engineering',
        'Networking com profissionais',
        'Eventos mensais gratuitos',
        'Ask Gen com limite de uso',
        'Roadmap de estudos básico',
      ],
      buttonText: 'Começar Gratuitamente',
      buttonStyle: 'btn-blue',
      popular: false,
    },
    {
      name: 'Nível Premium',
      price: 'R$ 97',
      period: '/mês',
      description: 'Para profissionais que querem acelerar',
      features: [
        'Tudo do nível gratuito',
        'Ask Gen Onyx ilimitado',
        'Mentoria 1:1 mensal',
        'Cursos avançados exclusivos',
        'Certificações reconhecidas',
        'Acesso a vagas exclusivas',
        'Workshops técnicos semanais',
        'Consultoria de carreira',
        'Projetos práticos guiados',
        'Suporte prioritário',
      ],
      buttonText: 'Upgrade para Premium',
      buttonStyle: 'btn-orange',
      popular: true,
      badge: 'Ask Gen Onyx',
    },
  ];

  return (
    <section id="comunidade" className="py-20 dark-bg-pattern">
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
            <span className="fire-text">Transforme sua Carreira</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Escolha o plano ideal para acelerar seu crescimento na área de dados e IA. 
            Comece gratuitamente e evolua quando estiver pronto.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative feature-card ${
                tier.popular 
                  ? 'border-orange-500/50 bg-orange-500/5 scale-105' 
                  : 'border-blue-500/30 bg-blue-500/5'
              } hover:scale-110 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-roboto font-semibold flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{tier.badge}</span>
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-oswald font-bold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-400 font-roboto mb-6">
                  {tier.description}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <span className={`text-4xl font-oswald font-black ${
                    tier.popular ? 'text-orange-400' : 'text-blue-400'
                  }`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-gray-400 font-roboto">
                      {tier.period}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      tier.popular ? 'text-orange-400' : 'text-blue-400'
                    }`} />
                    <span className="text-gray-300 font-roboto text-sm">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-lg font-roboto font-semibold text-lg transition-all duration-300 ${tier.buttonStyle}`}>
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg p-8 border border-green-500/30">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
              <Star className="w-6 h-6 text-yellow-400 fill-current" />
            </div>
            <h3 className="text-2xl font-oswald font-bold text-white mb-4">
              Garantia de 30 Dias
            </h3>
            <p className="text-gray-300 font-roboto mb-6 max-w-2xl mx-auto">
              Experimente o nível Premium sem riscos. Se não ficar satisfeito, 
              devolvemos 100% do seu investimento nos primeiros 30 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-green font-roboto px-8 py-3">
                Começar Gratuitamente
              </button>
              <span className="text-gray-400 font-roboto">ou</span>
              <button className="btn-orange font-roboto px-8 py-3">
                Ir Direto para Premium
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
