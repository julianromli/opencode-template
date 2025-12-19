# Animation Patterns Reference

Ready-to-use animation patterns for Next.js + Tailwind + React.

---

## 1. Intro / Page Load Animations

### Fade + Slide + Blur In

```css
@keyframes fadeSlideIn {
  from {
    opacity: 0.01;
    transform: translateY(20px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.animate-fade-slide-in {
  animation: fadeSlideIn 0.6s ease-out both;
}
```

### Clip-Path Reveal (Horizontal)

```css
@keyframes clipRevealX {
  from { clip-path: inset(0 100% 0 0); }
  to { clip-path: inset(0 0 0 0); }
}

.animate-clip-reveal {
  animation: clipRevealX 0.8s ease-out both;
}
```

### Clip-Path Reveal (Vertical)

```css
@keyframes clipRevealY {
  from { clip-path: inset(100% 0 0 0); }
  to { clip-path: inset(0 0 0 0); }
}
```

### Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## 2. Button Animations

### Hover Lift + Shadow

```tsx
className="transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg"
```

### Border Beam Effect

```css
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
  background: linear-gradient(90deg, transparent, var(--accent, #d4af37), transparent) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s;
}

.btn-beam:hover::before {
  opacity: 1;
  animation: beamRotate 2s linear infinite;
}

@keyframes beamRotate {
  to { transform: rotate(360deg); }
}
```

### Pulse on Hover

```tsx
className="hover:animate-pulse"
```

### Ripple Effect (Click)

```tsx
const ButtonRipple = ({ children, ...props }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ripple = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: Date.now(),
    };
    setRipples((prev) => [...prev, ripple]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
  };

  return (
    <button onClick={handleClick} className="relative overflow-hidden" {...props}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{ left: ripple.x, top: ripple.y }}
        />
      ))}
    </button>
  );
};
```

```css
@keyframes ripple {
  from {
    width: 0;
    height: 0;
    opacity: 0.5;
    transform: translate(-50%, -50%);
  }
  to {
    width: 200px;
    height: 200px;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}
```

---

## 3. Text Animations

### Letter-by-Letter Reveal

```tsx
const AnimatedText = ({ text, className = '' }) => (
  <span className={cn("inline-flex overflow-hidden", className)}>
    {text.split('').map((char, i) => (
      <span
        key={i}
        className="animate-slide-up"
        style={{ animationDelay: `${i * 50}ms` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))}
  </span>
);
```

```css
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out both;
}
```

### Word-by-Word Reveal

```tsx
const AnimatedHeading = ({ text }) => (
  <h1>
    {text.split(' ').map((word, i) => (
      <span
        key={i}
        className="inline-block animate-fade-slide-in"
        style={{ animationDelay: `${i * 150}ms` }}
      >
        {word}&nbsp;
      </span>
    ))}
  </h1>
);
```

### Typewriter Effect

```tsx
const Typewriter = ({ text, speed = 50 }) => {
  const [displayed, setDisplayed] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayed}<span className="animate-blink">|</span></span>;
};
```

---

## 4. Card Animations

### Hover Scale + Shadow

```tsx
className="transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
```

### Image Zoom on Hover

```tsx
<div className="overflow-hidden rounded-lg">
  <img 
    className="transition-transform duration-500 hover:scale-110"
    src={src}
    alt={alt}
  />
</div>
```

### Flashlight / Spotlight Effect

```tsx
const FlashlightCard = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-xl bg-card"
      style={{
        background: isHovered
          ? `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.06), transparent)`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};
```

### Border Glow on Hover

```css
.card-glow {
  --mouse-x: 50%;
  --mouse-y: 50%;
  position: relative;
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: radial-gradient(
    200px circle at var(--mouse-x) var(--mouse-y),
    rgba(212, 175, 55, 0.4),
    transparent
  );
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}

.card-glow:hover::before {
  opacity: 1;
}
```

---

## 5. Marquee / Infinite Loop

### CSS-Only Marquee

```tsx
const Marquee = ({ children, speed = 30 }) => (
  <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
    <div 
      className="flex gap-8 animate-marquee"
      style={{ animationDuration: `${speed}s` }}
    >
      {children}
      {children} {/* Duplicate for seamless loop */}
    </div>
  </div>
);
```

```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee linear infinite;
}
```

### Pause on Hover

```tsx
className="animate-marquee hover:[animation-play-state:paused]"
```

---

## 6. Scroll-Triggered Animations

### useScrollReveal Hook

```tsx
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
};
```

### ScrollReveal Component

```tsx
const ScrollReveal = ({ 
  children, 
  className = '',
  animation = 'animate-fade-slide-in',
  delay = 0 
}) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        'transition-opacity',
        isVisible ? animation : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
```

### Staggered Children on Scroll

```tsx
const StaggeredReveal = ({ children }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref}>
      {Children.map(children, (child, i) => (
        <div
          className={isVisible ? 'animate-fade-slide-in' : 'opacity-0'}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
```

---

## 7. Background Animations

### Subtle Float

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Ken Burns (Image)

```css
@keyframes kenburns {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.animate-kenburns {
  animation: kenburns 20s ease-out forwards;
}
```

### Gradient Shift

```css
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
}
```

---

## 8. Navigation / Page Transitions

### Navbar Scroll Effect

```tsx
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<nav className={cn(
  "fixed top-0 transition-all duration-300",
  scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
)}>
```

### Mobile Menu Slide

```tsx
<div className={cn(
  "fixed inset-y-0 right-0 w-64 bg-background transform transition-transform duration-300",
  isOpen ? "translate-x-0" : "translate-x-full"
)}>
```

---

## Framer Motion Patterns

### Stagger Container

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

<motion.div variants={container} initial="hidden" animate="show">
  {items.map((i) => (
    <motion.div key={i} variants={item}>{i}</motion.div>
  ))}
</motion.div>
```

### Scroll-Triggered

```tsx
import { motion, useInView } from 'framer-motion';

const ref = useRef(null);
const isInView = useInView(ref, { once: true });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5 }}
/>
```

### Layout Animation

```tsx
<motion.div layout layoutId="unique-id">
  {/* Content that changes size/position */}
</motion.div>
```
