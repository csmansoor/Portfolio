/* ============================================================
   MIAN MANSOOR PORTFOLIO — JAVASCRIPT
   ============================================================ */

'use strict';

/* ── Navbar scroll effect ── */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Hamburger / Mobile Menu ── */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const navCta = document.querySelector('.nav-cta');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    links.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (navCta) navCta.style.display = open ? 'none' : '';
  });

  // Close on link click
  links.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (navCta) navCta.style.display = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
      btn.classList.remove('open');
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      if (navCta) navCta.style.display = '';
    }
  });
})();

/* ── Intersection Observer: Scroll Reveal ── */
(function initReveal() {
  const selectors = '.reveal-up, .reveal-left, .reveal-right, .service-reveal';
  const els = document.querySelectorAll(selectors);
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -60px 0px'
  });

  els.forEach(el => observer.observe(el));
})();

/* ── Animated Counter (hero stats) ── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

/* ── Expertise Bars Animation ── */
(function initExpertiseBars() {
  const bars = document.querySelectorAll('.expertise-fill');
  if (!bars.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.getAttribute('data-width');
        setTimeout(() => {
          entry.target.style.width = target + '%';
        }, 200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  bars.forEach(bar => observer.observe(bar));
})();

/* ── Particle Canvas (Hero) ── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  const colors = [
    'rgba(64, 129, 117, 0.5)',
    'rgba(181, 185, 240, 0.4)',
    'rgba(90, 170, 151, 0.35)',
    'rgba(46, 69, 64, 0.6)',
  ];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      p.pulse += p.pulseSpeed;

      // Wrap around edges
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      const currentAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentAlpha})`);
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          const lineAlpha = (1 - dist / 100) * 0.08;
          ctx.strokeStyle = `rgba(64,129,117,${lineAlpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    });

    animId = requestAnimationFrame(draw);
  }

  init();
  draw();

  window.addEventListener('resize', () => {
    resize();
    particles = Array.from({ length: 80 }, createParticle);
  });

  // Pause when not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(animId);
    else draw();
  });
})();

/* ── Liquid ripple effect on buttons ── */
(function initRipple() {
  document.querySelectorAll('.btn-liquid').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 4px; height: 4px;
        left: ${x}px; top: ${y}px;
        transform: translate(-50%, -50%) scale(0);
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(64,129,117,0.15) 50%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        animation: rippleAnim 0.7s ease-out forwards;
        z-index: 10;
      `;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // Inject ripple keyframe
  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: translate(-50%, -50%) scale(80); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
})();

/* ── FAQ Accordion ── */
(function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const targetId = this.getAttribute('aria-controls');
      const answer = document.getElementById(targetId);

      // Close all
      document.querySelectorAll('.faq-question').forEach(q => {
        q.setAttribute('aria-expanded', 'false');
        const aId = q.getAttribute('aria-controls');
        const a = document.getElementById(aId);
        if (a) a.classList.remove('open');
      });

      // Toggle current
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.classList.add('open');
      }
    });
  });
})();

/* ── Pricing Calculator ── */
(function initCalculator() {
  const hoursInput = document.getElementById('hoursInput');
  const hoursRange = document.getElementById('hoursRange');
  const calcHours = document.getElementById('calcHours');
  const calcTotal = document.getElementById('calcTotal');
  if (!hoursInput || !hoursRange) return;

  const RATE = 34.97;

  function update(hours) {
    const h = Math.max(1, parseInt(hours) || 1);
    const total = (h * RATE).toFixed(2);
    const formatted = parseFloat(total).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    calcHours.textContent = h;
    calcTotal.textContent = formatted;
    hoursInput.value = h;
    hoursRange.value = Math.min(h, 500);
  }

  hoursInput.addEventListener('input', () => update(hoursInput.value));
  hoursRange.addEventListener('input', () => update(hoursRange.value));
  update(40);
})();

/* ── Projects Filter ── */
(function initFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', function () {
      const filter = this.getAttribute('data-filter');

      // Update active button
      buttons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        const show = filter === 'all' || category === filter;

        if (show) {
          card.style.display = '';
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
          setTimeout(() => {
            if (card.classList.contains('hidden')) card.style.display = 'none';
          }, 350);
        }
      });
    });
  });
})();

/* ── Project Preview Scroll Hints ── */
(function initProjectPreviews() {
  const previews = document.querySelectorAll('.project-preview');
  if (!previews.length) return;

  function updateHints() {
    previews.forEach(preview => {
      const hint = preview.querySelector('.project-preview-hint');
      if (!hint) return;
      const needsScroll = preview.scrollHeight > preview.clientHeight + 4;
      hint.classList.toggle('is-hidden', !needsScroll);
    });
  }

  previews.forEach(preview => {
    const img = preview.querySelector('img');
    if (img && !img.complete) {
      img.addEventListener('load', updateHints);
    }
  });

  updateHints();
  window.addEventListener('resize', updateHints);
})();

/* ── Contact Form Config ── */
const CONTACT_EMAIL = 'mianmansoor2018@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const SUBJECT_LABELS = {
  'custom-app': 'Custom App Development',
  'website': 'Website Development',
  'ecommerce': 'E-Commerce Platform',
  'ai-automation': 'AI Automation',
  'quote': 'Request a Quote',
  'other': 'Other'
};

/* ── Contact Form Validation & Submission ── */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const formFields = document.getElementById('formFields');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');

  function showError(fieldId, message) {
    const el = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el) el.textContent = message;
    if (input) input.classList.add('error');
  }

  function clearError(fieldId) {
    const el = document.getElementById(fieldId + 'Error');
    const input = document.getElementById(fieldId);
    if (el) el.textContent = '';
    if (input) input.classList.remove('error');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Live validation
  ['firstName', 'lastName', 'email', 'message'].forEach(id => {
    const input = document.getElementById(id);
    if (!input) return;
    input.addEventListener('input', () => clearError(id));
  });

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    let valid = true;

    // Clear errors
    ['firstName', 'lastName', 'email', 'subject', 'message', 'terms'].forEach(id => clearError(id));

    const firstName = document.getElementById('firstName')?.value.trim();
    const lastName  = document.getElementById('lastName')?.value.trim();
    const email     = document.getElementById('email')?.value.trim();
    const subject   = document.getElementById('subject')?.value;
    const message   = document.getElementById('message')?.value.trim();
    const agreed    = document.getElementById('agreeTerms')?.checked;

    if (!firstName) { showError('firstName', 'Please enter your first name'); valid = false; }
    if (!lastName)  { showError('lastName', 'Please enter your last name');  valid = false; }
    if (!email || !validateEmail(email)) { showError('email', 'Please enter a valid email address'); valid = false; }
    if (!subject)   { showError('subject', 'Please select a subject'); valid = false; }
    if (!message || message.length < 20) { showError('message', 'Please describe your project (at least 20 characters)'); valid = false; }
    if (!agreed)    { showError('terms', 'Please acknowledge the pricing terms'); valid = false; }

    if (!valid) return;

    submitBtn.disabled = true;
    submitBtn.querySelector('.btn-text').textContent = 'Sending…';

    const budget = document.getElementById('budget')?.value;
    const budgetLabels = {
      'under-500': 'Under $500',
      '500-1500': '$500 – $1,500',
      '1500-3000': '$1,500 – $3,000',
      '3000-7000': '$3,000 – $7,000',
      '7000+': '$7,000+',
      'discuss': "I'd like to discuss"
    };
    const subjectLabel = SUBJECT_LABELS[subject] || subject;

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          subject: subjectLabel,
          message,
          budget: budget ? (budgetLabels[budget] || budget) : 'Not specified',
          _subject: `Portfolio Inquiry: ${subjectLabel}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Failed to send message');

      formFields.style.display = 'none';
      formSuccess.style.display = 'block';
    } catch (err) {
      showError('message', 'Could not send your message. Please try again or email me directly at ' + CONTACT_EMAIL);
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
    }
  });
})();

