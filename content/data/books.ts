export type Book = {
  title: string;
  author: string;
  status: "reading" | "read" | "want";
  year?: number;
};

export const books: Book[] = [
  // Currently reading
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    status: "reading",
  },

  // Read
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    status: "read",
    year: 2024,
  },
  {
    title: "The Pragmatic Programmer",
    author: "David Thomas & Andrew Hunt",
    status: "read",
    year: 2023,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    status: "read",
    year: 2023,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    status: "read",
    year: 2022,
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    status: "read",
    year: 2022,
  },

  // Want to read
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    status: "want",
  },
  {
    title: "The Art of Doing Science and Engineering",
    author: "Richard Hamming",
    status: "want",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    status: "want",
  },
];
