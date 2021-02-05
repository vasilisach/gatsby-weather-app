import React, { useState } from 'react';
import SearchIcon from './searchIcon';

type Props = {
  handleSearch: (newCity: string) => void;
}

const Search: React.FC<Props> = ({handleSearch}) => {
  const [value, setValue] = useState('');

  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        placeholder="Enter city"
        value={value}
        onChange = {e=>setValue(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={()=>handleSearch(value)}
      >
        <SearchIcon />
      </button>
    </div>
  )
}

export default Search;