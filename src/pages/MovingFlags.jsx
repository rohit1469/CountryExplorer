import React, { useState, useEffect, useRef } from "react";
import "./MovingFlags.css"; // We'll create this CSS file next

const MovingFlags = ({ flags }) => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const containerWidthRef = useRef(0);

  useEffect(() => {
    // Get container width once
    containerWidthRef.current = containerRef.current?.offsetWidth || 0;

    const animate = () => {
      setPosition((prev) => {
        const newPos = prev - 1;
        // Reset position when all flags have passed
        if (-newPos > flags.length * 120) {
          return containerWidthRef.current;
        }
        return newPos;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [flags.length]);

  return (
    <div className="flags-container" ref={containerRef}>
      <div
        className="flags-track"
        style={{ transform: `translateX(${position}px)` }}
      >
        {flags.map((flag, index) => (
          <div key={index} className="flag">
            <img src={flag} alt={`Flag ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingFlags;
