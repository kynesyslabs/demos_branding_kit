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

### Colors (Copy-Paste)
```css
/* Dark Theme (Primary) */
--background: #000;
--background2: #141414; 
--background3: #303030;
--color: #FFF;
--color2: #F8F8FF;
--error: #b8294d;
--success: #00b894;

/* Light Theme */
--background: #FFF;
--background2: #f5f5f5;
--background3: #d9d9d9; 
--color: #000;
--color2: #00000e;
--error: #e8839c;
--success: #00b894;
```

### Fonts (Copy-Paste)
```css
font-family: FiraCode, monospace;        /* Technical/Code */
font-family: Inter, sans-serif;          /* Modern UI */
font-family: NeueMachina, sans-serif;    /* Display/Headers */
```

### Logos
| File | Usage |
|------|--------|
| `Logo DEMOS White.svg` | Headers, main logo |
| `demos-logo-white.svg` | Hero sections, large displays |
| `demos-icon.svg` | Favicons, small spaces |

## 🧩 Component Examples

### Header
```html
<header style="background: var(--background2); padding: 16px; border-bottom: 1px solid var(--background3);">
    <img src="/logos/Logo DEMOS White.svg" alt="DEMOS" height="32" />
</header>
```

### Buttons
```html
<!-- Primary -->
<button style="background: var(--color2); color: var(--background); padding: 12px 24px; border-radius: 8px; font-family: Inter, sans-serif;">
    Connect Wallet
</button>

<!-- Secondary -->
<button style="background: var(--background3); color: var(--color); padding: 12px 24px; border-radius: 8px; font-family: Inter, sans-serif;">
    Cancel
</button>
```

### Cards
```html
<div style="background: rgb(255 255 255 / 8%); backdrop-filter: blur(15px); border: 0.5px solid rgb(255 255 255 / 8%); border-radius: 14px; padding: 24px;">
    <h3 style="color: var(--color); font-family: Inter, sans-serif; margin: 0 0 16px 0;">Card Title</h3>
    <p style="color: var(--color3); font-family: FiraCode, monospace;">Content here</p>
</div>
```

### Status Messages
```html
<!-- Success -->
<div style="color: var(--success); background: color-mix(in srgb, var(--success) 10%, transparent); border: 1px solid color-mix(in srgb, var(--success) 20%, transparent); padding: 12px; border-radius: 8px;">
    Transaction successful
</div>

<!-- Error -->  
<div style="color: var(--error); background: color-mix(in srgb, var(--error) 10%, transparent); border: 1px solid color-mix(in srgb, var(--error) 20%, transparent); padding: 12px; border-radius: 8px;">
    Transaction failed
</div>
```

## 📱 Complete Page Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEMOS Network</title>
    <link rel="stylesheet" href="brand-template.css">
    <link rel="icon" type="image/svg+xml" href="/logos/demos-icon.svg">
</head>
<body>
    <!-- Header -->
    <header style="background: var(--background2); padding: 16px; border-bottom: 1px solid var(--background3);">
        <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <img src="/logos/Logo DEMOS White.svg" alt="DEMOS" height="32" />
            <button style="background: var(--color2); color: var(--background); padding: 12px 24px; border-radius: 8px; font-family: Inter, sans-serif;">
                Connect Wallet
            </button>
        </div>
    </header>

    <!-- Main -->
    <main style="max-width: 1200px; margin: 0 auto; padding: 48px 16px; text-align: center;">
        <img src="/logos/demos-logo-white.svg" alt="DEMOS Network" style="height: 64px; margin-bottom: 24px;" />
        <h1 style="font-family: NeueMachina, sans-serif; font-size: 48px; color: var(--color); margin: 0 0 16px 0;">
            Cross-Chain DeFi
        </h1>
        <p style="font-family: Inter, sans-serif; font-size: 20px; color: var(--color3); max-width: 600px; margin: 0 auto;">
            Build cross-chain applications with DEMOS Network's unified protocol.
        </p>
    </main>
</body>
</html>
```

## 🎯 Logo Usage Guidelines  

### ✅ Do
- Use white logo on dark backgrounds
- Maintain aspect ratio
- Provide alt text
- Use appropriate sizes (header: 32px, hero: 64px)

### ❌ Don't  
- Stretch or distort logo
- Use on low-contrast backgrounds
- Make too small (< 20px height)
- Modify colors (unless using CSS variables)

## 📐 Responsive Breakpoints

```css
@media (width <= 767px)  { /* Mobile */ }
@media (width <= 991px)  { /* Tablet */ }  
@media (width <= 1199px) { /* Small desktop */ }
@media (width <= 1399px) { /* Large desktop */ }
```

## 📁 Asset Reference

### Available Logos
- `Logo DEMOS White.svg` - Primary header logo
- `demos-logo-white.svg` - Full wordmark for hero sections
- `demos-icon.svg` - Icon-only for favicons/small spaces
- `LOGOMorph.svg` - Alternative variant
- `aptos.webp` - Aptos chain logo
- `logo.jpg` - Legacy raster fallback

### Available Fonts
- **FiraCode** - Variable font (100-1000 weight) + static weights
- **Inter** - Variable font with slant + 9 static weights  
- **NeueMachina** - Light, Regular, Ultrabold (.otf format)
- **Source Code Pro** - Variable + 16 static weights (alternative monospace)

### CSS References  
- `brand-template.css` - Complete ready-to-use template
- `demoscan-reference.css` - Gold standard implementation
- `frontend-extended.css` - Extended theme system
- `aptos-demo-modern.css` - Modern Tailwind approach

## 🔄 Project Migration

### Priority Projects Needing Updates
1. **demos-faucet** - Replace Space Grotesk with Inter/FiraCode
2. **createpk** - Add complete DEMOS branding
3. **internal_tools** - Implement full brand system
4. **quantum-wallet** - Enhance existing branding

### Migration Steps
1. Copy assets to project
2. Import brand-template.css  
3. Replace fonts in CSS
4. Add DEMOS logo to header
5. Update color variables
6. Test dark/light theme switching

---

**Reference Implementation**: Use `demoscan` project as the gold standard  
**External Logo**: https://framerusercontent.com/images/2cIZEBPOR2y8yWGFIdSIKSJsY.svg