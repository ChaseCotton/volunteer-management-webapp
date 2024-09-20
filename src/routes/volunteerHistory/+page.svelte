<script>
  export const eventHistory = [
    { name: "John Doe", event: "Community Cleanup", description: "Cleaning Up Trash", date: "2024-09-30", urgency: "High", skills: ["teamwork", "communication"], location: "Houston", participation: "yes", performance:8},
    { name: "John Doe", event: "Food Bank Support", description: "Sorting and packing food items", date: "2024-10-05", urgency: "Medium", skills: ["Reliability", "Teamwork"], location: "Los Angeles, CA", participation: "Yes", performance: 7 },
    { name: "John Doe", event: "Tree Planting Drive", description: "Planting trees in urban areas", date: "2024-10-10", urgency: "High", skills: ["Empathy", "Teamwork"], location: "Seattle, WA", participation: "Yes", performance: 9 },
    { name: "John Doe", event: "Senior Home Visits", description: "Spending time with elderly residents", date: "2024-10-15", urgency: "Low", skills: ["Communication", "Empathy"], location: "Chicago, IL", participation: "Yes", performance: 8 },
    { name: "John Doe", event: "Beach Cleanup", description: "Cleaning up plastic waste on the beach", date: "2024-10-20", urgency: "High", skills: ["Teamwork", "Positivity"], location: "Miami, FL", participation: "Yes", performance: 6 },
    { name: "John Doe", event: "Clothing Donation Drive", description: "Collecting and sorting clothes for donation", date: "2024-10-25", urgency: "Medium", skills: ["Organizational Skills", "Leadership"], location: "Dallas, TX", participation: "Yes", performance: 7 },
    { name: "John Doe", event: "Park Beautification", description: "Planting flowers and maintaining park areas", date: "2024-11-01", urgency: "Low", skills: ["Teamwork", "Time Management"], location: "Portland, OR", participation: "Yes", performance: 5 },
    { name: "John Doe", event: "Youth Mentorship", description: "Mentoring at-risk youth", date: "2024-11-05", urgency: "High", skills: ["Leadership", "Communication"], location: "Atlanta, GA", participation: "No", performance: null },
    { name: "John Doe", event: "Animal Shelter Support", description: "Caring for and feeding animals", date: "2024-11-10", urgency: "Medium", skills: ["Reliability", "Empathy"], location: "San Diego, CA", participation: "Yes", performance: 8 },
    { name: "John Doe", event: "Soup Kitchen Assistance", description: "Serving meals to those in need", date: "2024-11-15", urgency: "High", skills: ["Communication", "Teamwork"], location: "Boston, MA", participation: "Yes", performance: 9 },
    { name: "John Doe", event: "Recycling Campaign", description: "Promoting recycling in the community", date: "2024-11-20", urgency: "Low", skills: ["Positivity", "Organizational Skills"], location: "Phoenix, AZ", participation: "Yes", performance: 6 },
    { name: "John Doe", event: "Library Assistance", description: "Helping organize books and materials", date: "2024-11-25", urgency: "Medium", skills: ["Problem Solving", "Reliability"], location: "San Francisco, CA", participation: "No", performance: null },
    { name: "John Doe", event: "Blood Donation Drive", description: "Coordinating and assisting donors", date: "2024-12-01", urgency: "High", skills: ["Leadership", "Communication"], location: "New York, NY", participation: "Yes", performance: 7 },
    { name: "John Doe", event: "Disaster Relief Support", description: "Assisting in disaster-affected areas", date: "2024-12-05", urgency: "High", skills: ["Adaptability", "Teamwork"], location: "New Orleans, LA", participation: "Yes", performance: 8 },
    { name: "John Doe", event: "Neighborhood Watch", description: "Patrolling and reporting suspicious activities", date: "2024-12-10", urgency: "Low", skills: ["Reliability", "Problem Solving"], location: "Detroit, MI", participation: "No", performance: null },
    { name: "John Doe", event: "Art Therapy Workshop", description: "Guiding participants in art therapy sessions", date: "2024-12-15", urgency: "Medium", skills: ["Empathy", "Communication"], location: "Denver, CO", participation: "Yes", performance: 9 },
    { name: "John Doe", event: "Fundraising Event Support", description: "Assisting with event setup and coordination", date: "2024-12-20", urgency: "High", skills: ["Leadership", "Organizational Skills"], location: "Philadelphia, PA", participation: "Yes", performance: 10 },
    { name: "John Doe", event: "Homeless Shelter Aid", description: "Helping distribute supplies and food", date: "2024-12-25", urgency: "High", skills: ["Teamwork", "Empathy"], location: "Las Vegas, NV", participation: "Yes", performance: 8 },
    { name: "John Doe", event: "School Tutoring", description: "Tutoring students in various subjects", date: "2025-01-05", urgency: "Medium", skills: ["Adaptability", "Time Management"], location: "Nashville, TN", participation: "No", performance: null },
    { name: "John Doe", event: "Environmental Awareness Campaign", description: "Raising awareness on environmental issues", date: "2025-01-10", urgency: "Low", skills: ["Positivity", "Communication"], location: "Minneapolis, MN", participation: "Yes", performance: 7 },
    { name: "John Doe", event: "Community Gardening", description: "Maintaining community gardens", date: "2025-01-15", urgency: "Medium", skills: ["Reliability", "Teamwork"], location: "St. Louis, MO", participation: "Yes", performance: 6 },
    { name: "John Doe", event: "Winter Coat Drive", description: "Collecting and distributing winter coats", date: "2025-01-20", urgency: "High", skills: ["Organizational Skills", "Empathy"], location: "Cleveland, OH", participation: "Yes", performance: 9 },
    { name: "Jane Smith", event: "Food Drive", description: "Providing food to others", date: "2024-10-05", urgency: "Medium", skills: ["leadership"], location: "Spring", participation: "yes", performance:8 },
    { name: "Jane Smith", event: "Food Bank Assistance", description: "Sorting and packing food items", date: "2024-10-05", urgency: "Medium", skills: ["Teamwork", "Reliability"], location: "Austin, TX", participation: "Yes", performance: 7 },
    { name: "Jane Smith", event: "Tree Planting", description: "Planting trees in the community park", date: "2024-11-15", urgency: "Low", skills: ["Empathy", "Organizational Skills"], location: "Portland, OR", participation: "Yes", performance: 9 },
    { name: "Jane Smith", event: "Animal Shelter Volunteer", description: "Caring for animals at the shelter", date: "2024-09-25", urgency: "High", skills: ["Reliability", "Positivity"], location: "San Diego, CA", participation: "Yes", performance: 6 },
    { name: "Jane Smith", event: "Beach Cleanup", description: "Cleaning up trash along the beach", date: "2024-10-12", urgency: "High", skills: ["Teamwork", "Time Management"], location: "Miami, FL", participation: "Yes", performance: 8 },
    { name: "Jane Smith", event: "Elderly Home Visit", description: "Spending time and assisting elderly residents", date: "2024-12-01", urgency: "Medium", skills: ["Empathy", "Communication"], location: "New York, NY", participation: "Yes", performance: 10 },
    { name: "Jane Smith", event: "School Tutoring", description: "Helping students with their homework", date: "2024-09-28", urgency: "Medium", skills: ["Leadership", "Problem Solving"], location: "Chicago, IL", participation: "Yes", performance: 7 },
    { name: "Jane Smith", event: "Fundraising Event", description: "Assisting in organizing a charity fundraiser", date: "2024-10-22", urgency: "High", skills: ["Communication", "Organizational Skills"], location: "Seattle, WA", participation: "Yes", performance: 8 },
    { name: "Jane Smith", event: "Park Renovation", description: "Painting and fixing playground equipment", date: "2024-11-10", urgency: "Low", skills: ["Adaptability", "Reliability"], location: "Phoenix, AZ", participation: "No", performance: null },
    { name: "Jane Smith", event: "Blood Drive", description: "Helping with the organization of a local blood drive", date: "2024-12-08", urgency: "High", skills: ["Teamwork", "Positivity"], location: "Denver, CO", participation: "Yes", performance: 6 },
    { name: "Jane Smith", event: "Community Kitchen", description: "Preparing and serving meals to those in need", date: "2024-10-18", urgency: "Medium", skills: ["Time Management", "Empathy"], location: "San Francisco, CA", participation: "Yes", performance: 9 },
    { name: "Jane Smith", event: "Literacy Program", description: "Teaching reading and writing to adults", date: "2024-11-25", urgency: "Medium", skills: ["Communication", "Leadership"], location: "Boston, MA", participation: "Yes", performance: 8 },
    { name: "Jane Smith", event: "Library Volunteer", description: "Organizing books and helping visitors", date: "2024-09-29", urgency: "Low", skills: ["Reliability", "Teamwork"], location: "Nashville, TN", participation: "Yes", performance: 7 },
    { name: "Jane Smith", event: "Clothing Drive", description: "Collecting and sorting clothes for donation", date: "2024-10-07", urgency: "High", skills: ["Organizational Skills", "Problem Solving"], location: "Dallas, TX", participation: "No", performance: null },
    { name: "Jane Smith", event: "Habitat for Humanity", description: "Building homes for those in need", date: "2024-11-20", urgency: "High", skills: ["Leadership", "Teamwork"], location: "Atlanta, GA", participation: "Yes", performance: 10 },
    { name: "Jane Smith", event: "Community Garden", description: "Maintaining and planting in the community garden", date: "2024-09-26", urgency: "Low", skills: ["Adaptability", "Positivity"], location: "Cleveland, OH", participation: "Yes", performance: 8 },
    { name: "Jane Smith", event: "Recycling Drive", description: "Collecting and sorting recyclable materials", date: "2024-12-03", urgency: "Medium", skills: ["Time Management", "Problem Solving"], location: "Orlando, FL", participation: "Yes", performance: 6 },
    { name: "Jane Smith", event: "Charity Walk/Run", description: "Assisting with event setup and coordination", date: "2024-10-30", urgency: "High", skills: ["Organizational Skills", "Communication"], location: "Philadelphia, PA", participation: "No", performance: null },
    { name: "Jane Smith", event: "After-School Program", description: "Helping children with after-school activities", date: "2024-09-27", urgency: "Medium", skills: ["Empathy", "Leadership"], location: "Los Angeles, CA", participation: "Yes", performance: 9 },
    { name: "Jane Smith", event: "Disaster Relief", description: "Supporting disaster relief efforts", date: "2024-11-07", urgency: "High", skills: ["Adaptability", "Teamwork"], location: "New Orleans, LA", participation: "Yes", performance: 7 },
    { name: "Jane Smith", event: "Cultural Festival", description: "Volunteering at a cultural celebration", date: "2024-12-15", urgency: "Low", skills: ["Positivity", "Communication"], location: "San Antonio, TX", participation: "No", performance: null }
    ];
</script>

<h2 class="text-xl font-semibold mb-4 text-center">Volunteer History</h2>
<div class="overflow-x-auto">
    <table class="table w-full bg-base-100">
      <thead>
        <tr>
          <th>Name</th>
          <th>Event</th>
          <th>Description</th>
          <th>Date</th>
          <th>Skills</th>
          <th>Urgency</th>
          <th>Location</th>
          <th>Participation</th>
          <th>Performance</th>
        </tr>
      </thead>
      <tbody>
        {#each eventHistory as event1}
          <tr>
            <td>{event1.name}</td>
            <td>{event1.event}</td>
            <td>{event1.description}</td>
            <td>{event1.date}</td>
            <td>{event1.skills}</td>
            <td>{event1.urgency}</td>
            <td>{event1.location}</td>
            <td>{event1.participation}</td>
            <td>{event1.performance}</td>
          </tr>
        {/each}
      </tbody>
    </table>
</div>