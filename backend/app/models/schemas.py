from datetime import datetime
from typing import List, Optional
from uuid import UUID
from pydantic import BaseModel, Field

class Profile(BaseModel):
    id: UUID
    full_name: Optional[str] = None
    avatar_url: Optional[str] = None
    email: Optional[str] = None
    updated_at: Optional[datetime] = None

class ChildProfile(BaseModel):
    id: UUID
    user_id: UUID
    name: str = Field(..., description="The name of the child")
    avatar_url: Optional[str] = Field(None, description="URL to the master avatar illustration")
    character_description: Optional[str] = Field(None, description="The Character Bible for AI consistency")
    is_processed: bool = Field(False, description="Whether the character analysis is complete")
    created_at: datetime

class PageModel(BaseModel):
    page_number: int
    image_url: Optional[str] = None
    text_content: Optional[str] = None

class StoryModel(BaseModel):
    id: UUID
    book_id: UUID
    theme: Optional[str] = None
    pages: List[PageModel] = Field(..., description="Exactly 8 pages per story")
    created_at: datetime

class BookModel(BaseModel):
    id: UUID
    user_id: UUID
    child_id: Optional[UUID] = Field(None, description="Nullable for universal stories")
    title: str
    stories: List[StoryModel] = Field(default_factory=list)
    created_at: datetime
