import React from "react"
import { Flex, Text } from "rebass"

export default () => {
  return (
    <Flex
      bg="main"
      alignSelf="stretch"
      flexDirection="column"
      alignItems="center"
      px={2}
      py={3}
    >
      <footer style={{ flex: 1 }}>
        <Text color="white" fontSize={2}>
          © {new Date().getFullYear()}, Built with ️♥ by Pedro Piñera
        </Text>
      </footer>
    </Flex>
  )
}
