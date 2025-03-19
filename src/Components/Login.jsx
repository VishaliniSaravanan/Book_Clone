import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Simulate a successful login
    console.log('Login successful');
    navigate('/'); // Redirect to home
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    console.log('Sign-up successful');
    setIsSigningUp(false); // Go back to the login form
  };

  return (
    <div className="login-container">
      {isSigningUp ? (
        <form className="login-form" onSubmit={handleSignUp}>
           <div className="bookmyshow-logo">
          <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1ec7711b-5527-46d7-84fa-acbb5ef0a0df_666x222.png" alt="BookMyShow Logo" />
          </div>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{' '}
            <a href="#" onClick={() => setIsSigningUp(false)}>
              Login
            </a>
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
           <div className="bookmyshow-logo">
          <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F1ec7711b-5527-46d7-84fa-acbb5ef0a0df_666x222.png" alt="BookMyShow Logo" />
          </div>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={() => setIsSigningUp(true)}>
              Sign Up
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
