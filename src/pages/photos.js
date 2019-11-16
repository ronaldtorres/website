/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import BodyMargin from "../components/shared/body-margin"

const PhotosPage = () => {
  const [, setColorMode] = useColorMode()
  setColorMode("photos")

  const {
    allFile: { group: photos },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "photos" } }
        sort: { order: DESC, fields: [dir, name] }
      ) {
        group(field: dir) {
          nodes {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
                presentationWidth
              }
            }
            childMdx {
              excerpt
            }
          }
        }
      }
    }
  `)
  return (
    <Layout withMargin={false}>
      <Meta
        title="Photos"
        description="This page contains a public collection of public photos that I've taken."
        keywords={["photos", "gallery", "instagram"]}
      />
      <BodyMargin>
        <Styled.h1>Photos</Styled.h1>
        <Styled.p>
          This page contains a compilation of photos that I've taken. No likes,
          views, or any other attention-driven features that defeat the
          important element here, the photo itself.
        </Styled.p>
      </BodyMargin>
      <div sx={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo, index) => {
          return (
            <Img
              fluid={photo.nodes[1].childImageSharp.fluid}
              key={index}
              sx={{ width: ["25%", "30%", "30%"] }}
              alt={photo.nodes[0].childMdx.excerpt}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default PhotosPage
