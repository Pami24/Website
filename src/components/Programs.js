import React from 'react';
import './Programs.css'; // Import the CSS file
import PAMIImage from './PAMI.png'; // Import the image

function ProgramsPage() {
  return (
    <div id="programs" className="section">
      <div className="about-content">
          <h2>Major Mental Disorders Present</h2>
        </div>
      <div className="container">
        <div className="programs-content">
          <div className="image-container">
            <img src={PAMIImage} alt="PAMI Image" />
          </div>
          
          <div className="text-container">
            
            <ul>
              <li>Depression</li>
              <li>Bipolar Disorder</li>
              <li>Schizoaffective Disorder</li>
              <li>General Anxiety Disorder</li>
              <li>Schizophrenia Disorder</li>
              <li>Panic Disorder</li>
              <li>Post Traumatic-Stress Disorder</li>
              <li>Suicidal thinking and actions</li>
              <li>Dual Diagnosis - cooccurring mental illness and substance abuse</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsPage;
