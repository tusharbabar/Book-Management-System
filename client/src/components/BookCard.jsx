import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book, onDelete }){
  return (
    <article className="book-card">
      <div className="book-card-content">
        <h3>{book?.title || 'Untitled'}</h3>
        <p className="book-meta">Author: {book?.author || 'Unknown author'}</p>
        <p className="book-meta">ID: {book?.id ?? '—'}</p>
      </div>
      <div className="card-actions">
        <Link to={`/edit/${book.id}`} className="action-button secondary">Edit</Link>
        <button type="button" onClick={() => onDelete && onDelete(book.id)} className="action-button">Delete</button>
      </div>
    </article>
  );
}
