import React, { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import context from './context';

export default function App() {
  const [books, setBooks] = useState([]);
  const addBook = book => setBooks([...books, book]);
  const removeBook = id => setBooks(books.filter(b => b.id !== id));
  // const editBook = (newTitle, id) => {
  //   const updatedBooks = [...books];
  //   const index = updatedBooks.findIndex(b => b.id === id);
  //   updatedBooks[index].title = newTitle;
  //   return setBooks(updatedBooks);
  // }

  const editBook = (title, id) => {
    const updatedBooks = books.map(book => {
      if (book.id === id) return { ...book, title };
      return book;
    });

    setBooks(updatedBooks);
  }

  const b = { books, addBook, removeBook, editBook };

  return (
    <context.Provider value={b}>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </context.Provider>
  )
}