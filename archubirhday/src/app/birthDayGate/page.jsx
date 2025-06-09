'use client';
import React from 'react';
import './BirthdayGate.css';

function BirthdayGate() {
  return (
    <div className="birthday-gate-wrapper">
    <div className="balloon-background">
  {Array.from({ length: 40 }).map((_, i) => (
    <div className={`balloon balloon-${(i % 5) + 1}`} style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${8 + Math.random() * 4}s`,
    }} key={i}></div>
  ))}
</div>


      <h1 className="birthday-heading">🎉 Happy Birthday Archana 🎉</h1>

      <div className="sparkle-container left-sparkles"></div>

      <div className="video-card">
        <video className="birthday-video" autoPlay controls /* remove muted if you want audio */>
          <source src="/archanaBirthDay/birthDay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="sparkle-container right-sparkles"></div>
    </div>
  );
}

export default BirthdayGate;
