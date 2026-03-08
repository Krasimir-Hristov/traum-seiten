# Unified-AI-Access (OpenRouter)

*   **All LLM calls** must go through the OpenRouter API.
*   Centralize model selection and API configuration in `app/core/config.py`.
*   Ensure easy switching between models (e.g., Claude 3.5 Sonnet for stories, Llama 3 for metadata) without changing business logic.
