import React from "react";
import Common from './common'
import contactImg from '../src/images/contact.svg'
import '../src/Css/About.css'

const Contact = () => {
  return (
    <>
    <section id="contact" className="main_heading">
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
                     <Common name="Wisflux Pvt. Ltd. was established in 2017 with a vision to represent itself as one of the leading companies in providing scalable and flexible software solutions & consulting."/>
                     <Common name="Wisflux Pvt. Ltd. was established in 2017 with a vision to represent itself as one of the leading companies in providing scalable and flexible software solutions & consulting."/>
                     <Common name="Wisflux Pvt. Ltd. was established in 2017 with a vision to represent itself as one of the leading companies in providing scalable and flexible software solutions & consulting."/>
                  </ul>
                  </div>
                
                <div className="col-lg-6 order-sm-2 order-lg-1 header-img">
                  <img src={contactImg} alt="image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
