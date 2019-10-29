/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./shared/header"
import Footer from "./shared/footer"
import GlobalStyle from "../utils/global-style"
import MobileMenu from "./shared/mobile-menu"
import "focus-visible"

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

  const px = [4, 5, 6]
  return (
    <>
      <GlobalStyle />{" "}
      <div
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div sx={{ width: ["100%", "100%", "52em", "64em"] }}>
          <MobileMenu />

          <Header siteTitle={title} sx={{ px: px }} />

          <main sx={{ px: px, py: [1, 4] }}>{children}</main>
          <div sx={{ px: px }}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
