import React from "react";
import "./style.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
                <input type="password" name="pwd" placeholder="Password" />
                <br></br>
                <input
                  type="password"
                  name="cpwd"
                  placeholder="Confirm Password"
                />
                <input type="text" name="address" placeholder="Address" />{" "}
                <br />
                <input type="text" name="phone" placeholder="Phone" />
                <select id="city" name="city" placeholder="Phone">
                  <option value="" disabled selected hidden>
                    Choose city
                  </option>
                  <option value="acc">Accra</option>
                  <option value="tma">Tamale</option>
                  <option value="ksi">Kumasi</option>
                </select>{" "}
                <br></br>
                <label>
                  <input name="agreement" type="checkbox" />I agree with the
                  term and conditions
                </label>{" "}
                <br />
                <button onClick={this.register} type="button" className="btn">
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