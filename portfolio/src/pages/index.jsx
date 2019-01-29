import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

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

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Scott Green.
        </BigTitle>
        <Subtitle>I'm creating web experiences for the next generation of consumer-facing companies.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Face Recognition App"
            link="https://facerecognitionfrontend.herokuapp.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            `Register and submit an image URL. Human faces will be
            framed.
            React front-end, Node and Express w/ PostgreSQL back-end.`
          </ProjectCard>
          <ProjectCard
            title="Star Wars Cards"
            link="https://starwarscards.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            List of cards displaying Star Wars planet informtion.
            React front-end, uses free Star Wars API.
          </ProjectCard>
          <ProjectCard
            title="Stock Grapher"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            (Work in Progress) Displays stock information.
            Uses D3 for graphing, React front-end.
          </ProjectCard>
          {/* <ProjectCard
            title="Eagle"
            link="https://www.behance.net/gallery/38068151/Eagle"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          }
            A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard> */}
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Scott Green" />
          <AboutSub>
            
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Creative full stack developer looking to grow with a dedicated team. Enthusiastic to learn, spending my free time reading up on libraries and techniques. I am obsessed with surmounting engineering hurdles and hunting down pesky bugs. Over 5 years experience working in IT.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:scott96707@gmail.com">Hi</a> or find me on {' '}
            <a href="https://github.com/scott96707">Github</a>
          </ContactText>
        </Inner>
        <Footer>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
