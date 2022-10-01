import React from "react";
import './Home.component.scss';
import Contact from "../Contact";
import SocialMedia from "../SocialMedia";

const Home =()=> {

    return (
        <div className="home-container">
            <Contact />
            <SocialMedia width="2rem" height="2rem" isLine={false} isWhite={true} style={{paddingLeft: "4rem", float: "right"}}/>
        </div>
    )
}

export default Home;