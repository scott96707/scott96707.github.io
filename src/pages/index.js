import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import Intro from "../sections/intro"
import About from "../sections/about"
import Projects from "../sections/projects"
import Software from "../sections/software"
import Contact from "../sections/contact"

// Elements
import Inner from '../elements/inner'
import { Title, BigTitle, SubTitle } from '../elements/titles'

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`
const AboutSub = styled.span`
${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

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
        <BigTitle>
          Scott Green
        </BigTitle>
        <SubTitle>
          Web Developer
        </SubTitle>
        <About>
          <Title></Title>
          <AboutHero>
            <AboutSub>
              Web developer/javascript programmer located in Denver, CO
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I'm currently sharpening my web design skills by reworking this portfolio page.
            Redesigning it with Gatsby and React, learning a lot from the LekoArts template
            site: https://cara.lekoarts.de/
          </AboutDesc>
        </About>
        <ProjectsWrapper>
          <Title>Projects</Title>
          <Projects />  
        </ProjectsWrapper>
        <Title>Software</Title>
        <Software />
        <Title>Contact</Title>
        <Contact />
    </Layout>
  )
}
export default IndexPage