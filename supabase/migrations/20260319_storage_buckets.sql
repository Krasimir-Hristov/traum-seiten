-- =============================================================
-- Storage Buckets: temp-uploads (private) & permanent-avatars (public)
-- Idempotent: safe to run multiple times
-- =============================================================

-- Create temp-uploads bucket (private)
INSERT INTO storage.buckets (id, name, public)
VALUES ('temp-uploads', 'temp-uploads', false)
ON CONFLICT (id) DO NOTHING;

-- Create permanent-avatars bucket (public)
INSERT INTO storage.buckets (id, name, public)
VALUES ('permanent-avatars', 'permanent-avatars', true)
ON CONFLICT (id) DO NOTHING;


-- =============================================================
-- RLS Policies for temp-uploads
-- Folder structure: temp-uploads/{user_id}/photo1.jpg
-- =============================================================

DROP POLICY IF EXISTS "Users can upload temp files" ON storage.objects;
CREATE POLICY "Users can upload temp files"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'temp-uploads'
  AND (storage.foldername(name))[1] = (SELECT auth.uid()::text)
);

DROP POLICY IF EXISTS "Users can view own temp files" ON storage.objects;
CREATE POLICY "Users can view own temp files"
ON storage.objects FOR SELECT TO authenticated
USING (
  bucket_id = 'temp-uploads'
  AND (storage.foldername(name))[1] = (SELECT auth.uid()::text)
);

DROP POLICY IF EXISTS "Users can delete own temp files" ON storage.objects;
CREATE POLICY "Users can delete own temp files"
ON storage.objects FOR DELETE TO authenticated
USING (
  bucket_id = 'temp-uploads'
  AND (storage.foldername(name))[1] = (SELECT auth.uid()::text)
);


-- =============================================================
-- RLS Policies for permanent-avatars
-- Folder structure: permanent-avatars/{user_id}/avatar.png
-- =============================================================

DROP POLICY IF EXISTS "Users can upload avatars" ON storage.objects;
CREATE POLICY "Users can upload avatars"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (
  bucket_id = 'permanent-avatars'
  AND (storage.foldername(name))[1] = (SELECT auth.uid()::text)
);

DROP POLICY IF EXISTS "Public avatar read access" ON storage.objects;
CREATE POLICY "Public avatar read access"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'permanent-avatars');

