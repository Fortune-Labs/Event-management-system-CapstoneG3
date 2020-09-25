import React, { Component } from "react";
import "./style.css";

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
    return <div className="user"></div>;
  }
}

export default User;
