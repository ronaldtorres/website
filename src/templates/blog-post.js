import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/shared/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        keywords={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <footer />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        excerpt
      }
    }
  }
`
