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

export default {
  ...toTheme(theme),
  breakpoints,
  radii,
  space,
  fontSizes,
  fontWeights,
  lineHeights,
  colors: {
    text: Color("#7149c1")
      .darken(0.7)
      .string(),
    background: "#fff",
    primary: "#7149c1",
    secondary: "#007faa",
    muted: Color("#007faa")
      .negate()
      .lighten(0.4)
      .string(),
    modes: {
      about: {
        text: Color("#00918e")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#00918e",
        secondary: "#4dd599",
        muted: Color("#4dd599")
          .negate()
          .lighten(0.9)
          .string(),
      },
      journal: {
        text: Color("#e8647c")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#e8647c",
        secondary: "#e8647c",
        muted: Color("#e8647c")
          .negate()
          .lighten(1.3)
          .string(),
      },
      speaking: {
        text: Color("#71a95a")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#71a95a",
        secondary: "#d1274b",
        muted: Color("#d1274b")
          .negate()
          .lighten(0.2)
          .string(),
      },
      opensource: {
        text: Color("#d62196")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#d62196",
        secondary: "#6915cf",
        muted: Color("#6915cf")
          .negate()
          .lighten(0.4)
          .string(),
      },
      wiki: {
        text: Color("#df4d19")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#df4d19",
        secondary: "#e61c5d",
        muted: Color("#e61c5d")
          .negate()
          .lighten(0.4)
          .string(),
      },
      books: {
        text: Color("#951555")
          .darken(0.7)
          .string(),
        background: "#fff",
        primary: "#951555",
        secondary: "#7971ea",
        muted: Color("#7971ea")
          .negate()
          .lighten(1.3)
          .string(),
      },
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
