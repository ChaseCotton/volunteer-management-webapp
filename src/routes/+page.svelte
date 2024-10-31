<script lang="ts">
    import "tailwindcss/tailwind.css";
    import { supabase } from "$lib/supabaseClient.js";
	import { redirect } from "@sveltejs/kit";
	import { goto } from "$app/navigation";
  
    export let data;
    let email = '';
    let password = '';
  
    // Function to log email and password values
    function logValues() {
      console.log(email);
      console.log(password);
    }
  
    // Function to sign in with email and password
    async function signInWithEmail() {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if(data){
        goto('/login')
      }
      console.log('hi');
      console.log(error);
    }
  
    // Function to sign up with email and password
    async function signUpWithEmail() {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(data);
      console.log(error);
    }

  </script>
  <body>
    <div class="flex justify-center">
      <div class="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
        <div class="card-body">
          <h2 class="card-title">Login!</h2>
          <div class="items-center mt-2">
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="text" class="grow" placeholder="Email" bind:value={email} />
            </label>
            <label class="input input-bordered flex items-center gap-2 mb-2">
              <input type="password" class="grow" placeholder="password" bind:value={password} />
            </label>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary w-full" on:click={signUpWithEmail}>SignUp</button>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary w-full" on:click={signInWithEmail}>Login</button>
          </div>
        </div>
      </div>
    </div>
  </body>
  