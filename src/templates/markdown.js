import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Meta from "../components/shared/meta"
import Helmet from "react-helmet"

export default ({ data }) => {
  const post = data.markdownRemark
  const url = `${data.site.siteMetadata.siteUrl}${
    data.markdownRemark.fields.slug
  }`
  const title = post.frontmatter.title
  const author = data.site.siteMetadata.author
  return (
    <Layout>
      <Meta
        title={title}
        keywords={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
      />
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={`${data.site.siteMetadata.siteUrl}${
            data.markdownRemark.fields.slug
          }twitter-card.jpg`}
        />
      </Helmet>
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }
`
