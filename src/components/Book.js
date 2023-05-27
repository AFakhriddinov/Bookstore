import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from "react-circular-progressbar"; //eslint-disable-line
import { removeBook, remove } from '../redux/books/bookSlice';
import "react-circular-progressbar/dist/styles.css"; //eslint-disable-line
import '../index.css';

const Book = ({
  title, author, category, id,
}) => {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 15);
  return (
    <div className="book-item">
      <div className="book-info">
        <p className="book-category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="book-author">{author}</p>
        <div>
          <button className="btn-update" type="button" title="Comment">
            Comment
          </button>
          <span className="separator">|</span>
          <button
            className="btn-update"
            type="button"
            onClick={() => {
              dispatch(removeBook({ id }));
              dispatch(remove(id));
            }}
          >
            Remove
          </button>
          <span className="separator">|</span>
          <button className="btn-update" type="button" title="Edit">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-icon">
        <div className="circle">
          <CircularProgressbar value={progress} />
        </div>
        <div className="percentage-container">
          <p className="percent">
            {progress}
            %
          </p>
          <p className="progress-info">Completed</p>
        </div>
        <span className="separator-two" />
        <div className="progressInfo">
          <p className="present-unit">CURRENT CHAPTER</p>
          <p className="unit">
            CHAPTER
            {chapter}
          </p>
          <button className="update" type="button" title="UPDATE PROGRESS">
            UPDATE PROGRESS
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
