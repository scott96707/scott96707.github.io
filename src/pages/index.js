import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Software from "../components/software"
import Contact from "../components/contact"

import "../components/style.css"
const projectsList = require("../components/projects.json")

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      projectNumber: 0,
    };
  }

  componentDidUpdate() {
    document.getElementById("projectDesc").textContent = projectsList.projects[this.state.projectNumber].description;
    document.getElementById("projectName").textContent = projectsList.projects[this.state.projectNumber].name;
    document.getElementById("projectLink").href = projectsList.projects[this.state.projectNumber].link;
  }

  incrementProject = () => {
    this.setState((state) => {
      if (this.state.projectNumber === projectsList.projects.length - 1) {
        return { projectNumber: 0 }
      } return { projectNumber: state.projectNumber + 1 }
    })
  }

  decrementProject = () => {
    this.setState((state) => {
      if (this.state.projectNumber === 0) {
        return { projectNumber: projectsList.projects.length - 1 }
      } return { projectNumber: state.projectNumber - 1 }
    })
  }

  render() {
    const { projectNumber } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `web developer`, `react`, `Scott Green`]} />
        <Header />
        <Intro />
        <About />

        <div className="section" id="projects">
          <div className="section__left" id="project__left">
            <h1><u>Projects</u></h1>
            <p>Work from my free time. I'm currently cleaning them up, fixing bugs and improving usability.</p>
          </div>

          <div className="section__right" id="project__section" >
            
              <a id="projectLink" href={projectsList.projects[projectNumber].link}>
                <div id="project__image" >
                  <div id="test">
                    <Img fluid={eval(projectsList.projects[this.state.projectNumber].image)} alt={projectsList.projects[projectNumber].name} />
                    </div>
                </div>
              </a>

                <div id="project__selector">
                  <div className="project__pickers" onClick={() => this.decrementProject()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go back">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </div>
                  <div style={{ display: `grid`, placeContent: `center`, fontSize: `14pt` }}>
                    <p style={{ margin: `0` }}>{projectNumber + 1} / {projectsList.projects.length}</p>
                  </div>
                  <div className="project__pickers" onClick={() => this.incrementProject()}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go forward">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </div>

                <div id="project__description" >
                  <h2 id="projectName">{projectsList.projects[projectNumber].name}</h2>
                  <p id="projectDesc">{projectsList.projects[projectNumber].description}</p>
                </div>
          </div>
        </div>

      <Software />
      <Contact />
    </Layout>
  )
}
}
export default IndexPage

export const image = graphql`
query {
  faceRecognition: file(relativePath: { eq: "FaceRecognition.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  portfolioPage: file(relativePath: { eq: "gatsby-icon.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  starWars: file(relativePath: { eq: "starTours.png" }) {
    childImageSharp {
      fluid(maxHeight: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`