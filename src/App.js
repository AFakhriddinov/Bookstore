import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
// import './App.css';
import BookStorage from './components/BookStorage';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<BookStorage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
