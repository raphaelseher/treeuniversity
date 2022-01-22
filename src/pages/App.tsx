import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Header from "components/Header";
import Icon from "public/image/logo.png";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import "styles/App.css";

function App() {
  const { state, dispatch } = useUserDataContext();
  const navigate = useNavigate();
  const didClickRegister = () => {
    dispatch({
      type: ActionType.CreateUserData,
      payload: {},
    });
    navigate("/register");
  };

  return (
    <div className="App">
      <Header showRegistrationCode={false} />
      <header className="App-header">
        <div className="image">
          <img
            src="/image/logo.png"
            alt="treeuniversity_logo"
            style={{
              marginTop: 30,
              height: 200,
            }}
          ></img>
        </div>
        <div className="Text">
          <h1>Tree University</h1>
        </div>
        <div className="registerButton">
          <Button
            variant="contained"
            style={{
              height: 48,
              width: 203,
            }}
            onClick={() => {
              didClickRegister();
            }}
          >
            Register
          </Button>
        </div>
        <div className="continueButton">
          <Link to="/continue">
            <Button
              variant="outlined"
              style={{
                margin: 10,
                height: 48,
                width: 203,
              }}
            >
              Continue
            </Button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default App;
