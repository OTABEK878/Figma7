import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <div className="footer-logo">
            <img src="./img/Icon (5).png" alt="" />
          <p>EduInspire</p>
        </div>
        <p className="footer-slogan">Education Reimagined</p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Newsroom</a>
        </div>
        <div className="footer-column">
          <h4>Benefits</h4>
          <a href="#">Efficiency</a>
          <a href="#">Variety</a>
          <a href="#">Updates</a>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Threads</a>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
