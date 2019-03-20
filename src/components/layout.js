import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./shared/header"
import Footer from "./shared/footer"
import theme from "../utils/theme"
import { Flex } from "rebass"
import GlobalStyle from "../utils/global-style"
import styled from "styled-components"
import { space } from "styled-system"

const Body = styled.div`
  ${space}
`

const Main = styled.main`
  ${space}
`

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
          <div>
            <Body px={[40, 200]} py={[2, 3]}>
              <Header siteTitle={data.site.siteMetadata.title} />
              <Main py={[3, 4]}>{children}</Main>
            </Body>
            <Footer />
          </div>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
