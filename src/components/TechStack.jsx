import React, { useState, useRef, useEffect } from 'react';

const skills = [
  {
    title: 'AI Automation',
    icon: '🤖',
    desc: 'Intelligent agents, LLM integrations, and custom workflow automation.',
    color: '#3b82f6', // blue
  },
  {
    title: 'Mobile & Web Apps',
    icon: '📱',
    desc: 'High-performance cross-platform development for iOS, Android, and Web.',
    color: '#10b981', // emerald
  },
  {
    title: 'Interactive 3D',
    icon: '🧊',
    desc: 'Immersive 3D environments, virtual spaces, and spatial experiences.',
    color: '#8b5cf6', // purple
  },
  {
    title: 'Python',
    icon: '🐍',
    desc: 'Backend systems, data pipelines, AI models, and automation scripts.',
    color: '#f59e0b', // amber
  },
  {
    title: 'Flutter',
    icon: '💙',
    desc: 'Sleek, native UI compilation for mobile, desktop, and web from a single codebase.',
    color: '#06b6d4', // cyan
  },
  {
    title: 'JavaScript',
    icon: '⚡',
    desc: 'Full-stack applications, interactive UI logic, and modern web frameworks.',
    color: '#eab308', // yellow
  },
  {
    title: 'Web3',
    icon: '🔗',
    desc: 'Decentralized architectures, smart contracts, and blockchain integration.',
    color: '#ec4899', // pink
  },
  {
    title: 'Three.js',
    icon: '🎮',
    desc: 'WebGL hardware-accelerated 3D graphics rendering directly in the browser.',
    color: '#f43f5e', // rose
  },
];

// Interactive Magnetic & 3D Tilt Card Component
function SkillCard({ skill }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Spotlight coords relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });

    // Tilt calculations
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (centerY - y) / 10; // max 10 degrees tilt
    const tiltY = (x - centerX) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '24px',
        padding: '32px',
        overflow: 'hidden',
        transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s, box-shadow 0.3s',
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.03)` 
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        boxShadow: isHovered 
          ? `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 30px -10px ${skill.color}33`
          : 'none',
        borderColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.08)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
        textAlign: 'left',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Dynamic Cursor Spotlight Background */}
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${skill.color}15, transparent 80%)`,
            zIndex: 0,
          }}
        />
      )}

      {/* Card Header (Icon & Glow) */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.04)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '28px',
        transition: 'background 0.3s, transform 0.3s',
        transform: isHovered ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
        boxShadow: isHovered ? `0 8px 20px -6px ${skill.color}55` : 'none',
      }}>
        {skill.icon}
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: '8px' }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: '#fff',
          margin: '0 0 8px 0',
          letterSpacing: '-0.01em',
          transition: 'color 0.3s',
        }}>
          {skill.title}
        </h3>
        <p style={{
          fontSize: '0.9rem',
          color: 'rgba(255, 255, 255, 0.55)',
          lineHeight: '1.5',
          margin: 0,
          transition: 'color 0.3s',
        }}>
          {skill.desc}
        </p>
      </div>

      {/* Bottom accent glow strip */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />
    </div>
  );
}

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      style={{
        position: 'relative',
        background: '#030303',
        padding: '120px 40px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Background grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Background abstract ambient glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        borderRadius: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        borderRadius: '500px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Subtle Tagline */}
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#6366f1',
          display: 'block',
          marginBottom: '16px',
        }}>
          Capabilities & Toolkit
        </span>

        {/* Section Title */}
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#fff',
          margin: '0 0 24px 0',
        }}>
          Core Tech Stack
        </h2>

        {/* High-Fidelity Interactive Description Paragraph */}
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: 'rgba(255, 255, 255, 0.6)',
          maxWidth: '850px',
          margin: '0 auto 80px auto',
          lineHeight: '1.7',
          fontWeight: 400,
        }}>
          Engineering immersive digital solutions by bridging intelligence with high-fidelity design. Specializing in{' '}
          <span style={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>AI Automation</span>, native{' '}
          <span style={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Mobile & Web Applications</span>, and rendering{' '}
          <span style={{ color: '#fff', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>Interactive 3D Environments</span>.
        </p>

        {/* Interactive 3D Card Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px',
          width: '100%',
        }}>
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
              }}
            >
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
