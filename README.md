# AI Data Engineering Brasil Website

A modern, responsive website for the first Brazilian community dedicated to the convergence of Data Engineering and Generative Artificial Intelligence (GenAI).

## 🌟 Overview

This website serves as the digital hub for the AI Data Engineering Brasil community, featuring:

- **Ask Gen**: AI assistant specialized in Data Engineering
- **Ask Gen Onyx**: Proactive AI intelligence for career acceleration
- **Community Features**: Discord integration and member engagement
- **Market Insights**: Data-driven statistics and industry trends
- **Interactive Demos**: Real-time AI demonstrations

## 🎨 Design Features

### Typography
- **Primary Font**: Oswald (weights 200-700) for consistent branding
- **Fallback Fonts**: System fonts for optimal performance
- **Font Hierarchy**: Structured typography with CSS classes

### Visual Elements
- **3D Onyx Orb**: Animated silver orb with holographic effects
- **Gradient Backgrounds**: Dynamic color schemes per section
- **Discord Interface**: Authentic chat interface styling
- **Responsive Design**: Mobile-first approach with desktop optimization

### Sections
1. **Hero Section**: Community introduction with animated elements
2. **About Section**: Four key value propositions with icons
3. **Ask Gen Section**: Discord-style chat demonstration
4. **Onyx Section**: 3D orb showcase with proactive features
5. **Demo Section**: Interactive Onyx intelligence demonstration
6. **Numbers Section**: Market statistics and growth data
7. **Benefits Section**: User profiles and success stories
8. **CTA Section**: Pricing and community access

## 🛠 Technical Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation and interaction library
- **Lucide React**: Modern icon library

### Styling
- **CSS Custom Properties**: Dynamic theming support
- **Responsive Design**: Mobile-first breakpoints
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Animations**: Smooth transitions and effects

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser compatibility

## 📁 Project Structure

```
aide-brasil-final/
├── public/
│   ├── favicon.ico
│   ├── favicon.png
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── ask-gen-icon.png
│   │   └── react.svg
│   ├── components/
│   │   └── ui/
│   │       ├── accordion.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       └── [other UI components]
│   ├── hooks/
│   │   └── use-mobile.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── components.json
├── eslint.config.js
├── jsconfig.json
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/owshq-manus-ai/aide-brasil-website.git
   cd aide-brasil-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
# or
pnpm build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
pnpm preview
```

## 🎯 Key Features

### Font Consistency
- **Oswald Font**: Applied consistently across all sections
- **CSS Classes**: Structured typography system
  - `.section-title`: Main section headings
  - `.section-subtitle`: Section subheadings
  - `.section-description`: Body text
  - `.discord-username`: Discord interface styling
  - `.discord-text`: Discord message text
  - `.font-roboto`: Button and UI elements

### Interactive Elements
- **3D Onyx Orb**: Rotating silver orb with particle effects
- **Discord Chat**: Real-time conversation simulation
- **Proactive Demo**: Interactive AI intelligence showcase
- **Smooth Animations**: Framer Motion powered transitions

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Intermediate breakpoints
- **Desktop Enhanced**: Full-featured desktop experience
- **Touch Friendly**: Mobile interaction support

## 📊 Performance Optimizations

### Font Loading
- **Google Fonts**: Optimized loading with `display=swap`
- **Preconnect**: DNS prefetching for faster font loading
- **Font Weights**: Only necessary weights loaded

### Image Optimization
- **WebP Format**: Modern image format support
- **Lazy Loading**: Images loaded on demand
- **Responsive Images**: Multiple sizes for different devices

### Code Splitting
- **Dynamic Imports**: Components loaded as needed
- **Tree Shaking**: Unused code elimination
- **Bundle Optimization**: Minimized JavaScript and CSS

## 🎨 Customization

### Colors
The website uses a sophisticated color palette:
- **Primary**: Blue gradients for Ask Gen
- **Secondary**: Gray/Silver for Onyx
- **Accent**: Purple, Green, Orange for different sections
- **Background**: Dark theme with gradient overlays

### Typography
Font customization in `src/App.css`:
```css
.section-title {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  line-height: 1.1;
}
```

### Animations
Framer Motion configurations in components:
```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 🚀 Deployment

### Static Hosting
The website is optimized for static hosting platforms:
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Continuous deployment support
- **GitHub Pages**: Direct repository hosting
- **Railway**: Full-stack deployment platform

### Build Configuration
Vite configuration in `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

## 🔧 Development

### Code Style
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **Component Structure**: Functional components with hooks

### Best Practices
- **Semantic HTML**: Accessible markup structure
- **CSS Classes**: Utility-first with custom components
- **Performance**: Optimized animations and interactions
- **SEO**: Meta tags and structured content

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Fallbacks**: Graceful degradation for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Oswald Font**: Google Fonts
- **Lucide Icons**: Beautiful icon library
- **Framer Motion**: Smooth animations
- **Tailwind CSS**: Utility-first styling
- **React Community**: Excellent ecosystem

## 📞 Support

For support and questions:
- **Community Discord**: Join our Discord server
- **GitHub Issues**: Report bugs and feature requests
- **Documentation**: Comprehensive guides and tutorials

---

**Built with ❤️ for the AI Data Engineering Brasil community**

