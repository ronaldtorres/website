/** @jx jsx */
import { jsx } from "theme-ui"

import React from "react"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { Timeline } from "gatsby-theme-micro-blog"

const MicroBlogPage = () => {
  return (
    <Layout>
      <Meta
        title="Micro blog"
        description="This page contains tiny posts with thoughts, ideas, reflections, that are not long enough to justify a blog post"
      />
      <Timeline />
    </Layout>
  )
}

export default MicroBlogPage
