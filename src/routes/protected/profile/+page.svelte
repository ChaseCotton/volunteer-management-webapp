<script lang="ts">
    import type { PageData } from './$types';
    import { supabase } from '$lib/supabaseClient';
    export let data: PageData;
    let { user } = data;
  
    let full_name = '';
    let first_name = '';
    let last_name = '';
    let username = '';
    let role: 'Volunteer' | 'Organizer' = 'User';
    let email = '';
    let event_history: number[] = [];
    let city = '';
    let state = '';
    let address = '';
  
    let tempAvailabilityDates: string[] = [];
    let dateValue = '';
  
    let uniqueSkills: string[] = [];
    let selectedSkills: string[] = [];
    let customSkill = '';
    let showDropdown = false;
    
    let eventTable: any[] = [];
    let showEventHistory = false;
  
    async function loadProfile() {
      if (user) {
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('first_name, last_name, full_name, username, availability, skills, role, email, event_history, city, state, address')
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
          role = profile.role || 'User';
          email = user.user_metadata.email || '';
          event_history = profile.event_history || [];
          city = profile.city || '';
          state = profile.state || '';
          address = profile.address || '';
        }
      }
    }
  
    async function loadUniqueSkills() {
      const { data: skills, error } = await supabase
        .from('profiles')
        .select('skills');
  
      if (error) {
        console.error('Error loading unique skills:', error.message);
      } else if (skills) {
        uniqueSkills = [...new Set(skills.flatMap(profile => profile.skills || []))];
      }
    }
  
    async function updateProfile() {
      if (user) {
        full_name = `${first_name} ${last_name}`;
        showDropdown = false;
        const { error } = await supabase
          .from('profiles')
          .update({ first_name, last_name, full_name, username, availability: tempAvailabilityDates, skills: selectedSkills, role, email, city, state, address })
          .eq('id', user.id);
  
        if (error) {
          console.error('Error updating profile:', error.message);
        } else {
          alert('Profile updated successfully!');
        }
      }
      loadProfile();
      loadUniqueSkills();
    }
  
    function addAvailabilityDate() {
      if (dateValue && !tempAvailabilityDates.includes(dateValue)) {
        tempAvailabilityDates = [...tempAvailabilityDates, dateValue];
        dateValue = '';
      }
    }
  
    function removeAvailabilityDate(dateToRemove: string) {
      tempAvailabilityDates = tempAvailabilityDates.filter(date => date !== dateToRemove);
    }
  
    function addCustomSkill() {
      if (customSkill && !selectedSkills.includes(customSkill)) {
        selectedSkills = [...selectedSkills, customSkill];
        if (!uniqueSkills.includes(customSkill)) {
          uniqueSkills = [...uniqueSkills, customSkill];
        }
        customSkill = '';
      }
    }
  
    async function logEvn() {
      const { data: events, error } = await supabase
        .from('Event_Table')
        .select('*')
        .in('event_id', event_history);
  
      if (!error) {
        eventTable = events || [];
        showEventHistory = true;
      } else {
        console.error('Error fetching event history:', error.message);
      }
    }
  
    loadProfile();
    loadUniqueSkills();
  </script>
  
  <div class="flex flex-col space-y-8 p-4">
    {#if user}
      <div>
        <h1 class="text-2xl font-bold mb-4">Welcome, {user.email}!</h1>
        <form on:submit|preventDefault={updateProfile} class="space-y-4">
          <div class="form-control">
            <label for="first_name" class="label">First Name:</label>
            <input id="first_name" type="text" bind:value={first_name} class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label for="last_name" class="label">Last Name:</label>
            <input id="last_name" type="text" bind:value={last_name} class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label for="username" class="label">Username:</label>
            <input id="username" type="text" bind:value={username} class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label for="role" class="label">Role:</label>
            <select id="role" bind:value={role} class="select select-bordered w-full">
              <option value="Volunteer">Volunteer</option>
              <option value="Organizer">Organizer</option>
            </select>
          </div>
          <div class="form-control">
            <label for="city" class="label">City:</label>
            <input id="city" type="text" bind:value={city} class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label for="state" class="label">State:</label>
            <input id="state" type="text" bind:value={state} class="input input-bordered w-full" />
          </div>
          <div class="form-control">
            <label for="address" class="label">Address:</label>
            <input id="address" type="text" bind:value={address} class="input input-bordered w-full" />
          </div>
          <button type="submit" class="btn btn-primary w-full">Update Profile</button>
        </form>
      </div>
    {:else}
      <h1 class="text-2xl font-bold">Please log in to see your information.</h1>
    {/if}
  
    <div class="flex justify-center mt-4">
      <button class="btn btn-primary" on:click={logEvn}>Show History</button>
    </div>
  
    {#if showEventHistory}
      <div class="overflow-x-auto mt-4">
        <h2 class="text-xl font-semibold mb-4">Event History</h2>
        <table class="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Event Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Date</th>
              <th>Urgency</th>
            </tr>
          </thead>
          <tbody>
            {#each eventTable as event, index}
              <tr>
                <th>{index + 1}</th>
                <td>{event.event_name}</td>
                <td>{event.description}</td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>{event.urgency}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
  