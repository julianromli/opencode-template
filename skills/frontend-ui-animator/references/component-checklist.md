# Component Animation Checklist

Use this template to audit and plan animations for a project.

---

## Project Analysis Template

### 1. Project Structure Scan

```bash
# Pages to analyze
app/
├── page.tsx              # Homepage
├── about/page.tsx        # About page
├── services/page.tsx     # Services page
└── contact/page.tsx      # Contact page

# Components to analyze
components/
├── ui/                   # Base UI components
├── sections/             # Page sections
└── layout/               # Layout components
```

### 2. Technical Setup Check

| Item | Status | Notes |
|------|--------|-------|
| Tailwind config has keyframes | ☐ | Check `theme.extend.keyframes` |
| Tailwind config has animations | ☐ | Check `theme.extend.animation` |
| Framer Motion installed | ☐ | Check `package.json` |
| GSAP installed | ☐ | Check `package.json` |
| Reduced motion CSS exists | ☐ | Check `globals.css` |

---

## Animation Audit Table

### Priority 1: Hero / First Impression

| Component | Current State | Proposed Animation | Trigger | Effort |
|-----------|--------------|-------------------|---------|--------|
| Hero heading | Static | Fade + slide up, word-by-word | Load | Low |
| Hero subtext | Static | Fade in with delay | Load | Low |
| Hero CTA button | Static | Fade in + hover lift | Load/Hover | Low |
| Hero image | Static | Scale in or ken burns | Load | Medium |
| Hero background | Static | Gradient shift or parallax | Load/Scroll | Medium |

### Priority 2: Hover Interactions

| Component | Current State | Proposed Animation | Trigger | Effort |
|-----------|--------------|-------------------|---------|--------|
| Navigation links | Basic hover | Underline slide or color | Hover | Low |
| Buttons (all) | Basic hover | Lift + shadow | Hover | Low |
| Cards | Basic hover | Scale + shadow | Hover | Low |
| Images in cards | Static | Zoom on parent hover | Hover | Low |
| Social icons | Basic hover | Scale + color | Hover | Low |

### Priority 3: Content Reveal (Scroll)

| Component | Current State | Proposed Animation | Trigger | Effort |
|-----------|--------------|-------------------|---------|--------|
| Section headings | Static | Fade + slide up | Scroll | Medium |
| Feature cards | Static | Staggered fade in | Scroll | Medium |
| Testimonials | Static | Slide in from sides | Scroll | Medium |
| Stats/Numbers | Static | Count up animation | Scroll | High |
| Images | Static | Fade + scale | Scroll | Medium |

### Priority 4: Background / Atmosphere

| Component | Current State | Proposed Animation | Trigger | Effort |
|-----------|--------------|-------------------|---------|--------|
| Page background | Solid color | Gradient mesh | Always | Low |
| Section dividers | Static | Wave or curve | Always | Low |
| Decorative elements | Static | Float | Always | Low |
| Noise/grain overlay | None | Subtle texture | Always | Low |

### Priority 5: Navigation / Transitions

| Component | Current State | Proposed Animation | Trigger | Effort |
|-----------|--------------|-------------------|---------|--------|
| Navbar | Static | Scroll-based blur/shadow | Scroll | Medium |
| Mobile menu | Instant show/hide | Slide in from right | Click | Medium |
| Page transitions | None | Fade or clip reveal | Route change | High |
| Scroll to section | Instant jump | Smooth scroll | Click | Low |

---

## Implementation Phases

### Phase 1: Quick Wins (1-2 hours)

Focus on CSS-only animations that require no new dependencies:

- [ ] Add base keyframes to Tailwind config
- [ ] Add reduced-motion support to globals.css
- [ ] Hero section fade-in animations
- [ ] Button hover effects (all buttons)
- [ ] Card hover effects (scale + shadow)
- [ ] Navbar scroll effect

### Phase 2: Scroll Reveals (2-3 hours)

Add IntersectionObserver-based animations:

- [ ] Create `useScrollReveal` hook
- [ ] Section headings reveal
- [ ] Feature/service cards staggered reveal
- [ ] Testimonials reveal
- [ ] Footer content reveal

### Phase 3: Enhanced Effects (3-4 hours)

More complex animations:

- [ ] Hero text letter/word animation
- [ ] Image zoom on card hover
- [ ] Marquee for logos/partners
- [ ] Flashlight effect on cards (if applicable)
- [ ] Mobile menu slide animation

### Phase 4: Polish (Optional, 2+ hours)

Advanced effects requiring more effort:

- [ ] Page transitions (Framer Motion)
- [ ] Number count-up animations
- [ ] Parallax backgrounds
- [ ] Border beam effects on CTAs
- [ ] Custom cursor effects

---

## Animation Token Reference

Use consistent timing and easing across the project:

| Token | Value | Use Case |
|-------|-------|----------|
| `duration-fast` | 150ms | Micro-interactions, hovers |
| `duration-normal` | 300ms | Standard transitions |
| `duration-slow` | 500ms | Reveals, entrances |
| `duration-slower` | 800ms | Hero animations |
| `ease-out` | cubic-bezier(0, 0, 0.2, 1) | Entrances |
| `ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | Continuous |
| `ease-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy effects |

---

## Quality Checklist

Before marking animation implementation complete:

- [ ] All animations respect `prefers-reduced-motion`
- [ ] No layout shifts (CLS) caused by animations
- [ ] Animations don't block user interaction
- [ ] Stagger delays are reasonable (not too slow)
- [ ] Hover states have appropriate transition duration
- [ ] Mobile performance is acceptable (test on real device)
- [ ] Animations enhance, not distract from content
