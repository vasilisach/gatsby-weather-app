import React, {useEffect, useRef, useState} from 'react';

let autoComplete=null;

const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = 'text/javascript';
    script.onload = ()=>callback();
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}

function handleScriptLoad(updateQuery, autoCompleteRef){
    if(autoComplete === null){
        autoComplete = new window.google.maps.places.Autocomplete(
            autoCompleteRef,
            { types: ["(cities)"], componentRestrictions: {country: 'uk'} }

        );
        autoComplete.setFields(["address_component", "formatted_address"])
        autoComplete.addListener("place_changed", ()=>{
            handlePlaceSelect(updateQuery)
        })
    }
}

async function handlePlaceSelect(updateQuery){
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
}

const AutocompleteSearch = ({handleSearch})=>{
    const [query, setQuery] = useState("");
    const autoCompleteRef = useRef(null);

    useEffect(()=>{
        loadScript(
            `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_PLACE_API}&libraries=places`,
            ()=>handleScriptLoad(setQuery, autoCompleteRef.current)
        )
    }, [])

    const handleKeyDown = (event, value)=>{
        if(event.key === 'Enter'){
          handleSearch(value);
        }
    }

    return (
        <div className="search-block">
            <input 
                className="search-input"
                ref={autoCompleteRef}
                onChange={e=>setQuery(e.target.value)}
                placeholder="Enter a city"
                value={query}
                onKeyUp = {e=>handleKeyDown(e, e.target.value)}
            />
        </div>
    )
}
export default AutocompleteSearch;