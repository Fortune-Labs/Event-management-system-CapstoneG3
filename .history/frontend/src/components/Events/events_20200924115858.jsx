import React, { Component } from "react";

export default class Events extends Component {
  state = {
    events: [],
    isLoaded: false,
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8000/event/view-events/")
      .then((res) => res.json())
      .then(
        (result) => {
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.items);
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
            {items.map((item) => (
              <li key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.event}</p>
                <p>{item.email}</p>
                <p>{item.number}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}
