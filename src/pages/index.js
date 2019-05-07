import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Intro from "../components/intro"
import About from "../components/about"
import Projects from "../components/projects"
import Software from "../components/software"
import Contact from "../components/contact"

const ProjectsWrapper = styled.div`
${tw`flex flex-wrap justify-between mt-8`};
display: grid;
grid-gap: 4rem;
grid-template-columns: repeat(2, 1fr);
@media(max-width: 1200px) {
  grid-gap: 3rem;
}
@media (max-width: 900px) {
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
`

const IndexPage= () => {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `web developer`, `react`, `Scott Green`]} />
        <Header />
        <Intro />
        <div id="main">
        <About />
        <ProjectsWrapper>
          <Projects />  
        </ProjectsWrapper>
        <Software />
        <Contact />
      </div>
    </Layout>
  )
}
export default IndexPage