import {createClient} from '@supabase/supabase-js';
import {Database} from 'supabase/database.types';

export const supabaseClient = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    auth: {
      persistSession: false,
    },
    global: {
      fetch: (input, init) => {
        return fetch(input, Object.assign(init!, {cache: 'no-cache'}));
      },
    },
  },
);
