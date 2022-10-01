import React from "react";
import './HeaderElement.component.scss'

const HeaderElement = () => {

    const headerLinks = [
        'Packages',
        'HouseBoats',
        'Gallery',
        'ContactUs',
        'Location'
    ];

    return (
        <ul className="header-element-container">
            {headerLinks.map(headerElement => (
                <li className='header-element'>
                    <a href="#">{headerElement}</a>
                </li>
            ))}
        </ul>
    )
}

export default HeaderElement;