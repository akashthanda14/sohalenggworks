import React from "react";

const SocialSection = () => {
  return (
    <div className="container">
      <h2 className="section-heading">Follow Us On Social Media</h2>

      <div className="social-section">
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fA7XES9bxcY?si=tJIQWaP4j76JPgmm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="social-links">
          {[
            {
              name: "YouTube",
              link: "http://www.youtube.com/@SEWphillaur",
              img: "/img/youtube.png",
            },
            {
              name: "Facebook",
              link: "https://www.facebook.com/share/18tYVcH9hE/",
              img: "/img/facebook.png",
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/sohalenggworks?igsh=YmVsb2E1Y2o3YWZ5",
              img: "/img/instagram.png",
            },
            {
              name: "Twitter",
              link: "",
              img: "/img/twitter.png",
            },
          ].map((item) => (
            <div className="social-box" key={item.name}>
              <img src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <a href={item.link} target="_blank" rel="noreferrer">
                Visit
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
