import React from "react";

const films = [
  {
    day: 1,
    title: "Le Grinch",
    poster:
      "https://www.themoviedb.org/t/p/original/cmbQRAux3YdOIIk9RIj1Hq3C05f.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/6spDvuB9rc2J6WME7ozjkvfR4rx.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=s8tc12mDbOY",
    synopsis:
      "Le Grinch est un croque-mitaine de poils verts qui arbore un sourire élastique jusqu'aux oreilles. Misanthrope exilé, il vit depuis 53 ans dans une grotte sur le mont Crumpit avec son chien Max. Il se nourrit de jus de laitue, d'huile de castor et de lait tourné, et a un cœur trois fois trop petit pour aimer qui que ce soit. Recueilli par deux charmantes vieilles dames, le Grinch aurait aimé avoir une enfance et une scolarité normales, avoir des copains et flirter avec la gentille Martha qui le couvait d'un œil tendre. Mais les petits Whos se comportèrent si cruellement avec lui qu'ils le contraignirent à l'exil.",
    director: "Ron Howard",
    casting: "Jim Carrey, Taylor Momsen, Jeffrey Tambor",
    genre: "Comédie",
    release_date: "6 décembre 2000",
    streaming: "Amazon Prime Vidéo",
    duration: "1h44",
    origin: "Etats-Unis",
  },
  {
    day: 2,
    title: "Santa & Cie",
    poster: "https://www.themoviedb.org/t/p/original/aH0eKsDpnTBUZbaLGtrtp36kOvq.jpg",
    background: "https://www.themoviedb.org/t/p/original/6spDvuB9rc2J6WME7ozjkvfR4rx.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=SmMeZfYQ1XU",
    synopsis: "Rien ne va plus à l'approche du réveillon : les 92 000 lutins chargés de fabriquer les cadeaux des enfants tombent tous malades en même temps ! C'est un coup dur pour Santa (Claus), plus connu sous le nom de Père Noël... il n'a pas le choix : il doit se rendre d'urgence sur Terre avec ses rennes pour chercher un remède. À son arrivée, il devra trouver des alliés pour l'aider à sauver la magie de Noël.",
    director: "Alain Chabat",
    casting: "Alain Chabat, Audrey Tautou, Pio Marmaï",
    genre: "Comédie",
    release_date: "06 décembre 2017",
    streaming: "Disney +",
    duration: "1h35",
    origin: "France",
  },
  {
    day: 3,
    title: "Le drôle de Noël de Scrooge",
    poster: "https://www.themoviedb.org/t/p/original/e5hgZBkL1kvY0fGPixZD0468VIA.jpg",
    background: "https://www.themoviedb.org/t/p/original/kWIII7hRxKEms2MZuqLMe3DnTAW.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=swYHcYBVddQ",
    synopsis: "Parmi tous les marchands de Londres, Ebenezer Scrooge est connu comme l’un des plus riches et des plus avares. Ce vieillard solitaire et insensible vit dans l’obsession de ses livres de comptes. Ni la mort de son associé, Marley, ni la pauvre condition de son employé, Bob Cratchit, n’ont jamais réussi à l’émouvoir. De tous les jours de l’année, celui que Scrooge déteste le plus est Noël. L’idée de répandre joie et cadeaux va définitivement à l’encontre de tous ses principes ! Pourtant, cette année, Scrooge va vivre un Noël qu’il ne sera pas près d’oublier… Tout commence la veille de Noël, lorsqu’en rentrant chez lui, Scrooge a d’étranges hallucinations. Le spectre de son ancien associé lui rend la plus effrayante des visites, et lui en annonce d’autres, aussi magiques que troublantes… Scrooge se voit d’abord confronté à l’Esprit des Noëls passés, qui le replonge dans ses propres souvenirs, réveillant en lui des blessures oubliées et des regrets profondément enfouis…",
    director: "Robert Zemeckis",
    casting: "Jim Carrey, Gary Oldman, Colin Firth",
    genre: "Animation",
    release_date: "25 novembre 2009",
    streaming: "Disney +",
    duration: "1h36",
    origin: "Etats-Unis",
  },
  {
    day: 4,
    title: "L'étrange Noël de Monsieur Jack",
    poster: "https://www.themoviedb.org/t/p/original/e5hgZBkL1kvY0fGPixZD0468VIA.jpg",
    background: "https://www.themoviedb.org/t/p/original/kWIII7hRxKEms2MZuqLMe3DnTAW.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=E8o_8iKS6mk",
    synopsis: "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles », vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween. Mais le terrible épouvantail, lassé de cette vie répétitive et monotone, décide de partir. C'est alors qu'il découvre la ville de Noël. Après cette aventure, il revient chez lui, avec une idée originale en tête : et si cette année, c'étaient les habitants de la ville d'Halloween qui allaient fêter Noël ?",
    director: "Tim Burton",
    casting: "Chris Sarandon, Catherine O'Hara, Danny Elfman",
    genre: "Animation",
    release_date: "07 décembre 1994",
    streaming: "Disney +",
    duration: "1h15",
    origin: "Etats-Unis",
  },
  {
    
  }
];

const movieCard = ({day, title, poster, background, trailer, synopsis, director, casting, genre, release_date, streaming, duration, origin}) => {
    return (
        <div className="movie-card">
            <img src={poster} alt={title}/>

        </div>
    );
};

export default movieCard;
