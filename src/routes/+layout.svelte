<script lang="ts">
    import type { LayoutData } from './$types';
    import "tailwindcss/tailwind.css";
    import { invalidate } from '$app/navigation'
	import { onMount } from 'svelte'

	export let data

	let { supabase, session } = data
	$: ({ supabase, session } = data)

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((event, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})

		return () => data.subscription.unsubscribe()
	})
</script>
<div class="navbar bg-base-200">
    <div class="navbar-start"></div>

    <!-- Add buttons for login, user profile, and volunteer matching directly in the navbar -->
    <div class="navbar-center flex space-x-4">
        <a href="/" class="btn btn-ghost">Home</a>
        <a href="/login" class="btn btn-ghost">Login / User Prof Management</a>
        <a href="/volunteermatching" class="btn btn-ghost">Volunteer Matching</a>
        <a href="/volunteerHistory" class="btn btn-ghost">Volunteer History</a>
        <a href="/eventManagement" class="btn btn-ghost">Event Management</a>
        <a href="/notificationSystem" class="btn btn-ghost">Notification System</a>
    </div>

    <div class="navbar-end"></div>
</div>

<slot />