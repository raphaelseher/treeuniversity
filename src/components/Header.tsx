import React from "react";
import { EnvironmentConsumer } from "context/Environment";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
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
        <EnvironmentConsumer>
          {([environment, setEnvironment]) => (
            <Button
              variant="contained"
              onClick={() => {
                setEnvironment({ ...environment, registrationCode: "1" });
              }}
            >
              Set RegistrationCode to 1
            </Button>
          )}
        </EnvironmentConsumer>
      </header>
    </div>
  );
}

export default Header;
