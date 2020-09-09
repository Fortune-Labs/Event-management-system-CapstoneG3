import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return 
      <header class="header">
          <div class="header-content responsive-wrapper">
              <div class="header-logo">
                  <a href="/" class="logo">
                      <img src="https://assets.codepen.io/285131/logo.png" />
                  </a>
              </div>
              <nav class="header-nav">
                  <a href="#" class="header-nav-item">HOME</a>
                  <a href="#" class="header-nav-item">ABOUT</a>
                  <a href="#" class="header-nav-item">EVENTS</a>
                  <a href="#" class="header-nav-item">PLAYLIST</a>
                  <a href="#" class="header-nav-item">GALLERY</a>
                  <a href="#" class="header-nav-item">TICKETS</a>
                  <a href="#" class="header-nav-item">OUR TEAM</a>
                  <a href="#" class="header-nav-item">CONTACT</a>
                  <button class="menu-toggle">Menu</button>
              </nav>
          </div>
      </header>
    <div className="wrapper"></div>
  }
}

export default Home;
