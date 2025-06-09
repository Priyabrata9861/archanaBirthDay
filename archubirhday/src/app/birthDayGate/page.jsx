'use client';
import React from 'react';
import './BirthdayGate.css';
import  { useRef, useEffect } from 'react';

function BirthdayGate() {
    const videoRef = useRef(null);

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
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // When volume changes and video is paused, play it again
    const handleVolumeChange = () => {
      if (video.muted === false && video.paused) {
        video.play().catch(() => {
          // catch and ignore play errors
        });
      }
    };

    video.addEventListener('volumechange', handleVolumeChange);
    return () => {
      video.removeEventListener('volumechange', handleVolumeChange);
    };
  }, []);
  return (
     <div className="birthday-gate-wrapper">
      <h1 className="birthday-heading">🎉 Happy Birthday Archana 🎉</h1>
      <div className="sparkle-container left-sparkles"></div>
      <div className="video-card">
        <video
          ref={videoRef}
          className="birthday-video"
          autoPlay
          controls
          muted
          playsInline
        >
          <source src="/archanaBirthDay/birthDay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="sparkle-container right-sparkles"></div>
      <div className="balloon-background">{balloons}</div>
    </div>
  );
}

export default BirthdayGate;
