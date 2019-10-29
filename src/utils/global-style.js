import React from "react"
import { Global } from "@emotion/core"

export default () => (
  <Global
    styles={theme => ({
      "h1, h2, h3, h4, h5, h6": {
        color: theme.colors.text,
        a: {
          color: theme.colors.secondary,
        },
      },
      ".header-anchor": {
        marginRight: "10px",
        fill: theme.colors.muted,
      },
      ".js-focus-visible :focus:not(.focus-visible)": {
        outline: "none",
      },
      ".js-focus-visible :focus:not([data-focus-visible-added])": {
        outline: "none",
      },
      body: {
        bg: theme.colors.background,
        color: theme.colors.text,
      },
      a: {
        color: theme.colors.secondary,
        backgroundImage: "none",
      },
      "a:focus": {
        textDecoration: "underline",
      },
      "::-moz-selection": {
        background: theme.colors.textSelection,
      },
      "::selection": {
        background: theme.colors.textSelection,
      },
      "pre[class*='language-']": {
        overflow: "auto",
      },
      "div[class*='token-line']": {
        overflowWrap: "normal",
      },
    })}
  />
)
