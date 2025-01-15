// @ts-nocheck
import { supabase } from '$lib/supabaseClient';
import type { LayoutLoad } from './$types';

export const load = async ({ fetch, depends }: Parameters<LayoutLoad>[0]) => {
  depends('supabase:auth');
  supabase.auth.getSession();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user || null;

  return { supabase, session, user };
};
