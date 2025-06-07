// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/" className="logo">
            <img src="img/logopic.png" alt="logo" />
          </Link>

          <span className="logofirst">
            <font id="sew" color="ff33a8">
              S
            </font>
            <font id="sew" color="ffdc1c">
              E
            </font>
            <font id="sew" color="00bdff">
              W&nbsp;
            </font>
          </span>
        </div>

        <ul className="desktop-menu">
            
        <li>
            <Link to="/">Home</Link>
          </li>
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
        <Link to="/contact" id="btn">
          Contact
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </nav>

      <div className={`menubar ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/project" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={toggleMenu}>
              Gallery
            </Link>
          </li>
      
          <li>
            <Link to="/allproducts" onClick={toggleMenu}>
              Manufacturing
            </Link>
          </li>
          <li>
          <Link to="/allproducts2" onClick={toggleMenu}>
              Trade Products
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
