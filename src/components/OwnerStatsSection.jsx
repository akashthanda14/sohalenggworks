import React, { useEffect, useRef, useState } from 'react';


// 👇 Typewriter Component
const Typewriter = ({ textArray, speed = 150, pause = 1500 }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [backspace, setBackspace] = useState(false);

  useEffect(() => {
    if (index === textArray.length) return;

    const timeout = setTimeout(() => {
      if (!backspace) {
        setText(textArray[index].substring(0, subIndex + 1));
        setSubIndex(subIndex + 1);
        if (subIndex === textArray[index].length) {
          setBackspace(true);
        }
      } else {
        setText(textArray[index].substring(0, subIndex - 1));
        setSubIndex(subIndex - 1);
        if (subIndex === 0) {
          setBackspace(false);
          setIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, backspace ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, backspace]);

  return <h3 className="typing-text">{text}|</h3>;
};

// 👇 CountUp Component for stats
const CountUp = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [end, isVisible]);

  return <h3>{end % 1 === 0 ? Math.round(count) : count}</h3>;
};

const statsData = [
  { value: 1200, label: 'Products Sold' },
  { value: 300, label: 'Happy Customers' },
  { value: 4.9, label: 'Average Rating' },
  { value: 95, label: 'Positive Feedback', isPercent: true }
];

const OwnerStatsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="owner-section" ref={sectionRef}>
      <div className="owner-left">
        <Typewriter textArray={['Welcome to our site']} />
        <img src="/img/owner.jpg" alt="Owner" className="owner-photo" />
        <h2 className="owner-name">PS SOHAL</h2>
        <p className="owner-role">Founder & CEO</p>
      </div>

      <div className="owner-right">
        {statsData.map((stat, index) => (
          <div className="stat-card" key={index}>
            <CountUp end={stat.value} isVisible={isVisible} />
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OwnerStatsSection;


