-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  avatar_url text,
  email text unique
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create a table for children
create table children (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  name text not null,
  avatar_url text,
  character_description text,
  is_processed boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table children enable row level security;

create policy "Users can view their own children." on children
  for select using (auth.uid() = user_id);

create policy "Users can insert their own children." on children
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own children." on children
  for update using (auth.uid() = user_id);

create policy "Users can delete their own children." on children
  for delete using (auth.uid() = user_id);

-- Create a table for books (Anthology)
create table books (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete cascade not null,
  child_id uuid references children(id) on delete set null, -- Nullable for universal stories
  title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table books enable row level security;

create policy "Users can view their own books." on books
  for select using (auth.uid() = user_id);

create policy "Users can insert their own books." on books
  for insert with check (auth.uid() = user_id);

create policy "Users can update their own books." on books
  for update using (auth.uid() = user_id);

create policy "Users can delete their own books." on books
  for delete using (auth.uid() = user_id);

-- Create a table for stories
create table stories (
  id uuid default gen_random_uuid() primary key,
  book_id uuid references books(id) on delete cascade not null,
  theme text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table stories enable row level security;

create policy "Users can view their own stories." on stories
  for select using (
    exists (
      select 1 from books
      where books.id = stories.book_id
      and books.user_id = auth.uid()
    )
  );

create policy "Users can insert stories into their own books." on stories
  for insert with check (
    exists (
      select 1 from books
      where books.id = book_id
      and books.user_id = auth.uid()
    )
  );

-- Create a table for pages
create table pages (
  id uuid default gen_random_uuid() primary key,
  story_id uuid references stories(id) on delete cascade not null,
  page_number integer not null,
  image_url text,
  text_content text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(story_id, page_number)
);

alter table pages enable row level security;

create policy "Users can view their own pages." on pages
  for select using (
    exists (
      select 1 from stories
      join books on books.id = stories.book_id
      where stories.id = pages.story_id
      and books.user_id = auth.uid()
    )
  );

-- Handle new user profile creation
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, email)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.email)
  on conflict (id) do nothing;
  return new;
exception when others then
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
