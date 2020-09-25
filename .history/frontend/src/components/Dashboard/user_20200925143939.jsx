import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class User extends Component {
  state = {
    events: [],
    isLoaded: false,
    error: null,
  };
  componentDidMount() {
    fetch("http://127.0.0.1:8000/event/view-events/")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("responsee from server", result);
          this.setState({
            isLoaded: true,
            events: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, events } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(events);
      return (
        <div className="row">
          <div className="header-bar">
            {/*   <div className="logo">
            <a>
              <img src="../Images/eventlogo.jpg" alt="#" />
              CapstoneG3
            </a>
          </div> */}
            <Link to="/">Home</Link>
            <Link to="initial">Event</Link>
          </div>
          {events.map((event) => (
            <div class="card col-md-3 col-sm-5 col-xs-6">
              <div class="card-body">
                <h3>{event.event}</h3>
                <p>{event.id}</p>
                <p>{event.time}</p>
                <p>{event.user}</p>
              </div>
            </div>
          ))}
          {/* <div
            style={{
              backgroundColor: "white",
              color: "black",
              height: "700px",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            <ul>
              {events.map((event) => (
                <li key={event.id}>
                  <h3>{event.event}</h3>
                  <p>{event.time}</p>
                  <p>{event.user}</p>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      );
    }
  }
}

export default User;
