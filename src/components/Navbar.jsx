import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50" style={{ background: 'rgba(0,0,0,0.85)' }}>
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-end items-center">

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden py-6 px-8 flex flex-col gap-5" style={{ background: 'rgba(0,0,0,0.95)' }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm font-medium tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
