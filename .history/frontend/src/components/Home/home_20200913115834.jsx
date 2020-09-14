import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <header>
          <div className="wrapper">
            <div className="loo">
              <img src="#" alt=""></img>
            </div>
            <ul class="nav-area">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="welcome-text">
            <h1>We are creative</h1>
            <a href="#">Contact US</a>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
