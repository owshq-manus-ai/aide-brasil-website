# 🚀 Quick Setup Guide

## Environment Setup (Auto-Generated)

Run this command to automatically configure your environment:

```bash
npm run setup
```

This will:
- Create `.env.local` with your n8n webhook URLs
- Generate Vercel deployment script
- Create GitHub Actions secrets template

## n8n Webhook Recommendations

### ✅ **Recommended: Single Webhook + Routing**

Use the same webhook URL for both CTAs and route based on the `source` field in n8n:

```
[Webhook] → [Switch Node] → Route by "source"
              ├→ "premium-waitlist" → Premium flow
              └→ "free-signup" → Free tier flow
```

**Benefits:**
- Simpler configuration
- One n8n workflow to maintain
- Easy to add new form types

### 🔄 **Alternative: Separate Webhooks**

Create separate webhooks if you need completely different workflows:
- Premium: Dedicated premium workflow
- Free: Dedicated free tier workflow

## Deployment

### Vercel (Automated)
```bash
# Setup environment variables in Vercel
npm run setup:vercel

# Deploy
vercel --prod
```

### Manual Vercel Setup
1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add: `VITE_N8N_WEBHOOK_URL` with your n8n webhook URL
3. Redeploy

## Testing

1. **Local Development:**
   ```bash
   npm run setup  # Configure environment
   npm run dev    # Start development server
   ```

2. **Test Forms:**
   - Click "Começar Gratuitamente" → Free signup form
   - Click "Entrar na Lista de Espera" → Premium waitlist form

3. **Check n8n:**
   - Monitor execution history in n8n dashboard
   - Verify data is received correctly

## Environment Variables

```env
# Required
VITE_N8N_WEBHOOK_URL=your-webhook-url

# Optional (for separate workflows)
VITE_N8N_WEBHOOK_PREMIUM=premium-webhook-url
VITE_N8N_WEBHOOK_FREE=free-webhook-url

# Features
VITE_N8N_ENABLED=true
VITE_TRACK_UTM=true
VITE_TRACK_DEVICE=true
```

## Need Help?

- **n8n Integration:** See `docs/N8N_INTEGRATION.md`
- **Webhook Config:** Check `src/config/webhooks.js`
- **Environment Issues:** Run `npm run setup` again