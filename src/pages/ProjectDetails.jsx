import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./ProjectDetails.css";

const projectData = [
  {
    id: "machine1",
    img: "/img/shrederpng.png",
    title: "Shredder Machine",
    desc: "The Shredder Machine is a powerful device used to cut, tear, or grind materials like crop waste, plastic, or paper into smaller pieces for easy disposal, recycling, or composting.",
    gallery: [
      "/img/IMG-20250601-WA0028.jpg",
      "/img/IMG-20250601-WA0032.jpg",
      "/img/1748978756826.jpg",
      "/img/IMG-20250601-WA0030.jpg",
    ],
  },
  {
    id: "machine2",
    img: "/img/conveyor.jpg",
    title: "Green Loader Machine",
    desc: "Green Loader Machine is a multipurpose agricultural tool designed to lift, load, and transport materials like soil, fertilizer, compost, and harvested crop.",
    gallery: ["/img/conveyor.jpg", "/img/conveyor2.jpg"],
  },
  {
    id: "machine3",
    img: "/img/IMG-20250601-WA0056.jpg",
    title: "Hydra Crane Machine",
    desc: "The Tactor Hydra Machine is a tractor-operated hydraulic farming tool used for plowing, lifting, sowing, and other agricultural tasks efficiently with interchangeable attachments.",
    gallery: ["/img/hydraimg1.png", "/img/hydraimg2.jpg"],
  },
  {
    id: "machine4",
    img: "/img/cunncrit.jpg",
    title: "Concrete Mixer And Loader 360 Rotate",
    desc: "This is an advanced concrete mixer machine equipped with a 360-degree rotating loader system. Designed for efficient material mixing and loading/unloading at construction sites, it offers high mobility and smooth operation even in tight spaces. The rotating feature saves both time and labor, making it ideal for heavy-duty construction tasks.",
    gallery: [
      "/img/360machine.JPG",
      "/img/360machine.JPG",
      "/img/VID-20250603-WA0041.mp4"  // ✅ Added video
    ],
  },
  {
    id: "machine5",
    img: "/img/conyorpng.png",
    title: "All Conveyor Machine",
    desc: "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains.",
    gallery: [
      "/img/conveyorimg1.jpg",
      "/img/conveyorimg2.jpg",
      "/img/conveyorimg3.png",
    ],
  },
  {
    id: "machine7",
    img: "/img/debeeler.jpg",
    title: "Debel With Cutter Machine 20HP",
    desc: "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently.",
    gallery: ["/img/1748978987114.jpg", "/img/debel.jpg"],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = projectData.find((proj) => proj.id === id);

  useEffect(() => {
    if (location.state?.scrollToTop) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  if (!project) {
    return <div className="not-found">Project Not Found</div>;
  }

  const handleBack = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <section className="project-details">
      <div className="project-content">
        <div className="project-image">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="project-text">
          <h1>{project.title}</h1>
          <p>{project.desc}</p>
          <button onClick={handleBack} className="back-button">
            <img src="/img/back.png" alt="Back" />
          </button>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <section className="project-gallery">
        <h2>{project.title} Gallery</h2>
        <div className="gallery-grid">
          {project.gallery &&
            project.gallery.map((media, index) => {
              const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");
              return isVideo ? (
                <video
                  key={index}
                  src={media}
                  controls
                  className="gallery-video"
                />
              ) : (
                <img
                  key={index}
                  src={media}
                  alt={`${project.title} ${index + 1}`}
                />
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default ProjectDetails;
