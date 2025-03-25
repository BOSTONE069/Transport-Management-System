import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './photos/0x0.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './photos/images.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { username, password };

    fetch('http://127.0.0.1:8000/api/log/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Logged successfully") {
          setSuccessMessage('Login successful!');
          navigate('/trips'); // Navigate to the trips page
          setErrorMessage('');
        } else {
          setErrorMessage('Login failed. Please try again.');
          setSuccessMessage('');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="col-md-6 d-flex align-items-center justify-content-center position-relative" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="position-absolute w-100 h-100 bg-dark opacity-50"></div>
        <div className="text-white text-center position-relative">
          <h1 className="display-4 fw-bold">Welcome,</h1>
          <p className="fs-5">Let's Connect! To the Home of Logistics.</p>
        </div>
      </div>
      
      <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
        <div className="p-5 shadow-lg rounded border" style={{ width: '400px' }}>
          <div className="text-center mb-4">
            <img src={img} alt="Logo" className="mb-2" />
            <h2 className="fw-bold">Transport Management App</h2>
            <p className="text-muted">Login to access your account</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <label className="form-label">Username</label>
            <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
            <button type="submit" className="btn btn-danger w-100">Login</button>
          </form>
          
          <div className="text-end mb-3">
            <a href="#" className="text-primary text-decoration-none">Forgot password?</a>
          </div>
          
          {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
          {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
          
          <p className="text-center text-muted mt-3">Don't have an account? <a href="#" className="text-danger text-decoration-none">Register</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
