
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
        <a>Series</a>
        <a>Film</a>
        <a>Daftar Saya</a>
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
        
        {/* Logout Button */}
        {showDropdown && (
          <div className="profile-dropdown">
            <a onClick={() => alert('Fitur Profile Coming Soon!')}>
              👤 Profile
            </a>
            <a onClick={() => alert('Fitur Settings Coming Soon!')}>
              ⚙️ Settings
            </a>
            <a className="logout" onClick={handleLogout}>
              🚪 Logout
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
