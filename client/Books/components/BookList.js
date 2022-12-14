import React, { useContext, useEffect } from "react";
import BookShow from './BookShow';
import BooksContext from '../context';

export default function BookList() {
  const {books, fetchBooks} = useContext(BooksContext);

  const renderedBooks = books.map(book => <BookShow key={book.id} book={book}/>)

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks])

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  )
}


useEffect(() => {
  const listener = () => {
    console.log(counter);
  };

  document.body.addEventListener('click', listener);

  return () => {
    document.body.removeEventListener('click', listener);
  }

}, [counter])
