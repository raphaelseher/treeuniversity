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
    <div className="app">
      <Header showRegistrationCode={false} />
      <div className="app-content">
        <div className="image">
          <img src="/image/logo.png" alt="treeuniversity_logo"></img>
        </div>
        <div className="Text">
          <h1>Tree University</h1>
        </div>
        <div className="button-group">
          <Button
            className="button"
            variant="contained"
            onClick={() => {
              didClickRegister();
            }}
          >
            Start Registration
          </Button>
          <Link to="/continue" className="button">
            <Button className="button" variant="outlined">
              Resume Registration
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
