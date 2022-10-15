import "./about_us.css";
import React from "react";

class AboutUs extends React.Component{
    render(){
        return (
          <main className="outerAbout">
            <h2 className="meet-team">Meet the team</h2>
            <section className="contributers">
              <div className="anusha-outer">
                  <h3>Project Lead</h3>
                  <img
                    src="https://global-cuisine.s3.us-west-1.amazonaws.com/anusha.png"
                    alt="anusha"
                    className="anusha-pic"
                  ></img>
                <div className="social">
                  <a href="https://github.com/dreamdivine" target="_blank">
                    <i className="fab fa-github-square" id="github-icon"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anusha-tuladhar/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" id="linkedIn-icon"></i>
                  </a>
                  <a href="https://angel.co/u/anusha-tuladhar" target="_blank">
                    <i className="fab fa-angellist" id="angellist-icon"></i>
                  </a>
                </div>
              </div>
              <div className="cal-outer">
                <h3>Frontend Lead</h3>
                <img
                  src="https://global-cuisine-bucket-final.s3.us-west-1.amazonaws.com/cal_brown.jpeg"
                  alt="cal"
                  className="cal-pic"
                ></img>
                <div className="social">
                  <a href="https://github.com/cBrownSF" target="_blank">
                    <i className="fab fa-github-square" id="github-icon"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/cal-brown-sfca/"
                    target="_blank">
                    <i className="fab fa-linkedin" id="linkedIn-icon"></i>
                  </a>
                  <a href="https://angel.co/u/cal-brown-1" target="_blank">
                    <i className="fab fa-angellist" id="angellist-icon"></i>
                  </a>
                </div>
              </div>
              <div className="andrew-outer">
                <h3>Backend Lead</h3>
                  <img
                    src="https://global-cuisine.s3.us-west-1.amazonaws.com/andrew.jpg"
                    alt="andrew"
                    className="andrew-pic"
                  ></img>
                <div className="social">
                  <a href="https://github.com/aroellig" target="_blank">
                    <i className="fab fa-github-square" id="github-icon"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrew-roellig-a4a0811b7/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" id="linkedIn-icon"></i>
                  </a>
                  <a href="https://angel.co/u/andrew-roellig" target="_blank">
                    <i className="fab fa-angellist" id="angellist-icon"></i>
                  </a>
                </div>
              </div>
            </section>
          </main>
        );
    }
}

export default AboutUs