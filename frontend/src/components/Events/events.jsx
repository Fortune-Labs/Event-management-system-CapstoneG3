import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
export default class Events extends Component {
  state = {
    events: [],
    isLoaded: false,
    error: null,
    IsLoggin: false,
    IsLogout: false,
    user: {},
    shouldRedirect: false,
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    console.log("user from localstorage", user);
    if (user) {
      const userData = JSON.parse(user);
      console.log("user data in json ", userData);
      this.setState({ user: userData });

      // decide to redirect if no user token
      if (userData.token) {
        console.log("a token exist, do not redirect");
      } else {
        console.log("Kwame, please we are redirecting you.");
        this.setState({ shouldRedirect: true });
      }
    } else {
      this.setState({ shouldRedirect: true });
    }
  }

  checkUserAvailability = () => {
    const user = this.state.user;
    if (user) {
      // const userData = JSON.parse(user);
      if (!user.token) {
        this.setState({ IsLoggin: false });
      } else {
        this.setState({ IsLoggin: true });
        // console.log(this.state);

        fetch("http://127.0.0.1:8000/event/view-events/")
          .then((res) => res.json())
          .then(
            (result) => {
              console.log("responsee from server", result);
              this.setState({
                isLoaded: true,
                events: result,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error: error,
              });
            }
          );
      }
    } else {
      this.setState({ IsLoggin: false });
    }
  };

  handleLogout = () => {
    alert("Logged out");
    localStorage.removeItem("user");
    window.href = "/";
    // this.setState({ IsLogout: true });
  };

  render() {
    // this.checkUserAvailability();
    const { error, isLoaded, IsLoggin, events } = this.state;
    if (this.shouldRedirectoggin) {
      return <Redirect to="/" />;
    }

    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // }
    console.log(events);
    return (
      <div className="row">
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
        {events.map((event) => (
          <Card
            className="col-md-3 col-sm-5 col-xs-6"
            style={{ width: "200em" }}
          >
            <Card.Body>
              <h3>{event.topic}</h3>
              <p>{event.time}</p>
              <p>{event.speaker}</p>
              <p>{event.room_capacity}</p>
              <p>{event.tagline}</p>
              <Button variant="primary">
                <Link to="/event-book">Book</Link>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}
