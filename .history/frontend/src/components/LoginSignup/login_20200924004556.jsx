import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Login extends Component {
  state = {
    username: "",
    password: "",
    passedEmailIndicator: false,
    IsSubmitted: false,
  };

  onInputFieldChange = (element) => {
    const change = element.target;
    this.setState({ [change.name]: change.value });
    if (change.name === "email") {
      this.setState({ passedEmailIndicator: this.validEmail(change.value) });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ IsSubmitted: false });
    let url = "http://127.0.0.1:8000/api/login/";
    let formdata = {
      username: this.state.username,
      password: this.state.password,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((response) => {
      if (response.status === 200) {
        console.log("Logged in successfully", response);
        this.setState({ IsSubmitted: true });
      } else {
        // const error = await response.json()
        alert("Unable to log in");
      }
    });
  };

  validEmail = (yesEmail) => {
    let passwordSetPattern = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,5}$/i;
    return passwordSetPattern.test(yesEmail);
  };

  render() {
    if (this.state.IsSubmitted) {
      return <Redirect to="/initial" />;
    }
    return (
      <div className="login-wrapper">
        <div className="login-form-wrapper">
          <h1 className="login-header">Login Here</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="email">
              <label>Email</label>
              <input
                type="text"
                name="username"
                placeholder="Enter Email"
                onChange={this.onInputFieldChange}
                value={this.state.username}
              ></input>
            </div>

            <div className="password">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={this.onInputFieldChange}
                value={this.state.password}
                required
              ></input>
            </div>

            <div className="login">
              {/* <div className="reset-pwd">
                <Link to="/passwordReset" className="forgot">
                  Forgot password?
                </Link>
              </div> */}
              <div className="btn">
                <button className="" type="submit">
                  Login
                </button>
              </div>
              <div>
                <small>
                  Don't Have an Account?
                  <Link to="register">Register Here</Link>
                </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
