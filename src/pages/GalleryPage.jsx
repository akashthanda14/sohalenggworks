import React from 'react';
import './GalleryPage.css';

const images = [
  '/img/logopic.png',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/img/logopic.png'
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-heading">Our Beautiful <span>Gallery</span></h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
