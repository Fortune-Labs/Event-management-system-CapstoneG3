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
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );
    }
  }
}
