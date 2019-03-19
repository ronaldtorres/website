import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./shared/header"
import theme from "../utils/theme"
import { Flex } from "rebass"
import GlobalStyle from "../utils/global-style"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Flex flexDirection="column" px={[2, 4]} py={[2, 4]}>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
              style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0,
              }}
            >
              <main>{children}</main>
              <footer>
                © {new Date().getFullYear()}, Built with ❤️ by Pedro Piñera
              </footer>
            </div>
          </Flex>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
