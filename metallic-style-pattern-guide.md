# Metallic Style Pattern Guide - AI Data Engineering Brasil

## 🎨 Overview
This document outlines the consistent metallic styling pattern applied across all section headers, inspired by the Ask Gen Onyx section's sleek, professional aesthetic.

## ✨ Key Visual Elements

### **Metallic Effect Components**
1. **Animated Gradient Text**: Moving gradient backgrounds with shimmer effect
2. **Text Shadows**: Glowing effects with color-matched shadows
3. **Drop Shadows**: Enhanced depth with filter effects
4. **Uppercase Labels**: Subtle gray labels above main titles
5. **Color-Coded Sections**: Each section has its unique metallic color theme

## 🎯 Pattern Structure

### **Standard Header Pattern**
```jsx
<motion.div className="mb-16">
  {/* Uppercase Label */}
  <motion.div className="mb-6">
    <span className="text-lg text-gray-400 font-medium tracking-wider uppercase">
      [Section Label]
    </span>
  </motion.div>
  
  {/* Main Title with Metallic Effect */}
  <h2 className="text-4xl md:text-6xl font-bold mb-6 section-title">
    <motion.span
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="bg-clip-text text-transparent bg-gradient-to-r [color-gradient]"
      style={{
        backgroundSize: '200% 200%',
        textShadow: '0 0 30px [shadow-color]',
        filter: 'drop-shadow(0 0 10px [glow-color])'
      }}
    >
      [Animated Text]
    </motion.span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r [static-gradient]">
      [Static Text]
    </span>
  </h2>
  
  {/* Subtitle */}
  <motion.p className="text-xl md:text-2xl font-light mb-8 text-white/90 leading-relaxed">
    [Subtitle with highlighted keywords]
  </motion.p>
</motion.div>
```

## 🌈 Color Themes by Section

### **1. About Section (Green Theme)**
```css
/* Animated gradient */
from-green-300 via-emerald-200 to-green-400

/* Text shadow */
textShadow: '0 0 30px rgba(34, 197, 94, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))'

/* Keywords */
.text-green-300 /* "Dados" */
.text-blue-300  /* "GenAI" */
```

### **2. Ask Gen Section (Cyan Theme)**
```css
/* Animated gradient */
from-cyan-200 via-white to-blue-300

/* Text shadow */
textShadow: '0 0 30px rgba(6, 182, 212, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))'

/* Keywords */
.text-cyan-300 /* "AI Data Engineering" */
```

### **3. Ask Gen Onyx Section (Silver Theme)**
```css
/* Animated gradient */
from-gray-200 via-white to-gray-300

/* Text shadow */
textShadow: '0 0 30px rgba(255, 255, 255, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(156, 163, 175, 0.8))'

/* Keywords */
.text-gray-300 /* "Inteligência Artificial" */
```

### **4. Numbers Section (Orange Theme)**
```css
/* Animated gradient */
from-orange-200 via-white to-red-300

/* Text shadow */
textShadow: '0 0 30px rgba(249, 115, 22, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.8))'

/* Keywords */
.text-orange-300 /* "crescimento exponencial" */
```

### **5. Benefits Section (Purple Theme)**
```css
/* Animated gradient */
from-purple-200 via-white to-pink-300

/* Text shadow */
textShadow: '0 0 30px rgba(147, 51, 234, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(147, 51, 234, 0.8))'

/* Keywords */
.text-purple-300 /* "iniciante" */
.text-pink-300   /* "profissional experiente" */
.text-violet-300 /* "empresa" */
```

### **6. CTA Section (Rose Theme)**
```css
/* Animated gradient */
from-rose-200 via-white to-orange-300

/* Text shadow */
textShadow: '0 0 30px rgba(244, 63, 94, 0.5)'

/* Drop shadow */
filter: 'drop-shadow(0 0 10px rgba(244, 63, 94, 0.8))'

/* Keywords */
.text-rose-300   /* "Dados" */
.text-orange-300 /* "Agora" */
```

## 🎭 Animation Details

### **Background Position Animation**
```jsx
animate={{
  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
}}
transition={{
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut"
}}
```

