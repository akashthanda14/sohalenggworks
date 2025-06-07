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
      {
        src: "/img/IMG-20250601-WA0028.jpg",
        caption: "Side view of the Shredder Machine",
      },
      {
        src: "/img/IMG-20250601-WA0032.jpg",
        caption: "Shredder in action cutting crop waste",
      },
      { src: "/img/1748978756826.jpg", caption: "88HP 2.5TON IN ONE HOURS" },
      {
        src: "/img/IMG-20250601-WA0030.jpg",
        caption: "Front view showing shredder blades",
      },
      {
        src: "/img/1749304319978.jpg",
        caption: "Front view showing shredder blades",
      },
      {
        src: "/img/VID-20250607-WA0017.mp4",
        caption: "Machine in action (video)",
      },
      {
        src: "/img/VID-20250607-WA0016.mp4",
        caption: "128HP 5TON IN ONE HOURS (video)",
      },
      { src: "/img/VID-20250607-WA0018.mp4", caption: "58HP 1TON IN ONE HOUR" },
    ],
  },
  {
    id: "machine2",
    img: "/img/conveyor.jpg",
    title: "Green Loader Machine",
    desc: "Green Loader Machine is a multipurpose agricultural tool designed to lift, load, and transport materials like soil, fertilizer, compost, and harvested crop.",
    gallery: [
      { src: "/img/conveyor.jpg", caption: "Green loader front view" },
      { src: "/img/conveyor2.jpg", caption: "Loader during lifting operation" },
    ],
  },
  {
    id: "machine3",
    img: "/img/IMG-20250601-WA0056.jpg",
    title: "Tractor loader Machine",
    desc: "The Tactor Hydra Machine is a tractor-operated hydraulic farming tool used for plowing, lifting, sowing, and other agricultural tasks efficiently with interchangeable attachments.",
    gallery: [
      { src: "/img/hydraimg1.png", caption: "Hydra machine with bucket" },
      { src: "/img/hydraimg2.jpg", caption: "Top view of crane system" },
    ],
  },
  {
    id: "machine4",
    img: "/img/cunncrit.jpg",
    title: "Concrete Mixer And Loader 360 Rotate",
    desc: "This is an advanced concrete mixer machine equipped with a 360-degree rotating loader system. Designed for efficient material mixing and loading/unloading at construction sites, it offers high mobility and smooth operation even in tight spaces. The rotating feature saves both time and labor, making it ideal for heavy-duty construction tasks.",
    gallery: [
      { src: "/img/360machine.JPG", caption: "Concrete mixer with loader" },
      { src: "/img/360machine.JPG", caption: "360 rotating loader view" },
      {
        src: "/img/VID-20250603-WA0041.mp4",
        caption: "Machine in action (video)",
      },
    ],
  },
  {
    id: "machine5",
    img: "/img/conyorpng.png",
    title: "All Conveyor Machine",
    desc: "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains.",
    gallery: [
      { src: "/img/conveyorimg1.jpg", caption: "Side view of conveyor" },
      { src: "/img/conveyorimg2.jpg", caption: "Conveyor rollers system" },
      { src: "/img/conveyorimg3.png", caption: "Top view with materials" },
    ],
  },
  {
    id: "machine7",
    img: "/img/debeeler.jpg",
    title: "Debe6 With Cutter Machine 20HP",
    desc: "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently.",
    gallery: [
      { src: "/img/1748978987114.jpg", caption: "Debeler cutting chamber" },
      { src: "/img/debel.jpg", caption: "Complete machine overview" },
      { src: "/img/debelvideo.mp4", caption: "Machine in action (video)" },


    ],
  },
  {
    id: "machine8",
    img: "/img/IMG-20250601-WA0054.jpg",
    title: "All Tractor Hydra Crane",
    desc: "All Tractor Hydra Cranes are powerful lifting machines mounted on tractors, used for loading, unloading, and transporting heavy materials in farms, factories, and construction sites",
    gallery: [
      {
        src: "/img/IMG-20250601-WA0054.jpg",
        caption: "Our Tractor Crane ",
      },
      { src: "/img/debblervideo.mp4", caption: "Machine in action (video)" },
    ],
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
              const isVideo =
                media.src.endsWith(".mp4") || media.src.endsWith(".webm");
              return (
                <div key={index} className="gallery-item">
                  {isVideo ? (
                    <video src={media.src} controls className="gallery-video" />
                  ) : (
                    <img
                      src={media.src}
                      alt={`${project.title} ${index + 1}`}
                    />
                  )}
                  <p className="gallery-caption">{media.caption}</p>
                </div>
              );
            })}
        </div>
      </section>
    </section>
  );
};

export default ProjectDetails;
