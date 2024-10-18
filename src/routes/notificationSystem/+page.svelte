<script>
    export const notifications = [
    { 
        type: "New Event Notification", 
        details: "You have been assigned to volunteer at the Toy Drive",
        eventName: "Toy Drive",
        volunteerName: "John Doe"
    },
    { 
        type: "Event Match", 
        details: "We think you would be a great fit for volunteering at the Career Fair",
        eventName: "Career Fair",
        volunteerName: "John Doe"
    },
    { 
        type: "A Event Manager Matched You", 
        details: "An event manager believes you are a great fit for the tutoring role at SJHS",
        eventName: "Tutoring at SJHS",
        volunteerName: "John Doe"
    },
    { 
        type: "Reminder", 
        details: "REMINDER! You are signed up to volunteer at the Baseball Game tmrw at 9 AM CST at Minute Maid Field",
        eventName: "Baseball Game",
        volunteerName: "John Doe"
    },
    { 
        type: "Update", 
        details: "The Book Fair at the Brazoria Neighborhood Library is Canceled",
        eventName: "Book Fair",
        volunteerName: "John Doe"
    },
    { 
        type: "Update", 
        details: "The Book Fair at the Brazoria Neighborhood Library is Canceled",
        eventName: "Book Fair",
        volunteerName: "Jane Smith"
    },
    { 
        type: "Reminder", 
        details: "REMINDER! You are signed up to volunteer at the Book Fair Tommorrow at 10 AM",
        eventName: "Book Fair",
        volunteerName: "Jane Smith"
    },
    { 
        type: "Update", 
        details: "The Football Game Tommorrow at 6 PM is Canceled",
        eventName: "Football Game",
        volunteerName: "Justin Jefferson"
    },
    { 
        type: "New Event Notification", 
        details: "You have been assigned to volunteer at the Food Bank Drive",
        eventName: "Food Bank Drive",
        volunteerName: "Emily Smith"
    },
    { 
        type: "Event Match", 
        details: "We think you would be a great fit for volunteering at the Beach Cleanup",
        eventName: "Beach Cleanup",
        volunteerName: "Michael Johnson"
    },
    { 
        type: "A Event Manager Matched You", 
        details: "An event manager believes you are a great fit for the Recycling Campaign at Green Park",
        eventName: "Recycling Campaign",
        volunteerName: "Sophia Davis"
    },
    { 
        type: "Reminder", 
        details: "REMINDER! You are signed up to volunteer at the Charity Run tomorrow at 8 AM PST at Central Park",
        eventName: "Charity Run",
        volunteerName: "Daniel Brown"
    },
    { 
        type: "Update", 
        details: "The Workshop for New Volunteers has been rescheduled to next week",
        eventName: "New Volunteer Workshop",
        volunteerName: "Emma Wilson"
    },
    { 
        type: "New Event Notification", 
        details: "You have been assigned to volunteer at the Animal Shelter Adoption Day",
        eventName: "Adoption Day",
        volunteerName: "Oliver Martinez"
    },
    { 
        type: "Event Match", 
        details: "We think you would be a great fit for volunteering at the Community Garden Project",
        eventName: "Community Garden Project",
        volunteerName: "Isabella Hernandez"
    },
    { 
        type: "A Event Manager Matched You", 
        details: "An event manager believes you are a great fit for the After-School Tutoring Program",
        eventName: "After-School Tutoring",
        volunteerName: "Lucas Anderson"
    },
    { 
        type: "Reminder", 
        details: "REMINDER! You are signed up to volunteer at the Blood Donation Drive tomorrow at 10 AM EST at City Hall",
        eventName: "Blood Donation Drive",
        volunteerName: "Mia Thompson"
    },
    { 
        type: "Update", 
        details: "The Art Exhibition Fundraiser has been moved to a new location: Downtown Art Center",
        eventName: "Art Exhibition Fundraiser",
        volunteerName: "James Taylor"
    }
]    

let nameFilter = '';
let eventFilter = '';
let notifications2 = notifications;

export const filterVolunteerHistory = (name) => {
  return notifications2.filter(history => 
    !name || history.volunteerName.toLowerCase() === name.toLowerCase()
  );
};

export const filterEventHistory = (event) => {
  return notifications2.filter(history => 
    !event || history.eventName.toLowerCase() === event.toLowerCase()
  );
};

function applyFilter() 
{
  notifications2 = filterVolunteerHistory(nameFilter);
}

function applyFilter2() 
{
  notifications2 = filterEventHistory(eventFilter);
}

</script>

<h2 class="text-xl font-semibold mb-4 text-center">Notification System</h2>
<div class="overflow-x-auto">
  <div class="flex items-center mb-4 space-x-2 justify-center items-center"> 
    <label for="nameFilter" class="label">
      <span class="label-text">Filter by Name:</span>
    </label>
    <input 
      type="name" 
      id="nameFilter" 
      bind:value={nameFilter} 
      class="input input-bordered w-64"
    />
    <button class="btn btn-primary w-20" on:click={applyFilter}>Apply</button>
    <p class="w-40">

    </p>
    <label for="nameFilter" class="label">
      <span class="label-text">Filter by Event:</span>
    </label>
    <input 
      type="event" 
      id="eventFilter" 
      bind:value={eventFilter} 
      class="input input-bordered w-64"
    />
    <button class="btn btn-primary w-20" on:click={applyFilter2}>Apply</button>
  </div>
  <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Volunteer Name</th>
          <th>Event Name</th>
          <th>Notification Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {#each notifications2 as noti}
          <tr>
            <td>{noti.volunteerName}</td>
            <td>{noti.eventName}</td>
            <td>{noti.type}</td>
            <td>{noti.details}</td>
          </tr>
        {/each}
      </tbody>
  </table>
</div>