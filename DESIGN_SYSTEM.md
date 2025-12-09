# Firmis Labs Design System

## Brand Colors

```css
--primary: #0f172a     /* Slate black - main brand color */
--secondary: #78716c   /* Stone - secondary text */
--accent: #0d9488      /* Muted teal - interactive elements */
--background: #fafaf9  /* Off-white - page background */
--foreground: #0f172a  /* Same as primary - text color */
--border: #e2e8f0      /* Light gray - borders */
```

## Typography

**System Font Stack:**
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Type Scale:**
- `--text-xs`: 0.75rem (12px)
- `--text-sm`: 0.875rem (14px)
- `--text-base`: 1rem (16px)
- `--text-lg`: 1.125rem (18px)
- `--text-xl`: 1.25rem (20px)
- `--text-2xl`: 1.5rem (24px)
- `--text-3xl`: 1.875rem (30px)
- `--text-4xl`: 2.25rem (36px)
- `--text-5xl`: 3rem (48px)

**Line Heights:**
- `--leading-tight`: 1.25
- `--leading-snug`: 1.375
- `--leading-normal`: 1.5
- `--leading-relaxed`: 1.625

## Spacing Scale

- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 0.75rem (12px)
- `--spacing-md`: 1rem (16px)
- `--spacing-lg`: 1.5rem (24px)
- `--spacing-xl`: 2rem (32px)
- `--spacing-2xl`: 3rem (48px)
- `--spacing-3xl`: 4rem (64px)

## Border Radius

- `--radius-sm`: 0.25rem (4px)
- `--radius-md`: 0.375rem (6px)
- `--radius-lg`: 0.5rem (8px)

## Shadows

- `--shadow-sm`: 0 1px 2px 0 rgb(0 0 0 / 0.05)
- `--shadow-md`: 0 4px 6px -1px rgb(0 0 0 / 0.1)
- `--shadow-lg`: 0 10px 15px -3px rgb(0 0 0 / 0.1)

## Components

### Header
- **Location:** `/components/Header.tsx`
- **Type:** Server Component
- **Features:**
  - Sticky navigation
  - Logo + wordmark
  - Main navigation links
  - Backdrop blur effect
  - Responsive design

### Footer
- **Location:** `/components/Footer.tsx`
- **Type:** Server Component
- **Features:**
  - Logo + wordmark
  - Navigation links (main + legal)
  - Social media icons (Twitter, GitHub, LinkedIn)
  - Copyright notice
  - Responsive grid layout

## Logo

- **Location:** `/public/logo.svg`
- **Format:** SVG
- **Size:** 180x180px
- **Colors:** #0f172a (primary)
- **Design:** Geometric "F" in frame

## Usage Guidelines

### Brand Voice
- Clean and minimal
- Professional but approachable
- Focus on clarity and precision

### Typography Usage
- Headings: Font weight 600, tight line height
- Body text: Font weight 400, relaxed line height
- Links: Inherit color, transition to accent on hover

### Spacing
- Section padding: `var(--spacing-3xl)` (64px) on mobile, 80px on desktop
- Container max-width: 1200px
- Container padding: 24px on mobile, 32px on desktop

### Accessibility
- All interactive elements have focus states
- Semantic HTML throughout
- ARIA labels on navigation elements
- Alt text on all images

## File Structure

```
/app
  /globals.css          - Design tokens and base styles
  /layout.tsx           - Root layout with Header/Footer

/components
  /Header.tsx           - Main navigation
  /Footer.tsx           - Site footer

/public
  /logo.svg             - Brand logo
```

## Design Inspiration

- Linear (linear.app) - Clean, minimal navigation
- Vercel (vercel.com) - Typography and spacing
- Stripe (stripe.com) - Color palette and borders
