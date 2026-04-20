import React from "react";
import logo from "../../assets/images/logoFinal.png";
import "./Header.css";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/styles.css";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

function Header({ tabsData }) {
  const navigate = useNavigate();

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const scroller = Scroll.scroller;

  const scrollToServicesAnchor = () => {
    scroller.scrollTo("services-anchor", {
      duration: 0,
      smooth: true,
      offset: -150,
    });
  };

  const goToHomeAndScrollServices = async () => {
    await navigate("/");
    await scroller.scrollTo("services-anchor", {
      duration: 0,
      smooth: true,
      offset: -150,
    });
  };
  return (
    <Fade>
      <div className="header" role="banner">
        <nav aria-label="Main navigation">
          <ul className="tabs">
            <li>
              <button
                className="logo-btn"
                onClick={() => navigate("/")}
                aria-label="Go to home page"
              >
                <img src={logo} alt="Longwave Technologies" className="logo" />
              </button>
            </li>
            <li>
              <button
                className="tab"
                onClick={location === "home" ? scrollToServicesAnchor : goToHomeAndScrollServices}
                aria-label="Go to Services section"
              >
                Services
              </button>
            </li>
            {tabsData.map((tab) => (
              <li key={tab.label}>
                <button
                  className="tab"
                  onClick={() => navigate(tab.path)}
                  aria-label={`Go to ${tab.label} page`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Fade>
  );
}

export default Header;
