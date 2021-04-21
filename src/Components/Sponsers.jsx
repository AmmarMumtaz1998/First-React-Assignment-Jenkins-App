import React from 'react';
import Cloudbees from "../Assets/cloudbees.png";
import OSL from "../Assets/osuosl.png";
import CDF from "../Assets/cdf.png";
import RedHat from "../Assets/redhat.png";
import AWS from "../Assets/aws.png";
import GitHub from "../Assets/github.png";
import JFrog from "../Assets/jfrog.png";

const Sponsers = () => {
    return (
        <>
            <div className="Container pt-5" style={{backgroundColor:"#F1EEEB", marginTop: -20}}>
                <div className="row">
                    <div className="col-12" style={{textAlign:"center",color:"#424E64"}}>
                        <h6>We thank the following organizations for their major commitments to support the Jenkins project.</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" style={{textAlign:"center",color:"#424E64"}}>
                        <img src={Cloudbees} alt=""/>
                        <img src={OSL} alt="" style={{width:"300px"}} />
                        <img src={CDF} alt=""/>
                        <img src={RedHat} alt=""/>
                        <img src={AWS} alt=""/> <br/>
                        <img src={GitHub} alt="" style={{width:"300px"}} />
                        <img src={JFrog} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-3" style={{textAlign:"center",color:"#424E64"}}>
                        <h6>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.</h6>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-3" style={{backgroundColor:"#F1EEEB", color:"#2988CB", fontWeight:"bold"}}>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-1">Atlassian</div>
                    <div className="col-md-1">Datadog</div>
                    <div className="col-md-1">Mac Cloud</div>
                    <div className="col-md-1">PagerDuty</div>
                    <div className="col-md-1">Sentry</div>
                    <div className="col-md-1">XMission</div>
                    <div className="col-md-2">Tsinghua University</div>
                    <div className="col-md-1">Fastly</div>
                    <div className="col-md-1">SpinUp</div>
                    <div className="col-md-1">IBM</div>
                </div>
            </div>
        </>    
    )
}
export default Sponsers
