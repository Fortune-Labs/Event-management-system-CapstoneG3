import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Route
            path="./components/LoginSignup/register.jsx"
            component={Register}
          />
          <Route path="/login" component={Login} />
          <Route
            path="./components/LoginSignup/passwordReset.jsx"
            component={passwordReset}
          />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
