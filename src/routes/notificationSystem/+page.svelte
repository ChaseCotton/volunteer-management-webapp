<script>
    export const notifications = [
      { type:"New Event Notification", details:"You have been assigned to volunteer at the Toy Drive"},
      { type:"Event Match", details:"We think you would be a great fit for volunteering at the Career Fair"},
      { type:"A Event Manager Matched You", details:"An event manager believes you are a great fit for the tutoring role at SJHS"},
      { type:"Reminder", details:"REMINDER! You are signed up to volunteer at the Baseball Game tmrw at 9 AM CST at Minute Maid Field"},
      { type:"Update", details:"The Book Fair at the Brazoria Neighborhood Library is Canceled"},
]     
</script>

<h2 class="text-xl font-semibold mb-4 text-center">Notification System</h2>
<div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Notification Type</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {#each notifications as noti}
          <tr>
            <td>{noti.type}</td>
            <td>{noti.details}</td>
          </tr>
        {/each}
      </tbody>
    </table>
</div>