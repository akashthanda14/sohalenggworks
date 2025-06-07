import React from "react";


export default function About() {
  return (
    <section className="about-section">
    <div className="about-header">
      <h2>
        About
        <span className="logofirst">
          <font id="sew" color="ff33a8">S</font>
          <font id="sew" color="ffdc1c">E</font>
          <font id="sew" color="00bdff">W&nbsp;</font>
        </span>
      </h2>
      <p>
        SEW is a trusted platform delivering quality and value. We aim to bring innovation and convenience to your digital experience.
      </p>
    </div>

    <div className="about-content">
      <img src="img/logopic.png" alt="SEW Logo" />
      <div className="about-text">
        <h3>Our Journey</h3>
        <p>
        Sohal Engineering Works is a trusted name in the field of industrial job work, specializing in hydraulic systems, dyeing equipment, rice mill machinery, and other mechanical and technical solutions. Based in Phillaur, Punjab, 
        </p>
        <p>
        we bring over a decade of experience in delivering customized and reliable engineering services to meet the diverse needs of industries, <span>TRADE NO - 2092398</span>
        </p>
      </div>
    </div>

    <div className="highlight-boxes">
      <div className="box">
        <h4>Our Mission</h4>
        <p>
        To provide top-quality technical and mechanical job works that enhance industrial productivity and reliability, using modern tools and expert craftsmanship.
        </p>
      </div>
      <div className="box">
        <h4>Our Vision</h4>
        <p>
        To become a leading engineering workshop in North India, known for innovation, integrity, and excellence in industrial services
        </p>
      </div>
      <div className="box">
        <h4>About Government Jem</h4>
        <p>
        Government schemes play a crucial role in the socio-economic development of the country. These schemes are designed to provide support and assistance to various sections of society, including farmers, entrepreneurs, women, youth, and disadvantaged communities.
        </p>
      </div>
    </div>
  </section>
  );
}