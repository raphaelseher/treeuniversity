import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css';

function Register() {
  return (
    <div>
      <header>
          <h1>Register</h1>
          <Link to="/">Back</Link>
      </header>
    </div>
  );
}

export default Register;
