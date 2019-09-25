/** @jsx jsx */
import { jsx } from "theme-ui"

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
      <div sx={{ paddingTop: 4 }}>
        <Timeline />
      </div>
    </Layout>
  )
}

export default JournalPage
