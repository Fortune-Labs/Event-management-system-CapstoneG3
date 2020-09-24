import React, { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
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
        <Card
          style={{ width: "18rem", display: "flex", flexDirection: "column" }}
        >
          <Card.Body>
            {events.map((event) => (
              <listGroup key={event.id}>
                <ListGroup.Item>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <h3>{event.topic}</h3>
                  <p>{event.time}</p>
                  <p>{event.speaker}</p>
                  <p>{event.room_capacity}</p>
                  <p>{event.tagline}</p>
                  <Button variant="primary">Go somewhere</Button>
                </ListGroup.Item>
              </listGroup>
            ))}
          </Card.Body>
        </Card>
      );
    }
  }
}
