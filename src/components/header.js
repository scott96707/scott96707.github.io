import { a } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `rebeccapurple`,
      height: `4vw`,
      width: `100%`,
      margin: `0`,
      padding: `0`,
    }}
  >
    <div
      style={{
        display: `inline-flex`,
        alignContent: `center`,
        justifyContent: `space-around`,
        width: `1vw`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <a
          href="#home"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Home
        </a>
      </h1>
      <h1 style={{ margin: 0 }}>
        <a
          href="#about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </a>
      </h1>
      <h1 style={{ margin: 0 }}>
        <a
          href="#projects"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Projects
        </a>
      </h1>
      <h1 style={{ margin: 0 }}>
        <a
          href="#contactme"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact Me
        </a>
      </h1>
      <h1 style={{ margin: 0 }}>
          <a
            href="http://github.com/scott96707"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Github
          </a>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header