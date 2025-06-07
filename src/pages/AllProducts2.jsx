import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './AllProducts2.css';

const allTrades = [
  {
    id: 1,
    name: 'Gearbox',
    image: '/img/IMG-20250601-WA0018.jpg',
    description: 'Gearbox is a mechanical system that transmits power from the engine to the machine, allowing speed and torque control for efficient operation in various industrial applications.',
  },
  {
    id: 2,
    name: 'Crompton Motor',
    image: '/img/IMG-20250601-WA0031.jpg',
    description: 'Crompton Motor is a high-performance electric motor known for its durability, energy efficiency, and reliable operation across industrial and commercial applications.',
  },
  {
    id: 3,
    name: 'Shredder Machine Blade',
    image: '/img/IMG-20250601-WA0049.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 4,
    name: ' Helical GearBox 75HP ',
    image: '/img/IMG-20250601-WA0055.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 5,
    name: 'Conveyor Roller',
    image: '/img/IMG-20250601-WA0024.jpg',
    description: 'Durable and smooth-rotating rollers used in conveyor systems to efficiently move goods across production or packaging lines.',
  },
  {
    id: 6,
    name: 'Shredder Pressure',
    image: '/img/IMG-20250601-WA0035.jpg',
    description: 'High-pressure mechanism in shredder machines ensures efficient cutting and compression of tough materials for optimal size reduction.',
  },
  {
    id: 7,
    name: 'Briquette Machine',
    image: '/img/IMG-20250601-WA0057.jpg',
    description: 'A briquette machine compresses biomass waste into solid fuel blocks, offering an eco-friendly and efficient energy alternative.',
  },
  {
    id: 8,
    name: 'Gearbox',
    image: '/img/IMG-20250601-WA0041.jpg',
    description: 'A gearbox is a mechanical device that transfers power from an engine to the wheels or machinery, adjusting speed and torque for efficient operation.',
  },
  {
    id: 7,
    name: 'Helical Inline Geared Motor 3HP,5HP',
    image: '/img/helicalmotor.JPG',
    description: 'Helical Inline Geared Motor (3HP, 5HP) is a highly efficient and compact power transmission solution designed for smooth torque delivery, quiet operation, and reliable performance in various industrial and automation applications..',
  },
  {
    id: 7,
    name: 'Compact Geared Motor 3HP,5HP',
    image: '/img/compactmotor.jpg',
    description: 'Compact Geared Motor (3HP, 5HP) offers space-saving design with high torque output, ensuring efficient and reliable performance in heavy-duty industrial operations.',
  },
  {
    id: 7,
    name: 'Planetary Geared Motor 5HP',
    image: '/img/planetarymotor.jpg',
    description: 'Planetary Geared Motor (5HP) delivers high torque and efficiency in a compact design, ideal for heavy-duty industrial applications requiring precise motion control.',
  },
];
const AllProducts2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/tradeproducts");
  };

  return (
    <div className="all-products">
      <h1>Our Trade Products</h1>
      <div className="all-products-container">
        {allTrades.map((item, index) => (
          <div className="trade-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default AllProducts2;

