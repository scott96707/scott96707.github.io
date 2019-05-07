import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const LinkedInImage = () => (
    <StaticQuery
        query={graphql`
            query {
                linkedIn: file(relativePath: { eq: "LinkedIn.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img fluid={data.linkedIn.childImageSharp.fluid} style={{ width: `96px`, height: `96px` }} alt="LinkedIn link" />
        }
    />
)

export default LinkedInImage