import { supabase } from '$lib/supabaseClient';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, depends }) => {
  depends('supabase:auth');
  supabase.auth.getSession();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user || null;

  return { supabase, session, user };
};
