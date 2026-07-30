import React, { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  // Only load the About Spline iframe when the section is close to viewport to optimize rendering performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        background: '#000',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {aboutVisible && (
        <iframe
          src="https://my.spline.design/reactiveorb-fpEczD2oPAweta5Dip5jY6XI/"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
          title="About - Spline 3D Scene"
          allow="autoplay; fullscreen"
          sandbox="allow-scripts allow-same-origin"
        />
      )}
      {/* Block Spline watermark */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '180px',
          height: '70px',
          zIndex: 10,
          pointerEvents: 'all',
          cursor: 'default',
          background: '#000',
        }}
      />
    </section>
  );
}
