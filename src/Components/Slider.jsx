import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from "../Assets/Slider1.svg";
import Slider2 from "../Assets/Slider2.png";
import Slider3 from "../Assets/Slider3.png";
import Slider4 from "../Assets/Slider4.jpg";
import Slider5 from "../Assets/Slider5.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      Transition: 2,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Slider
          {...settings}
          style={{
            backgroundColor: "#F4772B",
            marginTop: "10px",
            padding: "50px",
          }}
        >
          <div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-6 col-sm-12"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    paddingLeft: "100px",
                  }}
                >
                  <h1>
                    SheCodeAfrica <br /> Contributhon
                  </h1>
                  <p style={{ fontSize: "18px" }}>
                    The SheCodeAfrica Contributhon started April 1,2021. The
                    SheCodeAfrica Contributhon is a boot camp where African
                    women are paid to work with open source organizations on
                    selected projects with dedicated mentors.
                  </p>
                  <button className="btn btn-danger">More Info</button>
                </div>

                <div className="col-md-6 col-sm-12">
                  <img
                    src={Slider1}
                    alt="Slider 1"
                    style={{
                      height: "50vh",
                      padding: "15px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-6 col-sm-12"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    paddingLeft: "100px",
                  }}
                >
                  <h1>
                    GSoC 2021: Call for <br /> Student Proposal
                  </h1>
                  <p style={{ fontSize: "18px" }}>
                    Google Summer of Code (GSoC) is an annual, international,
                    program which encourages college-aged students to
                    participate with open source projects during the summer
                    break between classes.
                  </p>
                  <button className="btn btn-danger">More Info</button>
                </div>

                <div className="col-md-6 col-sm-12">
                  <img
                    src={Slider2}
                    alt="Slider 2"
                    style={{
                      height: "50vh",
                      padding: "15px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-6 col-sm-12"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    paddingLeft: "100px",
                  }}
                >
                  <h1>Jenkins is the Way!</h1>
                  <p style={{ fontSize: "18px" }}>
                    We are looking for experiences of Jenkins users from around
                    the world showcasing how they are building, deploying, and
                    automating great software with Jenkins. Check out their user
                    stories and share yours
                  </p>
                  <button className="btn btn-danger">More Info</button>
                </div>

                <div className="col-md-6 col-sm-12">
                  <img
                    src={Slider3}
                    alt="Slider 3"
                    style={{
                      height: "50vh",
                      padding: "15px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-5 col-sm-12"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    paddingLeft: "100px",
                  }}
                >
                  <h1>cdCon</h1>
                  <p style={{ fontSize: "18px" }}>
                    Join Jenkins at cdCon on June 22-25, 2021! The event is
                    focused on improving the world's capacity to deliver
                    software with security and speed. Become part of the
                    conversation that drives continuous delivery by meeting
                    peers, sharing ideas and talking to industry leaders on all
                    things software delivery and DevOps.
                  </p>
                  <button className="btn btn-danger">More Info</button>
                </div>

                <div className="col-md-7 col-sm-12">
                  <img
                    src={Slider4}
                    alt="Slider 4"
                    style={{
                      height: "50vh",
                      padding: "15px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-md-6 col-sm-12"
                  style={{
                    color: "white",
                    fontWeight: "lighter",
                    paddingLeft: "100px",
                  }}
                >
                  <h1>Participate and Contribute!</h1>
                  <p style={{ fontSize: "18px" }}>
                    Jenkins is a community-driven project. We invite everyone to
                    join us and move it forward. Any contribution matters: code,
                    documentation, localization, blog posts, artwork, meetups,
                    and anything else. If you have five minutes or a few hours,
                    you can help!
                  </p>
                  <button className="btn btn-danger">More Info</button>
                </div>

                <div className="col-md-6 col-sm-12">
                  <img
                    src={Slider5}
                    alt="Slider 5"
                    style={{
                      height: "50vh",
                      padding: "15px",
                      marginLeft: "50px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </>
    );
  }
}
