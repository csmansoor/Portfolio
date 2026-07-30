import React, { useState } from 'react';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
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
      {/* Background details */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '300px',
        borderRadius: '500px',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 80%)',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        maxWidth: '1200px',
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: '80px',
        alignItems: 'center',
      }}>
        {/* Left Side Content */}
        <div style={{ textAlign: 'left' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#ec4899',
            display: 'block',
            marginBottom: '16px',
          }}>
            Get In Touch
          </span>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#fff',
            margin: '0 0 24px 0',
          }}>
            Let's work together.
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: '1.6',
            margin: '0 0 48px 0',
            maxWidth: '460px',
          }}>
            Have an idea for a project, application, AI agent, or custom 3D environment? Hit me up and let's bring it to life.
          </p>

          {/* Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '4px' }}>Email me directly</span>
              <a href="mailto:hello@example.com" style={{ fontSize: '1.25rem', color: '#fff', textDecoration: 'none', fontWeight: 500, transition: 'color 0.3s' }}>
                hello@example.com
              </a>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '4px' }}>Socials</span>
              <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'color 0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#fff'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div style={{
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '32px',
          padding: '48px',
          backdropFilter: 'blur(12px)',
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Your Name</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ec4899';
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Email Address</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ec4899';
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'left' }}>
              <label style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.6)' }}>Message</label>
              <textarea
                required
                rows="4"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  color: '#fff',
                  fontSize: '1rem',
                  outline: 'none',
                  resize: 'none',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#ec4899';
                  e.target.style.background = 'rgba(255,255,255,0.05)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                background: '#ec4899',
                color: '#fff',
                padding: '18px 24px',
                borderRadius: '14px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background 0.3s, transform 0.2s',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if(!isSubmitting) e.target.style.background = '#db2777'; }}
              onMouseLeave={(e) => { if(!isSubmitting) e.target.style.background = '#ec4899'; }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 500, marginTop: '8px' }}>
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
