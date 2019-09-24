import theme from "typography-theme-github"
import { toTheme } from "@theme-ui/typography"
import styledSystemTheme from "../utils/theme"

// Breakpoints
const breakpoints = ["40em", "52em", "64em", "80em"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

// Radii
const radii = [0, 4, 8, 16]

// Space
const space = [0, 4, 8, 16, 32, 64, 128]
space.small = space[1]
space.medium = space[2]
space.large = space[3]

// Font sizes
const fontSizes = [12, 14, 16, 20, 24, 32]
fontSizes.body = fontSizes[2]
fontSizes.display = fontSizes[5]

// Font weights
const fontWeights = {
  body: 400,
  heading: 700,
  bold: 700,
}

// Line heights
const lineHeights = {
  body: 1.5,
  heading: 1.125,
}

export default {
  ...toTheme(theme),
  breakpoints,
  radii,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  colors: {
    text: "#000",
    background: "#fff",
    accent: styledSystemTheme.colors.main,
    muted: "#e8e8e8",
    dark: styledSystemTheme.colors.dark,
  },
}
