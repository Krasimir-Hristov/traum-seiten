from typing import Annotated

from fastapi import APIRouter, Depends

from app.core.dependencies import get_current_user

router = APIRouter()


@router.get("/me")
async def get_me(
    current_user: Annotated[dict, Depends(get_current_user)],
) -> dict:
    """
    Returns the authenticated user's profile data.
    Protected by Supabase JWT validation via get_current_user dependency.
    """
    return {
        "id": current_user["id"],
        "email": current_user["email"],
        "full_name": current_user["user_metadata"].get("full_name"),
    }
