import React from "react";
import "./style.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Registration</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last name"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="cpassword">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="phone">
              <label htmlFor="phone">phone</label>
              <input
                type="phone"
                name="phone"
                placeholder=""
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="city">
              <label htmlFor="city">Choose City</label>
              <select
                id="city"
                name="city"
                noValidate
                onChange={this.handleChange}
              >
                <option value="" disabled selected hidden>
                  city
                </option>
                <option value="acc">Accra</option>
                <option value="tma">Tamale</option>
                <option value="ksi">Kumasi</option>
              </select>
            </div>

            <div className="register action-counter">
              <button onClick={this.register} type="submit" className="btn">
                Create Account
              </button>
              <small>Already Have an Account?</small>
            </div>
            <div>
              <p>Capstone Algorithm</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
