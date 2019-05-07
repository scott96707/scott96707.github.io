import React from "react";
import Content from "../elements/content";
import Inner from "../elements/inner"

const About = ({ children }) => {
    return (
        <Content>
                <Inner>{children}</Inner>
        </Content>
    )
}

export default About;
