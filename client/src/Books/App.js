import React from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import { Provider } from './context';

export default function App() {

  return (
    <Provider>
      <div className="app">
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
      </div>
    </Provider>
  )
}