import React from "react";
import './Modal.component.scss'

const Modal=(props)=> {

    return (
        <div className="card-container">
            {props.children}
        </div>
    )
}

export default Modal;