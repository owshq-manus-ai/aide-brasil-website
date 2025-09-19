import React, { useState } from 'react'
import WebhookForm from '../components/shared/WebhookForm'
import { Check, AlertTriangle } from 'lucide-react'

const WebhookTestPage = () => {
  const [testResults, setTestResults] = useState({})

  const webhookTests = [
    {
      type: 'community',
      name: 'Community Page',
      fields: ['name', 'email', 'phone']
    },
    {
      type: 'webinars-domine-claude-code',
      name: 'Claude Code Webinar',
      fields: ['name', 'email', 'phone']
    },
    {
      type: 'webinars-domine-autonomous-code-agents',
      name: 'Autonomous Agents Webinar',
      fields: ['name', 'email', 'phone']
    },
    {
      type: 'bootcamps-ai-data-engineer',
      name: 'AI Data Engineer Bootcamp',
      fields: ['name', 'email', 'phone', 'experience_level', 'company']
    },
    {
      type: 'workshops-intro-to-ai',
      name: 'Intro to AI Workshop',
      fields: ['name', 'email', 'company']
    },
    {
      type: 'newsletter',
      name: 'Newsletter',
      fields: ['email']
    }
  ]

  const handleSuccess = (type, data) => {
    setTestResults(prev => ({
      ...prev,
      [type]: { success: true, data, timestamp: new Date().toISOString() }
    }))
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Webhook Integration Test Page
        </h1>
        <p className="text-white/60 mb-8">
          Test all webhook forms to ensure proper validation and submission
        </p>

        {/* Test Summary */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-white mb-4">Test Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {webhookTests.map(test => (
              <div key={test.type} className="flex items-center gap-2">
                {testResults[test.type]?.success ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-gray-600" />
                )}
                <span className={`text-sm ${testResults[test.type]?.success ? 'text-green-400' : 'text-gray-400'}`}>
                  {test.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Test Cases */}
        <div className="bg-gray-800/50 rounded-lg p-6 mb-8 border border-purple-500/20">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            Validation Rules (All Forms)
          </h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>✅ <strong>Name:</strong> Required, min 2 characters</li>
            <li>✅ <strong>Email:</strong> Required, valid format (user@domain.com)</li>
            <li>✅ <strong>Phone:</strong> Required, Brazilian format - auto-formats to (11) 98765-4321</li>
            <li>✅ <strong>UTM Tracking:</strong> Automatically captured from URL</li>
            <li>✅ <strong>Device Info:</strong> User agent, screen resolution, language</li>
          </ul>

          <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <p className="text-yellow-400 text-sm">
              <strong>Test Phone Numbers:</strong>
            </p>
            <ul className="text-yellow-300 text-xs mt-1">
              <li>• Valid: 11987654321 → (11) 98765-4321</li>
              <li>• Valid: 1134567890 → (11) 3456-7890</li>
              <li>• Invalid: 123 (too short)</li>
              <li>• Invalid: 00987654321 (invalid area code)</li>
            </ul>
          </div>
        </div>

        {/* Test Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webhookTests.map(test => (
            <div
              key={test.type}
              className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
                {test.name}
                {testResults[test.type]?.success && (
                  <span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">
                    Tested ✓
                  </span>
                )}
              </h3>

              <WebhookForm
                webhookType={test.type}
                fields={test.fields}
                buttonText="Test Webhook"
                successMessage="✅ Webhook tested successfully!"
                compact={true}
                showLabels={true}
                onSuccess={(data) => handleSuccess(test.type, data)}
              />

              {testResults[test.type] && (
                <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                  <p className="text-green-400 text-xs font-semibold mb-1">Last Test:</p>
                  <p className="text-green-300 text-xs">
                    {new Date(testResults[test.type].timestamp).toLocaleTimeString()}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-900/20 rounded-lg p-6 border border-blue-500/30">
          <h3 className="text-blue-400 font-semibold mb-2">Testing Instructions:</h3>
          <ol className="text-blue-300 text-sm space-y-1 list-decimal list-inside">
            <li>Test each form with valid data to ensure submission works</li>
            <li>Test with invalid email (e.g., "notanemail") to see validation</li>
            <li>Test with invalid phone (e.g., "123") to see phone validation</li>
            <li>Test with empty fields to see required field validation</li>
            <li>Check browser console for webhook submission logs</li>
            <li>Verify success messages appear after submission</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default WebhookTestPage