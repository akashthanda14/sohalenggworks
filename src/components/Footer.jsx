import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
        <div className="logo-name">
          <Link to="/home">
            <img src="img/logopic.png" alt="SEW Logo" className="footer-logo" />
            </Link>
            <span className="logofirst">
              <font id="sew" color="ff33a8">S</font>
              <font id="sew" color="ffdc1c">E</font>
              <font id="sew" color="00bdff">W&nbsp;</font>
            </span>
          </div>
          
          <p>
            SEW is a trusted platform delivering quality and value. We aim to bring innovation and convenience to your digital experience.
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sohalenggworks81@yahoo.com</p>
          <p>Phone: +91 7889096167</p>
          <p>Phone: +91 8146848037</p>
          <p>Office: +91 7652896167</p>
          <p>Address: Talwan Road PHILLAUR (144410) Dist. Jalandhar Punjab</p>
        </div>

        {/* Newsletter & Social */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Newsletter</h3>
          <form>
            <input type="email" placeholder="Your Email" />
            <br />
            <button type="submit">Subscribe</button>
          </form>
          <div className="social-icons" style={{ marginTop: '20px' }}>
            <a href="https://www.facebook.com/share/18tYVcH9hE/"><img src="img/facebook.png" alt="Facebook" /></a>
            <a href="https://www.instagram.com/sohalenggworks?igsh=YmVsb2E1Y2o3YWZ5"><img src="img/instagram.png" alt="Instagram" /></a>
            <a href="http://www.youtube.com/@SEWphillaur"><img src="img/youtube.png" alt="YouTube" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        &copy; 2025 SEW. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;