### **Staggered Animations**
- **Label**: `delay: 0.2`
- **Title**: `delay: 0` (immediate)
- **Subtitle**: `delay: 0.4`

### **Background Size**
```css
backgroundSize: '200% 200%'
```
This creates the moving gradient effect by allowing the gradient to be larger than the text.

## 🔧 Implementation Examples

### **Reusable Component Pattern**
```jsx
const MetallicHeader = ({ 
  label, 
  title, 
  animatedText, 
  staticText, 
  subtitle, 
  theme 
}) => (
  <motion.div className="mb-16">
    <motion.div className="mb-6">
      <span className="text-lg text-gray-400 font-medium tracking-wider uppercase">
        {label}
      </span>
    </motion.div>
    
    <h2 className="text-4xl md:text-6xl font-bold mb-6 section-title">
      <motion.span
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`bg-clip-text text-transparent ${theme.animatedGradient}`}
        style={{
          backgroundSize: '200% 200%',
          textShadow: theme.textShadow,
          filter: theme.dropShadow
        }}
      >
        {animatedText}
      </motion.span>
      <span className={`bg-clip-text text-transparent ${theme.staticGradient}`}>
        {staticText}
      </span>
    </h2>
    
    <motion.p className="text-xl md:text-2xl font-light mb-8 text-white/90 leading-relaxed">
      {subtitle}
    </motion.p>
  </motion.div>
);
```

### **Theme Configuration**
```javascript
const themes = {
  green: {
    animatedGradient: 'bg-gradient-to-r from-green-300 via-emerald-200 to-green-400',
    staticGradient: 'bg-gradient-to-r from-green-300 to-emerald-300',
    textShadow: '0 0 30px rgba(34, 197, 94, 0.5)',
    dropShadow: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))'
  },
  cyan: {
    animatedGradient: 'bg-gradient-to-r from-cyan-200 via-white to-blue-300',
    staticGradient: 'bg-gradient-to-r from-cyan-300 to-blue-300',
    textShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
    dropShadow: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))'
  },
  // ... other themes
};
```

## 🎨 Visual Hierarchy

### **Typography Scale**
- **Main Title**: 4xl-6xl (responsive)
- **Subtitle**: xl-2xl (responsive)
- **Label**: lg (fixed)

### **Spacing**
- **Label to Title**: `mb-6`
- **Title to Subtitle**: `mb-6`
- **Subtitle to Content**: `mb-8`
- **Section Bottom**: `mb-16`

### **Font Weights**
- **Label**: `font-medium`
- **Title**: `font-bold`
- **Subtitle**: `font-light`

## 🚀 Benefits of This Pattern

### **Visual Consistency**
✅ **Unified Look**: All sections follow the same structure
✅ **Brand Identity**: Consistent metallic, professional aesthetic
✅ **Color Coding**: Each section has its unique identity while maintaining harmony

### **User Experience**
✅ **Visual Hierarchy**: Clear information structure
✅ **Smooth Animations**: Engaging but not distracting
✅ **Accessibility**: High contrast and readable text

### **Development Benefits**
✅ **Reusable Pattern**: Easy to apply to new sections
✅ **Maintainable**: Centralized styling approach
✅ **Scalable**: Works for thumbnails, posts, announcements

## 📱 Responsive Behavior

### **Mobile (320px-768px)**
- Titles scale down to `text-4xl`
- Subtitles scale down to `text-xl`
- Animations remain smooth
- Touch-friendly spacing

### **Desktop (1024px+)**
- Full `text-6xl` titles
- `text-2xl` subtitles
- Enhanced glow effects
- Optimal spacing

## 🎯 Usage for Other Content

### **Thumbnails**
- Use smaller scale versions
- Maintain color themes
- Simplified animations

### **Announcements**
- Apply same gradient patterns
- Use appropriate theme colors
- Consistent typography

### **Posts**
- Header follows same pattern
- Content maintains visual hierarchy
- Theme-appropriate styling

This metallic pattern creates a cohesive, professional, and modern visual identity that can be consistently applied across all content types while maintaining the sleek aesthetic established by the Ask Gen Onyx section.

