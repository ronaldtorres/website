import React from "react"
import Layout from "../components/layout"
import SEO from "../components/shared/seo"
import { graphql } from "gatsby"
import Avatar from "../components/shared/avatar"
import { Flex } from "rebass"

const AboutPage = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <SEO title="About" />
      <Flex flexDirection="column" alignItems="center" p={4}>
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
