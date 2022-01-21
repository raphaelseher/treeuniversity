import React from 'react';
import StudentCard from 'components/StudentCard';
import Header from "components/Header";
import { Button } from '@mui/material';
import "styles/Complete.css";
import { textAlign, width } from '@mui/system';
import { Link, useNavigate } from "react-router-dom";

function Complete() {

  const navigate = useNavigate();
  const didClickFinish = () => {
    // TODO: Generate Registration ID and save empty data in localstore for it.
    // Send user to register page
    navigate("/");
  };

  return (
    <div className='CompleteScreen'>
          <div
          style={{
            width:400,
            height:260,
            margin:20
          }}
          >
            <StudentCard />
          </div>
          <h1
          style={{
            marginTop:30
          }}
          >Registration Complete</h1>
          <div
          style={{
            width:600,
            textAlign:'left'
          }}
          >
          <h2>Further Information</h2>
          <p 
          style={{
            textAlign:"justify"
          }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>

            <Button
            variant='contained'
            style={{
              height:48,
              width:600,
              marginTop:20,
              marginBottom:50
            }}
            onClick={() => {
              didClickFinish();
          }}
            >
              Finish
            </Button>

    </div>
  );
}

export default Complete;
