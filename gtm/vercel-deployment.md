# GTM Deployment Guide for Vercel

Complete guide for deploying GTM-enabled site to Vercel.

## 📦 Pre-Deployment Checklist

Before deploying, ensure:

- ✅ GTM scripts added to `index.html`
- ✅ GTM library created in `src/lib/gtm/`
- ✅ Environment variables configured
- ✅ Code tested locally
- ✅ No console errors

---

## 🚀 Deployment Steps

### Step 1: Add Environment Variables to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Select your project: **aide-brasil-website**
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_GTM_WEB_ID` | `GTM-58XSC997` | Production, Preview, Development |
| `VITE_GTM_SERVER_ID` | `GTM-T7NM8RJK` | Production, Preview, Development |
| `VITE_GTM_ENABLED_IN_DEV` | `false` | Development |
| `VITE_GTM_ENABLED_IN_DEV` | `true` | Production, Preview |
| `VITE_GTM_DEBUG` | `false` | Production |
| `VITE_GTM_DEBUG` | `true` | Preview |

5. Click **Save**

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Login to Vercel
vercel login

# Add environment variables
vercel env add VITE_GTM_WEB_ID production
# Enter: GTM-58XSC997

vercel env add VITE_GTM_SERVER_ID production
# Enter: GTM-T7NM8RJK

vercel env add VITE_GTM_DEBUG production
# Enter: false

# Repeat for preview and development environments
```

---

### Step 2: Deploy to Vercel

#### Option A: Git Push (Automatic)

```bash
# Commit changes
git add .
git commit -m "feat: Add Google Tag Manager integration"

# Push to main branch
git push origin main

# Vercel automatically deploys!
```

#### Option B: Manual Deploy via CLI

```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

---

### Step 3: Verify Deployment

#### A. Check Build Logs

1. Go to Vercel dashboard
2. Click on your deployment
3. Check **Build Logs**
4. Verify no errors related to GTM

#### B. Test Production Site

1. Visit your production URL: `https://aidebrasil.com.br`
2. Open browser DevTools → Console
3. Look for: `[GTM] Initialized`
4. Check Network tab for GTM requests

#### C. Use GTM Preview Mode

