import React from "react";
import StudentCard from "components/StudentCard";
import Header from "components/Header";
import { Button } from "@mui/material";
import "styles/Complete.css";
import { textAlign, width } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";

function Complete() {
  const navigate = useNavigate();
  const didClickFinish = () => {
    navigate("/");
  };

  return (
    <div className="complete">
      <Header showRegistrationCode={false} />
      <div className="complete-scroll">
        <div className="complete-content">
          <div className="card-wrapper">
            <StudentCard />
          </div>
          <h1>Registration Complete</h1>
          <div>
            <h2>Further Information</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <Button
            className="button"
            variant="contained"
            onClick={() => {
              didClickFinish();
            }}
          >
            Finish
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Complete;
