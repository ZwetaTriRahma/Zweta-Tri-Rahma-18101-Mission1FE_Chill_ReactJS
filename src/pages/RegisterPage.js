
import React, { useState } from 'react';

function RegisterPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // validasi Cek apakah field kosong
    if (!username || !password || !confirmPassword) {
      alert('Semua field harus diisi!');
      return;
    }

    // validasi Username minimal 3 karakter
    if (username.length < 3) {
      alert('Username minimal 3 karakter!');
      return;
    }

    // validasi Password minimal 6 karakter
    if (password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }

    // validasi password dan Confirm Password harus sama
    if (password !== confirmPassword) {
      alert('Password dan Confirm Password tidak sama!');
      return;
    }

    // Kalau lolos semua validasi
    alert(`Akun berhasil dibuat! Silakan login dengan username: ${username}`);
    onNavigate('login');
  };

  const handleGoogleRegister = () => {
    alert('Fitur Sign in with Google membutuhkan backend server. Coming Soon! 🚀');
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        
        {/* Bagian Kiri: Gambar */}
        <div className="auth-visual">
          <img src="/assets/bg-cinema.png" alt="Cinema" />
        </div>
        
        {/* Bagian Kanan: Form */}
        <div className="auth-form">
          <img src="/assets/logo.png" alt="CHILL Logo" className="logo" />
          
          <h2>Welcome!</h2>
          <p className="subtitle">Let's Join Us</p>
          
          <label>Username</label>
          <input 
            type="text" 
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          
          <label>Password</label>
          <div className="input-group">
            <input 
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span 
              className="eye" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁"}
            </span>
          </div>
          
          <label>Confirm Password</label>
          <div className="input-group">
            <input 
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
            />
            <span 
              className="eye" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "👁️" : "👁"}
            </span>
          </div>
          
          <p className="login-text">
            Already have an account? 
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); }}> Login</a>
          </p>
          
          <button className="btn" onClick={handleRegister}>
            Sign In
          </button>
          
          <p className="divider">Or</p>
          
          <button className="btn-google" onClick={handleGoogleRegister}>
            <img src="/assets/google-icon.png" alt="Google" />
            Sign in with Google
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default RegisterPage;