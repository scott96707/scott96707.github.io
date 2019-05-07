import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StarWars = () => (
    <StaticQuery
        query={graphql`
            query {
                starWars: file(relativePath: { eq: "starTours.png" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img fluid={data.starWars.childImageSharp.fluid} style={{ width: `100%` }}  alt="Profile Pic" />
        }
    />
)

export default StarWars;