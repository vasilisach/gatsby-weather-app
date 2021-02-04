import React, {useState, useCallback} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ApolloProvider } from '@apollo/client';
import Search from "../components/search"
import WeatherDataBlock from "../components/weatherDataBlock"
import {apolloClient} from "../apollo/apollo-config"

const IndexPage = () => {
  const [city, setCity] = useState('Uzhhorod');
  const handleSearch = useCallback(newCity => {
    setCity(newCity)
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <div className="main-content">
        <Search handleSearch={handleSearch} />
        <ApolloProvider client={apolloClient}>
          <WeatherDataBlock city={city} />
        </ApolloProvider>
      </div>
    </Layout>
  )
}

export default IndexPage
