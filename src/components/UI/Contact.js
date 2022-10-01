import React from "react";
import './Contact.component.scss'
const Contact = () => {
    const phNo = "9895984367"
    const email = "bijodp634@gmail.com"


    return (
        <div className="contact-container">
            <div className="sub-container">
            <img className="icon" src="https://img.icons8.com/ios-filled/50/FFFFFF/hot-line.png"/>
                Call Us 24/7:
                <p>
                    {` ${phNo}`}
                </p>
            </div>
            <div className="email sub-container">
            <img className="icon" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/FFFFFF/external-email-communication-nawicon-glyph-nawicon-2.png"/>
                Email Us:
                <p>
                    {` ${email}`}
                </p>
            </div>

        </div>
    )
}

export default Contact