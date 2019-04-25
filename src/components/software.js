import React from "react";

const Software = () => {
    return (
    <div className="section">
        <div className="section__left">
            <h1>Technologies</h1>
        </div>
        <div className="section__right" id="software__list">
            <div className="languages">
                <h3>Languages</h3>
                <ul>
                    <li>Javascript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div className="frameworks">
                <h3>Framework</h3>
                <ul>
                    <li>React</li>
                </ul>
            </div>
            <div className="devtools">
                <h3>Devtools</h3>
                <ul>
                    <li>Git</li>
                    <li>NPM</li>
                    <li>Gatsby</li>
                </ul>
            </div>
            <div className="concepts">
                <h3>Concepts</h3>
                <ul>
                    <li>Agile</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Software;