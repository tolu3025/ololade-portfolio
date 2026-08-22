import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function SpineNavigation() {
  const navItems = [
    { to: '/about', label: 'ABOUT' },
    { to: '/work', label: 'WORK' },
    { to: '/skills', label: 'SKILLS' },
    { to: '/contact', label: 'CONTACT' }
  ];

  return (
    <aside className="spine-nav" aria-label="Spine Navigation">
      <Link to="/" className="spine-monogram" aria-label="Ololade Berachiah Joseph - Return to Overview">
        OJ
      </Link>

      <nav className="spine-links" aria-label="Site Navigation">
        {navItems.map((item) => (
          <div key={item.to} className="spine-link-item">
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `spine-link-btn ${isActive ? 'active' : ''}`
              }
              aria-label={`Navigate to ${item.label} page`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span className="spine-active-indicator" aria-hidden="true" />
                  )}
                </>
              )}
            </NavLink>
          </div>
        ))}
      </nav>

      <div className="spine-footer-mark" aria-hidden="true">
        ARCHIVE / 26
      </div>
    </aside>
  );
}
