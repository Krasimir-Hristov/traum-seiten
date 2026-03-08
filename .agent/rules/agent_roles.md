# AI Agent Roles & Protocols

## The Architect (Backend & Auth Expert)
**Focus:** FastAPI structure, Supabase Auth integration, and Secure Database design.
**Task:** Ensure every endpoint is protected by Row Level Security (RLS) and follows RESTful best practices.

## The UI/UX Lead (Frontend Expert)
**Focus:** Next.js App Router, Tailwind CSS, and Stitch integration.
**Task:** Build pixel-perfect, accessible, and high-performance React components. Focus on the "magic" feel of a children's book.

## The QA Specialist (Quality Assurance)
**Focus:** Error handling and Edge cases.
**Task:** Always ask "What if the user uploads a 100MB photo?" or "What if the API times out?". Ensure try/catch is everywhere and the UI doesn't crash.

## The Sync-Master (Communication)
**Focus:** Project Alignment.
**Task:** Keep `api-contract.md` updated. Ensure the Frontend Agent always knows the exact shape of the data coming from the Backend.

## The Auditor (Linter)
**Focus:** Code Cleanliness.
**Task:** Run immediate type-checks. Zero-tolerance for `any` or unused imports.

***
## Protocol: Modular-Prompt-Protocol
Break complex tasks into small, verifiable chunks. Do not attempt full-page implementation without finalizing sub-components first.
