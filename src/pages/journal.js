/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { Timeline } from "gatsby-theme-micro-blog"

const JournalPage = () => {
  return (
    <Layout>
      <Meta
        title="Journal"
        description="This page contains tiny posts with thoughts, ideas, reflections, that are not long enough to justify a blog post"
      />
      <Styled.h1>Journal</Styled.h1>
      <p>
        Social networks come and go, and I really like posting social media. In
        this section, I’m trying to mirror the stuff I post to social networks.
      </p>
      <Timeline />
    </Layout>
  )
}

export default JournalPage
