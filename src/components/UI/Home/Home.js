import React from "react";
import './Home.component.scss';
import Contact from "../Contact";
import Quote from "../../Enquiry/Quote";

const Home =()=> {

    return (
        <div className="home-container">
            <Contact />
            <Quote />
        </div>
    )
}

export default Home;