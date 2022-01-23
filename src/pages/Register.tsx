import React, { useState, useEffect } from "react";
import { EnvironmentConsumer, IEnvironment } from "context/Environment";
import Header from "components/Header";
import RegisterForm from "components/RegisterForm";
import RegisterSidebar from "components/RegisterSidebar";
import { useUserDataContext } from "context/UserDataContext";
import { useNavigate } from "react-router-dom";
import "styles/Register.css";

function Register() {
  const { state, dispatch } = useUserDataContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (!state.registrationCode) {
      navigate("/");
    }
  }, []);

  const renderData = () => {
    if (!state.registrationCode) {
      return "Please start registration";
    } else {
      return (
        <div id="content">
          <RegisterForm />
          <RegisterSidebar />
        </div>
      );
    }
  };

  return (
    <div id="register-page">
      <Header showRegistrationCode={true} />
      {renderData()}
    </div>
  );
}

export default Register;
