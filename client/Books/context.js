// import React, { createContext } from 'react';

// export default createContext({});

import React, { createContext, useState, useCallback } from 'react';
import { deleteBook, getAllBooks, postBook, putBook } from "./services/apiRequest";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const bookList = await getAllBooks();
    setBooks(bookList);
  }, []);

  const addBook = async (book) => {
    const newBook = await postBook(book);
    setBooks([...books, newBook]);
  };

  const removeBook = async (id) => {
    await deleteBook(id);
    const newList = await getAllBooks();
    // setBooks(books.filter(b => b.id !== id));
    setBooks(newList);
  };
  
  const editBook = async (title, id) => {
    const response = await putBook(title, id);
    const updatedBooks = books.map((book) => {
      if (book.id === id) return response;
      return book;
    });
    setBooks(updatedBooks);
  };

  const bookContext = { books, fetchBooks, addBook, removeBook, editBook };

  return (
    <BooksContext.Provider value={bookContext}>
      {children}
    </BooksContext.Provider>
  )
}

export { Provider };
export default BooksContext;