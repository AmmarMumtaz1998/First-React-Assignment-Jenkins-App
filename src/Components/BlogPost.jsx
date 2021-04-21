import React from 'react';

const BlogPost = (props) => {
    return (
        <>
            <div className="row my-3">
                <div className="col-1"></div>
                <div className="col-10 p-10" style={{backgroundColor:"white"}}>
                    <img src={props.src} alt="" style={{height:50, width:50, display:"inline"}}/>
                    <h5 style={{display:"inline"}}>{props.heading}</h5>
                    <p>{props.text}</p>
                </div>
                <div className="col-1"></div>
            </div>
        </>
    )
}

export default BlogPost;
