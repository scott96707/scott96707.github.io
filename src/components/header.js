import React from "react"
import PropTypes from "prop-types"
import Image from "./image"
import "./style.css"

const Header = () => (
  <nav>
    <ul className="navbar__list" >
      <li style={{ margin: 0 }}>
        <a href="#home">
          Home
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#about" >
          About
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li style={{ margin: 0 }}>
        <a href="#contact">
          Contact Me
        </a>
      </li>
      <li style={{ margin: 0 }}>
          <a href="http://github.com/scott96707" style={{ textDecoration: `none` }} >
            <Image />
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