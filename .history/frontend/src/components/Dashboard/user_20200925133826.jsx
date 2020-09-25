import React, { Component } from "react";
import "./style.css";

class User extends Component {
  state = {
    events: [],
    isLoaded: false,
    error: null,
  };

  render() {
    return <div className="user"></div>;
  }
}

export default User;
