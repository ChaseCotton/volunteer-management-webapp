import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    user: locals.user,
    supabase: locals.supabase,
    session: locals.session,
  };
};