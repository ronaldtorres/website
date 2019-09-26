import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Project = ({ project }) => {
  return (
    <article>
      <h2 color="main">{project.frontmatter.name}</h2>
      <ul>
        <li>
          <b>State:</b> {project.frontmatter.state}
        </li>
        <li>
          <b>Programming language:</b> {project.frontmatter.language}
        </li>
        <li>
          <b>Repository:</b>{" "}
          <a href={project.frontmatter.link}>{project.frontmatter.link}</a>
        </li>
      </ul>
      <MDXRenderer>{project.body}</MDXRenderer>
    </article>
  )
}

const OpenSourcePage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/open-source/.+\\\\.md/" } }
        sort: { order: ASC, fields: [fields___date] }
      ) {
        edges {
          node {
            frontmatter {
              name
              link
              language
              state
            }
            body
          }
        }
      }
    }
  `)
  const projectEdges = data.allMdx.edges
  return (
    <Layout>
      <Meta
        title="Open source"
        description="Check out the open source projects that I'm currently maintaining or maintained in the past."
        keywords={["github", "open source", "projects", "swift", "rails"]}
      />
      <h1>Open Source</h1>
      <p>
        Most of my software projects are designed and developed in the open and
        published under my GitHub username or organizations created for the
        purpose of the project. I believe sharing is a great asset the software
        industry has, and we should strive to keep it alive.
      </p>
      <p>
        Working on open source software is not my full time job nor a source of
        income to me. For that reason, don't expect me to provide full-time
        support on those projects <i>(I'll do my best though)</i>.{" "}
        <b>I'll likely work on tasks that I find challenging or motivational</b>
        .
      </p>
      <p>
        If you would like to get involved in any of the projects or take
        ownership to drive them forward don't hesitate to ping me. Love for
        software is always welcome and encouraged.
      </p>
      <p>
        Below you'll find the projects that I'm proud of maintaining or having
        maintained.
      </p>
      <div>
        {projectEdges.map((edge, index) => {
          return <Project key={index} project={edge.node} />
        })}
      </div>
    </Layout>
  )
}

export default OpenSourcePage
