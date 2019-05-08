import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/layout.jsx'
import ProjectCard from '../components/projectcard.jsx'

// Elements
import Inner from '../elements/inner.jsx'
import { Title, BigTitle, SubTitle } from '../elements/titles.jsx'

// Sections
import Hero from '../sections/hero.jsx'
import About from "../sections/about.jsx"
import Projects from "../sections/projects.jsx"
import Contact from "../sections/contact.jsx"

import avatar from '../images/superProfessional.jpeg'
import linkedin from '../images/LinkedIn.png'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`
const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`
const LinkedInImage = styled.img`
  ${tw` w-32 xl:w-48 shadow-lg h-auto`};
`

const IndexPage= () => {
    return (
      <>
        <Layout />
        <Parallax pages={5}>
          <Hero offset={0}>
            <BigTitle>
              Scott Green
            </BigTitle>
            <SubTitle>
              Web Developer
            </SubTitle>
          </Hero>
          <About offset={1}>
            <Title>About</Title>
            <AboutHero>
            <Avatar src={avatar} alt="Scott Green" />
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
            <Projects offset={2}>
                <Title>Projects</Title>
              <ProjectsWrapper>
                  <ProjectCard
                      title="FaceRecognition App"
                      link="https://facerecognitionfrontend.herokuapp.com/"
                      bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
                      >
                      Uses React and Node.js with the Clarifai face recognition API to identify human faces from input images.
                      </ProjectCard>

                      <ProjectCard
                      title="StarWars App"
                      link="https://starwarscards.herokuapp.com/"
                      bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
                      >
                      Imports data from the free Star Wars API, displaying planets on separate cards which can be flipped to display more data with a click. Uses React.
                    </ProjectCard>

              </ProjectsWrapper>
          </Projects>  
          <Contact offset={4}>
          <Inner>
            <Title>Get in touch</Title>
            <ContactText>
              Feel free to reach out to me through Linked In:
            </ContactText>
              <a href="https://linkedin.com/in/scott96707">
              <LinkedInImage src={linkedin} alt="Scott Green" />
              </a>
          </Inner>
          <Footer>
            <a href="https://github.com/scott96707">Github Repository</a>
          </Footer>
        </Contact>
      </Parallax>
    </>
  )
}
export default IndexPage