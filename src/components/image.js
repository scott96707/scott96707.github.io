import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                githubMark: file(relativePath: { eq: "GitHub-Mark-Light-64px.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img fluid={data.githubMark.childImageSharp.fluid} style={{ width: `35px` }} alt="Github link" />
        }
    />
)

export default Image