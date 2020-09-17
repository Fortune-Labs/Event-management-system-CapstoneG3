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
                  <a href="#" class="header-nav-item">Services</a>
                  <a href="#" class="header-nav-item">Politics and Democracy</a>
                  <a href="#" class="header-nav-item">Organization</a>
                  <a href="#" class="header-nav-item">Job Vacancies</a>
                  <a href="#" class="header-nav-item">Contact</a>
                  <a href="#" class="header-nav-item">My Profile</a>
                  <button class="menu-toggle">Menu</button>
              </nav>
          </div>
      </header>
    <div className="wrapper"></div>
  }
}

export default Home;
