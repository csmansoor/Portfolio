import React from 'react';

const skills = [
  { label: 'AI Automation', icon: '🤖' },
  { label: 'iOS Development', icon: '🍎' },
  { label: 'Android Development', icon: '🤖' },
  { label: 'Web Development', icon: '🌐' },
  { label: 'Interactive 3D', icon: '🧊' },
  { label: 'Immersive Environments', icon: '✨' },
  { label: 'Python', icon: '🐍' },
  { label: 'Flutter', icon: '💙' },
  { label: 'JavaScript', icon: '⚡' },
  { label: 'Web3', icon: '🔗' },
  { label: 'Three.js', icon: '🎮' },
];

// Duplicate for seamless infinite loop
const track = [...skills, ...skills, ...skills];

export default function TechBanner() {
  return (
    <div style={{
      width: '100%',
      background: '#000',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '28px 0',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Left fade */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0,
        width: '120px', zIndex: 2,
        background: 'linear-gradient(to right, #000 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />
      {/* Right fade */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0,
        width: '120px', zIndex: 2,
        background: 'linear-gradient(to left, #000 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        gap: '0',
        width: 'max-content',
        animation: 'marquee 35s linear infinite',
        willChange: 'transform',
      }}>
        {track.map((skill, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 32px',
            margin: '0 4px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            whiteSpace: 'nowrap',
            transition: 'border-color 0.3s',
            cursor: 'default',
          }}>
            <span style={{ fontSize: '18px' }}>{skill.icon}</span>
            <span style={{
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.65)',
              textTransform: 'uppercase',
              fontFamily: 'system-ui, sans-serif',
            }}>
              {skill.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
