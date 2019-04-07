import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql } from "gatsby"
import { Box, Flex, Heading } from "rebass"

const Project = ({ project }) => {
  const iconClass = `devicon-${project.language}-plain`
  return (
    <Box width="200px" p={2} m={2} style={{ textAlign: "center" }}>
      <a href={project.link} target="__blank">
        <Heading mb={2} color="main">
          <i class={iconClass} />
          <br />
          {project.name}
        </Heading>
      </a>
      <p>{project.description}</p>
    </Box>
  )
}

const OpenSourcePage = ({ data }) => {
  const projectEdges = data.allOpensourceYaml.edges
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
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center">
        {projectEdges.map((edge, index) => {
          return <Project key={index} project={edge.node} />
        })}
      </Flex>
    </Layout>
  )
}

export default OpenSourcePage

export const query = graphql`
  query OpenSourceQuery {
    allOpensourceYaml {
      edges {
        node {
          name
          description
          link
          language
        }
      }
    }
  }
`
