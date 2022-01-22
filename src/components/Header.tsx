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
        <h3>Treeuniversity</h3>
        {state.registrationCode && props.showRegistrationCode && (
          <div id="registration-code">
            <Chip label={state.registrationCode} />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
