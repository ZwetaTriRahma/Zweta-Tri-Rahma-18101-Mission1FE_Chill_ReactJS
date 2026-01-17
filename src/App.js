
// File UTAMA - Router untuk mengatur perpindahan halaman

import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BerandaPage from './pages/BerandaPage';

function App() {
  
  const [currentPage, setCurrentPage] = useState('login');

  // Fungsi untuk pindah halaman
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      
      
      {currentPage === 'login' && (
        <LoginPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'register' && (
        <RegisterPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'beranda' && (
        <BerandaPage onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;