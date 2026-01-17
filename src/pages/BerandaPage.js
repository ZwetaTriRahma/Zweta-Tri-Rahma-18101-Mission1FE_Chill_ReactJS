import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieSection from '../components/MovieSection';
import Footer from '../components/Footer';

function BerandaPage({ onNavigate }) {
  // Data film - Melanjutkan Tonton
  const continueWatching = [
    {
      image: "/assets/movie2.jpg",
      title: "Money Heist",
      genre: "TV Series | 2017–2021",
      rating: "4.8"
    },
    {
      image: "/assets/movie3.jpg",
      title: "Deadpool Wolverine",
      genre: "2024 | Action",
      rating: "4.7"
    },
    {
      image: "/assets/movie4.webp",
      title: "Oblivion",
      genre: "2013 | Sci-Fi",
      rating: "4.5"
    },
    {
      image: "/assets/movie5.jpg",
      title: "Interstellar",
      genre: "2013 | Adventure",
      rating: "4.9"
    }
  ];

  // Data film - Top Rating
  const topRating = [
    { image: "/assets/top1.png", title: "Superman", rating: "4.8" },
    { image: "/assets/top2.jpg", title: "Weapons", rating: "4.9" },
    { image: "/assets/top3.jpg", title: "Scarlet", rating: "4.6" },
    { image: "/assets/top4.jpg", title: "Minecraft", rating: "4.7" }
  ];

  // Data film - Trending
  const trending = [
    { image: "/assets/trending1.avif", title: "F1 The Movie", rating: "4.8" },
    { image: "/assets/trending2.jpg", title: "The Fantastic Four", rating: "4.7" },
    { image: "/assets/trending3.jpeg", title: "Mission Imposible", rating: "4.6" },
    { image: "/assets/trending4.webp", title: "Petaka Gunung", rating: "4.7" }
  ];

  // Data film - Rilis Baru
  const newRelease = [
    { image: "/assets/new1.jpg", title: "The Housemaid", rating: "4.7" },
    { image: "/assets/new2.jpeg", title: "Agak Laen 2", rating: "4.8" },
    { image: "/assets/new3.jpg", title: "Five Nights", rating: "4.7" },
    { image: "/assets/new4.jpg", title: "Anaconda", rating: "4.6" }
  ];

  return (
    <div>
      {/* Komponen Navbar */}
      <Navbar onNavigate={onNavigate} />
      
      {/* Komponen Hero Banner */}
      <Hero />
      
      {/* Komponen MovieSection - REUSABLE! */}
      <MovieSection 
        title="Melanjutkan Tonton Film" 
        movies={continueWatching} 
      />
      
      <MovieSection 
        title="Top Rating Film & Series Hari ini" 
        movies={topRating} 
      />
      
      <MovieSection 
        title="Film Trending" 
        movies={trending} 
      />
      
      <MovieSection 
        title="Rilis Baru" 
        movies={newRelease} 
      />
      
      {/* Komponen Footer */}
      <Footer />
    </div>
  );
}

export default BerandaPage;