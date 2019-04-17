import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Software from "../components/software"

import "../components/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `web developer`, `react`, `Scott Green`]} />
    <Header />
    <Intro />
    <About  />
    <Projects />
    <Software />
  </Layout>
)

export default IndexPage
