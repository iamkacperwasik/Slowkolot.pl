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
