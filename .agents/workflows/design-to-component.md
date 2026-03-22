---
description: Turn a design into a production-ready component
---
# Steps to follow when turning a design into a component
1. Analyze the provided design (image, Stitch screen, or description).
2. Break the design into semantic HTML5 sections.
3. Create the component file in the appropriate feature folder: `src/features/{feature-name}/components/`.
4. Use Arrow Function syntax: `const MyComponent: React.FC = () => { ... }`.
5. Apply Tailwind v4 classes (use `bg-linear-to-*` for gradients).
6. Add `aria-label` to every interactive element.
7. Export only through `index.ts`.
8. Verify the file does not exceed 300 lines.
