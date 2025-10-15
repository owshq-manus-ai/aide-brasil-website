import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useWebhook } from '../../hooks/useWebhook'
import { Check, AlertCircle, Send, Loader2 } from 'lucide-react'
import { validateRequiredFields, sanitizeFormData, phoneMask } from '../../utils/validation'
import { trackFormSubmission, trackWebinarRegistration } from '../../lib/gtm/events'

const WebhookForm = ({
  webhookType,
  fields = ['name', 'email', 'phone'],
  buttonText = 'Enviar',
  successMessage = 'Cadastro realizado com sucesso!',
  className = '',
  onSuccess,
  customStyles = {},
  showLabels = true,
  compact = false
}) => {
  const { submit, loading, error, success, reset } = useWebhook(webhookType)
  const [formData, setFormData] = useState({})
  const [fieldErrors, setFieldErrors] = useState({})

  // Initialize form data with empty strings for all fields
  useEffect(() => {
    const initialData = {}
    fields.forEach(field => {
      initialData[field] = ''
    })
    setFormData(initialData)
  }, [fields])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate required fields
    const validation = validateRequiredFields(formData, fields)
    if (!validation.isValid) {
      // Show errors
      setFieldErrors(validation.errors)
      return
    }

    // Clear field errors if validation passes
    setFieldErrors({})

    // Sanitize data before submission
    const sanitizedData = sanitizeFormData(formData)
    const result = await submit(sanitizedData)

    if (result.success) {
      // Track form submission in GTM
      trackFormSubmission({
        formId: webhookType,
        formName: `Webhook Form - ${webhookType}`,
        formType: 'lead',
        formLocation: window.location.pathname,
        ...sanitizedData
      })

      // If this is a webinar registration, track it specifically
      if (window.location.pathname.includes('/webinar')) {
        trackWebinarRegistration({
          webinarId: window.location.pathname.split('/').pop(),
          webinarTitle: document.title,
          userEmail: sanitizedData.email,
          userPhone: sanitizedData.phone,
          userName: sanitizedData.name,
        })
      }

      if (onSuccess) {
        onSuccess(result.data)
      }
    }
  }

  // Handle input change
  const handleChange = (field, value) => {
    // Apply phone mask if it's a phone field
    if (field === 'phone') {
      value = phoneMask(value)
    }

    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Get field configuration
  const getFieldConfig = (field) => {
    const configs = {
      name: {
        label: 'Nome',
        type: 'text',
        placeholder: 'Seu nome completo',
        icon: '👤'
      },
      email: {
        label: 'E-mail',
        type: 'email',
        placeholder: 'seu@email.com',
        icon: '✉️'
      },
      phone: {
        label: 'WhatsApp',
        type: 'tel',
        placeholder: '(11) 98765-4321',
        icon: '📱'
      },
      company: {
        label: 'Empresa',
        type: 'text',
        placeholder: 'Nome da empresa',
        icon: '🏢'
      },
      experience_level: {
        label: 'Nível de Experiência',
        type: 'select',
        placeholder: 'Selecione',
        options: ['Iniciante', 'Intermediário', 'Avançado'],
        icon: '📊'
      },
      current_role: {
        label: 'Cargo Atual',
        type: 'text',
        placeholder: 'Ex: Analista de Dados',
        icon: '💼'
      },
      interest: {
        label: 'Interesse',
        type: 'select',
        placeholder: 'Selecione',
        options: ['Bootcamps', 'Workshops', 'Comunidade', 'Newsletter'],
        icon: '🎯'
      },
      message: {
        label: 'Mensagem',
        type: 'textarea',
        placeholder: 'Sua mensagem...',
        icon: '💬'
      },
      subject: {
        label: 'Assunto',
        type: 'text',
        placeholder: 'Assunto da mensagem',
        icon: '📝'
      }
    }

    return configs[field] || {
      label: field.charAt(0).toUpperCase() + field.slice(1),
      type: 'text',
      placeholder: `Digite ${field}`,
      icon: '📋'
    }
  }

  // Render field based on type
  const renderField = (field) => {
    const config = getFieldConfig(field)
    const value = formData[field] || ''

    const fieldClasses = compact
      ? 'px-3 py-2 text-sm'
      : 'px-4 py-3'

    if (config.type === 'select') {
      return (
        <select
          value={value}
          onChange={(e) => handleChange(field, e.target.value)}
          className={`w-full ${fieldClasses} bg-white/5 border border-purple-500/30 rounded-lg text-white
            focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all`}
          required
        >
          <option value="" disabled>{config.placeholder}</option>
          {config.options?.map(option => (
            <option key={option} value={option} className="bg-gray-900">
              {option}
            </option>
          ))}
        </select>
      )
    }

    if (config.type === 'textarea') {
      return (
        <textarea
          value={value}
          onChange={(e) => handleChange(field, e.target.value)}
          placeholder={config.placeholder}
          rows={compact ? 3 : 4}
          className={`w-full ${fieldClasses} bg-white/5 border border-purple-500/30 rounded-lg text-white
            placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all`}
          required
        />
      )
    }

    return (
      <input
        type={config.type}
        value={value}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={config.placeholder}
        maxLength={field === 'phone' ? 15 : undefined}
        className={`w-full ${fieldClasses} bg-white/5 border ${fieldErrors[field] ? 'border-red-500' : 'border-purple-500/30'} rounded-lg text-white
          placeholder:text-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all`}
        required
      />
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className} style={customStyles}>
      <div className={compact ? 'space-y-3' : 'space-y-4'}>
        {fields.map(field => {
          const config = getFieldConfig(field)
          return (
            <div key={field}>
              {showLabels && (
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="mr-2">{config.icon}</span>
                  {config.label}
                </label>
              )}
              {renderField(field)}
              {fieldErrors[field] && (
                <p className="mt-1 text-xs text-red-400">{fieldErrors[field]}</p>
              )}
            </div>
          )
        })}
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <Check size={16} />
              <span>{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading || success}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full mt-6 ${compact ? 'py-2.5' : 'py-3'} px-6
          bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-lg
          hover:from-purple-700 hover:to-violet-700 transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
      >
        {loading ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Enviando...
          </>
        ) : success ? (
          <>
            <Check size={20} />
            Enviado!
          </>
        ) : (
          <>
            <Send size={20} />
            {buttonText}
          </>
        )}
      </motion.button>

      {/* Reset form after success */}
      {success && (
        <button
          type="button"
          onClick={() => {
            reset()
            const initialData = {}
            fields.forEach(field => {
              initialData[field] = ''
            })
            setFormData(initialData)
          }}
          className="w-full mt-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Enviar outro cadastro
        </button>
      )}
    </form>
  )
}

export default WebhookForm