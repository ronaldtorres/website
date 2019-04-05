import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql } from "gatsby"
import Avatar from "../components/shared/avatar"
import { Flex } from "rebass"

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <Meta title="About" />
      <Flex flexDirection="column" alignItems="start">
        <Avatar />
      </Flex>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/.+/about\\\\.md/" }) {
      html
    }
  }
`
