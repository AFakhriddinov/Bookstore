import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getBook } from '../redux/books/bookSlice';
import '../index.css';

const BookStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  const { books } = useSelector((state) => state.books);
  return (
    <div className="book-storage">
      <ul className="books">
        {books
          && books.map((book) => (
            <li key={book.item_id}>
              <Book
                title={book.title}
                author={book.author}
                id={book.item_id}
                category={book.category}
              />
            </li>
          ))}
        <hr className="hr" />
      </ul>
      <Form />
    </div>
  );
};
export default BookStorage;
