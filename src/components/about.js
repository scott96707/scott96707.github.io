import React from "react";
import ProfileImage from './profileimage'

const About = () => {
    return (
        <div className="section" id="about">
            <div className="section__left">
                <h1>About</h1>
                <p>I'm a Denver-based web developer who primarily uses React.</p>
                <p>I love to learn new skills and technologies.</p>
            </div>
            <div className="section__right">
                    <ProfileImage />
            </div>
        </div>
    )
}

export default About;
