import React from 'react';
import { useNavigate } from 'react-router-dom';

const trades = [
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
    name: 'GearBox',
    image: '/img/IMG-20250601-WA0055.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 4,
    name: 'Briquette Machine',
    image: '/img/IMG-20250601-WA0057.jpg',
    description: 'A briquette machine compresses biomass waste into solid fuel blocks, offering an eco-friendly and efficient energy alternative.',
  },
  {
    id: 5,
    name: 'Gearbox',
    image: '/img/IMG-20250601-WA0041.jpg',
    description: 'A gearbox is a mechanical device that transfers power from an engine to the wheels or machinery, adjusting speed and torque for efficient operation.',
  },
  {
    id: 6,
    name: 'Vertical Ring Machine',
    image: '/img/machinepng.png',
    description: 'Vertical Ring Machine is a robust industrial/agricultural equipment designed for processing biomass, agricultural residue, or industrial materials.',
  },
  {
    id: 7,
    name: 'Wood Chiper Machine',
    image: '/img/machine2png.png',
    description: 'The Wood Chipper Diesel Version is a heavy-duty machine powered by a diesel engine, used to efficiently cut and shred tree branches and wood waste into chips.',
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

const Tradeproducts = () => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    navigate('/allproducts2');
  };

  return (
    <section className="trade-section1">
      <h2>Our Trade Products</h2>
      <div className="trade-container">
        {trades.map((trade) => (
          <div className="trade-card" key={trade.id}>
            <img src={trade.image} alt={trade.name} />
            <h3>{trade.name}</h3>
            <p>{trade.description}</p>
          </div>
        ))}
      </div>
      <button id="more-btn" onClick={handleMoreClick}>
        More Info
      </button>
    </section>
  );
};

export default Tradeproducts;

