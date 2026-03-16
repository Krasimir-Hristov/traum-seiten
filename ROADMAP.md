# The Atomic ROADMAP

## Phase 0: Environment & Core Config

- [x] 0.1: Инициализация на backend с uv init и инсталация на дефинираните библиотеки.
- [x] 0.2: Инициализация на frontend с Next.js 16 (флагове: TS, Tailwind, App Router, Lucid).
- [x] 0.3: Конфигуриране на shadcn/ui и framer-motion във фронтенда.
- [x] 0.4: Създаване на глобални .env.example файлове (Mock Mode, Supabase, OpenRouter).

## Phase 1: Data Architecture (SQL & Types)

- [x] 1.1: Дефиниране на SQL схемата за Supabase (Profiles, Children, Books, Stories, Pages) с поддръжка на Nullable child_id.
- [x] 1.2: Настройка на RLS (Row Level Security) политики в Supabase.
- [x] 1.3: Създаване на Pydantic модели в бекенда (Domain Models).
- [x] 1.4: Създаване на TypeScript интерфейси във фронтенда (Mirroring Models).
- [x] 1.5: MVP Design: Генериране на лога, фавикони и основни дизайн екрани в Stitch (Landing, Auth, Bookshelf, Wizard, Reader) с локализация на немски.


## Phase 2: Authentication & Storage Setup

- [ ] 2.1: Интеграция на Supabase Auth във фронтенда (Login/Register).
- [ ] 2.2: Конфигуриране на Storage Buckets (temp-uploads и permanent-avatars).
- [ ] 2.3: Създаване на Middleware за защитени пътища (Protected Routes).

## Phase 3: The Avatar Pipeline (Personalized Path)

- [ ] 3.1: API: POST /avatar/upload – Качване на 5 снимки в temp (Multipart form).
- [ ] 3.2: API: POST /avatar/process – Анализ, генериране на Character Bible и изтриване на оригиналите.
- [ ] 3.3: UI: Drag-and-Drop компонент за снимки със shadcn/ui.

## Phase 4: The Story Engine (Hybrid Path)

- [ ] 4.1: API: POST /story/initiate – Приема параметри (тема, child_id или null).
- [ ] 4.2: Logic: Prompt Builder – Сглобяване на промпт със или без Character Bible.
- [ ] 4.3: API: Story Generator – Генериране на 8 сцени с илюстрации чрез FLUX.

## Phase 5: The Magical UI (The Reader)

- [ ] 5.1: UI: "The Bookshelf" – Показване на наличните книги в Anthology модела.
- [ ] 5.2: UI: "The Book Reader" – Компонент с framer-motion за прелистване на страници.
- [ ] 5.3: UI: Story Creation Wizard – Форма за избор между "Моето дете" или "Универсална история".

## Phase 6: Scaling & Payments

- [ ] 6.1: Optimization: Квантуване на промптите за по-добра консистентност.
- [ ] 6.2: Stripe Integration – Плащане преди генериране на нова история.
- [ ] 6.3: Cloud Deployment – Деплоймънт на бекенда и фронтенда.
