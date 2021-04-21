import React from "react";

const Feature = (props) => {
  return (
    <div>
            <img src={props.src} alt="" style={{height:40, width:40, display:"inline", backgroundColor:"#4582F2", borderRadius:5}}/>
            <h5 style={{display:"inline", marginLeft:5}}>{props.heading}</h5>
            <p style={{fontSize:13, marginLeft:43}}>{props.text}</p>
         
    </div>
  );
};

export default Feature;
