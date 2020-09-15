import React, { Component } from "react";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <form className="form-wrapper">
          <h1>Booking Form</h1>
          <div className="name">
            Name:
            <input
              name="firstname"
              type="text"
              placeholder="First Name"
            ></input>
            <input name="Lastname" type="text" placeholder="Last Name"></input>
          </div>

          <div className="email">
            Email:
            <input
              name="email"
              type="text"
              placeholder="eg. myemail@example.com"
            ></input>
          </div>

          <div className="number">
            Phone Number:
            <input
              name="number"
              type="text"
              placeholder="eg. mobile/telephone"
            ></input>
          </div>

          <button>Book</button>
        </form>
      </div>
    );
  }
}

export default InputForm;
