create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null unique,
  role text not null,
  event_frequency text not null,
  difficulty text not null,
  frustration text,
  created_at timestamptz not null default now()
);

alter table public.waitlist enable row level security;

-- Inserts are performed only by the server route using the service role key.
