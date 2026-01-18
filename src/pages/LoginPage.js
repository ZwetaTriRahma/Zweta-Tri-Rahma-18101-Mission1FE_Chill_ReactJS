
import React, { useState } from 'react';

function LoginPage({ onNavigate }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // validasi cek apakah field kosong
    if (!username || !password) {
      alert('Username dan Password tidak boleh kosong!');
      return;
    }

    // alidasi username minimal 3 karakter
    if (username.length < 3) {
      alert('Username minimal 3 karakter!');
      return;
    }

    // validasi password minimal 6 karakter
    if (password.length < 6) {
      alert('Password minimal 6 karakter!');
      return;
    }

    // kalau lolos semua validasi, pindah ke Beranda
    alert(`Selamat datang, ${username}!`);
    onNavigate('beranda');
  };

  const handleGoogleLogin = () => {
    alert('Fitur Login with Google membutuhkan backend server. Coming Soon! 🚀');
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
          
          <h2>Welcome back</h2>
          <p className="subtitle">Please login to your account</p>
          
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
              autoComplete="current-password"
            />
            <span 
              className="eye" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁"}
            </span>
          </div>
          
          <p className="login-text">
            Don't have an account? 
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('register'); }}> Sign In</a>
          </p>
          
          <button className="btn" onClick={handleLogin}>
            Login
          </button>
          
          <p className="divider">Or</p>
          
          <button className="btn-google" onClick={handleGoogleLogin}>
            <img src="/assets/google-icon.png" alt="Google" />
            Login with Google
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default LoginPage;