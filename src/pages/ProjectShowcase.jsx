import React, { useState } from "react";
import "./ProjectShowcase.css";
import { motion } from "framer-motion";
import Fuse from "fuse.js";

const projectList = [
  {
    image: "img/shrederpng.png",
    title: " Shredder Machine",
    description:
      "The Shredder Machine is a powerful device used to cut, tear, or grind materials like crop waste, plastic, or paper into smaller pieces for easy disposal, recycling, or composting.",
  },
  {
    image: "img/machinepng.png",
    title: "Vertical Ring Machine",
    description:
      "The Vertical Ring Machine is an agricultural or industrial machine used for efficiently cutting, shaping, or compressing materials in a vertical circular motion.",
  },
  {
    image: "img/hydrapng.png",
    title: " Tractor Hydra",
    description:
      "The Tactor Hydra Machine is a tractor-operated hydraulic farming tool used for plowing, lifting, sowing, and other agricultural tasks efficiently with interchangeable attachments.",
  },
  {
    image: "img/machine2png.png",
    title: "Wood Chiper Machine",
    description:
      "The Wood Chipper Diesel Version is a heavy-duty machine powered by a diesel engine, used to efficiently cut and shred tree branches and wood waste into chips",
  },
  {
    image: "img/conyorpng.png",
    title: "Conveyor Belt System",
    description:
      "The Conveyor Machine is a mechanical system used to transport materials or goods automatically using belts, rollers, or chains",
  },
  {
    image: "img/machine3png.png",
    title: "Briquetting Machine ",
    description:
      "The Briquetting Machine compresses biomass waste like sawdust or crop residues into solid briquettes used as eco-friendly fuel.",
  },
  {
    image: "img/debeeler.jpg",
    title: "Briquetting Machine ",
    description:
      "A debeler machine is used for processing agricultural or industrial materials by cutting, peeling, or separating parts efficiently",
  },
];

const ProjectShowcase = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleClear = () => {
    setSearchInput("");
    setSearchTerm("");
  };

  const fuse = new Fuse(projectList, {
    keys: ["title"],
    threshold: 0.4,
  });

  const filteredProjects = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : projectList;

  if (selectedProject) {
    const { title, description, image } = selectedProject;
    return (
      <div className="single-view">
        <div className="detail-container">
          <img src={image} alt={title} className="detail-image" />
          <div className="detail-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>

        {/* ✅ Back Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={() => setSelectedProject(null)}
            style={{
              padding: "10px 25px",
              borderRadius: "8px",
              backgroundColor: "#b5b5b5",
              color: "white",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="showcase-wrapper">
      <motion.h2
        className="showcase-title"
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <span className="underline-bar"></span> Our Projects
      </motion.h2>

      {/* Search Bar Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search machine name..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            padding: "10px",
            borderRadius: "8px",
            width: "250px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              padding: "8px 12px",
              borderRadius: "50%",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              lineHeight: "1",
            }}
            title="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* No Results Message */}
      {filteredProjects.length === 0 ? (
        <div
          style={{
            padding: "40px",
            margin: "30px auto",
            textAlign: "center",
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "12px",
            width: "100%",
            height: "25vh",
            fontSize: "20px",
            fontWeight: "bold",
            border: "2px solid #f5c6cb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ❌ Project not found
        </div>
      ) : (
        <div
          className={
            filteredProjects.length === 1
              ? "single-project-center"
              : "project-flexbox"
          }
        >
          {filteredProjects.map((project, index) => {
            const { title, image } = project;
            return (
              <motion.div
                className="project-tile"
                key={`${title}-${index}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                style={{ cursor: "pointer" }}
              >
                <img src={image} alt={title} />
                <div className="tile-details">
                  <h3>{title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;
