import React, { Component } from "react";
import VerificationCode from "./verificationCode.jsx";

class PasswordReset extends Component {
  state = {
    IsSubmitted: false,
    email: "",
    passedEmailIndicator: false,
  };
  verificationComponent = () => {
    return this.state.IsSubmitted ? <VerificationCode /> : "";
  };
  handleSubmit = () => {
    //Todo- 1.Validate email  2.Send code to the email  3.Store code to user backend.
    this.setState({ IsSubmitted: true });
  };
  EmailIsValid = (yesEmail) => {
    let passwordSetPattern = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]{2,5}$/i;
    return passwordSetPattern.test(yesEmail);
  };
  onInputFieldChange = (element) => {
    const change = element.target;

    if (change.name === "email") {
      this.setState({ passedEmailIndicator: this.EmailIsValid(change.value) });
    }
  };
  emailMessage = () => {
    return this.state.passedEmailIndicator ? (
      <i className="fa fa-check-circle"></i>
    ) : (
      <i className="btn-danger">Invalid email</i>
    );
  };

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-form-wrapper">
          <h3>Forgot your password?</h3>
          <form className="wholeForm">
            <div>
              Your email
              <input
                name="email"
                type="email"
                placeholder="Enter your email here"
                onChange={this.onInputFieldChange}
                required
              ></input>
              <span>{this.emailMessage()}</span>
            </div>
            <div className="btn">
              <button className="" onClick={this.handleSubmit}>
                Submit.
              </button>
            </div>
          </form>
          {this.verificationComponent()}
        </div>
      </div>
    );
  }
}

export default PasswordReset;
