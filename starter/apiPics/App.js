import React, {memo, useState} from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

export default function App () {
  const [images, setImages] = useState([]);
  const SearchBarMemo = memo(SearchBar);

  const handleTerm = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  }

  return (
    <div className='app'>
      <SearchBarMemo handleTerm={handleTerm} />
      <ImageList images={images} />
    </div>
  );
}