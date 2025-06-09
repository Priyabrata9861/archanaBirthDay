'use client';
import React from 'react';
import './BirthdayGate.css';

function BirthdayGate() {
  const balloons = Array.from({ length: 35 }, (_, i) => {
    const left = Math.random() * 100; 
    const duration = 8 + Math.random() * 7;
    const delay = Math.random() * 15; 
    const colorClass = `balloon-${(i % 5) + 1}`; 

    return (
      <div
        key={i}
        className={`balloon ${colorClass}`}
        style={{
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

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

      {/* Balloon background */}
      <div className="balloon-background">
        {balloons}
      </div>
    </div>
  );
}

export default BirthdayGate;
