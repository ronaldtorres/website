import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import Tags from "../components/shared/tags"
import { Link, graphql } from "gatsby"
import { space } from "styled-system"
import { Box, Flex } from "rebass"
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
        <div>{post.fields.date}</div>
        <Tags tags={post.frontmatter.tags} />
      </header>
      <p>{post.frontmatter.excerpt}</p>
    </PostArticle>
  )
}

const Footer = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/blog/${(currentPage - 1).toString()}`
  const nextPage = `/blog/${(currentPage + 1).toString()}`

  return (
    <Flex flex="1" flexDirection="row" justifyContent="space-between">
      {!isFirst && (
        <Box>
          <Link to={prevPage}>Previous page</Link>
        </Box>
      )}
      {!isLast && (
        <Box>
          <Link to={nextPage}>Next page</Link>
        </Box>
      )}
    </Flex>
  )
}

const BlogList = ({
  pageContext,
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
      <Footer {...pageContext} />
    </Layout>
  )
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { order: DESC, fields: [fields___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          fields {
            date
            slug
          }
          frontmatter {
            tags
            title
            excerpt
          }
        }
      }
    }
  }
`
