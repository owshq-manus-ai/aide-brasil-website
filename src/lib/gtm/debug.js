/**
 * GTM Debugging Utilities
 *
 * Helper functions for debugging GTM integration
 */

/**
 * Print formatted dataLayer to console
 */
export const debugDataLayer = () => {
  if (!window.dataLayer) {
    console.warn('[GTM DEBUG] dataLayer not found')
    return
  }

  console.group('🔍 GTM DataLayer Debug')
  console.log('Total events:', window.dataLayer.length)
  console.log('Full dataLayer:', window.dataLayer)

  // Show last 5 events
  console.group('📋 Last 5 Events')
  window.dataLayer.slice(-5).forEach((event, index) => {
    console.log(`${index + 1}.`, event)
  })
  console.groupEnd()

  // Show lead-related events
  const leadEvents = window.dataLayer.filter(e =>
    e.event === 'form_submission' || e.event === 'webinar_registration'
  )

  if (leadEvents.length > 0) {
    console.group('👤 Lead Events')
    leadEvents.forEach((event, index) => {
      console.log(`${index + 1}. ${event.event}:`, {
        lead_name: event.lead_name,
        lead_email: event.lead_email,
        lead_phone: event.lead_phone,
        form_id: event.form_id || event.webinar_id,
      })
    })
    console.groupEnd()
  }

  console.groupEnd()
}

/**
 * Check if specific lead data exists in dataLayer
 */
export const checkLeadData = () => {
  if (!window.dataLayer) {
    console.error('❌ dataLayer not initialized')
    return false
  }

  const leadEvents = window.dataLayer.filter(e =>
    e.event === 'form_submission' || e.event === 'webinar_registration'
  )

  if (leadEvents.length === 0) {
    console.warn('⚠️  No lead events found in dataLayer')
    return false
  }

  const lastLeadEvent = leadEvents[leadEvents.length - 1]

  console.log('✅ Lead event found:', lastLeadEvent.event)
  console.table({
    'Lead Name': lastLeadEvent.lead_name || '❌ MISSING',
    'Lead Email': lastLeadEvent.lead_email || '❌ MISSING',
    'Lead Phone': lastLeadEvent.lead_phone || '❌ MISSING',
    'Form ID': lastLeadEvent.form_id || lastLeadEvent.webinar_id || '❌ MISSING',
  })

  const hasAllData = lastLeadEvent.lead_name && lastLeadEvent.lead_email && lastLeadEvent.lead_phone

  if (hasAllData) {
    console.log('✅ All lead data present!')
  } else {
    console.error('❌ Some lead data is missing!')
  }

  return hasAllData
}

/**
 * Monitor dataLayer for new events
 */
export const monitorDataLayer = () => {
  if (!window.dataLayer) {
    console.error('❌ dataLayer not initialized')
    return
  }

  console.log('👀 Monitoring dataLayer for new events...')
  console.log('Submit a form to see events appear here.')

  const originalPush = window.dataLayer.push
  window.dataLayer.push = function(...args) {
    console.log('🆕 New dataLayer event:', args[0])

    if (args[0]?.event === 'form_submission' || args[0]?.event === 'webinar_registration') {
      console.log('📊 Lead Data:', {
        name: args[0].lead_name,
        email: args[0].lead_email,
        phone: args[0].lead_phone
      })
    }

    return originalPush.apply(this, args)
  }

  console.log('✅ Monitor active! Check console when you submit forms.')
}

/**
 * Test GTM integration
 */
export const testGTM = () => {
  console.group('🧪 GTM Integration Test')

  // Test 1: Check if GTM loaded
  const gtmScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]')
  console.log('1. GTM Script Loaded:', gtmScript ? '✅' : '❌')

  // Test 2: Check dataLayer
  console.log('2. DataLayer Exists:', window.dataLayer ? '✅' : '❌')
  console.log('   DataLayer Events:', window.dataLayer?.length || 0)

  // Test 3: Check GTM container ID
  const hasGTM = document.documentElement.innerHTML.includes('GTM-58XSC997')
  console.log('3. GTM Container ID Found:', hasGTM ? '✅' : '❌')

  // Test 4: Check for lead events
  if (window.dataLayer) {
    const hasLeadEvents = window.dataLayer.some(e =>
      e.event === 'form_submission' || e.event === 'webinar_registration'
    )
    console.log('4. Lead Events Present:', hasLeadEvents ? '✅' : '⚠️  (Submit a form to test)')
  }

  // Test 5: Push test event
  console.log('5. Testing dataLayer push...')
  try {
    window.dataLayer.push({
      event: 'test_event',
      test_lead_name: 'Test User',
      test_lead_email: 'test@example.com',
      test_timestamp: new Date().toISOString()
    })
    console.log('   Test Event Pushed: ✅')
  } catch (error) {
    console.log('   Test Event Pushed: ❌', error)
  }

  console.groupEnd()

  console.log('\n📖 Available commands:')
  console.log('  - debugDataLayer() - Show full dataLayer')
  console.log('  - checkLeadData() - Check last lead event')
  console.log('  - monitorDataLayer() - Watch for new events')
}

// Export for window usage
if (typeof window !== 'undefined') {
  window.debugGTM = {
    debugDataLayer,
    checkLeadData,
    monitorDataLayer,
    testGTM
  }
}
