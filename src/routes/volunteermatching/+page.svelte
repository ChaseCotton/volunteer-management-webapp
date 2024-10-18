<script lang="ts">
  // Enum for volunteer skills
  enum VolunteerSkills {
    Communication = 1,
    Leadership = 2,
    TimeManagement = 3,
    ProblemSolving = 4
  }

  // Class for Volunteers
  class Volunteer {
    constructor(
      public username: string,
      public password: string,
      public fullName: string,
      public address1: string,
      public city: string,
      public state: string,
      public zipCode: string,
      public skills: VolunteerSkills[],
      public availability: Set<string> // Availability as set of dates
    ) {}

    // Method to update availability
    updateAvailability(newDates: string[]): void {
      newDates.forEach(date => this.availability.add(date));
    }
  }

  // Class for Events
  class Event {
    constructor(
      public name: string,
      public description: string,
      public location: string,
      public requiredSkills: string[],
      public urgency: string,
      public date: string,
      public attendingUsers: string[] = [] // List of usernames of users attending the event
    ) {}
  }

  // Dummy data for Volunteers (including more matching volunteers)
  let volunteer1 = new Volunteer('johnDoe', 'password123', 'John Doe', '123 Elm Street', 'New York', 'NY', '10001-1234', [VolunteerSkills.Communication, VolunteerSkills.Leadership], new Set<string>(['2024-10-01', '2024-10-15']));
  let volunteer2 = new Volunteer('janeSmith', 'password456', 'Jane Smith', '456 Oak Avenue', 'Los Angeles', 'CA', '90002-5678', [VolunteerSkills.TimeManagement, VolunteerSkills.ProblemSolving], new Set<string>(['2024-11-01', '2024-11-20']));
  let volunteer3 = new Volunteer('peterParker', 'spiderman123', 'Peter Parker', '789 Spider Lane', 'Queens', 'NY', '11375', [VolunteerSkills.Leadership, VolunteerSkills.Communication], new Set<string>(['2024-12-01', '2024-12-10']));
  let volunteer4 = new Volunteer('bruceWayne', 'batman123', 'Bruce Wayne', '1007 Mountain Drive', 'Gotham', 'NY', '10010', [VolunteerSkills.ProblemSolving, VolunteerSkills.Leadership], new Set<string>(['2024-10-01', '2024-10-05']));
  
  // Additional Volunteers to match other events and skills
  let volunteer5 = new Volunteer('clarkKent', 'superman123', 'Clark Kent', '1000 Superman Lane', 'Metropolis', 'IL', '62960', [VolunteerSkills.Communication, VolunteerSkills.Empathy], new Set<string>(['2024-10-10']));
  let volunteer6 = new Volunteer('dianaPrince', 'wonderwoman123', 'Diana Prince', 'Themyscira Island', 'New York', 'NY', '10011', [VolunteerSkills.Leadership, VolunteerSkills.Teamwork], new Set<string>(['2024-10-20']));
  let volunteer7 = new Volunteer('barryAllen', 'flash123', 'Barry Allen', '123 Lightning Drive', 'Central City', 'IL', '60188', [VolunteerSkills.Teamwork, VolunteerSkills.ProblemSolving], new Set<string>(['2024-10-20']));
  let volunteer8 = new Volunteer('arthurCurry', 'aquaman123', 'Arthur Curry', '789 Ocean Avenue', 'Atlantis', 'NY', '10020', [VolunteerSkills.Leadership, VolunteerSkills.Communication], new Set<string>(['2024-10-10']));
  
  // Store all volunteers in a Map
  let volunteerMap = new Map<string, Volunteer>([
    ['johnDoe', volunteer1],
    ['janeSmith', volunteer2],
    ['peterParker', volunteer3],
    ['bruceWayne', volunteer4],
    ['clarkKent', volunteer5],
    ['dianaPrince', volunteer6],
    ['barryAllen', volunteer7],
    ['arthurCurry', volunteer8]
  ]);

  // Dummy data for Events
  let eventMap = new Map<string, Event>([
    ['Event 1', new Event('Community Cleanup', 'Help clean up Central Park.', 'Central Park', ['Teamwork', 'Leadership'], 'High', '2024-10-01')],
    ['Event 2', new Event('Food Drive', 'Organize and distribute food at the community center.', 'Community Center', ['Empathy', 'Communication'], 'Medium', '2024-10-10')],
    ['Event 3', new Event('Tree Planting', 'Plant trees in Riverside Park.', 'Riverside Park', ['Leadership', 'Teamwork'], 'Low', '2024-10-20')]
  ]);

  // State to track which checkboxes are checked (mapping event name to volunteer username)
  let checkedVolunteers: Map<string, Set<string>> = new Map();

  // Cross-reference users' availability with events
  function matchVolunteersToEvents(): Volunteer[] {
    const matchedVolunteers: Volunteer[] = [];
    eventMap.forEach((event) => {
      volunteerMap.forEach((volunteer) => {
        if (volunteer.availability.has(event.date) && volunteer.skills.some(skill => event.requiredSkills.includes(VolunteerSkills[skill]))) {
          matchedVolunteers.push(volunteer);
        }
      });
    });
    return matchedVolunteers;
  }

  // Function to handle checking/unchecking volunteers
  function handleCheck(eventName: string, volunteerUsername: string, isChecked: boolean): void {
    if (!checkedVolunteers.has(eventName)) {
      checkedVolunteers.set(eventName, new Set());
    }

    const checkedSet = checkedVolunteers.get(eventName)!;

    if (isChecked) {
      checkedSet.add(volunteerUsername);
    } else {
      checkedSet.delete(volunteerUsername);
    }
  }

  // Submit function to update events with only checked volunteers
  function updateAttendingUsers(): void {
    eventMap.forEach((event) => {
      const selectedVolunteers = checkedVolunteers.get(event.name);
      if (selectedVolunteers) {
        event.attendingUsers = Array.from(selectedVolunteers); // Add only checked users to the event
      }
    });
  }

  // Filter events by date
  function filterEventsByDate(date?: string): Map<string, Event> {
    const filtered = new Map<string, Event>();
    eventMap.forEach((event, key) => {
      if (!date || event.date === date) {
        filtered.set(key, event);
      }
    });
    return filtered;
  }

  // UI logic for filtering
  let dateFilter: string = '';
  let matchedVolunteers: Volunteer[] = matchVolunteersToEvents(); // Initial matched volunteers
  let filteredEvents: Map<string, Event> = eventMap; // Initial events

  function applyEventFilter(): void {
    filteredEvents = filterEventsByDate(dateFilter);
  }

  function applyVolunteerFilter(): void {
    matchedVolunteers = matchVolunteersToEvents();
  }

  function onSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission
    updateAttendingUsers(); // Update attending users
    applyEventFilter();
    applyVolunteerFilter();
  }
