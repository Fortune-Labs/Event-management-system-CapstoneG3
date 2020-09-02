import React from "react";
import "./style.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        <div className="header">Registration</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <form>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />{" "}
                <br></br>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="pwd" placeholder="Password" />
                <br></br>
                <input type="text" name="cpwd" placeholder="Confirm Password" />
                <input type="text" name="address" placeholder="Address" />{" "}
                <br></br>
                <input type="text" name="phone" placeholder="Phone" />
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>
                <input type="text" name="city" placeholder="City" /> <br></br>
                <label>
                  <input name="agreement" type="checkbox" />I agree with the
                  term and conditions
                </label>{" "}
                <br />
                <button type="button" className="btn">
                  Create Account
                </button>
              </form>
              <footer>
                <p>dfdfdfdfdfd</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
