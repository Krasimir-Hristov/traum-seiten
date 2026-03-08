# app/core/config.py
# SSoT for Backend configurations, including OpenRouter API parameters

import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Traumseiten AI SaaS"
    API_V1_STR: str = "/api/v1"
    
    # OpenRouter Config
    OPENROUTER_API_KEY: str = os.getenv("OPENROUTER_API_KEY", "")
    DEFAULT_MODEL: str = "liquid/lfm-40b"
    STORY_MODEL: str = "anthropic/claude-3.5-sonnet"
    METADATA_MODEL: str = "meta-llama/llama-3-8b-instruct"

    class Config:
        env_file = ".env"

settings = Settings()
