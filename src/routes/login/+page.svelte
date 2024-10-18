<script lang="ts">
  let isSignUp = false;
  let users: { [key: string]: { password: string; profile: any } } = {};
  let loggedInUser: string | null = null;
  let username = '';
  let password = '';
  let tempName = '';
  let tempLocation = '';
  let tempSkills = '';
  let tempPreferences = '';
  let tempAvailabilityDates: string[] = [];
  let dateValue = '';
  function toggleSignUp() {
    isSignUp = !isSignUp;
  }
  function signUp() {
    if (users[username]) {
      alert("Username already exists!");
    } else {
      users[username] = {
        password,
        profile: { name: tempName, location: tempLocation, skills: tempSkills, preferences: tempPreferences, availability: tempAvailabilityDates }
      };
      alert("Sign-up successful!");
      resetFields();
    }
  }
  function signIn() {
    if (users[username] && users[username].password === password) {
      loggedInUser = username;
      console.log("User details:", users[loggedInUser].profile);
      tempName = users[loggedInUser].profile.name;
      tempLocation = users[loggedInUser].profile.location;
      tempSkills = users[loggedInUser].profile.skills;
      tempPreferences = users[loggedInUser].profile.preferences;
      tempAvailabilityDates = [...users[loggedInUser].profile.availability];
    } else {
      alert("Invalid username or password.");
    }
  }
  function resetFields() {
    username = '';
    password = '';
    tempName = '';
    tempLocation = '';
    tempSkills = '';
    tempPreferences = '';
    tempAvailabilityDates = [];
    dateValue = '';
    isSignUp = false;
  }
  function addAvailabilityDate() {
    if (dateValue && !tempAvailabilityDates.includes(dateValue)) {
      tempAvailabilityDates = [...tempAvailabilityDates, dateValue];
      dateValue = '';
    }
  }
  function removeAvailabilityDate(dateToRemove) {
    tempAvailabilityDates = tempAvailabilityDates.filter(date => date !== dateToRemove);
  }
  function updateProfile() {
    if (loggedInUser) {
      users[loggedInUser].profile.name = tempName;
      users[loggedInUser].profile.location = tempLocation;
      users[loggedInUser].profile.skills = tempSkills;
      users[loggedInUser].profile.preferences = tempPreferences;
      users[loggedInUser].profile.availability = [...tempAvailabilityDates];
      alert("Profile updated successfully!");
      console.log("Updated user details:", users[loggedInUser].profile);
    }
  }
</script>
<div class="flex flex-col w-full max-w-xs mx-auto mt-8">
  <form on:submit|preventDefault={isSignUp ? signUp : signIn}>
    <p class="text-lg font-semibold mb-4">Sign {isSignUp ? 'Up' : 'In'}</p>

    <div class="form-control mb-4">
      <label for="username" class="label">
        <span class="label-text">Username</span>
      </label>
      <input type="email" id="username" bind:value={username} placeholder="Enter your username" class="input input-bordered w-full" required />
    </div>

    <div class="form-control mb-4">
      <label for="password" class="label">
        <span class="label-text">Password</span>
      </label>
      <input type="password" id="password" bind:value={password} placeholder="Enter your password" class="input input-bordered w-full" required />
    </div>

    {#if isSignUp}
      <div class="form-control mb-4">
        <label for="name" class="label">
          <span class="label-text">Name</span>
        </label>
        <input type="text" id="name" bind:value={tempName} placeholder="Enter your name" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="location" class="label">
          <span class="label-text">Location</span>
        </label>
        <select id="location" bind:value={tempLocation} class="input input-bordered w-full" required>
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skills" class="label">
          <span class="label-text">Skills</span>
        </label>
        <select id="skills" bind:value={tempSkills} class="input input-bordered w-full" required>
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="preferences" class="label">
          <span class="label-text">Preferences</span>
        </label>
        <textarea id="preferences" bind:value={tempPreferences} placeholder="Enter your preferences" class="textarea textarea-bordered w-full"></textarea>
      </div>
    {/if}

    <div class="form-control mb-6">
      <button class="btn btn-primary w-full" type="submit">{isSignUp ? 'Complete Sign Up' : 'Sign In'}</button>
    </div>

    <div class="form-control">
      <button class="btn btn-secondary w-full" type="button" on:click={toggleSignUp}>
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </button>
    </div>
  </form>
  {#if loggedInUser}
    <div class="mt-8 p-4 border rounded-lg">
      <h3 class="text-lg font-semibold mb-4">User Profile: {tempName}</h3>
      <div class="form-control mb-4">
        <label for="name" class="label"><strong>Name:</strong></label>
        <input type="text" bind:value={tempName} class="input input-bordered w-full" />
      </div>

      <div class="form-control mb-4">
        <label for="location" class="label"><strong>Location:</strong></label>
        <select bind:value={tempLocation} class="input input-bordered w-full">
          <option value="New York">New York</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skills" class="label"><strong>Skills:</strong></label>
        <select bind:value={tempSkills} class="input input-bordered w-full">
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="preferences" class="label"><strong>Preferences:</strong></label>
        <textarea bind:value={tempPreferences} class="textarea textarea-bordered w-full"></textarea>
      </div>

      <div class="form-control mb-4">
        <label for="availability" class="label"><strong>Availability:</strong></label>
        <ul>
          {#each tempAvailabilityDates as date}
            <li>{date} <button type="button" class="btn btn-xs btn-error" on:click={() => removeAvailabilityDate(date)}>Remove</button></li>
          {/each}
        </ul>
        <div class="flex space-x-2 items-center mt-2">
          <input type="date" bind:value={dateValue} class="input input-bordered w-full" />
          <button class="btn" on:click={addAvailabilityDate}>Add Date</button>
        </div>
      </div>

      <div class="form-control mb-6">
        <button class="btn btn-success w-full" type="button" on:click={updateProfile}>Update Profile</button>
      </div>
    </div>
  {/if}
</div>
