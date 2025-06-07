import React from "react";


const images = [

    "/img/cementsheet.jpg",
    "/img/ironpipe.jpg",
    "/img/road.jpg",
];

const AlsoSoldSlider = () => {
  const repeatedImages = [...images, ...images, ...images];

  return (
    <section className="slider-section">
      <h2 className="slider-heading">We Also Sell This Stuff</h2>
      <div className="slider-wrapper">
        {/* Shadow overlays */}
        <div className="shadow-left"></div>
        <div className="shadow-right"></div>

        {/* Image track */}
        <div className="slider-track">
          {repeatedImages.map((src, index) => (
            <div className="slide" key={index}>
              <img src={src} alt={`product-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoSoldSlider;

