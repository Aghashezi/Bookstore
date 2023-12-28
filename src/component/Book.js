// Books.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './redux/bookSlice';

const Books = () => {
  const books = useSelector((state) => state.books.list);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{' '}
            <button onClick={() => dispatch(removeBook(book.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

