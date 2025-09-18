import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    produtos: [
      { name: 'Curso Spark', href: '/produtos/curso-spark' },
      { name: 'Curso Airflow', href: '/produtos/curso-airflow' },
      { name: 'Bootcamp', href: '/produtos/bootcamp' },
      { name: 'Programa DataShip', href: '/produtos/dataship' },
    ],
    conteudos: [
      { name: 'Blog', href: '/conteudos/blog' },
      { name: 'Tutoriais', href: '/conteudos/tutoriais' },
      { name: 'Webinars', href: '/conteudos/webinars' },
      { name: 'Documentação', href: '/conteudos/docs' },
    ],
    comunidade: [
      { name: 'The Plumbers', href: '/comunidade/the-plumbers' },
      { name: 'Discord', href: '/comunidade/discord' },
      { name: 'Eventos', href: '/comunidade/eventos' },
      { name: 'Mentoria', href: '/comunidade/mentoria' },
    ],
    empresa: [
      { name: 'Sobre Nós', href: '/sobre' },
      { name: 'Instrutores', href: '/instrutores' },
      { name: 'Carreiras', href: '/carreiras' },
      { name: 'Contato', href: '/contato' },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800/50 circuit-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">ED</span>
                </div>
                <span className="text-white font-bold text-xl">
                  Engenharia de Dados <span className="metallic-text">Academy</span>
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                A plataforma pioneira em ensino de Engenharia de Dados no Brasil. 
                Transformamos profissionais em protagonistas globais do mercado de dados.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>contato@engenhariadadosacademy.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-bold text-lg mb-4 capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800/50"
        >
          <div className="flex space-x-6 mb-4 sm:mb-0">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="text-center sm:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Engenharia de Dados Academy. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 mt-2 text-xs text-gray-500">
              <a href="/privacidade" className="hover:text-gray-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="/termos" className="hover:text-gray-400 transition-colors">
                Termos de Uso
              </a>
              <a href="/cookies" className="hover:text-gray-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800/50"
        >
          <div className="text-center">
            <h3 className="text-white font-bold text-xl mb-4">
              Fique por dentro das novidades
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Receba conteúdos exclusivos, dicas práticas e seja o primeiro a saber sobre novos cursos e eventos.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              />
              <button className="neon-button px-8 py-3 whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
