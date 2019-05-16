import React, { useState } from "react"
import theme from "../../utils/theme"
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

const MenuButton = ({ path, children }) => {
  const style = {
    color: "white",
  }
  return (
    <Box>
      <Link style={style} to={path}>
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
      <MenuButton path="/about">About</MenuButton>
      <MenuButton path="/books">Books</MenuButton>
      <MenuButton path="/speaking">Speaking</MenuButton>
      <MenuButton path="/open-source">Open Source</MenuButton>
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
