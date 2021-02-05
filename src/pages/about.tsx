// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
    <div className="main-content">
      <SEO title="About APP" />
      <h1>About app</h1>
      <p>
      There was a time when you had to read the newspaper or watch the local news to get the weather forecast. Thankfully, those days are over. The smartphone in your pocket can be used as a portable weather studio. A weather app can tell you everything you need to know about the weather. A handy widget makes it even easier to check the on current conditions. Here are the best weather apps (with widgets) for Android.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
