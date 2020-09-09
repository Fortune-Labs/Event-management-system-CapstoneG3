import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="login-form-wrapper">
          <h1 className="login-header">Login Here</h1>

          <form className="login-form">
            <div className="login-email">
              <input type="text" name="email" placeholder="Enter Email" />
            </div>

            <div className="login-password">
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                required
              ></input>
            </div>
            <div className="pwd-reset">
              <Link to="/passwordReset" className="forgot">
                Forgot password?
              </Link>
            </div>
            <div className="login">
              <button className="btn">Login</button>
            </div>
            <div>
              <small>
                Don't Have an Account? <Link to="register">Register Here</Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
