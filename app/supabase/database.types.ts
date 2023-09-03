export type Json = string | number | boolean | null | {[key: string]: Json | undefined} | Json[];

export interface Database {
  public: {
    Tables: {
      votes: {
        Row: {
          created_at: string;
          id: number;
          ip: string;
          is_positive: boolean;
          word_id: number;
        };
        Insert: {
          created_at?: string;
          id?: number;
          ip: string;
          is_positive: boolean;
          word_id: number;
        };
        Update: {
          created_at?: string;
          id?: number;
          ip?: string;
          is_positive?: boolean;
          word_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'votes_word_id_fkey';
            columns: ['word_id'];
            referencedRelation: 'words';
            referencedColumns: ['id'];
          },
        ];
      };
      words: {
        Row: {
          created_at: string;
          id: number;
          word: string;
          word_definition: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          word: string;
          word_definition: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          word?: string;
          word_definition?: string;
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
          id: number;
          word: string;
          word_definition: string;
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
