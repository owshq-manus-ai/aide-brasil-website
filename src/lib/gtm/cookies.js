/**
 * GTM Cookie & JavaScript Variable Management
 *
 * Stores lead data in cookies and JavaScript variables
 * so GTM can access it through multiple methods
 */

/**
 * Set a cookie
 */
const setCookie = (name, value, days = 30) => {
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`
}

/**
 * Get a cookie value
 */
const getCookie = (name) => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length))
  }
  return null
}

/**
 * Store lead data in cookies and JavaScript variables
 * This makes the data accessible to GTM tags via multiple methods
 */
export const storeLeadData = (leadData) => {
  try {
    // Store in cookies (for GTM cookie variables)
    if (leadData.name) {
      setCookie('cookie-fbc', leadData.name, 30) // First name + Last name
      setCookie('user-firstname', leadData.name.split(' ')[0] || '', 30)
      setCookie('user-lastname', leadData.name.split(' ').slice(1).join(' ') || '', 30)
    }

    if (leadData.email) {
      setCookie('cookie-fbp', leadData.email, 30)
      setCookie('user-email', leadData.email, 30)
    }

    if (leadData.phone) {
      setCookie('user-phone', leadData.phone, 30)
    }

    // Store in JavaScript variables (for GTM JavaScript variables)
    window.userData = window.userData || {}
    window.userData.email = leadData.email || ''
    window.userData.firstName = leadData.name ? leadData.name.split(' ')[0] : ''
    window.userData.lastName = leadData.name ? leadData.name.split(' ').slice(1).join(' ') : ''
    window.userData.phone = leadData.phone || ''
    window.userData.fullName = leadData.name || ''

    // Store with user-input prefix (matches GTM screenshot variables)
    window.userInput = window.userInput || {}
    window.userInput.email = leadData.email || ''
    window.userInput.firstname = leadData.name ? leadData.name.split(' ')[0] : ''
    window.userInput.lastname = leadData.name ? leadData.name.split(' ').slice(1).join(' ') : ''
    window.userInput.phone = leadData.phone || ''
    window.userInput.genero = leadData.gender || ''

    // Store for Facebook-style access
    window.fbUserData = {
      em: leadData.email || '',
      fn: leadData.name ? leadData.name.split(' ')[0] : '',
      ln: leadData.name ? leadData.name.split(' ').slice(1).join(' ') : '',
      ph: leadData.phone || '',
      external_id: leadData.email ? btoa(leadData.email) : ''
    }

    console.log('💾 [GTM STORAGE] Lead data stored in cookies and JS variables:', {
      cookies: ['cookie-fbc', 'cookie-fbp', 'user-email', 'user-phone', 'user-firstname', 'user-lastname'],
      jsVariables: ['window.userData', 'window.userInput', 'window.fbUserData']
    })

  } catch (error) {
    console.error('[GTM STORAGE] Error storing lead data:', error)
  }
}

/**
 * Clear lead data from cookies and variables
 */
export const clearLeadData = () => {
  // Clear cookies
  ['cookie-fbc', 'cookie-fbp', 'user-email', 'user-phone', 'user-firstname', 'user-lastname'].forEach(name => {
    setCookie(name, '', -1)
  })

  // Clear JS variables
  if (window.userData) {
    window.userData = {}
  }
  if (window.userInput) {
    window.userInput = {}
  }
  if (window.fbUserData) {
    window.fbUserData = {}
  }
}

/**
 * Get stored lead data
 */
export const getStoredLeadData = () => {
  return {
    name: getCookie('cookie-fbc') || '',
    email: getCookie('user-email') || '',
    phone: getCookie('user-phone') || '',
    firstName: getCookie('user-firstname') || '',
    lastName: getCookie('user-lastname') || ''
  }
}
