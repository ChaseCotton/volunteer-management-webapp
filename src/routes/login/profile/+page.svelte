<script lang="ts">
  import { userStore } from '../../stores';
  import { get } from 'svelte/store';

  let username = '';
  let name = '';
  let location = '';
  let skills = '';
  let preferences = '';
  let availabilityDates = [];

  $: {
    const user = get(userStore);
    if (user) {
      username = user.username;
      name = user.profile.name;
      location = user.profile.location;
      skills = user.profile.skills;
      preferences = user.profile.preferences;
      availabilityDates = user.profile.availability;
    }
  }

  function saveProfile() {
    alert('Profile updated successfully!');
  }
</script>

<div class="flex flex-col w-full max-w-xs mx-auto mt-8">
  <p class="text-lg font-semibold mb-4">Edit Profile for {username}</p>

  <div class="form-control mb-4">
    <label for="name" class="label">
      <span class="label-text">Name</span>
    </label>
    <input type="text" id="name" bind:value={name} placeholder="Enter your name" class="input input-bordered w-full" />
  </div>

  <div class="form-control mb-4">
    <label for="location" class="label">
      <span class="label-text">Location</span>
    </label>
    <select id="location" bind:value={location} class="input input-bordered w-full">
      <option value="New York">New York</option>
      <option value="California">California</option>
      <option value="Texas">Texas</option>
    </select>
  </div>

  <div class="form-control mb-4">
    <label for="skills" class="label">
      <span class="label-text">Skills</span>
    </label>
    <select id="skills" bind:value={skills} class="input input-bordered w-full">
      <option value="Communication">Communication</option>
      <option value="Teamwork">Teamwork</option>
      <option value="Problem-solving">Problem-solving</option>
    </select>
  </div>

  <div class="form-control mb-4">
    <label for="preferences" class="label">
      <span class="label-text">Preferences</span>
    </label>
    <textarea id="preferences" bind:value={preferences} placeholder="Enter your preferences" class="textarea textarea-bordered w-full"></textarea>
  </div>

  <div class="form-control mb-4">
    <label for="availability" class="label">
      <span class="label-text">Availability</span>
    </label>
    <ul>
      {#each availabilityDates as date}
        <li>{date}</li>
      {/each}
    </ul>
  </div>

  <div class="form-control mb-6">
    <button class="btn btn-primary w-full" on:click={saveProfile}>Save Profile</button>
  </div>
</div>
