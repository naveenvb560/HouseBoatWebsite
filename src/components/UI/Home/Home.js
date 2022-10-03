import React from "react";
import './Home.component.scss';
import Contact from "../Contact";
import SocialMedia from "../SocialMedia";
import Quotes from '../../Enquiry/Quote'
const Home =()=> {

    return (
        <div className="home-container">
            <div className="socialmedia-container">
             <SocialMedia width="2rem" height="2rem" isLine={true} isWhite={true} style={{paddingRight: "4rem", float: "right", paddingTop:"2rem"}}/>
             </div>
            <div className="company-container">\

                <Quotes />
                <button className="book-now-button">Contact Now</button>
            </div>
            <Contact />
           
        </div>
    )
}

export default Home;