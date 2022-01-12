import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "components/StudentCard";
import "../styles/App.css";

function Register() {
  return (
    <div>
      <header>
        <h1>Register</h1>
        <Link to="/">Back</Link>
      </header>
      <StudentCard />
    </div>
  );
}

export default Register;
