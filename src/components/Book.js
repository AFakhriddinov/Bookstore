import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Book({ book }) {
  return (
    <li>
      <h3>{book.category}</h3>
      <h2>{book.name}</h2>
      <p>{book.author}</p>

      <div>
        <button type="button">Remove</button>
      </div>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.arrayOf.isRequired,
};

export default Book;
