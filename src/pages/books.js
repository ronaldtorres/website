import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BooksPage = () => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(fileAbsolutePath: { regex: "/.+/books\\\\.md/" }) {
        body
      }
    }
  `)
  return (
    <Layout>
      <Meta
        title="Books"
        description="Page where I keep track of all the books that I've read"
        keywords={["books", "reading"]}
      />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default BooksPage
