import React from 'react';

export default function SearchBar({ value = '', onChange }){
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search by title or author"
      value={value}
      onChange={e => onChange && onChange(e.target.value)}
      aria-label="Search books"
    />
  );
}
