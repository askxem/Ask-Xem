import { createClient } from '@supabase/supabase-js';

export const client = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export const parseData = ({ data, error }) => {
  if (error) throw error;

  return data;
};
