# Coding Standards & Constraints

## Strict-Type-System
* **Frontend (TS):** Zero-tolerance for `any`. Every prop, state, and API response must have a defined interface or type. Use `unknown` only if absolutely necessary.
* **Backend (Python):** Use Pydantic models for all Request and Response bodies. Enable strict validation.

## Resilient-Async
* Every async/await block (Next.js & FastAPI) must be wrapped in try/catch (TS) or try/except (Python). 
* Log errors to a central utility and provide a graceful UI fallback.

## Security-First
* Never hardcode secrets. 
* Enforce `.env.local` for Next.js and `.env` for FastAPI. 
* Validate all environment variables on startup.

## UI-Purity
* Keep `src/components/ui` (Stitch/Shadcn) as stateless/presentational components. 
* Manage business logic in Custom Hooks or Server Actions.