1. Go to [tagmanager.google.com](https://tagmanager.google.com)
2. Click **Preview**
3. Enter production URL
4. Verify events fire correctly

---

### Step 4: Configure GTM Dashboard

Follow the steps in [implementation-guide.md](./implementation-guide.md) to:

1. Create triggers
2. Create tags
3. Test in preview mode
4. Publish container

---

## 🔍 Post-Deployment Testing

### Test Checklist

| Test | How to Verify | Expected Result |
|------|---------------|-----------------|
| **GTM Loaded** | Check Network tab for `gtm.js` | Status 200 |
| **DataLayer Exists** | Console: `window.dataLayer` | Array with data |
| **Page View** | Navigate between pages | Event fires each time |
| **Form Submit** | Submit webinar form | `form_submission` event |
| **CTA Click** | Click any CTA button | `cta_click` event |
| **Scroll Depth** | Scroll to 75% | `scroll_depth` event |

### Verify in GA4

1. Go to Google Analytics 4
2. Open **Reports** → **Realtime**
3. Visit your site
4. Verify events appear in real-time

---

## 🐛 Troubleshooting

### Issue: GTM Not Loading

**Symptoms:**
- No `[GTM] Initialized` in console
- No GTM network requests
- No dataLayer

**Solutions:**
1. Check environment variables in Vercel:
   ```bash
   vercel env ls
   ```
2. Verify `VITE_GTM_WEB_ID` is set
3. Redeploy:
   ```bash
   vercel --prod --force
   ```

---

### Issue: Environment Variables Not Working

**Symptoms:**
- `import.meta.env.VITE_GTM_WEB_ID` is undefined
- GTM shows "Container ID not configured"

**Solutions:**
1. **Important:** All Vite env vars must start with `VITE_`
2. Restart dev server after adding env vars
3. Clear Vercel build cache:
   - Dashboard → Project Settings → Build & Development
   - Clear build cache
   - Redeploy

---

### Issue: Events Not Tracking

**Symptoms:**
- GTM loads but events don't fire
- DataLayer pushes not working

**Solutions:**
1. Check GTM Preview mode for errors
2. Verify trigger configuration in GTM
3. Check browser console for errors
4. Test locally with `VITE_GTM_DEBUG=true`

---

### Issue: Different Behavior in Preview vs Production

**Symptoms:**
- Works in preview but not production
- Works locally but not on Vercel

**Solutions:**
1. Check environment-specific variables
2. Verify ad blockers are disabled
3. Check CSP headers (if configured)
4. Review Vercel deployment logs

---

## 🔐 Security Best Practices

### Environment Variables

✅ **DO:**
- Store GTM IDs in environment variables
- Use different containers for dev/prod (optional)
- Keep `.env.local` in `.gitignore`

❌ **DON'T:**
- Commit `.env.local` to git
- Hardcode sensitive IDs
- Share environment variables publicly

### Privacy Compliance

1. **LGPD/GDPR Compliance:**
   - Implement consent banner (code is ready)
   - Use GTM Consent Mode v2
   - Respect user privacy choices

2. **Data Minimization:**
   - Only track necessary data
   - Don't send PII to GTM (emails, phones)
   - Use user IDs instead of names

---

## 📊 Monitoring

### Set Up Alerts

1. **GTM Alerts:**
   - Go to GTM Admin → Alerts
   - Set up error notifications
   - Monitor container changes

2. **Vercel Monitoring:**
   - Enable Vercel Analytics
   - Monitor page load times
   - Check error rates

3. **GA4 Alerts:**
   - Set up custom alerts for:
     - Sudden traffic drops
     - Conversion rate changes
     - Error event spikes

---

## 🔄 Update Process

### Updating GTM Configuration

**Good News:** Most changes can be made in GTM dashboard without redeploying!

1. Make changes in GTM
2. Test in Preview mode
3. Click **Submit** to publish
4. Changes are live immediately

### When You Need to Redeploy

Only redeploy code when:
- Changing environment variables
- Updating tracking logic
- Adding new event types
- Modifying dataLayer structure

---

## 📈 Performance Impact

### GTM Load Time

- **First Load:** ~50-80ms (async, non-blocking)
- **Impact on LCP:** Minimal (< 0.1s)
- **Impact on FID:** None (async loading)

### Optimization Tips

1. **Use Tag Sequencing**
   - Load critical tags first
   - Defer non-critical tags

2. **Minimize Custom HTML**
   - Use built-in tags when possible
   - Optimize custom code

3. **Monitor Performance**
   - Use Vercel Analytics
   - Check Core Web Vitals
   - Test on mobile devices

---

## 🎯 Success Metrics

After deployment, monitor these KPIs:

| Metric | Target | Frequency |
|--------|--------|-----------|
| **Page Views** | Increasing | Daily |
| **Webinar Registrations** | > 10/day | Daily |
| **Form Submissions** | > 20/day | Daily |
| **Avg Session Duration** | > 2 minutes | Weekly |
| **Bounce Rate** | < 60% | Weekly |
| **Conversion Rate** | > 3% | Weekly |

---

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [GTM Implementation Guide](./implementation-guide.md)

---

## 🆘 Support

### Getting Help

1. **Check Documentation:**
   - [README.md](./README.md)
   - [events-catalog.md](./events-catalog.md)
   - [implementation-guide.md](./implementation-guide.md)

2. **Debug Locally:**
   - Set `VITE_GTM_DEBUG=true`
   - Check browser console
   - Use GTM Preview mode

3. **Contact Team:**
   - Development team for code issues
   - Marketing team for GTM configuration
   - DevOps for Vercel issues

---

## ✅ Final Checklist

Before marking deployment as complete:

- [ ] Environment variables added to Vercel
- [ ] Code deployed to production
- [ ] GTM container published
- [ ] Events tested in production
- [ ] GA4 receiving data
- [ ] No console errors
- [ ] Team notified of deployment
- [ ] Documentation updated

---

**Deployment Date:** 2025-10-15
**Deployed By:** Development Team
**GTM Container:** GTM-58XSC997
**Production URL:** https://aidebrasil.com.br
**Status:** ✅ Ready for Production
