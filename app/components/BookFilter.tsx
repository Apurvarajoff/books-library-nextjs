'use client';

import { useState } from 'react';
import { books, Book } from '../data/books';

type BookFilterProps = {
  onFilter: (filteredBooks: Book[]) => void;
};

export default function BookFilter({ onFilter }: BookFilterProps) {
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('None');

  const handleFilter = () => {
    let filtered = [...books];
    if (genre !== 'All') filtered = filtered.filter((b) => b.genre === genre);

    if (sort === 'RatingAsc') filtered.sort((a, b) => a.rating - b.rating);
    if (sort === 'RatingDesc') filtered.sort((a, b) => b.rating - a.rating);

    onFilter(filtered);
  };

  return (
    <div className="mb-6 flex flex-col md:flex-row gap-4">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="p-2 border rounded text-gray-700"
      >
        <option value="All">All Genres</option>
        <option value="Fiction">Fiction</option>
        <option value="Memoir">Memoir</option>
        <option value="Thriller">Thriller</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="p-2 border rounded text-gray-700"
      >
        <option value="None">Sort By</option>
        <option value="RatingAsc">Rating Low → High</option>
        <option value="RatingDesc">Rating High → Low</option>
      </select>

      <button
        onClick={handleFilter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply
      </button>
    </div>
  );
}
