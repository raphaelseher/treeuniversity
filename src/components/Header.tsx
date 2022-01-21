import React from "react";
import Chip from "@mui/material/Chip";
import { useUserDataContext } from "context/UserDataContext";
import "styles/Header.css";
import { margin } from "@mui/system";

// Parameters are called Props in React.
type HeaderProps = { showRegistrationCode: boolean };
function Header(props: HeaderProps) {
  const { state, dispatch } = useUserDataContext();

  return (
    <div id="header">
      <header>
      <img 
        src={process.env.PUBLIC_URL+"/image/logo24.png"} 
        alt="treeicon" width="24" height="24" style={{margin:"16px"}}
      />
        <h3 style={{margin: "16px"}} >
          Treeuniversity
        </h3>
        {
          // different way to do an "if" inside JSX
          state.registrationCode && (
            <div id="registration-code" style={{alignSelf:"center"}}>
              <Chip label={state.registrationCode} />
            </div>
          )
        }
      </header>
    </div>
  );
}

export default Header;
