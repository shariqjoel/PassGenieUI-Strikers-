import React, { useState } from 'react';
import BackgroundImage from './Images/12.jpg'

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-container">
  <div className="column1">
    <img src={BackgroundImage} alt="Login Image" />
  </div>
  <div className="column2"  >

    <h2 style={{marginLeft:140 }} >Login</h2>
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
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p style={{ fontSize:14 }}>Not Registered?</p>
  </div>
</div>


  );
};

export default Login;
