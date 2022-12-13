import React, { useContext, useState } from "react";
import context from '../context';
import './styles.css';

export default function BookEdit({book, setShow}) {
  const [title, setTitle] = useState(book.title);
  const books = useContext(context);

  const editBook = (e) => {
    e.preventDefault();
    books.editBook(title, book.id);
    setShow(false);
  }

  return (
    <>
      <form  className="book-edit" onSubmit={editBook}>
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
