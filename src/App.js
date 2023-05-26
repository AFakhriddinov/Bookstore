import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import './App.css';
import BookStorage from './components/BookStorage';
import Categories from './components/Categories';
import Navigation from './components/Navigation';
import Book from './components/Book';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookStorage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Book />
    </Router>
  );
}

export default App;
