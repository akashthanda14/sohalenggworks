import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Tractor Hydra Crane ",
    desc: "Used to load and transfer agricultural materials efficiently, saving time and labor.",
    media: ["/img/debblervideo.mp4"],
  },
  {
    title: "Debbel Machine",
    desc: "This machine helps in shaping or cutting materials using vertical ring motion in industries.",
    media: ["/img/VID-20250602-WA0005.mp4"],
  },
];

const PopularProject = () => {
  return (
    <section className="popular-section">
      <h1 className="popular-heading">Our Popular Projects</h1>
      {projects.map((project, index) => (
        <div className="popular-project" key={index}>
          <div className="left-video">
            <video src={project.media[0]} autoPlay muted loop playsInline />
          </div>
          <div className="right-info">
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
          </div>
        </div>
      ))}

      {/* Button to VideoGallery page */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/videogallery" id="more-btn">
          More Videos
        </Link>
      </div>
    </section>
  );
};

export default PopularProject;





