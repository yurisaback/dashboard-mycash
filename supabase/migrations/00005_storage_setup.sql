-- mycash+ v2.0 — Políticas RLS para Storage
-- NOTA: Crie os buckets manualmente no Dashboard ou via API:
--   - avatars (public)
--   - account-logos (public)
--   - documents (private)
--   - media (private)
-- Estrutura de pastas: {user_id}/arquivo.ext

-- Políticas para avatars
CREATE POLICY "avatars_select" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "avatars_insert" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "avatars_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "avatars_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Políticas para account-logos
CREATE POLICY "account_logos_select" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'account-logos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "account_logos_insert" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'account-logos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "account_logos_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'account-logos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "account_logos_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'account-logos' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Políticas para documents
CREATE POLICY "documents_select" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'documents' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "documents_insert" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'documents' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "documents_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'documents' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "documents_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'documents' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

-- Políticas para media
CREATE POLICY "media_select" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'media' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "media_insert" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'media' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "media_update" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'media' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );

CREATE POLICY "media_delete" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'media' AND
    (storage.foldername(name))[1] = auth.uid()::text
  );
