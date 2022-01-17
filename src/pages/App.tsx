import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Header from "components/Header";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import Storage from "adapters/storage";
import "styles/App.css";

function App() {
  useEffect(() => {
    // save for sideeffect of changing data
    Storage.addTestData();
  }, []);

  // Saving our data to the browsers local storage. This works like `useState`.
  // userData is the data to use in the component. setUserData used to change the values.
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;

  // regex used for validation of input
  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  let isNameValid = nameRegex.test(userData?.firstname ?? "");

  // content is branched to show "Nothing found" or the data here
  // in React this size of code & complexity should be a own component
  let content;
  if (userData === undefined) {
    content = <p>No Data Found</p>;
  } else {
    content = (
      // you can inject inline css like this or use css files like `App.css`
      <div style={{ marginTop: "16px" }}>
        <TextField
          variant="outlined"
          label="Vorname"
          type="name"
          value={userData.firstname}
          onChange={(e) => {
            // this will automatically save all the data to the local storage.
            // Check it with developer tools (F12 or Control+Shift+I)
            // { ...userData, [new values,]} is the Javascript Spread Operator
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            dispatch({
              type: ActionType.UpdateUserData,
              payload: {
                newData: { ...userData, firstname: e.target.value },
              },
            });
          }}
          placeholder="Vorname eintragen"
          helperText={isNameValid ? undefined : "Keine Sonderzeichen verwenden"}
          error={!isNameValid}
        />
        <div style={{ marginTop: "8px" }}>
          {
            // inject Code in this "JSX" with curly brackets
          }
          <Chip label={"Vorname: " + userData.firstname} />
        </div>
      </div>
    );
  }

  // this returns the "JSX"
  // JSX is like HTML with extra javascript injected code if needed

  const navigate = useNavigate();
  const didClickRegister = () => {
    // TODO: Generate Registration ID and save empty data in localstore for it.
    // Send user to register page
    navigate("/register");
  };

  return (
    <div className="App">
      <Header showRegistrationCode={false} />
      <header className="App-header">
        <h1>Treeuniversity</h1>
        <Button
          variant="contained"
          onClick={() => {
            didClickRegister();
          }}
        >
          Register
        </Button>
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
