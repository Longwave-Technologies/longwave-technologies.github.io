import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/images/logoFinal.png";
import "../../styles/styles.css";
import Fade from "react-reveal/Fade";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Fade bottom>
        <div className="footer-content">
          <button className="logoFooter-btn" onClick={scrollToTop} aria-label="Scroll to top of page">
            <img
              src={logoFooter}
              className="logoFooter"
              alt="Longwave Technologies"
            />
          </button>
          <h4>
            &copy; {year} Longwave Technologies L.I. Inc. All Rights Reserved.
          </h4>
        </div>
      </Fade>
    </footer>
  );
}
export default Footer;
