import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export default createGlobalStyle`
  ::-moz-selection { background: ${theme.colors.hover}; }
  p::selection { color: ${theme.colors.hover} }
  a {
    text-decoration: none;
  }
`
