import React from 'react';
import '../styles/Complete.css';
import Header from "components/Header";
import TextField from "@mui/material/TextField";
import { ActionType } from "reducer/userDataReducer";
import UserDataContext, { useUserDataContext } from "context/UserDataContext";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { setConstantValue } from 'typescript';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import Stack from '@mui/material/Stack';
import DateAdapter from '@mui/lab/AdapterDayjs';

interface RegisterFormProps {}
function Continue() {
  const { state } = useUserDataContext();
  const regCode = state.registrationCode;
  const codeRegex = new RegExp("(0-9)+");
  let isCodeValid: boolean =
  (codeRegex.test(regCode));

  const navigate = useNavigate();
  const didClickResume = () => {
    navigate("/register");
  };
  const didClickCancel = () => {
    navigate("/");
  };

  return (
    <div className='continue_page'
      style={{textAlign:"center",marginTop:200}}
    >
      <header>
          <h1>Resume Registration</h1>

        <TextField
        variant="outlined"
        label="Registration Code"
        type="name"
        placeholder="Registration Code eintragen"
        helperText={isCodeValid ? undefined : "Registration Code invalid Format!"}
        error={!isCodeValid}
        style={{height:48,width:600,marginBottom:40}}
        />
        <div className='bdate'
        style={{width:600}}
        >
      <LocalizationProvider dateAdapter={DateAdapter}>
      <Stack spacing={3}>
      <DesktopDatePicker
          
                label="For desktop"

                minDate={new Date('1900-01-01')}
                onChange={(newValue) => {

                }}
                renderInput={(params) => <TextField {...params} />} value={undefined}        />
      </Stack>
      </LocalizationProvider>
        </div>
        <div>
        <Button
            variant="contained"
            style={{
              height: 48,
              width: 600,
              marginTop:30
            }}
            onClick={() => {
              didClickResume();
            }}
        >
          Resume Registration
        </Button>
        </div>
        <div>
        <Button
            variant='outlined'
            style={{
              height: 48,
              width: 600,
              marginTop:20
            }}
            onClick={() => {
              didClickCancel();
            }}
        >
          Cancel
        </Button>
        </div>
      </header>
    </div>
  );
}

export default Continue;
