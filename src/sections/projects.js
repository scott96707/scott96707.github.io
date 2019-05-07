import React from 'react'
import ProjectCard from '../components/projectcard'
import Content from '../elements/content'

const Projects = () => {
    return (
        <Content>

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
            Displays cards of information on the Star Wars universe. Pulls data from the free Star Wars API.
            </ProjectCard>
            
        </Content>
    )
}

export default Projects;