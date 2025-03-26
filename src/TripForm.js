import React, { useState } from 'react';
import './TripForm.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Map from './Map'; // Import the Map component

function TripForm() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [successMessage, setSuccessMessage] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [currentCycleUsed, setCurrentCycleUsed] = useState(0);
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const tripData = { 
      current_location: currentLocation, 
      pickup_location: pickupLocation, 
      dropoff_location: dropoffLocation,
      current_cycle_used: parseFloat(currentCycleUsed) 
    };

    fetch('http://127.0.0.1:8000/api/trips/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tripData),
    })
      .then(response => response.json())
      .then(data => {
        if (!data.id) {
          throw new Error('Invalid response from server');
        }
        console.log('Success:', data);
        setSuccessMessage('Trip details submitted successfully'); // Set success message
        // Reset form fields
        setCurrentLocation('');
        setPickupLocation('');
        setDropoffLocation('');
        setCurrentCycleUsed(0);
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>TRIPS TAKEN BY THE TRUCK DRIVER</h3>

          {successMessage && <div className="alert alert-success">{successMessage}</div>} {/* Display success message */}
          
          <div className="card">
           
            <form className="form-card" onSubmit={handleSubmit}>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Current Location<span className="text-danger"> *</span></label>
                  <input type="text" value={currentLocation} onChange={(e) => setCurrentLocation(e.target.value)} required />
                </div>
          <Map start={{ lng: parseFloat(currentLocation.split(',')[0]), lat: parseFloat(currentLocation.split(',')[1]) }} end={{ lng: parseFloat(dropoffLocation.split(',')[0]), lat: parseFloat(dropoffLocation.split(',')[1]) }} /> {/* Render the Map component */}
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Pickup Location<span className="text-danger"> *</span></label>
                  <input type="text" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Dropoff Location<span className="text-danger"> *</span></label>
                  <input type="text" value={dropoffLocation} onChange={(e) => setDropoffLocation(e.target.value)} required />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">Current Cycle Used<span className="text-danger"> *</span></label>
                  <input type="number" value={currentCycleUsed} onChange={(e) => setCurrentCycleUsed(e.target.value)} required />
                </div>
              </div>
              <div className="row justify-content-end ">
                <div className="form-group col-sm-6">
                <button type="submit" className="submit-button button-container">Submit</button>
                <br />
                <button onClick={() => navigate('/login')} className="logout-button button-container" >Logout</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripForm;
