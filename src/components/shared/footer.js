/** @jsx jsx */
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import BodyMargin from "./body-margin"

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
    <footer sx={{ bg: "muted", pb: 3 }}>
      <BodyMargin>
        <div
          sx={{
            display: "flex",
            flexDirection: ["column", "row", "row"],
            alignItems: "center",
          }}
        >
          <div>
            <h2>A bit about me</h2>
            <p>
              Hola 👋! I'm Pedro Piñera, a Spanish software developer living in
              Berlin. I work as an engineer manager of the mobile tooling team
              at{" "}
              <a href="https://shopify.com" target="__blank">
                Shopify
              </a>
              . I'm a highly passionate for open source, being{" "}
              <a href="https://tuist.io" target="__blank">
                Tuist
              </a>{" "}
              and{" "}
              <a href="https://github.com/tuist/xcodeproj" target="__blank">
                XcodeProj
              </a>{" "}
              the crafts that I'm most proud of. When I'm not coding or dumping
              my thoughts and learnings on this little corner in the Internet, I
              like to travel ✈️ and spend time with the family and friends.
            </p>
          </div>
          <div sx={{ m: 3 }}>
            <div
              sx={{ bg: "red", width: 100, height: 100, borderRadius: 50 }}
            ></div>
          </div>
        </div>
        <small>Copyright © Pedro Piñera, 2019</small>
      </BodyMargin>
    </footer>
  )
}
