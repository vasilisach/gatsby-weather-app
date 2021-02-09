import React, {useState, useCallback} from "react"

import SEO from "../components/seo"
import Search from "../components/search"
import WeatherDataBlock from "../components/weatherDataBlock"
import AutocompleteSearch from '../components/autocompleteSearchGoogle'
import AutocompleteCity from '../components/autocompleteSearchHere'
const IndexPage = () => {
  const [city, setCity] = useState('Uzhhorod');
  const handleSearch: (newCity: string) => void = useCallback((newCity) => {
    setCity(newCity)
  }, [])
  return (
    <div className="main-content">
        <SEO title="Home" />
        <AutocompleteCity handleSearch={handleSearch}/>
        <WeatherDataBlock city={city} />
    </div>
  )
}

export default IndexPage
