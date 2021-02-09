import React, {useState} from 'react';
import { configureAuthentication, useAutocomplete } from '@cloudpower97/use-here-api';

const AutocompleteCity = ({handleSearch})=>{
    configureAuthentication({
        apiKey: process.env.HERE_API_KEY
    });
    const [{ data, loading, error }, fetchSuggestions] = useAutocomplete();
    const [location, setLocation]=useState<string>('');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    console.log(data)
    const handleKeyDown = (event, value)=>{
        if(event.key === 'Enter'){
            handleSearch(value);
        }
    }
    return (
        <>
          <div className="search-block">
            <input
                className="search-input"
                placeholder="Enter city"
                value={location}
                onChange={({ currentTarget: { value } }) =>{
                    setLocation(value);
                    if(value.length > 1){
                        fetchSuggestions({
                            query: value,
                        })
                        setMenuOpen(true)
                    }else{
                        setMenuOpen(false)
                    }
                }}
                onKeyUp = {e=>handleKeyDown(e, location)}
            />
          </div>
          {loading && !error && <p>Loading data...</p>}
          {error && <p>{error.message}</p>}
          {data && isMenuOpen && !loading &&  (
              <div className="autocomplete-block">
                  <ul className="autocomplete-list">
                    {data.suggestions?.map(suggestion => (
                        suggestion.matchLevel=='city'?
                        <li 
                            key={suggestion.locationId}
                            onClick={() => {
                                setLocation(suggestion.address.city);
                                setMenuOpen(false);
                                handleSearch(suggestion.address.city);
                            }}
                        >
                        {suggestion.address.city}
                        </li>
                        :''
                    ))}
                </ul>
              </div>
            
          )}
        </>
      );
}
export default AutocompleteCity;