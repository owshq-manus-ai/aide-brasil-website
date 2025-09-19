// Enhanced Community Hero with Webhook Integration
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Users, X } from 'lucide-react'
import WebhookForm from '../shared/WebhookForm'

const CommunityHeroWithWebhook = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {/* Your existing hero content */}
      <div className="relative min-h-screen">
        {/* ... existing background and content ... */}

        {/* CTA Button - Opens Modal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => setShowModal(true)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700
              text-white rounded-xl font-semibold overflow-hidden hover:shadow-2xl
              hover:shadow-purple-500/50 transition-all duration-300"
          >
            {/* Button shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
              -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="flex items-center justify-center gap-2 relative">
              Fazer parte da comunidade
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Registration Modal with Webhook Form */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md"
            >
              {/* Modal Card */}
              <div className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-black
                rounded-2xl border border-purple-500/20 overflow-hidden">

                {/* Purple glow effect */}
                <div className="absolute inset-0 bg-purple-500/5 blur-3xl" />

                {/* Close button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
                >
                  <X size={24} />
                </button>

                {/* Modal Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16
                      bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Junte-se à Elite dos Dados
                    </h3>
                    <p className="text-white/60 text-sm">
                      Faça parte da comunidade mais avançada de engenheiros de dados do Brasil
                    </p>
                  </div>

                  {/* Webhook Form */}
                  <WebhookForm
                    webhookType="community"
                    fields={['name', 'email', 'phone']}
                    buttonText="Entrar na Comunidade"
                    successMessage="🎉 Bem-vindo! Você receberá o link de acesso em instantes."
                    showLabels={true}
                    onSuccess={(data) => {
                      console.log('New community member:', data)

                      // Track conversion
                      if (window.gtag) {
                        window.gtag('event', 'conversion', {
                          'send_to': 'community_signup',
                          'event_label': 'AI Data Community'
                        })
                      }

                      // Close modal after 3 seconds
                      setTimeout(() => {
                        setShowModal(false)
                      }, 3000)
                    }}
                  />

                  {/* Benefits list */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✓</span>
                      Acesso exclusivo ao Discord privado
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✓</span>
                      Mentorias semanais ao vivo
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✓</span>
                      Materiais e códigos exclusivos
                    </div>
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-white/40 text-center mt-4">
                    Seus dados estão seguros. Nunca compartilhamos suas informações.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CommunityHeroWithWebhook

/*
IMPLEMENTATION INSTRUCTIONS:

1. In the existing community-hero.jsx, add:
   - Import useState from React
   - Import WebhookForm component
   - Add modal state management

2. Update the CTA button to open the modal instead of navigating

3. Add the modal with the webhook form

4. The webhook automatically:
   - Validates all three fields (name, email, phone)
   - Formats phone numbers correctly
   - Shows validation errors inline
   - Submits to the community webhook endpoint
   - Captures UTM parameters
   - Shows success message

5. All data is sanitized and validated before submission
*/