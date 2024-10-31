<script lang="ts">
    import "tailwindcss/tailwind.css";
    export let data;

    
</script>

<div class="bg-base-100 flex flex-col justify-center items-center overflow-hidden mt-24">
    <!-- Title and Description -->
    <header class="text-center mb-12 px-4 w-full max-w-2xl mt-auto">
        <h1 class="text-4xl font-semibold">Volunteer Management System</h1>
        <ul>
            {#each data.countries as country}
              <li>{country.name}</li>
            {/each}
          </ul>
        <p class="mt-4 text-lg">A web application containing a login, user registration, profile management, event management, volunteer matching, notifications, and volunteer history tracking.</p>
    </header>

    <!-- Login Button -->
    <a href="/login" class="btn flex items-center justify-center h-12 px-10 text-lg bg-blue-400 hover:bg-blue-500 text-black font-semibold rounded-lg transition duration-300 ease-in-out mb-auto">
        Login
    </a>
</div>
