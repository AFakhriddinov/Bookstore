import { Routes, Route } from 'react-router-dom';
import React from 'react';
// import './App.css';
import ShowBooks from './components/ShowBooks';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ShowBooks />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
