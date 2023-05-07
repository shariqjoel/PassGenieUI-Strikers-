import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
const PasswordsList = () => {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    // Fetch passwords from backend API or local storage
    const retrievedPasswords = [      { id: 1, username: "user1", email: "user1@example.com", password: "password1" },      { id: 2, username: "user2", email: "user2@example.com", password: "password2" },      { id: 3, username: "user3", email: "user3@example.com", password: "password3" },  { id: 5, username: "user2", email: "user2@example.com", password: "password2" },      { id: 4, username: "user3", email: "user3@example.com", password: "password3" }, { id: 7, username: "user2", email: "user2@example.com", password: "password2" },      { id: 6, username: "user3", email: "user3@example.com", password: "password3" }, { id: 9, username: "user2", email: "user2@example.com", password: "password2" },      { id: 8, username: "user3", email: "user3@example.com", password: "password3" }, { id: 8, username: "user3", email: "user3@example.com", password: "password3" }, { id: 8, username: "user3", email: "user3@example.com", password: "password3" }, 
    { id: 8, username: "user3", email: "user3@example.com", password: "password3" },   ];
    setPasswords(retrievedPasswords);
  }, []);
  const [clickedPassword, setClickedPassword] = useState(null);

  const toggleShowPassword = (id) => {
    setClickedPassword((prevId) => (prevId === id ? null : id));
  };
  return (
    <div>
    <h2 style={{marginLeft:550}}  >Your Saved Password List</h2>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {passwords.map((password) => (
        <div
          key={password.id}
          style={{
            backgroundColor: "#E9EEF4",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px",
            width: "300px",
            
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
            transition: "box-shadow 0.6s ease",
            position: "relative",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0px 4px 10px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.transform = "translateY(-6px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0px 2px 6px rgba(0.3, 0.3, 0.3, 0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>ID: {password.id}</h3>
          <p style={{ marginBottom: "5px" }}>Username: {password.username}</p>
          <p style={{ marginBottom: "5px" }}>Email: {password.email}</p>
          {clickedPassword === password.id ? (
            <p style={{ marginBottom: "5px" }}>Password: {password.password}</p>
          ) : (
            <button
            onClick={() => toggleShowPassword(password.id)}
            style={{
              backgroundColor: "#7066e0",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
              transition: "box-shadow 0.3s ease",
              cursor: "pointer",
              outline: "none",
              marginTop: "10px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0px 2px 6px rgba(0.3, 0.3, 0.3, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Show Password
          </button>
          
          
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default PasswordsList;
