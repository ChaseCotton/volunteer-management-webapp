<script lang="ts">
    let eventName: string = '';
    let eventDescription: string = '';
    let location: string = '';
    let requiredSkills: string[] = [];
    let urgency: string = '';
    let eventDate: string = '';
  
    const skillsOptions: string[] = ['Teamwork', 'Leadership', 'Empathy', 'Reliability', 'Communication'];
    const urgencyOptions: string[] = ['Low', 'Medium', 'High'];
    let insertedEvents = [];
  
    function handleSubmit() {
      const newEvent = {
        eventName,
        eventDescription,
        location,
        requiredSkills: requiredSkills.join(', '),
        urgency,
        eventDate
      };
      insertedEvents = [...insertedEvents, newEvent];
      eventName = '';
      eventDescription = '';
      location = '';
      requiredSkills = [];
      urgency = '';
      eventDate = '';
    }
  </script>
  
  <h2 class="text-xl font-semibold mb-4 text-center">Event Management Form</h2>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div class="form-control">
      <label class="label" for="eventName">
        <span class="label-text">Event Name (100 characters, required)</span>
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
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>
  <h2 class="text-xl font-semibold mb-4 text-center">Inserted Events</h2>
  <div class="overflow-x-auto">
    <table class="table table-xs">
      <thead>
        <tr>
          <th></th>
          <th>Event Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Skills</th>
          <th>Urgency</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each insertedEvents as event, i}
          <tr>
            <th>{i + 1}</th>
            <td>{event.eventName}</td>
            <td>{event.eventDescription}</td>
            <td>{event.location}</td>
            <td>{event.requiredSkills}</td>
            <td>{event.urgency}</td>
            <td>{event.eventDate}</td>
          </tr>
        {/each}
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th>Event Name</th>
          <th>Description</th>
          <th>Location</th>
          <th>Skills</th>
          <th>Urgency</th>
          <th>Date</th>
        </tr>
      </tfoot>
    </table>
  </div>
  