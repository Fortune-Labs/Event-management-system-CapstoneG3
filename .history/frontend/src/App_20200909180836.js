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
        <Route>
          <div className="App">
            <Route path="/" component={Login} />
            <Route path="/passwordReset" component={passwordReset} />
            <Route exact path="/register" component={Register} />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
