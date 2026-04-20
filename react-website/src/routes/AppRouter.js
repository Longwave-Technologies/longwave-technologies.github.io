import React, { Suspense, lazy, useLayoutEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import "./AppRouter.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = lazy(() => import("../pages/homePage/HomePage"));
const Products = lazy(() => import("../pages/productPage/ProductPage"));
const Contact = lazy(() => import("../pages/contactPage/ContactPage"));

const tabsData = [
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};


function AppRouter() {
  return (
    <div className="app-container">
      <div className="app_background">
        <div className="dot3"></div>
        <div className="dot2"></div>
        <div className="dot1"></div>
      </div>

      <Router>
        <Wrapper>
          <Header tabsData={tabsData} />
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer className="footer" />
        </Wrapper>
      </Router>
    </div>
  );
}

export default AppRouter;
