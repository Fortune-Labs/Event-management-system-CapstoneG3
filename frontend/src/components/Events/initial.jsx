import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: 'Photo 1',
        url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Photo 2',
        url: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Photo 3',
        url: "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Photo 4',
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: 'Photo 5',
        url: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
]
class Initial extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll:1,
            className: "slides"
        }
      return (
        <div className ="main-container"> 
        <Slider{...settings}>
        {photos.map((photo)=>{
            return(
                <div>
                    <img width="100%" src={photo.url}/>
                </div>
            )

        })}
        </Slider>
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
  