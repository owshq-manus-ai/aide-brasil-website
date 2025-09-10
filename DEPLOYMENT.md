# Deployment Guide - AI Data Engineering Brasil Website

## 🚀 Deployment Process

### Current Setup
- **Repository**: https://github.com/owshq-manus-ai/aide-brasil-website
- **Live Website**: https://aide.manus.space/
- **Platform**: Manus Deployment Platform

## 📋 Deployment Steps

### 1. Development Workflow
```bash
# Clone repository
git clone https://github.com/owshq-manus-ai/aide-brasil-website.git
cd aide-brasil-website

# Install dependencies
npm install

# Start development server
npm run dev

# Access local development
http://localhost:5173
```

### 2. Production Build
```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

### 3. Deploy to Manus Platform
```bash
# Build for production
npm run build

# Deploy using Manus service
# (Automated through platform)
```

## 🔧 Environment Configuration

### Development
- **Port**: 5173
- **Hot Reload**: Enabled
- **Source Maps**: Enabled

### Production
- **Build Output**: `dist/` directory
- **Minification**: Enabled
- **Code Splitting**: Automatic
- **Asset Optimization**: Enabled

## 🌐 Domain Configuration

### Primary Domain
- **Production**: https://aide.manus.space/
- **SSL**: Automatic (Manus Platform)
- **CDN**: Global distribution

### Backup Access
- **Temporary URL**: Available during deployments
- **Development**: http://localhost:5173

## 📊 Performance Metrics

### Build Optimization
- **Bundle Size**: ~500KB (gzipped)
- **Load Time**: < 2 seconds
- **Lighthouse Score**: 90+

### Assets
- **CSS**: ~128KB (minified)
- **JavaScript**: ~377KB (minified)
- **Images**: Optimized for web

## 🔄 CI/CD Pipeline

### Manual Deployment
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Commit and push to GitHub
5. Deploy through Manus platform

### Future Automation
- GitHub Actions integration
- Automatic deployment on push to main
- Preview deployments for PRs

## 🛡️ Security

### Repository Security
- **Organization**: owshq-manus-ai
- **Visibility**: Public
- **Branch Protection**: Recommended for main branch

### Deployment Security
- **HTTPS**: Enforced
- **Environment Variables**: Secure handling
- **Access Control**: Organization-level

## 📝 Deployment Checklist

### Pre-Deployment
- [ ] Code review completed
- [ ] Local testing passed
- [ ] Build successful (`npm run build`)
- [ ] No console errors
- [ ] Responsive design verified

### Post-Deployment
- [ ] Website accessible at https://aide.manus.space/
- [ ] All sections loading correctly
- [ ] Navigation working
- [ ] Mobile responsiveness confirmed
- [ ] Performance metrics acceptable

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Deployment Issues
- Check Manus platform status
- Verify build output in `dist/` directory
- Ensure all assets are included

#### Performance Issues
- Optimize images
- Check bundle size
- Review network requests

## 📞 Support

### Technical Issues
- **Repository**: https://github.com/owshq-manus-ai/aide-brasil-website/issues
- **Platform**: Manus support channels

### Team Contacts
- **Development**: Manus AI Team
- **Organization**: owshq-manus-ai

## 🔮 Future Enhancements

### Planned Improvements
- Automated CI/CD pipeline
- Preview deployments
- Performance monitoring
- A/B testing capabilities
- Analytics integration

### Infrastructure
- Custom domain options
- Multi-environment setup
- Backup and recovery procedures

---

**Last Updated**: September 2025
**Version**: 1.0.0

