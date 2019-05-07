import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfileImage = () => (
    <StaticQuery
        query={graphql`
            query {
                profileImage: file(relativePath: { eq: "superProfessional.jpeg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => 
            <Img fluid={data.profileImage.childImageSharp.fluid} style={{ width: `100%` }}  alt="Profile Pic" />
        }
    />
)

export default ProfileImage;