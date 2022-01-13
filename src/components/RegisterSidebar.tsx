import React, { useState } from "react";
import IRegistrationData from "adapters/RegistrationData";
import { useLocalStoredUser } from "adapters/storage";
import StudentCard from "components/StudentCard";

interface RegisterSidebarProps {
  registrationCode: string;
}

function RegisterSidebar(props: RegisterSidebarProps) {
  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  return (
    <div id="sidebar">
      <p>Sidebar</p>
    </div>
  );
}

export default RegisterSidebar;
