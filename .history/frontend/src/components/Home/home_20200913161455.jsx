import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <header>
          <div className="logo">
            <img src="../Images/eventlogo.jpg" alt="#"></img>
          </div>
          <ul class="nav-area">
            <li>
              <button type="submit" className="btn">
                <Link to="home">Home</Link>
              </button>
            </li>
            <li>
              <button type="submit" className="btn">
                <Link to="Login">Get Started</Link>
              </button>
              <Link to="about">About</Link>
            </li>
            <li>
              <button type="submit" className="btn">
                <Link to="Login">Get Started</Link>
              </button>
            </li>
          </ul>
        </header>

        <div className="get-started">
          <div class="welcome-text">
            <h1>creative</h1>
            <h2>Lets make something creative</h2>
            <p>
              Event management is the application of project management to the
              creation and development of small and/or large-scale personal or
              corporate events such as festivals, conferences, ceremonies,
              weddings, formal parties, concerts, or conventions.
            </p>
          </div>
        </div>
        <div className="home-login"></div>
      </div>
    );
  }
}

export default Home;
