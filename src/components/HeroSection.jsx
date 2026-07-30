import React from 'react';

export default function HeroSection() {
  return (
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      {/* Spline 3D Background - full screen */}
      <iframe
        src="https://my.spline.design/boxeshover-UpJt7Wqv4ktZk23oN16j7yGs/"
        className="absolute inset-0 w-full h-full border-none"
        title="Spline 3D Scene"
        allow="autoplay; fullscreen"
        sandbox="allow-scripts allow-same-origin"
      />

      <div
        className="absolute z-10"
        style={{ bottom: 0, right: 0, width: '180px', height: '70px', pointerEvents: 'all', cursor: 'default' }}
      />
    </section>
  );
}
