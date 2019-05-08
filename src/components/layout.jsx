import React from "react"
import GlobalStyle from '../styles/global'
import SEO from "./seo"

const Layout = () => (
      <>
        <SEO title="Home" keywords={[`gatsby`, `web developer`, `react`, `Scott Green`]} />
        <GlobalStyle />
      </>
)

export default Layout