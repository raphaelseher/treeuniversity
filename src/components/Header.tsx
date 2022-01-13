import React from "react";
import Chip from "@mui/material/Chip";
import "styles/Header.css";

// Parameters are called Props in React.
type HeaderProps = { registrationCode: string | undefined };
function Header(props: HeaderProps) {
  return (
    <div id="header">
      <header>
        <h3>Treeuniversity</h3>
        {
          // different way to do an "if" inside JSX
          props.registrationCode && (
            <div id="registration-code">
              <Chip label={props.registrationCode} />
            </div>
          )
        }
      </header>
    </div>
  );
}

export default Header;
