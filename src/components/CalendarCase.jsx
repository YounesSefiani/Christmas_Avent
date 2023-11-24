import React from 'react';

const CalendarCase = ({title, poster, background, director, casting, synopsis, genre, streaming, duration, release_date, trailer }) => {
  return (
    <div className="case-calendrier">
      <div className="background">
        <img src={background} alt={`Background de ${title}`}/>
      </div>
      <div className="poster">
        <img src={poster} alt={`Affiche de ${title}`} />
      </div>
      <h2>{title}</h2>
      <p>{genre} / {release_date} / {duration}</p>
      <p>Réalisé par {director}</p>
      <p>Avec {casting}</p>
      <p>{synopsis}</p>
      <p> Disponible sur {streaming}.</p>
      <iframe width="460" height="315" src={trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  );
};

export default CalendarCase;

