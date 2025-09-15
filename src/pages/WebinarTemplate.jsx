import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Users, CheckCircle, Linkedin, Twitter, Star, ArrowLeft, Zap, Target, BookOpen } from 'lucide-react'
import Header from '../components/shared/Header'

// This would come from a database/API in production
const webinarData = {
  'rag-langchain-producao': {
    title: 'RAG com LangChain em Produção',
    subtitle: 'Implementação completa de Retrieval Augmented Generation',
    date: '28 Jan 2025',
    time: '19:00 BRT',
    duration: '2 horas',
    attendees: 450,
    description: 'Domine as técnicas avançadas de RAG com LangChain e aprenda a implementar sistemas de produção escaláveis. Este webinário exclusivo vai além do básico e mostra como resolver problemas reais de empresas.',
    gradient: 'from-purple-500 to-violet-500',
    
    whatYouLearn: [
      'Arquitetura completa de sistemas RAG em produção',
      'Otimização de embeddings e vector databases',
      'Estratégias de chunking e retrieval',
      'Monitoramento e debugging de pipelines RAG',
      'Cases reais de implementação'
    ],
    
    agenda: [
      { time: '19:00', topic: 'Introdução e Setup do Ambiente' },
      { time: '19:15', topic: 'Arquitetura RAG Avançada' },
      { time: '19:45', topic: 'Live Coding: Implementação Completa' },
      { time: '20:30', topic: 'Otimização e Performance' },
      { time: '20:50', topic: 'Q&A e Networking' }
    ],
    
    speaker: {
      name: 'Luan Moreno',
      role: 'Principal AI Engineer',
      bio: 'Especialista em AI com 10+ anos de experiência, criador da comunidade AI Data Engineering Brasil.',
      avatar: '👨‍💻',
      linkedin: 'https://linkedin.com/in/luanmoreno',
      twitter: 'https://twitter.com/luanmoreno'
    }
  }
}

function WebinarTemplate() {
  const { slug } = useParams()
  const [email, setEmail] = useState('')
  const [registered, setRegistered] = useState(false)
  
  const webinar = webinarData[slug] || webinarData['rag-langchain-producao']
  
  const handleRegistration = (e) => {
    e.preventDefault()
    if (email) {
      setRegistered(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Header />
      
      {/* Back Button */}
      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/webinarios" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos Webinários</span>
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-6">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${webinar.gradient} opacity-5`} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left Column - Info */}
            <div>
              <div className="mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30 inline-block">
                  🔴 Webinário Ao Vivo
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className={`bg-clip-text text-transparent bg-gradient-to-r ${webinar.gradient}`}>
                  {webinar.title}
                </span>
              </h1>
              
              <p className="text-xl text-white/60 mb-8">
                {webinar.subtitle}
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-white/80">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>{webinar.time} • {webinar.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Users className="w-5 h-5 text-purple-400" />
                  <span>{webinar.attendees} pessoas inscritas</span>
                </div>
              </div>
              
              <p className="text-lg text-white/70 leading-relaxed">
                {webinar.description}
              </p>
            </div>
            
            {/* Right Column - Registration */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8"
              >
                {!registered ? (
                  <>
                    <h3 className="text-2xl font-bold mb-2">
                      Reserve Sua Vaga Gratuita
                    </h3>
                    <p className="text-white/60 mb-6">
                      Vagas limitadas. Garanta seu acesso exclusivo.
                    </p>
                    
                    <form onSubmit={handleRegistration} className="space-y-4">
                      <input
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      />
                      
                      <button
                        type="submit"
                        className={`w-full py-4 bg-gradient-to-r ${webinar.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105`}
                      >
                        Garantir Minha Vaga
                      </button>
                    </form>
                    
                    <p className="text-xs text-white/40 mt-4 text-center">
                      Ao se inscrever, você concorda em receber emails sobre o evento.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      Inscrição Confirmada!
                    </h3>
                    <p className="text-white/60">
                      Enviamos os detalhes para {email}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* What You'll Learn */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              O Que Você Vai <span className={`bg-clip-text text-transparent bg-gradient-to-r ${webinar.gradient}`}>Aprender</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinar.whatYouLearn.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                    </div>
                    <p className="text-white/80">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Agenda */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${webinar.gradient}`}>Agenda</span> Completa
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {webinar.agenda.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 p-4 rounded-lg hover:bg-gray-900/20 transition-colors"
                >
                  <span className="text-purple-400 font-mono text-sm">{item.time}</span>
                  <span className="text-white/80 flex-1">{item.topic}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Speaker Section */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Seu <span className={`bg-clip-text text-transparent bg-gradient-to-r ${webinar.gradient}`}>Instrutor</span>
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-8xl">{webinar.speaker.avatar}</div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{webinar.speaker.name}</h3>
                <p className="text-purple-400 mb-4">{webinar.speaker.role}</p>
                <p className="text-white/70 mb-6">{webinar.speaker.bio}</p>
                
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href={webinar.speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={webinar.speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para <span className={`bg-clip-text text-transparent bg-gradient-to-r ${webinar.gradient}`}>Evoluir</span>?
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Junte-se a centenas de profissionais que estão transformando suas carreiras
            </p>
            {!registered && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`px-8 py-4 bg-gradient-to-r ${webinar.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105`}
              >
                Garantir Minha Vaga Gratuita
              </button>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WebinarTemplate