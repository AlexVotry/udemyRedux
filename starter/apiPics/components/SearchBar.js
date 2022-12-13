import React, { useState } from "react";
import './styles.css';

export default function SearchBar({handleTerm}) {
  const [term, setTerm] = useState('');

  const getPics = (e) => {
    e.preventDefault();
    handleTerm(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={getPics}>
        <label>Enter search term</label>
        <input type="text" onChange={e => setTerm(e.target.value)} value={term}/>
      </form>
    </div>
  )
}

