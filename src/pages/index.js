/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Layout from "../components/layout"
import Meta from "../components/shared/meta"

const HomePage = () => {
  const projectStyle = { width: ["100%", "30%"] }
  return (
    <Layout>
      <Meta />
      <Styled.h1>Pedro Piñera</Styled.h1>
      <div sx={{ fontWeight: "bold" }}>
        <Styled.p>
          Engineering manager at{" "}
          <a
            href="https://shopify.com"
            target="__blank"
            sx={{
              textDecoration: "none",
              color: "inherit",
              ":hover,:focus": {
                color: "primary",
              },
            }}
          >
            Shopify
          </a>
          . Based in Berlin.
        </Styled.p>
      </div>

      <Styled.h2>Newsletter: Keep it simple</Styled.h2>
      <p>
        Honestly, I don't have a fixed topic about which I talk in the
        newsletter. I'm a curious person, so you might expect issues around
        topics that get me intrigued. Here are some that I find fascinating:{" "}
        <i>
          technology, open-source economy, surveillance capitalism, developer
          tooling, user experience, engineering management.
        </i>
      </p>
      <p>
        You can subscribe to the newsletter{" "}
        <a target="__blank" href="https://tinyletter.com/pepibumur">
          here
        </a>
        .
      </p>
      <p>
        <b>The newsletter goes out every Saturday morning (Berlin time).</b>
      </p>
      <Styled.h2>Projects</Styled.h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          flexWrap: "wrap",
        }}
      >
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/tuist/tuist"
            >
              Tuist
            </a>
          </Styled.h3>
          <Styled.p>
            Bootstrap, maintain, and interact with Xcode projects at any scale
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/tuist/xcodeproj"
            >
              XcodeProj
            </a>
          </Styled.h3>
          <Styled.p>
            A Swift library to Read, update, and write Xcode projects,
            workspaces, and schemes.
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://tuist.io/docs/architectures/microfeatures/"
            >
              Microfeatures
            </a>
          </Styled.h3>
          <Styled.p>An architecture for iOS applications</Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a sx={{ variant: "styles.navlink" }} href="https://angle.dev">
              Angle
            </a>
          </Styled.h3>
          <Styled.p>
            Test builds <i>(e.g. iOS apps)</i> in your local environment, and
            share them with the rest of the team to get their feedback ―{" "}
            <i>(work in progress)</i>
          </Styled.p>
        </div>
        <div sx={projectStyle}>
          <Styled.h3>
            <a
              sx={{ variant: "styles.navlink" }}
              href="https://github.com/logosapp"
            >
              Logos
            </a>
          </Styled.h3>
          <Styled.p>
            A platform to snapshot your interconnected thoughts and ideas and
            keep them alive journeying through them ― <i>(work in progress)</i>
          </Styled.p>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
