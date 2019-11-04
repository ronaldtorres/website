import theme from "typography-theme-sutro"
import { toTheme } from "@theme-ui/typography"
import prismTheme from "@theme-ui/prism/presets/night-owl.json"
import Color from "color"

// Breakpoints
const breakpoints = ["40em", "52em", "64em", "80em"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

// Radii
const radii = [0, 4, 8, 16]

// Space
const space = [0, 4, 8, 16, 32, 64, 50]
space.small = space[1]
space.medium = space[2]
space.large = space[3]

// Font sizes
const fontSizes = [12, 14, 16, 20, 24, 32, 40, 56, 72]
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

const makeTheme = (primary, secondary) => {
  return {
    gradient0: Color(primary)
      .darken(0)
      .string(),
    gradient1: Color(primary)
      .darken(0.2)
      .string(),
    gradient2: Color(primary)
      .darken(0.4)
      .string(),
    gradient3: Color(primary)
      .darken(0.6)
      .string(),
    gradient4: Color(primary)
      .darken(0.8)
      .string(),
    gradient5: Color(primary)
      .darken(1.0)
      .string(),
    gradient6: Color(primary)
      .darken(1.2)
      .string(),
    gradient7: Color(primary)
      .darken(1.4)
      .string(),
    text: Color(primary)
      .darken(1.6)
      .string(),
    background: "#fff",
    primary: primary,
    secondary: secondary,
    muted: Color(secondary)
      .negate()
      .lighten(0.4)
      .string(),
  }
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
    ...makeTheme("#7149c1", "#007faa"),
    modes: {
      about: makeTheme("#00918e", "#4dd599"),
      journal: makeTheme("#e8647c", "#e8647c"),
      speaking: makeTheme("#71a95a", "#d1274b"),
      opensource: makeTheme("#d62196", "#6915cf"),
      wiki: makeTheme("#df4d19", "#e61c5d"),
      books: makeTheme("#951555", "#7971ea"),
    },
  },
  styles: {
    root: {
      color: "text",
    },
    pre: {
      ...prismTheme,
      padding: 3,
      borderRadius: 2,
    },
    code: {
      fontSize: [1, 1],
    },
    h1: {
      fontSize: [7, 8],
      lineHeight: lineHeights.heading,
    },
    h2: {
      fontSize: [4, 6],
      lineHeight: lineHeights.heading,
    },
    h3: {
      fontSize: [3, 5],
      lineHeight: lineHeights.heading,
    },
    h4: {
      fontSize: [2, 4],
      lineHeight: lineHeights.heading,
    },
  },
}
