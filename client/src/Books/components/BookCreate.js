import React, { useContext, useState } from "react";
import BooksContext from '../context';
// import { postBook } from "../services/apiRequest";

export default function BookCreate() {
  const [title, setTitle] = useState('');
  const {addBook} = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {title};
    addBook(newBook);
    // postBook(newBook);
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
