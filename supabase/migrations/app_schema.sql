-- ==============================================================================
-- Supabase Application Schema Migration for Next.js Cinematic Portfolio
-- Run this script in your Supabase Project:
-- Supabase Dashboard -> SQL Editor -> New Query -> Run
-- Safe to execute: Targets only public schema tables owned by the project.
-- ==============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── 1. Analytics & Tracking Tables ──────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.ad_clicks (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  label text NOT NULL,
  url text DEFAULT ''::text,
  page text DEFAULT ''::text,
  CONSTRAINT ad_clicks_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.visits (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  page text NOT NULL DEFAULT '/'::text,
  referrer text NOT NULL DEFAULT ''::text,
  useragent text NOT NULL DEFAULT ''::text,
  ip text NOT NULL DEFAULT ''::text,
  country text NOT NULL DEFAULT ''::text,
  city text NOT NULL DEFAULT ''::text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  source text NOT NULL DEFAULT ''::text,
  CONSTRAINT visits_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.searches (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  query text NOT NULL,
  count bigint DEFAULT 1,
  last_searched timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  CONSTRAINT searches_pkey PRIMARY KEY (id)
);

-- ── 2. Inquiries & Newsletter ────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.inquiries (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  read boolean DEFAULT false,
  ip text DEFAULT ''::text,
  CONSTRAINT inquiries_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.subscribers (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT subscribers_pkey PRIMARY KEY (id)
);

-- ── 3. Content, Reviews & Settings ──────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.settings (
  key text NOT NULL,
  value jsonb NOT NULL DEFAULT 'false'::jsonb,
  CONSTRAINT settings_pkey PRIMARY KEY (key)
);

CREATE TABLE IF NOT EXISTS public.reviews (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc'::text, now()),
  author text NOT NULL,
  role text DEFAULT ''::text,
  company text DEFAULT ''::text,
  content text NOT NULL,
  rating smallint DEFAULT 5,
  approved boolean DEFAULT true,
  avatar text DEFAULT ''::text,
  CONSTRAINT reviews_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.projects (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  category text,
  tech text,
  photo_url text,
  link text,
  review text,
  num text,
  sort_order integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  gallery jsonb DEFAULT '[]'::jsonb,
  client text NOT NULL DEFAULT ''::text,
  month text NOT NULL DEFAULT ''::text,
  year text NOT NULL DEFAULT ''::text,
  logo_full_view_url text NOT NULL DEFAULT ''::text,
  desktop_view_url text NOT NULL DEFAULT ''::text,
  phone_view_url text NOT NULL DEFAULT ''::text,
  CONSTRAINT projects_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.works (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT ''::text,
  category text NOT NULL DEFAULT 'Website'::text,
  tech text DEFAULT ''::text,
  image_url text DEFAULT ''::text,
  link text DEFAULT ''::text,
  sort_order integer DEFAULT 0,
  visible boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  client text DEFAULT ''::text,
  year text DEFAULT ''::text,
  services text DEFAULT ''::text,
  month text NOT NULL DEFAULT ''::text,
  logo_full_view_url text NOT NULL DEFAULT ''::text,
  desktop_view_url text NOT NULL DEFAULT ''::text,
  phone_view_url text NOT NULL DEFAULT ''::text,
  gallery jsonb DEFAULT '[]'::jsonb,
  review text DEFAULT ''::text,
  mobile_image_url text DEFAULT ''::text,
  mainimageurl text DEFAULT ''::text,
  CONSTRAINT works_pkey PRIMARY KEY (id)
);
