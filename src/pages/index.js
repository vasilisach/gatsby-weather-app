import React, {useState, useCallback} from "react"

import SEO from "../components/seo"
import Search from "../components/search"
import WeatherDataBlock from "../components/weatherDataBlock"

const IndexPage = () => {
  const [city, setCity] = useState('Uzhhorod');
  const handleSearch = useCallback(newCity => {
    setCity(newCity)
  }, [])
  return (
    <div className="main-content">
        <SEO title="Home" />
        <Search handleSearch={handleSearch} />
        <WeatherDataBlock city={city} />
    </div>
  )
}

export default IndexPage
