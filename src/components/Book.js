import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, remove } from '../redux/books/bookSlice';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <p>{author}</p>
        <div>
          <button
            className="btn-action"
            type="button"
            onClick={() => {
              dispatch(removeBook({ id }));
              dispatch(remove(id));
            }}
          >
            Remove
          </button>
          <button className="btn-action" type="button" title="Comment">
            Comment
          </button>
          <button className="btn-action" type="button" title="Edit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
export default Book;
