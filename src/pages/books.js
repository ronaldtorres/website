import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"

const BooksPage = () => {
  const { markdownRemark } = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/.+/books\\\\.md/" }) {
        html
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
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default BooksPage
