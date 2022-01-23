import React from "react";
import Chip from "@mui/material/Chip";
import { useUserDataContext } from "context/UserDataContext";
import "styles/Header.css";

type HeaderProps = { showRegistrationCode: boolean };
function Header(props: HeaderProps) {
  const { state, dispatch } = useUserDataContext();

  return (
    <div id="header">
      <header>
        <img
          src={process.env.PUBLIC_URL + "/image/logo24.png"}
          alt="treeicon"
          width="24"
          height="25"
        />
        <h3>Tree University</h3>
        {state.registrationCode && props.showRegistrationCode && (
          <div className="registration-code">
            <p>Registration Code</p>
            <Chip
              className="rounded-chip primary-chip"
              variant="outlined"
              label={state.registrationCode}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
