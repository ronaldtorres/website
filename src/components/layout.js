import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import Header from "./shared/header"
import Footer from "./shared/footer"
import theme from "../utils/theme"
import GlobalStyle from "../utils/global-style"
import styled from "styled-components"
import { space, width, display, flex } from "styled-system"
import MobileMenu from "./shared/mobile-menu"

const Body = styled.div`
  ${space}
  ${width}
`

const Main = styled.main`
  ${space}
  ${width}
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Body width={["100%", "100%", "52em", "64em"]}>
            <MobileMenu />

            <Header siteTitle={title} px={px} />

            <Main py={[1, 4]} px={px}>
              {children}
            </Main>
            <Footer px={px} style={{ flex: 1 }} />
          </Body>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
