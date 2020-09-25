import React, { Component } from "react";
import "./style.css";
//import { Link } from "react-router-dom";
import { Redirect } from "react-router";

class Eventbook extends Component {
  state = {
    HasBooked: false,
    time: null,
    event: null,
    user: null,
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ HasBooked: false });
    let url = "http://127.0.0.1:8000/event/event-book/";
    let formdata = {
      user: this.state.user,
      event: this.state.event,
      time: this.state.time,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then((response) => {
      if (response.status === 201) {
        console.log("Booked event successfully", response);
        alert("Successfully booked event");
        this.setState({ HasBooked: true });
      } else {
        alert("Could not book event");
      }
    });
  };
  onInputFieldChange = (element) => {
    const change = element.target;
    this.setState({ [change.name]: change.value });
  };

  render() {
    if (this.state.HasBooked) {
      return <Redirect to="/events" />;
    }
    return (
      <div className="event-book-wrapper">
        <div className="event-book-form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>Booking Event</h1>
            <div className="time">
              Time:
              <select
                name="time"
                value={this.state.time}
                onChange={this.onInputFieldChange}
              >
                <option value="Morning">Morning</option>
                <option value="Midmorning">Mid-morning</option>
                <option value="Afternoon">Afternoon</option>
              </select>
            </div>

            <div className="event-book">
              <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Eventbook;
