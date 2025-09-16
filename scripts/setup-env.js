#!/usr/bin/env node

/**
 * Environment Setup Script
 * Automatically creates .env files for local development and deployment
 * Run: node scripts/setup-env.js
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Default configuration
const defaultConfig = {
  // n8n Webhooks - Use same webhook for both if you're using routing
  VITE_N8N_WEBHOOK_URL: 'https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7',
  VITE_N8N_WEBHOOK_PREMIUM: 'https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7',
  VITE_N8N_WEBHOOK_FREE: 'https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7',

  // Features
  VITE_N8N_ENABLED: 'true',
  VITE_TRACK_UTM: 'true',
  VITE_TRACK_DEVICE: 'true',
  VITE_LOG_ERRORS: 'true',
  VITE_SHOW_ERRORS: 'false',

  // API Configuration (optional)
  VITE_API_URL: '',
  VITE_API_KEY: '',

  // Analytics (optional)
  VITE_GA_TRACKING_ID: '',
  VITE_HOTJAR_ID: '',

  // Deployment
  VITE_DEPLOY_URL: 'https://aide-brasil.ai',
  VITE_VERCEL_URL: ''
};

// Check if running in CI/CD environment
const isCI = process.env.CI || process.env.VERCEL || process.env.GITHUB_ACTIONS;

async function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setupEnvironment() {
  console.log('🚀 AI Data Engineering Brasil - Environment Setup\n');

  let config = { ...defaultConfig };

  if (!isCI) {
    console.log('📝 Configure your environment variables:\n');

    // Ask for n8n webhook configuration
    const useSingleWebhook = await prompt('Use single n8n webhook for all forms? (recommended) [Y/n]: ');

    if (useSingleWebhook.toLowerCase() !== 'n') {
      const webhookUrl = await prompt(`n8n Webhook URL [${defaultConfig.VITE_N8N_WEBHOOK_URL}]: `);
      if (webhookUrl) {
        config.VITE_N8N_WEBHOOK_URL = webhookUrl;
        config.VITE_N8N_WEBHOOK_PREMIUM = webhookUrl;
        config.VITE_N8N_WEBHOOK_FREE = webhookUrl;
      }
    } else {
      const premiumWebhook = await prompt('Premium Webhook URL: ');
      const freeWebhook = await prompt('Free Tier Webhook URL: ');

      if (premiumWebhook) config.VITE_N8N_WEBHOOK_PREMIUM = premiumWebhook;
      if (freeWebhook) config.VITE_N8N_WEBHOOK_FREE = freeWebhook;
    }

    // Ask for optional configurations
    const configureAnalytics = await prompt('\nConfigure analytics? [y/N]: ');

    if (configureAnalytics.toLowerCase() === 'y') {
      const gaId = await prompt('Google Analytics ID (optional): ');
      const hotjarId = await prompt('Hotjar ID (optional): ');

      if (gaId) config.VITE_GA_TRACKING_ID = gaId;
      if (hotjarId) config.VITE_HOTJAR_ID = hotjarId;
    }
  }

  // Generate .env.local file
  const envContent = Object.entries(config)
    .filter(([_, value]) => value !== '')
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');

  const envLocalPath = path.join(process.cwd(), '.env.local');

  // Check if .env.local exists
  if (fs.existsSync(envLocalPath) && !isCI) {
    const overwrite = await prompt('\n⚠️  .env.local already exists. Overwrite? [y/N]: ');
    if (overwrite.toLowerCase() !== 'y') {
      console.log('✅ Setup cancelled. Existing .env.local preserved.');
      rl.close();
      return;
    }
  }

  // Write .env.local
  fs.writeFileSync(envLocalPath, envContent);
  console.log('\n✅ Created .env.local');

  // Generate Vercel deployment script
  const vercelEnvScript = `#!/bin/bash
# Vercel Environment Variables Setup
# Run: bash scripts/vercel-env.sh

echo "📦 Setting up Vercel environment variables..."

# Add each variable to Vercel
${Object.entries(config)
  .filter(([_, value]) => value !== '')
  .map(([key, value]) => `vercel env add ${key} production <<< "${value}"`)
  .join('\n')}

echo "✅ Vercel environment variables configured!"
echo "🚀 Run 'vercel --prod' to deploy with these settings"
`;

  const vercelScriptPath = path.join(process.cwd(), 'scripts', 'vercel-env.sh');
  fs.writeFileSync(vercelScriptPath, vercelEnvScript);
  fs.chmodSync(vercelScriptPath, '755');
  console.log('✅ Created scripts/vercel-env.sh for Vercel deployment');

  // Create GitHub Actions secret template
  const githubSecretsTemplate = `# GitHub Actions Secrets
# Add these to your repository settings > Secrets and variables > Actions

${Object.entries(config)
  .filter(([_, value]) => value !== '')
  .map(([key, value]) => `${key}=${value}`)
  .join('\n')}
`;

  const githubSecretsPath = path.join(process.cwd(), '.github', 'secrets.example');

  // Create .github directory if it doesn't exist
  const githubDir = path.join(process.cwd(), '.github');
  if (!fs.existsSync(githubDir)) {
    fs.mkdirSync(githubDir, { recursive: true });
  }

  fs.writeFileSync(githubSecretsPath, githubSecretsTemplate);
  console.log('✅ Created .github/secrets.example for GitHub Actions');

  console.log('\n🎉 Environment setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Local development: npm run dev');
  console.log('2. Vercel deployment: bash scripts/vercel-env.sh');
  console.log('3. GitHub Actions: Add secrets from .github/secrets.example');

  rl.close();
}

// Auto-setup for CI/CD environments
async function autoSetup() {
  console.log('🤖 CI/CD environment detected - using default configuration');

  const envContent = Object.entries(defaultConfig)
    .filter(([_, value]) => value !== '')
    .map(([key, value]) => `${key}=${process.env[key] || value}`)
    .join('\n');

  fs.writeFileSync('.env.local', envContent);
  console.log('✅ Environment configured for CI/CD');
}

// Main execution
if (isCI) {
  autoSetup();
} else {
  setupEnvironment().catch(console.error);
}