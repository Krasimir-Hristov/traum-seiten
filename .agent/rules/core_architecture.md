# Core Architecture (The AI-Friendly Map)

## Feature-Based Structure
Organize the project by domain, not by file type.
* `/src/features/books` (Logic for reading/flipping)
* `/src/features/avatar-gen` (Upload, crop, and AI processing)
* `/src/features/billing` (Stripe integration)
* `/src/components/ui` (Global shared design components)

## Single-Source-of-Truth (SSoT)
* Maintain a central `src/lib/constants.ts` (Frontend) and `app/core/config.py` (Backend) for all API endpoints, routes, and global settings.

## Schema-First Synchronization
* Before implementing a feature, define the Data Schema in both Pydantic and TypeScript. Ensure they match 1:1.
