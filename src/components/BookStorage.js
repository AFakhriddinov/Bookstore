import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import { getBook } from '../redux/books/bookSlice';

const BookStorage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
  const { books } = useSelector((state) => state.books);
  return (
    <div className="books">
      <ul className="booklist">
        {books
          && books.map((book) => (
            <li className="item" key={book.item_id}>
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
