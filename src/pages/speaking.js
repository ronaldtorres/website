import { useColorMode } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const SpeakingPage = () => {
  const { mdx } = useStaticQuery(graphql`
    {
      mdx(fileAbsolutePath: { regex: "/.+/speaking\\\\.md/" }) {
        body
      }
    }
  `)
  const [, setColorMode] = useColorMode()
  setColorMode("speaking")
  return (
    <Layout>
      <Meta
        title="Speaking"
        description="This page contains a list of talks that I've given at conferences and some talk proposals that I wrote up to give at any conference that might be interested"
        keywords={["speaking", "conferences", "ios", "swift", "ruby", "rails"]}
      />
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  )
}

export default SpeakingPage
