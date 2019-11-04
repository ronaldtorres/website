import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image
const Avatar = () => {
  const {
    placeholderImage: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)
  return <Img fixed={fixed} />
}
export default Avatar
