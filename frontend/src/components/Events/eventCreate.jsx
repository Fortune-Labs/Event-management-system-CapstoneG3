import React, { Component } from "react";
import "./style.css";

class EventCreate extends Component {
  state = {
    title: "",
  };
  render() {
    return (
      <div lassName="event-create-wrapper">
        <form className="event-create-form-wrapper">
          <div className="topic">
            Topic
            <input name="topic" type="text"></input>
          </div>

          <div className="time">
            Time:
            <select>
              <option>Morning</option>
              <option>Mid-morning</option>
              <option>Afternoon</option>
            </select>
          </div>

          <div className="speaker">
            Speaker
            <input name="speaker" type="text"></input>
          </div>

          <div className="capacity">
            Room Capacity
            <input name="capacity" type="number"></input>
          </div>

          <div className="tagline">
            Tagline
            <input name="tagline" type="text"></input>
          </div>

          <button>Create Event</button>
        </form>
      </div>
    );
  }
}

export default EventCreate;
