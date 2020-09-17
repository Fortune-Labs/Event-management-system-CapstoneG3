import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div></div>
        <div>
          <header>
            <div className="wrapper">
              <div className="loo">
                <img src="#" alt=""></img>
              </div>
              <ul class="nav-area">
                <li>
                  <Link to="home">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="login">Login</Link>
                </li>
              </ul>
            </div>
            <div class="welcome-text">
              <h1>We are creative</h1>
              <a href="#">Contact US</a>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
