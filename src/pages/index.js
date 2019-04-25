import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Software from "../components/software"

import "../components/style.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `web developer`, `react`, `Scott Green`]} />
      <Header />
      <Intro />
      <About />
      <Projects />  
      <Software />
    </Layout>
  )
}
export default IndexPage

export const image = graphql`
query {
  imageOne: file(relativePath: { eq: "FaceRecognition.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "gatsby-icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`