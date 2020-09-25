import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Card
              className="col-md-3 col-sm-5 col-xs-6 m-2"
              style={{ width: "100rem" }}
            >
              <Card.Body>
                <h3>{event.topic}</h3>
                <p>{event.time}</p>
                <p>{event.speaker}</p>
                <p>{event.room_capacity}</p>
                <p>{event.tagline}</p>
                <Button variant="primary">
                  <Link to="/event-book">Book</Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      );
    }
  }
}
