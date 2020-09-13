import React, { Component } from "react";
// import "./style.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main-wrapper">
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
          <div className="get-started">
            <button type="submit" className="btn1">
              Create Account
            </button>
          </div>
        </div>
        <div>
          <header>
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
          </header>
        </div>
      </div>
    );
  }
}

export default Home;
