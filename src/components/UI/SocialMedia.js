import React from "react";

const SocialMedia = (props) => {

    const isWhite = props.isWhite
    const isLine = props.isLine

    const socialMediaStyle = {
        ...props.style,
        display: "flex",
        flexDirection: isLine ? "row" : "column",
        gap: "1rem",
        position: "relative",
        cursor: "pointer",
        width: "fit-content"
    }

    const iconStyle = {
        height: props.height,
        width: props.width
    }

    const facebook = isWhite ? <img style={iconStyle} alt="facebook" src="https://img.icons8.com/glyph-neue/64/FFFFFF/facebook-new.png" /> :
        <img style={iconStyle} alt="facebook" src="https://img.icons8.com/ios-filled/50/1A1A1A/facebook-new.png" />
    const instagram = isWhite ? <img style={iconStyle} alt="instagram" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" /> :
        <img style={iconStyle} alt="instagram" src="https://img.icons8.com/ios-filled/50/1A1A1A/instagram-new--v1.png" />
    const gmail = isWhite ? <img style={iconStyle} alt="gmail" src="https://img.icons8.com/glyph-neue/64/FFFFFF/gmail.png" /> :
        <img style={iconStyle} alt="gmail" src="https://img.icons8.com/glyph-neue/64/1A1A1A/gmail.png" />
    const whatsapp = isWhite ? <img style={iconStyle} alt="whatsapp" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/whatsapp--v2.png" /> :
    <img style={iconStyle} alt="whatsapp" src="https://img.icons8.com/pastel-glyph/64/1A1A1A/whatsapp--v2.png"/>


    return (
        <div style={socialMediaStyle}>
            {facebook}
            {instagram}
            {gmail}
            {whatsapp}
        </div>
    )
}

export default SocialMedia
