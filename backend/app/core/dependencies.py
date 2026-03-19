from typing import Annotated

from fastapi import Depends, Header, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from supabase import Client, create_client

from app.core.config import settings

_bearer_scheme = HTTPBearer()


def get_supabase_admin() -> Client:
    """
    Returns a Supabase client with the SERVICE ROLE key.
    Use only for server-side operations (bypasses RLS).
    Never expose this client to the frontend.
    """
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_SECRET_KEY)


async def get_current_user(
    credentials: Annotated[HTTPAuthorizationCredentials, Depends(_bearer_scheme)],
    x_traumseiten_client: Annotated[str | None, Header(alias="x-traumseiten-client")] = None,
) -> dict:
    """
    FastAPI dependency that validates the Supabase JWT from the Authorization header.
    Raises 401 if the token is missing, expired, or invalid.

    Usage:
        @router.get("/protected")
        async def protected_route(user: Annotated[dict, Depends(get_current_user)]):
            ...
    """
    if x_traumseiten_client != "web-frontend":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Ungueltiger_oder_fehlender Traumseiten-Client.",
        )

    token = credentials.credentials

    try:
        supabase = get_supabase_admin()
        response = supabase.auth.get_user(token)

        if response.user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Ungültiger oder abgelaufener Token.",
                headers={"WWW-Authenticate": "Bearer"},
            )

        return {
            "id": str(response.user.id),
            "email": response.user.email,
            "user_metadata": response.user.user_metadata,
        }
    except HTTPException:
        raise
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentifizierung fehlgeschlagen.",
            headers={"WWW-Authenticate": "Bearer"},
        )
