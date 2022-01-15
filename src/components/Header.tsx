import React from "react";
import { EnvironmentConsumer } from "context/Environment";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
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
        <Button
          variant="contained"
          onClick={() => {
            dispatch({
              type: ActionType.UpdateRegistrationCode,
              payload: {
                newCode: "1",
              },
            });
          }}
        >
          Set RegistrationCode to 1
        </Button>
      </header>
    </div>
  );
}

export default Header;
