import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';

export default function Book() {
  const initialState = {
    title: '',
    author: '',
    category: '',
  };

  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...data,
      item_id: Date.now(),
    };
    dispatch(addBook(newBook));
    setData(initialState);
  };

  return (
    <div>
      <form className="f">
        <input
          type="text"
          placeholder="Title"
          onChange={handleChange}
          // value={data.title}
        />
        <input
          type="text"
          placeholder="Author"
          onChange={handleChange}
          // value={data.author}
        />
        {/* <input
          type="text"
          placeholder="Category"
          onChange={handleChange}
          value={data.category}
        /> */}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
