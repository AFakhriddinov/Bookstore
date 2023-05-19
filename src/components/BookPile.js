import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Book from './Book';

function BookPile({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}

BookPile.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BookPile;
