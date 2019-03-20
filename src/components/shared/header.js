import React from "react"
import { Box, Flex } from "rebass"
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
import Span from "./span"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"
import { Button } from "rebass"
import { flex } from "styled-system"

const Name = styled.h1`
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='24' height='29' viewport='0 0 100 100' style='fill:black;font-size:14px;'><text y='50%'>🚀</text></svg>")
      16 0,
    auto; /*emojicursor.app*/
  margin-bottom: 0px;
  text-align: center;
`

const Icon = ({ icon, url }) => {
  const style = {
    margin: "5px",
  }
  return (
    <a href={url} target="__blank">
      <FontAwesomeIcon style={style} icon={icon} />
    </a>
  )
}

const Links = () => {
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <Box alignSelf="center">
          <Icon icon={faGithub} url={data.site.siteMetadata.links.github} />
          <Icon icon={faAt} url={data.site.siteMetadata.links.email} />
          <Icon icon={faTwitter} url={data.site.siteMetadata.links.twitter} />
          <Icon icon={faLinkedin} url={data.site.siteMetadata.links.linkedin} />
          <Icon
            icon={faStackOverflow}
            url={data.site.siteMetadata.links.stackoverflow}
          />
          <Icon
            icon={faSoundcloud}
            url={data.site.siteMetadata.links.soundcloud}
          />
          <Icon icon={faSpotify} url={data.site.siteMetadata.links.spotify} />
        </Box>
      )}
    />
  )
}

const HoverButton = styled(Button)`
  ${flex}
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: box-shadow, transform;
  transition-property: box-shadow, transform;
  :hover,
  :focus,
  :active {
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

const SectionButton = ({ title, url, path }) => {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    ":hover, :link, :visited": {
      color: "white",
    },
  }
  let link
  if (url) {
    link = (
      <a href={url} target="__blank" style={linkStyle}>
        {title}
      </a>
    )
  } else {
    link = (
      <Link to={path} style={linkStyle}>
        {title}
      </Link>
    )
  }
  return (
    <HoverButton m={[1, 2]} bg="main" flex="1">
      {link}
    </HoverButton>
  )
}
const Sections = () => {
  return (
    <Flex
      backgroundColor="secondary"
      flex="1"
      flexWrap="wrap"
      alignItems={["stretch", "stretch", "stretch"]}
      flexDirection={["column", "column", "row"]}
    >
      <SectionButton title="Blog 📝" path="/" />
      <SectionButton title="About 👨‍💻" path="/about" />
      <SectionButton title="Books 📚" path="/books" />
      <SectionButton title="Speaking 🎤" path="/speaking" />
      <SectionButton title="Tuist 📱" url="https://tuist.io" />
    </Flex>
  )
}

const Description = () => {
  const style = {
    textAlign: "center",
  }
  return (
    <Box py={[3]} style={style}>
      Software Engineer at{" "}
      <a href="https://shopify.com" style={{ textDecoration: "none" }}>
        <Span color="shopify">Shopify</Span>
      </a>{" "}
      🛍. I like building tools for developers and doing open source.
      <br />
      Mostly doing <Span color="ruby">Ruby</Span> &{" "}
      <Span color="swift">Swift</Span>, and sometimes{" "}
      <Span color="javascript">Javascript</Span>
    </Box>
  )
}

const Header = () => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  }
  return (
    <header style={headerStyle}>
      <Box mb={0}>
        <Name>Pedro Piñera</Name>
      </Box>
      <Links />
      <Description />
      <Sections />
    </header>
  )
}

export default Header
