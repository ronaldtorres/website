import React from "react"
import theme from "../../utils/theme"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import { display } from "styled-system"

const Button = () => {
  const stripeStyle = { height: "4px" }
  return (
    <Flex
      style={{ height: "30px", width: "30px" }}
      bg="white"
      flexDirection="column"
      alignItems="stretch"
      justifyContent="space-around"
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

export default () => {
  return (
    <StyledFlex px={3} pt={3} color="red" display={["block", "none", "none"]}>
      <Button />
    </StyledFlex>
  )
}
