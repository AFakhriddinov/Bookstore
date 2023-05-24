import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  // const { book, deleteBook } = props;
  return (
    <section>
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <p>{book.category}</p>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
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
