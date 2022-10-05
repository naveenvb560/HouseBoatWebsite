import React from 'react';
import Input from '../UI/Input'
import ContactUsAddress from './ContactUsAddress';
import './ContactUs.component.scss';

const ContactUs=()=> {


    return (
        <div className= "contactus-container" id="ContactUs">
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
            <ContactUsAddress />

        </div>
    )
}

export default ContactUs;