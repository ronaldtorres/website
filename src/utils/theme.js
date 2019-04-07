// https://styled-system.com
// Breakpoints
const breakpoints = ["40em", "52em", "64em", "80em"]
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

// Space
const space = [0, 4, 8, 16, 32, 64, 128]
space.small = space[1]
space.medium = space[2]
space.large = space[3]

// Font sizes
const fontSizes = [12, 14, 16, 20, 24, 32]
fontSizes.body = fontSizes[2]
fontSizes.display = fontSizes[5]

export default {
  breakpoints,
  space,
  fontSizes,
  colors: {
    shopify: "#96bf48",
    ruby: "#ff2400",
    swift: "#FF621F",
    javascript: "#baaa1b",
    main: "#7149c1",
    hover: "#76cdf2",
  },
}
