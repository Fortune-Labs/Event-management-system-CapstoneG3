import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="header-bar">
          {/*   <div className="logo">
            <a>
              <img src="../Images/eventlogo.jpg" alt="#" />
              CapstoneG3
            </a>
          </div> */}
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="Login">Login</Link>
        </div>
        <div className="main">
          <div className="home-login">
            <h1>Capstone Events</h1>
            <p>
              <span>Plan</span>
              <span>Plan</span>
              <span>Plan</span>
            </p>
            <p>
              Event management is the application of project management to the
              creation and development of small and/or large-scale personal or
              corporate events such as festivals, conferences, ceremonies,
              weddings, formal parties, concerts, or conventions.
            </p>
            <div className="get-started-btn">
              <Link underline="none" to="Login">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
