import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Initial from "./components/Events/initial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/" name="Home" component={Home} />
            <Route path="/login" name="Login Page" component={Login} />
            <Route path="/passwordReset" component={passwordReset} />
            <Route exact path="/register" component={Register} />
            <Route path="/initial" component={Initial} />
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
