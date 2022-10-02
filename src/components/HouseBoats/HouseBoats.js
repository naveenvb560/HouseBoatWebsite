import React from "react";
import Card from "../UI/Card";
import Boat1 from '../../assets/boat1.png';
import Boat2 from '../../assets/boat2.png';
import './HouseBoats.component.scss';

const HouseBoats = () => {

    const HouseBoatList = [{
        name: "Boat1",
        Bedrooms: "1",
        image: Boat1
    },
    {
        name: "Boat2",
        Bedrooms: "1",
        image: Boat2
    }];

    return (
        <div className="houseboat-list-container">
            <h2>House Boats</h2>
            <div className="houseboat-grid-container">
                {HouseBoatList.map((boatData) => {
                    return (
                        <div className="houseboat-container">
                            <h4>{boatData.name}</h4>
                            <div className="boat-image">
                                <img alt="boat image" src={boatData.image} />
                            </div>
                            <p> No of rooms available {boatData.Bedrooms}</p>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HouseBoats;