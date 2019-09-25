import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"

const SpeakingPage = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: { regex: "/.+/speaking\\\\.md/" }) {
        html
      }
    }
  `)
  const { markdownRemark } = data
  return (
    <Layout>
      <Meta
        title="Speaking"
        description="This page contains a list of talks that I've given at conferences and some talk proposals that I wrote up to give at any conference that might be interested"
        keywords={["speaking", "conferences", "ios", "swift", "ruby", "rails"]}
      />
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Layout>
  )
}

export default SpeakingPage
