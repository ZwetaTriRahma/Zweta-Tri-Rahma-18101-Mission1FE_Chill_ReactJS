import React from 'react';
import MovieCard from './MovieCard';

function MovieSection({ title, movies }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      
      <div className="slider-wrapper">
        <button className="slider-arrow left">‹</button>
        <button className="slider-arrow right">›</button>
        
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              image={movie.image}
              title={movie.title}
              genre={movie.genre}
              rating={movie.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSection;