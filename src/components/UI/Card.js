import React from "react";
import './Card.component.scss'

const Card=(props)=> {

    return (
        <div className="card-container">
            {props.children}
        </div>
    )
}

export default Card;