import React from 'react';

export default function Filter(){
  return (
    <select className="filter-select" aria-label="Filter books">
      <option value="">All genres</option>
      <option value="fiction">Fiction</option>
      <option value="nonfiction">Nonfiction</option>
      <option value="fantasy">Fantasy</option>
    </select>
  );
}
