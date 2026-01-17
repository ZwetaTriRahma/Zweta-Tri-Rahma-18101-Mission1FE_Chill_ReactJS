
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-logo">
          <img src="/assets/logo.png" alt="CHILL Logo" />
          <p className="footer-copy">©2025 Chill All Rights Reserved.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Genre</h4>
            <a>Drama</a>
            <a>Komedi</a>
            <a>Thriller</a>
            <a>Anime</a>
          </div>
          
          <div className="link-group">
            <h4>Bantuan</h4>
            <a>Kontak Kami</a>
            <a>Syarat & Ketentuan</a>
            <a>Privasi</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
