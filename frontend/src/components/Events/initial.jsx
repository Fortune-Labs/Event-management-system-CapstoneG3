import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Initial extends Component {
    render() {
      return (
        <div className ="main-container"> 
        <div className= "section">
            <div className = "leftBox">
            <div className = "content">
                <h1>Events and Shows</h1>
               <p> Our event management system helps you simplify event planning for all your virtual, hybrid and in-person events.
                    It has the power and flexibility global enterprises need and the scalability that event organizers love. </p>
            </div>
        </div>
        <div className ="events">
        <ul>
                <li>
                    <div className ="time">
                        <h2>15<span>Sept</span></h2>
                    </div>
                    <div className="details">
                        <h3>Centralize Event Management</h3>
                        <p> Eliminate time-consuming tasks and streamline events 
                            management by leveraging the array of tools 
                            available in our integrated event software platform.
                        </p>
                        <Link to = "register">View Event</Link>
                       
                    </div>
                </li>
                <li>
                    <div className ="time">
                        <h2>15<span>Sept</span></h2>
                    </div>
                    <div className="details">
                        <h3>View Your Booked Events</h3>
                        <p> You will be able to view and book
                            your event in any category of your choice. There are a wide
                            variety of categories that make your event come alive. 
                            Click view details below to begin.
                        </p>
                        <Link to = "home ">View Details</Link>
                       
                    </div>
                </li>
            </ul>

             </div>
             </div>
        </div>
      );
    }
  }
  
  export default Initial;
  