import React from "react";
import Img from 'gatsby-image';

import "../components/style.css"
const projectsList = require('../components/projects.json')
        
class Projects extends React.Component {
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
            <div className="section" id="projects">
                <div className="section__left">
                    <h2><u>Projects</u></h2>
                    <p>Projects created in my free time. I'm currently working through them and cleaning them up, fixing bugs and improving usability.</p>
                </div>
                <div className="section__right" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="project__picker" id="leftPicker" onClick={() => this.decrementProject()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go back">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div >
                        <a id="projectLink" href={projectsList.projects[projectNumber].link}>
                            <Img style={{ maxWidth: `100%` }} fluid={eval(projectsList.projects[this.state.projectNumber].image)} alt={projectsList.projects[projectNumber].name} />
                        </a>
                        <div>
                            <p>{projectNumber}/{projectsList.projects.length}</p>
                            <h3 id="projectName">{projectsList.projects[projectNumber].name}</h3>
                            <p id="projectDesc">{projectsList.projects[projectNumber].description}</p>
                        </div>
                    </div>
                    <div className="project__picker" id="rightPicker" onClick={() => this.incrementProject()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go forward">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;