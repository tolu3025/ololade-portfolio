import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="content-container">
        <div className="footer-content">
          <div className="footer-left">
            <Link to="/" className="footer-brand-link">
              © 2026 Ololade Berachiah Joseph
            </Link>
          </div>

          <div className="footer-center">
            Research &amp; Data Consultant
          </div>

          <div className="footer-right">
            <span className="footer-location">Nigeria / Remote</span>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={handleScrollTop}
              aria-label="Scroll back to top of the page"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
