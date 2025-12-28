---
description: Implement SEO optimizations for specified pages or entire site
argument-hint: Page path or "all" for entire site
---

# SEO Optimization Command

**Target:** `$ARGUMENTS` (or entire site if not specified)

Please implement comprehensive SEO optimizations for the specified target:

## Technical SEO
- [ ] Add/optimize meta titles and descriptions
- [ ] Implement structured data (JSON-LD schema markup)
- [ ] Create/update robots.txt and sitemap.xml
- [ ] Add Open Graph and Twitter Card meta tags
- [ ] Optimize canonical URLs
- [ ] Implement proper heading hierarchy (H1-H6)

## Performance SEO
- [ ] Optimize Core Web Vitals (LCP, FID, CLS)
- [ ] Implement image lazy loading and optimization
- [ ] Minimize JavaScript and CSS
- [ ] Enable compression and caching
- [ ] Optimize server response times

## Content SEO
- [ ] Optimize content for target keywords
- [ ] Improve internal linking structure
- [ ] Add alt text to all images
- [ ] Ensure mobile responsiveness
- [ ] Implement proper URL structure

## Accessibility (SEO Impact)
- [ ] WCAG 2.1 AA compliance
- [ ] Semantic HTML usage
- [ ] ARIA labels where needed
- [ ] Keyboard navigation support

## 📚 **DOCUMENTATION REQUIREMENTS**

**Create comprehensive SEO documentation at:**
- `docs/tasks/frontend/DD-MM-YYYY/<semantic-seo-id>/`

**Documentation Structure:**
- `README.md` - SEO audit overview and objectives
- `technical-seo-audit.md` - Meta tags, structured data, schema markup
- `performance-analysis.md` - Core Web Vitals, optimization metrics
- `content-optimization.md` - Keyword analysis, content improvements
- `accessibility-review.md` - WCAG compliance and SEO impact
- `implementation-notes.md` - Technical decisions and trade-offs
- `before-after-comparison.md` - SEO score improvements with metrics

**Semantic SEO Task ID Examples:**
- `homepage-meta-optimization`
- `product-page-structured-data`
- `blog-content-seo-enhancement`
- `core-web-vitals-optimization`
- `semantic-html-seo-improvement`

Please analyze the current state, implement missing optimizations, and document all changes according to the standards above.