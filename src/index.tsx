import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Continue from "./pages/Continue";
import Complete from "./pages/Complete";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import UserDataContext from "context/UserDataContext";
import { reducer, defaultUserData } from "reducer/userDataReducer";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { theme } from "./theme";
import "./styles/index.css";

const Root: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, defaultUserData);
  const userDataProvider = { state: state, dispatch };

  return (
    <UserDataContext.Provider value={userDataProvider}>
      <BrowserRouter basename="/treeuniversity">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="register" element={<Register />} />
          <Route path="continue" element={<Continue />} />
          <Route path="complete" element={<Complete />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 - There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserDataContext.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
