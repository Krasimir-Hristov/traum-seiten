# Traumseiten API Blueprint

This document acts as the Single Source of Truth for frontend/backend interactions.

## Data Hierarchy
`User -> ChildProfile -> Book (Anthology) -> Story (8 Pages per story)`

## Avatar & AI Consistency Model
Every generated image prompt MUST follow this strict template:
`[Character Bible] + [Scene Action] + [Art Style]`

### MOCK_AI_MODE
* When `MOCK_AI_MODE=True`, all AI API calls must be bypassed.
* Return static mock JSON for texts.
* Return placeholder image URLs (e.g. `https://picsum.photos/seed/mock/800/600` or Dicebear).

## Core Schemas

### ChildProfile
- `id`: UUID
- `user_id`: UUID
- `name`: string
- `avatar_url`: string (URL to Master Avatar)
- `character_description`: string (Character Bible)
- `is_processed`: boolean

### Page
- `page_number`: integer
- `image_url`: string
- `text_content`: string

### Story
- `id`: UUID
- `theme`: string
- `pages`: List[Page] (Exactly 8 Pages per story)

### Book
- `id`: UUID
- `child_id`: UUID
- `title`: string
- `stories`: List[Story]
