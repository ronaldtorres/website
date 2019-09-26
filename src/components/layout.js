/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./shared/header"
import Footer from "./shared/footer"
import GlobalStyle from "../utils/global-style"
import MobileMenu from "./shared/mobile-menu"

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
  const padding = {
    paddingLeft: [15, 80, 150],
    paddingRight: [15, 80, 150],
  }
  return (
    <>
      <GlobalStyle />

      <body
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div sx={{ width: ["100%", "100%", "52em", "64em"] }}>
          <MobileMenu />

          <Header siteTitle={title} sx={{ ...padding }} />

          <main sx={{ ...padding, py: [1, 4] }}>{children}</main>
          <div sx={{ ...padding }}>
            <Footer />
          </div>
        </div>
      </body>
    </>
  )
}

export default Layout
