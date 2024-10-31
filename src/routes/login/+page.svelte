<script lang="ts">
  let isSignUp = false;
  let users: { [key: string]: { password: string; profile: any } } = {};
  let loggedInUser: string | null = null;
  let username = '';
  let password = '';
  let tempName = '';
  let tempLocation = '';
  let tempZip = '';
  let tempState = '';
  let tempCity = '';
  let tempSkill1 = '';
  let tempSkill2 = '';
  let tempSkill3 = '';
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
        profile: { name: tempName, location: tempLocation, city: tempCity, state: tempState, zip: tempZip, skill1: tempSkill1, skill2: tempSkill2, skill3: tempSkill3, preferences: tempPreferences, availability: tempAvailabilityDates }
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
      tempCity = users[loggedInUser].profile.city;
      tempState = users[loggedInUser].profile.state;
      tempZip = users[loggedInUser].profile.zip;
      tempSkill1 = users[loggedInUser].profile.skill1;
      tempSkill2 = users[loggedInUser].profile.skill2;
      tempSkill3 = users[loggedInUser].profile.skill3;
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
    tempCity = '';
    tempState = '';
    tempZip = '';
    tempSkill1 = '';
    tempSkill2 = '';
    tempSkill3 = '';
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
      users[loggedInUser].profile.city = tempCity;
      users[loggedInUser].profile.state = tempState;
      users[loggedInUser].profile.zip = tempZip;
      users[loggedInUser].profile.skill1 = tempSkill1;
      users[loggedInUser].profile.skill2 = tempSkill2;
      users[loggedInUser].profile.skill3 = tempSkill3;
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
          <span class="label-text">Address</span>
        </label>
        <input type="text" id="location" bind:value={tempLocation} placeholder="Enter your address" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="city" class="label">
          <span class="label-text">City</span>
        </label>
        <input type="text" id="city" bind:value={tempCity} placeholder="Enter your city" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="state" class="label">
          <span class="label-text">State</span>
        </label>
        <select id="state" bind:value={tempState} class="input input-bordered w-full" required>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="zip" class="label">
          <span class="label-text">Zip Code</span>
        </label>
        <input type="number" id="zip" bind:value={tempZip} placeholder="Enter your zip code" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="skill1" class="label">
          <span class="label-text">Skill 1</span>
        </label>
        <select id="skill1" bind:value={tempSkill1} class="input input-bordered w-full">
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skill2" class="label">
          <span class="label-text">Skill 2</span>
        </label>
        <select id="skill2" bind:value={tempSkill2} class="input input-bordered w-full">
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skill3" class="label">
          <span class="label-text">Skill 3</span>
        </label>
        <select id="skill3" bind:value={tempSkill3} class="input input-bordered w-full">
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
        <label for="location" class="label">
          <span class="label-text">Address</span>
        </label>
        <input type="text" id="location" bind:value={tempLocation} placeholder="Enter your address" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="city" class="label">
          <span class="label-text">City</span>
        </label>
        <input type="text" id="city" bind:value={tempCity} placeholder="Enter your city" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="state" class="label">
          <span class="label-text">State</span>
        </label>
        <select id="state" bind:value={tempState} class="input input-bordered w-full" required>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="zip" class="label">
          <span class="label-text">Zip Code</span>
        </label>
        <input type="number" id="zip" bind:value={tempZip} placeholder="Enter your zip code" class="input input-bordered w-full" required />
      </div>

      <div class="form-control mb-4">
        <label for="skill1" class="label">
          <span class="label-text">Skill 1</span>
        </label>
        <select id="skill1" bind:value={tempSkill1} class="input input-bordered w-full">
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skill2" class="label">
          <span class="label-text">Skill 2</span>
        </label>
        <select id="skill2" bind:value={tempSkill2} class="input input-bordered w-full">
          <option value="Communication">Communication</option>
          <option value="Teamwork">Teamwork</option>
          <option value="Problem-solving">Problem-solving</option>
        </select>
      </div>

      <div class="form-control mb-4">
        <label for="skill3" class="label">
          <span class="label-text">Skill 3</span>
        </label>
        <select id="skill3" bind:value={tempSkill3} class="input input-bordered w-full">
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
