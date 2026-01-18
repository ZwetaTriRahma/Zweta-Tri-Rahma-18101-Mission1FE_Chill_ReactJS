

import React, { useState } from 'react';

function Navbar({ onNavigate }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setShowDropdown(false);
    onNavigate('login');
  };

  return (
    <div className="navbar">
      <img 
        className="logo-img" 
        src="/assets/logo.png" 
        alt="CHILL Logo" 
      />
      
      <div className="menu">
        <a href="#">Series</a>
        <a href="#">Film</a>
        <a href="#">Daftar Saya</a>
      </div>
      
      {/* Profile dengan Dropdown */}
      <div className="profile-wrapper">
        <img 
          className="avatar" 
          src="/assets/profil.jpg" 
          alt="Avatar"
          onClick={() => setShowDropdown(!showDropdown)}
        />
        <span className="dropdown-arrow">▼</span>
        
        {/* Dropdown Menu */}
        {showDropdown && (
          <div className="profile-dropdown">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Fitur Profile Coming Soon!'); }}>
              👤 Profile
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Fitur Settings Coming Soon!'); }}>
              ⚙️ Settings
            </a>
            <a href="#" className="logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
              🚪 Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;