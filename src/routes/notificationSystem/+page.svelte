<script lang="ts">
  import type { PageData } from './$types';
  import { supabase } from '$lib/supabaseClient';
  
  export let data: PageData;

  // Variables to hold user data
  let users: { fullName: string; history: number[] }[] = [];
  let events: { eventID: number; eventName: string; notifications: string[] }[] = []; 
  let volunteerNotifications: { volunteerName: string; eventName: string; notification: string }[] = [];

  async function loadAllUsers() {
    const { data: profiles, error } = await supabase
        .from('profiles')
        .select('full_name, event_history');

    if (error) {
        console.error('Error loading profiles:', error.message);
    } else if (profiles) {
        users = profiles.map(profile => ({
            fullName: profile.full_name || '',
            history: Array.isArray(profile.event_history) ? profile.event_history : [] // Ensure history is an array
        }));
    }
    console.log(users)
}

  async function loadAllEvents() {
      const { data: eventList, error } = await supabase
          .from('Event_Table')
          .select('event_id, event_name, notifications');

      if (error) {
          console.error('Error loading events:', error.message);
      } else if (eventList) {
          events = eventList.map(event => ({
              eventID: event.event_id || 0,
              eventName: event.event_name || '',
              notifications: Array.isArray(event.notifications) ? event.notifications : [] // Ensure notifications is an array
          }));
      }
  }

  function generateVolunteerNotifications() {
      volunteerNotifications = []; // Clear previous notifications
      
      users.forEach(user => {
          user.history.forEach(eventID => {
              const event = events.find(e => e.eventID === eventID);
              if (event) {
                  event.notifications.forEach(notification => {
                      volunteerNotifications.push({
                          volunteerName: user.fullName,
                          eventName: event.eventName,
                          notification: notification // Use individual notification
                      });
                  });
              }
          });
      });
  }

  // Load all users and events when the component mounts
  async function loadData() {
      await loadAllUsers();
      await loadAllEvents();
      generateVolunteerNotifications(); // Call after both are loaded
  }

  // Immediately invoke the loadData function
  loadData();
</script>
<button on:click={loadData} class="btn">Update</button>
<div class="overflow-x-auto">
  <h2 class="text-xl font-semibold mb-4 text-center">Volunteer Notifications</h2>
  <table class="table w-full bg-base-100">
    <thead>
      <tr>
        <th>Volunteer Name</th>
        <th>Event Name</th>
        <th>Notification</th>
      </tr>
    </thead>
    <tbody>
      {#each volunteerNotifications as { volunteerName, eventName, notification }}
        <tr>
          <td>{volunteerName}</td>
          <td>{eventName}</td>
          <td>{notification}</td>
        </tr>
      {/each}
      {#if volunteerNotifications.length === 0}
        <tr>
          <td colspan="3" class="text-center">No notifications available.</td>
        </tr>
      {/if}
    </tbody>
  </table>
  
  <!-- New section to display events for testing -->
  <h2 class="text-xl font-semibold mb-4 text-center">All Events</h2>
  <table class="table w-full bg-base-100">
    <thead>
      <tr>
        <th>Event ID</th>
        <th>Event Name</th>
        <th>Notifications</th>
      </tr>
    </thead>
    <tbody>
      {#each events as { eventID, eventName, notifications }}
        <tr>
          <td>{eventID}</td>
          <td>{eventName}</td>
          <td>{notifications.join(', ')}</td>
        </tr>
      {/each}
      {#if events.length === 0}
        <tr>
          <td colspan="3" class="text-center">No events available.</td>
        </tr>
      {/if}
    </tbody>
  </table>

  <!-- New section to display loaded users for testing -->
  <h2 class="text-xl font-semibold mb-4 text-center">All Users</h2>
  <table class="table w-full bg-base-100">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>History</th>
      </tr>
    </thead>
    <tbody>
      {#each users as { fullName, history }}
        <tr>
          <td>{fullName}</td>
          <td>{history.join(', ')}</td>
        </tr>
      {/each}
      {#if users.length === 0}
        <tr>
          <td colspan="2" class="text-center">No users available.</td>
        </tr>
      {/if}
    </tbody>
  </table>
</div>