import React, { useState } from "react";
import IRegistrationData from "adapters/RegistrationData";
import { useLocalStoredUser } from "adapters/storage";

interface RegisterFormProps {
  registrationCode: string;
}

function RegisterForm(props: RegisterFormProps) {
  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  return (
    <div id="form-content">
      <p>Form Content</p>
    </div>
  );
}

export default RegisterForm;
