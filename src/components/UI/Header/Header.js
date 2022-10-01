import React from "react";
import './Header.component.scss'
import HeaderElement from "./HeaderElements";
import boatIcon from '../../../assets/boat-icon.jpg'

const Header = () => {


    return (
        <div className="header-container">
            <div className="boat-icon-container">
                <img src={boatIcon} />
            </div>
            <div className="header-element-parent-container">
            <HeaderElement />
            </div>
        </div>
    )
}

export default Header;