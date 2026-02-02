export type Book = {
  id: number;
  title: string;
  author: string;
  genre: string;
  rating: number;
};

export const books: Book[] = [
  { id: 1, title: "The Silent Patient", author: "Alex Michaelides", genre: "Thriller", rating: 4.3 },
  { id: 2, title: "Educated", author: "Tara Westover", genre: "Memoir", rating: 4.5 },
  { id: 3, title: "Where the Crawdads Sing", author: "Delia Owens", genre: "Fiction", rating: 4.8 },
  { id: 4, title: "Becoming", author: "Michelle Obama", genre: "Memoir", rating: 4.7 },
  { id: 5, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", rating: 4.2 },
];
