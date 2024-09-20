// volunteermatching.js

export const eventAssignments = [
  { name: "John Doe", event: "Community Cleanup", skill: "Team Leadership", date: "2024-09-30", urgency: "High", assigned: false },
  { name: "Jane Smith", event: "Food Drive", skill: "Organization", date: "2024-10-05", urgency: "Medium", assigned: false },
];

export const eventDetails = [
  { event: "Community Cleanup", skill: "Team Leadership", urgency: "High", date: "2024-09-30", location: "Central Park", assignedCount: 5 },
  { event: "Food Drive", skill: "Organization", urgency: "Medium", date: "2024-10-05", location: "Community Center", assignedCount: 10 },
];

// Function to filter event assignments by date
export const filterEventAssignmentsByDate = (date) => {
  return eventAssignments.filter(assignment => 
    !date || assignment.date === date
  );
};

// Function to filter event details by date
export const filterEventDetailsByDate = (date) => {
  return eventDetails.filter(detail => 
    !date || detail.date === date
  );
};