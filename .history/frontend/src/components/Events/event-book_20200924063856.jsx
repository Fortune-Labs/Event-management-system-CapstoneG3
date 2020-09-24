import React, { Component } from "react";
import "./event-book.css";
import { Link } from "react-router-dom";

class InputForm extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper">
        <div>
          <form className="form-wrapper">
            <h1>Booking Form</h1>

            <div className="time">
              Time:
              <select>
                <option>Morning</option>
                <option>Mid-morning</option>
                <option>Afternoon</option>
              </select>
            </div>

            <button>Book</button>
          </form>
        </div>
      </div>
    );
  }
}

export default InputForm;
