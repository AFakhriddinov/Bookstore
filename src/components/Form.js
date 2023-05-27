import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postBook, post } from '../redux/books/bookSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(postBook({ title, author, category }));
        dispatch(post({ title, author, category }));
        setAuthor('');
        setTitle('');
        setCategory('');
      }}
      className="book-form"
    >
      <h2 className="book-form-title">ADD NEW BOOK</h2>
      <br />
      <div className="book-inputs">
        <input
          placeholder="Title"
          className="book-input"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          className="book-input"
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          placeholder="Category"
          className="book-input"
          name="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="submit-button">
          ADD BOOK
        </button>
      </div>
    </form>
  );
};

export default Form;
