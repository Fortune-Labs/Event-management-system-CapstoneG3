import React, { Component } from "react";

export default class Events extends Component {
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
            isLoaded: false,
            events: result,
          });
        }
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
        <div
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
                <h3>{event.topic}</h3>
                <p>{event.time}</p>
                <p>{event.speaker}</p>
                <p>{event.room_capacity}</p>
                <p>{event.tagline}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
