import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/login" component={Login} />
            <Route path="passwordReset" component={passwordReset} />
            <Route exact path="/register" component={Register} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
