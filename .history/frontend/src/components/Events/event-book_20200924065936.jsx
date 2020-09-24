import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Eventbook extends Component {
  state = {};
  render() {
    return (
      <div className="event-book-wrapper">
        <div>
          <form className="event-book-form-wrapper">
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

export default Eventbook;
