import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"

const UnselectableBox = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

export default ({ tags }) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap">
      {tags.map((tag, index) => {
        return (
          <UnselectableBox
            mr={2}
            px={2}
            my={2}
            key={index}
            bg="main"
            color="white"
            fontSize={1}
            style={{ borderRadius: "4px" }}
          >
            {tag}
          </UnselectableBox>
        )
      })}
    </Flex>
  )
}
