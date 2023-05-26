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
      className="form"
    >
      <h2>Add a book</h2>
      <div>
        <input
          placeholder="Title"
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Author"
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          placeholder="Category"
          name="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="form-button">
          Add a book
        </button>
      </div>
    </form>
  );
};

export default Form;
