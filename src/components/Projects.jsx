import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const projects = [
  {
    id: "machine1",
    img: "/img/shrederpng.png",
    title: "Shredder Machine",
    desc: "The Shredder Machine is a powerful device used to cut, tear, or grind materials like crop waste, plastic, or paper into smaller pieces for easy disposal, recycling, or composting.",
    gallery: [
      "/img/IMG-20250601-WA0028.jpg",
      "/img/IMG-20250601-WA0032.jpg",
      "/img/1748978756826.jpg",
      
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
    desc: "This is an advanced concrete mixer machine equipped with a 360-degree rotating loader system. Designed for efficient material mixing and loading/unloading at construction sites.",
    gallery: ["/img/360machine.JPG", "/img/360machine.JPG"],
  },
  {
    id: "machine5",
    img: "/img/conyorpng.png",
    title: " All Conveyor Machine",
    desc: "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains.",
    gallery: ["/img/conveyorimg1.jpg", "/img/conveyorimg2.jpg", "/img/conveyorimg3.png"],
  },
  {
    id: "machine7",
    img: "/img/debeeler.jpg",
    title: "Debel With Cutter Machine 20HP",
    desc: "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently.",
    gallery: ["/img/1748978987114.jpg", "/img/1748871792511.JPG",],
  },
];

export default function Projects() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const section = document.getElementById("projects-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section id="projects-section" className="projects-section">
      <h2 className="animated-h1">Our Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
            >
              <img src={project.img} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}


