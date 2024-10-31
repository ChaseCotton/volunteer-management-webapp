<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
  let { user } = data; // Access user data
  function logme(){
    console.log(data);
    console.log(user)
  }
</script>

<div>
  {#if user}
    <h1>Welcome, {user.email}!</h1>
    <!-- Display other user information as needed -->
  {:else}
    <h1>Please log in to see your information.</h1>
  {/if}
  <button class="btn" on:click={logme}>Button</button>
</div>
