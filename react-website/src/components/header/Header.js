import React, { useState } from "react";
import logo from "../../assets/images/logoFinal.png";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../pages/homePage/HomePage";
// import { Link } from 'react-scroll';
import "../../styles/styles.css";

function Header({ tabsData }) {
  const [activeTab, setActiveTab] = useState("home"); // Initially set to 'home', change as needed
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab);
  };

  const scroll = () => {
    const section = document.querySelector( '#services-section' );
    console.log('scroll');
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };

  return (
    <div className="header">
      <ul className="tabs">
        <img
          src={logo}
          alt="Home"
          className="logo"
          onClick={() => {
            // alert('Logo clicked!');
            navigate("/");
          }}
        />
        {tabsData.map((tab, index) => (
          <li key={tab.label}>
            <div
              className="tab"
              onClick={() => {
                handleTabClick(tab.path);
              }}
              style={activeTab === tab.path ? { color: "#159cf6" } : {}}
            >
              {tab.label}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
