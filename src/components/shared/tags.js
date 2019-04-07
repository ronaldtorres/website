import React from "react"
import { Box, Flex } from "rebass"

export default ({ tags }) => {
  return (
    <Flex flexDirection="row" flexWrap="wrap">
      {tags.map((tag, index) => {
        return (
          <Box
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
          </Box>
        )
      })}
    </Flex>
  )
}
