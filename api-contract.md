# API Contract

This document serves as the Single Source of Truth for all frontend and backend interactions.
Whenever a backend endpoint changes, the Sync-Master will automatically update this file to keep the Frontend in sync.

## Endpoints

### 1. System & Health
Basic health checks to ensure the backend is responsive.

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/health` | No | Basic health check returning status OK. |
| GET | `/api/v1/health` | No | Versioned health check. |

---

### 2. Authentication
Handled via Supabase Auth (Client-side) with backend JWT verification.

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/api/v1/auth/me` | JWT | Returns profile for the currently logged-in user. |

**Response Schema (`Profile`):**
```json
{
  "id": "uuid",
  "email": "string",
  "full_name": "string | null"
}
```

---

## Global Headers
All protected routes require:
`Authorization: Bearer <SUPABASE_JWT>`
`x-traumseiten-client: web-frontend`
