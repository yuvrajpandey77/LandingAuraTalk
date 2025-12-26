# Layout System Documentation

## Overview

This document defines the single source of truth for horizontal spacing, container widths, and vertical alignment across all page components.

## Core Principle

**All content must align to the same vertical grid.** The header's left edge must align exactly with:
- Page titles
- Section headings  
- Card grids
- All content containers

## Layout Container

### Import
```tsx
import { Container, SECTION_SPACING } from "@/lib/layout"
```

### Container Component
The `Container` component provides:
- `max-w-7xl` - Maximum content width
- `mx-auto` - Horizontal centering
- `px-4 md:px-8` - Responsive horizontal padding

**This is the ONLY way to add horizontal padding to content sections.**

### Standard Section Spacing
```tsx
const SECTION_SPACING = "py-16 md:py-24"
```

Use this constant for consistent vertical spacing between sections.

## Component Patterns

### Standard Content Section
```tsx
export default function MySection() {
  return (
    <section className={`${SECTION_SPACING} bg-white`}>
      <Container>
        {/* Your content here */}
      </Container>
    </section>
  )
}
```

**Rules:**
- Section wrapper: NO horizontal padding (`px-*`)
- Section wrapper: Use `SECTION_SPACING` for vertical spacing
- Content: Wrap in `<Container>` component

### Full-Bleed Sections (Hero, Carousels)
```tsx
export default function HeroSection() {
  return (
    <section className="relative pt-2 pb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Full-bleed visual container */}
        <div className="rounded-3xl overflow-hidden">
          {/* Content */}
        </div>
      </div>
    </section>
  )
}
```

**Rules:**
- Section wrapper: NO padding
- Inner container: Use Container pattern for content alignment
- Visual elements can break out within the container

## Before/After Examples

### ❌ Before (Incorrect)
```tsx
<section className="py-16 md:py-24 px-4 md:px-8 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Double padding! */}
  </div>
</section>
```

### ✅ After (Correct)
```tsx
<section className={`${SECTION_SPACING} bg-white`}>
  <Container>
    {/* Single source of padding */}
  </Container>
</section>
```

## Component Checklist

When creating a new section component:

- [ ] Section wrapper has NO `px-*` classes
- [ ] Section wrapper uses `SECTION_SPACING` constant
- [ ] Content is wrapped in `<Container>` component
- [ ] No nested `max-w-*` or `mx-auto` inside Container
- [ ] Header alignment matches content alignment

## Edge Cases

### Full-Width Backgrounds
If you need a full-width background but aligned content:
```tsx
<section className={`${SECTION_SPACING} bg-gray-50`}>
  <Container>
    {/* Content aligns with header */}
  </Container>
</section>
```

### Nested Layouts
For dashboards or complex nested layouts, use Container at the appropriate level:
```tsx
<section className={`${SECTION_SPACING} bg-white`}>
  <Container>
    <div className="grid grid-cols-2 gap-8">
      {/* Nested content */}
    </div>
  </Container>
</section>
```

## Current Implementation Status

✅ **Refactored Components:**
- Header
- ServicesSection
- DashboardSection
- TechnologySection
- Footer
- MedicationVisual

✅ **Special Cases:**
- HeroSection (full-bleed with rounded corners)

## Rules Summary

1. **Never add `px-*` to section wrappers** - Use Container instead
2. **Never duplicate `max-w-7xl mx-auto`** - Use Container component
3. **Always use `SECTION_SPACING`** for vertical spacing
4. **Header and content must align** - Same Container pattern
5. **Prefer deletion over addition** - Remove duplicate padding/margins

## Testing Alignment

To verify alignment:
1. Header logo/text left edge
2. Section heading left edge
3. Card grid left edge
4. Footer content left edge

All should align on the same vertical line.

