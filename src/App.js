import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import Trips from './Trips';
import TripForm from './TripForm';
import Footer from './Footer'; // Import the Footer component
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        
        <nav className="mb-7 App-header">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">ABOUT</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link " to="/login">LOGIN</Link>
            </li>
          </ul>
          <h1 className="text-white font-weight-bold  text-center my-4">
          CENTER OF LOGISTICS AND TRANSPORT MANAGEMENT
        </h1>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/trip-form" element={<TripForm />} />
        </Routes>

        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
