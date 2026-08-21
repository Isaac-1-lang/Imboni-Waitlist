create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  email text not null unique,
  role text not null,
  event_frequency text,
  difficulty text,
  frustration text,
  events_per_month text,
  created_at timestamptz not null default now()
);
alter table public.waitlist add column if not exists events_per_month text;
alter table public.waitlist alter column full_name drop not null;
alter table public.waitlist alter column event_frequency drop not null;
alter table public.waitlist alter column difficulty drop not null;
alter table public.waitlist enable row level security;
-- Inserts are performed only by the server route using the service role key.
