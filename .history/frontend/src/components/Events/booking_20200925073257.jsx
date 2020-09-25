import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Booking extends Component {
  state = {};
  render() {
    return (
      <div className="event-book-wrapper">
        <div className="title">
          <h1>Booking form</h1>
        </div>
        <div className="msg">
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
        <div class="msg">
          <textarea placeholder="Message"></textarea>
          <div class="btn-book">send</div>
        </div>
      </div>
    );
  }
}

export default Booking;
