import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import BookPile from './BookPile';
import AddBook from './AddBook';

// const bookArray = [
//   {
//     id: 1,
//     category: 'Action',
//     name: 'Angels and Demons',
//     author: 'J. R. R. Tolkien',
//   },
//   {
//     id: 2,
//     category: 'Science Fiction',
//     name: 'Dune',
//     author: 'Frank Herbert',
//   },
//   {
//     id: 3,
//     category: 'Economy',
//     name: 'The Wealth of Nations',
//     author: 'Adam Smith',
//   },
// ];

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
