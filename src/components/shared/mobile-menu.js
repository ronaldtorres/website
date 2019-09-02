import React, { useState } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import { display } from "styled-system"
import { Link } from "gatsby"
const Button = ({ onClick }) => {
  const stripeStyle = { height: "4px" }
  return (
    <Flex
      style={{ height: "20px", width: "20px", cursor: "pointer" }}
      bg="white"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="space-around"
      onClick={onClick}
    >
      <Box bg="dark" style={stripeStyle} />
      <Box bg="dark" style={stripeStyle} />
      <Box bg="dark" style={stripeStyle} />
    </Flex>
  )
}

const StyledFlex = styled(Flex)`
  ${display}
`

const MenuButton = ({ path, alt, children }) => {
  const style = {
    color: "white",
  }
  return (
    <Box>
      <Link style={style} to={path} alt={alt}>
        {children}
      </Link>
    </Box>
  )
}

const Menu = () => {
  return (
    <Flex
      p={3}
      bg="dark"
      color="white"
      flexDirection="column"
      alignItems="center"
    >
      <MenuButton path="/" alt="Home page">
        Home
      </MenuButton>
      <MenuButton path="/about" alt="Read more about Pedro Piñera">
        About
      </MenuButton>
      <MenuButton
        path="/books"
        alt="Contains the books that Pedro has read with his personal review, and the book that he's currently reading"
      >
        Books
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
    </Flex>
  )
}

export default () => {
  const [isOpened, setIsOpened] = useState(false)
  const onClick = () => {
    setIsOpened(!isOpened)
  }
  return (
    <StyledFlex display={["block", "block", "none"]}>
      {isOpened && <Menu />}
      <Flex p={3}>
        <Button onClick={onClick} />
      </Flex>
    </StyledFlex>
  )
}
