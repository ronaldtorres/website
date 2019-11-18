/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import BodyMargin from "./shared/body-margin"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./shared/header"
import Footer from "./shared/footer"
import GlobalStyle from "../utils/global-style"

import "focus-visible"

const Layout = ({ children, withMargin = true }) => {
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

  let main
  if (withMargin) {
    main = (
      <BodyMargin>
        <main sx={{ py: [1, 5] }}>{children}</main>
      </BodyMargin>
    )
  } else {
    main = <main sx={{ py: [1, 5] }}>{children}</main>
  }

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={title} />
      {main}
      <Footer />
    </>
  )
}

export default Layout
