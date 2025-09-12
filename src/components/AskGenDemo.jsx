import { motion } from 'framer-motion';
import { Bot, User, Hash } from 'lucide-react';

const AskGenDemo = () => {
  const messages = [
    {
      type: 'user',
      author: 'DataEngineer_BR',
      time: 'Hoje às 14:32',
      content: 'Como posso otimizar uma pipeline de dados no Apache Spark para processar 10TB de dados diários?',
      avatar: '👨‍💻',
    },
    {
      type: 'bot',
      author: 'Ask Gen',
      time: 'Hoje às 14:32',
      content: 'Excelente pergunta! Para otimizar pipelines Spark com 10TB diários, recomendo:\n\n1. **Particionamento inteligente**: Use partições baseadas em data/hora\n2. **Cache estratégico**: Cache DataFrames reutilizados\n3. **Broadcast joins**: Para tabelas pequenas (<200MB)\n4. **Configuração de recursos**: Ajuste executor-memory e executor-cores\n\nQuer que eu detalhe algum desses pontos? 🚀',
      avatar: '🤖',
    },
    {
      type: 'user',
      author: 'MLEngineer_SP',
      time: 'Hoje às 14:35',
      content: 'Ask Gen, qual a diferença entre #DataLakehouse e #DataWarehouse para projetos de ML?',
      avatar: '👩‍🔬',
    },
    {
      type: 'bot',
      author: 'Ask Gen',
      time: 'Hoje às 14:35',
      content: 'Ótima pergunta sobre arquiteturas de dados! 📊\n\n**Data Warehouse:**\n• Estrutura rígida (schema-on-write)\n• Ideal para BI e relatórios\n• Dados estruturados\n\n**Data Lakehouse:**\n• Flexibilidade do Data Lake + governança do DW\n• Schema-on-read\n• Suporte nativo para ML (Delta Lake, Iceberg)\n• Dados estruturados, semi-estruturados e não-estruturados\n\nPara ML, recomendo Lakehouse pela flexibilidade! 🎯',
      avatar: '🤖',
    },
  ];

  return (
    <section id="askgen" className="py-20 dark-bg-pattern">
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
            <span className="glow-blue">Ask Gen</span> — AI Data Engineering Assistant
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Seu assistente de IA especializado em engenharia de dados, analytics e GenAI. 
            Tire dúvidas, obtenha insights e acelere seus projetos com inteligência artificial.
          </p>
        </motion.div>

        {/* Discord-style Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 rounded-lg border border-gray-700/50 overflow-hidden backdrop-blur-sm">
            {/* Chat Header */}
            <div className="bg-gray-900/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-3">
                <Hash className="w-5 h-5 text-gray-400" />
                <span className="font-roboto font-semibold text-white">ask-gen-demo</span>
                <span className="text-gray-400 text-sm">• Demonstração do Ask Gen</span>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`discord-message ${message.type === 'user' ? 'discord-user' : 'discord-bot'}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="discord-avatar bg-gray-700 flex items-center justify-center text-lg">
                      {message.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`font-roboto font-semibold ${
                          message.type === 'user' ? 'text-purple-400' : 'text-green-400'
                        }`}>
                          {message.author}
                        </span>
                        <span className="text-gray-500 text-xs font-roboto">
                          {message.time}
                        </span>
                      </div>
                      <div className="text-gray-200 font-roboto leading-relaxed whitespace-pre-line">
                        {message.content.split(/(#\w+)/).map((part, i) => 
                          part.startsWith('#') ? (
                            <span key={i} className="text-blue-400 hover:underline cursor-pointer">
                              {part}
                            </span>
                          ) : (
                            part
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input (Disabled for demo) */}
            <div className="bg-gray-900/60 px-6 py-4 border-t border-gray-700/50">
              <div className="bg-gray-700/50 rounded-lg px-4 py-3 text-gray-400 font-roboto">
                Faça sua pergunta para o Ask Gen... (Demo)
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-blue font-roboto text-lg px-8 py-4">
            Experimente o Ask Gen
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AskGenDemo;
