import React from "react"
import GlobalStyle from '../styles/global'
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="wrapper">
          <main>{children}</main>
        </div>
        <GlobalStyle />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout