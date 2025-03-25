import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './photos/images.png'; // Adjust path as needed

function About() {
  return (
    <div className="container mt-5 text-center">
      <h2 className="fw-bold text-uppercase">About Us</h2>
      <hr className="w-25 mx-auto mb-4 border-2" />
      <img src={logo} alt="Company Logo" className="img-fluid my-3" style={{ maxWidth: '200px' }} />
      
      <h3 className="fw-bold text-uppercase mt-3">Organizational Profile</h3>
      <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
        Our Transport Management System (TMS) is a comprehensive solution designed to streamline logistics, optimize fleet operations, and enhance overall transportation efficiency.
      </p>
      <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
        With features like real-time tracking, automated route planning, and vehicle maintenance scheduling, our system ensures smooth operations for businesses of all sizes.
      </p>
      
      <h3 className="fw-bold text-uppercase mt-4">Our Vision</h3>
      <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
        To be a globally recognized leader in intelligent transport management solutions, known for cutting-edge technology, high-quality service, and impactful logistics management.
      </p>
      
      <h3 className="fw-bold text-uppercase mt-4">Our Mission</h3>
      <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
        To empower individuals and organizations with the knowledge and tools necessary to manage and utilize transport systems effectively, fostering innovation and driving sustainable development.
      </p>
      
      <h3 className="fw-bold text-uppercase mt-4">Background Information</h3>
      <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
        The Transport Management System is designed to enhance logistics efficiency through real-time data tracking and advanced management solutions.
      </p>
    </div>
  );
}

export default About;
