/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faStackOverflow,
  faSoundcloud,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql, Link } from "gatsby"
import ColorModeButton from "./color-mode-button"

const Icon = ({ icon, url, label }) => {
  return (
    <a href={url} target="__blank" aria-label={label}>
      <FontAwesomeIcon
        size="sm"
        fixedWidth
        sx={{
          width: "15px",
          height: "15px",
          fontSize: "15px",
          margin: "5px",
          color: "text",
        }}
        icon={icon}
      />
    </a>
  )
}

const Links = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            links {
              linkedin
              soundcloud
              github
              email
              twitter
              spotify
              stackoverflow
            }
          }
        }
      }
    `
  )
  return (
    <div sx={{ alignSelf: "center" }}>
      <Icon
        icon={faGithub}
        url={siteMetadata.links.github}
        label="GitHub profile"
      />
      <Icon icon={faAt} url={siteMetadata.links.email} label="Send an email" />
      <Icon
        icon={faTwitter}
        url={siteMetadata.links.twitter}
        label="Twitter profile"
      />
      <Icon
        icon={faLinkedin}
        url={siteMetadata.links.linkedin}
        label="LinkedIn profile"
      />
      <Icon
        icon={faStackOverflow}
        url={siteMetadata.links.stackoverflow}
        label="Stackoverflow profile"
      />
      <Icon
        icon={faSoundcloud}
        url={siteMetadata.links.soundcloud}
        label="SoundCloud profile"
      />
      <Icon
        icon={faSpotify}
        url={siteMetadata.links.spotify}
        label="Spotify profile"
      />
    </div>
  )
}

const SectionButton = ({ title, url, path }) => {
  const linkStyle = {
    fontFamily: "'Rosario',sans-serif",
    color: "white",
    ":hover, :link, :visited": {
      color: "white",
    },
  }
  let link
  if (url) {
    link = (
      <a href={url} target="__blank" sx={linkStyle}>
        {title}
      </a>
    )
  } else {
    link = (
      <Link to={path} sx={linkStyle}>
        {title}
      </Link>
    )
  }
  return (
    <div
      sx={{
        userSelect: "none",
        bg: "primary",
        margin: [1, 2],
        px: 2,
        py: 1,
        borderRadius: 1,
      }}
    >
      {link}
    </div>
  )
}
const Sections = () => {
  return (
    <div
      sx={{
        display: ["none", "none", "flex"],
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <SectionButton title="Journal 📝" path="/journal" />
      <SectionButton title="About 👨‍💻" path="/about" />
      <SectionButton title="Speaking 🎤" path="/speaking" />
      <SectionButton title="Open Source 🐙" path="/open-source" />
      <SectionButton title="Wiki 📝" path="/wiki" />
      <SectionButton title="Books 📚" path="/books" />
    </div>
  )
}

const Description = () => {
  return (
    <div
      sx={{
        py: 3,
        display: ["none", "block"],
        textAlign: "center",
      }}
    >
      Software Engineer at{" "}
      <a href="https://shopify.com">
        <span sx={{ color: "shopify" }}>Shopify</span>
      </a>{" "}
      🛍. I like building tools for developers and doing open source.
      <br />
      Mostly doing <span sx={{ color: "ruby" }}>Ruby</span> &{" "}
      <span sx={{ color: "swift" }}>Swift</span>, and sometimes{" "}
      <span sx={{ color: "javascript" }}>Javascript</span>
    </div>
  )
}

const Header = () => {
  return (
    <header
      sx={{
        px: [4, 5, 6],
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div
        sx={{
          mb: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: ["center", "center", "space-between"],
        }}
      >
        <div sx={{ width: 110, display: ["none", "none", "block"] }} />
        <Link
          sx={{ color: "text", "&:hover": { textDecoration: "none" } }}
          to="/"
        >
          <h1
            sx={{
              mt: [2, 2, 4],
              marginBottom: "0px",
              borderBottom: "none",
              textAlign: "center",
            }}
          >
            Pedro Piñera
          </h1>
        </Link>
        <ColorModeButton
          style={{ width: 110, display: ["none", "none", "block"] }}
        />
      </div>
      <Links />
      <Description />
      <Sections />
    </header>
  )
}

export default Header
