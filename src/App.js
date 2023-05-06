import React, { useState } from 'react';
import BackgroundImage from './Images/aabbcc.gif'

import './App.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [link, setLink] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
 
   


    <div className="login-container">
       <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="/" className="nav-link">
            Logo
          </a>
        </li>

        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>

        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>

        <li className="nav-item">
          <a href="/login" className="nav-link">
            Login
          </a>
        </li>
      </ul>
    </nav>
  <div className="column1">
    <img src={BackgroundImage} alt="Login Image" />
  </div>
  <div className="column2"  >

    <h2  >Say Goodbye to Password Anxiety</h2>
    <form onSubmit={handleLogin}>
      <div className="input-group" > 
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
      </div>
      <div className="input-group" > 
        <label htmlFor="username">Website Name</label>
        <input
          type="email"
          id="email"
          value={website}
          
          onChange={(e) => setWebsite(e.target.value)}
        />
        
      </div>
      <div className="input-group" > 
        <label htmlFor="username">Website Link</label>
        <input
          type="tel"
          id="contact"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>

  </div>
</div>


  );
};

export default Login;
