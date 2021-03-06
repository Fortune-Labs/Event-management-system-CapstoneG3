import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Booking extends Component {
  state = {};
  render() {
    return (
      <div className="event-book-wrapper">
        <div className="event-book-form-wrapper">
          <form>
            <h1>Booking Form</h1>
            <div className="time">
              Time:
              <select>
                <option>Morning</option>
                <option>Mid-morning</option>
                <option>Afternoon</option>
              </select>
            </div>
            <div className="event-book">
              <button>Book</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Booking;
