import { books, Book } from '../data/books';

type BookListProps = {
  filteredBooks: Book[];
};

export default function BookList({ filteredBooks }: BookListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {filteredBooks.map((book) => (
        <div key={book.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm text-gray-500">Genre: {book.genre}</p>
          <p className="text-sm text-gray-500">Rating: {book.rating}</p>
        </div>
      ))}
    </div>
  );
}
