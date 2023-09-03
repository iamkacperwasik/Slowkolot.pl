import 'server-only';

import {createClient} from '@supabase/supabase-js';
import {Database} from 'supabase/database.types';

export const supabase_client = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE,
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
