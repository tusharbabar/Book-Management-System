import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/EditBook';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<EditBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  );
}
