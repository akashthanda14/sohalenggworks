import React from 'react';
import './AllProducts.css';


const allTrades = [
  {
    id: 1,
    name: 'Fabric Roll Machine',
    image: '/img/IMG-20250601-WA0063.jpg',
    description: 'The Fabric Roll Machine is used to roll large sheets of fabric into neat and uniform rolls. It ensures smooth handling, accurate alignment, and helps in efficient fabric storage and transport.',
  },
  {
    id: 2,
    name: 'Nishan Sahib Gearbox ',
    image: '/img/IMG-20250601-WA0064.jpg',
    description: 'The Nishan Shib Gearbox is a high-performance industrial gearbox designed for heavy-duty machinery. It provides efficient power transmission and smooth gear shifting for enhanced equipment reliability.',
  },
  {
    id: 3,
    name: 'Gearbox With Remote Control',
    image: '/img/IMG-20250601-WA0066.jpg',
    description: 'The Nishan Shib Gearbox with Remote Control offers advanced power transmission along with wireless operation, enabling precise gear shifting and convenient control for industrial and agricultural machinery.',
  },
  {
    id: 4,
    name: 'Sand Gravel Loading Machine',
    image: '/img/IMG-20250601-WA0058.jpg',
    description: 'The Sand Gravel Loading Machine is a heavy-duty equipment designed for efficiently scooping, lifting, and loading sand or gravel into trucks or hoppers, streamlining bulk material handling.',
  },
  {
    id: 5,
    name: 'Electrical Pannel Box',
    image: '/img/IMG-20250601-WA0030.jpg',
    description: 'Electrical Panel Box houses and protects electrical components and circuits, providing a centralized control and distribution point for electricity in industrial and commercial setups.',
  },
  {
    id: 6,
    name: 'Goods Lift ',
    image: '/img/IMG-20250601-WA0029.jpg',
    description: 'Goods Left refers to the remaining stock or inventory of products that have not yet been shipped, sold, or used. It helps track available materials for future orders or production.',
  },
  {
    id: 7,
    name: 'All Conveyour Belt Roller ',
    image: '/img/IMG-20250601-WA0040.jpg',
    description: 'Conveyor Belt Machine is a mechanical system used to transport materials or goods efficiently over a fixed path, using a continuous belt driven by motors. It is widely used in industries for loading, sorting, and moving products.',
  },
  {
    id: 8,
    name: 'Mini Tipper All Body',
    image: '/img/IMG-20250601-WA0061.jpg',
    description: 'Mini Tipper All Body Manufacturing involves designing and fabricating compact tipper truck bodies, used for efficient loading and unloading of materials in construction, agriculture, and waste management.',
  },
  {
    id: 3,
    name: 'Shredder Pressure',
    image: '/img/IMG-20250601-WA0035.jpg',
    description: 'High-pressure mechanism in shredder machines ensures efficient cutting and compression of tough materials for optimal size reduction.',
  },
  {
    id: 3,
    name: 'Shredder Machine Blade',
    image: '/img/IMG-20250601-WA0049.jpg',
    description: 'Shredder Machine Blade is a heavy-duty cutting tool designed to efficiently shred materials like plastic, crop waste, or paper into smaller pieces for recycling or disposal.',
  },
  {
    id: 2,
    name: 'Conveyor Roller',
    image: '/img/IMG-20250601-WA0024.jpg',
    description: 'Durable and smooth-rotating rollers used in conveyor systems to efficiently move goods across production or packaging lines.',
  },
  // Add more products as needed
];

const AllProducts = () => {
 

  return (
    <div className="all-products">
      <h1>All Manufacturing Products</h1>
      <div className="all-products-container">
        {allTrades.map((item) => (
          <div className="trade-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
