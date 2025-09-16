# 🚀 Quick Deployment Fix

## Issue
The CI/CD auto-setup was adding ~5 minutes to deployment time.

## Solution
Manual environment variable setup (takes 30 seconds like before).

## Steps

### 1. Add Environment Variable to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add:
   - **Name:** `VITE_N8N_WEBHOOK_URL`
   - **Value:** `https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7`
   - **Environment:** Production

### 2. Redeploy
```bash
git add -A
git commit -m "Fix: Remove CI/CD auto-setup for faster deployment"
git push
```

### 3. Optional: Local Setup
For local development:
```bash
npm run setup
```

## Result
- ✅ Fast 30-second deployments
- ✅ n8n integration works
- ✅ Both CTAs send data to n8n
- ✅ Environment configured manually (one-time setup)

## Environment Variables Needed
```
VITE_N8N_WEBHOOK_URL=https://primary-production-1ebc.up.railway.app/webhook/473f499e-bcf5-4ff8-b17d-08f4fee8b9a7
```

That's it! Your deployment will be fast again. 🎉