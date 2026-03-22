---
description: Create a new feature following strict structural guidelines
---
# Steps to follow when creating a new feature
1. Create folder structure: `src/features/{feature-name}/`.
2. Inside the feature folder, create: `components/`, `hooks/`, `types/`, and `index.ts`.
3. All components use Arrow Function syntax with `React.FC`.
4. Export only through the barrel `index.ts`.
5. Keep each file under 300 lines.
6. Use semantic HTML5 tags and `aria-label` on interactive elements.
7. Use Tailwind v4 gradients (`bg-linear-to-*`).
