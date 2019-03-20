import React from "react"
import Layout from "../components/layout"
import SEO from "../components/shared/seo"
import { graphql } from "gatsby"

const BooksPage = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <SEO
        title="Books"
        description="Page where I keep track of all the books that I've read"
        keywords={["books", "reading"]}
      />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default BooksPage

export const query = graphql`
  query BooksPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/.+/books\\\\.md/" }) {
      html
    }
  }
`
