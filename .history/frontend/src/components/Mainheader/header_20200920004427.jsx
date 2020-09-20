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
      </div>
    );
  }
}

export default Home;
