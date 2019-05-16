import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql } from "gatsby"

const WikiItem = ({ wiki }) => {
  return (
    <li>
      <b>{wiki.title}:</b> <span>{wiki.excerpt}</span>
    </li>
  )
}

const WikiPage = ({ data }) => {
  const wikiEdges = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Meta
        title="Wiki"
        description="This page contains some write-ups with ideas, notes, and knowledge that thought people might find useful."
        keywords={["wiki", "pedro", "swift"]}
      />
      <div>
        <h1>Wiki</h1>
        <p>
          This wiki page is a space for me to share ideas, lessons and notes
          that I come up with:
        </p>
        <ul>
          {wikiEdges.map((edge, index) => {
            return <WikiItem key={index} wiki={edge.node.frontmatter} />
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default WikiPage

export const query = graphql`
  query WikiQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/wiki/.+\\\\.md/" } }
      sort: { order: DESC, fields: [fields___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            excerpt
            tags
          }
        }
      }
    }
  }
`
