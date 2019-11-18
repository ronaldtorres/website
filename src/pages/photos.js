/** @jsx jsx */
import { jsx, useColorMode, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
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
            fields {
              slug
            }
            mobileImage: childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_noBase64
                presentationWidth
              }
            }
            desktopImage: childImageSharp {
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
        <Styled.p>
          You can subscribe to my journal{" "}
          <Styled.a href="/photos.xml">RSS feed</Styled.a>.
        </Styled.p>
      </BodyMargin>
      <div sx={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo, index) => {
          // We can change the fluid image based on the media query.
          const sources = [
            photo.nodes[1].mobileImage.fluid,
            {
              ...photo.nodes[1].desktopImage.fluid,
              media: `(min-width: 768px)`,
            },
          ]
          return (
            <a
              href={photo.nodes[0].fields.slug}
              sx={{ width: ["100%", "25%"] }}
              alt={photo.nodes[0].childMdx.excerpt}
            >
              <Img fluid={sources} key={index} />
            </a>
          )
        })}
      </div>
    </Layout>
  )
}

export default PhotosPage
