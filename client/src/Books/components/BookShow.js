import React, { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from '../context';

export default function BookShow({book}) {
  const books = useContext(BooksContext);
  const [show, setShow] = useState(false);

  const deleteBook = () => {
    books.removeBook(book.id);
  }

  let content = <h3>{book.title}</h3>

  if (show) {
    content = <BookEdit book={book} setShow={setShow} />;
  }

  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit" onClick={() => setShow(!show)}>edit</button>
        <button className="delete" onClick={deleteBook}>X</button>
      </div>
    </div>
  );
}
