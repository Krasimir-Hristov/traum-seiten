---
description: Create a new feature following strict structural guidelines
---

# Steps to follow when creating a new feature
1. Create folder structure: `src/features/{feature-name}/`.
2. Inside the feature folder, create: `components/`, `hooks/`, `types/`, and `index.ts`.
3. Define the `types.ts` (Frontend) and `schemas.py` (Backend) representing the domain models.
4. Implement the Backend Logic (FastAPI).
5. Implement the Frontend UI using Stitch MCP, strictly adhering to the Premium Design constraint.
6. All components use Arrow Function syntax with `React.FC`.
7. Keep each file under 300 lines.
8. Use semantic HTML5 tags and `aria-label` on interactive elements.
9. Use Tailwind v4 gradients (`bg-linear-to-*`).
10. Export only through the barrel `index.ts`.
