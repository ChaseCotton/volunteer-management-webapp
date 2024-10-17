<script lang="ts">
  class Event 
  {
    eventName: string;
    eventDescription: string;
    location: string;
    requiredSkills: string[];
    urgency: string;
    eventDate: string;

    constructor(eventName: string, eventDescription: string, location: string, requiredSkills: string[], urgency: string, eventDate: string) 
    {
      this.eventName = eventName;
      this.eventDescription = eventDescription;
      this.location = location;
      this.requiredSkills = requiredSkills;
      this.urgency = urgency;
      this.eventDate = eventDate;
    }
  }
  
  let eventName: string = '';
  let eventDescription: string = '';
  let location: string = '';
  let requiredSkills: string[] = [];
  let urgency: string = '';
  let eventDate: string = '';

  const skillsOptions: string[] = ['Teamwork', 'Leadership', 'Empathy', 'Reliability', 'Communication'];
  const urgencyOptions: string[] = ['Low', 'Medium', 'High'];
  
  let eventMap: Map<string, Event> = new Map([
    ['Event 1', new Event('Event 1', 'Description 1', 'Location 1', ['Teamwork', 'Leadership'], 'High', '2024-10-01')],
    ['Event 2', new Event('Event 2', 'Description 2', 'Location 2', ['Empathy', 'Communication'], 'Medium', '2024-10-10')]
  ]);

  function deleteEvent(eventName: string) 
  {
    eventMap.delete(eventName);
  }

  function handleSubmit() 
  {
    if (!eventName) return;
    const newEvent = new Event(eventName, eventDescription, location, requiredSkills, urgency, eventDate);
    eventMap.set(eventName, newEvent);
    resetForm();
  }

  function resetForm() 
  {
    eventName = '';
    eventDescription = '';
    location = '';
    requiredSkills = [];
    urgency = '';
    eventDate = '';
  }
</script>

<div class="grid grid-cols-2 gap-6">
  <!-- Left side: Event List -->
  <div>
    <h2 class="text-xl font-semibold mb-4 text-center">Upcoming Events</h2>
    <ul class="list-none space-y-2">
      {#each Array.from(eventMap.values()) as event}
        <li class="p-4 border border-gray-200 rounded-lg flex justify-between items-center">
          <div>
            <h3 class="font-semibold">{event.eventName}</h3>
            <p>{event.eventDescription}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Skills:</strong> {event.requiredSkills.join(', ')}</p>
            <p><strong>Urgency:</strong> {event.urgency}</p>
            <p><strong>Date:</strong> {event.eventDate}</p>
          </div>
          <button class="btn btn-error btn-sm" on:click={() => deleteEvent(event.eventName)}>Delete</button>
        </li>
      {/each}
    </ul>
  </div>

  <!-- Right side: Event Form -->
  <div>
    <h2 class="text-xl font-semibold mb-4 text-center">Create New Event</h2>
    <form on:submit|preventDefault={handleSubmit} class="space-y-4">
      <div class="form-control">
        <label class="label" for="eventName">
          <span class="label-text">Event Name (required)</span>
        </label>
        <input id="eventName" type="text" class="input input-bordered" bind:value={eventName} maxlength="100" required placeholder="Enter Event Name" />
      </div>
      <div class="form-control">
        <label class="label" for="eventDescription">
          <span class="label-text">Event Description (required)</span>
        </label>
        <textarea id="eventDescription" class="textarea textarea-bordered" bind:value={eventDescription} required placeholder="Enter Event Description"></textarea>
      </div>
      <div class="form-control">
        <label class="label" for="location">
          <span class="label-text">Location (required)</span>
        </label>
        <textarea id="location" class="textarea textarea-bordered" bind:value={location} required placeholder="Enter Location"></textarea>
      </div>
      <div class="form-control">
        <label class="label" for="requiredSkills">
          <span class="label-text">Required Skills (Multi-select, required)</span>
        </label>
        <select id="requiredSkills" class="select select-bordered" bind:value={requiredSkills} multiple required>
          {#each skillsOptions as skill}
            <option value={skill}>{skill}</option>
          {/each}
        </select>
      </div>
      <div class="form-control">
        <label class="label" for="urgency">
          <span class="label-text">Urgency (required)</span>
        </label>
        <select id="urgency" class="select select-bordered" bind:value={urgency} required>
          {#each urgencyOptions as level}
            <option value={level}>{level}</option>
          {/each}
        </select>
      </div>
      <div class="form-control">
        <label class="label" for="eventDate">
          <span class="label-text">Event Date (required)</span>
        </label>
        <input id="eventDate" type="date" class="input input-bordered" bind:value={eventDate} required />
      </div>
      <div class="form-control mt-6">
        <button class="btn btn-primary" type="submit">Submit Event</button>
      </div>
    </form>
  </div>
</div>
