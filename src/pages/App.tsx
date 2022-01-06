import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import Storage, {
  useLocalStoredUser,
  IRegistrationData,
} from "../adapters/storage";

function App() {
  useEffect(() => {
    console.log("useEffect");
    // save for sideeffect of changing data
    Storage.addTestData();
  }, []);

  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >("1", {
    firstname: "",
    lastname: "",
  });

  let content;
  if (userData === undefined) {
    content = <p>Nothing Found</p>;
  } else {
    content = (
      <div>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            setUserData({ ...userData, firstname: e.target.value });
          }}
          value={userData.firstname}
        />
        <p>{userData.firstname}</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Treeuniversity</h1>
        <Link to="/register">Register</Link>
        <Link to="/continue">ContinueRegistration</Link>
        <Link to="/complete">Complete</Link>
      </header>
      {content}
    </div>
  );
}

export default App;
