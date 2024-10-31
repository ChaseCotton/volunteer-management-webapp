import { SupabaseClient, Session } from '@supabase/supabase-js'

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient
      user: User | null
      session: Session | null
    }
    interface PageData {
      session: Session | null
      user: User | null
    }
    // interface Error {}
    // interface Platform {}
  }
}