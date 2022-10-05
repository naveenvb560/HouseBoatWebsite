import React from "react";
import './Packages.component.scss';
import { PackageDetails } from './packageData'
const Package = () => {

    return (
        <div className="package-parent-container" id="Packages">
                        <h2>Our Packages</h2>
        
        <div className="package-container">
            {Object.entries(PackageDetails).map(([packageName, packageContents]) => {
                return (
                    <div key={packageName} className="package-details">
                        <img src={packageContents.image} alt="package image" />
                        <h4>{packageContents.name}</h4>
                        <p>{packageContents.name} is provided for maximum of {packageContents.maxLimit} members. 
                        Checkin time will be {packageContents.checkInTime} and checkout time will be {packageContents.checkOutTime}
                        .</p>
                        <label>Amenities: {packageContents.amenities}</label>
                        {packageContents.foodItems && <span className="food-items"> 
                            <label>Breakfast: {packageContents.foodItems.breakFast}</label>
                            <label>Lunch: {packageContents.foodItems.lunch}</label>
                            <label>Evening: {packageContents.foodItems.evening}</label>
                            <label>Dinner: {packageContents.foodItems.dinner}</label>
                        </span>}
                        <span >
                        <b>starting from only</b> <label className="amount">{packageContents.startingFrom}</label>
                        </span>

                    </div>
                )

            })

            }
        </div>
        </div>
    )
}

export default Package