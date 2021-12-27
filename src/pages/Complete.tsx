import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css';

function Complete() {
  return (
    <div>
      <header>
          <h1>Complete</h1>
          <Link to="/">Back</Link>
      </header>
    </div>
  );
}

export default Complete;
