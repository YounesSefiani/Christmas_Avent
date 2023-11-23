import React from 'react';

const CalendarCase = ({ day, title, poster, director, casting, synopsis, genre, streaming, duration, release_date, }) => {
  return (
    <div className="case-calendrier">
      <h2>{`Day ${day} ${title}`}</h2>
      <img src={poster} alt={`Affiche de ${title}`} />
      <p>Réalisé par {director}</p>
      <p>Avec {casting}</p>
      <p>{synopsis}</p>
      <p>{genre} / {release_date} / {duration}</p>
      <p> Disponible sur {streaming}.</p>
    </div>
  );
};

export default CalendarCase;

