/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const {
    site: {
      siteMetadata: {
        links: { github, twitter },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          links {
            github
            twitter
          }
        }
      }
    }
  `)
  const feed = "/feed.xml"
  return (
    <footer sx={{ flex: 1 }}>
      <div
        sx={{
          display: "flex",
          alignSelf: "stretch",
          flexDirection: "row",
          alignItems: "flex-start",
          paddingBottom: 5,
          paddingTop: 4,
        }}
      >
        <div sx={{ mr: 1 }}>
          <a href={twitter} target="__blank">
            twitter
          </a>
        </div>
        •
        <div sx={{ mx: 1 }}>
          <a href={github} target="__blank">
            github
          </a>
        </div>
        <div sx={{ flex: 1 }} />
        <a href={feed} target="__blank">
          rss
        </a>
      </div>
    </footer>
  )
}
