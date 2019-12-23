/** @jsx jsx */
import { jsx, Styled, useColorMode } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const WikiItem = ({ wiki }) => {
  return (
    <li>
      <Link to={wiki.fields.slug}>
        <b>{wiki.frontmatter.title}:</b>
      </Link>{" "}
      <span>
        {wiki.frontmatter.excerpt ? wiki.frontmatter.excerpt : wiki.excerpt}
      </span>
    </li>
  )
}

const WikiPage = () => {
  const [, setColorMode] = useColorMode()
  setColorMode("wiki")
  const {
    allMdx: { edges: wikiEdges },
  } = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/wiki/.+\\\\.md/" } }
        sort: { order: DESC, fields: [fields___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            excerpt
            frontmatter {
              title
              excerpt
              tags
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Meta
        title="Wiki"
        description="This page contains some write-ups with ideas, notes, and knowledge that thought people might find useful."
        keywords={["wiki", "pedro", "swift"]}
      />
      <div>
        <Styled.h1>Wiki</Styled.h1>
        <p>
          This page is a space for me to share ideas, lessons and notes that I
          come up with:
        </p>
        <ul>
          {wikiEdges.map((edge, index) => {
            return <WikiItem key={index} wiki={edge.node} />
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default WikiPage
