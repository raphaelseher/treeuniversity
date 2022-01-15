import React, { useState } from "react";
import IRegistrationData from "adapters/RegistrationData";
import { useLocalStoredUser } from "adapters/storage";

interface RegisterFormProps {}

function RegisterForm(props: RegisterFormProps) {
  return (
    <div id="form-content">
      <p>Form Content</p>
    </div>
  );
}

export default RegisterForm;
