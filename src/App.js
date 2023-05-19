// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import BookStorage from './components/BookStorage';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<BookStorage />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
