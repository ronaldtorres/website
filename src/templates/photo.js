/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Meta from "../components/shared/meta"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
import NumberBadge from "../components/shared/number-badge"

export default ({ data, pageContext }) => {
  return (
    <Layout>
      {/* <Meta
        title={title}
        keywords={entity.frontmatter.tags}
        description={entity.frontmatter.excerpt}
      />
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${entity.fields.slug}twitter-card.jpg`}
        />
      </Helmet>
      <article>
        <Styled.h1>{title}</Styled.h1>
        {dateDay && dateMonth && (
          <div sx={{ display: "flex", fontSize: 4, mb: 3 }}>
            <NumberBadge number={dateDay} size={[40]} />{" "}
            <b sx={{ ml: 2 }}>{dateMonth}</b>
          </div>
        )}
        <MDXRenderer>{entity.body}</MDXRenderer>
        <footer />
      </article> */}
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         siteUrl
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       fields {
//         slug
//         date
//       }
//       body
//       frontmatter {
//         title
//         tags
//         excerpt
//       }
//     }
//   }
// `
