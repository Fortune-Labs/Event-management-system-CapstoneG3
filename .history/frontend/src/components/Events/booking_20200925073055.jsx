import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Booking extends Component {
  state = {};
  render() {
    return (
      <div className="event-book-wrapper">
            <div class="title">
                <h1>Booking form</h1>
            </div>
            <div>
                <div class="input-fields">
                    <input type="text" class="input" placeholder="Name">
                        <input type="text" class="input" placeholder="Schedule">
                            <input type="text" class="input" placeholder="Subject">
    </div> 
            </div>
      </div>
    );
  }
}

export default Booking;
