import React from 'react';
import Input from '../Input';
import SocialMedia from '../SocialMedia';
import './ContactUs.component.scss';

const ContactUs=()=> {


    return (
        <div className= "contactus-container">
            <div className='questions-container'>
                <p>
                    Any Questions ?, Please reach out to us
                </p>
                <form onSubmit={''}>
                    <p>
                        Your Name
                    </p>
                    <Input />
                    <p>
                        Your Email
                    </p>
                    <Input />
                    <p>
                        Your Phone Number
                    </p>
                    <Input />
                    <p>
                        Your Question
                    </p>
                    <Input height={"10rem"}/>
                    <button className="submit-button">Send</button>
                </form>
            </div>
            <div className='contact-details'>
                <p>
                Contact Details
                <SocialMedia height="1.5rem" width="1.5rem" isLine={true}/>
                </p>

            </div>

        </div>
    )
}

export default ContactUs