import React, { useState } from "react";
import { useUserDataContext } from "context/UserDataContext";
import Header from "components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Storage from "adapters/storage";
import { ActionType } from "reducer/userDataReducer";
import "styles/Continue.css";

function Continue() {
  const { state, dispatch } = useUserDataContext();

  const today = new Date();
  today.setHours(0, 0, 0);

  const [regCode, setRegCode] = useState<string | undefined>(undefined);
  const [date, setDate] = useState(today);

  const isCodeValid = (value: string | undefined): boolean => {
    if (!value) return true;
    return !isNaN(Number(value));
  };

  const navigate = useNavigate();
  const didClickResume = () => {
    if (!regCode) return;

    const data = Storage.dataFor(regCode);
    if (data && data.birthDate == date.toISOString()) {
      dispatch({
        type: ActionType.UpdateRegistrationCode,
        payload: {
          newCode: regCode,
        },
      });
      navigate("/register");
    } else {
      console.log("not same");
    }
  };
  const didClickCancel = () => {
    navigate("/");
  };

  return (
    <div className="continue">
      <Header showRegistrationCode={false} />
      <div className="continue-scroll">
        <div className="continue-content">
          <h1>Resume Registration</h1>
          <TextField
            className="fields"
            variant="outlined"
            label="Registration Code"
            type="text"
            placeholder="12345"
            value={regCode}
            onChange={(e) => {
              setRegCode(e.target.value);
            }}
            helperText={
              isCodeValid(regCode) ? undefined : "Only digits allowed"
            }
            error={!isCodeValid(regCode)}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="date-picker">
              <DesktopDatePicker
                label="Date of Birth"
                minDate={new Date("1900-01-01")}
                onChange={(newValue) => {
                  if (!newValue) return;
                  newValue.setHours(0, 0, 0);
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                value={date}
              />
            </div>
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
