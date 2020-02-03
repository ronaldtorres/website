/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import BodyMargin from "../components/shared/body-margin"
import { sortBy, groupBy, map } from "underscore"

const PhotosPage = () => {
  let {
    allFile: { nodes: photos },
  } = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
        nodes {
          relativeDirectory
          fields {
            slug
          }
          mobileImage: childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
          desktopImage: childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              presentationWidth
            }
          }
          childMdx {
            excerpt
          }
        }
      }
    }
  `)
  let groupedPhotos = groupBy(photos, photo => photo.relativeDirectory)
  let arrayedPhotos = map(groupedPhotos, (photo, timestamp) => ({
    timestamp: timestamp,
    photo: photo,
  }))
  let sortedPhotos = sortBy(arrayedPhotos, photo => -photo.timestamp)
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
        {sortedPhotos.map(item => {
          // We can change the fluid image based on the media query.
          const sources = [
            item.photo[1].mobileImage.fluid,
            {
              ...item.photo[1].desktopImage.fluid,
              media: `(min-width: 768px)`,
            },
          ]
          return (
            <a
              href={item.photo[0].fields.slug}
              sx={{ width: ["100%", "25%"] }}
              alt={item.photo[0].childMdx.excerpt}
              key={item.timestamp}
            >
              <Img fluid={sources} />
            </a>
          )
        })}
      </div>
    </Layout>
  )
}

export default PhotosPage
