'use client';
import React from 'react';
import './BirthdayGate.css';

function BirthdayGate() {
  return (
    <div className="birthday-gate-wrapper">
      <h1 className="birthday-heading">🎉 Happy Birthday Archana 🎉</h1>

      <div className="sparkle-container left-sparkles"></div>

      <div className="video-card">
        <video className="birthday-video" autoPlay controls muted>
          <source src="/archanaBirthDay/birthDay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="sparkle-container right-sparkles"></div>
    </div>
  );
}

export default BirthdayGate;
