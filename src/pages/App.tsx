import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import "../styles/App.css";
import Storage, {
  useLocalStoredUser,
  IRegistrationData,
} from "../adapters/storage";

function App() {
  useEffect(() => {
    // save for sideeffect of changing data
    Storage.addTestData();
  }, []);

  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >("1", {
    firstname: "",
    lastname: "",
  });

  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  let isNameValid = nameRegex.test(userData?.firstname ?? "");

  let content;
  if (userData === undefined) {
    content = <p>No Data Found</p>;
  } else {
    content = (
      <div style={{ marginTop: "16px" }}>
        <TextField
          variant="outlined"
          label="Vorame"
          type="name"
          value={userData.firstname}
          onChange={(e) => {
            setUserData({ ...userData, firstname: e.target.value });
          }}
          placeholder="Vorname eintragen"
          helperText={isNameValid ? undefined : "Keine Sonderzeichen verwenden"}
          error={!isNameValid}
        />
        <div style={{ marginTop: "8px" }}>
          <Chip label={"Vorname: " + userData.firstname} color="success" />
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Treeuniversity</h1>
        <Link to="/register">
          <Button variant="contained">Register</Button>
        </Link>
        <Link to="/continue">
          <Button variant="outlined">ContinueRegistration</Button>
        </Link>
        <Link to="/complete">
          <Button variant="outlined">Complete</Button>
        </Link>
        {content}
      </header>
    </div>
  );
}

export default App;
