# Custom Domain Setup for aide-brasil.ai

## 🌐 Domain Configuration

Your custom domain `aide-brasil.ai` needs to be configured in two places:
1. **Vercel Dashboard** (add domain to project)
2. **DNS Provider** (point domain to Vercel)

## 📋 Step-by-Step Setup

### 1. Add Domain in Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: `aide-brasil-website`
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter: `aide-brasil.ai`
6. Click **Add**

### 2. Configure DNS Records

Add these records at your DNS provider (where you bought the domain):

#### For Root Domain (aide-brasil.ai)
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |

#### For WWW Subdomain (www.aide-brasil.ai)
| Type | Name | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |

### 3. Alternative Setup (Vercel Nameservers)

If you want Vercel to handle all DNS:

Change your nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

## 🔍 Verify Configuration

### Check DNS Propagation
```bash
# Check A record
nslookup aide-brasil.ai

# Check CNAME
nslookup www.aide-brasil.ai
```

### Test in Browser
- https://aide-brasil.ai
- https://www.aide-brasil.ai

## ⚙️ SSL Certificate

Vercel automatically provisions SSL certificates once DNS is configured correctly.

## 🚨 Common Issues

### Domain Not Working
- **Wait 24-48 hours** for DNS propagation
- Clear browser cache
- Check DNS records are exactly as shown above

### SSL Certificate Error
- Wait up to 24 hours after DNS setup
- Ensure domain is verified in Vercel

### Redirect Issues
Vercel automatically handles:
- HTTP → HTTPS redirect
- www → non-www redirect (or vice versa based on your preference)

## 📝 Configuration Files

The domain is already configured in:
- `vercel.json` - Domain aliases set
- `.env.example` - Updated with new domain

## 🔄 Update References

After domain is active, update:
1. README.md - Change production URL
2. package.json - Update homepage field if present
3. Any hardcoded URLs in the codebase

## 💡 Pro Tips

1. **Use Vercel DNS** for easiest setup
2. **Keep both domains** - aide-brasil-website.vercel.app as backup
3. **Monitor uptime** - Use tools like UptimeRobot
4. **Set up redirects** - From old domain if needed

## 📞 Support

- **Vercel Support**: https://vercel.com/support
- **DNS Help**: Check with your domain registrar
- **Project Issues**: GitHub Issues

---

Once configured, your site will be available at:
- 🌐 **Primary**: https://aide-brasil.ai
- 🌐 **WWW**: https://www.aide-brasil.ai
- 🌐 **Backup**: https://aide-brasil-website.vercel.app