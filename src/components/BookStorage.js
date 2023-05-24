import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

function BookStorage() {
  const dispatch = useDispatch();
  const bookItems = useSelector((state) => state.books.bookItems);

  return (
    <section className="cart">
      <div>
        {bookItems.map((item) => (
          <div key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.author}</h4>
              <h4>{item.category}</h4>
            </div>
            <div>
              <button
                type="button"
                onClick={() => dispatch(removeBook(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <Book />
    </section>
  );
}

export default BookStorage;
