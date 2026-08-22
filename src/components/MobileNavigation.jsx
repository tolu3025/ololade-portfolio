import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'OVERVIEW / HOME', num: '01' },
    { to: '/about', label: 'ABOUT & PROFILE', num: '02' },
    { to: '/work', label: 'SELECTED WORK', num: '03' },
    { to: '/skills', label: 'SKILLS & TOOLS', num: '04' },
    { to: '/contact', label: 'CONTACT & CONSULT', num: '05' }
  ];

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="mobile-nav-bar" aria-label="Mobile Header">
        <Link
          to="/"
          className="mobile-monogram"
          onClick={handleClose}
          aria-label="Ololade Berachiah Joseph Home"
        >
          OJ
        </Link>
        <button
          type="button"
          className={`mobile-menu-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer-menu"
          aria-label={isOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {isOpen ? 'CLOSE ✕' : 'MENU ☰'}
        </button>
      </header>

      {isOpen && (
        <nav
          id="mobile-drawer-menu"
          className="mobile-drawer"
          aria-label="Mobile Navigation Menu"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `mobile-drawer-link ${isActive ? 'active' : ''}`
              }
              onClick={handleClose}
            >
              <span>{item.label}</span>
              <span className="mobile-drawer-num">{item.num}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
}
