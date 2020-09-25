import React, { Component } from "react";
import "./style.css";

class User extends Component {
  state = {
    events: [],
    isLoaded: false,
    error: null,
  };
  componentDidMount() {
    fetch("http://127.0.0.1:8000/event/view-bookings/")
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
  render() {
    const { error, isLoaded, events } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
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
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              height: "700px",
              width: "80%",
              marginLeft: "10%",
            }}
          >
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <h3>{item.event}</h3>
                  <p>{item.time}</p>
                  <p>{item.user}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default User;
