<script lang="ts">
  import type { PageData } from '../signin/$types';
  export let data: PageData;

  function signIn() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // Output the form values to the console
    console.log("Email:", user);
    console.log("Password:", pass);
  }
</script>
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
    <select name="state" class="input input-bordered w-full" required>
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
    <select class="input input-bordered w-full" name="options" multiple>
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
    <textarea class="textarea textarea-primary" placeholder="Enter Preferences Here"></textarea>
  </div>


  <h1>Select Dates</h1>
  <input type="date" id="datePicker">
  <button id="addDate">Add Date</button>

  <h2>Selected Dates:</h2>
  <ul id="dateList"></ul>

    <script>
        const date = document.getElementById('datePicker');
        const addDateButton = document.getElementById('addDate');
        const dateList = document.getElementById('dateList');

        let data = ["Feb 24 2025", "Sh", "Sita", "Gita"];
        let list = document.getElementById("myList");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }
    </script>


  <div class="form-control mb-6">
    <button class="btn btn-primary w-full" on:click={signIn}>Sign In</button>
  </div>


</form>
</div>