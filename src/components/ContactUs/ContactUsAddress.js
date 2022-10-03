import React from "react";
import SocialMedia from "../UI/SocialMedia";
import './ContactUsAddress.component.scss';

const ContactUsAddress = () => {

    return (
        <div className='contact-details'>
            <p>
                Contact Details
            </p>
            <h3>Dream Palace Houseboats</h3>
            <div className='address'>
                <img style={{ width: "2rem", height: "2rem" }} src="https://img.icons8.com/ios-filled/50/1A1A1A/visit.png" />
                <p>
                    Near Cheepunkal Bridge, Kumarakom, Kottayam, Kerala , India PIN: 586563
                </p>
            </div>
            <div className='phone'>
            <img className="icon" src="https://img.icons8.com/ios-filled/50/000000/hot-line.png"/>
                <p>
                9895984367
                </p>
            </div>
            <div className='email'>
            <img className="icon" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/000000/external-email-communication-nawicon-glyph-nawicon-2.png"/>
                <p>
                bijodp634@gmail.com
                </p>
            </div>
            <SocialMedia height="2rem" width="2rem" isLine={true} />
        </div>
    )
}

export default ContactUsAddress