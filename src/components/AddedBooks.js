import { useRef } from 'react';

const AddedBooks = (props) => {
  const inputRefName = useRef();
  const inputRefAuthor = useRef();
  const inputRefCategory = useRef();
  const { addBook } = props;
  const submitBookHandler = (e) => {
    e.preventDefault();
    addBook(
      inputRefName.current.value,
      inputRefAuthor.current.value,
      inputRefCategory.current.value,
    );
  };
  return (
    <form onSubmit={submitBookHandler}>
      <input ref={inputRefName} />
      <input ref={inputRefAuthor} />
      <input ref={inputRefCategory} />
      <button type="submit">Add a book</button>
    </form>
  );
};

export default AddedBooks;
