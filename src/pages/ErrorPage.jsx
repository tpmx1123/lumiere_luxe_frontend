import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateEyePosition = (eyeRef) => {
    if (!eyeRef || !eyeRef.current) return { x: 0, y: 0 };

    const rect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const deltaX = cursorPosition.x - eyeCenterX;
    const deltaY = cursorPosition.y - eyeCenterY;

    // Calculate distance from center
    const distanceFromCenter = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Calculate angle
    const angle = Math.atan2(deltaY, deltaX);
    
    // Maximum distance pupil can move (eye radius - pupil radius - padding)
    // Eye is 120px (radius 60px), pupil is 50px (radius 25px), safe zone: 60 - 25 - 5 = 30px
    const maxDistance = 30;
    
    // Normalize distance: scale down and limit to maxDistance for equal movement in all directions
    const normalizedDistance = Math.min(distanceFromCenter / 15, maxDistance);

    return {
      x: Math.cos(angle) * normalizedDistance,
      y: Math.sin(angle) * normalizedDistance,
    };
  };

  const eye1Position = calculateEyePosition(eye1Ref);
  const eye2Position = calculateEyePosition(eye2Ref);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="oops-eyes">
          <div className="eye-container">
            <div className="eyebrow eyebrow-left"></div>
            <div className="eye" ref={eye1Ref}>
              <div
                className="pupil"
                style={{
                  transform: `translate(calc(-50% + ${eye1Position.x}px), calc(-50% + ${eye1Position.y}px))`,
                }}
              />
            </div>
          </div>
          <div className="eye-container">
            <div className="eyebrow eyebrow-right"></div>
            <div className="eye" ref={eye2Ref}>
              <div
                className="pupil"
                style={{
                  transform: `translate(calc(-50% + ${eye2Position.x}px), calc(-50% + ${eye2Position.y}px))`,
                }}
              />
            </div>
          </div>
        </div>

        <h1 className="error-title">OOPS!</h1>
        <p className="error-message">404, Page Not Found.</p>
        <p className="error-description">
          The page you're looking for seems to have wandered off.
        </p>

        <button
          className="home-button"
          onClick={() => navigate('/')}
        >
          Please Take Me Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

