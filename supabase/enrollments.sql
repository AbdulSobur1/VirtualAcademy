create extension if not exists pgcrypto;

create table if not exists public.enrollments (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  full_name text not null,
  email text not null,
  customer_email text,
  phone text not null,
  notes text,
  program_slug text not null,
  program_name text not null,
  amount_kobo integer not null,
  payment_provider text not null default 'paystack',
  payment_status text not null default 'pending',
  coach_notified boolean not null default false,
  paid_at timestamptz,
  verification_error text,
  gateway_response jsonb,
  created_at timestamptz not null default timezone('utc'::text, now()),
  updated_at timestamptz not null default timezone('utc'::text, now())
);

create index if not exists enrollments_reference_idx on public.enrollments(reference);
create index if not exists enrollments_payment_status_idx on public.enrollments(payment_status);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

drop trigger if exists set_enrollments_updated_at on public.enrollments;

create trigger set_enrollments_updated_at
before update on public.enrollments
for each row
execute function public.set_updated_at();
