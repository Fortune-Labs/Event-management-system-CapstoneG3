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
            <p className="tagline">
              <span>Plan.</span>
              <span>Organize.</span>
              <span>Get Events Scheduled.</span>
            </p>
            <div className="get-started-btn">
              <Link to="register">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
