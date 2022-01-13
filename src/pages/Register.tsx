import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "components/Header";
import StudentCard from "components/StudentCard";
import { EnvironmentConsumer } from "context/Environment";
import "styles/Register.css";

function Register() {
  return (
    <EnvironmentConsumer>
      {([environment, _]) => (
        <div id="register-page">
          <Header registrationCode={environment.registrationCode} />
          <div id="content">
            <div id="form-content">
              <p>Form Content</p>
            </div>
            <div id="sidebar">
              <p>Sidebar</p>
            </div>
          </div>
          {environment.registrationCode && (
            <StudentCard registrationCode={environment.registrationCode} />
          )}
        </div>
      )}
    </EnvironmentConsumer>
  );
}

export default Register;
