import React from "react";
import './Home.component.scss';
import houseboat from '../../../assets/houseboat.jpg';

const Home =()=> {

    return (
        <div className="home-container">
            <div className="homepage-image-container">
                <img src={houseboat} alt="homepage houseboat image" />
            </div>
        </div>
    )
}

export default Home;