import {PostgrestError} from '@supabase/supabase-js';

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{data: infer U}> ? Exclude<U, null> : never;
export type DbResultErr = PostgrestError;

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row'];
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T];

export type Json = string | number | boolean | null | {[key: string]: Json | undefined} | Json[];

export interface Database {
  public: {
    Tables: {
      words: {
        Row: {
          created_at: string;
          definition: string;
          dislikes: number;
          id: number;
          likes: number;
          word: string;
        };
        Insert: {
          created_at?: string;
          definition: string;
          dislikes?: number;
          id?: number;
          likes?: number;
          word: string;
        };
        Update: {
          created_at?: string;
          definition?: string;
          dislikes?: number;
          id?: number;
          likes?: number;
          word?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_random_word: {
        Args: Record<PropertyKey, never>;
        Returns: {
          created_at: string;
          definition: string;
          dislikes: number;
          id: number;
          likes: number;
          word: string;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
