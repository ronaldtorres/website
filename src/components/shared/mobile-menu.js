/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

import { useState, useRef } from "react"
import { Link } from "gatsby"
import ColorModeButton from "./color-mode-button"

const Button = ({ onClick }) => {
  const stripeStyle = { height: "4px", bg: "text" }
  return (
    <div
      tabIndex="0"
      sx={{
        height: "20px",
        width: "20px",
        cursor: "pointer",
        bg: "background",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-around",
      }}
      onKeyDown={onClick}
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
const Menu = React.forwardRef(({ isOpened }, ref) => (
  <div
    ref={ref}
    sx={{
      display: isOpened ? "flex" : "none",
      padding: 3,
      bg: "primary",
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
    <MenuButton
      path="/wiki"
      alt="It contains a series of documents that whose content don't fit the blog post format"
    >
      Wiki
    </MenuButton>
    <MenuButton
      path="/books"
      alt="This page contains the books that I read in the past, the one that I'm currently reading, and a list of books that I'm planning to read next"
    >
      Books
    </MenuButton>
  </div>
))

export default () => {
  const [isOpened, setIsOpened] = useState(false)
  const menuRef = useRef(null)
  const onClick = () => {
    setIsOpened(!isOpened)
    if (!isOpened) {
      menuRef.current.focus()
    }
  }
  return (
    <div sx={{ display: ["block", "block", "none"] }}>
      <Menu ref={menuRef} isOpened={isOpened} />
      <div
        sx={{ display: "flex", padding: 3, justifyContent: "space-between" }}
      >
        <Button onClick={onClick} />
        <ColorModeButton
          style={{
            width: 110,
            display: ["block", "block", "none"],
          }}
        />
      </div>
    </div>
  )
}
