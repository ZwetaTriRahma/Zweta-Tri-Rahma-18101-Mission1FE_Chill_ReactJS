import React from 'react';

function MovieCard({ image, title, genre, rating }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      
      <div className="movie-info">
        <h3>{title}</h3>
        {genre && <p className="genre">{genre}</p>}
        <span className="rating">⭐ {rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;