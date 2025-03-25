import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed for navigation
import home1 from './photos/home1.jpg';
import home2 from './photos/home2.jpg';
import home3 from './photos/home3.png';

const Home = () => {
  return (
    <div className="home-container">
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={home1} className="d-block w-100" alt="Home 1" />
            <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="text-center">
                <h1>Welcome to Our Service</h1>
                <p>Your journey starts here!</p>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home2} className="d-block w-100" alt="Home 2" />
            <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="text-center">
                <h1>Quality and Reliability</h1>
                <p>We ensure the best service for you.</p>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home3} className="d-block w-100" alt="Home 3" />
            <div className="carousel-caption d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
              <div className="text-center">
                <h1>Join Us Today</h1>
                <p>Experience the difference with us.</p>
                <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
