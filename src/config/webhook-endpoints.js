// Centralized webhook endpoint configuration
// Each page type has its own webhook with specific metadata

export const webhookEndpoints = {
  // Community Pages
  community: {
    url: import.meta.env.VITE_WEBHOOK_COMMUNITY || 'https://primary-production-1ebc.up.railway.app/webhook/community',
    fields: ['name', 'email', 'phone', 'interest'],
    metadata: {
      type: 'community',
      product: 'community-membership'
    }
  },

  // Bootcamp Pages
  bootcamps: {
    'ai-data-engineer': {
      url: import.meta.env.VITE_WEBHOOK_BOOTCAMP_AI_DE || 'https://primary-production-1ebc.up.railway.app/webhook/bootcamp-ai-de',
      fields: ['name', 'email', 'phone', 'experience_level', 'company'],
      metadata: {
        type: 'bootcamp',
        product: 'ai-data-engineer-bootcamp',
        price: 'R$ 2.997'
      }
    },
    'python-fundamentals': {
      url: import.meta.env.VITE_WEBHOOK_BOOTCAMP_PYTHON || 'https://primary-production-1ebc.up.railway.app/webhook/bootcamp-python',
      fields: ['name', 'email', 'phone', 'current_role'],
      metadata: {
        type: 'bootcamp',
        product: 'python-fundamentals',
        price: 'R$ 997'
      }
    }
  },

  // Workshop Pages
  workshops: {
    'intro-to-ai': {
      url: import.meta.env.VITE_WEBHOOK_WORKSHOP_AI || 'https://primary-production-1ebc.up.railway.app/webhook/workshop-ai',
      fields: ['name', 'email', 'company'],
      metadata: {
        type: 'workshop',
        product: 'intro-to-ai-workshop',
        duration: '4 hours',
        format: 'online'
      }
    },
    'data-engineering-101': {
      url: import.meta.env.VITE_WEBHOOK_WORKSHOP_DE || 'https://primary-production-1ebc.up.railway.app/webhook/workshop-de',
      fields: ['name', 'email', 'phone'],
      metadata: {
        type: 'workshop',
        product: 'data-engineering-101',
        duration: '3 hours',
        format: 'online'
      }
    }
  },

  // Webinar Pages - ALL require name, email, and phone
  webinars: {
    'domine-autonomous-code-agents': {
      url: import.meta.env.VITE_WEBHOOK_WEBINAR_AGENTS ||
           import.meta.env.VITE_N8N_WEBHOOK_URL ||
           'https://primary-production-1ebc.up.railway.app/webhook-test/3a20f09c-24f1-4052-ae9c-a3617cf9ec57',
      fields: ['name', 'email', 'phone'], // Mandatory fields
      metadata: {
        type: 'webinar',
        product: 'autonomous-code-agents',
        duration: '90 minutes',
        format: 'live'
      }
    },
    'domine-claude-code': {
      url: import.meta.env.VITE_WEBHOOK_WEBINAR_CLAUDE ||
           import.meta.env.VITE_N8N_WEBHOOK_URL ||
           'https://primary-production-1ebc.up.railway.app/webhook-test/3a20f09c-24f1-4052-ae9c-a3617cf9ec57',
      fields: ['name', 'email', 'phone'], // Mandatory fields
      metadata: {
        type: 'webinar',
        product: 'claude-code-mastery',
        duration: '60 minutes',
        format: 'live'
      }
    }
  },

  // Newsletter
  newsletter: {
    url: import.meta.env.VITE_WEBHOOK_NEWSLETTER || 'https://primary-production-1ebc.up.railway.app/webhook/newsletter',
    fields: ['email'],
    metadata: {
      type: 'newsletter',
      product: 'weekly-newsletter'
    }
  },

  // Contact Form
  contact: {
    url: import.meta.env.VITE_WEBHOOK_CONTACT || 'https://primary-production-1ebc.up.railway.app/webhook/contact',
    fields: ['name', 'email', 'message', 'subject'],
    metadata: {
      type: 'contact',
      product: 'contact-form'
    }
  }
}

// Helper to get webhook config by page path
export function getWebhookByPath(path) {
  // Parse the path to determine webhook type
  if (path.includes('/bootcamp/')) {
    const bootcampName = path.split('/bootcamp/')[1]?.split('/')[0]
    return webhookEndpoints.bootcamps[bootcampName]
  }

  if (path.includes('/workshop/')) {
    const workshopName = path.split('/workshop/')[1]?.split('/')[0]
    return webhookEndpoints.workshops[workshopName]
  }

  if (path.includes('/webinar/')) {
    const webinarName = path.split('/webinar/')[1]?.split('/')[0]
    return webhookEndpoints.webinars[webinarName]
  }

  if (path.includes('/community')) {
    return webhookEndpoints.community
  }

  if (path.includes('/newsletter')) {
    return webhookEndpoints.newsletter
  }

  if (path.includes('/contact')) {
    return webhookEndpoints.contact
  }

  // Default fallback
  return webhookEndpoints.newsletter
}

// Get all available webhook types for documentation
export function getAllWebhookTypes() {
  const types = []

  // Add simple endpoints
  types.push('community', 'newsletter', 'contact')

  // Add bootcamps
  Object.keys(webhookEndpoints.bootcamps).forEach(key => {
    types.push(`bootcamp-${key}`)
  })

  // Add workshops
  Object.keys(webhookEndpoints.workshops).forEach(key => {
    types.push(`workshop-${key}`)
  })

  // Add webinars
  Object.keys(webhookEndpoints.webinars).forEach(key => {
    types.push(`webinar-${key}`)
  })

  return types
}