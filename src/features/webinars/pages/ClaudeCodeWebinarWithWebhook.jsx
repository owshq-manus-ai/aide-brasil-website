// Example of how to integrate the standardized webhook form
// This shows the key sections that need to be updated in ClaudeCodeWebinar.jsx

import React from 'react'
import WebhookForm from '../../../components/shared/WebhookForm'

// Example 1: Replace the inline form (around line 522-557)
const InlineFormReplacement = () => {
  return (
    <WebhookForm
      webhookType="webinars-domine-claude-code"
      fields={['name', 'email', 'phone']}
      buttonText="Garantir Minha Vaga Agora"
      successMessage="🎉 Vaga garantida! Você receberá os detalhes por WhatsApp e e-mail."
      compact={true}
      showLabels={false}
      className="space-y-3"
      onSuccess={(data) => {
        console.log('Lead captured:', data)
        // You can add any additional logic here
      }}
    />
  )
}

// Example 2: Replace the modal form (around line 1555-1608)
const ModalFormReplacement = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl">
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        Confirme sua inscrição gratuita
      </h3>

      <WebhookForm
        webhookType="webinars-domine-claude-code"
        fields={['name', 'email', 'phone']}
        buttonText="Confirmar Inscrição"
        successMessage="✅ Inscrição confirmada! Verifique seu WhatsApp."
        showLabels={true}
        onSuccess={(data) => {
          console.log('Registration confirmed:', data)
          // Close modal after 2 seconds
          setTimeout(() => {
            onClose()
          }, 2000)
        }}
      />

      <p className="text-xs text-white/50 text-center mt-4">
        Ao se inscrever, você concorda em receber comunicações sobre o evento.
      </p>
    </div>
  )
}

// Example 3: Replace the final CTA form (around line 1392-1471)
const FinalCTAFormReplacement = () => {
  return (
    <div className="relative bg-gradient-to-br from-orange-900/20 to-amber-900/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-orange-500/30">
      {/* Form header with badge */}
      <div className="relative mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-semibold">
            Inscrições Abertas - Vagas Limitadas
          </span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white">
          Garanta Sua Vaga Agora
        </h3>
      </div>

      {/* Use the standardized webhook form */}
      <WebhookForm
        webhookType="webinars-domine-claude-code"
        fields={['name', 'email', 'phone']}
        buttonText="Quero Minha Vaga Gratuita"
        successMessage="🚀 Parabéns! Sua vaga está garantida. Cheque seu WhatsApp!"
        showLabels={false}
        customStyles={{
          maxWidth: '500px',
          margin: '0 auto'
        }}
        onSuccess={(data) => {
          // Track conversion
          if (window.gtag) {
            window.gtag('event', 'conversion', {
              'send_to': 'webinar_registration',
              'value': 1.0,
              'currency': 'BRL',
              'event_label': 'Claude Code Webinar'
            })
          }
        }}
      />

      <p className="text-xs text-white/40 text-center mt-6">
        Ao se inscrever, você concorda em receber comunicações sobre o evento.
      </p>
    </div>
  )
}

export { InlineFormReplacement, ModalFormReplacement, FinalCTAFormReplacement }

/*
IMPLEMENTATION STEPS:

1. Import the WebhookForm component at the top of ClaudeCodeWebinar.jsx:
   import WebhookForm from '../../../components/shared/WebhookForm'

2. Remove the useState for formData, isSubmitting, submitMessage, showSuccess

3. Remove the handleInputChange and handleSubmit functions

4. Replace all three form instances with WebhookForm component

5. The webhook will automatically:
   - Validate name, email, and phone (all required)
   - Format Brazilian phone numbers correctly
   - Show inline validation errors
   - Submit to the configured webhook endpoint
   - Track analytics events
   - Show success/error messages

6. Benefits:
   - Consistent validation across all forms
   - Phone number properly formatted as (11) 98765-4321
   - Email validation built-in
   - Automatic UTM tracking
   - Error handling included
   - Loading states managed
*/