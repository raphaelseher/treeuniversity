import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/Continue.css';
import Header from "components/Header"
import { Alert, TextField } from '@mui/material';
import Button from "@mui/material/Button";
import { width } from '@mui/system';
import Chip from "@mui/material/Chip";

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
          <Link to="/">
          <Button 
            variant="outlined" 
            size='large'
            style={{marginTop:"8px", width:"38%"}}
          >
              Cancel
          </Button>
          </Link>
        </div>

        <div style={{marginTop:"64px"}}>
          <span style={{width:"31%", display:"inline-block",textAlign:"right"}}></span>
          <span style={{width:"38%", display:"inline-block",textAlign:"center"}}>
          <Alert 
              severity="error"
            >Invalid login data</Alert>
          </span>
          <span style={{width:"31%", display:"inline-block",textAlign:"left"}}></span>
          <span style={{width:"38%", display:"block"}}>
            
          </span>
        </div>
        
      </div>
    </div>
  );
}

export default Continue;
