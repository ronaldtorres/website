import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { Link } from "gatsby"
import { space } from "styled-system"
import styled from "styled-components"

const PostTitle = styled.h2`
  ${space}
`

const PostArticle = styled.article`
  ${space}
`

const Post = ({ post }) => {
  return (
    <PostArticle mb={5}>
      <header>
        <PostTitle mb={1}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </PostTitle>
        <small>{post.fields.date}</small>
      </header>
      <p>{post.frontmatter.excerpt}</p>
    </PostArticle>
  )
}
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map((edge, index) => (
    <Post key={index} post={edge.node} />
  ))
  return (
    <Layout>
      <Meta />
      {Posts}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            date
            slug
          }
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`
