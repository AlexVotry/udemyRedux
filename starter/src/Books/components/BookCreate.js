import React, { useContext, useState } from "react";
import context from '../context';

export default function BookCreate() {
  const [title, setTitle] = useState('');
  const book = useContext(context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {title};
    newBook.id = Math.floor(Math.random() * 1000);
    book.addBook(newBook);
    setTitle('');
  };  

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input"type="text" onChange={e => setTitle(e.target.value)} value={title} autoFocus />
        <button className="button" type="submit">Create!</button>
      </form>
    </div>
  )
}
