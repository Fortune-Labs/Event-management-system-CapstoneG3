import React from "react";
import "./style.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container">
        Registration
        <div className="content">
          <form>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
              />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="Enter Email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div>
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input type="text" name="address" placeholder="Address" />
            </div>
            <div>
              <label htmlFor="phone">phone</label>
              <input type="phone" name="phone" placeholder="" />
            </div>
            <div>
              <label htmlFor="city">Choose City</label>
              <select id="city" name="city">
                <option value="" disabled selected hidden>
                  city
                </option>
                <option value="acc">Accra</option>
                <option value="tma">Tamale</option>
                <option value="ksi">Kumasi</option>
              </select>
            </div>
            <label>
              <input name="agreement" type="checkbox" />I agree with the term
              and conditions
            </label>{" "}
            <div>
              <button onClick={this.register} type="submit" className="btn">
                Create Account
              </button>
            </div>
          </form>
          <footer>
            <p>Capstone Algorithm</p>
          </footer>
        </div>
      </div>
    );
  }
}
