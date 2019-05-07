import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FaceRecognition = () => (
    <StaticQuery
        query={graphql`
            query {
                faceRecognition: file(relativePath: { eq: "FaceRecognition.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img fluid={data.faceRecognition.childImageSharp.fluid} style={{ width: `100%` }}  alt="Profile Pic" />
        }
    />
)

export default FaceRecognition;