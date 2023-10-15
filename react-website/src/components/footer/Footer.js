import React, { useState, useEffect }  from 'react';
import './Footer.css';
import logoFooter from '../../assets/images/logoFinal.png';

function Footer () {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      return (
        <footer className="footer">
          <div className="footer-content">
            <div className="logoFooter" onClick={scrollToTop}>
                <img src={logoFooter} className='logoFooter' onClick={scrollToTop} alt='logoFooter' size={10}>
                </img>
            </div>
            <p>&copy; 2023 Longwave Technologies L.I. Inc. All Rights Reserved.</p>
            
          </div>
        </footer>
      );
    };
export default Footer;