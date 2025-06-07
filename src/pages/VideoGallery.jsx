import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./VideoGallery.css";
import { Link, useLocation } from "react-router-dom";

const videoData = [
  {
    title: "Hydra Loader",
    desc: "Used for loading materials like sand or gravel efficiently on farms or construction sites.",
    src: "/img/debblervideo.mp4",
    poster: "/img/IMG-20250601-WA0052.jpg",
  },
  {
    title: "Debbler Machine",
    desc: "Industrial debbler used for shaping or cutting components with precision.",
    src: "/img/VID-20250602-WA0005.mp4",
    poster: "/img/IMG-20250601-WA0028.jpg",
  },
  {
    title: "Tractor Hydra Crane 360 Rotate",
    desc: "Diesel-powered machine for shredding tree branches and logs into chips.",
    src: "/img/VID-20250603-WA0041.mp4",
    poster: "/img/360loader.jpg",
  },
  {
    title: "Briquette Machine",
    desc: "Converts biomass waste into solid fuel blocks for eco-friendly energy use.",
    src: "/videos/briquette.mp4",
    poster: "/thumbnails/briquette.jpg",
  },
];

const VideoGallery = () => {
  const navigate = useNavigate();
  const videoRefs = useRef([]);

  const handlePlay = (indexToPlay) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== indexToPlay) {
        video.pause();
      }
    });
  };

  const handleBack = () => {
    navigate("/popular");
  };

  return (
    <section className="video-gallery-section">
      <h2 className="video-gallery-heading">Our Video Gallery</h2>

      <div className="video-grid">
        {videoData.map((video, index) => (
          <div className="video-card" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.src}
              poster={video.poster}
              controls
              className="gallery-video"
              preload="none"
              onPlay={() => handlePlay(index)}
            />
            <h3>{video.title}</h3>
            <p>{video.desc}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        
        <button onClick={handleBack} className="back-btn">
          ← Back to Popular Projects
        </button>
      </div>
    </section>
  );
};

export default VideoGallery;

