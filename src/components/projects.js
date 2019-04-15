import React  from "react";
import Image from "./image.js"

const Projects = () => {
    return (
        <div>
            <p>Projects</p>
            <div style={{display: `inline-flex`}}>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                </svg>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                    <Image />
                </div>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="4" fill="blue" />
                </svg>
            </div>
        </div>
    )
}

export default Projects;