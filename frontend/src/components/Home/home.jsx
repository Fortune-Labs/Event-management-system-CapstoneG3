import React, { Component } from "react";
import "./style.css";
import { Link, Redirect } from "react-router-dom";

class Home extends Component {
  state = {
    user: null,
    IsLoggin: false,
    IsLogout: false,
    shouldRedirect: false,
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      if (!userData.token) {
        this.setState({ IsLoggin: false });
      } else {
        this.setState({ IsLoggin: true });
      }
    } else {
      this.setState({ IsLoggin: false });
    }
  }
  handleLogout = () => {
    alert("Logged out");
    localStorage.removeItem("user");
    this.setState({ shouldRedirect: true });
    // this.setState({ IsLogout: true });
  };
  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="main-wrapper">
        <div className="header-bar">
          {/*   <div className="logo">
            <a>
              <img src="../Images/eventlogo.jpg" alt="#" />
              CapstoneG3
            </a>
          </div> */}

          <Link to="/">Home</Link>
          <Link to="initial">Event</Link>
          {!this.state.IsLoggin ? (
            <Link to="Login">Login</Link>
          ) : (
            <Link to="#" onClick={this.handleLogout}>
              Logout
            </Link>
          )}

          {!this.state.IsLoggin && <Link to="register">SignUp</Link>}
        </div>
        <div className="main">
          <div className="home-login">
            <h1>Capstone Events</h1>
            <p className="tagline">
              <span>Plan.</span>
              <span>Organize.</span>
              <span>Schedule Events.</span>
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
