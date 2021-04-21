import React from 'react';

const Description = () => {
    return (
        <div>
            <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 pt-4" style={{textAlign:"right", paddingRight:"19vh"}}>
            <img src="https://www.jenkins.io/images/logos/jenkins/jenkins.svg" style={{height:"350px"}} alt="Mr.Jenkins Img" />
          </div>
          <div className="col-md-6 col-sm-12" id="jenk">
            <b style={{ color: "#333E52", fontSize: "10vh" }}>Jenkins</b>
            <p>
              <b style={{ color: "#333E52"}}>Build great things at any scale</b>
            </p>
            <p style={{ color: "#333E52"}}>
              The leading open source automation server,<br/>
                Jenkins provides hundreds of plugins to support <br/>
                building, deploying and automating any project.
            </p>
            <button className="btn btn-dark">Documentation</button>
            <button className="btn btn-danger ml-2">Download</button>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Description;
