import React, { useState } from "react";
import IRegistrationData from "adapters/RegistrationData";
import { useLocalStoredUser } from "adapters/storage";
import StudentCard from "components/StudentCard";
import Button from "@mui/material/Button";
import StatusTimeline from "components/StatusTimeline";
import "styles/RegisterSidebar.css";
import { addSubmitMessage } from "adapters/FakeTimelineGenerator";

interface RegisterSidebarProps {
  registrationCode: string;
}

function RegisterSidebar(props: RegisterSidebarProps) {
  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  const buttonTitle = "Submit";

  return (
    <div id="sidebar">
      <div className="sidebar-content">
        <StudentCard registrationCode={props.registrationCode} />
        <Button
          className="submit-button"
          variant="contained"
          onClick={() => {
            addSubmitMessage([userData, setUserData]);
          }}
        >
          {buttonTitle}
        </Button>
      </div>
      <hr />
      <div className="sidebar-content">
        <h2>Status Timeline</h2>
        <StatusTimeline registrationCode={props.registrationCode} />
      </div>
    </div>
  );
}

export default RegisterSidebar;
