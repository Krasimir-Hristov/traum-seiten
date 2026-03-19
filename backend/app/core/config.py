from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    PROJECT_NAME: str = "Traumseiten AI SaaS"
    API_V1_STR: str = "/api/v1"

    SUPABASE_URL: str
    SUPABASE_PUBLISHABLE_KEY: str
    SUPABASE_SECRET_KEY: str

    OPENROUTER_API_KEY: str
    TEXT_MODEL: str = "openai/gpt-oss-120b:free"
    IMAGE_MODEL: str = "black-forest-labs/flux.2-klein-4b"


settings = Settings()
