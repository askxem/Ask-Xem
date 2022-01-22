import { createClient } from '@supabase/supabase-js';
console.log(process.env.SUPABASE_URL)
export const client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const parseData = ({ data, error }) => {
  if (error) throw error;

  return data;
};
