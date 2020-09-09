import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <div className="App">
          <Route exact path="/register" component={Register} />
          {/* <Route path="/" component={Login} /> */}
          {/*   <Route
            path="./components/LoginSignup/passwordReset"
            component={passwordReset}
          /> */}
        </div>
      </Switch>
    </div>
  );
}

export default App;
