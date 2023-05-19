import { useState } from 'react';
import BookStorage from './BookStorage';
import AddedBooks from './AddedBooks';

const ShowBooks = () => {
  const [books, setBooks] = useState([
    {
      item_id: 'item1',
      title: 'Harry Potter',
      author: 'J. K. Rowling',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Shaytanat',
      author: 'Tohir Malik',
      category: 'Crime',
    },
    {
      item_id: 'item3',
      title: 'Iblis devori',
      author: 'Tohir Malik',
      category: 'Drama',
    },
  ]);
  const deleteBook = (id) => {
    setBooks([...books.filter((book) => book.item_id !== id)]);
  };

  const addBook = (name, author, category) => {
    const newBook = {
      item_id: Math.random(),
      title: name,
      author,
      category,
    };

    setBooks([...books, newBook]);
  };
  return (
    <>
      <BookStorage books={books} deleteBook={deleteBook} />
      <AddedBooks addBook={addBook} />
    </>
  );
};

export default ShowBooks;
