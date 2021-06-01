import React from "react";

import aboutImg from "../src/images/about.svg";
import "../src/Css/About.css"
import Common from "./common";


const About = () => {
  return (
    <>
      <section id="about" className="main_heading">
        <div className="text-center pt-md-3">
          <h1 className="display-4 text-color-danger">About Smartworkers</h1>
          <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-3 px-auto pt-lg-0  order-1 order-lg-2 d-flex justify-content-center flex-column ">
                  <h2>Your goal is our Achivement</h2>
                  <ul>
                  <Common name="Smartworkers pvt.Ltd. was established in 2011 that provide scalable and flexible software solutions."/>
                     <Common name="Our business portfolio is designed to deliver cost effective and end-to-end business solutions right from conceptualization to implementation with a focus on enhancing productivity and maximizing business performance."/>
                    
                    
                  </ul>
                  </div>
                
                <div className="col-lg-6 order-sm-2 order-lg-1 header-img">
                  <img src={aboutImg} alt="image" className="img-fluid animation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
