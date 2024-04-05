import React from 'react';
import palouseImage from './palouse.jpg'; // Import the image
import './Home.css'; // Import the CSS file

function Homepage() {
  return (
    <div id="home" className="section">
      <div className="container">
        <div className="palouse-image-container">
          {/* Use the imported image */}
          <img src={palouseImage} alt="Palouse Field" style={{ width: '100%', maxHeight: '500px' }} />
          <div className="palouse-image-text">
            <h1>Palouse Advocates on Mental Illness</h1>
            <h3>There is Hope in Healing</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