</script>

<div class="flex flex-col w-full max-w-4xl mx-auto mt-8 p-4">
  <h2 class="text-xl font-semibold mb-4">Match Volunteers</h2>
  <div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Event</th>
          <th>Username</th>
          <th>Date</th>
          <th>Skill</th>
          <th>Urgency</th>
          <th>Location</th>
          <th>Check (Toggle)</th>
        </tr>
      </thead>
      <tbody>
        {#each matchedVolunteers as volunteer}
          {#each Array.from(eventMap.values()) as event}
            {#if volunteer.availability.has(event.date) && volunteer.skills.some(skill => event.requiredSkills.includes(VolunteerSkills[skill]))}
              <tr>
                <td>{event.name}</td>
                <td>{volunteer.username}</td>
                <td>{event.date}</td>
                <td>{volunteer.skills.map(skill => VolunteerSkills[skill]).join(', ')}</td>
                <td>{event.urgency}</td>
                <td>{event.location}</td>
                <td><input type="checkbox" on:change={(e) => handleCheck(event.name, volunteer.username, e.target.checked)} /></td>
              </tr>
            {/if}
          {/each}
        {/each}
      </tbody>
    </table>
  </div>

 <div class="mt-4 mb-8">
    <button class="btn bg-blue-300 hover:bg-blue-400 text-black font-semibold w-auto px-6 py-3 rounded-lg transition duration-300 ease-in-out" on:click={onSubmit}>
      Submit
    </button>
  </div>

   <h2 class="text-xl font-semibold mb-4">Upcoming Events</h2>
  <div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Event Name</th>
          <th>Users Attending</th>
          <th>Description</th>
          <th>Location</th>
          <th>Skills</th>
          <th>Urgency</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {#each Array.from(filteredEvents.values()) as event}
          <tr>
            <td>{event.name}</td>
            <td>{event.attendingUsers.length}</td>
            <td>{event.description}</td>
            <td>{event.location}</td>
            <td>{event.requiredSkills.join(', ')}</td>
            <td>{event.urgency}</td>
            <td>{event.date}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>