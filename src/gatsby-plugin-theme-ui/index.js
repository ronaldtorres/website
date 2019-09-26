import theme from "typography-theme-github"
import { toTheme } from "@theme-ui/typography"
import prismTheme from "@theme-ui/prism/presets/night-owl.json"

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
    primary: "#7149c1",
    secondary: "#00a7e1",
    muted: "#a8a8a8",
    dark: "rgba(0, 0, 0, 0.8)",
    shopify: "#96bf48",
    ruby: "#ff2400",
    swift: "#FF621F",
    javascript: "#baaa1b",
    modes: {
      dark: {
        background: "#000",
        text: "#fff",
        muted: "#fefefe",
      },
    },
  },
  styles: {
    pre: {
      ...prismTheme,
      padding: 3,
      borderRadius: 2,
    },
    code: {
      fontSize: 1,
    },
  },
}
