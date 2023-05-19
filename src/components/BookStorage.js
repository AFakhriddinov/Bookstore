import React from 'react';
import Book from './Book';

const BookStorage = (props) => {
  const { books } = props;
  const { deleteBook } = props;

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} deleteBook={deleteBook} />
      ))}
    </div>
  );
};

export default BookStorage;
