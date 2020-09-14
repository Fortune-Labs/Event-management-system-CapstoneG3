import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Initial extends Component {
    render() {
      return (
        <div> 
            <div class = "leftBox">
            <div class = "content">
                <h1>Events and Shows</h1>
               <p> Welcome to Capstone G3 Event Management System. Where all
                you event are created, organised and scheduled with ease. </p>
            </div>
        </div>
        <div class ="events">
        <ul>
                <li>
                    <div class ="time">
                        <h2>15<br><span>Sept</span></br></h2>
                    </div>
                    <div class="details">
                        <h3>View Events Happening Live</h3>
                        <p> You will be able to view and book
                            your event in any category of your choice. There are a wide
                            variety of categories that make your event come alive. 
                            Click view details below to begin.
                        </p>
                        <a href= "#">View Details</a>
                        <div style ="clear: both;"></div>
                    </div>
                </li>
                <li>
                    <div class ="time">
                        <h2>15<br><span>Sept</span></br></h2>
                    </div>
                    <div class="details">
                        <h3>View Events Happening Live</h3>
                        <p> You will be able to view and book
                            your event in any category of your choice. There are a wide
                            variety of categories that make your event come alive. 
                            Click view details below to begin.
                        </p>
                        <a href= "#">View Details</a>
                        <div style ="clear: both;"></div>
                    </div>
                </li>
            </ul>

             </div>
           
        </div>
      );
    }
  }
  
  export default Initial;
  