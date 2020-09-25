import React, { Component } from "react";
import "./booking.css";
import { Link } from "react-router-dom";

class Booking extends Component {
  state = {};
  render() {
    return (
      <div className="event-book-wrapper1">
        <div className="title">
          <h1>Booking form</h1>
        </div>
        <div className="booking-form">
          <form className="input-fields">
            <input name="name" type="text" placeholder="Name"></input>
            <input name="shedule" type="text" placeholder="Schedule"></input>
            <input name="subject" type="text" placeholder="Subject"></input>
          </form>
        </div>
        <div class="msg">
          <textarea placeholder="Message"></textarea>
          <div class="btn-book">
            <Link to="/initial">Book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
