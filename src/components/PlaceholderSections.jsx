import React, { useState, useEffect, useRef } from 'react';

export default function PlaceholderSections() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  // Only load the About Spline iframe when the section is close to viewport
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
    <>
      {/* About Section - Spline Embed (lazy loaded) */}
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

      {/* Pricing Section */}
      <section
        id="pricing"
        style={{
          minHeight: '100vh',
          background: '#0a0a0a',
          color: '#fff',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Pricing
          </h2>
          <div style={{ height: '4px', width: '64px', background: '#6366f1', borderRadius: '999px', margin: '0 auto 48px' }} />
          <div style={{
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            padding: '60px 48px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <p style={{ fontSize: '1.25rem', color: '#d4d4d4', fontWeight: 600, margin: '0 0 12px' }}>Plans & Packages</p>
            <p style={{ color: '#737373', margin: 0 }}>Pricing plans and packages coming soon.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        style={{
          minHeight: '100vh',
          background: '#000',
          color: '#fff',
          padding: '80px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Contact
          </h2>
          <div style={{ height: '4px', width: '64px', background: '#ec4899', borderRadius: '999px', margin: '0 auto 48px' }} />
          <div style={{
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '20px',
            padding: '60px 48px',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <p style={{ fontSize: '1.25rem', color: '#d4d4d4', fontWeight: 600, margin: '0 0 12px' }}>Get In Touch</p>
            <p style={{ color: '#737373', margin: 0 }}>Interactive contact form and links coming soon.</p>
          </div>
        </div>
      </section>
    </>
  );
}
