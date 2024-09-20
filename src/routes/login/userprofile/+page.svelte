<script lang="ts">
  import type { PageData } from '../signin/$types';
  export let data: PageData;

  function Confirm() {
    const name = document.getElementById('name');
    const addy = document.getElementById('addy');
    const addy2 = document.getElementById('addy2');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zip = document.getElementById('zip');
    const skills = document.getElementById('skills');
    const preferences = document.getElementById('preferences');
    const datesAvailableWork = dateList;
    if (name) console.log("Name: ", name.value);
    if (addy) console.log("Address 1: ", addy.value);
    if (addy2) console.log("Address 2: ", addy2.value);
    if (city) console.log("City: ", city.value);
    if (state) console.log("State: ", state.value);
    if (zip) console.log("Zip Code: ", zip.value);
    if (skills) console.log("Skills: ", skills.value);
    if (preferences) console.log("Preferences: ", preferences.value);
    console.log("datesAvailableWork: ", datesAvailableWork);
  }

  let dateList = [];
  let dateValue = "";

  function handleSubmit(event) {
    event.preventDefault();
    dateList = [...dateList, dateValue];
    console.log('Selected date:', dateValue);
    dateValue = "";
  }

function deleteDate(dateToRemove) {
  dateList = dateList.filter(date => date != dateToRemove);
}

</script>

<style>
  .deleteCustomByJay {
    color:green;
  }

  .deleteCustomByJay:hover {
    color:red;
  }
</style>

<div class="flex flex-col w-full max-w-xs mx-auto mt-8">
<form id="loginForm">
  <p class="text-lg font-semibold mb-4">User Profile</p>

  <div class="form-control mb-4">
    <label for="name" class="label">
      <span class="label-text">Name: </span>
    </label>
    <input type="text" id="name" name="name" placeholder="Enter your name" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="addy" class="label">
      <span class="label-text">Address 1</span>
    </label>
    <input type="text" id="addy" name="addy" placeholder="Enter your Address" maxlength="100" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="addy2" class="label">
      <span class="label-text">Address 2</span>
    </label>
    <input type="text" id="addy2" name="addy2" placeholder="Enter your Address 2" maxlength="100" class="input input-bordered w-full"/>
  </div>

  <div class="form-control mb-4">
    <label for="city" class="label">
      <span class="label-text">City</span>
    </label>
    <input type="text" id="city" name="city" placeholder="Enter City of Address" maxlength="100" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="state" class="label">
      <span class="label-text">State</span>
    </label>
    <select name="state" id="state" class="input input-bordered w-full" required>
        <option value="" disabled selected hidden>State of Address</option>
        <option value="AL">AL</option>
        <option value="AK">AK</option>
        <option value="AZ">AZ</option>
        <option value="AR">AR</option>
        <option value="CA">CA</option>
        <option value="CO">CO</option>
        <option value="CT">CT</option>
        <option value="DE">DE</option>
        <option value="FL">FL</option>
        <option value="GA">GA</option>
        <option value="HI">HI</option>
        <option value="ID">ID</option>
        <option value="IL">IL</option>
        <option value="IN">IN</option>
        <option value="IA">IA</option>
        <option value="KS">KS</option>
        <option value="KY">KY</option>
        <option value="LA">LA</option>
        <option value="ME">ME</option>
        <option value="MD">MD</option>
        <option value="MA">MA</option>
        <option value="MI">MI</option>
        <option value="MN">MN</option>
        <option value="MS">MS</option>
        <option value="MO">MO</option>
        <option value="MT">MT</option>
        <option value="NE">NE</option>
        <option value="NV">NV</option>
        <option value="NH">NH</option>
        <option value="NJ">NJ</option>
        <option value="NM">NM</option>
        <option value="NY">NY</option>
        <option value="NC">NC</option>
        <option value="ND">ND</option>
        <option value="OH">OH</option>
        <option value="OK">OK</option>
        <option value="OR">OR</option>
        <option value="PA">PA</option>
        <option value="RI">RI</option>
        <option value="SC">SC</option>
        <option value="SD">SD</option>
        <option value="TN">TN</option>
        <option value="TX">TX</option>
        <option value="UT">UT</option>
        <option value="VT">VT</option>
        <option value="VA">VA</option>
        <option value="WA">WA</option>
        <option value="WV">WV</option>
        <option value="WI">WI</option>
        <option value="WY">WY</option>
    </select>
  </div>

  <div class="form-control mb-4">
    <label for="zip" class="label">
      <span class="label-text">Zip Code: </span>
    </label>
    <input type="text" id="zip" name="zip" placeholder="Enter Zip Code" maxlength="9" minlength="5" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="skills" class="label">
      <span class="label-text">Skills: </span>
    </label>
    <select class="input input-bordered w-full" id="skills" name="options" multiple>
        <option value="communication">Communication</option>
        <option value="teamwork">Teamwork</option>
        <option value="reliability">Reliability</option>
        <option value="adaptability">Adaptability</option>
        <option value="empathy">Empathy</option>
        <option value="leadership">Leadership</option>
        <option value="timeManagement">Time Management</option>
        <option value="problemSolving">Problem Solving</option>
        <option value="organizationalSkills">Organizational Skills</option>
        <option value="positivity">Positivity</option>
    </select>
  </div>

  <div class="form-control mb-4">
    <label for="preferences" class="label">
      <span class="label-text">Preferences: </span>
    </label>
    <textarea class="textarea textarea-primary" id="preferences" placeholder="Enter Preferences Here"></textarea>
  </div>

  <form on:submit={handleSubmit}>
    <div class="flex items-center mb-4 space-x-2"> 
      <label for="dateFilter" class="label">
        <span class="label-text">Add Dates You Are Available:</span>
      </label>
      <input type="date" id="dateAdd" bind:value={dateValue} class="input input-bordered w-64"/>
      <button type="submit">Add</button>
    </div>
  </form>

  <div class="flex items-center mb-4 space-x-2">
    <label for="datesA" class="label">
      <span class="label-text">Dates You Are Available:</span>
    </label>
    {#each dateList as date}
      <button class="deleteCustomByJay" on:click={() => deleteDate(date)}>{date}</button>
    {/each}
  </div>

  <div class="form-control mb-6">
    <button class="btn btn-primary w-full" on:click={Confirm}>Confirm</button>
  </div>


</form>
</div>