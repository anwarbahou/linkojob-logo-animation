import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Example5.css';

const Example5: React.FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current) {
      // Create a timeline for the logo animation
      const tl = gsap.timeline({ repeat: -1 });

      // Get the path element
      const path = logoRef.current.querySelector('path');
      
      if (path) {
        // Reset the path
        gsap.set(path, {
          fill: 'none',
          stroke: '#3498db',
          strokeWidth: 24,
          strokeDasharray: '2000',
          strokeDashoffset: '2000'
        });

        // Draw the path
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut'
          }
        )
        // Fill with color
        .to(
          path,
          {
            fill: '#3498db',
            duration: 0.3,
            ease: 'power1.inOut'
          }
        )
        // Simple scale up
        .to(
          logoRef.current,
          {
            scale: 1.1,
            duration: 0.8,
            ease: 'power2.inOut'
          }
        )
        // Hold for a moment
        .to(
          {},
          {
            duration: 0.5
          }
        )
        // Fade out the fill
        .to(
          path,
          {
            fill: 'none',
            duration: 0.3,
            ease: 'power1.inOut'
          }
        )
        // Erase the stroke
        .to(
          path,
          {
            strokeDashoffset: '2000',
            duration: 1.5,
            ease: 'power2.inOut'
          }
        );
      }
    }
  }, []);

  return (
    <div className="example5-container">
      <div className="animation-title">Simple Animation</div>
      <div className="animation-info">
        <p>Animation Type: Simple</p>
        <p>Technique: Draw & Scale</p>
        <p>Library: GSAP Timeline</p>
      </div>
      <div className="animation-wrapper">
        <div ref={logoRef} className="example5-logo">
          <svg width="500" height="832" viewBox="0 0 500 832" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector" d="M161.859 12L303.642 153.834H165.788H153.788V165.834V485.502H71.1395C60.6403 485.502 45.7822 477.665 32.7059 464.244C19.6554 450.848 12 435.598 12 425.032V12H161.859ZM12.0131 819.755V714.928C12.0131 714.936 12.0131 714.935 12.0136 714.927C12.0166 714.881 12.0367 714.57 12.17 713.945C12.3198 713.243 12.5701 712.339 12.9463 711.238C13.7035 709.023 14.8295 706.423 16.2007 703.701C19.0295 698.086 22.295 693.142 24.2083 690.943C38.4061 674.651 53.1848 674.7 76.1712 675.393L76.3777 675.399C83.3802 675.61 91.1768 675.845 99.2991 675.383C227.72 668.064 334.715 561.813 343.521 433.689L343.549 433.278V432.866V196.824L487.985 334.43L488 435.258C479.115 620.231 341.266 778.765 159.686 812.846C119.093 820.458 78.3866 820.193 35.9662 819.878C28.0336 819.819 20.0414 819.76 12.0131 819.755ZM487.958 154.398H345.169V12H487.937L487.958 154.398Z" stroke="#264D96" strokeWidth="24"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Example5; 