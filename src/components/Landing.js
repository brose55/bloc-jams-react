import React from 'react';
import '../style/Landing.css';

const Landing = () => (
  <div className="landing">
    <div className="selling-points" id="choose">
      <div className="point">
        <span className="ion-music-note"></span>
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point" id="stream">
        <span className="ion-headphone"></span>
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point" id="mobile">
        <span className="ion-iphone"></span>
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </div>
  </div>
);

export default Landing;
