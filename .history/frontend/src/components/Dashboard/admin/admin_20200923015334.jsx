import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Admin extends Component {
  render() {
    return (
      <div className="dash-wrapper">
        <div className="dash-wrapper-header"></div>
        <div className="dash-wrapper-side"></div>
        <div className="dash-wrapper-main"></div>
      </div>
    );
  }
}

export default Admin;
