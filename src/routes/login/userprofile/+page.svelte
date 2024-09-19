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
    <label for="zip" class="label">
      <span class="label-text">Zip Code: </span>
    </label>
    <input type="text" id="zip" name="zip" placeholder="Enter Zip Code" maxlength="9" minlength="5" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="preferences" class="label">
      <span class="label-text">Preferences: </span>
    </label>
    <textarea class="textarea textarea-primary" placeholder="Enter Preferences Here"></textarea>
  </div>

  <div class="form-control mb-6">
    <button class="btn btn-primary w-full" on:click={signIn}>Sign In</button>
  </div>

</form>
</div>