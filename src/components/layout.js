import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./shared/header"
import Footer from "./shared/footer"
import theme from "../utils/theme"
import GlobalStyle from "../utils/global-style"
import styled from "styled-components"
import { space } from "styled-system"
import MobileMenu from "./shared/mobile-menu"

const Body = styled.div`
  ${space}
`

const Main = styled.main`
  ${space}
`

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const px = [15, 80, 150]
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>
          <Body>
            <MobileMenu />

            <Header siteTitle={title} px={px} />

            <Main py={[1, 4]} px={px}>
              {children}
            </Main>
          </Body>
          <Footer px={px} />
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
