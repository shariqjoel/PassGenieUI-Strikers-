import React, { useState } from 'react';
import BackgroundImage from './Images/12.jpg';

import './SignUp.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    let isValid = true;

    if (!username) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!contact) {
      errors.contact = 'Contact is required';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log(`Username: ${username}, Password: ${password}`);
      // do something else, like submit the form
    }
  };

  return (
    <div className="login-container">
      <div className="column1">
        <img src={BackgroundImage} alt="Login Image" />
      </div>
      <div className="column2">
        <h2 style={{ marginLeft: 140 }}>Sign Up</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            {errors.contact && <p>{errors.contact}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p style={{ fontSize: 14 }}>Already Registered?</p>
      </div>
    </div>
  );
};

export default Login;
