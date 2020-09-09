import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form className="form">
            <div className="email">
              <input type="text" name="email" placeholder="Enter Email" />
            </div>

            <div className="password">
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                required
              ></input>
            </div>
            <div className="login">
              <button className="btn">Login</button>
            </div>
            <Link to="/passwordReset" className="forgot">
              Forgot password?
            </Link>
            <small>
              Don't Have an Account? <Link to="register">Register Here</Link>
            </small>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
