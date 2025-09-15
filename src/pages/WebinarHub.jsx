import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, ArrowRight, Sparkles } from 'lucide-react'
import Header from '../components/shared/Header'

const webinars = [
  {
    id: 1,
    slug: 'rag-langchain-producao',
    title: 'RAG com LangChain em Produção',
    date: '28 Jan 2025',
    time: '19:00',
    duration: '2h',
    attendees: 450,
    description: 'Aprenda a implementar Retrieval Augmented Generation com LangChain em ambientes de produção.',
    topics: ['Vector Databases', 'Embeddings', 'LangChain', 'Production Tips'],
    gradient: 'from-purple-500 to-violet-500',
    status: 'upcoming'
  },
  {
    id: 2,
    slug: 'llmops-mlflow',
    title: 'LLMOps: MLFlow para LLMs',
    date: '15 Feb 2025',
    time: '19:00',
    duration: '1.5h',
    attendees: 320,
    description: 'Domine as práticas de MLOps aplicadas a Large Language Models com MLFlow.',
    topics: ['MLFlow', 'Model Registry', 'Monitoring', 'A/B Testing'],
    gradient: 'from-orange-500 to-red-500',
    status: 'upcoming'
  },
  {
    id: 3,
    slug: 'streaming-llm-realtime',
    title: 'Streaming de LLMs em Tempo Real',
    date: '20 Mar 2025',
    time: '20:00',
    duration: '2h',
    attendees: 280,
    description: 'Técnicas avançadas para implementar streaming de respostas de LLMs.',
    topics: ['WebSockets', 'Server-Sent Events', 'Async Processing', 'UX'],
    gradient: 'from-cyan-500 to-blue-500',
    status: 'upcoming'
  }
]

function WebinarHub() {
  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-violet-500/5" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400">
                Webinários Exclusivos
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Aprenda com os melhores experts em AI e Data Engineering do Brasil. 
              Conteúdo prático, direto ao ponto, sem enrolação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/webinarios/${webinar.slug}`}
                  className="block group"
                >
                  <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-6 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium border border-green-500/30">
                        Ao Vivo
                      </span>
                    </div>
                    
                    {/* Gradient Bar */}
                    <div 
                      className={`h-1 w-full bg-gradient-to-r ${webinar.gradient} rounded-full mb-6`}
                    />
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-white/60 mb-6 line-clamp-2">
                      {webinar.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Calendar className="w-4 h-4" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Clock className="w-4 h-4" />
                        <span>{webinar.time} • {webinar.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees} inscritos</span>
                      </div>
                    </div>
                    
                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {webinar.topics.slice(0, 3).map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-800/50 text-gray-400 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
                        Inscreva-se Agora
                      </span>
                      <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebinarHub