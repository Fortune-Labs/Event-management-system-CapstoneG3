import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <header class="header">
          <div class="header-content responsive-wrapper">
            <div class="header-logo">
              <a href="/" class="logo">
                <img src="../Images/eventlogo.jpg" />
              </a>
            </div>
            <nav class="header-nav">
              <a href="#" class="header-nav-item">
                HOME
              </a>
              <a href="#" class="header-nav-item">
                ABOUT
              </a>
              <a href="#" class="header-nav-item">
                EVENTS
              </a>
              <a href="#" class="header-nav-item">
                PLAYLIST
              </a>
              <a href="#" class="header-nav-item">
                GALLERY
              </a>
              <a href="#" class="header-nav-item">
                TICKETS
              </a>
              <a href="#" class="header-nav-item">
                OUR TEAM
              </a>
              <a href="#" class="header-nav-item">
                CONTACT
              </a>
              <button class="menu-toggle">Menu</button>
            </nav>
          </div>
        </header>
        <main class="main"></main>
      </div>
    );
  }
}

export default Home;
