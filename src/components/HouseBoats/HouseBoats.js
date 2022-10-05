import React from "react";
import Boat1 from '../../assets/boat1.png';
import Boat2 from '../../assets/boat2.png';
import './HouseBoats.component.scss';

const HouseBoats = () => {

    const HouseBoatList = [{
        name: "Dream palace 1",
        Bedrooms: "1",
        image: Boat1
    },
    {
        name: "Dream palace 2",
        Bedrooms: "1",
        image: Boat2
    }];

    return (
        <div className="houseboat-list-container" id="HouseBoats">
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
                            <div className="button-container">
                            <button>Check Packages Available</button>
                            <button>More Pics?</button>
                            </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HouseBoats;