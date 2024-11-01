<script lang="ts">
    // Enum for volunteer skills
  
    import type { PageData } from './$types';
    import { supabase } from '$lib/supabaseClient';
    
      export let data: PageData;
      let { user } = data;
    
      // Variables for profile information
      let full_name = '';
      let first_name = '';
      let last_name = '';
      let username = '';
      let role: 'Volunteer' | 'Organizer' | '' = ''; // Start with an empty string if necessary
      let email = '';
      // Variables for availability
      let tempAvailabilityDates: string[] = [];
      // Variables for skills
      let selectedSkills: string[] = [];
    
      async function loadProfile() 
      {
        if (user) {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('first_name, last_name, full_name, username, availability, skills, role, email')
            .eq('id', user.id)
            .single();
    
          if (error) {
            console.error('Error loading profile:', error.message);
          } else if (profile) {
            full_name = profile.full_name || '';
            first_name = profile.first_name || '';
            last_name = profile.last_name || '';
            username = profile.username || '';
            tempAvailabilityDates = profile.availability || [];
            selectedSkills = profile.skills || [];
            role = profile.role || '';
            email = user.user_metadata.email || '';
          }
        }
      }

      loadProfile();

      function matchEvents() {
        let event_id = '';
        let event_name = '';
        let description = '';
        let location = '';
        let date = '';
        let urgency = 0;
        let skill1 = '';
        let skill2 = '';
        let skill3 = '';

      }


  </script>
  
  <div class="flex flex-col w-full max-w-4xl mx-auto mt-8 p-4">

    {#if role=="Volunteer"}
        <h2 class="text-xl font-semibold mb-4">Match Volunteers</h2>
        <div class="overflow-x-auto">
        <table class="table w-full bg-base-100">
            <thead>
            <tr>
                <th>Event</th>
                <th>Username</th>
                <th>Date</th>
                <th>Skill</th>
                <th>Urgency</th>
                <th>Location</th>
                <th>Check (Toggle)</th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
        </div>
    {/if}
    
    <div></div>
    <h2 class="text-xl font-semibold mb-4">Upcoming Events</h2>
    <div class="overflow-x-auto">
      <table class="table w-full bg-base-100">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Users Attending</th>
            <th>Description</th>
            <th>Location</th>
            <th>Skills</th>
            <th>Urgency</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>

  </div>