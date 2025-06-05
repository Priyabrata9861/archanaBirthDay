'use client';
import Link from "next/link";
import "./styles/WelcomePage.css";
import CutePanda from "./archanaBirthDay/panda.jpeg";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="welcome-bg">
      <div className="balloons">
        <div className="balloon red"></div>
        <div className="balloon blue"></div>
        <div className="balloon green"></div>
        <div className="balloon yellow"></div>
        <div className="balloon pink"></div>
      </div>
      <div className="bulb-strip">
        {Array.from({ length: 50 }).map((_, index) => (
          <div key={index} className="bulb" />
        ))}
      </div>
      <div className="welcome-card">
        <Image
          src={CutePanda}
          alt="Cute Panda"
          className="panda-image"
          width={186}
          height={271}
        />
        <h1 className="welcome-title">Welcome Dear Archana</h1>
        <p className="welcome-subtitle">
          Happiest Birthday to You! 💖 Wishing you a day filled with joy and love.
        </p>
        <Link href="/archanaBirthDay" className="welcome-link">
          Go to Your Birthday Surprise 🎁
        </Link>
      </div>
    </div>
  );
}
