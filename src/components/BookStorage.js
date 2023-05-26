/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
// import Book from './Book';

function BookStorage() {
  const { books, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const loadingCase = () => <div>Loading...</div>;
  const errorCase = () => <div>Connection problem...</div>;

  const displayBooks = () => books.map((book) => {
    const { item_id, title, author } = book;
    return (
      <section key={item_id}>
        <div>
          <div>
            <div>
              <h1>
                Title:
                {title}
              </h1>
              <h2>
                Author:
                {author}
              </h2>
            </div>
            <div>
              <button type="button">Comment</button>
              <button
                type="button"
                onClick={() => dispatch(removeBook(item_id))}
              >
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
        </div>
      </section>
    );
  });

  const displayContent = () => {
    if (loading) {
      return loadingCase();
    }
    if (error) {
      return errorCase();
    }
    return displayBooks();
  };
  return <div>{displayContent()}</div>;
}

export default BookStorage;
