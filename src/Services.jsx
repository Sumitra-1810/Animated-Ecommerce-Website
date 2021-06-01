import React from "react";
import sd from "../src/images/Software-Development.jpg";
import app from "../src/images/mobile-app.jpg";
import game from "../src/images/game.jpeg";
import wd from "../src/images/web-development.jpg";
import dm from "../src/images/digital-marketing.webp";
import gd from "../src/images/grahic-designing.png";

import "../src/Css/services.css";

const Services = () => {
  return (
    <>
      <section id="services" className="main_heading">
        <div className="text-center pt-md-5">
          <h1 className="display-4 text-color-danger">Our Services</h1>
          <hr className="w-25 mx-auto"></hr>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={sd}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">Software Development</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={app}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">App Development</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={game}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">Game Development</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={wd}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">Web development</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={dm}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">Digital marketing</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-10 mx-auto mt-5">
                  <div className="card">
                    <img
                      src={gd}
                      className="card-img-top"
                      alt="..."
                      height="300px"
                    />
                    <div className="card-body">
                      <h2 className="card-title">Graphic designing</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
