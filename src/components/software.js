import React from "react";

const Software = () => {
    return (
    <div className="section">
        <div className="section__left">
            <h2>Technologies</h2>
            <p>Software I'm familiar with.</p>
        </div>
        <div className="section__right" id="software__list">
            <div className="languages">
                <h4>Languages</h4>
                <ul>
                    <li>Javascript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
            </div>
            <div className="frameworks">
                <h4>Framework</h4>
                <ul>
                    <li>React</li>
                </ul>
            </div>
            <div className="devtools">
                <h4>Devtools</h4>
                <ul>
                    <li>Git</li>
                    <li>Gatsby</li>
                    <li>npm</li>
                </ul>
            </div>
            <div className="concepts">
                <h4>Concepts</h4>
                <ul>
                    <li>Agile</li>
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Software;