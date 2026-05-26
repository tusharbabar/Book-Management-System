import React, { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import { getBooks, deleteBook } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home(){
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    let mounted = true;
    getBooks().then(data => { if(mounted) setBooks(data); }).catch(()=>{});
    return () => { mounted = false; };
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id).catch(()=>{});
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  const filtered = books.filter(b => {
    const q = query.trim().toLowerCase();
    if(!q) return true;
    return (b.title || '').toLowerCase().includes(q) || (b.author || '').toLowerCase().includes(q);
  });

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="page-title">
          <h1>Your Book Library</h1>
          <p className="page-subtitle">Browse, update, and manage your collection with a clean and responsive dashboard.</p>
        </div>
        <Link to="/add" className="button-primary">Add Book</Link>
      </div>

      <div className="controls-row">
        <div className="search-control">
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <div className="filter-control">
          <Filter />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="card-grid">
          <BookList books={filtered} onDelete={handleDelete} />
        </div>
      ) : (
        <div className="empty-state">
          No books match your search yet. Add a new book to get started.
        </div>
      )}
    </div>
  );
}
