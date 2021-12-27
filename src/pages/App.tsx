import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/App.css';
import Storage, { useLocalStoredUser, IRegistrationData } from '../adapters/storage';

function App() {
    useEffect(() => {
        // save for sideeffect of changing data
        Storage.addTestData(); 
    }, []);

    const [userData, setUserData] = useLocalStoredUser("1"); 
    
  return (
    <div className="App">
      <header className="App-header">
          <h1>Treeuniversity</h1>
          <Link to="/register">Register</Link>
          <Link to="/continue">ContinueRegistration</Link>
          <Link to="/complete">Complete</Link>
      </header>

       <input
        type="text"
        placeholder="enter your name"
          onChange={(e) => { 
              setUserData({ ...userData, firstname: e.target.value })}
          }
        value={userData.firstname}
      /> 
      <p>{ userData.firstname }</p>
    </div>
  );
}

export default App;
