import React from "react"
import Layout from "../components/layout"
import SEO from "../components/shared/seo"
import { Link } from "gatsby"
import { format } from "timeago.js"

const Post = ({ post }) => {
  return (
    <div>
      <Link to={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
      </Link>
      <div>{format(post.fields.date)}</div>
      <p>{post.excerpt}</p>
    </div>
  )
}
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges.map(edge => <Post post={edge.node} />)
  return (
    <Layout>
      <SEO />
      <h1>Posts</h1>
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
          }
        }
      }
    }
  }
`