/* ── Smooth hover tilt on cards ── */
(function initTilt() {
  const cards = document.querySelectorAll('.trust-card, .estimate-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotX = y * -6;
      const rotY = x * 6;
      card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();

/* ── Active nav link based on current page ── */
(function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Cursor trail effect (subtle, desktop only) ── */
(function initCursorTrail() {
  if (window.innerWidth < 768) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const trail = [];
  const TRAIL_LENGTH = 8;

  for (let i = 0; i < TRAIL_LENGTH; i++) {
    const dot = document.createElement('div');
    dot.style.cssText = `
      position: fixed;
      width: ${6 - i * 0.5}px;
      height: ${6 - i * 0.5}px;
      border-radius: 50%;
      background: rgba(64, 129, 117, ${0.4 - i * 0.04});
      pointer-events: none;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s;
      will-change: transform;
    `;
    document.body.appendChild(dot);
    trail.push({ el: dot, x: 0, y: 0 });
  }

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateTrail() {
    let x = mouseX, y = mouseY;
    trail.forEach((dot, i) => {
      dot.x += (x - dot.x) * (0.35 - i * 0.025);
      dot.y += (y - dot.y) * (0.35 - i * 0.025);
      dot.el.style.left = dot.x + 'px';
      dot.el.style.top = dot.y + 'px';
      x = dot.x;
      y = dot.y;
    });
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Hide trail when mouse leaves
  document.addEventListener('mouseleave', () => trail.forEach(d => { d.el.style.opacity = '0'; }));
  document.addEventListener('mouseenter', () => trail.forEach(d => { d.el.style.opacity = '1'; }));
})();

/* ── Page load animation ── */
(function initPageLoad() {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';

  window.addEventListener('load', () => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
})();
