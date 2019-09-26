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

const Icon = ({ icon, url }) => {
  return (
    <a href={url} target="__blank">
      <FontAwesomeIcon
        size="20px"
        fixedWidth
        sx={{
          width: "20px",
          height: "20px",
          margin: "5px",
          color: "dark",
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
      <Icon icon={faGithub} url={siteMetadata.links.github} />
      <Icon icon={faAt} url={siteMetadata.links.email} />
      <Icon icon={faTwitter} url={siteMetadata.links.twitter} />
      <Icon icon={faLinkedin} url={siteMetadata.links.linkedin} />
      <Icon icon={faStackOverflow} url={siteMetadata.links.stackoverflow} />
      <Icon icon={faSoundcloud} url={siteMetadata.links.soundcloud} />
      <Icon icon={faSpotify} url={siteMetadata.links.spotify} />
    </div>
  )
}

const SectionButton = ({ title, url, path }) => {
  const linkStyle = {
    textDecoration: "none",
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
        bg: "accent",
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
    <div sx={{ py: 3, display: ["none", "block"], textAlign: "center" }}>
      Software Engineer at{" "}
      <a href="https://shopify.com" sx={{ textDecoration: "none" }}>
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

const Header = ({ px }) => {
  return (
    <header
      sx={{
        px: px,
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
      }}
    >
      <div sx={{ mb: 0 }}>
        <Link
          sx={{ color: "dark", "&:hover": { textDecoration: "none" } }}
          to="/"
        >
          <h1
            sx={{
              marginBottom: "0px",
              borderBottom: "none",
              textAlign: "center",
            }}
          >
            Pedro Piñera
          </h1>
        </Link>
      </div>
      <Links />
      <Description />
      <Sections />
    </header>
  )
}

export default Header
