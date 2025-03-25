import React from 'react';
import { Link } from 'react-router-dom';
import home1 from './photos/home1.jpg';
import home2 from './photos/home2.jpg';
import home3 from './photos/home3.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = () => {
  return (
    <div className="home-container">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
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

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
