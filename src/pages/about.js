/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

const AboutPage = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "about.mdx" }) {
        relativePath
        childMdx {
          body
        }
      }
    }
  `)
  const [_, setColorMode] = useColorMode()
  setColorMode("about")
  return (
    <Layout>
      <Meta title="About" />
      <div sx={{ flexDirection: "column", alignItems: "vertical" }}></div>
      <MDXRenderer>{file.childMdx.body}</MDXRenderer>
    </Layout>
  )
}

export default AboutPage
