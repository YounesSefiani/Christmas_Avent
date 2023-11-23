import React from 'react';
import MovieData from './MovieData';

const Movies = ({ title, poster, background, trailer, synopsis, director, casting, genre, release_date, streaming, duration, origin }) => {
  return (
    <div className="movies-details">
      <h2>{title}</h2>
      <img src={poster} alt={`Affiche de ${title}`} />
      <p>{synopsis}</p>
      <img src={background}/>
      {/* Autres détails du film */}
    </div>
  );
};

export default Movies;

