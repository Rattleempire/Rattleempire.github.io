-- Rattle Empire PostgreSQL blueprint.
-- Keep secrets and passwords out of this repository.

create table if not exists profiles (
 id uuid primary key,
 display_name text not null,
 role text not null default 'buyer' check(role in ('buyer','seller','admin')),
 created_at timestamptz not null default now()
);

create table if not exists seller_profiles (
 id uuid primary key references profiles(id) on delete cascade,
 status text not null default 'pending' check(status in ('pending','approved','suspended','rejected')),
 store_name text not null,
 verification_notes text,
 created_at timestamptz not null default now()
);

create table if not exists categories (
 id bigserial primary key,
 slug text unique not null,
 name text not null,
 active boolean not null default true
);

create table if not exists products (
 id bigserial primary key,
 seller_id uuid not null references seller_profiles(id),
 category_id bigint references categories(id),
 name text not null,
 slug text unique not null,
 description text,
 price_cents integer not null check(price_cents>=0),
 currency text not null default 'USD',
 delivery_type text not null check(delivery_type in ('license','code','subscription_activation','manual')),
 status text not null default 'pending' check(status in ('pending','approved','rejected','suspended')),
 inventory_count integer not null default 0 check(inventory_count>=0),
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);

create table if not exists orders (
 id uuid primary key,
 buyer_id uuid not null references profiles(id),
 total_cents integer not null check(total_cents>=0),
 currency text not null default 'USD',
 status text not null default 'pending' check(status in ('pending','paid','processing','fulfilled','cancelled','refunded')),
 payment_provider text,
 payment_reference text,
 created_at timestamptz not null default now()
);

create table if not exists order_items (
 id bigserial primary key,
 order_id uuid not null references orders(id) on delete cascade,
 product_id bigint not null references products(id),
 seller_id uuid not null references seller_profiles(id),
 quantity integer not null check(quantity>0),
 unit_price_cents integer not null check(unit_price_cents>=0),
 delivery_status text not null default 'pending' check(delivery_status in ('pending','sent','fulfilled','failed','refunded'))
);

create table if not exists reviews (
 id bigserial primary key,
 product_id bigint not null references products(id) on delete cascade,
 buyer_id uuid not null references profiles(id),
 rating integer not null check(rating between 1 and 5),
 body text,
 created_at timestamptz not null default now(),
 unique(product_id,buyer_id)
);

create table if not exists audit_events (
 id bigserial primary key,
 actor_id uuid references profiles(id),
 event_type text not null,
 entity_type text,
 entity_id text,
 metadata jsonb not null default '{}'::jsonb,
 created_at timestamptz not null default now()
);

insert into categories(slug,name) values
('ai','AI & Productivity'),('streaming','Streaming'),('software','Software'),('gaming','Gaming'),('gift','Gift Cards')
on conflict(slug) do nothing;
