import React, { useRef, Component } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import ErrorMessage from "./errorMessages";
import { Link } from "react-router-dom";

//Regular expression that holds email validation of form example@thismail.com
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
//Regular expression that holds phone number validation of form (000-000-0000)
const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const UseFormFuction = () => {
  const { register, handleSubmit, errors, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (formData) => {
    console.log(formData);
    function initialPage() {
      document.location.href = "/initial";
    }

    let url = "http://127.0.0.1:8000/auth/register/";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          <h1 className="register-header">Registration</h1>
          <div className="firstName">
            <input
              type="text"
              name="firstName"
              ref={register({ required: true, minLength: 3 })}
              placeholder="Enter First Name"
            />
            <ErrorMessage error={errors.firstName} />
          </div>
          <div className="lastName">
            <input
              type="text"
              name="lastName"
              ref={register({ required: true, minLength: 3 })}
              placeholder="Enter Last name"
            />
            <ErrorMessage error={errors.lastName} />
          </div>
          <div className="email">
            <input
              type="text"
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: emailRegex,
                  message: "invalid email address",
                },
              })}
              placeholder="Enter Email"
            />
            <ErrorMessage error={errors.email} />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register({ required: true, maxLength: 8 })}
            />
            <ErrorMessage error={errors.password} />
          </div>
          <div className="cpassword">
            <input
              type="password"
              name="cpassword"
              ref={register({
                required: true,
                validate: (value) =>
                  value === password.current || "Passwords do not match.",
              })}
              placeholder="Confirm Password"
            />
            <ErrorMessage error={errors.cpassword} />
          </div>
          <div className="username">
            <input
              type="text"
              name="username"
              ref={register({ required: true, minLength: 3 })}
              placeholder="Enter Username"
            />
            <ErrorMessage error={errors.username} />
          </div>

          <div className="phone">
            <input
              type="tel"
              name="phone"
              placeholder="Phone:012-345-6789"
              ref={register({
                required: true,
                pattern: {
                  value: phoneRegex,
                  message: "invalid phone",
                },
              })}
            />
            <ErrorMessage error={errors.phone} />
          </div>
          <div className="address">
            <input
              type="text"
              name="address"
              ref={register({ required: true, maxLength: 20 })}
              placeholder="Address"
            />
            <ErrorMessage error={errors.address} />
          </div>

          <div className="register action-counter">
            <button type="submit" className="btn1">
              Create Account
            </button>
            <small>
              Already Have an Account? <Link to="Login">Login</Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};
//Components register
class Register extends Component {
  render() {
    return (
      <div>
        <UseFormFuction />
      </div>
    );
  }
}

export default Register;
