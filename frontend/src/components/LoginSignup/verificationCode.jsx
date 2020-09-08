import React, { Component } from "react";

class VerificationCode extends Component {
  render() {
    return (
      <div className="dif">
        <form className="wholeForm">
          <label>
            Verification Code
            <input
              name="code"
              type="text"
              placeholder="Enter verification code here"
              required
            ></input>
          </label>
        </form>
        <button className="btn">Confirm</button>
      </div>
    );
  }
}

export default VerificationCode;
