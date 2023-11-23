import React from "react";

const moviesData = [
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
    poster:
      "https://www.themoviedb.org/t/p/original/aH0eKsDpnTBUZbaLGtrtp36kOvq.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/6spDvuB9rc2J6WME7ozjkvfR4rx.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=SmMeZfYQ1XU",
    synopsis:
      "Rien ne va plus à l'approche du réveillon : les 92 000 lutins chargés de fabriquer les cadeaux des enfants tombent tous malades en même temps ! C'est un coup dur pour Santa (Claus), plus connu sous le nom de Père Noël... il n'a pas le choix : il doit se rendre d'urgence sur Terre avec ses rennes pour chercher un remède. À son arrivée, il devra trouver des alliés pour l'aider à sauver la magie de Noël.",
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
    poster:
      "https://www.themoviedb.org/t/p/original/thn0s6e01fewLW2j1X5htgjKbeJ.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/kWIII7hRxKEms2MZuqLMe3DnTAW.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=swYHcYBVddQ",
    synopsis:
      "Parmi tous les marchands de Londres, Ebenezer Scrooge est connu comme l’un des plus riches et des plus avares. Ce vieillard solitaire et insensible vit dans l’obsession de ses livres de comptes. Ni la mort de son associé, Marley, ni la pauvre condition de son employé, Bob Cratchit, n’ont jamais réussi à l’émouvoir. De tous les jours de l’année, celui que Scrooge déteste le plus est Noël. L’idée de répandre joie et cadeaux va définitivement à l’encontre de tous ses principes ! Pourtant, cette année, Scrooge va vivre un Noël qu’il ne sera pas près d’oublier… Tout commence la veille de Noël, lorsqu’en rentrant chez lui, Scrooge a d’étranges hallucinations. Le spectre de son ancien associé lui rend la plus effrayante des visites, et lui en annonce d’autres, aussi magiques que troublantes… Scrooge se voit d’abord confronté à l’Esprit des Noëls passés, qui le replonge dans ses propres souvenirs, réveillant en lui des blessures oubliées et des regrets profondément enfouis…",
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
    poster:
      "https://www.themoviedb.org/t/p/original/e5hgZBkL1kvY0fGPixZD0468VIA.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/kWIII7hRxKEms2MZuqLMe3DnTAW.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=E8o_8iKS6mk",
    synopsis:
      "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles », vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween. Mais le terrible épouvantail, lassé de cette vie répétitive et monotone, décide de partir. C'est alors qu'il découvre la ville de Noël. Après cette aventure, il revient chez lui, avec une idée originale en tête : et si cette année, c'étaient les habitants de la ville d'Halloween qui allaient fêter Noël ?",
    director: "Tim Burton",
    casting: "Chris Sarandon, Catherine O'Hara, Danny Elfman",
    genre: "Animation",
    release_date: "07 décembre 1994",
    streaming: "Disney +",
    duration: "1h15",
    origin: "Etats-Unis",
  },
  {
    day: 5,
    title: "Le Pôle Express",
    poster:
      "https://www.themoviedb.org/t/p/original/tz4DUBcxU7UowOIJwqvQfdWkU2U.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/edcDjrLNRkEDpQAgyp9rISkYRyN.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=cCNy5JCfaOg",
    synopsis:
      "Un jeune garçon qui se met à douter de l'existence du père Noël monte dans un train mystérieux en partance pour le pôle Nord. À mesure que le Pôle Express s'enfonce dans des contrées enchantées, l'aventure est au rendez-vous et les jeunes passagers prennent conscience de l'étendue de leurs dons.",
    director: "Robert Zemeckis",
    casting: "Tom Hanks, Leslie Zemeckis, Eddie Deenzen",
    genre: "Animation",
    release_date: "01 décembre 2004",
    streaming: "Amazon Prime Vidéo",
    duration: "1h40",
    origin: "Etats-Unis",
  },
  {
    day: 6,
    title: "Bonjour l'esprit de Noël",
    poster:
      "https://www.themoviedb.org/t/p/original/8LNuBRVrky6oa6Wpx3MrEt6K2g8.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/p6ATo7jfKxZzhgtvyzLFeeBFnTg.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=msxlgHVOrJ8",
    synopsis:
      "A chaque Noël, Jackie envoie une lettre à sa vieille amie d'université Charlotte qui a l'impression que cette dernière mène vraiment une vie parfaite. Un concours de circonstances conduit Charlotte et son mari Rob chez Jackie et son mari Valentino pour les fêtes de fin d'année. Charlotte saisit l'occasion de prouver que la vie parfaite de sa vieille amie ne peut pas être si idyllique. Mais dans sa volonté de démasquer Jackie, Charlotte manque de ruiner le Noël des deux familles...",
    director: "Mary Lambert",
    casting: "Brandy Norwood, Jason Biggs, Heather Graham",
    genre: "Comédie",
    release_date: "16 novembre 2023",
    streaming: "Netflix",
    duration: "1h22",
    origin: "Etats-Unis",
  },
  {
    day: 7,
    title: "Les Chroniques de Noël",
    poster:
      "https://www.themoviedb.org/t/p/original/aRLLpm2zlbgsiIt1ZMmFq2XnXLg.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/vUbWBVHngojXOu1kBgH6xFkZZTA.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=clBbbm7XxJU",
    synopsis:
      "Kate et Teddy sont tout occupés à épier la venue du père Noël. Alors que celui-ci apparaît, comme par magie, les enfants parviennent à se glisser dans son traîneau et se lancent dans une folle aventure, où un accident manque de gâcher les fêtes. Ils vont alors tout faire pour aider le père Noël et ses fidèles elfes à sauver Noël, avant qu'il ne soit trop tard.",
    director: "Clay Kaytis",
    casting: "Kurt Russell, Darby Camp, Judah Lewis",
    genre: "Comédie",
    release_date: "22 novembre 2018",
    streaming: "Netflix",
    duration: "1h40",
    origin: "Etats-Unis",
  },
  {
    day: 8,
    title: "Spirited",
    poster:
      "https://www.themoviedb.org/t/p/original/r4p2HKvhBUXCE20eEiM1pBCnvDN.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/yWgkElw3CS28Xc4AgVu5rk99HnO.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=L1YqyMiQVbQ",
    synopsis:
      "À chaque réveillon de Noël, le fantôme du Noël présent choisit une âme sombre, que la visite de trois esprits viendra sauver. Mais cette fois, il ne tombe pas sur le bon Scrooge. Clint Briggs renverse les rôles et c'est le fantôme du Noël présent qui se retrouve face à son passé, son présent et son futur.",
    director: "Sean Anders",
    casting: "Will Ferrell, Ryan Reynolds, Octavia Spencer",
    genre: "Comédie",
    release_date: "18 novembre 2018",
    streaming: "AppleTV +",
    duration: "2h07",
    origin: "Etats-Unis",
  },
  {
    day: 9,
    title: "Noêl à Candy Lane",
    poster:
      "https://www.themoviedb.org/t/p/original/psOszcONHSkXYfXOqOvYmrBVRXv.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/dMhzK0ojKR5M9xx7yTSjFcF7agg.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=eHaSBUXfhCM",
    synopsis:
      "Un homme a pour mission de gagner le concours annuel de décoration de Noël de son quartier. Après que Chris ait conclu par inadvertance un accord avec une malicieuse elfe nommée Pepper pour augmenter ses chances de gagner, celle-ci jette un sort magique qui donne vie aux 12 jours de Noël et provoque des ravages dans toute la ville. Au risque de gâcher les vacances de sa famille, Chris, sa femme Carol et leurs trois enfants doivent se lancer dans une course contre la montre pour briser le sort de Pepper, affronter des personnages magiques et diaboliques afin de sauver Noël pour tout le monde.",
    director: "Reginald Hudlin",
    casting: "Eddie Murphy, Tracee Ellis Ross, Jillian Bell",
    genre: "Comédie",
    release_date: "1 décembre 2023",
    streaming: "Amazon Prime Vidéo",
    duration: "1h57",
    origin: "Etats-Unis",
  },
  {
    day: 10,
    title: "Maman, j'ai raté l'avion",
    poster:
      "https://www.themoviedb.org/t/p/original/aP9UrDpKS5i5PCiYKDgJvkRz7ne.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/6uLhSLXzB1ooJ3522ydrBZ2Hh0W.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=GPtHAQARLdw",
    synopsis:
      "La famille McCallister a décidé de passer les fêtes de Noël à Paris. Seulement Kate et Peter McCallister s'aperçoivent dans l'avion qu'il leur manque le plus jeune de leurs enfants, Kevin, âgé de 9 ans. D'abord désespéré, Kevin reprend vite les choses en main et s'organise pour vivre le mieux possible. Quand deux cambrioleurs choisissent sa maison pour commettre leurs méfaits.",
    director: "Chris Columbus",
    casting: "Macaulay Culkin, Joe Pesci, Daniel Stern",
    genre: "Comédie",
    release_date: "19 décembre 1990",
    streaming: "Disney +",
    duration: "1h43",
    origin: "Etats-Unis",
  },
  {
    day: 11,
    title: "Un stupéfiant Noël",
    poster:
      "https://www.themoviedb.org/t/p/original/4lcgzQhb4kQ984I1njgSqQ6BeCv.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/oaUDSpjM8euKI8Hz87iAzsSGPUy.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=SuRkzBMyLyg",
    synopsis:
      "À la veille de Noël, Greg, un policier solitaire et taciturne, n’hésite pas à abandonner sa fille pour partir en mission. Pour lui donner une leçon, le Père Noël décide d’exaucer le souhait de sa fille : que son père ressemble à Richard Silestone, le bon père de famille un peu benêt et lourdement endetté du film de Noël qu’elle adore. Alors que Greg est envoyé dans ce monde improbable, Richard atterrit par erreur dans le monde réel. En se réveillant, les deux hommes comprennent qu’ils n’ont d’autre choix que de réussir la mission de l’autre pour regagner leurs vies respectives : démanteler un dangereux réseau de drogue pour Richard et sauver la maison familiale pour Greg en remportant le concours de patinage artistique local.",
    director: "Arthur Sanigou",
    casting: "Ragnar le Breton, Eric Judor, Laura Felpin",
    genre: "Comédie",
    release_date: "8 décembre 2023",
    streaming: "Amazon Prime Vidéo",
    duration: "?",
    origin: "France",
  },
  {
    day: 12,
    title: "Un Noël pas comme les autres",
    poster:
      "https://www.themoviedb.org/t/p/original/mH7z9JY56BLkOPpKlj5b33kjfo2.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/hF5GdZpBeE5VCkIjXNfZD5Hvua9.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=dI36uBWInvk",
    synopsis:
      "Eddie Garrick, un homme au grand cœur, a perdu la foi en la magie de Noël. Alors qu'il passe du temps avec sa fille de neuf ans, Charlotte, la veille de Noël, il se lie d'amitié avec un mystérieux homme en costume rouge nommé Nick.",
    director: "Tim Story",
    casting: "Lil Rel Howery, Ludacris, Madison Skye Validum",
    genre: "Comédie",
    release_date: "17 novembre 2023",
    streaming: "Disney +",
    duration: "1h32",
    origin: "Etats-Unis",
  },
  {
    day: 13,
    title: "Klaus",
    poster:
      "https://www.themoviedb.org/t/p/original/qb0eCUtvi2Rn5etdqFbaYzvIPYn.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/cYQvXNPZLow73lhspVQ7CYlT3Mi.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=h5gR4vUb2rA",
    synopsis:
      "Un facteur égoïste et un fabricant de jouets solitaire forgent une amitié improbable, apportant la joie à une bourgade sombre et froide qui en a désespérément besoin.",
    director: "Sergio Pablos",
    casting: "J.K Simmons, Jason Schwartzman, Rashida Jones",
    genre: "Animation",
    release_date: "15 novembre 2019",
    streaming: "Netflix",
    duration: "1h38",
    origin: "Etats-Unis",
  },
  {
    day: 14,
    title: "Love Actually",
    poster:
      "https://www.themoviedb.org/t/p/original/rJAML5icaPEkj8CU4wLHjpL4RWd.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/dgUJHy2EUBGjWAH6XSl5QHqLXT0.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=g5doBFqKKpk",
    synopsis:
      "L'amour est partout, imprévisible, inexplicable, insurmontable. Il frappe quand il veut et souvent, ça fait pas mal de dégâts... Pour le nouveau Premier Ministre britannique, il va prendre la jolie forme d'une jeune collaboratrice. Pour l'écrivain au coeur brisé parti se réfugier dans le sud de la France, il surgira d'un lac. Il s'éloigne de cette femme qui, installée dans une vie de couple ronronnante, suspecte soudain son mari de songer à une autre. Il se cache derrière les faux-semblants de ce meilleur ami qui aurait bien voulu être autre chose que le témoin du mariage de celle qu'il aime. Pour ce veuf et son beau-fils, pour cette jeune femme qui adore son collègue, l'amour est l'enjeu, le but, mais également la source d'innombrables complications. À l'approche de Noël, à Londres, ces vies et ces amours vont se croiser, se frôler et se confronter.",
    director: "Richard Curtis",
    casting: "Alan Rickman, Hugh Grant, Emma Thompson",
    genre: "Romance",
    release_date: "3 décembre 2003",
    streaming: "MyCanal",
    duration: "2h15",
    origin: "Angleterre",
  },
  {
    day: 15,
    title: "Edward aux mains d'argent",
    poster:
      "https://www.themoviedb.org/t/p/original/cDXaXhnrXukWD5ub93kzC6QMPus.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/qOL963em2govahmx5TzxDrYPxbY.jpg",
    trailer:
      "https://www.themoviedb.org/movie/162-edward-scissorhands/videos?active_nav_item=Trailers&language=fr-FR",
    synopsis:
      "Edward n’est pas un garçon ordinaire. Création d’un inventeur, il a reçu un cœur pour aimer, un cerveau pour comprendre. Mais son concepteur est mort avant d’avoir pu terminer son œuvre et Edward se retrouve avec des lames de métal et des instruments tranchants en guise de doigts.",
    director: "Tim Burton",
    casting: "Johnny Depp, Ramona Wyder, Vincent Prize",
    genre: "Fantastique",
    release_date: "10 avril 1991",
    streaming: "Disney +",
    duration: "1h45",
    origin: "Etats-Unis",
  },
  {
    day: 16,
    title: "Die Hard : Piège de Cristal",
    poster:
      "https://www.themoviedb.org/t/p/original/vav96OZPkzbZhCj3ahhnYhdwLw0.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/bvk2AAH64lP2YZs02Q3jskfHT8j.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=XDg9AkYRWCc",
    synopsis:
      "John McClane, policier new‐yorkais, est venu rejoindre pour les fêtes de Noël sa femme Holly, dont il est séparé depuis plusieurs mois, dans le secret espoir d’une réconciliation. Celle‐ci est cadre dans une multinationale japonaise, la Nakatomi Corporation. Son patron, M. Takagi, donne une soirée en l’honneur de ses employés, à laquelle assiste McClane. Tandis qu’il s’isole pour téléphoner, un commando investit l’immeuble et coupe toutes les communications avec l’extérieur.",
    director: "John McTiernan",
    casting: "Bruce Willis, Alan Rickman, Reginale VelJohnson",
    genre: "Action",
    release_date: "21 septembre 1988",
    streaming: "Disney +",
    duration: "2h12",
    origin: "Etats-Unis",
  },
  {
    day: 17,
    title: "Le Père Noël doit mourir",
    poster:
      "https://www.themoviedb.org/t/p/original/6Pyx0pDMeWCJZrw1m70TAMoP5wZ.jpg",
    background:
      "https://www.themoviedb.org/t/p/original/oolvj4uiEtQjbA6Q03v9PrzuKOO.jpg",
    trailer: "https://www.themoviedb.org/video/play?key=Knnh0vTykL4",
    synopsis:
      "Un père Noël tapageur et peu orthodoxe lutte contre le déclin de son commerce. Au même moment, après avoir reçu un morceau de charbon dans sa chaussette de Noël, Billy, un adolescent de douze ans, engage un tueur à gages afin d'éliminer le père Noël.",
    director: "Eshom Nelms",
    casting: "Mel Gibson, Walton Goggins, Chance Hurstfield",
    genre: "Action",
    release_date: "08 octobre 2020",
    streaming: "Amazon Prime Vidéo",
    duration: "1h40",
    origin: "Etats-Unis",
  },
];

export default moviesData;
