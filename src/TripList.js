import React, { useEffect, useState } from 'react';

function TripList() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/trips/')
      .then(response => response.json())
      .then(data => setTrips(data))
      .catch(error => console.error('Error fetching trips:', error));
  }, []);

  return (
    <div>
      <h1>Trip List</h1>
      <ul>
        {trips.map(trip => (
          <li key={trip.id}>
            {trip.current_location} to {trip.dropoff_location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TripList;
