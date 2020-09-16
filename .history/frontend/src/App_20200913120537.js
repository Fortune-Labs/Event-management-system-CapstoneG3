import React from "react";
import "./App.css";
import Register from "./components/LoginSignup/register";
import Login from "./components/LoginSignup/login";
import passwordReset from "./components/LoginSignup/passwordReset";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <div className="App">
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/passwordReset" component={passwordReset} />
            <Route exact path="/register" component={Register} />
          </div>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
