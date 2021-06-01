import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/images/Smart workers-logos_transparent.png";
import './Css/Navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg  bg-grey">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="#">
                  <img src={logo}className="logo" alt="smartworkers logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    class="bi"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    ></path>
                  </svg></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a activeClassName="menu-active"
                      exact  className="nav-link " href="#home"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu-active"
                      className="nav-link" href="#about">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu-active"
                      className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a activeClassName="menu-active"
                      className="nav-link" href="#contact">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
