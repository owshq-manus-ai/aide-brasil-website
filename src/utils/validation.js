// Validation utilities for forms and webhooks

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Format and validate Brazilian phone number
 * @param {string} phone - Phone number to format
 * @returns {object} - { isValid: boolean, formatted: string, error?: string }
 */
export function formatBrazilianPhone(phone) {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '')

  // Check if it's a valid Brazilian phone
  if (cleaned.length < 10 || cleaned.length > 11) {
    return {
      isValid: false,
      formatted: phone,
      error: 'Telefone deve ter 10 ou 11 dígitos'
    }
  }

  // Check if it starts with valid area code (11-99)
  const areaCode = cleaned.substring(0, 2)
  if (parseInt(areaCode) < 11 || parseInt(areaCode) > 99) {
    return {
      isValid: false,
      formatted: phone,
      error: 'Código de área inválido'
    }
  }

  // Format the phone number
  let formatted
  if (cleaned.length === 11) {
    // Mobile: (11) 98765-4321
    formatted = `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7)}`
  } else {
    // Landline: (11) 3456-7890
    formatted = `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`
  }

  return {
    isValid: true,
    formatted
  }
}

/**
 * Real-time phone mask for input fields
 * @param {string} value - Current input value
 * @returns {string} - Masked value
 */
export function phoneMask(value) {
  // Remove all non-digits
  const cleaned = value.replace(/\D/g, '')

  // Apply mask progressively
  if (cleaned.length <= 2) {
    return cleaned.length > 0 ? `(${cleaned}` : ''
  } else if (cleaned.length <= 7) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2)}`
  } else if (cleaned.length <= 10) {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 6)}-${cleaned.substring(6)}`
  } else {
    return `(${cleaned.substring(0, 2)}) ${cleaned.substring(2, 7)}-${cleaned.substring(7, 11)}`
  }
}

/**
 * Validate required fields
 * @param {object} data - Form data
 * @param {array} requiredFields - List of required field names
 * @returns {object} - { isValid: boolean, errors: object }
 */
export function validateRequiredFields(data, requiredFields) {
  const errors = {}

  requiredFields.forEach(field => {
    if (!data[field] || data[field].toString().trim() === '') {
      errors[field] = `${getFieldLabel(field)} é obrigatório`
    }
  })

  // Special validation for email
  if (requiredFields.includes('email') && data.email && !isValidEmail(data.email)) {
    errors.email = 'E-mail inválido'
  }

  // Special validation for phone
  if (requiredFields.includes('phone') && data.phone) {
    const phoneValidation = formatBrazilianPhone(data.phone)
    if (!phoneValidation.isValid) {
      errors.phone = phoneValidation.error
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Get user-friendly field label
 * @param {string} field - Field name
 * @returns {string} - Localized label
 */
function getFieldLabel(field) {
  const labels = {
    name: 'Nome',
    email: 'E-mail',
    phone: 'Telefone',
    company: 'Empresa',
    message: 'Mensagem',
    subject: 'Assunto',
    experience_level: 'Nível de experiência',
    current_role: 'Cargo atual',
    interest: 'Interesse'
  }

  return labels[field] || field.charAt(0).toUpperCase() + field.slice(1)
}

/**
 * Sanitize form data before submission
 * @param {object} data - Form data
 * @returns {object} - Sanitized data
 */
export function sanitizeFormData(data) {
  const sanitized = {}

  Object.keys(data).forEach(key => {
    let value = data[key]

    // Trim whitespace
    if (typeof value === 'string') {
      value = value.trim()
    }

    // Format phone if present
    if (key === 'phone' && value) {
      const phoneResult = formatBrazilianPhone(value)
      value = phoneResult.formatted
    }

    // Lowercase email
    if (key === 'email' && value) {
      value = value.toLowerCase()
    }

    sanitized[key] = value
  })

  return sanitized
}