import { Helmet } from "react-helmet-async";
import "../../styles/styles.css";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";
import canon from "../../assets/images/brands/canon.webp";
import brother from "../../assets/images/brands/brother.webp";
import hp from "../../assets/images/brands/hp.webp";
import ricoh from "../../assets/images/brands/ricoh.webp";
import konicaminolta from "../../assets/images/brands/konicaminolta.webp";
import kyocera from "../../assets/images/brands/kyocera.webp";
import nec from "../../assets/images/brands/nec.webp";
import sharp from "../../assets/images/brands/sharp.webp";
import toshiba from "../../assets/images/brands/toshiba.webp";
import xerox from "../../assets/images/brands/xerox.webp";
import home_copier from "../../assets/images/home/copier.webp";
import home_tech from "../../assets/images/home/technician.webp";
import about_customer from "../../assets/images/home/customer.webp";
import oldpic from "../../assets/images/home/oldpic.webp";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";

function HomePage() {
  const Element = Scroll.Element;
  const navigate = useNavigate();
  function delayAndGo(e, path) {
    e.preventDefault();
    setTimeout(() => navigate(path), 100);
  }
  return (
    <div className="content">
      <Helmet>
        <title>Longwave Technologies | Copier & Printer Sales and Service</title>
        <meta name="description" content="Longwave Technologies provides copier and printer sales, leasing, and repair services on Long Island. Authorized dealer for Canon, Kyocera, Sharp, and more." />
        <meta property="og:title" content="Longwave Technologies | Copier & Printer Sales and Service" />
        <meta property="og:description" content="Longwave Technologies provides copier and printer sales, leasing, and repair services on Long Island. Authorized dealer for Canon, Kyocera, Sharp, and more." />
        <link rel="canonical" href="https://longwave-technologies.github.io/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Longwave Technologies",
          "description": "Copier and printer sales, leasing, and repair services on Long Island. Authorized dealer for Canon, Kyocera, Sharp, Toshiba, Ricoh, and more.",
          "url": "https://longwave-technologies.github.io",
          "telephone": "+15166630968",
          "email": "longwavetechinfo@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "49 S",
            "addressLocality": "Hempstead",
            "addressRegion": "NY",
            "postalCode": "11550",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Long Island, New York"
          },
          "sameAs": ["https://longwave-technologies.github.io"],
          "priceRange": "$$",
          "openingHours": "Mo-Fr 09:00-17:00"
        })}</script>
      </Helmet>
      <Fade>
        <div className="parallax-container">
          <div className="text-overlay">
            <Fade up>
              <p>
                Going between digital and paper has never been easier. Longwave
                provides the perfect office imaging solution for your
                organization. We prioritize quality services and exceeding
                customer expectations.
              </p>
            </Fade>
          </div>
        </div>
      </Fade>
      <Element name="services-anchor" id="services-anchor">
        <div className="information-section" id="services-section">
          <Fade bottom>
            <h1>Services</h1>
          </Fade>
          <div className="information-section-grid">
            <Fade left>
              <div className="info-section-text-div">
                <img
                  src={home_copier}
                  className="info-section-img"
                  alt="Office copier machine available for sale or lease"
                  loading="lazy"
                ></img>
              </div>
            </Fade>
            <Fade right>
              <div className="info-section-text-div">
                <h2>Sales & Lease</h2>
                <ul className="info-section-list">
                  <li>New & refurbished multi-function printers (MFPs).</li>
                  <li>Color or Monochrome options</li>
                  <li>Delivery & installation within the Tri-state area</li>
                  <li>Flexible equipment rental agreements</li>
                  <li>Original & generic parts and toner cartridges</li>
                  <li>
                    Security features, Fax Machine, and additional add-on
                    options
                  </li>
                  <li>
                    <Link className="button" to="/products">
                      <strong>Click here to view our product offerings!</strong>
                    </Link>
                  </li>
                </ul>
              </div>
            </Fade>
            <Fade left>
              <div className="info-section-text-div">
                <h2>Repairs, Maintenance, & Supplies</h2>
                <ul className="info-section-list">
                  <li>On-site troubleshooting & repairs</li>
                  <li>Printer & Scanner set up for Windows & Mac</li>
                  <li>Networking troubleshooting</li>
                  <li>Remote troubleshooting </li>
                  <li>Service contracts for maintenance only</li>
                </ul>
              </div>
            </Fade>
            <Fade right>
              <div className="info-section-text-div">
                <img
                  src={home_tech}
                  className="info-section-img"
                  alt="Longwave Technologies technician performing on-site copier repair"
                  loading="lazy"
                ></img>
              </div>{" "}
            </Fade>
          </div>
        </div>
      </Element>
      <Fade bottom>
        <div className="brands-section">
          <h1>Brands We Support</h1>
          <div className="brand-imgs-section">
            <img src={canon} className="brand-imgs" alt="Canon" loading="lazy"></img>
            <img src={kyocera} className="brand-imgs" alt="Kyocera" loading="lazy"></img>
            <img src={sharp} className="brand-imgs" alt="Sharp" loading="lazy"></img>
            <img src={konicaminolta} className="brand-imgs" alt="Konica Minolta" loading="lazy"></img>
            <img src={ricoh} className="brand-imgs" alt="Ricoh" loading="lazy"></img>
            <img src={nec} className="brand-imgs" alt="NEC" loading="lazy"></img>
            <img src={brother} className="brand-imgs" alt="Brother" loading="lazy"></img>
            <img src={hp} className="brand-imgs" id="brand-img-hp" alt="HP" loading="lazy"></img>
            <img src={xerox} className="brand-imgs" alt="Xerox" loading="lazy"></img>
            <img src={toshiba} className="brand-imgs" alt="Toshiba" loading="lazy"></img>
          </div>
        </div>
      </Fade>
      <div className="information-section" id="About">
        <Fade bottom>
          <div>
            <h1>Our Story</h1>
            <h3 id="sub-title-text">
              We are passionate about partnering with good people and making
              their life easier
            </h3>
          </div>
        </Fade>
        <div className="information-section-grid">
          <Fade left>
            <div className="info-section-text-div">
              <img
                src={oldpic}
                className="info-section-img"
                alt="Longwave Technologies founder in the early days of the business, 1991"
                loading="lazy"
              ></img>
            </div>
          </Fade>
          <Fade right>
            <div className="info-section-text-div">
              <h2>It all started in 1991...</h2>
              <p className="info-section-para">
                A Taiwanese immigrant looking to better his family’s livelihood
                took the risk of starting his own business providing copier
                repairs to local businesses. Clients started coming from all
                over the Tri-State area and provided services expanded. Today we
                focus on quality and customer satisfaction, ready to serve our
                customers any time.
              </p>
            </div>
          </Fade>
          <Fade left>
            <div className="info-section-text-div">
              <h2>Our valued clients</h2>
              <p className="info-section-para">
                We have provided quality service to satisfied customers that
                have been with us for over 20 years. Our clients are in
                industries such as banking, architecture, construction,
                manufacturing, logistics, medical, law, accounting, insurance,
                education, nonprofits, travel, realty , and more.
              </p>
            </div>
          </Fade>
          <Fade right>
            <div className="info-section-text-div">
              <img
                src={about_customer}
                className="info-section-img"
                alt="Satisfied Longwave Technologies customer at their office"
                loading="lazy"
              ></img>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <Link
          className="button"
          to="/Contact"
          onClick={(e) => delayAndGo(e, "/contact")}
        >
          <div id="fpc_effect-back">
            <div id="fpc_box">
              <div id="fpc_content">
                <h2 className="page-curl-button">
                  Ready to boost your productivity?
                  <h3> Click here</h3>
                </h2>
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
        </Link>
      </Fade>
    </div>
  );
}
export default HomePage;
