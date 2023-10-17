import React, { useState, useEffect } from "react";
import parallaxImg from "../../assets/images/home/parallax-background.png";
import "./HomePage.css";
import "../../styles/styles.css";
import { Link } from "react-router-dom";
import ServicesInfo from "../../components/textAndImageList/TextAndImageList";
import canon from "../../assets/images/brands/canon.png";
import brother from "../../assets/images/brands/brother.png";
import hp from "../../assets/images/brands/hp.png";
import ricoh from "../../assets/images/brands/ricoh.png";
import konicaminolta from "../../assets/images/brands/konicaminolta.png";
import kyocera from "../../assets/images/brands/kyocera.png";
import nec from "../../assets/images/brands/nec.png";
import sharp from "../../assets/images/brands/sharp.png";
import toshiba from "../../assets/images/brands/toshiba.png";
import xerox from "../../assets/images/brands/xerox.png";
import home_copier from "../../assets/images/home/copier.png";
import home_tech from "../../assets/images/home/technician.png";
import about_customer from "../../assets/images/home/customer.png";
import Services from "../../pages/servicePage/ServicePage";
import ServicePage from "../../pages/servicePage/ServicePage";

function HomePage() {
  return (
    <div className="content" id="content">
      <div className="parallax-container">
        <div className="text-overlay">
          <p>
            Going between digital and paper has never been easier. Longwave
            provides the perfect office imaging solution for your organization.
            We prioritize quality services and exceeding customer expectations.
          </p>
        </div>
      </div>
      <div className="information-section" id="services-section">
        <h1>Services</h1>
        <div className="information-section-grid">
          <img
            src={home_copier}
            className="info-section-img"
            alt="copy img"
          ></img>
          <div className="info-section-text-div">
            <h2>Sales & Lease</h2>
            <ul classname="info-section-list">
              <li>New & refurbished multi-function printers (MFPs).</li>
              <li>Color or Monochrome options</li>
              <li>Delivery & installation within the Tri-state area</li>
              <li>Flexible equipment rental agreements</li>
              <li>Original & generic parts and toner cartridges</li>
              <li>
                Security features, Fax Machine, and additional add-on options
              </li>
              <li>
                <a className="button">
                  <strong>Click here to view our product offerings!</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="info-section-text-div">
            <h2>Repairs, Maintenance, & Supplies</h2>
            <ul classname="info-section-list">
              <li>On-site troubleshooting & repairs</li>
              <li>Printer & Scanner set up for Windows & Mac</li>
              <li>Networking troubleshooting</li>
              <li>Remote troubleshooting </li>
              <li>Service contracts for maintenance only</li>
            </ul>
          </div>
          <img
            src={home_tech}
            className="info-section-img"
            alt="copy img"
          ></img>
        </div>
      </div>
      <div className="brands-section">
        <h1>Brands We Support</h1>
        <div className="brand-imgs-section">
          <img src={canon} className="brand-imgs" alt="brand img"></img>
          <img src={kyocera} className="brand-imgs" alt="brand img"></img>
          <img src={sharp} className="brand-imgs" alt="brand img"></img>
          <img src={konicaminolta} className="brand-imgs" alt="brand img"></img>
          <img src={ricoh} className="brand-imgs" alt="brand img"></img>
          <img src={nec} className="brand-imgs" alt="brand img"></img>
          <img src={brother} className="brand-imgs" alt="brand img"></img>
          <img
            src={hp}
            className="brand-imgs"
            id="brand-img-hp"
            alt="brand img"
          ></img>
          <img src={xerox} className="brand-imgs" alt="brand img"></img>
          <img src={toshiba} className="brand-imgs" alt="brand img"></img>
        </div>
      </div>
      <div className="information-section" id="About">
        <h1>Our Story</h1>
        <h3>
          We are passionate about partnering with good people and making their
          life easier
        </h3>
        <div className="information-section-grid">
          <img
            src={home_copier}
            className="info-section-img"
            alt="copy img"
          ></img>
          <div className="info-section-text-div">
            <h2>It all started in 1991...</h2>
            <ul classname="info-section-list">
              <p>
                A Taiwanese immigrant looking to better his family’s livelihood
                took the risk of starting his own business providing copier
                repairs to local businesses. Clients started coming from all
                over the Tri-State area and provided services expanded. Today we
                focus on quality and customer satisfaction, ready to serve our
                customers any time.
              </p>
            </ul>
          </div>
          <div className="info-section-text-div">
            <h2>Our valued clients</h2>
            <ul classname="info-section-list">
              <p>
                We have provided quality service to satisfied customers that
                have been with us for over 20 years. Our clients are in
                industries such as banking, architecture, construction,
                manufacturing, logistics, medical, law, accounting, insurance,
                education, nonprofits, travel, realty , and more.
              </p>
            </ul>
          </div>
          <img
            src={about_customer}
            className="info-section-img"
            alt="copy img"
          ></img>
        </div>
      </div>
      <div id="fpc_effect-back">
        <Link className="button" to="/Contact"></Link>
        <div id="fpc_box">
          <div id="fpc_content">
            <Link className="button" to="/Contact">
              <h1> Ready to boost your productivity?</h1>
              <h3> Click here</h3>
            </Link>
          </div>
          <div id="fpc_corner-box">
            <div id="fpc_page-tip">
              <div id="fpc_corner-contents">
                {/* If you want to add text behind the paper curl
                <div id="fpc_corner-button">
                  <strong>Click here </strong> to contact us
                </div> 
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;