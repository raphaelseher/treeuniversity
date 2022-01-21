import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Continue.css';
import Header from "components/Header"
import { TextField } from '@mui/material';
import Button from "@mui/material/Button";
import { width } from '@mui/system';

function Continue() {
  return (
    <div className="Continue"> 
    <Header showRegistrationCode={true}/>
      <div className="Inner">
      <header className="App-header">
          <h1>Resume Registration</h1>
        </header>
        <div>
        <TextField
          variant="outlined"
          label="Registration code"
          type="name"
          style={{marginTop:"24px", width:"38%"}}
        />
        </div>
        
        <div>
          <label 
            style={{marginTop:"4px"}}
          >
            Your registration code was sent to you by mail
          </label>
        </div>

        <div>
          <TextField
            variant="outlined"
            type="date"
            style={{marginTop:"12px", width:"38%"}}
          />
        </div>

        <div>
          <Button
            variant="contained"
            size="large"
            style={{marginTop:"16px", width:"38%"}}
          >
            Submit
          </Button>
        </div>

        <div>
        <Button 
          variant="outlined" 
          size='large'
          style={{marginTop:"8px", width:"38%"}}
        >
            Cancel
          </Button>
        </div>

      </div>
    </div>
  );
}

export default Continue;
