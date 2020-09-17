import React, { Component } from "react";
import "./style.css";

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
        <div className="btn">
          <button>Confirm</button>
        </div>
      </div>
    );
  }
}

export default VerificationCode;
