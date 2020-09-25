import React, { Component } from "react";
import "./style.css";
import { Link, Redirect } from "react-router-dom";

class Initial extends Component {
  state = {
    shouldRedirect: false,
  };
  componentDidMount() {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.getItem("user");
      if (!userData.token) {
        console.log("Not logged in");
        this.setState({ shouldRedirect: true });
      } else {
        console.log("User is logged in");
      }
    } else {
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="section">
          <div className="leftBox">
            <div className="content">
              <h1>Events and Shows</h1>
              <p>
                Our event management system helps you simplify event planning
                for all your virtual, hybrid and in-person events. It has the
                power and flexibility global enterprises need and the
                scalability that event organizers love.
              </p>
            </div>
          </div>
          <div className="events">
            <ul>
              <li>
                <div className="time">
                  <h2>C</h2>
                </div>
                <div className="details">
                  <h3>Centralize Event Management</h3>
                  <p>
                    Eliminate time-consuming tasks and streamline events
                    management by leveraging the array of tools available in our
                    integrated event software platform.
                  </p>
                  <Link to="/events">View Events</Link>
                </div>
              </li>
              <li>
                <div className="time">
                  <h2>V</h2>
                </div>
                <div className="details">
                  <h3>View Booked Event at a Glance</h3>
                  <p>
                    You will be able to view and book your event in any category
                    of your choice. There are a wide variety of categories that
                    make your event come alive. Click view details below to
                    begin.
                  </p>
                  <Link to="/event-book">Book Event</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Initial;
