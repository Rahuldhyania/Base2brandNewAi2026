// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
// );

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase environment variables are missing.');
}
console.log({
  keyLength: supabaseKey.length,
  keyStart: supabaseKey.substring(0, 20),
  keyEnd: supabaseKey.substring(supabaseKey.length - 10),
});
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);