/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Header from "./header"
import "./layout.css"

const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com',
  cache: new InMemoryCache()
});

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query 
    SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      desktop: file(relativePath: { eq: "site-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <ApolloProvider client={client}>
      <BackgroundImage
      Tag="section"
      className='main-background'
      fluid={imageData}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
            { children }  
        </main>
      </BackgroundImage>
    </ApolloProvider>  
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
