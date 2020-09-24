import React from "react";
// import "./App.css";
// import PasswordReset from "./components/LoginSignup/passwordReset";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import Home from "./components/Home/home";
import Initial from "./components/Events/initial";
import Eventbook from "./components/Events/event-book";
import Events from "./components/Events/events";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import user from "./components/Dashboard/user";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/passwordReset" component={PasswordReset} />
          <Route
            exact
            path="/register"
            name="Register Page"
            component={Register}
          />
          <Route exact path="/initial" component={Initial} />
          <Route exact path="/event-book" component={Eventbook} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
