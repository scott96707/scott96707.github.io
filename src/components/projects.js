import React from "react";
import Image from "./image.js"
import "./style.css"

let projectsList = require('./projects.json');

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectNumber: 0,
        };
    }

componentDidMount() {
    
}

    componentDidUpdate() {
        document.getElementById("projectDesc").innerHTML = projectsList.projects[this.state.projectNumber].description;
        document.getElementById("projectName").innerHTML = projectsList.projects[this.state.projectNumber].name;
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
        return (
            <div className="section" id="projects">
                <div className="right" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div className="project__picker" id="leftPicker" onClick={this.decrementProject}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go back">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                    <div style={{ width: `25%`, marginBottom: `1.45rem` }}>
                        <p>{this.state.projectNumber}</p>
                        <a id="projectLink" href={projectsList.projects[this.state.projectNumber].link}>
                            <Image />
                        </a>
                        <p id="projectName">{projectsList.projects[this.state.projectNumber].name}</p>
                    </div>
                    <div className="project__picker" id="rightPicker" onClick={this.incrementProject}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" title="go forward">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </div>
                </div>
                <div className="left">
                    <h1><u>Projects</u></h1>
                    <p id="projectDesc">{projectsList.projects[this.state.projectNumber].description}</p>
                </div>
            </div>
        )
    }
}

export default Projects;