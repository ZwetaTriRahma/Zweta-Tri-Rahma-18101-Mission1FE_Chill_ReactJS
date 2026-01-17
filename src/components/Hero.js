

import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <img src="/assets/movie1.jpg" alt="Hero Banner" />
      
      <div className="hero-text">
        <h1>Avatar Fire and Ash</h1>
        <p>
          "A fierce new conflict ignites between ancient tribes and invading forces, 
          as forest guardians fight to protect their world from ruin."
        </p>
        
        <div className="hero-buttons">
          <button className="btn-start">Mulai</button>
          <button className="btn-more">Selengkapnya</button>
          <button className="btn-sound">🔊</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;