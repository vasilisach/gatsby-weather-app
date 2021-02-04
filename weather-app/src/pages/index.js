import React, {useState, useCallback} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SearchCity from "../components/SearchCity"
import WeatherData from "../components/WeatherData"

const IndexPage = () => {
  const [city, setCity] = useState('Uzhhorod');
  const handleSearch = useCallback(newCity => {
    setCity(newCity)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="main-content">
        <SearchCity handleSearch={handleSearch} />
        <WeatherData city={city} />
      </div>
    </Layout>
  )
}

export default IndexPage
