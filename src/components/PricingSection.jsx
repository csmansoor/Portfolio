import React, { useState } from 'react';

export default function PricingSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        position: 'relative',
        background: '#080808',
        padding: '120px 40px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        borderRadius: '500px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.04) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '800px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}>
        {/* Title Tag */}
        <span style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          color: '#6366f1',
          display: 'block',
          marginBottom: '16px',
        }}>
          Rates & Engagement
        </span>

        {/* Header */}
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          color: '#fff',
          margin: '0 0 20px 0',
        }}>
          Pricing
        </h2>

        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.5)',
          maxWidth: '540px',
          margin: '0 auto 60px auto',
          lineHeight: '1.6',
        }}>
          Clear, flexible billing structure tailored to your custom requirements and project scope.
        </p>

        {/* Single Premium Pricing Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.02)',
            border: isHovered 
              ? '1px solid rgba(99, 102, 241, 0.5)' 
              : '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '32px',
            padding: '60px 40px',
            textAlign: 'center',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s, border-color 0.3s',
            transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            boxShadow: isHovered 
              ? '0 30px 60px -20px rgba(0, 0, 0, 0.8), 0 0 50px -15px rgba(99, 102, 241, 0.25)'
              : 'none',
            backdropFilter: 'blur(12px)',
            maxWidth: '560px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}
        >
          {/* Card Label */}
          <span style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#6366f1',
            background: 'rgba(99, 102, 241, 0.1)',
            padding: '6px 16px',
            borderRadius: '100px',
          }}>
            Development Rate
          </span>

          {/* Pricing figures */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
              <span style={{
                fontSize: '4.5rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: '1',
              }}>
                $40
              </span>
              <span style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.4)',
                fontWeight: 500,
              }}>
                / hr
              </span>
            </div>
          </div>

          <p style={{
            fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.7)',
            lineHeight: '1.6',
            maxWidth: '420px',
            margin: 0,
          }}>
            Hourly consulting, feature building, system design, and dedicated production cycles.
          </p>

          {/* Divider */}
          <div style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.08)',
            margin: '8px 0',
          }} />

          {/* Notice Detail */}
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            borderRadius: '16px',
            padding: '16px 20px',
            textAlign: 'left',
          }}>
            <span style={{ fontSize: '20px' }}>💬</span>
            <p style={{
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.5)',
              lineHeight: '1.5',
              margin: 0,
            }}>
              <strong>Note:</strong> Detailed fixed-price project options, milestones, and scope estimates will be discussed and finalized upon direct interaction.
            </p>
          </div>

          {/* Button */}
          <a
            href="#contact"
            style={{
              width: '100%',
              padding: '18px 24px',
              borderRadius: '16px',
              border: 'none',
              background: '#fff',
              color: '#000',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: isHovered ? '0 12px 24px rgba(255, 255, 255, 0.15)' : 'none',
              marginTop: '8px',
              display: 'block',
              boxSizing: 'border-box',
            }}
          >
            Start a Project Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
