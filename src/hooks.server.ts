import { supabase } from '$lib/supabaseClient';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const { data: { session } } = await supabase.auth.getSession();

  if (session) {
    event.locals.user = session.user;
  } else {
    event.locals.user = null;
  }
  return resolve(event);
};
