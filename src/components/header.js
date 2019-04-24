import { a } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const Header = () => (
  <nav>
    <ul
      className="navbar__list"
      style={{
        
      }}
    >
      <li style={{ margin: 0 }}>
        <a href="#home" style={{ color: `white`, textDecoration: `none` }} >
          Home
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#about" style={{ color: `white`, textDecoration: `none` }} >
          About
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#projects" style={{ color: `white`, textDecoration: `none` }} >
          Projects
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#contactme" style={{ color: `white`, textDecoration: `none` }} >
          Contact Me
        </a>
      </li>
      <li style={{ margin: 0 }}>
          <a href="http://github.com/scott96707" style={{ color: `white`, textDecoration: `none` }} >
            Github
          </a>
      </li>
    </ul>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header