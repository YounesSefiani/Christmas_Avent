import React from "react";
import "../assets/utils.css";

const CalendarCase = ({
  title,
  poster,
  background,
  director,
  casting,
  synopsis,
  genre,
  streaming,
  duration,
  release_date,
  trailer,
}) => {
  return (
    <div className="case-calendrier d-flex flex-column ">
      <div className="background">
        <img src={background} alt={`Background de ${title}`} />
      </div>
      <div className="poster d-flex flex-column p-20">
        <img src={poster} alt={`Affiche de ${title}`} />
        <div className="title">
          <h2 className="textAlignCenter my-20">{title}</h2>
          <p>
            {genre} / {release_date} / {duration}
          </p>
          <p>Réalisé par {director}</p>
          <p>Avec {casting}</p>
          <p className="my-20 ">{synopsis}</p>
          <p className="mb-20"> Disponible sur {streaming}.</p>
        </div>
        <div>
          <iframe
            width="460"
            height="315"
            src={trailer}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          >
            d
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendarCase;
