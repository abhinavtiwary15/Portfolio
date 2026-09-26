-- ==============================================================================
-- Supabase Storage Schema & Policies (Reference Only)
-- DO NOT EXECUTE DIRECTLY IN THE SUPABASE SQL EDITOR.
--
-- Why running this in the SQL Editor fails with "ERROR: 42501: must be owner of table objects":
-- The table `storage.objects` is owned by the internal Supabase system role
-- (`supabase_storage_admin`). The SQL Editor runs with the `postgres` role, which
-- does not own `storage.objects` and cannot run DDL (`ALTER TABLE`, `CREATE POLICY`).
--
-- Storage buckets and policies should instead be created directly in the
-- Supabase Dashboard under Storage -> Buckets & Policies (see instructions in documentation).
-- ==============================================================================

-- 1. Create storage buckets for uploads (projects and project-photos)
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('projects', 'projects', true),
  ('project-photos', 'project-photos', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 2. Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Idempotently drop old policies to avoid collisions
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Public Access Projects" ON storage.objects;
DROP POLICY IF EXISTS "Public Access Project Photos" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update" ON storage.objects;
DROP POLICY IF EXISTS "Admin Delete" ON storage.objects;

-- 4. Allows anyone to view images stored in project buckets
CREATE POLICY "Public Access" ON storage.objects 
  FOR SELECT USING (bucket_id IN ('projects', 'project-photos'));

-- 5. Allow upload, update, delete operations
CREATE POLICY "Admin Upload" ON storage.objects 
  FOR INSERT WITH CHECK (bucket_id IN ('projects', 'project-photos'));

CREATE POLICY "Admin Update" ON storage.objects 
  FOR UPDATE USING (bucket_id IN ('projects', 'project-photos'));

CREATE POLICY "Admin Delete" ON storage.objects 
  FOR DELETE USING (bucket_id IN ('projects', 'project-photos'));
