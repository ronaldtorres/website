import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "rebass"

export default ({ px }) => {
  const {
    site: {
      siteMetadata: {
        links: { github, twitter },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          links {
            github
            twitter
          }
        }
      }
    }
  `)
  const feed = "/feed.xml"
  return (
    <footer style={{ flex: 1 }}>
      <Flex
        alignSelf="stretch"
        flexDirection="row"
        alignItems="flex-start"
        px={px}
        pb={3}
        pt={4}
      >
        <Box mr={1}>
          <a href={twitter} target="__blank">
            twitter
          </a>
        </Box>
        •
        <Box mx={1}>
          <a href={github} target="__blank">
            github
          </a>
        </Box>
        <Box flex={1} />
        <a href={feed} target="__blank">
          rss
        </a>
      </Flex>
    </footer>
  )
}
