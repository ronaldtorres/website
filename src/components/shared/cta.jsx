/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Button as ThemUIButton } from "theme-ui"

const Wrapper = ({ title, children }) => {
  return (
    <div
      sx={{
        borderColor: "primary",
        color: "text",
        bg: "muted",
        borderWidth: 1.0,
        borderStyle: "solid",
        borderRadius: "10px",
        pb: 3,
        px: 3,
      }}
    >
      <header>
        <h3>{title}</h3>
      </header>
      <div>{children}</div>
    </div>
  )
}
const Newsletter = () => {
  return (
    <Wrapper title="Subscribe to my newsletter: Keep it simple">
      <div sx={{ mb: 3 }}>
        Every Saturday I send out a new issue of my newsletter where I talk
        about the things that I'm curious about:{" "}
        <i>
          technology, open-source economy, surveillance capitalism, developer
          tooling, user experience, engineering management.
        </i>
        <p>
          If you like my content, and would like to get more of it every
          Saturday in your inbox, you can subscribe clicking the button below.
        </p>
      </div>
      <Button title="Subscribe" to="https://tinyletter.com/pepibumur" />
    </Wrapper>
  )
}

const Button = ({ title, to }) => {
  return (
    <a href={to} target="__blank">
      <ThemUIButton mr={2} sx={{ ":hover": { cursor: "pointer" } }}>
        {title}
      </ThemUIButton>
    </a>
  )
}

const Sponsor = () => {
  return (
    <Wrapper title="Sponsor my work on GitHub">
      <div sx={{ mb: 3 }}>
        If you like my work and would like to support it, you can do it through
        the GitHub sponsors program which I'm port. A finantial support is a
        token of appreciation for the spare time that I've devoted into making
        all the content and open-source projects available to you.
      </div>
      <Button title="Sponsor" to="https://github.com/sponsors/pepibumur" />
    </Wrapper>
  )
}

export default () => {
  const randomBoolean = Math.random() >= 0.5
  return <footer>{randomBoolean ? <Newsletter /> : <Sponsor />}</footer>
}
