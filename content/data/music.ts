export type Album = {
  artist: string;
  title: string;
  year: number;
  genre?: string;
  url?: string;
};

export const albums: Album[] = [
  {
    artist: "Radiohead",
    title: "In Rainbows",
    year: 2007,
    genre: "alternative",
  },
  {
    artist: "Tame Impala",
    title: "Currents",
    year: 2015,
    genre: "psychedelic",
  },
  {
    artist: "Frank Ocean",
    title: "Blonde",
    year: 2016,
    genre: "r&b",
  },
  {
    artist: "Kendrick Lamar",
    title: "To Pimp a Butterfly",
    year: 2015,
    genre: "hip-hop",
  },
  {
    artist: "Khruangbin",
    title: "Con Todo El Mundo",
    year: 2018,
    genre: "psychedelic",
  },
  {
    artist: "Mac DeMarco",
    title: "Salad Days",
    year: 2014,
    genre: "indie",
  },
  {
    artist: "Boards of Canada",
    title: "Music Has the Right to Children",
    year: 1998,
    genre: "electronic",
  },
  {
    artist: "King Krule",
    title: "The OOZ",
    year: 2017,
    genre: "experimental",
  },
];
