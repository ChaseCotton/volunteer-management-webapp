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
  <p class="text-lg font-semibold mb-4">Login</p>

  <div class="form-control mb-4">
    <label for="user" class="label">
      <span class="label-text">Username</span>
    </label>
    <input type="email" id="user" name="user" placeholder="Enter your username" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-4">
    <label for="pass" class="label">
      <span class="label-text">Password</span>
    </label>
    <input type="password" id="pass" name="pass" placeholder="Enter your password" class="input input-bordered w-full" required/>
  </div>

  <div class="form-control mb-6">
    <button class="btn btn-primary w-full" on:click={signIn}>Sign In</button>
  </div>

  <div class="form-control">
    <button class="btn btn-secondary w-full">
      <a href="/login/signup">Sign Up</a>
    </button>
  </div>
</form>
</div>