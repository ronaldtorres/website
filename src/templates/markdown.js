/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/layout"
import { graphql } from "gatsby"
import Meta from "../components/shared/meta"
import Helmet from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const entity = data.mdx
  const title = entity.frontmatter.title
  return (
    <Layout>
      <Meta
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
        <MDXRenderer>{entity.body}</MDXRenderer>
        <footer />
      </article>
      <footer />
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
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }
`
