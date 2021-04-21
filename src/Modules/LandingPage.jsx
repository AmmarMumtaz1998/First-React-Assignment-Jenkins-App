import React from "react";
import Header from "../Components/Header";
import Description from "../Components/Description";
import Slider from "../Components/Slider";
import Feature from "../Components/Feature";
import Integration from "../Assets/integ.png";
import Installation from "../Assets/installation.png";
import Configuration from "../Assets/config.png";
import Plugin from "../Assets/plugin.png";
import Extensible from "../Assets/extens.png";
import Distributed from "../Assets/dist.png";
import Video from "../Components/Video";
import Card from "../Components/Card";
import Date from "../Assets/date.png";
import Blogpost from "../Components/BlogPost";
import Cal from "../Assets/cal.png";
import Sponsers from "../Components/Sponsers";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />   
      <Description/>
      <Slider/>
      <div className="container my-5" style={{color:"#424E64"}}>
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <Feature src={Integration} heading={"Continuous Integration,Delivery"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} /> 
            </div>
            <div className="col-md-4">
                <Feature src={Installation} heading={"Easy Installation"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} />
            </div>
            <div className="col-md-4">
                <Feature src={Configuration} heading={"Easy Configuration"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} />
            </div>
        </div>    
        <div className="row">
            <div className="col-md-4 col-sm-12">
                <Feature src={Plugin} heading={"Plugins"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} /> 
            </div>
            <div className="col-md-4">
                <Feature src={Extensible} heading={"Extensible"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} />
            </div>
            <div className="col-md-4">
                <Feature src={Distributed} heading={"Distributed"} text={"Continuous Integration and Continuous Delivery As an extensible automation server, Jenkins can be used as a simple CI server or turned into the continuous delivery hub for any project."} />
            </div>
        </div>    
      </div>
      <Video/>
      <div className="container-fluid my-4" style={{textAlign:"center"}}>
        <div className="row">
            <div className="col-1"></div>
            <div className="col-md-2">
                <Card src={Date} heading="CI/CD Pipelines with Jenkins and OpenShift Webinar by Red Hat" text="Transforming Test-Driven Workflows Into CI/CD Pipelines With Jenkins. By using Jenkins and Red Hat®"/>
            </div>
            <div className="col-md-2">
                <Card src={Date} heading="Jenkins Templating Engine CDF Online Meetup" text="Steven Terrana will talk about using the Jenkins Templating Engine for Pipeline Modeling." />
            </div>
            <div className="col-md-2">
                <Card src={Date} heading="cdCon Online" text="Jenkins will be represented at cdCon organized by the Continuous Delivery Foundation. We will have multiple talks and a Birds of Feather session there." /> 
            </div>
            <div className="col-md-2">
                <Card src={Date} heading="Jenkins Contributor Summit Online" text="The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project." />
            </div>
            <div className="col-md-2">
                <Card src={Date} heading="DevOps World Online" text="Jenkins will be represented at the DevOps World conference. There will be community and Continuous Delivery Foundation tracks, and many talks from Jenkins practitioners." />
            </div>
            <div className="col-1"></div>
        </div>
       </div>
      
      <div className="container p-20" style={{backgroundColor:"#F1EEEB", color:"##424E64"}}>
        <h1 style={{marginLeft:40, padding:10}}>Recent Blog Post</h1>
        <Blogpost src={Cal} heading={"Jenkins Operator becomes an official sub-project!"} text={"We are happy to announce that Jenkins Operator officially became an official Jenkins sub-project. What does it mean for the project? Becoming an official part of the Jenkins project was a major step towards better alignment with the overall Jenkins’ roadmap and more opportunities to increase adoption of the Jenkins Operator project. Finally, with a dedicated team at VirtusLab actively maintaining the project we can engage with..."} />
        <Blogpost src={Cal} heading={"Welcome the SheCodeAfrica Contributhon participants!"} text={"The SheCodeAfrica Contributhon started April 1, 2021. The SheCodeAfrica Contributhon is a boot camp where African women are paid to work with open source organizations on selected projects with dedicated mentors. This program aims to create a more diverse, inclusive, and innovative culture within the African open source ecosystem by matching African women in technology with sponsor and mentor open source organizations. The 5 mentees joining the..."} />
        <Blogpost src={Cal} heading={"Welcome Ewelina Wilkosz - new Jenkins Governance Board member"} text={"We would like to announce changes in the Jenkins Governance Board. As it was announced earlier this month, Marky Jackson has decided to step down from his elected roles. On behalf of the Jenkins community, we would like to thank Marky for all contributions and for the continued participation in the Jenkins community. As an active Jenkins contributor and community leader, Marky helped a lot of initiatives..."} />
        <Blogpost src={Cal} heading={"Jenkins accepted in SheCodeAfrica Contributhon"} text={"SheCodeAfrica is a non-profit organization focused on celebrating and empowering young girls and women in technology across Africa. They provide resources and events that help women grow and achieve their personal and career goals. Their mentoring programs provide help and guidance as participants learn and grow in their careers. This year, SheCodeAfrica is organizing the SheCodeAfrica Contributhon. Contributhon is a boot camp where African women are paid to..."} />
        <Blogpost src={Cal} heading={"Jenkins accepted in Google Summer Of Code 2021!"} text={"On behalf of the Jenkins GSoC org team, I am happy to announce that this year, for the first time, the Jenkins projects will be participating in Google Summer of Code 2021 as part of the Continuous Delivery Foundation (CDF) GSoC organization. We’re very excited to have the Jenkins project participate in GSoC as part the CDF mentoring organisation along with fellow CDF projects such as Ortelius, Screwdriver, Spinnaker, and..."} />
        <Blogpost src={Cal} heading={"Update-Center certificate rotation"} text={"On the 29th of March 2021, we’ll rotate the Jenkins update center certificate. The existing certificate expires in April 2021. When the new certificate is installed on March 29, 2021, Jenkins versions older than 2.178 (April 2018), won’t be able to communicate with the default and experimental update centers. Instances using alternative update centers (self-hosted or vendor-provided) will not be affected by this change. Regarding plugins update, the..."} />
        <Blogpost src={Cal} heading={"cdCon 2021 - Call for Jenkins Proposals"} text={"Hear ye! Hear ye! Jenkins Community, cdCon 2021 (the Continuous Delivery Foundation’s annual flagship event) is happening June 23-24 and its call for papers is open! This is your chance to share what you’ve been doing with Jenkins. Are you building something cool? Using it to solve real-world problems? Are you making things fast? Secure? Or maybe you’re a contributor and want to share what’s new. In all cases, we want to..."} />
        <Blogpost src={Cal} heading={"Jenkins Contributor Summit Online Feb 23-25"} text={"The Jenkins Contributor Summit brings together current and future contributors to the Jenkins project. We’re hosting an online summit this year to encourage contributors from around the world to meet, discuss, and plan for the future. The Contributor Summit will be Tuesday, February 23rd 2021 through Thursday, February 25, 2021. The summit brings together community members to learn, meet, and help shape the future of Jenkins. In the..."} />
        <Blogpost src={Cal} heading={"Docker image updates"} text={"Beginning with Jenkins 2.279 and Jenkins 2.263.4, the Jenkins project is upgrading the base operating system and Java version used in the jenkins/jenkins:latest and jenkins/jenkins:lts images. The update replaces OpenJDK 8u242 with AdoptOpenJDK 8u282 and replaces Debian 9. Why? We’re changing the base image so that we have a better supported operating system and a more current Java release for Jenkins controllers. Better..."} />
        <Blogpost src={Cal} heading={"New eBook: Build, deploy, and automate great stuff with Jenkins"} text={"In April of last year, we launched a new Jenkins community website called JenkinsIsTheWay. The Jenkins Is The Way site has collected the experiences of Jenkins users around the world as they develop software and create solutions. They are charting new paths, discovering new opportunities, and overcoming challenges. That’s what makes Jenkins Is The Way tick. Engineers in the Netherlands might have already met challenges faced by developers..."} />
        </div>
      <Sponsers/>  
      <Footer/>
    </div>
  );
};

export default LandingPage;
