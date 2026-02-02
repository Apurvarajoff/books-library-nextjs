"use client";
import BookList from './components/BookList';
import BookFilter from './components/BookFilter';
import { books, Book } from './data/books';
import { useState } from 'react';

export default function Page() {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);

  return (
    <div>
      {/* Client Component */}
      <BookFilter onFilter={setFilteredBooks} />

      {/* Server Component */}
      <BookList filteredBooks={filteredBooks} />
    </div>
  );
}
