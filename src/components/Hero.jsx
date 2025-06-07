import React, { useEffect, useRef, useState } from 'react';
import useScrollAnimation from "../hooks/useScrollAnimation"; // 👈 yahan import kiya

export default function Hero() {
  const videoRef = useRef(null);

  // 👇 Ye line text animation lagayegi
  useScrollAnimation(".animated-h1");
  useScrollAnimation(".animated-p");

  useEffect(() => {
    const video = videoRef.current;
    const videos = ["bgvii.mp4"];
    let current = 0;

    video.src = videos[current];
    video.play();

    const next = () => {
      current = (current + 1) % videos.length;
      video.src = videos[current];
      video.play();
    };

    video.addEventListener("ended", next);
    return () => video.removeEventListener("ended", next);
  }, []);
  
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

  return (
    <section className="hero">
      <video id="bg-video" ref={videoRef} autoPlay muted playsInline />
      <div className="overlay"></div>
      <div className="hero-content">
      <h1 className="animated-h1">
  SOHAL ENGG. WORKS <sup className="tm">™</sup>
</h1>

        <Typewriter textArray={['Welcome to our site']} />
        <p className="animated-p">
        Deals in chain conveyor,Belt conveyor, Tractor loader, Inclined
            conveyor, Elevators MFRS, Tractor Hydra, Sky lifts, Goods lifts,
            Shredders, Mixture machines, Ploe Dryers, Dyeing poupose machines &
            Fabrication works.
        </p>
       
      </div>
    </section>
  );
}
