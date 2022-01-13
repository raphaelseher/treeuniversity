import React, { useState } from "react";
import { EnvironmentConsumer, IEnvironment } from "context/Environment";
import Header from "components/Header";
import RegisterForm from "components/RegisterForm";
import RegisterSidebar from "components/RegisterSidebar";
import "styles/Register.css";

function Register() {
  const renderData = (environment: IEnvironment) => {
    if (!environment.registrationCode) {
      return <p>Error: No Registration Code.</p>;
    } else {
      return (
        <div id="content">
          <RegisterForm registrationCode={environment.registrationCode} />
          <RegisterSidebar registrationCode={environment.registrationCode} />
        </div>
      );
    }
  };

  return (
    <EnvironmentConsumer>
      {([environment, _]) => (
        <div id="register-page">
          <Header registrationCode={environment.registrationCode} />
          {renderData(environment)}
        </div>
      )}
    </EnvironmentConsumer>
  );
}

export default Register;
