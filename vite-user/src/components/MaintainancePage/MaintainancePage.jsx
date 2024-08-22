import React from 'react';
import './MaintainancePage.css'


const MaintainancePage = () => {
  return (
    <div className="maintenance-container">
      <h1>🚧 Site Under Maintenance 🚧</h1>
      <p>We are currently performing scheduled maintenance.</p>
      <blockquote>
        <p>"The best way to predict the future is to create it."</p>
        <footer>— Peter Drucker</footer>
      </blockquote>
      <p className="team-signature">- Team Piyush</p>
    </div>
  );
};

export default MaintainancePage;
