import asyncio
from app.core.dependencies import get_supabase_admin

async def main():
    print("🚀 Създавам потребител (заобикаляне на Rate Limit)...")
    supabase = get_supabase_admin()
    
    # Можеш да смениш имейла и паролата тук, ако искаш
    email = "krasimir@traumseiten.de"
    password = "Traumseiten123!"
    full_name = "Krasimir (Admin)"
    
    try:
        res = supabase.auth.admin.create_user({
            "email": email,
            "password": password,
            "email_confirm": True,  # Автоматично потвърден!
            "user_metadata": {
                "full_name": full_name
            }
        })
        print(f"✅ Успех! Потребителят е създаден.")
        print(f"📧 Email: {email}")
        print(f"🔑 Password: {password}")
    except Exception as e:
        print(f"❌ Грешка: {e}")

if __name__ == "__main__":
    asyncio.run(main())
