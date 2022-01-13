import React, { useState } from "react";
import { Link } from "react-router-dom";
import StudentCard from "components/StudentCard";
import "../styles/App.css";

function Register() {
  const [registrationCode, setRegistrationCode] = useState<string>("1");
  return (
    <div>
      <header>
        <h1>Register</h1>
        <Link to="/">Back</Link>
      </header>
      <StudentCard registrationCode={registrationCode} />
    </div>
  );
}

export default Register;
