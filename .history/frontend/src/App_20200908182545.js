import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup//Login.jsx";
import passwordReset from "./components/LoginSignup/passwordReset.jsx";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Register />
      <BrowserRouter>
        <div className="App">
          <Route path="/login" component={Login} />
          <Route path="/passwordReset" component={passwordReset} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
