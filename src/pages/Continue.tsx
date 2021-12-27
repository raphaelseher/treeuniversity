import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css';

function Continue() {
  return (
    <div>
      <header>
          <h1>Continue</h1>
          <Link to="/">Back</Link>
      </header>
    </div>
  );
}

export default Continue;
