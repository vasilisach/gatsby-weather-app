import { event, HTMLInputElement } from '@ungap/global-this';
import React, { useState } from 'react';
import SearchIcon from './searchIcon';

type Props = {
  handleSearch: (newCity: string) => void;
}

const Search: React.FC<Props> = ({handleSearch}) => {
  const [value, setValue] = useState('');
  const handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement> ,newCity: string) => void = (event, newCity)=>{
    if(event.key === 'Enter'){
      handleSearch(newCity);
    }
  }
  return (
    <div className="search-wrapper">
      <input
        className="search"
        type="text"
        placeholder="Enter city"
        value={value}
        onChange = {e=>setValue(e.target.value)}
        onKeyUp = {e=>handleKeyDown(e, value)}
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