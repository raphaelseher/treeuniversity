import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "components/Header";
import StudentCard from "components/StudentCard";
import "../styles/App.css";
import { EnvironmentConsumer } from "context/Environment";

function Register() {
  return (
    <EnvironmentConsumer>
      {([environment, setEnvironment]) => (
        <div>
          <Header registrationCode={environment.registrationCode} />
          {environment.registrationCode && (
            <StudentCard registrationCode={environment.registrationCode} />
          )}
          <Link to="/">Back</Link>
        </div>
      )}
    </EnvironmentConsumer>
  );
}

export default Register;
