import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Initial from "./components/Events/initial";
import Admin from "./components/Dashboard/admin/admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route exact path="/" name="Home" component={Home} />
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/passwordReset" component={passwordReset} />
            <Route
              exact
              path="/register"
              name="Register Page"
              component={Register}
            />
            <Route exact path="/initial" component={Initial} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
