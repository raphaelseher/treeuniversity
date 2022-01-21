import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/App.css';
import StudentCard from 'components/StudentCard';
import Header from "components/Header";
import { Button } from '@mui/material';

function Complete() {
  return (
    <div>
      <header>
          <div
          style={{
            alignContent:"center"
          }}
          >
          <div
          style={{
            width:400,
            height:260,
            margin:30

          }}
          >
            <StudentCard />
          </div>
          <h1>Complete</h1>
          </div>
          <Link to="/App">
            <Button
            variant='contained'
            style={{
              height:48,
              width:203
            }}
            >
              Finish
            </Button>
          </Link>
      </header>
    </div>
  );
}

export default Complete;
