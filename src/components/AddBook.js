import React from 'react';

function AddBook() {
  return (
    <div>
      <h2>Add a new book</h2>
      <form>
        <input type="text" name="name" placeholder="Book Title" />
        <input type="text" name="category" placeholder="Category" />
        <button type="button">Add a book</button>
      </form>
    </div>
  );
}

export default AddBook;
