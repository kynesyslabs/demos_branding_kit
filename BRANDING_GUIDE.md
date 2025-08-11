# DEMOS Network Branding Guide

Complete guide for implementing DEMOS branding in your project.

## 🚀 Quick Start

### 1. Copy Assets
```bash
cp -r branding_kit/assets/fonts/* your-project/public/fonts/
cp -r branding_kit/assets/logos/* your-project/public/logos/
cp branding_kit/brand-template.css your-project/src/styles/
```

### 2. Import CSS
```css
@import url('./brand-template.css');
```

### 3. Add Logo
```html
<img src="/logos/Logo DEMOS White.svg" alt="DEMOS Network" height="32" />
```

## 🎨 Brand Essentials

### Colors
```css
/* Dark Theme (Primary) */
--background: #000;
--background2: #141414; 
--background3: #303030;
--color: #fff;
--color2: #f8f8ff;
--color3: #cfcfcf;
--color4: #a8acaf;
--error: #b8294d;
--success: #00b894;

/* Light Theme */
--background: #fff;
--background2: #f5f5f5;
--background3: #d9d9d9; 
--color: #000;
--color2: #00000e;
--color3: #303030;
--color4: #505357;
--error: #e8839c;
--success: #00b894;
```

### Fonts
```css
font-family: FiraCode, monospace;        /* Primary (technical) */
font-family: Inter, sans-serif;          /* UI elements */
font-family: NeueMachina, sans-serif;    /* Display/headers */
```

### Logos
| File | Usage |
|------|--------|
| `Logo DEMOS White.svg` | Primary logo for headers |
| `LOGOMorph.svg` | Alternative variant |
| `logo.jpg` | Legacy raster fallback |

## 🧩 Component Examples

### Header
```html
<header style="background: var(--background2); padding: 16px; border-bottom: 1px solid var(--background3);">
    <img src="/logos/Logo DEMOS White.svg" alt="DEMOS" height="32" />
</header>
```

### Card
```html
<div class="grid-card" style="padding: 24px;">
    <h3 style="color: var(--color); font-family: Inter, sans-serif; margin: 0 0 16px 0;">
        Card Title
    </h3>
    <p style="color: var(--color3); font-family: FiraCode, monospace; margin: 0;">
        Content goes here
    </p>
</div>
```

### Status Messages
```html
<!-- Success -->
<div style="color: var(--success); background: rgba(0, 184, 148, 0.1); border: 1px solid rgba(0, 184, 148, 0.2); padding: 12px; border-radius: 8px;">
    ✅ Transaction successful
</div>

<!-- Error -->  
<div style="color: var(--error); background: rgba(184, 41, 77, 0.1); border: 1px solid rgba(184, 41, 77, 0.2); padding: 12px; border-radius: 8px;">
    ❌ Transaction failed
</div>
```

## 📱 Complete Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEMOS Network</title>
    <link rel="stylesheet" href="brand-template.css">
    <link rel="icon" href="/logos/Logo DEMOS White.svg">
</head>
<body>
    <!-- Header -->
    <header style="background: var(--background2); padding: 16px; border-bottom: 1px solid var(--background3);">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <img src="/logos/Logo DEMOS White.svg" alt="DEMOS" height="32" />
            <nav style="display: flex; gap: 24px; align-items: center;">
                <a href="#" style="color: var(--color3); text-decoration: none; font-family: Inter, sans-serif;">
                    Explorer
                </a>
                <a href="#" style="color: var(--color3); text-decoration: none; font-family: Inter, sans-serif;">
                    Docs
                </a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main style="max-width: 1200px; margin: 0 auto; padding: 48px 16px;">
        <!-- Hero Section -->
        <section style="text-align: center; margin-bottom: 64px;">
            <h1 style="font-family: NeueMachina, sans-serif; font-size: 48px; color: var(--color); margin: 0 0 16px 0;">
                DEMOS Network
            </h1>
            <p style="font-family: Inter, sans-serif; font-size: 20px; color: var(--color3); max-width: 600px; margin: 0 auto;">
                Cross-chain decentralized network protocol
            </p>
        </section>

        <!-- Content Cards -->
        <section style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            <div class="grid-card" style="padding: 24px;">
                <h3 style="font-family: Inter, sans-serif; color: var(--color); margin: 0 0 16px 0;">
                    Cross-Chain
                </h3>
                <p style="font-family: FiraCode, monospace; color: var(--color3); margin: 0; font-size: 14px;">
                    Unified protocol across multiple blockchain networks
                </p>
            </div>
            
            <div class="grid-card" style="padding: 24px;">
                <h3 style="font-family: Inter, sans-serif; color: var(--color); margin: 0 0 16px 0;">
                    Decentralized
                </h3>
                <p style="font-family: FiraCode, monospace; color: var(--color3); margin: 0; font-size: 14px;">
                    No single point of failure or control
                </p>
            </div>
            
            <div class="grid-card" style="padding: 24px;">
                <h3 style="font-family: Inter, sans-serif; color: var(--color); margin: 0 0 16px 0;">
                    Developer Ready
                </h3>
                <p style="font-family: FiraCode, monospace; color: var(--color3); margin: 0; font-size: 14px;">
                    SDKs and APIs for easy integration
                </p>
            </div>
        </section>
    </main>
</body>
</html>
```

## 🎯 Logo Usage Guidelines  

### ✅ Do
- Use white logo on dark backgrounds
- Maintain aspect ratio
- Provide meaningful alt text
- Use appropriate sizes (header: 32px, hero: 64px)

### ❌ Don't  
- Stretch or distort logo
- Use on low-contrast backgrounds
- Make too small (< 20px height)
- Modify colors (unless using CSS variables)

## 📐 Responsive Design

### Breakpoints
```css
@media (width <= 767px)  { /* Mobile */ }
@media (width <= 991px)  { /* Tablet */ }  
@media (width <= 1199px) { /* Small desktop */ }
@media (width <= 1399px) { /* Large desktop */ }
```

### Mobile Optimizations
```css
@media (width <= 767px) {
    .grid-card {
        padding: 16px;
        margin: 12px 0;
    }
    
    h1 {
        font-size: 36px !important;
    }
}
```

## 📁 Asset Reference

### Font Files
- **FiraCode** - Variable font (100-1000 weight) + 5 static weights
- **Inter** - Variable font with slant + 9 static weights  
- **NeueMachina** - Light, Regular, Ultrabold (.otf format)
- **Source Code Pro** - Variable + 16 static weights (alternative)
- **HelveticaNeue** - Bold, Light (legacy fonts)

### Logo Files
- `Logo DEMOS White.svg` - Primary white logo
- `LOGOMorph.svg` - Alternative morphing variant
- `logo.jpg` - Legacy raster version

### CSS Files
- `brand-template.css` - Complete ready-to-use template
- `assets/css/reference.css` - Reference implementation

## 🛠️ Theme Switching

### Dark/Light Mode
```css
/* Automatic based on system preference */
@media (prefers-color-scheme: dark) { /* dark styles */ }
@media (prefers-color-scheme: light) { /* light styles */ }

/* Manual override */
[data-theme="dark"] { /* force dark */ }
[data-theme="light"] { /* force light */ }
```

### JavaScript Theme Toggle
```javascript
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

// Load saved theme
const saved = localStorage.getItem('theme');
if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
}
```

---

**External Logo Reference**: https://framerusercontent.com/images/2cIZEBPOR2y8yWGFIdSIKSJsY.svg