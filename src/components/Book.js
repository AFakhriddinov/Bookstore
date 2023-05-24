import React from 'react';

const Book = (props) => {
  const { book, deleteBook } = props;
  return (
    <section>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.category}</p>
      <ul>
        <li>
          <button type="button" onClick={() => deleteBook(book.item_id)}>
            Remove
          </button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </section>
  );
};

export default Book;
