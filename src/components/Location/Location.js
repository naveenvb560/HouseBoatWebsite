import React from "react";
import './Location.component.scss'

const Location = () => {

    const iFrame = 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.624435476105!2d76.42183544456559!3d9.642491814584977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087fdca2cddc41%3A0xf3e459042524887e!2sCheepunkal%2C%20Kavanattinkara%2C%20Kumarakom%2C%20Kerala!5e0!3m2!1sen!2sin!4v1664640829091!5m2!1sen!2sin" width="90%" height="600" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>    


        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.907718276601!2d76.41933197203238!3d9.640226694350726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087fdca2cddc41%3A0xf3e459042524887e!2sCheepunkal%2C%20Kavanattinkara%2C%20Kumarakom%2C%20Kerala!5e0!3m2!1sen!2sin!4v1664629956428!5m2!1sen!2sin" width="600" height="450" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.908705037753!2d76.41933197731096!3d9.640205539573515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087fdca2cddc41%3A0xf3e459042524887e!2sCheepunkal%2C%20Kavanattinkara%2C%20Kumarakom%2C%20Kerala!5e0!3m2!1sen!2sin!4v1664635578509!5m2!1sen!2sin" width="800" height="600" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
return (
        <div className="location-container">
            <div className="location-iframe">
                <h1 className="location-heading">
                    Our Location
                </h1>
                <div className="iframe-container">
                    {iFrame}
                </div>
            </div>
        </div>


    )
}

export default Location;