import React from "react";
import "./style.css";

//Regular expression that holds email validation of form example@thismail.com
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

//Regular expression that holds phone number validation of form (000-000-0000)
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

//Validate both empty and filled out form errors
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

//Components register
export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      cpassword: null,
      phone: null,
      address: null,
      city: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: "",
        phone: "",
        address: "",
        city: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      //Edit here to handle backed stuff
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        cpassword: ${this.state.cpassword}
        phone: ${this.state.phone}
        address: ${this.state.address}
        city: ${this.state.city}

      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    //Decision for error handling and validatio in all inputs
    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;

      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;

      case "password":
        formErrors.password =
          value.length < 8 ? "minimum 8 characaters required" : "";
        break;

      // Thinng about the logic to write for comform password...  think React has some libraries though.
      /*  case "cpassword":
        formErrors.cpassword = value;
        formErrors.password = value;
        formErrors.cpassword = formErrors.password ? "" : "password mismatch";
        break;
 */
      case "phone":
        formErrors.phone = phoneRegex.test(value) ? "" : "invalid phone number";
        break;

      case "address":
        formErrors.address = value.length < 15 ? "enter address properly" : "";
        break;

      case "city":
        formErrors.city =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        {" "}
        //Container for account creating
        <div className="form-wrapper">
          {" "}
          // form container
          <form onSubmit={this.handleSubmit} noValidate>
            <h1>Registration</h1>
            //First NAme
            <div className="firstName">
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>
            //Last Name
            <div className="lastName">
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>
            //Email
            <div className="email">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <input
                type="password"
                name="password"
                placeholder="Password"
                autocomplete="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="cpassword">
              <input
                type="password"
                name="cpassword"
                placeholder="Confirm Password"
                autocomplete="cpassword"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.cpassword.length > 0 && (
                <span className="errorMessage">{formErrors.cpassword}</span>
              )}
            </div>
            <div className="address">
              <input
                type="text"
                name="address"
                placeholder="Address"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.address.length > 0 && (
                <span className="errorMessage">{formErrors.address}</span>
              )}
            </div>
            <div className="phone">
              <input
                type="tel"
                name="phone"
                placeholder="Phone:012-345-6789"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phone.length > 0 && (
                <span className="errorMessage">{formErrors.phone}</span>
              )}
            </div>
            <div className="city">
              <select
                id="city"
                name="city"
                noValidate
                onChange={this.handleChange}
              >
                <option value="" disabled selected hidden>
                  Choose a city
                </option>
                <option value="acc">Accra</option>
                <option value="tma">Tamale</option>
                <option value="ksi">Kumasi</option>
              </select>
              {formErrors.city.length > 0 && (
                <span className="errorMessage">{formErrors.city}</span>
              )}
            </div>
            <div className="register action-counter">
              <button onClick={this.register} type="submit" className="btn">
                Create Account
              </button>
              <small>
                Already Have an Account? <a href="#">Login</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
