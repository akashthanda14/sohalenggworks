import React from "react";
import { motion } from "framer-motion";
import { FaWrench, FaScrewdriver,FaTruck, FaCog } from "react-icons/fa";
import "./OurServicesPage.css";

const services = [
  {
    title: "Machine Repair",
    icon: <FaWrench  size={40} />,
    description: "Fast, reliable repair for all machines.",
  },
  {
    title: "Custom Fabrication",
    icon: <FaCog size={30} />,
    description: "	Tailored parts made to fit your needs.",
  },
  {
    title: "	Installation & Setup",
    icon: <FaScrewdriver size={30} />,
    description: "	Expert on-site installation service.",
  },
  {
    title: "Reliable Delivery",
    icon: <FaTruck size={30} />,
    description: "We ensure quick delivery of all necessary machine parts.",
  },
  {
    title: "Reliable Delivery",
    icon: <FaTruck size={30} />,
    description: "We ensure quick delivery of all necessary machine parts.",
  },
  {
    title: "Reliable Delivery",
    icon: <FaTruck size={30} />,
    description: "We ensure quick delivery of all necessary machine parts.",
  },
  
  
  
];

const OurServices = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">What we offer to grow your business</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
