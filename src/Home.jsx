import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "../src/images/header-image.svg";
import "../src/Css/Home.css";

const Home = () => {
  return (
    <>
      <section id="header">
        <div className="container-fluid-nav_bg">
          <div className="row">
            <div className="col-10 col-xl-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <h1 >
                    Grow your business with
                    <strong className="brand-name"> SmartWorkers</strong>
                  </h1>
                  <h2>
                    we are the team of innovative & passionate web developers
                  </h2>

                  <div className="mt-3">
                    <NavLink to="/services" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={image1} alt="image" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
