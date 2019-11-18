/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Meta from "../components/shared/meta"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
import NumberBadge from "../components/shared/number-badge"
import Img from "gatsby-image"

const Footer = ({ pageContext }) => {
  const prev = pageContext.prev
  const next = pageContext.next

  return (
    <div
      sx={{
        display: "flex",
        flex: 1,
        my: 5,
        alignItems: ["center", "center", "center"],
        flexDirection: ["column", "column", "row"],
        justifyContent: "space-between",
      }}
    >
      {prev && (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>Previous: </b>
          <Link to={prev.fields.slug}>{prev.childMdx.frontmatter.title}</Link>
        </div>
      )}
      {next && (
        <div
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <b>Next: </b>
          <Link to={next.fields.slug}>{next.childMdx.frontmatter.title}</Link>
        </div>
      )}
    </div>
  )
}

export default ({ data, pageContext }) => {
  const {
    allFile: { group: photo },
  } = data
  const childMdx = photo[0].nodes[0].childMdx
  const image = photo[0].nodes[1]

  let dateMonth
  let dateDay
  if (image.relativeDirectory) {
    const dateMoment = moment(parseInt(image.relativeDirectory) * 1000)
    dateMonth = dateMoment.format("MMMM YYYY")
    dateDay = dateMoment.format("D")
  }
  const keywords = childMdx.frontmatter.tags ? childMdx.frontmatter.tags : []

  const sources = [
    image.mobileImage.fluid,
    {
      ...image.desktopImage.fluid,
      media: `(min-width: 768px)`,
    },
  ]
  return (
    <Layout>
      <Meta
        title={childMdx.frontmatter.title}
        keywords={keywords}
        description={childMdx.excerpt}
      />
      <article>
        <header sx={{ mb: 4 }}>
          <Styled.h1>{childMdx.frontmatter.title}</Styled.h1>
          <Styled.h3 sx={{ mb: 3, display: "flex" }}>
            <NumberBadge
              number={dateDay}
              size={[26, 35]}
              fontSize={["16px", "20px"]}
            />{" "}
            <span sx={{ ml: 2 }}>{dateMonth}</span>
          </Styled.h3>
        </header>
        <div
          sx={{
            marginRight: 2,
            marginBottom: 1,
          }}
        >
          <span>Tagged with: </span>
          <span>
            <i>{childMdx.frontmatter.tags.join(", ")}</i>
          </span>
        </div>
        <MDXRenderer>{childMdx.body}</MDXRenderer>
        <Img fluid={sources} />
      </article>
      <Footer pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    allFile(filter: { fields: { slug: { eq: $slug } } }) {
      group(field: fields___slug) {
        nodes {
          mobileImage: childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
              presentationWidth
            }
          }
          desktopImage: childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
              presentationWidth
            }
          }
          relativeDirectory
          childMdx {
            frontmatter {
              tags
              title
            }
            excerpt
            body
          }
        }
      }
    }
  }
`
