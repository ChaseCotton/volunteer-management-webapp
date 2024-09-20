<script>
  import { eventAssignments, eventDetails, filterEventAssignmentsByDate, filterEventDetailsByDate } from '../../lib/volunteermatching.js';

  let dateFilter = '';
  let filteredAssignments = eventAssignments; // Initial assignments
  let filteredDetails = eventDetails; // Initial details

  function applyFilter() {
    filteredAssignments = filterEventAssignmentsByDate(dateFilter);
    filteredDetails = filterEventDetailsByDate(dateFilter);
  }

  function onSubmit(event) {
    handleFormSubmit(event);
  }
</script>

<div class="flex flex-col w-full max-w-4xl mx-auto mt-8 p-4">

  <!-- Date Filter Input and Filter Button -->
  <div class="flex items-center mb-4 space-x-2"> <!-- Flex container for button and input with spacing -->
    <label for="dateFilter" class="label">
      <span class="label-text">Filter by Date:</span>
    </label>
    <input 
      type="date" 
      id="dateFilter" 
      bind:value={dateFilter} 
      on:change={applyFilter} 
      class="input input-bordered w-64"
      />
  </div>

  <!-- Table 1: Event Assignments -->
  <h2 class="text-xl font-semibold mb-4">Event Assignments</h2>
  <div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Name</th>
          <th>Event</th>
          <th>Skill</th>
          <th>Date</th>
          <th>Urgency</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredAssignments as assignment}
          <tr>
            <td>{assignment.name}</td>
            <td>{assignment.event}</td>
            <td>{assignment.skill}</td>
            <td>{assignment.date}</td>
            <td>{assignment.urgency}</td>
            <td><input type="checkbox" bind:checked={assignment.assigned} /></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <!-- Submit Button Below the First Table -->
  <div class="mt-4">
    <button class="btn btn-secondary w-auto">Submit</button>
  </div>

  <!-- Table 2: Event Details -->
  <h2 class="text-xl font-semibold mt-8 mb-4">Event Details</h2>
  <div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Event</th>
          <th>Skill</th>
          <th>Urgency</th>
          <th>Date</th>
          <th>Location</th>
          <th>Number of People Assigned</th>
        </tr>
      </thead>
      <tbody>
        {#each filteredDetails as detail}
          <tr>
            <td>{detail.event}</td>
            <td>{detail.skill}</td>
            <td>{detail.urgency}</td>
            <td>{detail.date}</td>
            <td>{detail.location}</td>
            <td>{detail.assignedCount}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>