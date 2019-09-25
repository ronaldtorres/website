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
  return (
    <>
      <GlobalStyle />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <body sx={{ width: ["100%", "100%", "52em", "64em"] }}>
          <MobileMenu />

          <Header siteTitle={title} sx={{ px: [15, 80, 150] }} />

          <main sx={{ py: [1, 4], px: [15, 80, 150] }}>{children}</main>
          <div sx={{ px: px }}>
            <Footer />
          </div>
        </body>
      </div>
    </>
  )
}

export default Layout
