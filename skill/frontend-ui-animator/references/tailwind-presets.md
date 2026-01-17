# Tailwind Animation Presets

Copy-paste ready configurations for `tailwind.config.ts`.

---

## Complete Animation Config

Add to `theme.extend` in your Tailwind config:

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // ... other config
  theme: {
    extend: {
      // ... other extensions
      
      keyframes: {
        // === FADE ANIMATIONS ===
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'fade-slide-in': {
          from: { 
            opacity: '0', 
            transform: 'translateY(20px)',
            filter: 'blur(4px)',
          },
          to: { 
            opacity: '1', 
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        'fade-slide-in-right': {
          from: { 
            opacity: '0', 
            transform: 'translateX(20px)',
          },
          to: { 
            opacity: '1', 
            transform: 'translateX(0)',
          },
        },
        'fade-slide-in-left': {
          from: { 
            opacity: '0', 
            transform: 'translateX(-20px)',
          },
          to: { 
            opacity: '1', 
            transform: 'translateX(0)',
          },
        },

        // === SCALE ANIMATIONS ===
        'scale-in': {
          from: { 
            opacity: '0', 
            transform: 'scale(0.9)',
          },
          to: { 
            opacity: '1', 
            transform: 'scale(1)',
          },
        },
        'scale-out': {
          from: { 
            opacity: '1', 
            transform: 'scale(1)',
          },
          to: { 
            opacity: '0', 
            transform: 'scale(0.9)',
          },
        },

        // === SLIDE ANIMATIONS ===
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'slide-left': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-right': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },

        // === CLIP-PATH REVEALS ===
        'clip-reveal-right': {
          from: { clipPath: 'inset(0 100% 0 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        'clip-reveal-left': {
          from: { clipPath: 'inset(0 0 0 100%)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        'clip-reveal-up': {
          from: { clipPath: 'inset(100% 0 0 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },
        'clip-reveal-down': {
          from: { clipPath: 'inset(0 0 100% 0)' },
          to: { clipPath: 'inset(0 0 0 0)' },
        },

        // === CONTINUOUS ANIMATIONS ===
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },

        // === BACKGROUND ANIMATIONS ===
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'kenburns': {
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(1.1)' },
        },

        // === SPECIAL EFFECTS ===
        'ripple': {
          from: { 
            width: '0', 
            height: '0', 
            opacity: '0.5',
          },
          to: { 
            width: '200px', 
            height: '200px', 
            opacity: '0',
          },
        },
        'beam-rotate': {
          to: { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          from: { backgroundPosition: '-200% 0' },
          to: { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        // === FADE ===
        'fade-in': 'fade-in 0.5s ease-out both',
        'fade-out': 'fade-out 0.3s ease-out both',
        'fade-slide-in': 'fade-slide-in 0.6s ease-out both',
        'fade-slide-in-right': 'fade-slide-in-right 0.5s ease-out both',
        'fade-slide-in-left': 'fade-slide-in-left 0.5s ease-out both',

        // === SCALE ===
        'scale-in': 'scale-in 0.3s ease-out both',
        'scale-out': 'scale-out 0.2s ease-in both',

        // === SLIDE ===
        'slide-up': 'slide-up 0.5s ease-out both',
        'slide-down': 'slide-down 0.5s ease-out both',
        'slide-left': 'slide-left 0.5s ease-out both',
        'slide-right': 'slide-right 0.5s ease-out both',

        // === CLIP REVEAL ===
        'clip-reveal-right': 'clip-reveal-right 0.8s ease-out both',
        'clip-reveal-left': 'clip-reveal-left 0.8s ease-out both',
        'clip-reveal-up': 'clip-reveal-up 0.8s ease-out both',
        'clip-reveal-down': 'clip-reveal-down 0.8s ease-out both',

        // === CONTINUOUS ===
        'marquee': 'marquee 30s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'marquee-slow': 'marquee 45s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'blink': 'blink 1s step-end infinite',

        // === BACKGROUND ===
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'kenburns': 'kenburns 20s ease-out forwards',

        // === SPECIAL ===
        'ripple': 'ripple 0.6s ease-out forwards',
        'beam-rotate': 'beam-rotate 2s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
    },
  },
};

export default config;
```

---

## Global CSS Additions

Add to `globals.css`:

```css
/* === REDUCED MOTION === */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* === UTILITY CLASSES === */

/* Stagger delay utilities */
.stagger-1 { animation-delay: 100ms; }
.stagger-2 { animation-delay: 200ms; }
.stagger-3 { animation-delay: 300ms; }
.stagger-4 { animation-delay: 400ms; }
.stagger-5 { animation-delay: 500ms; }
.stagger-6 { animation-delay: 600ms; }
.stagger-7 { animation-delay: 700ms; }
.stagger-8 { animation-delay: 800ms; }

/* Pause animation on hover (for marquees) */
.hover-pause:hover {
  animation-play-state: paused;
}

/* Marquee mask for fade edges */
.marquee-mask {
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

/* Button beam effect base */
.btn-beam {
  position: relative;
  overflow: hidden;
}

.btn-beam::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: linear-gradient(90deg, transparent, hsl(var(--primary)), transparent) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-beam:hover::before {
  opacity: 1;
  animation: beam-rotate 2s linear infinite;
}

/* Shimmer skeleton effect */
.shimmer {
  background: linear-gradient(
    90deg,
    hsl(var(--muted)) 0%,
    hsl(var(--muted-foreground) / 0.1) 50%,
    hsl(var(--muted)) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
}
```

---

## Minimal Config (Quick Start)

If you need just the essentials:

```ts
keyframes: {
  'fade-slide-in': {
    from: { opacity: '0', transform: 'translateY(20px)' },
    to: { opacity: '1', transform: 'translateY(0)' },
  },
  'scale-in': {
    from: { opacity: '0', transform: 'scale(0.95)' },
    to: { opacity: '1', transform: 'scale(1)' },
  },
  'marquee': {
    from: { transform: 'translateX(0)' },
    to: { transform: 'translateX(-50%)' },
  },
},
animation: {
  'fade-slide-in': 'fade-slide-in 0.5s ease-out both',
  'scale-in': 'scale-in 0.3s ease-out both',
  'marquee': 'marquee 30s linear infinite',
},
```

---

## Usage Examples

### Hero Section

```tsx
<section className="relative">
  <h1 className="animate-fade-slide-in">Welcome</h1>
  <p className="animate-fade-slide-in stagger-1">Subtitle text</p>
  <button className="animate-fade-slide-in stagger-2 hover:-translate-y-0.5 hover:shadow-lg transition-all">
    Get Started
  </button>
</section>
```

### Card Grid with Stagger

```tsx
<div className="grid grid-cols-3 gap-6">
  {cards.map((card, i) => (
    <div
      key={card.id}
      className="animate-fade-slide-in hover:scale-[1.02] hover:shadow-xl transition-all"
      style={{ animationDelay: `${i * 100}ms` }}
    >
      {card.content}
    </div>
  ))}
</div>
```

### Logo Marquee

```tsx
<div className="overflow-hidden marquee-mask">
  <div className="flex gap-8 animate-marquee hover-pause">
    {[...logos, ...logos].map((logo, i) => (
      <img key={i} src={logo} className="h-8 w-auto" />
    ))}
  </div>
</div>
```

### Button with Effects

```tsx
<button className="btn-beam px-6 py-3 rounded-full bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lg transition-all">
  Contact Us
</button>
```
