/** @jsx jsx */
import { jsx } from "theme-ui"

import { useState } from "react"
import { Link } from "gatsby"

const Button = ({ onClick }) => {
  const stripeStyle = { height: "4px", bg: "dark" }
  return (
    <div
      sx={{
        height: "20px",
        width: "20px",
        cursor: "pointer",
        bg: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
      }}
      onClick={onClick}
    >
      <div sx={stripeStyle} />
      <div sx={stripeStyle} />
      <div sx={stripeStyle} />
    </div>
  )
}

const MenuButton = ({ path, alt, children }) => {
  return (
    <div>
      <Link sx={{ color: "white" }} to={path} alt={alt}>
        {children}
      </Link>
    </div>
  )
}

const Menu = () => {
  return (
    <div
      sx={{
        display: "flex",
        padding: 3,
        bg: "dark",
        color: "white",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MenuButton path="/" alt="Home page">
        Home
      </MenuButton>
      <MenuButton path="/journal" alt="Journal">
        Journal
      </MenuButton>
      <MenuButton path="/about" alt="Read more about Pedro Piñera">
        About
      </MenuButton>
      <MenuButton
        path="/speaking"
        alt="It contains a list of talks that Pedro has given in some conferences, as well as a list of upcoming talks."
      >
        Speaking
      </MenuButton>
      {/* <MenuButton
        path="/open-source"
        alt="This page contains a list of open source projects that Pedro is maintainer of"
      >
        Open Source
      </MenuButton> */}
      <MenuButton
        path="/wiki"
        alt="It contains a series of documents that whose content don't fit the blog post format"
      >
        Wiki
      </MenuButton>
    </div>
  )
}

export default () => {
  const [isOpened, setIsOpened] = useState(false)
  const onClick = () => {
    setIsOpened(!isOpened)
  }
  return (
    <div sx={{ display: ["block", "block", "none"] }}>
      {isOpened && <Menu />}
      <div sx={{ display: "flex", padding: 3 }}>
        <Button onClick={onClick} />
      </div>
    </div>
  )
}
