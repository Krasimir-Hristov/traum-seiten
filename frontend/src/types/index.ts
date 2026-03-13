export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string | null;
  updated_at: string | null;
}

export interface ChildProfile {
  id: string;
  user_id: string;
  name: string;
  avatar_url: string | null;
  character_description: string | null;
  is_processed: boolean;
  created_at: string;
}

export interface Page {
  page_number: number;
  image_url: string | null;
  text_content: string | null;
}

export interface Story {
  id: string;
  book_id: string;
  theme: string | null;
  pages: Page[];
  created_at: string;
}

export interface Book {
  id: string;
  user_id: string;
  child_id: string | null;
  title: string;
  stories: Story[];
  created_at: string;
}
