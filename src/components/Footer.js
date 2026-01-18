

import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="CHILL Logo" />
          <p className="footer-copy">©2026 Chill All Rights Reserved.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Genre</h4>
            <a href="#">Drama</a>
            <a href="#">Komedi</a>
            <a href="#">Thriller</a>
            <a href="#">Anime</a>
          </div>
          
          <div className="link-group">
            <h4>Bantuan</h4>
            <a href="#">Kontak Kami</a>
            <a href="#">Syarat & Ketentuan</a>
            <a href="#">Privasi</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;