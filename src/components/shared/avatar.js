import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image
const Avatar = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fixed={data.placeholderImage.childImageSharp.fixed}
        style={{
          borderRadius: "150px",
        }}
      />
    )}
  />
)
export default Avatar
