import React, { useContext } from "react";
import BookShow from './BookShow';
import context from '../context';

export default function BookList() {
  const {books} = useContext(context);

  const renderedBooks = books.map(book => <BookShow key={book.id} book={book}/>)

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}
