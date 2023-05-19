import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import Book from './Book';

function BooksPile({ books }) {
  return (
    <ul>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
}

BooksPile.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BooksPile;
