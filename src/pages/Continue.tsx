import React, { useState } from "react";
import Header from "components/Header";
import TextField from "@mui/material/TextField";
import UserDataContext, { useUserDataContext } from "context/UserDataContext";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";

import Stack from "@mui/material/Stack";
import DateAdapter from "@mui/lab/AdapterDayjs";
import "styles/Continue.css";

interface RegisterFormProps {}
function Continue() {
  const { state } = useUserDataContext();
  const regCode = state.registrationCode;
  const codeRegex = new RegExp("(0-9)+");
  let isCodeValid: boolean = codeRegex.test(regCode);

  const navigate = useNavigate();
  const didClickResume = () => {
    navigate("/register");
  };
  const didClickCancel = () => {
    navigate("/");
  };

  const [date, setDate] = useState(new Date());

  return (
    <div className="continue">
      <Header showRegistrationCode={false} />
      <div className="continue-scroll">
        <div className="continue-content">
          <h1>Resume Registration</h1>
          <TextField
            variant="outlined"
            label="Registration Code"
            type="name"
            placeholder="Registration Code eintragen"
            helperText={
              isCodeValid ? undefined : "Registration Code invalid Format!"
            }
            error={!isCodeValid}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label="Date of Birth"
              minDate={new Date("1900-01-01")}
              onChange={(newValue) => {
                if (!newValue) return;
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              value={date}
            />
          </LocalizationProvider>
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              didClickResume();
            }}
          >
            Resume Registration
          </Button>
          <Button
            className="button"
            variant="outlined"
            onClick={() => {
              didClickCancel();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Continue;
