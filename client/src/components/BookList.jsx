import React from 'react';
import BookCard from './BookCard';

export default function BookList({ books=[], onDelete }){
  return (
    <div>
      {books.map(b => <BookCard key={b.id} book={b} onDelete={onDelete} />)}
    </div>
  );
}
