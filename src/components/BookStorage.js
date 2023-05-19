import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import BookPile from './BookPile';
import AddBook from './AddBook';

function BookStorage({ books }) {
  return (
    <div className="container">
      <BookPile books={books} />
      <AddBook />
    </div>
  );
}

BookStorage.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

export default BookStorage;
