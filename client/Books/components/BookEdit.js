import React, { useContext, useState } from "react";
import BooksContext from '../context';
import './styles.css';

export default function BookEdit({book, setShow}) {
  const [title, setTitle] = useState(book.title);
  const {editBook} = useContext(BooksContext);

  const updateBook = (e) => {
    e.preventDefault();
    editBook(title, book.id);
    setShow(false);
  }

  return (
    <>
      <form  className="book-edit" onSubmit={updateBook}>
        <label>Title</label>
        <input
        className="input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          />
        <button className="button is-primary">Save</button>
      </form>
    </>
  );
}
