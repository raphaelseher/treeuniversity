import React from "react";
import Chip from "@mui/material/Chip";
import { useUserDataContext } from "context/UserDataContext";
import "styles/Header.css";

// Parameters are called Props in React.
type HeaderProps = { showRegistrationCode: boolean };
function Header(props: HeaderProps) {
  const { state, dispatch } = useUserDataContext();

  return (
    <div id="header">
      <header>
        <h3>Treeuniversity</h3>
        {
          // different way to do an "if" inside JSX
          state.registrationCode && (
            <div id="registration-code">
              <Chip label={state.registrationCode} />
            </div>
          )
        }
      </header>
    </div>
  );
}

export default Header;
