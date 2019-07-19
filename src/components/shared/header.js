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
import { useStaticQuery, graphql, Link } from "gatsby"
import { Button } from "rebass"
import { flex, display, space } from "styled-system"
import theme from "../../utils/theme"

const Name = styled.h1`
  margin-bottom: 0px;
  border-bottom: none;
  text-align: center;
`

const Icon = ({ icon, url }) => {
  const style = {
    margin: "5px",
    height: "20px",
    width: "20px",
    color: theme.colors.dark,
  }
  return (
    <a href={url} target="__blank">
      <FontAwesomeIcon style={style} icon={icon} />
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
    <Box alignSelf="center">
      <Icon icon={faGithub} url={siteMetadata.links.github} />
      <Icon icon={faAt} url={siteMetadata.links.email} />
      <Icon icon={faTwitter} url={siteMetadata.links.twitter} />
      <Icon icon={faLinkedin} url={siteMetadata.links.linkedin} />
      <Icon icon={faStackOverflow} url={siteMetadata.links.stackoverflow} />
      <Icon icon={faSoundcloud} url={siteMetadata.links.soundcloud} />
      <Icon icon={faSpotify} url={siteMetadata.links.spotify} />
    </Box>
  )
}

const HoverButton = styled(Button)`
  ${flex}
`

const StyledFlex = styled(Flex)`
  ${display}
`

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
  let buttonStyle = {
    userSelect: "none",
  }
  return (
    <HoverButton m={[1, 2]} bg="main" style={buttonStyle}>
      {link}
    </HoverButton>
  )
}
const Sections = () => {
  return (
    <StyledFlex
      display={["none", "none", "flex"]}
      flexWrap="wrap"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <SectionButton title="About 👨‍💻" path="/about" />
      <SectionButton title="Books 📚" path="/books" />
      <SectionButton title="Speaking 🎤" path="/speaking" />
      <SectionButton title="Open Source 🐙" path="/open-source" />
      <SectionButton title="Wiki 📝" path="/wiki" />
    </StyledFlex>
  )
}

const StyledDescription = styled(Box)`
  ${display}
`

const Description = () => {
  const style = {
    textAlign: "center",
  }
  return (
    <StyledDescription py={[3]} style={style} display={["none", "block"]}>
      Software Engineer at{" "}
      <a href="https://shopify.com" style={{ textDecoration: "none" }}>
        <Span color="shopify">Shopify</Span>
      </a>{" "}
      🛍. I like building tools for developers and doing open source.
      <br />
      Mostly doing <Span color="ruby">Ruby</Span> &{" "}
      <Span color="swift">Swift</Span>, and sometimes{" "}
      <Span color="javascript">Javascript</Span>
    </StyledDescription>
  )
}

const StyledHeader = styled.header`
  ${space}
`

const NameLink = styled(Link)`
  color: ${theme.colors.dark};
  &:hover {
    text-decoration: none;
  }
`

const Header = ({ px }) => {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  }
  return (
    <StyledHeader px={px} style={headerStyle}>
      <Box mb={0}>
        <NameLink to="/">
          <Name>Pedro Piñera</Name>
        </NameLink>
      </Box>
      <Links />
      <Description />
      <Sections />
    </StyledHeader>
  )
}

export default Header
