import React from 'react';

const Card = (props) => {
    return (
        <>
            <img src={props.src} alt="" style={{height:80,width:80, backgroundColor:"blue", borderRadius:10, marginBottom:15}}/>
            <h6 style={{ color: "#333E52"}}>{props.heading}</h6>
            <p style={{ color: "#333E52"}}>{props.text}</p>
        </>
    )
}

export default Card;
